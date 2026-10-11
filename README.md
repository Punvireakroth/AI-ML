# AI/ML prep for a master's, in 12 weeks

This folder is a self-study kit for the twelve weeks before a master's in artificial intelligence and machine learning. It is written for a working software engineer who ships Python in core banking, has little or no machine-learning background, and has seen the underlying math before and needs it to come back.

The aim is narrow: walk into a first-semester machine learning course able to follow the lectures, do the problem sets, and read a methods section. A first-semester course usually opens with linear models, generalization, trees, and a first neural network. This plan is built for that course. Deep learning, language models, and production ML stay in a stretch lane so the foundations actually finish.

## Time budget

Plan on about **8 hours a week** for 12 weeks (around 96 hours). The core lane is about **6 hours a week** (around 72 hours). The other two hours are stretch.

| Your real week | What to do |
| --- | --- |
| About 8 hours | Core, then stretch, in the order written in the schedule. |
| About 5 hours | Core only. Drop the stretch list for that week. |
| Under 5 hours | Use the short list in [01-roadmap.md](01-roadmap.md). Finish the gradient-descent exercise, Course 1, and the credit project before anything else. |

A week is your next seven days. If you miss one, shift the later weeks forward. Stacking two weeks into one is how this plan dies.

## How to use the files

Read this page once. Then work from the schedule, and tick the tracker as you go.

- [01-roadmap.md](01-roadmap.md) — five phases, the outcome of each, and the specs for the three things you will build.
- [02-resources.md](02-resources.md) — what to use, what it costs, how long it takes here, and what to leave for the degree.
- [03-weekly-schedule.md](03-weekly-schedule.md) — the twelve weeks, in order. This is the file you open on a study day.
- [04-progress-tracker.md](04-progress-tracker.md) — checkboxes, weekly notes, and the day-1 self-test.

Suggested rhythm: two weekday blocks of about 90 minutes, plus one weekend block of 3 to 4 hours for labs and coding. Do the core list before the stretch list. Finish the lab that is open before you start a new video.

## Core lane and stretch lane

**Core** is the work that makes the first semester legible:

1. A short math refresher (linear algebra, derivatives, probability).
2. Andrew Ng's Machine Learning Specialization, Course 1 and Course 2, including the graded labs.
3. Aurélien Géron, *Hands-On Machine Learning with Scikit-Learn and PyTorch* (October 2025), chapters 1–4, read alongside the code notebooks.
4. Three small builds: gradient descent in NumPy, a credit-default model, and a tiny neural net written out by hand.

**Stretch** is what you add when the core list for the week is done: Course 3 (unsupervised learning, recommenders, reinforcement learning), fast.ai lessons 1–3, Géron chapter 10 (PyTorch), and a second, easier paper. Stretch topics are real. They are also the first things to drop when a week runs long.

## What to pay for

Pay for one thing on purpose, and optionally a second.

1. **Coursera (or DeepLearning.AI) for the Machine Learning Specialization, for about two months.** Subscribe at the start of week 4. Cancel after Course 2 unless you are continuing into Course 3. As of October 2026, Coursera's own FAQ says this specialization is not a free course. Graded labs and the certificate require a subscription. Reviews in 2026 quoted Coursera Plus around $49–59 per month, sometimes less on a promotion or an annual plan, and DeepLearning.AI has offered a membership that includes the same specialization. Confirm the live price on the enroll page. Financial aid is linked from the course page; apply in week 1 if you need it, because review takes time. The graded labs are the part this plan depends on. The certificate is optional.
2. **Géron's book, if you want a permanent reference.** The notebooks are free either way, so you can start without the book. Buy the October 2025 edition, *Hands-On Machine Learning with Scikit-Learn and PyTorch*. Earlier editions are built on TensorFlow. An O'Reilly subscription you already have covers it.

Everything else in the core lane is free: 3Blue1Brown, Khan Academy, StatQuest, the *Mathematics for Machine Learning* PDF, and Kaggle Learn.

A third purchase, the DeepLearning.AI math specialization, is a replacement for Phase 1 if the free refresher does not stick. It is too large to take on top of this calendar. Details are in [02-resources.md](02-resources.md).

If you cannot pay and financial aid does not come through, use the library lane in that same file. The three builds stay mandatory.

## What "ready" feels like

Before classes start you can do these without notes:

- Explain gradient descent, overfitting, regularization, cross-validation, precision and recall, and the bias-variance tradeoff in a few sentences.
- Say what a single neuron computes, and where the chain rule shows up when a network trains.
- Train a scikit-learn model on a tabular dataset, hold out a test set, and pick a metric that matches a business error.
- Read the abstract and the algorithm box of a short machine-learning paper.

The full self-test is in [04-progress-tracker.md](04-progress-tracker.md).

Prices, audit rules, and course editions were checked in October 2026. Recheck the enroll page before you subscribe.

## Study page

The same notes are also a local page with a sidebar, checkboxes, and the weekly log.

```bash
npm install
npm run dev
```

Open http://localhost:5173. Until Supabase is connected, ticks and notes stay in this browser.

To sync them to your project:

1. Copy `.env.example` to `.env`.
2. Paste the project URL and the publishable key (`sb_publishable_...`). Leave the secret key in the dashboard.
3. In the Supabase SQL editor, run `supabase/migrations/20261011050940_study_progress.sql`.
4. Restart `npm run dev`, then create an account in the sidebar.

Email confirmation is on by default. For a personal project, turn off Confirm email under Authentication settings, or set the site URL to `http://localhost:5173` so the confirmation link can return to the page.
