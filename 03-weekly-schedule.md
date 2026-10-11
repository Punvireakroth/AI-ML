# Weekly schedule

Twelve weeks at about **8 hours** each. The core list is about **6 hours**. The stretch list fills the rest. Do the core items in the order written. On a 5-hour week, stop at the end of the core list.

A week is your next seven days. If you miss one, shift the later weeks forward rather than stacking two into one.

Hours on Course 1 and Course 2 assume you watch lectures slightly faster than realtime, and that Python itself is already familiar. Quizzes and labs run at full speed. If a lab is still open, it rolls into the next week, and Géron or Kaggle moves back to make room.

The specs for the three builds, the Bayes numbers, and the paper-reading method are in [01-roadmap.md](01-roadmap.md). Tick items off in [04-progress-tracker.md](04-progress-tracker.md), and write each checkpoint answer there.

**Library lane.** If you are not paying for Coursera, weeks 4–6 and 8–11 follow the substitute list in [02-resources.md](02-resources.md). Weeks 1–3, 7, and 12 stay as written. The three builds stay mandatory.

## Week 1 — Environment and vectors

**Core, about 6 hours**

1. Environment, Kaggle account, and the NumPy smoke test (1.5 hours). Commands are in the roadmap. Stop at 90 minutes if the install is still failing, and use Colab.
2. Arrays, shapes, and vectorized arithmetic (1 hour), from the [NumPy beginner tutorial](https://numpy.org/doc/stable/user/absolute_beginners.html) or the first half of `tools_numpy.ipynb`.
3. Pandas: load a CSV and handle missing values (30 minutes). Kaggle Learn Pandas, the missing-values lesson. If pandas is a daily tool, skip this and spend the 30 minutes on NumPy.
4. 3Blue1Brown, *Essence of Linear Algebra*, episodes 1–3: vectors; span and basis; linear transformations and matrices (3 hours).

**Stretch, about 2 hours**

- The rest of Kaggle Learn Pandas.
- Episode 6, the determinant, if episode 3 felt comfortable.
- If you will need Coursera financial aid, submit the application this week. Review takes time, and Course 1 starts in week 4.

**Checkpoint.** In two sentences: what does multiplying by a matrix do to a vector?

**If the week blows up.** Use Colab and watch episodes 1–3. Setup can be ugly. The videos cannot slide past week 2.

## Week 2 — Matrices, eigenvectors, derivatives

**Core, about 6 hours**

1. *Essence of Linear Algebra*, episode 4 (matrix multiplication as composition), episode 9 (dot products), and episode 14 (eigenvectors). For episode 14, stop once `Av = λv` is a picture you can redraw (2.5 hours).
2. *Essence of Calculus*, the first four episodes, through the chain rule (2.5 hours).
3. Khan Academy, partial derivatives and the gradient, in the [multivariable derivatives unit](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives) (1 hour).

**Stretch, about 2 hours**

- *Mathematics for Machine Learning*, chapter 2, sections 2.1–2.5. Read. Do two exercises at most.
- Twenty minutes of Khan derivative drills if the chain-rule episode felt slippery.

**Checkpoint.** Differentiate `(x - 3) ** 2`. If you are standing to the left of `x = 3`, what does the sign of that derivative tell you about the next step?

**If the week blows up.** Keep the chain rule and the gradient video. The MML chapter is the item that waits.

## Week 3 — Probability and gradient descent

**Core, about 6 hours**

1. Mean and variance, conditional probability, Bayes' theorem, and the shape of a Gaussian (2.5 hours). Khan Academy's statistics course, those topics only. Then the Bayes exercise in the roadmap, with the made-up default numbers. Check: the posterior lands near 0.47.
2. 3Blue1Brown, "Gradient descent, how neural networks learn" (20 minutes), then the 1D gradient-descent notebook from the roadmap (about 2.5 hours). Two learning rates, two plots, five sentences.

**Stretch, about 2 hours**

- Univariate linear regression, fit with your own gradient updates on synthetic data.
- *Mathematics for Machine Learning*, chapter 6, sections 6.2–6.5, skimmed.
- StatQuest, "The Normal Distribution, Clearly Explained."

**Checkpoint.** Which learning rate failed, and why? Your Bayes posterior should be near 0.47, and both plots should exist.

**If the week blows up.** The 1D plots are the deliverable. The line-fitting extension waits.

## Week 4 — Course 1 starts: regression

Subscribe to the Machine Learning Specialization at the start of this week, unless you are on the library lane.

**Core, about 6 hours**

1. Course 1, Week 1: supervised learning, the regression model, the cost, gradient descent (5 hours). Do every practice quiz.
2. Géron chapter 1 and `01_the_machine_learning_landscape.ipynb` (1 hour).

**Stretch, about 2 hours**

- StatQuest, "Gradient Descent, Step-by-Step" and "Linear Regression", if you want the same ideas in a second voice.
- Apply for financial aid only if you have not already. Week 1 was the better moment; this is the last comfortable one.

**Checkpoint.** What is the difference between the cost and the gradient of the cost?

**If the week blows up.** Finish the Week 1 quizzes. Géron chapter 1 can move to week 7, where the other Géron chapters already sit.

## Week 5 — Several features, and a lab

**Core, about 6 hours**

1. Course 1, Week 2: multiple features, vectorization, feature scaling, and the linear-regression practice lab (5 hours).
2. Kaggle Learn, [Intro to Machine Learning](https://www.kaggle.com/learn/intro-to-machine-learning), the first lessons (1 hour).

**Stretch, about 2 hours**

- Géron `math_linear_algebra.ipynb`, the sections that match whatever still feels fuzzy from week 2.
- Rework one Course 1 quiz you guessed.

**Checkpoint.** Why does feature scaling change gradient descent on a linear model? When does a tree care less about that same scaling?

**If the week blows up.** Submit the practice lab. Kaggle can finish in week 6.

## Week 6 — Classification

**Core, about 6 hours**

1. Course 1, Week 3: logistic regression, the decision boundary, overfitting, regularization, and the logistic-regression practice lab (5 hours). This finishes Course 1.
2. The rest of Kaggle Learn, Intro to Machine Learning (1 hour).

**Stretch, about 2 hours**

- StatQuest, "Logistic Regression" and "Regularization Part 1: Ridge."
- Write the logistic loss in a markdown cell, in your own symbols, without looking.

**Checkpoint.** Write the logistic-regression output as a probability. What does L2 regularization add to the cost?

**If the week blows up.** The logistic lab is the week. Kaggle's last lessons can wait until the credit project needs a refresher.

## Week 7 — The workflow, then the credit file

**Core, about 6 hours**

1. Géron chapter 2 and `02_end_to_end_machine_learning_project.ipynb` (2 hours). Focus on the split, pipelines, and leakage. One exercise.
2. Géron chapter 3 and `03_classification.ipynb` (1 hour). Confusion matrix, precision, recall, ROC. One exercise.
3. Géron chapter 4 and `04_training_linear_models.ipynb` (1 hour). Learning curves and regularization. One exercise.
4. Credit project, part 1 (2 hours). Download Give Me Some Credit, profile the class rate and the missing columns, decide what `96` and `98` mean in the past-due fields, and make a stratified split. The full eight-section spec is in the roadmap.

**Stretch, about 2 hours**

- Kaggle Learn, [Intermediate Machine Learning](https://www.kaggle.com/learn/intermediate-machine-learning), the missing-value and pipelines lessons.

**Checkpoint.** In the lending setting you know, which mistake is more expensive: declining someone who would have paid, or funding someone who defaults? Which metric reflects that choice?

**If the week blows up.** Leave with a profiled dataset and a stratified split. Chapter 4's extra exercises are the first cut.

## Week 8 — Ship the baseline, start networks

**Core, about 6 hours**

1. Credit project, part 2 (2.5 hours). A logistic-regression baseline, one improved model, ROC-AUC plus precision and recall at one threshold, the note on `age`, and three bullets on what you would need before this touched a decision.
2. Course 2, Week 1: neural-network intuition, the model, the TensorFlow and Python implementation sections, and the practice lab (3.5 hours).

**Stretch, about 2 hours**

- Read the Course 3 Week 1 description (clustering and anomaly detection) so you know what you are deferring.
- StatQuest, "ROC and AUC", if the credit metrics felt mechanical.

**Checkpoint.** The notebook states a test metric, a baseline score, and one next experiment.

**If the week blows up.** A complete credit writeup comes first. Course 2 Week 1 spills into week 9, ahead of any stretch video.

## Week 9 — Training a network

**Core, about 6 hours**

1. Course 2, Week 2 (5 hours). Activations, multiclass outputs, and the practice lab. Watch the backpropagation video. Coursera marks it optional. In this plan it is required.
2. 3Blue1Brown, "Backpropagation" and "Backpropagation calculus" (1 hour).

**Stretch, about 2 hours**

- "But what is a neural network?", if Week 1's intuition did not stick.
- *Mathematics for Machine Learning*, chapter 5, sections 5.1, 5.2, and 5.6.
- fast.ai lesson 1, only if the Course 2 lab is already submitted.

**Checkpoint.** Sketch a two-layer network and mark the step where the chain rule is applied.

**If the week blows up.** The lab and the backpropagation video stay. fast.ai and the MML sections go.

## Week 10 — Generalization and trees

**Core, about 6 hours**

1. Course 2, Week 3 (3 hours). Bias and variance, learning curves, the development process, and the practice lab. Watch the skewed-datasets video and connect it, in two sentences, to the credit project.
2. Course 2, Week 4 (3 hours). Decision trees, tree ensembles, and the practice lab.

**Stretch, about 2 hours**

- Géron chapters 5 and 6, skimmed: `05_decision_trees.ipynb` and `06_ensemble_learning_and_random_forests.ipynb`. Run the cells. Skip the exercises.
- fast.ai lesson 2, if lesson 1 is already done.

**Checkpoint.** Training error is low and validation error is high. Name two changes you would make, and say which problem each one targets.

**If the week blows up.** Week 3 stays intact. Trees can spill into the buffer at the start of week 11.

## Week 11 — The network you write yourself

**Core, about 6 hours**

1. Any Course 2 lab still open (up to 1.5 hours). If nothing is open, start the network immediately.
2. The NumPy network from the roadmap (4 hours). Fresh notebook. `make_moons`, 4 hidden ReLU units, sigmoid output, binary cross-entropy, your own backward pass. Loss plot, gradient shapes, and a second run with a different learning rate.
3. Day-1 self-test, items 1–8, two sentences each, notes closed (1.5 hours). If a lab ate the buffer, move this block to week 12.

**Stretch, about 2 hours**

- Géron chapter 10, through linear regression with autograd: `10_neural_nets_with_pytorch.ipynb`.
- fast.ai lesson 3, if you only watch one fast.ai lesson. Watch it after the NumPy network, so the library is a convenience you can see.

**Checkpoint.** You changed the learning rate. What did the loss curve do?

**If the week blows up.** The backward pass outranks PyTorch, fast.ai, and the self-test. The self-test can move into week 12. The network has to happen this week.

## Week 12 — Say it back, then read one paper

**Core, about 6 hours**

1. Finish the self-test. Then explain five items out loud, chosen by scrolling the list with your eyes closed, notes closed (2 hours).
2. Adam, Kingma and Ba, [arXiv:1412.6980](https://arxiv.org/abs/1412.6980), using the 2.5-hour method in the roadmap. Five sentences: the problem a single global learning rate creates, what Adam stores, and where an optimizer like it showed up in Course 2.
3. The one-page semester note from the roadmap (1.5 hours).

**Stretch, about 2 hours**

- Domingos, "A Few Useful Things to Know about Machine Learning."
- Course 3, Week 1, only if Course 2 is fully submitted and you want a head start on clustering and anomaly detection. Save the rest of Course 3 for the semester plan.

**Checkpoint.** Five self-test items explained aloud, and the semester page exists.

**If the week blows up.** The self-test stays. Adam shrinks to abstract plus Algorithm 1 plus five sentences. The Domingos paper waits.

## After week 12

Continue at most the two stretch items you named on the semester page. Likely candidates, in the order a first term usually rewards:

1. Course 3, Week 1, then the rest of Course 3 if the subscription is still open.
2. Géron chapter 10, then chapters 5 and 6 if you only skimmed them.
3. fast.ai lessons 1–3, in order, if a deep-learning elective starts quickly.

Leave the deferred list in the resources file alone until a course actually requires it.
