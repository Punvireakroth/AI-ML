import { useEffect, useState, type FormEvent } from 'react'
import { pageFromHash, pages, trackerCheckboxKeys, type PageId } from './content'
import { MarkdownView } from './MarkdownView'
import { useProgress } from './progress'
import { MIGRATION_PATH } from './supabase'

export function App() {
  const [pageId, setPageId] = useState<PageId>(() => pageFromHash(window.location.hash))
  const [navOpen, setNavOpen] = useState(false)
  const { checks } = useProgress()
  const done = trackerCheckboxKeys.filter((key) => checks[key]).length
  const page = pages.find((item) => item.id === pageId) ?? pages[0]!

  useEffect(() => {
    const onHash = () => setPageId(pageFromHash(window.location.hash))
    window.addEventListener('hashchange', onHash)
    if (!window.location.hash) window.history.replaceState(null, '', '#/home')
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.querySelector('.content')?.scrollTo(0, 0)
  }, [pageId])

  return (
    <div className="shell">
      <header className="topbar">
        <button type="button" className="menu" aria-expanded={navOpen} onClick={() => setNavOpen((open) => !open)}>
          Pages
        </button>
        <span>{page.title}</span>
      </header>
      <aside className={navOpen ? 'sidebar open' : 'sidebar'}>
        <div className="workspace">AI/ML prep</div>
        <nav>
          {pages.map((item) => (
            <a
              key={item.id}
              href={`#/${item.id}`}
              aria-current={item.id === pageId ? 'page' : undefined}
              onClick={() => setNavOpen(false)}
            >
              <span>{item.title}</span>
              {item.id === 'tracker' && (
                <span className="count">
                  {done}/{trackerCheckboxKeys.length}
                </span>
              )}
            </a>
          ))}
        </nav>
        <Account />
      </aside>
      {navOpen && <button type="button" className="scrim" aria-label="Close pages" onClick={() => setNavOpen(false)} />}
      <main className="content">
        <MarkdownView source={page.markdown} />
      </main>
    </div>
  )
}

function Account() {
  const { configured, email, statusText, signIn, signUp, signOut } = useProgress()
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent, mode: 'in' | 'up') {
    event.preventDefault()
    if (password.length < 6) {
      setMessage('Use a password of at least 6 characters.')
      return
    }
    setBusy(true)
    setMessage(null)
    const error = mode === 'in' ? await signIn(address, password) : await signUp(address, password)
    setMessage(error)
    setBusy(false)
    if (!error && mode === 'in') setPassword('')
  }

  if (!configured) {
    return (
      <div className="account">
        <p className="status">On this browser</p>
        <p className="hint">
          Copy <code>.env.example</code> to <code>.env</code>, add your project URL and publishable key, run{' '}
          <code>{MIGRATION_PATH}</code> in the SQL editor, then restart the dev server.
        </p>
      </div>
    )
  }

  if (email) {
    return (
      <div className="account">
        <p className="who">{email}</p>
        <p className={statusText === 'Synced' || statusText === 'Saving' ? 'status' : 'status warn'}>{statusText}</p>
        <button type="button" onClick={() => void signOut()}>
          Sign out
        </button>
      </div>
    )
  }

  return (
    <form className="account" onSubmit={(event) => void submit(event, 'in')}>
      <p className="status">Sign in to sync</p>
      <label>
        Email
        <input
          type="email"
          autoComplete="username"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      {message && <p className="hint">{message}</p>}
      <div className="account-actions">
        <button type="submit" disabled={busy}>
          Sign in
        </button>
        <button type="button" disabled={busy} onClick={(event) => void submit(event, 'up')}>
          Create account
        </button>
      </div>
    </form>
  )
}
