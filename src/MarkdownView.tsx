import type { ReactNode } from 'react'
import { pageForHref } from './content'
import { inlineText, parseMarkdown, type Block, type Inline } from './markdown'
import { useProgress } from './progress'

const phases = ['Setup', 'Math', 'Core ML', 'Neural nets', 'Readiness']

function Inlines({ nodes }: { nodes: Inline[] }) {
  return (
    <>
      {nodes.map((node, index) => {
        if (node.type === 'text') return <span key={index}>{node.text}</span>
        if (node.type === 'code') return <code key={index}>{node.text}</code>
        if (node.type === 'strong')
          return (
            <strong key={index}>
              <Inlines nodes={node.children} />
            </strong>
          )
        if (node.type === 'em')
          return (
            <em key={index}>
              <Inlines nodes={node.children} />
            </em>
          )
        const page = pageForHref(node.href)
        if (page) {
          return (
            <a key={index} href={`#/${page}`}>
              <Inlines nodes={node.children} />
            </a>
          )
        }
        return (
          <a key={index} href={node.href} target="_blank" rel="noreferrer">
            <Inlines nodes={node.children} />
          </a>
        )
      })}
    </>
  )
}

function PhaseFlow() {
  return (
    <div className="flow" aria-label="Study phases">
      {phases.map((phase, index) => (
        <span key={phase} className="flow-step">
          {index > 0 && <span className="flow-arrow">→</span>}
          <span>{phase}</span>
        </span>
      ))}
    </div>
  )
}

export function MarkdownView({ source }: { source: string }) {
  const blocks = parseMarkdown(source)
  const { checks, notes, toggleCheck, setNote } = useProgress()
  const readiness = blocks.filter((block) => block.type === 'readiness')
  const fromMemory = readiness.filter((block) => notes[`readiness:${block.id}:status`] === 'memory').length

  return (
    <article className="page">
      {blocks.map((block, index) => (
        <BlockView
          key={index}
          block={block}
          checks={checks}
          notes={notes}
          fromMemory={fromMemory}
          readinessTotal={readiness.length}
          onToggle={toggleCheck}
          onNote={setNote}
        />
      ))}
    </article>
  )
}

function BlockView({
  block,
  checks,
  notes,
  fromMemory,
  readinessTotal,
  onToggle,
  onNote,
}: {
  block: Block
  checks: Record<string, boolean>
  notes: Record<string, string>
  fromMemory: number
  readinessTotal: number
  onToggle: (key: string) => void
  onNote: (key: string, body: string) => void
}) {
  if (block.type === 'heading') {
    const Tag = `h${block.level}` as 'h1' | 'h2' | 'h3'
    const showScore = block.level === 2 && inlineText(block.children) === 'Day-1 readiness'
    return (
      <>
        <Tag>
          <Inlines nodes={block.children} />
        </Tag>
        {showScore && (
          <p className="score">
            From memory: {fromMemory} of {readinessTotal}
          </p>
        )}
      </>
    )
  }

  if (block.type === 'paragraph') {
    return (
      <p>
        <Inlines nodes={block.children} />
      </p>
    )
  }

  if (block.type === 'code') {
    if (block.lang === 'mermaid') return <PhaseFlow />
    return (
      <pre>
        <code>{block.text}</code>
      </pre>
    )
  }

  if (block.type === 'table') {
    return (
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {block.headers.map((cell, index) => (
                <th key={index}>
                  <Inlines nodes={cell} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    <Inlines nodes={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (block.type === 'list') {
    return <ItemList items={block.items} ordered={block.ordered} checks={checks} onToggle={onToggle} />
  }

  if (block.type === 'week') {
    return (
      <section className="week">
        <h3>Week {block.week}</h3>
        {block.fields.map((field) => (
          <label key={field.key} className="field">
            <span>{field.label}</span>
            {field.multiline ? (
              <textarea
                rows={2}
                placeholder={field.hint}
                value={notes[field.key] ?? ''}
                onChange={(event) => onNote(field.key, event.target.value)}
              />
            ) : (
              <input
                value={notes[field.key] ?? ''}
                onChange={(event) => onNote(field.key, event.target.value)}
              />
            )}
          </label>
        ))}
      </section>
    )
  }

  const status = notes[`readiness:${block.id}:status`] ?? ''
  const answerKey = `readiness:${block.id}:answer`
  return (
    <section className="readiness">
      <h3>
        {block.id}. <Inlines nodes={block.title} />
      </h3>
      {block.lines.map((line, index) => (
        <p key={index} className="restudy">
          <Inlines nodes={line} />
        </p>
      ))}
      <div className="pills" role="radiogroup" aria-label={`Status for ${inlineText(block.title)}`}>
        <Pill
          pressed={status === 'memory'}
          onClick={() => onNote(`readiness:${block.id}:status`, status === 'memory' ? '' : 'memory')}
        >
          From memory
        </Pill>
        <Pill
          pressed={status === 'notes'}
          onClick={() => onNote(`readiness:${block.id}:status`, status === 'notes' ? '' : 'notes')}
        >
          With notes
        </Pill>
        <Pill
          pressed={status === 'later'}
          onClick={() => onNote(`readiness:${block.id}:status`, status === 'later' ? '' : 'later')}
        >
          Not yet
        </Pill>
      </div>
      <textarea
        className="answer"
        rows={2}
        placeholder="Two sentences, notes closed"
        value={notes[answerKey] ?? ''}
        onChange={(event) => onNote(answerKey, event.target.value)}
      />
    </section>
  )
}

function Pill({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button type="button" className="pill" aria-pressed={pressed} onClick={onClick}>
      {children}
    </button>
  )
}

function ItemList({
  items,
  ordered,
  checks,
  onToggle,
}: {
  items: { kind: string; key?: string; children: Inline[] }[]
  ordered: boolean
  checks: Record<string, boolean>
  onToggle: (key: string) => void
}) {
  const todos = items.every((item) => item.kind === 'todo')
  if (todos) {
    return (
      <div className="todos">
        {items.map((item) => {
          const key = item.key ?? ''
          const done = checks[key] ?? false
          return (
            <label key={key} className={done ? 'todo done' : 'todo'}>
              <input type="checkbox" checked={done} onChange={() => onToggle(key)} />
              <span>
                <Inlines nodes={item.children} />
              </span>
            </label>
          )
        })}
      </div>
    )
  }

  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag>
      {items.map((item, index) => (
        <li key={index}>
          <Inlines nodes={item.children} />
        </li>
      ))}
    </Tag>
  )
}
