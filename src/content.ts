import readme from '../README.md?raw'
import roadmap from '../01-roadmap.md?raw'
import resources from '../02-resources.md?raw'
import schedule from '../03-weekly-schedule.md?raw'
import tracker from '../04-progress-tracker.md?raw'
import { parseMarkdown } from './markdown'

export type PageId = 'home' | 'roadmap' | 'resources' | 'schedule' | 'tracker'

export const pages: { id: PageId; title: string; markdown: string }[] = [
  { id: 'home', title: 'Home', markdown: readme },
  { id: 'roadmap', title: 'Roadmap', markdown: roadmap },
  { id: 'resources', title: 'Resources', markdown: resources },
  { id: 'schedule', title: 'Schedule', markdown: schedule },
  { id: 'tracker', title: 'Tracker', markdown: tracker },
]

const fileToPage: Record<string, PageId> = {
  'README.md': 'home',
  '01-roadmap.md': 'roadmap',
  '02-resources.md': 'resources',
  '03-weekly-schedule.md': 'schedule',
  '04-progress-tracker.md': 'tracker',
}

export function pageForHref(href: string): PageId | null {
  const file = href.split('/').pop() ?? href
  return fileToPage[file] ?? null
}

export function pageFromHash(hash: string): PageId {
  const id = hash.replace(/^#\/?/, '')
  return pages.some((page) => page.id === id) ? (id as PageId) : 'home'
}

export const trackerCheckboxKeys = parseMarkdown(tracker)
  .flatMap((block) => (block.type === 'list' ? block.items : []))
  .flatMap((item) => (item.kind === 'todo' && item.key ? [item.key] : []))
