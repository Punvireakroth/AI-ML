# AI/ML prep

One page for the work before a master's in artificial intelligence and machine learning. The plan, the materials, and your progress sit together.

It is written for a working software engineer who writes Python in core banking, has little or no machine learning background, and has seen the math before. The aim is to walk into a first-semester machine learning course able to follow the lectures, do the problem sets, and read a methods section.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173. Until Supabase is connected, ticks and notes stay in this browser.

To sync them to your project:

1. Copy `.env.example` to `.env`.
2. Paste the project URL and the publishable key (`sb_publishable_...`). Leave the secret key in the dashboard.
3. In the Supabase SQL editor, run `supabase/migrations/20261011050940_study_progress.sql`.
4. Restart `npm run dev`, then create an account from the account control at the top of the page.

Email confirmation is on by default. For a personal project, turn off Confirm email under Authentication settings, or set the site URL to `http://localhost:5173` so the confirmation link can return to the page.

## How the page works

[plan.md](plan.md) is the whole plan. A heading like `### Gradient descent in one dimension · 3 hours` is a required task. The same heading with `· Optional` at the end is extra work and has no deadline. Materials, links, and the three builds live inside the tasks that use them.

Set a start date and how many hours you can study each week. The page gives each required task a due date, in order. It also shows how far behind or ahead you are, and a projected finish date. For the first week the projection uses the hours per week you set. After that it uses the hours you actually complete.

A target date is optional. If the projection misses it, the page tells you how many hours a week would hit it.

**Reset deadlines from today** leaves finished tasks checked and schedules the remaining required tasks from today.

Check a task when the work exists: a submitted lab, a plot, a notebook section, or two sentences you wrote with the notes closed. The self-test at the bottom records whether you can say each item from memory.

Coursera still calls its modules Week 1, Week 2, and so on. Those names in the plan are Coursera module names.

Prices and course editions were checked in October 2026. Check the enroll page before you subscribe.
