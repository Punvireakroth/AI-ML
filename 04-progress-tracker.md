# Progress tracker

Copy this file, or tick the boxes in place. The schedule in [03-weekly-schedule.md](03-weekly-schedule.md) is the order. The specs live in [01-roadmap.md](01-roadmap.md).

Mark an item done when the artifact exists: a submitted lab, a plot, a notebook section, or two sentences you wrote with the notes closed. Watching a video at 2x with another tab focused does not count.

## Phase 0 — Setup

- [ ] Python 3.10+ environment, or a Colab notebook, runs the NumPy smoke test
- [ ] Kaggle account works
- [ ] Loaded a CSV and counted missing values

## Phase 1 — Math

- [ ] Linear algebra episodes 1, 2, 3, 4, 9, and 14
- [ ] Calculus episodes 1–4, through the chain rule
- [ ] Khan Academy: partial derivatives and the gradient
- [ ] Mean, variance, conditional probability, Bayes, Gaussian
- [ ] Bayes exercise computed; posterior near 0.47
- [ ] Gradient-descent video watched, then the 1D notebook: two learning rates, two plots, five sentences

Stretch:

- [ ] Line fit with a hand-written update
- [ ] *Mathematics for Machine Learning*, chapter 2, sections 2.1–2.5
- [ ] *Mathematics for Machine Learning*, chapter 6, sections 6.2–6.5

## Phase 2 — Core machine learning

Course 1:

- [ ] Week 1 quizzes
- [ ] Week 2 quizzes and the linear-regression lab
- [ ] Week 3 quizzes and the logistic-regression lab

Géron, one exercise each:

- [ ] Chapter 1, landscape notebook run
- [ ] Chapter 2, end-to-end notebook run
- [ ] Chapter 3, classification notebook run
- [ ] Chapter 4, training-models notebook run

Practice:

- [ ] Kaggle Learn, Intro to Machine Learning

Credit project (see the eight sections in the roadmap):

- [ ] Profile, including the `96` / `98` codes and missing income
- [ ] Stratified split; scalers fit on the training fold only
- [ ] Logistic-regression baseline
- [ ] One improved model
- [ ] Test ROC-AUC, plus precision and recall at a chosen threshold
- [ ] Note on `age`, and three bullets on what would have to be true before this model touched a decision

## Phase 3 — Networks, trees, generalization

Course 2:

- [ ] Week 1, including the practice lab
- [ ] Week 2, including the practice lab
- [ ] Week 2 backpropagation video (listed as optional on Coursera)
- [ ] Week 3, including the practice lab and the skewed-datasets video
- [ ] Week 4, including the practice lab
- [ ] 3Blue1Brown backpropagation and backpropagation calculus

NumPy network:

- [ ] Forward pass on `make_moons`, written in a fresh notebook
- [ ] Backward pass written by you
- [ ] Loss plot falls at a sensible learning rate
- [ ] Gradient shapes recorded
- [ ] Second learning rate, with three sentences on the curve

## Phase 4 — Readiness

- [ ] All 17 self-test items attempted below
- [ ] Five of them explained out loud, notes closed
- [ ] Adam skim: abstract, Algorithm 1, five sentences
- [ ] Semester page: courses, three items to hear again, at most two stretch continuations, one question, realistic weekly hours

## Stretch lane

Tick these only after the core item for that week is done.

- [ ] Kaggle Learn Pandas, beyond the missing-values lesson
- [ ] Kaggle Learn, Intermediate Machine Learning (missing values and pipelines)
- [ ] StatQuest second-voice videos you actually needed (list them in the weekly log)
- [ ] Géron chapters 5 and 6, notebooks run
- [ ] *Mathematics for Machine Learning*, chapter 5, sections 5.1, 5.2, and 5.6
- [ ] Géron chapter 10, through autograd linear regression
- [ ] fast.ai lesson 1
- [ ] fast.ai lesson 2
- [ ] fast.ai lesson 3
- [ ] Domingos, "A Few Useful Things to Know about Machine Learning"
- [ ] Course 3, Week 1 (clustering and anomaly detection)
- [ ] Course 3, Weeks 2 and 3

## Weekly log

One line on hours, the checkpoint answer, and the single thing to repeat. Short on purpose.

### Week 1

- Hours:
- Checkpoint (what a matrix does to a vector):
- Repeat:

### Week 2

- Hours:
- Checkpoint (derivative of `(x - 3) ** 2`, and the next step):
- Repeat:

### Week 3

- Hours:
- Checkpoint (which learning rate failed, and the Bayes posterior):
- Repeat:

### Week 4

- Hours:
- Checkpoint (cost versus gradient):
- Repeat:

### Week 5

- Hours:
- Checkpoint (feature scaling):
- Repeat:

### Week 6

- Hours:
- Checkpoint (logistic output as a probability; what L2 adds):
- Repeat:

### Week 7

- Hours:
- Checkpoint (which lending error is more expensive, and which metric):
- Repeat:

### Week 8

- Hours:
- Checkpoint (test metric, baseline, one next experiment):
- Repeat:

### Week 9

- Hours:
- Checkpoint (where the chain rule fires):
- Repeat:

### Week 10

- Hours:
- Checkpoint (low train error, high validation error: two changes):
- Repeat:

### Week 11

- Hours:
- Checkpoint (what the new learning rate did to the loss):
- Repeat:

### Week 12

- Hours:
- Checkpoint (which five items you said aloud):
- Repeat:

## Day-1 readiness

Do this in week 12 with the course notes closed. For each item, write two sentences in the space below, then mark one box.

- **From memory** means you could say it to a classmate without looking.
- **With notes** means you got there after peeking. Peeking is allowed while you repair the item. It does not count as ready.
- **Not yet** means the restudy pointer is your next session.

Score yourself by the "from memory" count after the repair pass.

- **14 or more:** start the semester on this plan. Put your energy into the two stretch items you chose.
- **9 to 13:** the week before classes, redo only the blank items, using the restudy pointer. Ignore new courses until those are done.
- **8 or fewer:** repair Course 1 and the NumPy network. Leave Course 3 and fast.ai alone until that repair is finished.

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

Restudy: your week-3 notebook, then Course 1, Week 1.

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

Restudy: Course 2, Week 2. Say what a stack of purely linear layers collapses to.

From memory [ ] · With notes [ ] · Not yet [ ]

### 15. Backpropagation, in words

Restudy: the Course 2 Week 2 backpropagation video, and the 3Blue1Brown pair from week 9. Name the chain rule and the thing that gets updated.

From memory [ ] · With notes [ ] · Not yet [ ]

### 16. A tree and a linear model

Restudy: Course 2, Week 4. Describe the shape of the decision boundary each one prefers.

From memory [ ] · With notes [ ] · Not yet [ ]

### 17. Data leakage

Restudy: Géron chapter 2 and the credit split.

Lending version: a field that is only filled in after the loan is booked. Say what happens to your test score if that field is available at training time, and what happens in production when it is not.

From memory [ ] · With notes [ ] · Not yet [ ]
