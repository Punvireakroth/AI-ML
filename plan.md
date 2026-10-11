# Preparing for a master's in AI/ML

This plan gets you ready for a first-semester machine learning course. It is written for a working software engineer who writes Python in core banking, has little or no machine learning background, and has seen the math before.

The goal is narrow. Walk into the course able to follow the lectures, do the problem sets, and read a methods section. A first course usually starts with linear models, generalization, trees, and a first neural network. Deep learning, language models, and production systems are listed as optional tasks, and again under [Saved for after this plan](#saved-for-after-this-plan).

## How to use this page

Set a start date and how many hours you can study each week. The page gives each required task a due date, in order, from those two numbers. It also shows a projected finish date from the pace you actually keep.

If you fall behind, use **Reset deadlines from today**. Checked tasks stay checked. The remaining required tasks get new due dates from today.

Optional tasks have no due date. Do one only after the required tasks in that phase are done. The optional list is longer than you will finish. Pick from it.

Mark a task done when the work exists: a submitted lab, a plot, a notebook section, or two sentences you wrote with the notes closed. Watching a video at double speed with another tab focused does not count.

A useful rhythm: two weekday blocks of about 90 minutes, and one weekend block of 3 to 4 hours for labs and coding. Finish an open lab before you start a new video.

Coursera names its modules Week 1, Week 2, and so on. Those names below are Coursera module names. They are not your calendar.

## What "ready" means

Before classes start you can do these without notes:

- Explain gradient descent, overfitting, regularization, cross-validation, precision and recall, and the bias-variance tradeoff in a few sentences.
- Say what a single neuron computes, and where the chain rule shows up when a network trains.
- Train a scikit-learn model on a tabular dataset, hold out a test set, and pick a metric that matches a business error.
- Read the abstract and the algorithm box of a short machine-learning paper.

The full list is the [self-test](#self-test).

## What to pay for

Pay for one thing on purpose. The book is optional.

1. **Coursera, or DeepLearning.AI, for the Machine Learning Specialization, for about two months.** Subscribe when you start the supervised learning phase. Cancel after Course 2 unless you continue into Course 3. As of October 2026, Coursera's FAQ says this specialization is not free. Graded labs and the certificate need a subscription. Reviews in 2026 quoted Coursera Plus around $49 to $59 per month, sometimes less on a promotion, an annual plan, or a DeepLearning.AI membership. Check the live price. Financial aid is on the course page. Apply during Setup if you need it, because review takes time. This plan depends on the graded labs. The certificate is optional.
2. **Géron's book, if you want a permanent reference.** The notebooks are free, so you can start without the book. Buy the October 2025 edition, *Hands-On Machine Learning with Scikit-Learn and PyTorch*. Earlier editions use TensorFlow. An O'Reilly subscription you already have covers the book.

Everything else required here is free: 3Blue1Brown, Khan Academy, StatQuest, the *Mathematics for Machine Learning* PDF, and Kaggle Learn.

A third purchase, the DeepLearning.AI math specialization, can replace the math phase if the free videos are not enough. It is too large to add on top of this plan. Details are in [Math refresher](#math-refresher).

If you cannot pay and financial aid does not come through, follow [If you are not paying for Coursera](#if-you-are-not-paying-for-coursera). The three builds stay required: gradient descent in NumPy, the credit-default model, and a small neural network written by hand.

Prices and editions were checked in October 2026. Check the enroll page before you subscribe.

## If you run short of time

Do these first, in this order. Let the rest wait.

1. The gradient-descent exercise.
2. Machine Learning Specialization, Course 1, labs included.
3. The credit-default project.
4. Course 2, Week 1 (what a neuron computes) and Week 3 (bias, variance, and the development process).
5. The self-test.

After that list, restore Course 2's backpropagation video and the NumPy network. Course 3, fast.ai, and PyTorch wait until the list above is done.

What to drop first:

- Drop an optional task before a required task.
- Drop Kaggle drills and extra Géron exercises before a Coursera lab.
- If Course 1 is unfinished when you reach neural networks, finish Course 1 first. Course 2 assumes it.
- Give environment trouble 90 minutes, then switch to Google Colab.

## Setup

You can open a notebook and run NumPy, pandas, and scikit-learn. You have a Kaggle account.

### Environment and smoke test · 1.5 hours

From the repo directory:

```bash
python3 --version
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install numpy pandas matplotlib scikit-learn jupyter
jupyter lab
```

If `python3` is older than 3.10, install Python 3.12 and use `python3.12 -m venv .venv`. Stop at 90 minutes. If the install is still failing, use Google Colab and move on. Coursera labs run in Coursera's environment either way. The local environment is for the three builds and the Géron notebooks.

Smoke test, in a notebook cell:

```python
import numpy as np
print(np.linspace(0, 1, 5))
```

Create a Kaggle account in this task. You need it for the pandas practice and for the credit dataset.

- [Python downloads](https://www.python.org/downloads/). Free. Python 3.12 matches the Géron notebooks. Skip the install if `python3 --version` is already 3.10 or newer and Jupyter starts.
- [Google Colab](https://colab.research.google.com/). Free. About 15 minutes to upload a notebook and run the first cell. Use it when a local install is still broken at 90 minutes. The [handson-mlp README](https://github.com/ageron/handson-mlp) links Colab for the Géron notebooks. Skip Colab if local Jupyter already runs.
- [Kaggle](https://www.kaggle.com/). Free. About 10 minutes. Kaggle Learn and the credit dataset need an account. Skip if you already have one.

**Done when.** The smoke test prints five numbers.

### NumPy arrays · 1 hour

Learn arrays, shapes, broadcasting, `np.dot` or `@`, and `np.sum`. You need a loop-free update before the gradient-descent exercise.

- [NumPy absolute beginners](https://numpy.org/doc/stable/user/absolute_beginners.html). Free. 45 to 60 minutes. Alternative: the first half of `tools_numpy.ipynb` in the Géron repo. Skip if you already write vectorized NumPy at work, and spend this hour on the next math task.

**Done when.** You can write a small vectorized expression without a Python loop.

### Load a CSV with pandas · 0.5 hours

Load a CSV, select columns, and count missing values.

- [Kaggle Learn: Pandas](https://www.kaggle.com/learn/pandas). Free. Do lessons 1, 2, and 5: "Creating, Reading and Writing", "Indexing, Selecting & Assigning", "Data Types and Missing Values". The full course is about 2 hours if pandas is occasional. This task is the missing-values lesson, about 30 minutes. Skip if you load CSVs and fill or flag missing values without looking anything up. Spend the 30 minutes on NumPy.

**Done when.** You have loaded a CSV into a DataFrame and counted missing values.

### The rest of Kaggle Learn Pandas · 1.5 hours · Optional

Finish the pandas course after lessons 1, 2, and 5.

- [Kaggle Learn: Pandas](https://www.kaggle.com/learn/pandas). Free. Skip if the required pandas task was already easy.

## Math refresher

When a lecture says "gradient", "dot product", or "conditional probability", you know which object it is and what to compute.

You have seen this material before. These tasks make it usable again: a short set of videos and two calculations.

If videos and drills are not enough, the paid [Mathematics for Machine Learning and Data Science](https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science/) specialization (DeepLearning.AI, Luis Serrano) can replace this phase. It uses the same subscription family as the Machine Learning Specialization. Check the current price. It takes about 11 weeks at 5 hours a week, which is most of this plan by itself. If you switch to it, keep Course 1, the credit project, and the self-test, and drop the rest of this plan. Do not add it on top of the free refresher. Skip it if you can finish the Bayes exercise and the gradient-descent plots.

A more formal option is Imperial College's [Mathematics for Machine Learning](https://www.coursera.org/specializations/mathematics-machine-learning). Leave it for the term if a proof-based math course is on your transcript. Do not take both math specializations during this plan.

### Linear algebra: vectors and matrices · 3 hours

Watch 3Blue1Brown, *Essence of Linear Algebra*, in this order:

1. Vectors
2. Linear combinations, span, and basis vectors
3. Linear transformations and matrices

- [Playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) and [topic page](https://www.3blue1brown.com/topics/linear-algebra). Free. These three episodes are about 3 hours. The series gives the geometric picture behind the objects machine learning lectures name. The full six-episode set used here is about 5 hours, split across this task and the next. Skip the series if you can multiply a small matrix by hand and explain an eigenvector without notes. Move those hours to the gradient-descent exercise.

**Done when.** You have watched episodes 1, 2, and 3.

**Check.** What does multiplying by a matrix do to a vector?

### Linear algebra: products and eigenvectors · 2.5 hours

Continue *Essence of Linear Algebra*:

1. Matrix multiplication as composition (episode 4)
2. Dot products and duality (episode 9 in the full series)
3. Eigenvectors and eigenvalues (episode 14). Stop once `Av = λv` is a picture you can redraw. The full derivation can wait.

- Same [playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) and [topic page](https://www.3blue1brown.com/topics/linear-algebra). Free. About 2.5 hours for these three episodes.

**Done when.** You can redraw `Av = λv` from memory.

### Calculus through the chain rule · 2.5 hours

Watch the first four episodes of *Essence of Calculus*: "The essence of calculus", "The paradox of the derivative", "Derivative formulas through geometry", and "Visualizing the chain rule and product rule".

- [Playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) and [topic page](https://www.3blue1brown.com/topics/calculus). Free. About 2.5 hours. The derivative is a slope. The chain rule is the idea behind backpropagation. Skip if you can differentiate `(x - 3) ** 2` and state the chain rule from memory.

**Done when.** You can state the chain rule from memory.

**Check.** Differentiate `(x - 3) ** 2`. If you are to the left of `x = 3`, what does the sign of that derivative tell you about the next step?

### Partial derivatives and the gradient · 1 hour

The calculus series above is single-variable. Gradient descent needs a partial derivative and the gradient vector.

- [Khan Academy, multivariable derivatives](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives). Free. About 1 hour. Watch the partial-derivative introduction and the gradient video in that unit. Skip if you can compute `∂/∂w` of a simple two-variable function and say which way the gradient points.

**Done when.** You can say which way a gradient points.

### Probability and Bayes · 2.5 hours

Cover mean and variance, conditional probability, Bayes' theorem, and the shape of a Gaussian. Stay inside those four topics.

- [Khan Academy, statistics and probability](https://www.khanacademy.org/math/statistics-probability). Free. About 2 hours, plus the 20-minute exercise below. Skip the videos if you can complete the exercise without rereading the formula and you can sketch a Gaussian and mark its mean.

Bayes exercise, about 20 minutes. Use these made-up lending numbers.

- Prior: `P(default) = 0.07`
- `P(90 days late | default) = 0.60`
- `P(90 days late | no default) = 0.05`

Compute `P(default | 90 days late)`. A correct setup lands near **0.47**. Write one sentence on why the result is so much larger than 0.07.

**Done when.** Your posterior is near 0.47, and the sentence exists.

**Check.** What posterior did you get, and why is it larger than 0.07?

### Gradient descent in one dimension · 3 hours

Watch 3Blue1Brown, "Gradient descent, how neural networks learn" (about 20 minutes). Then build the notebook below (about 2.5 hours).

In a fresh notebook (a `study/` folder you create is a good home):

- Minimize `f(x) = (x - 3) ** 2`, whose derivative is `2 * (x - 3)`.
- Start at `x = 0`. Run 20 steps with learning rate `0.1`. The iterates should approach 3.
- Run again with learning rate `1.1`. The iterates should diverge or oscillate.
- Plot both runs.
- In a markdown cell, five sentences: what the derivative tells you, how the learning rate changes the step, and why the second run fails.

Use NumPy. Leave scikit-learn for the supervised learning phase.

- [3Blue1Brown, neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) and [topic page](https://www.3blue1brown.com/topics/neural-networks). Free. Watch "Gradient descent, how neural networks learn" before you code. Skip the video if you already know the picture and want the full block for the notebook.

**Done when.** Both plots exist, and the five sentences exist.

**Check.** Which learning rate failed, and why?

### The determinant · 0.5 hours · Optional

*Essence of Linear Algebra*, episode 6, the determinant. Watch it if episode 3 was clear.

- Same [linear algebra playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab). Free.

### Mathematics for Machine Learning, chapter 2 · 2 hours · Optional

Read sections 2.1 to 2.5. Do two exercises at most. This is a written source next to the linear algebra videos.

- [Book site](https://mml-book.github.io/) and [free PDF](https://mml-book.github.io/book/mml-book.pdf). Free PDF. The print edition is optional. The book is the standard bridge from math courses to machine learning. In this plan, only chapters 2, 5, and 6 are used, and only as a reference. Skip if the videos plus the two exercises are enough to follow Course 1. Keep the PDF for a lecture that uses a symbol you cannot name.

### Derivative drills · 0.5 hours · Optional

Twenty minutes or so of Khan Academy derivative practice if the chain-rule episode did not stick.

- [Khan Academy, multivariable derivatives](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives). Free.

### Fit a line by hand · 2 hours · Optional

If the one-dimensional exercise takes under two hours, fit a line `y = wx + b` to synthetic data with mean squared error and the same hand-written update. Course 1 does this again, and it will feel easier.

### Mathematics for Machine Learning, chapter 6 · 1.5 hours · Optional

Skim sections 6.2 to 6.5 (probability and distributions).

- Same [PDF](https://mml-book.github.io/book/mml-book.pdf). Free.

### StatQuest: Bayes and the normal distribution · 0.5 hours · Optional

A second explanation when the Khan Academy videos did not land. Search the channel for "Bayes' Theorem" and "The Normal Distribution, Clearly Explained". Each video is about 10 to 20 minutes.

- [StatQuest](https://www.youtube.com/@statquest). Free. Skip if the primary lecture already made sense.

## Supervised learning

You can train, evaluate, and criticize a supervised model on a tabular dataset.

Objectives for this phase: linear regression (the cost, gradient descent, multiple features, feature scaling); logistic regression (probability, decision threshold, overfitting, L2 regularization); a real train and test workflow (missing data, leakage, baselines, precision, recall, ROC-AUC). Name the error that matters before you chase a score.

Subscribe to the [Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction) ([DeepLearning.AI page](https://www.deeplearning.ai/specializations/machine-learning)) when you start this phase, unless you are using the free substitutes. The specialization is still the clearest first course in the field: intuition, then code, with the heavier math in optional videos. The current version uses Python, NumPy, scikit-learn, and TensorFlow. DeepLearning.AI's pace is 5 hours a week: about 15 hours for Course 1, about 20 for Course 2, about 15 for Course 3. Course 1 and Course 2 are required. Course 3 is optional. Cancel after Course 2 unless you continue.

Géron is the workflow companion to Course 1. Course 1 teaches the algorithm. Géron teaches splits, pipelines, leakage, and metrics.

- Book: [Hands-On Machine Learning with Scikit-Learn and PyTorch](https://www.oreilly.com/library/view/hands-on-machine-learning/9798341607972/) and the [author site](https://ageron.github.io/). Paid book. Notebooks are free. Use the October 2025 edition and the repo [ageron/handson-mlp](https://github.com/ageron/handson-mlp). The older repo [ageron/handson-ml3](https://github.com/ageron/handson-ml3) is the TensorFlow and Keras edition. Depth for each required chapter: read the chapter, run the notebook from top to bottom, do one exercise. On macOS, SSL errors while downloading the housing dataset are covered in the repo README. Also in that repo when you want them: `tools_numpy.ipynb`, `tools_pandas.ipynb`, `math_linear_algebra.ipynb`, `math_differential_calculus.ipynb`. Skip a Géron chapter if a Coursera lab is still open. Finish the lab first. You can follow the notebooks without owning the book, and buy the book when you want the prose as a permanent reference.

### Course 1, Week 1: regression · 5 hours

[Supervised Machine Learning: Regression and Classification](https://www.coursera.org/learn/machine-learning), Week 1. Supervised learning, the regression model, the cost, and gradient descent. Do every practice quiz.

This course is required. There is nothing in it to skip. Leave "Conversations with Andrew" for later. The practice labs cannot wait. A working Python developer usually lands near DeepLearning.AI's published pace, because the labs are the time and the syntax is already familiar.

**Done when.** The Week 1 quizzes are submitted.

**Check.** What is the difference between the cost and the gradient of the cost?

### Géron, chapter 1 · 1 hour

Read chapter 1 and run `01_the_machine_learning_landscape.ipynb`. Do one exercise.

**Done when.** The notebook has been run, and one exercise is done.

### Course 1, Week 2: several features · 5 hours

Course 1, Week 2. Multiple features, vectorization, feature scaling, and the linear-regression practice lab.

**Done when.** The quizzes and the linear-regression lab are submitted.

**Check.** Why does feature scaling change gradient descent on a linear model? When does a tree care less about that same scaling?

### Kaggle: intro to machine learning, first lessons · 1 hour

Work in order and stop when the hour is gone. This is short practice with scikit-learn between Course 1 lectures: fit a model, validate, submit a prediction.

- [Kaggle Learn: Intro to Machine Learning](https://www.kaggle.com/learn/intro-to-machine-learning). Free. The course itself is about 3 hours. This plan uses 2 hours, split into this task and the next. The credit project is the full exercise. Skip if a Course 1 lab is still open. Finish the lab, then come back.

**Done when.** You have used the hour on the first lessons.

### Course 1, Week 3: classification · 5 hours

Course 1, Week 3. Logistic regression, the decision boundary, overfitting, regularization, and the logistic-regression practice lab. This finishes Course 1.

**Done when.** The quizzes and the logistic-regression lab are submitted.

**Check.** Write the logistic-regression output as a probability. What does L2 regularization add to the cost?

### Kaggle: intro to machine learning, the rest · 1 hour

Finish the remaining lessons of [Intro to Machine Learning](https://www.kaggle.com/learn/intro-to-machine-learning). Stop when the hour is gone. If you run out of time, the last lessons can wait until the credit project needs a refresher.

**Done when.** You have used the hour, or you have written down the lesson you will return to.

### Géron, chapter 2 · 2 hours

Read chapter 2 and run `02_end_to_end_machine_learning_project.ipynb`. Focus on the split, pipelines, and leakage. Do one exercise.

**Done when.** The notebook has been run, and one exercise is done.

### Géron, chapter 3 · 1 hour

Read chapter 3 and run `03_classification.ipynb`. Confusion matrix, precision, recall, ROC. Do one exercise.

**Done when.** The notebook has been run, and one exercise is done.

### Géron, chapter 4 · 1 hour

Read chapter 4 and run `04_training_linear_models.ipynb`. Learning curves and regularization. Do one exercise.

**Done when.** The notebook has been run, and one exercise is done.

### Credit project: profile and split · 2 hours

One notebook on the [Give Me Some Credit](https://www.kaggle.com/competitions/GiveMeSomeCredit/data) training file. Accept the competition rules to download it. Free after that. The question: rank borrowers by the probability of serious delinquency within two years (`SeriousDlqin2yrs`). Roughly 7 percent of rows are positive. A high accuracy mostly restates that fact. The dataset is binary classification, missing values, a low positive rate, and a decision you already understand from core banking.

If the Kaggle download is blocked, use [Credit Card Fraud Detection](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud) and say so at the top of the notebook. The same sections apply. Fraud is more imbalanced, so lean harder on precision and recall.

This task is the first half. The full notebook has eight sections. Do these three, then stop for this task:

1. **Question.** One paragraph a credit-risk colleague could read.
2. **Profile.** Class rate, missingness, and dtypes. `MonthlyIncome` and `NumberOfDependents` are the columns that usually come in incomplete. The past-due counts use `96` and `98` as special codes, sentinels from the data feed. Write down what you did with those codes.
3. **Split.** Stratified train, validation, and test. Fit any scaler on the training fold only.

**Done when.** The dataset is profiled and the split exists.

**Check.** In the lending setting you know, which mistake is more expensive: declining someone who would have paid, or funding someone who defaults? Which metric reflects that choice?

### Credit project: baseline · 2.5 hours

Finish the same notebook. Four sections, then stop:

1. **Baseline.** Logistic regression in scikit-learn.
2. **One improvement.** Either stronger L2 or L1 regularization, or one tree model. Stop after that single model.
3. **Metrics.** ROC-AUC on the test set, plus precision and recall at one threshold you chose. Say which lending error that threshold prefers: declining a borrower who would have paid, or funding a borrower who defaults.
4. **Age.** The file contains `age`. Note whether you would keep it in a real scorecard. Then three bullets on what you would need before this model touched a decision.

**Done when.** The notebook states a test metric, a baseline score, and one next experiment.

**Check.** What test metric, baseline score, and next experiment did you write down?

### StatQuest: gradient descent and linear regression · 0.5 hours · Optional

Search [StatQuest](https://www.youtube.com/@statquest) for "Gradient Descent, Step-by-Step" and "Linear Regression". Free. A second explanation of the Course 1, Week 1 ideas. Skip if that module already made sense.

### Géron linear algebra notebook · 1.5 hours · Optional

Run the sections of `math_linear_algebra.ipynb` in [ageron/handson-mlp](https://github.com/ageron/handson-mlp) that match whatever is still unclear from the linear algebra tasks. Free notebook.

### Redo a Course 1 quiz · 0.5 hours · Optional

Redo one Course 1 quiz you guessed.

### StatQuest: logistic regression and ridge · 0.5 hours · Optional

Search [StatQuest](https://www.youtube.com/@statquest) for "Logistic Regression" and "Regularization Part 1: Ridge". Free. Skip if Course 1, Week 3 already made sense.

### Write the logistic loss · 0.5 hours · Optional

In a markdown cell, write the logistic loss in your own symbols, without looking.

### Kaggle: intermediate machine learning · 2 hours · Optional

Do the missing-value and pipeline lessons. Directly useful while you clean the credit file.

- [Kaggle Learn: Intermediate Machine Learning](https://www.kaggle.com/learn/intermediate-machine-learning). Free. Skip if the credit notebook already has a clean train, validation, and test split and a fitted pipeline.

### StatQuest: ROC, AUC, and cross-validation · 0.5 hours · Optional

Search [StatQuest](https://www.youtube.com/@statquest) for "ROC and AUC" and "Cross Validation". Free. Use this if the credit metrics are still unclear. Skip if they are clear.

## Neural networks

You can explain a small neural network, a decision tree, and what to do when training error and validation error disagree.

Objectives: what one neuron computes (a weighted sum, then a nonlinearity); why a network with no nonlinearity is still one linear model; training (activations, multiclass outputs, and backpropagation as the chain rule applied to the loss); bias and variance, learning curves, and a data-centered next step; decision trees and the idea of an ensemble; enough contact with imbalanced labels to connect Course 2 to the credit project.

[Course 2, Advanced Learning Algorithms](https://www.coursera.org/learn/advanced-learning-algorithms). All four weeks and the practice labs. DeepLearning.AI budgets about 20 hours. The four modules below are about 14.5 hours, by skipping the AGI conversation and "Conversations with Andrew", watching lectures a little faster than realtime, and relying on your Python. Quizzes and labs still run at full speed. If a lab is still open, finish it before the next module, and do any Géron or Kaggle task after the lab.

Two items Coursera marks optional are required here:

- Course 2, Week 2, the backpropagation video.
- Course 2, Week 3, the skewed-datasets video. The credit project is a skewed dataset.

Course 2's labs import TensorFlow. Your own network uses NumPy. PyTorch is only in the optional tasks. The derivatives are the part that transfers. The library is an afternoon once those are familiar.

If you reach the end of the Course 2 time with a lab still open, finish the lab before you start the NumPy network. Move the first sitting of the self-test later if you need the time.

### Course 2, Week 1: neurons · 3.5 hours

Neural-network intuition, the model, the TensorFlow and Python implementation sections, and the practice lab.

**Done when.** The Week 1 practice lab is submitted.

### Course 2, Week 2: training · 5 hours

Activations, multiclass outputs, and the practice lab. Watch the backpropagation video. Coursera marks it optional. It is required here. Leave "Speculations on artificial general intelligence" and "Conversations with Andrew" for later.

**Done when.** The practice lab is submitted and the backpropagation video is watched.

### Backpropagation videos · 1 hour

Watch 3Blue1Brown, "Backpropagation" and "Backpropagation calculus", next to Course 2, Week 2.

- [Playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) and [topic page](https://www.3blue1brown.com/topics/neural-networks). Free. About 1 hour for these two episodes. This is the visual account of the chain rule inside a network. Skip if you can already draw a two-layer network and point at the step where the loss changes a first-layer weight.

**Done when.** Both videos are watched.

**Check.** In words, where is the chain rule applied in a two-layer network?

### Course 2, Week 3: bias and variance · 3 hours

Bias and variance, learning curves, the development process, and the practice lab. Watch the skewed-datasets video and connect it, in two sentences, to the credit project.

**Done when.** The practice lab is submitted, the skewed-datasets video is watched, and the two sentences exist.

**Check.** Training error is low and validation error is high. Name two changes you would make, and say which problem each one targets.

### Course 2, Week 4: trees · 3 hours

Decision trees, tree ensembles, and the practice lab.

**Done when.** The practice lab is submitted.

### A neural network in NumPy · 4 hours

A fresh notebook. Close the Coursera notebook while you do this.

- Data: `sklearn.datasets.make_moons(n_samples=200, noise=0.2, random_state=0)`. Standardize the two features.
- Architecture: 2 inputs, 4 hidden units with ReLU, 1 sigmoid output.
- Loss: binary cross-entropy. Full-batch gradient descent is enough at this size.
- Write the forward pass and the backward pass yourself, using the derivative formulas from Course 2. You may look up the derivative of ReLU and of sigmoid once. Copying a blog's training loop means the task is not done.
- Plot the loss. It should fall.
- Print or comment the shapes of the two weight gradients.
- Change the learning rate, rerun, and write three sentences on what the loss curve did.

A decision-boundary contour is optional.

**Done when.** The loss plot falls for a sensible learning rate, and you can point to the line where the chain rule is applied.

**Check.** You changed the learning rate. What did the loss curve do?

### What is a neural network · 0.5 hours · Optional

3Blue1Brown, "But what is a neural network?", if Course 2, Week 1 did not stick.

- Same [neural network playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi). Free.

### Mathematics for Machine Learning, chapter 5 · 2 hours · Optional

Read sections 5.1, 5.2, and 5.6. Section 5.6 is backpropagation written as calculus.

- Same [PDF](https://mml-book.github.io/book/mml-book.pdf). Free. Skip if Course 2, Week 2 and the NumPy network are enough.

### fast.ai, lesson 1 · 3 hours · Optional

[Practical Deep Learning for Coders](https://course.fast.ai/), lesson 1. Free. Each lesson is about 90 to 120 minutes of video plus a notebook. Three lessons are about 8 to 10 hours. Do this only if the Course 2, Week 2 lab is already submitted. The course starts from a working model, then explains the pieces, using PyTorch, fastai, and Hugging Face. It shows current practice after Course 2 has shown what is being computed. fast.ai part 2 is out of scope. It assumes you already train models from scratch and build your own training loop on purpose.

### Géron, chapters 5 and 6 · 2 hours · Optional

Skim decision trees and ensembles: run `05_decision_trees.ipynb` and `06_ensemble_learning_and_random_forests.ipynb` in [ageron/handson-mlp](https://github.com/ageron/handson-mlp). Skip the exercises. This is a second pass after Course 2, Week 4. Free notebooks.

### fast.ai, lesson 2 · 3 hours · Optional

[Practical Deep Learning for Coders](https://course.fast.ai/), lesson 2. Do this only if lesson 1 is done.

### Géron, chapter 10 · 2.5 hours · Optional

`10_neural_nets_with_pytorch.ipynb` in [ageron/handson-mlp](https://github.com/ageron/handson-mlp), through the autograd linear-regression section. Free notebook. The chapter prose is in the paid book. About 2 to 3 hours. This puts PyTorch tensors and automatic differentiation next to the derivatives you wrote by hand. Skip if you are still writing the backward pass in NumPy. Do that first. The comparison only works after the hand-written version.

### fast.ai, lesson 3 · 3 hours · Optional

[Practical Deep Learning for Coders](https://course.fast.ai/), lesson 3, neural-net foundations. If you watch only one fast.ai lesson, watch this one, after the NumPy network, so you can see what the library is doing for you. Do it after Course 2, Week 2.

### StatQuest: bias, variance, and trees · 0.5 hours · Optional

Search [StatQuest](https://www.youtube.com/@statquest) for "Bias and Variance" and "Decision Trees". Free. Skip if Course 2, Weeks 3 and 4 already made sense.

## Before the semester

You can tell a clear story of what you know, you have read one paper under a time limit, and you have a written plan for the first term.

### Self-test, first sitting · 1.5 hours

In the [self-test](#self-test) below, write two sentences for items 1 to 8 with the notes closed. If a Course 2 lab took this time, move this task later and do it with the next one.

**Done when.** Items 1 to 8 have two sentences each.

### Self-test, said aloud · 2 hours

Finish every self-test item. Then explain five items out loud. Choose them by scrolling the list with your eyes closed. Notes closed.

**Done when.** All 17 items have been attempted, and five have been explained out loud.

**Check.** Which five items did you explain out loud?

### Read the Adam paper · 2.5 hours

Read Adam (Kingma and Ba, 2014), [arXiv:1412.6980](https://arxiv.org/abs/1412.6980), for 2.5 hours, then stop. Free. It is short, well known, and tied to the gradient descent you implemented. The self-test comes first. This paper is how you practice reading. The self-test is what your courses will assume. Skip the paper if the self-test is still open. The bias-correction proof can wait for a course that asks for it.

1. Abstract and the last section.
2. Algorithm 1, and the figures around it.
3. Five sentences in your own words: the problem a single global learning rate creates, what Adam stores as it trains, and where an optimizer like this shows up in Course 2 or Géron.
4. Only the method paragraphs your five sentences could not cover.

**Done when.** The five sentences exist.

### A plan for the first term · 1.5 hours

One page:

- The courses you expect in term 1.
- Three self-test items you want to hear again in lecture.
- At most two optional items you will continue (Course 3, fast.ai, Géron chapter 10, or the Domingos paper).
- One question you want to ask in the first week of classes.
- The weekly hours you can actually keep once the term starts.

After this plan, continue at most the two optional items you named. Likely candidates, in the order a first term usually rewards:

1. Course 3, Week 1, then the rest of Course 3 if the subscription is still open.
2. Géron chapter 10, then chapters 5 and 6 if you only skimmed them.
3. fast.ai lessons 1 to 3, in order, if a deep-learning elective starts quickly.

Leave the deferred list under [Saved for after this plan](#saved-for-after-this-plan) alone until a course actually requires it.

**Done when.** The page exists.

### The Domingos paper · 1.5 hours · Optional

Pedro Domingos, "A Few Useful Things to Know about Machine Learning", Communications of the ACM, 2012. [PDF](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf). Free. One sitting. Written in prose, with engineering lessons on data, features, and overfitting that match the credit project. A good second paper if Adam was hard to follow. Skip if the Adam note and the first-term page are unfinished.

### Course 3, Week 1: clustering and anomaly detection · 5 hours · Optional

[Unsupervised Learning, Recommenders, Reinforcement Learning](https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning), Week 1. Included while the specialization subscription is active. Course 3 is about 15 hours at the published pace. Week 1 is the part to do first. Clustering and anomaly detection show up often around fraud and operations. Skip if Course 2 labs or the NumPy network are unfinished. Those come first.

Read the Course 3, Week 1 description early if you want to know what you are deferring. Watching the lectures waits until the required neural-network tasks are done.

### Course 3, Weeks 2 and 3 · 10 hours · Optional

Recommenders and reinforcement learning, the rest of Course 3. They introduce the vocabulary, which helps before a course that assumes you have heard the words. Save them for the first-term plan unless Course 2 is fully submitted and you want a head start.

## Self-test

Do this with the course notes closed. For each item, write two sentences, then mark one status.

- **From memory** means you could say it to a classmate without looking.
- **With notes** means you got there after peeking. Peeking is allowed while you repair the item. It does not count as ready.
- **Not yet** means the restudy pointer is your next session.

Score yourself by the "from memory" count after the repair pass.

- **14 or more:** start the semester. Put extra time into the two optional items you chose.
- **9 to 13:** the week before classes, redo only the blank items, using the restudy pointer. Leave new courses until those are done.
- **8 or fewer:** repair Course 1 and the NumPy network. Leave Course 3 and fast.ai until that repair is finished.

### 1. Supervised and unsupervised learning

Restudy: Course 1, Week 1.

From memory [ ] · With notes [ ] · Not yet [ ]

### 2. Regression and classification

Restudy: Course 1, Weeks 1 and 3.

From memory [ ] · With notes [ ] · Not yet [ ]

### 3. The cost function

Restudy: Course 1, Week 1. Say what is being summed, and what choice of parameters makes it small.

From memory [ ] · With notes [ ] · Not yet [ ]

### 4. Gradient descent and the learning rate

Restudy: your gradient-descent notebook, then Course 1, Week 1.

From memory [ ] · With notes [ ] · Not yet [ ]

### 5. Feature scaling

Restudy: Course 1, Week 2. Include why a tree often cares less.

From memory [ ] · With notes [ ] · Not yet [ ]

### 6. Overfitting and underfitting

Restudy: Course 1, Week 3. Name one symptom of each on a learning curve.

From memory [ ] · With notes [ ] · Not yet [ ]

### 7. Regularization

Restudy: Course 1, Week 3, and Géron chapter 4. Say what L2 does to the weights.

From memory [ ] · With notes [ ] · Not yet [ ]

### 8. Train, validation, and test

Restudy: Géron chapter 2 and your credit notebook. Say what each split is allowed to influence.

From memory [ ] · With notes [ ] · Not yet [ ]

### 9. Cross-validation

Restudy: Géron chapter 2. Say what it estimates, and what it costs.

From memory [ ] · With notes [ ] · Not yet [ ]

### 10. Precision, recall, and rare events

Restudy: Géron chapter 3 and the credit project.

Lending version: a declined borrower who would have paid, versus a funded borrower who defaults. Which ratio moves when you raise the threshold?

From memory [ ] · With notes [ ] · Not yet [ ]

### 11. ROC and AUC

Restudy: Géron chapter 3. Say what the curve's axes are, and what a higher AUC still leaves you to decide about a threshold.

From memory [ ] · With notes [ ] · Not yet [ ]

### 12. Bias and variance

Restudy: Course 2, Week 3.

From memory [ ] · With notes [ ] · Not yet [ ]

### 13. What one neuron computes

Restudy: Course 2, Week 1. Weighted sum, then a nonlinearity. Say both.

From memory [ ] · With notes [ ] · Not yet [ ]

### 14. Why a nonlinearity sits between layers

Restudy: Course 2, Week 2. Say what a stack of linear layers, with no nonlinearity, reduces to.

From memory [ ] · With notes [ ] · Not yet [ ]

### 15. Backpropagation, in words

Restudy: the Course 2 Week 2 backpropagation video, and the 3Blue1Brown backpropagation videos. Name the chain rule and the thing that gets updated.

From memory [ ] · With notes [ ] · Not yet [ ]

### 16. A tree and a linear model

Restudy: Course 2, Week 4. Describe the shape of the decision boundary each one prefers.

From memory [ ] · With notes [ ] · Not yet [ ]

### 17. Data leakage

Restudy: Géron chapter 2 and the credit split.

Lending version: a field that is only filled in after the loan is booked. Say what happens to your test score if that field is available at training time, and what happens in production when it is not.

From memory [ ] · With notes [ ] · Not yet [ ]

## If you are not paying for Coursera

Use this when financial aid is denied and you will not subscribe. It replaces Course 1 and Course 2. The gradient-descent exercise, the credit project, the NumPy network, and the self-test stay required. You will miss graded lab feedback. Start the builds earlier so the gap shows up while you can still fix it.

The Course 1 and Course 2 tasks stay on the list above, and they keep their due dates. Check a Course task off when you have done the substitute below for that part.

### In place of Course 1

- 3Blue1Brown, "Gradient descent, how neural networks learn"
- Géron chapters 1 to 4, read more slowly than in the required tasks. They are the main text now. Do the end-of-chapter questions you can finish in half an hour each.
- Kaggle Learn, Intro to Machine Learning, all lessons
- The scikit-learn [getting started](https://scikit-learn.org/stable/getting_started.html) tutorial, then the user-guide pages for linear and logistic regression

### In place of Course 2

- 3Blue1Brown: "But what is a neural network?", backpropagation, and backpropagation calculus
- Géron chapter 9 (artificial neural networks) and a skim of chapters 5 and 6 (trees and ensembles)
- StatQuest: "Bias and Variance", "Decision Trees", "ROC and AUC"
- The NumPy network, with a full block of time reserved for it

## Saved for after this plan

These are good. They are a poor use of the hours you have before the term starts.

### The rest of Mathematics for Machine Learning

Chapters 2, 5, and 6 are the reference, in the optional tasks above. The remaining chapters are a math course of their own, and the degree will have one. [PDF](https://mml-book.github.io/book/mml-book.pdf).

### Gilbert Strang, MIT 18.06

[OCW](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/). A full linear-algebra course. It is several times the math time in this plan.

### Probability textbooks

Blitzstein's *Introduction to Probability* ([Stat 110](https://stat110.hsites.harvard.edu/)). Keep it for the degree's probability course.

### Stanford CS229

[Course site](https://cs229.stanford.edu/). This is the graduate course the plan is preparing you to sit in. The notes assume the linear algebra and probability you are rebuilding. Read them in the term, next to the lectures, when a derivation is assigned.

### The Deep Learning Specialization

[Coursera](https://www.coursera.org/specializations/deep-learning). Five courses. Course 2 of the Machine Learning Specialization is the first pass at neural nets. The five-course series is a later project if your program does not already require a deep-learning sequence.

### fast.ai in full, including part 2

Lessons 1 to 3 are the optional tasks above. Part 2 is for after you are comfortable building a training loop.

### Géron chapters 12 to 19

Vision, sequences, transformers, diffusion, and reinforcement learning. The 2025 book already contains them. Read them after the semester starts.

### LLM courses

Short courses on prompting, retrieval, and agents, and the Hugging Face NLP course. They sit on top of the optimization and network vocabulary from the neural-network phase. A course that opens on transformers will still move fast. That is expected. These are the bridge after you can explain a linear model and a small network.

### MLOps

[Full Stack Deep Learning](https://fullstackdeeplearning.com/), [Made With ML](https://madewithml.com/), and Chip Huyen's *Designing Machine Learning Systems*. Your production engineering transfers. First-semester grading will focus on models, metrics, and derivations. Come back to this list when you have a model worth deploying.

### Kaggle competitions

One careful tabular project teaches more, at this stage, than a leaderboard chase.
