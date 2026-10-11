# Resources

Checked in October 2026. Recheck prices and enroll buttons before you pay. Each entry says what it costs, how much of it this plan uses, why it is here, and when to skip it.

The schedule in [03-weekly-schedule.md](03-weekly-schedule.md) is the order. This file is the shelf.

## Environment

### Python 3.12, a virtualenv, and Jupyter

- **Link:** [python.org](https://www.python.org/downloads/) and the commands in [01-roadmap.md](01-roadmap.md)
- **Cost:** Free
- **Time:** 90 minutes, then stop
- **Why:** The three builds and the Géron notebooks run on your machine. Coursera labs run in Coursera's environment, so a perfect local install is not a prerequisite for weeks 4–10.
- **Skip if:** `python3 --version` is already 3.10 or newer and you can start Jupyter. Use that interpreter.

### Google Colab

- **Link:** [colab.research.google.com](https://colab.research.google.com/)
- **Cost:** Free
- **Time:** 15 minutes to learn "upload a notebook and run the first cell"
- **Why:** The fallback when a local install is still broken at the 90-minute mark. Also a fine place to run the Géron notebooks; the [handson-mlp README](https://github.com/ageron/handson-mlp) links Colab.
- **Skip if:** Local Jupyter already runs.

### Kaggle account

- **Link:** [kaggle.com](https://www.kaggle.com/)
- **Cost:** Free
- **Time:** 10 minutes
- **Why:** Kaggle Learn drills, and the credit dataset, require an account.
- **Skip if:** You already have one.

### NumPy absolute beginner tutorial

- **Link:** [NumPy absolute beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)
- **Cost:** Free
- **Time:** 45–60 minutes in week 1
- **Why:** Week 3 is a NumPy implementation. You want arrays, shapes, and vectorized arithmetic in your hands before that.
- **Alternative:** the first half of `tools_numpy.ipynb` in the Géron repo.
- **Skip if:** You already write vectorized NumPy at work.

### Kaggle Learn: Pandas

- **Link:** [kaggle.com/learn/pandas](https://www.kaggle.com/learn/pandas)
- **Cost:** Free
- **Time:** About 2 hours if pandas is occasional; one lesson if it is a daily tool
- **Why:** The credit file needs selection, summaries, and missing values. Do lessons 1, 2, and 5 ("Creating, Reading and Writing", "Indexing, Selecting & Assigning", "Data Types and Missing Values").
- **Skip if:** You load CSVs and fill or flag missing values without looking anything up. Spend the hour on NumPy.

## Math refresher (Phase 1)

### 3Blue1Brown, Essence of Linear Algebra

- **Link:** [Playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) and the [topic page](https://www.3blue1brown.com/topics/linear-algebra)
- **Cost:** Free
- **Time:** About 5 hours for six episodes
- **Why:** The geometric picture behind the objects ML lectures name. Watch these, in this order:
  1. Vectors
  2. Linear combinations, span, and basis vectors
  3. Linear transformations and matrices
  4. Matrix multiplication as composition
  5. Dot products and duality (episode 9 in the full series)
  6. Eigenvectors and eigenvalues (episode 14). Watch for the `Av = λv` picture. The full derivation can wait.
- **Skip if:** You can multiply a small matrix by hand and explain an eigenvector without notes. Move the hours to the gradient-descent exercise.

### 3Blue1Brown, Essence of Calculus

- **Link:** [Playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) and the [topic page](https://www.3blue1brown.com/topics/calculus)
- **Cost:** Free
- **Time:** About 2.5 hours
- **Why:** Derivative as slope, then the chain rule, which is the entire idea of backpropagation. Watch the first four episodes: "The essence of calculus", "The paradox of the derivative", "Derivative formulas through geometry", and "Visualizing the chain rule and product rule".
- **Skip if:** You can differentiate `(x - 3) ** 2` and state the chain rule from memory.

### Khan Academy, partial derivatives and the gradient

- **Link:** [Multivariable derivatives](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives)
- **Cost:** Free
- **Time:** About 1 hour
- **Why:** The calculus series above is single-variable. Gradient descent needs a partial derivative and the gradient vector. Watch the partial-derivative introduction and the gradient video in that unit.
- **Skip if:** You can compute `∂/∂w` of a simple two-variable function and say which way the gradient points.

### Khan Academy, statistics and probability

- **Link:** [Statistics and probability](https://www.khanacademy.org/math/statistics-probability)
- **Cost:** Free
- **Time:** About 2 hours, plus the 20-minute Bayes exercise in the roadmap
- **Why:** Mean and variance, conditional probability, Bayes' theorem, and the normal distribution are the vocabulary of the first probability lecture. Stay inside those four topics.
- **Skip if:** You can complete the roadmap's Bayes exercise without rereading the formula, and you can sketch a Gaussian and mark its mean.

### StatQuest, selected videos

- **Link:** [YouTube channel](https://www.youtube.com/@statquest)
- **Cost:** Free
- **Time:** 10–20 minutes per video, as a second explanation
- **Why:** Josh Starmer is the best "say it again in plainer words" source when a Coursera lecture does not land. Search these titles on the channel:
  - Phase 1: "Bayes' Theorem", "The Normal Distribution, Clearly Explained"
  - During Course 1: "Gradient Descent, Step-by-Step", "Linear Regression", "Logistic Regression", "Regularization Part 1: Ridge"
  - During the credit project: "ROC and AUC", "Cross Validation"
  - During Course 2: "Bias and Variance", "Decision Trees"
- **Skip if:** The primary lecture already made sense. These are a second voice when a lecture did not land.

### Mathematics for Machine Learning (Deisenroth, Faisal, Ong)

- **Link:** [Book site](https://mml-book.github.io/) and the [free PDF](https://mml-book.github.io/book/mml-book.pdf)
- **Cost:** Free PDF; the print edition is optional
- **Time:** Use it as a reference. Budget 2–3 hours across the stretch lane.
- **Why:** The standard bridge between math courses and ML. In this plan, use only:
  - Chapter 2, Linear Algebra, sections 2.1–2.5, in week 2 if you want a written source next to the videos
  - Chapter 6, Probability and Distributions, sections 6.2–6.5, in week 3
  - Chapter 5, Vector Calculus, sections 5.1, 5.2, and 5.6, in week 9. Section 5.6 is backpropagation written as calculus.
- **Skip if:** The videos plus the two exercises are enough to follow Course 1. Keep the PDF for the week a lecture uses a symbol you cannot name.

### Paid alternative: Mathematics for Machine Learning and Data Science

- **Link:** [Coursera specialization](https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science/) (DeepLearning.AI, Luis Serrano)
- **Cost:** Paid, same subscription family as the ML specialization. Confirm the current price.
- **Time:** About 11 weeks at 5 hours a week. That is this entire prep calendar by itself.
- **Why:** A graded, Python-based path through linear algebra, calculus, and probability, if videos and drills are not sticking.
- **Use it this way:** It replaces Phase 1. If you switch to it, the rest of this plan shrinks to Course 1, the credit project, and the day-1 self-test. Adding it on top of the free refresher will consume the calendar.
- **Skip if:** You can finish the week-3 Bayes exercise and the gradient-descent plots. That is the bar.

A heavier cousin, Imperial College's [Mathematics for Machine Learning](https://www.coursera.org/specializations/mathematics-machine-learning), is more formal. Leave it for the term if a proof-based math course shows up on your transcript. Taking both math specializations during these 12 weeks will crowd out the actual ML.

## The core course

### Machine Learning Specialization

- **Links:** [Coursera](https://www.coursera.org/specializations/machine-learning-introduction) and [DeepLearning.AI](https://www.deeplearning.ai/specializations/machine-learning)
- **Cost:** Paid. As of October 2026 the Coursera FAQ says you cannot take this specialization free. Budget about two months of access, roughly the $49–59/month range quoted for Coursera Plus in 2026, sometimes less on promotion, on an annual plan, or via a DeepLearning.AI membership. Confirm the live price. Financial aid is on the course page; apply in week 1 if you need it.
- **Time:** DeepLearning.AI's own pace is 5 hours a week: 3 weeks for Course 1 (about 15 hours), 4 weeks for Course 2 (about 20 hours), 3 weeks for Course 3 (about 15 hours).
- **Why:** Still the clearest first course in the field. Intuition, then code, with the heavier math in optional videos. The current version uses Python: NumPy, scikit-learn, and TensorFlow.
- **In this plan:** Course 1 and Course 2 are core. Course 3 is stretch. Subscribe at the start of week 4. Cancel after Course 2 unless you are continuing.

### Course 1 — Supervised Machine Learning: Regression and Classification

- **Link:** [coursera.org/learn/machine-learning](https://www.coursera.org/learn/machine-learning)
- **Time in this plan:** Weeks 4–6, about 5 hours each week. That matches DeepLearning.AI's published pace for the course.
- **Why:** Linear regression, gradient descent, logistic regression, overfitting, regularization, and the two practice labs (linear regression in week 2, logistic regression in week 3).
- **Do:** Every practice quiz and both labs.
- **Leave for later:** "Conversations with Andrew."
- **Skip if:** You have nothing to skip. This course is the spine of Phase 2.

### Course 2 — Advanced Learning Algorithms

- **Link:** [coursera.org/learn/advanced-learning-algorithms](https://www.coursera.org/learn/advanced-learning-algorithms)
- **Time in this plan:** Weeks 8–11, about 16 hours against a published 20. The gap is the AGI segment, the conversation videos, and slightly faster playback. Python labs go quicker when you already write Python.
- **Why:** Neurons, training, backpropagation, bias and variance, the development process, decision trees, and ensembles.
- **Required even though Coursera marks them optional:**
  - Week 2, the backpropagation video
  - Week 3, the skewed-datasets video
- **Leave for later:** "Speculations on artificial general intelligence" and "Conversations with Andrew."
- **Skip if:** You would be skipping the part of the degree this plan exists to prepare. If the clock runs out, keep Week 1 and Week 3, then the NumPy network.

### Course 3 — Unsupervised Learning, Recommenders, Reinforcement Learning

- **Link:** [coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning](https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning)
- **Cost:** Included while the specialization subscription is active
- **Time:** About 15 hours at the published pace. In this plan it is stretch, and Week 1 is the part worth doing first.
- **Why:** Clustering and anomaly detection show up constantly around fraud and operations. Recommenders and reinforcement learning are a map of the territory, useful before a course that assumes you have heard the words.
- **Skip if:** Course 2 labs or the NumPy network are unfinished. Those outrank Course 3.

## Practical machine learning

### Hands-On Machine Learning with Scikit-Learn and PyTorch

- **Links:** [Book page](https://www.oreilly.com/library/view/hands-on-machine-learning/9798341607972/) and [author site](https://ageron.github.io/)
- **Cost:** Paid book. Notebooks are free, so the code is available before you buy.
- **Edition:** October 2025, *Hands-On Machine Learning with Scikit-Learn and PyTorch*. The older repository [ageron/handson-ml3](https://github.com/ageron/handson-ml3) is the TensorFlow/Keras edition. Use [ageron/handson-mlp](https://github.com/ageron/handson-mlp) with the 2025 book.
- **Time in this plan:** About 5 hours for chapters 1–4
- **Why:** The best "here is the whole project, in code" companion to Course 1. Course 1 teaches the algorithm. Géron teaches the workflow: splits, pipelines, leakage, metrics.
- **Depth:** Read the chapter, run the notebook top to bottom, do one exercise. The notebooks:
  - `01_the_machine_learning_landscape.ipynb`
  - `02_end_to_end_machine_learning_project.ipynb`
  - `03_classification.ipynb`
  - `04_training_linear_models.ipynb`
- **Also in that repo, when you want them:** `tools_numpy.ipynb`, `tools_pandas.ipynb`, `math_linear_algebra.ipynb`, `math_differential_calculus.ipynb`. On macOS, SSL errors while downloading the housing dataset are covered in the repo README.
- **Stretch:** Chapter 10, `10_neural_nets_with_pytorch.ipynb`, through the autograd linear-regression section. Chapters 5 and 6 (trees and ensembles) are the right skim if you want a second pass after Course 2, Week 4.
- **Skip if:** You are behind on a Coursera lab. Géron slides; the lab does not. You can follow the notebooks without owning the book for the whole 12 weeks, and buy the book when you want the prose as a permanent reference.

### Kaggle Learn: Intro to Machine Learning

- **Link:** [kaggle.com/learn/intro-to-machine-learning](https://www.kaggle.com/learn/intro-to-machine-learning)
- **Cost:** Free
- **Time:** The course itself is about 3 hours. This plan budgets 2, split across weeks 5 and 6. Work in order and stop when the hour is gone. The credit project is the full drill.
- **Why:** Short, enforced practice with scikit-learn: fit a model, validate, submit a prediction. It keeps your hands moving between Course 1 lectures.
- **Skip if:** A Course 1 lab is still open. Finish the lab, then come back. The credit project covers the same muscles at a higher standard.

### Kaggle Learn: Intermediate Machine Learning

- **Link:** [kaggle.com/learn/intermediate-machine-learning](https://www.kaggle.com/learn/intermediate-machine-learning)
- **Cost:** Free
- **Time:** Stretch, about 2 hours on the missing-value and pipeline lessons
- **Why:** Directly useful the week you clean the credit file.
- **Skip if:** The credit notebook already has a clean train/validation/test split and a fitted pipeline.

### The credit dataset

- **Link:** [Give Me Some Credit](https://www.kaggle.com/competitions/GiveMeSomeCredit/data)
- **Cost:** Free, after you accept the competition rules
- **Time:** About 5 hours, spec in the roadmap
- **Why:** Binary classification, missing values, a low positive rate, and a decision you already understand from core banking.
- **Backup:** [Credit Card Fraud Detection](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud), if the competition download is blocked.

## Stretch: neural nets in public

### 3Blue1Brown, neural network series

- **Link:** [Playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) and the [topic page](https://www.3blue1brown.com/topics/neural-networks)
- **Cost:** Free
- **Time:** About 2 hours for the episodes this plan assigns
- **Why:** The best visual account of the chain rule inside a network. Watch:
  - "Gradient descent, how neural networks learn", in week 3, before you code the 1D exercise
  - "Backpropagation" and "Backpropagation calculus", in week 9, next to Course 2, Week 2
  - "But what is a neural network?", in week 9 if the Course 2 intuition lecture did not stick
- **Skip if:** You can already draw a two-layer network and point at the step where the loss changes a first-layer weight.

### fast.ai, Practical Deep Learning for Coders, lessons 1–3

- **Link:** [course.fast.ai](https://course.fast.ai/)
- **Cost:** Free
- **Time:** Each lesson is roughly 90–120 minutes of video plus a notebook. Three lessons are a large stretch (about 8–10 hours), spread across weeks 9–12.
- **Why:** A top-down look at training, deploying, and the foundations, using PyTorch, fastai, and Hugging Face. It answers "what does modern practice look like?" after Course 2 has answered "what is actually being computed?"
- **If you watch only one:** Lesson 3, neural-net foundations, after Course 2, Week 2.
- **Skip if:** The NumPy network is unfinished. fast.ai part 2 is out of scope; it assumes you already train models from scratch and build your own training loop on purpose.

### Géron chapter 10 (PyTorch)

- **Link:** `10_neural_nets_with_pytorch.ipynb` in [ageron/handson-mlp](https://github.com/ageron/handson-mlp)
- **Cost:** Free notebook; the chapter prose is in the paid book
- **Time:** Stretch, 2–3 hours to reach the autograd linear-regression section
- **Why:** Puts PyTorch tensors and automatic differentiation next to the derivatives you just wrote by hand.
- **Skip if:** You are still writing the backward pass in NumPy. Do that first. The contrast is the point of the chapter, and it only works after the hand-written version.

## Reading a paper

### Adam: A Method for Stochastic Optimization

- **Link:** [arXiv:1412.6980](https://arxiv.org/abs/1412.6980)
- **Cost:** Free
- **Time:** 2.5 hours in week 12, then stop
- **Why:** Short, famous, and glued to the gradient descent you implemented. The reading method is in the roadmap: abstract, Algorithm 1, five sentences, then only the paragraphs those sentences could not cover.
- **Skip if:** You are still finishing the self-test. The paper is how you practice reading. The self-test is what your courses will assume.

### A Few Useful Things to Know about Machine Learning

- **Link:** Pedro Domingos, Communications of the ACM, 2012, [PDF](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf)
- **Cost:** Free
- **Time:** Stretch, one sitting
- **Why:** Written in prose, with a list of engineering lessons (data, features, overfitting) that match the credit project. A good second paper if Adam felt opaque.
- **Skip if:** The Adam note and the semester page are unfinished.

## If you are not paying for Coursera

This library lane replaces Course 1 and Course 2 when financial aid is denied and the subscription is off the table. The gradient-descent exercise, the credit project, the NumPy network, and the day-1 self-test stay mandatory. You will miss graded lab feedback. Start the builds earlier so the gap shows up while you can still fix it.

**In place of Course 1 (weeks 4–6):**

- 3Blue1Brown, "Gradient descent, how neural networks learn"
- Géron chapters 1–4, read more slowly than the core lane. They are the teacher now. Do the end-of-chapter questions you can finish in half an hour each.
- Kaggle Learn, Intro to Machine Learning, all lessons
- The scikit-learn [getting started](https://scikit-learn.org/stable/getting_started.html) tutorial, then the user-guide pages for linear and logistic regression

**In place of Course 2 (weeks 8–11):**

- 3Blue1Brown: "But what is a neural network?", backpropagation, and backpropagation calculus
- Géron chapter 9 (artificial neural networks) and a skim of chapters 5 and 6 (trees and ensembles)
- StatQuest: "Bias and Variance", "Decision Trees", "ROC and AUC"
- The NumPy network, with the whole of week 11 reserved for it

## Saved for after these 12 weeks

These are good. They are a poor use of the hours you have before the term.

- **The rest of *Mathematics for Machine Learning*.** Chapters 2, 5, and 6 are the reference. The remaining chapters are a math course of their own, and the degree will have one.
- **Gilbert Strang, MIT 18.06** ([OCW](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)). A full linear-algebra course, excellent, and several times the 15-hour math budget.
- **Probability textbooks** such as Blitzstein's *Introduction to Probability* ([Stat 110](https://stat110.hsites.harvard.edu/)). Keep them for the degree's probability course.
- **Stanford CS229** ([course site](https://cs229.stanford.edu/)). This is the graduate course the plan is preparing you to sit in. The notes assume the linear algebra and probability you are rebuilding. Read them in the term, next to the lectures, when a derivation is assigned.
- **The Deep Learning Specialization** ([Coursera](https://www.coursera.org/specializations/deep-learning)). Five courses. Course 2 of the Machine Learning Specialization is the first pass at neural nets. The five-course series is a next-quarter project if your program does not already require a deep-learning sequence.
- **fast.ai in full, including part 2.** Lessons 1–3 are the stretch. Part 2 is for after you are comfortable building a training loop.
- **Géron chapters 12–19** (vision, sequences, transformers, diffusion, reinforcement learning). The 2025 book already contains them. Read them after the semester starts.
- **LLM courses** (short courses on prompting, retrieval, and agents; the Hugging Face NLP course). They sit on top of the optimization and network vocabulary from weeks 9–11. A course that opens on transformers will still feel fast; that is expected, and these are the bridge after you can explain a linear model and a small network.
- **MLOps:** [Full Stack Deep Learning](https://fullstackdeeplearning.com/), [Made With ML](https://madewithml.com/), and Chip Huyen's *Designing Machine Learning Systems*. Your production engineering transfers. First-semester grading will focus on models, metrics, and derivations. Come back to this list when you have a model worth shipping.
- **Kaggle competition grinding.** One careful tabular project teaches more, at this stage, than a leaderboard chase.
