import planSource from '../plan.md?raw'
import { parsePlan } from './markdown'

export const plan = parsePlan(planSource)

export function taskKey(id: string): string {
  return `task:${id}`
}

export function checkNoteKey(id: string): string {
  return `task:${id}:check`
}

export const requiredTasks = plan.sections.flatMap((section) => section.tasks.filter((task) => !task.optional))

export const allTasks = plan.sections.flatMap((section) => section.tasks)
