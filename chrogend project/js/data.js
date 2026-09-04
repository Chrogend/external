// js/data.js - 20 Core Mathematics Topics Data with 10 Detailed Lecture Pages Each

const CURRICULUM_DATA = [
  // ==========================================
  // TOPIC 1: MATHEMATICAL METHODS
  // ==========================================
  {
    id: 1,
    title: 'Mathematical Methods',
    code: 'MTH 01',
    description: 'Special functions (Gamma, Beta, Legendre, Bessel), series solutions of ODEs, and Fourier series expansions.',
    objectives: [
      'Understand properties and relations of Gamma and Beta functions',
      'Solve differential equations using Legendre polynomials',
      'Compute Bessel functions and recurrence relations',
      'Expand periodic functions into Fourier series'
    ],
    contentPages: [
      `### Page 1: Overview of Special Functions & Series Solutions

Welcome to **Mathematical Methods**! Special functions arise naturally in solving partial and ordinary differential equations in physics, engineering, and applied mathematics.

#### 📐 Introduction to Special Functions
Unlike elementary functions (polynomials, trigonometric, exponential), special functions are defined through definite integrals, infinite series, or differential equations.

Key functions covered in this module:
1. **Gamma Function** $\\Gamma(x)$
2. **Beta Function** $B(p, q)$
3. **Legendre Polynomials** $P_n(x)$
4. **Bessel Functions** $J_n(x)$

Proceed to Page 2 to examine Gamma and Beta functions in detail!`,

      `### Page 2: Gamma and Beta Functions — Definitions & Properties

#### 📐 Gamma Function Definition
The Gamma function extends the factorial to real and complex numbers:
$$\\Gamma(x) = \\int_{0}^{\\infty} t^{x-1} e^{-t} dt, \\quad (x > 0)$$

#### 🔑 Fundamental Properties of $\\Gamma(x)$
1. **Recurrence Relation**: $\\Gamma(x+1) = x \\Gamma(x)$
2. **Factorial Relation**: For $n \\in \\mathbb{N}$, $\\Gamma(n+1) = n!$
3. **Special Value**: $\\Gamma(1/2) = \\sqrt{\\pi}$

#### 📐 Beta Function Definition
The Beta function is a two-parameter Euler integral:
$$B(p, q) = \\int_{0}^{1} t^{p-1} (1-t)^{q-1} dt, \\quad (p, q > 0)$$

#### 🔗 Relation Between Beta and Gamma Functions
$$B(p, q) = \\frac{\\Gamma(p) \\Gamma(q)}{\\Gamma(p+q)}$$

Proceed to Page 3 for Legendre Polynomials!`,

      `### Page 3: Legendre Polynomials & Generating Functions

#### 📐 Legendre Differential Equation
$$(1-x^2) \\frac{d^2 y}{dx^2} - 2x \\frac{dy}{dx} + n(n+1)y = 0$$

Solutions for non-negative integers $n$ are **Legendre Polynomials** $P_n(x)$.

#### 📜 Rodrigues' Formula
$$P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n} \\left[(x^2 - 1)^n\\right]$$

#### ⚡ First Four Legendre Polynomials
- $P_0(x) = 1$
- $P_1(x) = x$
- $P_2(x) = \\frac{1}{2}(3x^2 - 1)$
- $P_3(x) = \\frac{1}{2}(5x^3 - 3x)$

#### ⚙️ Orthogonality Relation
$$\\int_{-1}^{1} P_n(x) P_m(x) dx = \\frac{2}{2n+1} \\delta_{nm}$$

Proceed to Page 4 for Bessel Functions!`,

      `### Page 4: Bessel Functions of First & Second Kind

#### 📐 Bessel Differential Equation
$$x^2 \\frac{d^2 y}{dx^2} + x \\frac{dy}{dx} + (x^2 - n^2) y = 0$$

#### 📜 Bessel Function of First Kind $J_n(x)$
$$J_n(x) = \\sum_{k=0}^{\\infty} \\frac{(-1)^k}{k! \\Gamma(n+k+1)} \\left(\\frac{x}{2}\\right)^{2k+n}$$

#### 🔑 Recurrence Formulas
1. $\\frac{d}{dx} [x^n J_n(x)] = x^n J_{n-1}(x)$
2. $J_{n-1}(x) + J_{n+1}(x) = \\frac{2n}{x} J_n(x)$

Proceed to Page 5 for Step-by-Step Worked Examples!`,

      `### Page 5: Step-by-Step Worked Example 1 (Gamma & Beta Functions)

#### 📝 Problem:
Evaluate the integral $I = \\int_{0}^{\\infty} x^4 e^{-2x} dx$.

#### 💡 Solution Breakdown:
- **Step 1**: Use substitution $u = 2x \\implies x = \\frac{u}{2}$ and $dx = \\frac{du}{2}$.
- **Step 2**: Substitute into the integral:
  $$I = \\int_{0}^{\\infty} \\left(\\frac{u}{2}\\right)^4 e^{-u} \\frac{du}{2} = \\frac{1}{32} \\int_{0}^{\\infty} u^4 e^{-u} du$$
- **Step 3**: Recognize the integral definition of $\\Gamma(5)$:
  $$\\int_{0}^{\\infty} u^{5-1} e^{-u} du = \\Gamma(5)$$
- **Step 4**: Compute $\\Gamma(5) = 4! = 24$:
  $$I = \\frac{24}{32} = \\frac{3}{4}$$

Proceed to Page 6 for Legendre Polynomial Expansion!`,

      `### Page 6: Step-by-Step Worked Example 2 (Legendre Expansion)

#### 📝 Problem:
Express $f(x) = x^3 - 2x^2 + 1$ as a linear combination of Legendre polynomials $P_n(x)$.

#### 💡 Solution Breakdown:
- **Step 1**: Recall standard polynomials:
  $P_3(x) = \\frac{1}{2}(5x^3 - 3x) \\implies x^3 = \\frac{2}{5}P_3(x) + \\frac{3}{5}x = \\frac{2}{5}P_3(x) + \\frac{3}{5}P_1(x)$
  $P_2(x) = \\frac{1}{2}(3x^2 - 1) \\implies x^2 = \\frac{2}{3}P_2(x) + \\frac{1}{3}P_0(x)$
- **Step 2**: Substitute expressions for $x^3$ and $x^2$ into $f(x)$:
  $$f(x) = \\left[\\frac{2}{5}P_3(x) + \\frac{3}{5}P_1(x)\\right] - 2\\left[\\frac{2}{3}P_2(x) + \\frac{1}{3}P_0(x)\\right] + P_0(x)$$
- **Step 3**: Simplify coefficients:
  $$f(x) = \\frac{2}{5}P_3(x) - \\frac{4}{3}P_2(x) + \\frac{3}{5}P_1(x) + \\frac{1}{3}P_0(x)$$

Proceed to Page 7 for Bessel Recurrence Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (Bessel Derivatives)

#### 📝 Problem:
Show that $\\frac{d}{dx}[x J_1(x)] = x J_0(x)$.

#### 💡 Solution Breakdown:
- **Step 1**: Use the general recurrence derivative formula $\\frac{d}{dx}[x^n J_n(x)] = x^n J_{n-1}(x)$.
- **Step 2**: Set $n = 1$:
  $$\\frac{d}{dx}[x^1 J_1(x)] = x^1 J_{1-1}(x) = x J_0(x)$$
- **Step 3**: Alternatively, differentiate term-by-term using series expansion:
  $$x J_1(x) = \\sum_{k=0}^{\\infty} \\frac{(-1)^k x^{2k+2}}{2^{2k+1} k! (k+1)!}$$
  $$\\frac{d}{dx}[x J_1(x)] = \\sum_{k=0}^{\\infty} \\frac{(-1)^k (2k+2) x^{2k+1}}{2^{2k+1} k! (k+1)!} = x \\sum_{k=0}^{\\infty} \\frac{(-1)^k x^{2k}}{2^{2k} (k!)^2} = x J_0(x)$$

Proceed to Page 8 for Fourier Series Foundations!`,

      `### Page 8: Fourier Series & Harmonic Analysis

#### 📐 Fourier Series Representation
Any piecewise continuous periodic function $f(x)$ with period $2L$ can be expanded into:
$$f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left[ a_n \\cos\\left(\\frac{n\\pi x}{L}\\right) + b_n \\sin\\left(\\frac{n\\pi x}{L}\\right) \\right]$$

#### 📜 Euler-Fourier Formulas
1. $a_0 = \\frac{1}{L} \\int_{-L}^{L} f(x) dx$
2. $a_n = \\frac{1}{L} \\int_{-L}^{L} f(x) \\cos\\left(\\frac{n\\pi x}{L}\\right) dx$
3. $b_n = \\frac{1}{L} \\int_{-L}^{L} f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) dx$

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

Solve these analytical problems before taking the Checkpoint Quiz:

1. **Problem 1**: Compute $\\Gamma(7/2)$ using the property $\\Gamma(x+1) = x\\Gamma(x)$.
2. **Problem 2**: Evaluate $B(3, 4)$ using the Beta-Gamma relation.
3. **Problem 3**: Evaluate $\\int_{-1}^{1} P_2(x)^2 dx$.
4. **Problem 4**: Express $J_2(x)$ in terms of $J_0(x)$ and $J_1(x)$ using recurrence relations.

Proceed to Page 10 for Summary and Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Core Takeaways
- $\\Gamma(x+1) = x\\Gamma(x)$ and $\\Gamma(1/2) = \\sqrt{\\pi}$
- $B(p, q) = \\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p+q)}$
- $P_n(x)$ form an orthogonal set on $[-1, 1]$ with norm $\\frac{2}{2n+1}$
- Bessel functions $J_n(x)$ satisfy $x^2 y'' + x y' + (x^2-n^2)y = 0$

You are now ready to attempt the **Mathematical Methods Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 11,
          type: 'mcq',
          question: 'What is the value of $\\Gamma(1/2)$?',
          options: ['$\\sqrt{\\pi}$', '$\\pi$', '1', '1/2'],
          correct: 0,
          explanation: 'By standard Euler integral derivation, $\\Gamma(1/2) = \\sqrt{\\pi}$.'
        },
        {
          id: 12,
          type: 'mcq',
          question: 'What is $P_1(x)$, the first-degree Legendre polynomial?',
          options: ['$x$', '$1$', '$x^2$', '$\\frac{1}{2}(3x^2-1)$'],
          correct: 0,
          explanation: '$P_1(x) = x$ according to Rodrigues formula.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 2: REAL ANALYSIS
  // ==========================================
  {
    id: 2,
    title: 'Real Analysis',
    code: 'MTH 02',
    description: 'Rigorous study of the real number system, completeness, sequences, limits, Cauchy sequences, and series convergence.',
    objectives: [
      'State and apply the Completeness Axiom of real numbers',
      'Prove sequence convergence using formal $\\varepsilon-N$ proofs',
      'Identify Cauchy sequences and understand completeness',
      'Apply convergence tests for infinite series'
    ],
    contentPages: [
      `### Page 1: Real Number System & Completeness Axiom

**Real Analysis** establishes the rigorous foundation of calculus.

#### 📐 The Real Field $\\mathbb{R}$
$\\mathbb{R}$ is an ordered field satisfying:
1. Algebraic axioms (addition, multiplication)
2. Order axioms ($<, >$)
3. **Completeness Axiom**

#### 🔑 Completeness Axiom
Every non-empty subset $S \\subset \\mathbb{R}$ that is bounded above has a **Least Upper Bound (Supremum)** in $\\mathbb{R}$, denoted $\\sup(S)$.

Proceed to Page 2 for Sequences!`,

      `### Page 2: Sequences of Real Numbers & Limits

#### 📐 Formal Definition of Sequence Limit
A sequence $(a_n)$ converges to $L \\in \\mathbb{R}$, written $\\lim_{n \\to \\infty} a_n = L$, if:
$$\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N} \\text{ such that } \\forall n \\ge N, |a_n - L| < \\varepsilon$$

#### 🔍 Limit Theorems
If $a_n \\to A$ and $b_n \\to B$, then:
- $(a_n + b_n) \\to A + B$
- $(a_n \\cdot b_n) \\to A \\cdot B$
- $(a_n / b_n) \\to A / B \\quad (B \\neq 0)$

Proceed to Page 3 for Bolzano-Weierstrass & Cauchy Sequences!`,

      `### Page 3: Bolzano-Weierstrass & Cauchy Sequences

#### 📐 Cauchy Sequence Definition
A sequence $(a_n)$ is a **Cauchy sequence** if:
$$\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N} \\text{ such that } \\forall m, n \\ge N, |a_m - a_n| < \\varepsilon$$

#### 🔑 Cauchy Completeness Theorem
In $\\mathbb{R}$, a sequence converges **if and only if** it is a Cauchy sequence.

#### 📜 Bolzano-Weierstrass Theorem
Every bounded sequence of real numbers has a convergent subsequence.

Proceed to Page 4 for Series Convergence!`,

      `### Page 4: Infinite Series Convergence Tests

#### 📐 Convergence Definition
An infinite series $\\sum_{n=1}^{\\infty} a_n$ converges if the sequence of partial sums $S_k = \\sum_{n=1}^{k} a_n$ has a finite limit.

#### ⚡ Core Convergence Tests
1. **Divergence Test**: If $\\lim a_n \\neq 0$, $\\sum a_n$ diverges.
2. **Comparison Test**: If $0 \\le a_n \\le b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges.
3. **Ratio Test**: $L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$. If $L < 1$ (converges), $L > 1$ (diverges).
4. **Root Test**: $L = \\lim \\sqrt[n]{|a_n|}$.

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 ($\\varepsilon-N$ Limit Proof)

#### 📝 Problem:
Prove using $\\varepsilon-N$ definition that $\\lim_{n \\to \\infty} \\frac{3n + 1}{n + 2} = 3$.

#### 💡 Solution Breakdown:
- **Step 1**: Analyze $|a_n - L|$:
  $$\\left| \\frac{3n + 1}{n + 2} - 3 \\right| = \\left| \\frac{3n + 1 - 3(n + 2)}{n + 2} \\right| = \\left| \\frac{-5}{n + 2} \\right| = \\frac{5}{n + 2}$$
- **Step 2**: Set inequality $\\frac{5}{n + 2} < \\varepsilon \\implies n + 2 > \\frac{5}{\\varepsilon} \\implies n > \\frac{5}{\\varepsilon} - 2$.
- **Step 3**: Formal Proof: Let $\\varepsilon > 0$. Choose $N = \\max\\left(1, \\left\\lceil \\frac{5}{\\varepsilon} - 2 \\right\\rceil + 1\\right)$.
- **Step 4**: For any $n \\ge N$, we have $n > \\frac{5}{\\varepsilon} - 2 \\implies \\left| \\frac{3n+1}{n+2} - 3 \\right| < \\varepsilon$. $\\blacksquare$

Proceed to Page 6 for Cauchy Sequence Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Cauchy Sequence)

#### 📝 Problem:
Show that $a_n = \\frac{1}{n}$ is a Cauchy sequence.

#### 💡 Solution Breakdown:
- **Step 1**: Estimate $|a_m - a_n|$ for $m, n \\ge N$:
  $$\\left| \\frac{1}{m} - \\frac{1}{n} \\right| \\le \\frac{1}{m} + \\frac{1}{n} \\le \\frac{1}{N} + \\frac{1}{N} = \\frac{2}{N}$$
- **Step 2**: Set $\\frac{2}{N} < \\varepsilon \\implies N > \\frac{2}{\\varepsilon}$.
- **Step 3**: For any $\\varepsilon > 0$, choose $N = \\lceil 2/\\varepsilon \\rceil + 1$.
- **Step 4**: Then $\\forall m, n \\ge N, |a_m - a_n| < \\varepsilon$. Thus $(a_n)$ is Cauchy.

Proceed to Page 7 for Ratio Test Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (Series Ratio Test)

#### 📝 Problem:
Determine the convergence of $\\sum_{n=1}^{\\infty} \\frac{n^2}{2^n}$.

#### 💡 Solution Breakdown:
- **Step 1**: Identify $a_n = \\frac{n^2}{2^n}$ and $a_{n+1} = \\frac{(n+1)^2}{2^{n+1}}$.
- **Step 2**: Compute ratio:
  $$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)^2}{2^{n+1}} \\cdot \\frac{2^n}{n^2} = \\frac{1}{2} \\left(\\frac{n+1}{n}\\right)^2 = \\frac{1}{2} \\left(1 + \\frac{1}{n}\\right)^2$$
- **Step 3**: Take limit as $n \\to \\infty$:
  $$L = \\lim_{n \\to \\infty} \\frac{1}{2} \\left(1 + \\frac{1}{n}\\right)^2 = \\frac{1}{2}(1)^2 = \\frac{1}{2}$$
- **Step 4**: Since $L = 1/2 < 1$, the series converges absolutely by Ratio Test.

Proceed to Page 8 for Continuity & Uniform Continuity!`,

      `### Page 8: Continuity & Uniform Continuity

#### 📐 Continuity at a Point
$f: E \\to \\mathbb{R}$ is continuous at $c \\in E$ if:
$$\\forall \\varepsilon > 0, \\exists \\delta > 0 \\text{ s.t. } |x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$$

#### 📐 Uniform Continuity
$f: E \\to \\mathbb{R}$ is **uniformly continuous** on $E$ if:
$$\\forall \\varepsilon > 0, \\exists \\delta > 0 \\text{ s.t. } \\forall x, y \\in E, |x - y| < \\delta \\implies |f(x) - f(y)| < \\varepsilon$$
($\\delta$ depends ONLY on $\\varepsilon$, not on $x$).

#### 📜 Heine-Cantor Theorem
If $f$ is continuous on a compact set $[a, b]$, then $f$ is uniformly continuous on $[a, b]$.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Find the supremum and infimum of $S = \\left\\{ \\frac{(-1)^n}{n} : n \\in \\mathbb{N} \\right\\}$.
2. **Problem 2**: Prove using $\\varepsilon-N$ that $\\lim_{n \\to \\infty} \\frac{1}{n^2} = 0$.
3. **Problem 3**: Test $\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$ for convergence using the Ratio Test.
4. **Problem 4**: Is $f(x) = x^2$ uniformly continuous on $(0, \\infty)$? Explain.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Analysis Theorems
- **Completeness Axiom**: Bounded above subsets of $\\mathbb{R}$ have a supremum in $\\mathbb{R}$.
- **Cauchy Criterion**: Sequence converges $\\iff$ Cauchy.
- **Bolzano-Weierstrass**: Bounded sequence has convergent subsequence.
- **Ratio Test**: $L < 1 \\implies$ Convergent, $L > 1 \\implies$ Divergent.

You are now ready for the **Real Analysis Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 21,
          type: 'mcq',
          question: 'What is the supremum of $S = \\{1 - \\frac{1}{n} : n \\in \\mathbb{N}\\}$?',
          options: ['1', '0', '2', 'Does not exist'],
          correct: 0,
          explanation: 'Elements approach 1 from below as $n \\to \\infty$; 1 is the least upper bound.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 3: ABSTRACT ALGEBRA
  // ==========================================
  {
    id: 3,
    title: 'Abstract Algebra',
    code: 'MTH 03',
    description: 'Group theory, subgroups, cyclic groups, permutation groups, cosets, Lagrange theorem, and group homomorphisms.',
    objectives: [
      'Verify group axioms for algebraic structures',
      'Apply Lagrange Theorem to find subgroup orders',
      'Identify normal subgroups and quotient groups',
      'Apply the First Isomorphism Theorem for Groups'
    ],
    contentPages: [
      `### Page 1: Group Definitions & Basic Axioms

**Abstract Algebra** studies algebraic structures such as groups, rings, and fields.

#### 📐 Group Axioms Definition
A set $G$ with a binary operation $\\cdot$ is a **Group** $(G, \\cdot)$ if:
1. **Closure**: $\\forall a, b \\in G, a \\cdot b \\in G$
2. **Associativity**: $\\forall a, b, c \\in G, (a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$
3. **Identity**: $\\exists e \\in G \\text{ s.t. } a \\cdot e = e \\cdot a = a$
4. **Inverse**: $\\forall a \\in G, \\exists a^{-1} \\in G \\text{ s.t. } a \\cdot a^{-1} = e$

#### 🔑 Abelian Group
If $a \\cdot b = b \\cdot a$ for all $a, b \\in G$, then $G$ is an **Abelian (Commutative) Group**.

Proceed to Page 2 for Subgroups!`,

      `### Page 2: Subgroups & Cyclic Groups

#### 📐 Subgroup Definition & Test
A subset $H \\subseteq G$ is a **subgroup** ($H \\le G$) if $H$ forms a group under the operation of $G$.

#### 📜 One-Step Subgroup Test
$H \\ne \\emptyset$ is a subgroup of $G \\iff \\forall a, b \\in H, a b^{-1} \\in H$.

#### 🌀 Cyclic Groups
A group $G$ is **cyclic** if $\\exists g \\in G$ such that $G = \\langle g \\rangle = \\{ g^n : n \\in \\mathbb{Z} \\}$.
- Example: $\\mathbb{Z}_n = \\{0, 1, 2, \\dots, n-1\\}$ under addition modulo $n$.

Proceed to Page 3 for Permutation Groups!`,

      `### Page 3: Permutation Groups & Symmetric Group $S_n$

#### 📐 Symmetric Group $S_n$
The set of all bijections $\\pi: \\{1, 2, \\dots, n\\} \\to \\{1, 2, \\dots, n\\}$ forms the **Symmetric Group** $S_n$.
- Order of $S_n$ is $|S_n| = n!$.

#### 🔄 Cycle Notation
A permutation can be written as disjoint cycles.
- Example in $S_3$: $(1\\, 2\\, 3)$ means $1 \\to 2, 2 \\to 3, 3 \\to 1$.

#### ⚖️ Even & Odd Permutations
Every permutation is a product of 2-cycles (transpositions). If the count is even, it is an even permutation (Alternate Group $A_n$).

Proceed to Page 4 for Cosets & Lagrange Theorem!`,

      `### Page 4: Cosets & Lagrange's Theorem

#### 📐 Left and Right Cosets
Let $H \\le G$ and $a \\in G$:
- **Left Coset**: $aH = \\{ ah : h \\in H \\}$
- **Right Coset**: $Ha = \\{ ha : h \\in H \\}$

#### 📜 Lagrange's Theorem
If $G$ is a finite group and $H \\le G$, then the order of $H$ divides the order of $G$:
$$|G| = |H| \\cdot [G : H]$$
where $[G : H]$ is the index of $H$ in $G$ (number of distinct cosets).

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Group Axiom Verification)

#### 📝 Problem:
Show that the set $G = \\{1, -1, i, -i\\}$ forms an abelian group under complex multiplication.

#### 💡 Solution Breakdown:
- **Step 1 (Closure)**: Multiply any two elements (e.g. $i \\cdot (-i) = 1 \\in G$). All products remain in $G$.
- **Step 2 (Associativity)**: Complex multiplication is naturally associative.
- **Step 3 (Identity)**: $1 \\in G$ acts as identity: $1 \\cdot z = z \\cdot 1 = z$.
- **Step 4 (Inverses)**: $1^{-1} = 1$, $(-1)^{-1} = -1$, $i^{-1} = -i$, $(-i)^{-1} = i$. All inverses belong to $G$.
- **Step 5 (Abelian)**: $z_1 z_2 = z_2 z_1$. Thus $G$ is an abelian group of order 4.

Proceed to Page 6 for Lagrange Theorem Application!`,

      `### Page 6: Step-by-Step Worked Example 2 (Lagrange Theorem)

#### 📝 Problem:
A group $G$ has order 30. What are the possible orders of its subgroups?

#### 💡 Solution Breakdown:
- **Step 1**: Apply Lagrange's Theorem: The order of any subgroup $H \\le G$ must divide $|G| = 30$.
- **Step 2**: List all positive divisors of 30:
  $$\\text{Divisors of 30} = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$$
- **Step 3**: Conclude: Any subgroup of $G$ must have an order from this exact set.

Proceed to Page 7 for Normal Subgroups & Quotient Groups!`,

      `### Page 7: Step-by-Step Worked Example 3 (Quotient Groups)

#### 📐 Normal Subgroup Definition
$N \\le G$ is a **Normal Subgroup** ($N \\trianglelefteq G$) if $aN = Na$ for all $a \\in G$.

#### 📜 Quotient Group $G/N$
If $N \\trianglelefteq G$, the set of cosets $G/N = \\{ aN : a \\in G \\}$ forms a group under $(aN)(bN) = (ab)N$.

#### 📝 Worked Problem:
Compute the order of the quotient group $\\mathbb{Z}_{12} / \\langle 4 \\rangle$.

#### 💡 Solution:
- Subgroup $\\langle 4 \\rangle = \\{0, 4, 8\\} \\implies |\\langle 4 \\rangle| = 3$.
- Order of quotient group: $|\\mathbb{Z}_{12} / \\langle 4 \\rangle| = \\frac{|\\mathbb{Z}_{12}|}{|\\langle 4 \\rangle|} = \\frac{12}{3} = 4$.

Proceed to Page 8 for Group Homomorphisms!`,

      `### Page 8: Group Homomorphisms & First Isomorphism Theorem

#### 📐 Group Homomorphism
A map $\\phi: G \\to H$ is a homomorphism if:
$$\\phi(a \\cdot b) = \\phi(a) * \\phi(b), \\quad \\forall a, b \\in G$$

#### 🔍 Kernel and Image
- $\\ker(\\phi) = \\{ g \\in G : \\phi(g) = e_H \\} \\trianglelefteq G$
- $\\text{Im}(\\phi) = \\{ \\phi(g) : g \\in G \\} \\le H$

#### 📜 First Isomorphism Theorem
$$G / \\ker(\\phi) \\cong \\text{Im}(\\phi)$$

Proceed to Page 9 for Practice Problems!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Prove that the intersection of two subgroups $H_1, H_2 \\le G$ is also a subgroup of $G$.
2. **Problem 2**: List all elements of the cyclic subgroup $\\langle 3 \\rangle$ in $\\mathbb{Z}_{15}$.
3. **Problem 3**: Show that any group of prime order is cyclic.
4. **Problem 4**: Find the kernel of the determinant homomorphism $\\det: GL_n(\\mathbb{R}) \\to \\mathbb{R}^*$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Takeaways
- Group requires Closure, Associativity, Identity, Inverse.
- **Lagrange Theorem**: Subgroup order $|H|$ divides group order $|G|$.
- **Normal Subgroup**: $aN = Na \\implies G/N$ is a quotient group.
- **First Isomorphism Theorem**: $G/\\ker(\\phi) \\cong \\text{Im}(\\phi)$.

You are now ready for the **Abstract Algebra Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 31,
          type: 'mcq',
          question: 'If $|G| = 24$, which of the following CANNOT be the order of a subgroup of $G$?',
          options: ['7', '6', '8', '12'],
          correct: 0,
          explanation: 'By Lagrange Theorem, subgroup order must divide 24. 7 does not divide 24.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 4: LINEAR ALGEBRA
  // ==========================================
  {
    id: 4,
    title: 'Linear Algebra',
    code: 'MTH 04',
    description: 'Vector spaces, subspaces, linear independence, basis, dimension, linear transformations, determinants, and eigenvalues.',
    objectives: [
      'Solve linear systems using matrix reduction and inversion',
      'Test sets of vectors for linear independence and basis',
      'Compute kernel and image of linear transformations',
      'Calculate eigenvalues, eigenvectors, and determinants'
    ],
    contentPages: [
      `### Page 1: Vector Spaces & Subspaces

**Linear Algebra** is the study of vector spaces and linear maps.

#### 📐 Vector Space Axioms
A set $V$ with vector addition $+_V$ and scalar multiplication $\\cdot_V$ over field $F$ is a **Vector Space** if it satisfies 8 axioms (Closure, Associativity, Commutativity, Additive Identity, Additive Inverse, Distributive properties).

#### 📜 Subspace Criterion
$W \\subseteq V$ is a subspace if:
1. $\\mathbf{0} \\in W$
2. $\\mathbf{u}, \\mathbf{v} \\in W \\implies \\mathbf{u} + \\mathbf{v} \\in W$
3. $c \\in F, \\mathbf{u} \\in W \\implies c\\mathbf{u} \\in W$

Proceed to Page 2 for Linear Independence & Basis!`,

      `### Page 2: Linear Independence, Basis & Dimension

#### 📐 Linear Independence
Vectors $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ are **linearly independent** if:
$$c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 + \\dots + c_k \\mathbf{v}_k = \\mathbf{0} \\implies c_1 = c_2 = \\dots = c_k = 0$$

#### 🏛️ Basis and Dimension
- A set $B = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ is a **Basis** of $V$ if it is linearly independent and spans $V$.
- The **Dimension** $\\dim(V)$ is the number of vectors in any basis of $V$.

Proceed to Page 3 for Linear Transformations!`,

      `### Page 3: Linear Transformations, Kernel & Range

#### 📐 Linear Transformation Definition
A mapping $T: V \\to W$ is linear if for all $\\mathbf{u}, \\mathbf{v} \\in V$ and $c \\in F$:
1. $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$
2. $T(c\\mathbf{u}) = cT(\\mathbf{u})$

#### 🔑 Kernel and Range (Image)
- **Kernel**: $\\ker(T) = \\{ \\mathbf{v} \\in V : T(\\mathbf{v}) = \\mathbf{0}_W \\}$
- **Image**: $\\text{Im}(T) = \\{ T(\\mathbf{v}) : \\mathbf{v} \\in V \\}$

#### 📜 Rank-Nullity Theorem
$$\\dim(\\ker(T)) + \\dim(\\text{Im}(T)) = \\dim(V)$$
$$\\text{Nullity}(T) + \\text{Rank}(T) = \\dim(V)$$

Proceed to Page 4 for Matrix Representation & Eigenvalues!`,

      `### Page 4: Eigenvalues & Eigenvectors

#### 📐 Eigenvalue Equation
For a square matrix $A \\in \\mathbb{R}^{n \\times n}$, a non-zero vector $\\mathbf{v}$ is an **eigenvector** with **eigenvalue** $\\lambda$ if:
$$A \\mathbf{v} = \\lambda \\mathbf{v}$$

#### 📜 Characteristic Equation
$$\\det(A - \\lambda I) = 0$$

Roots of the characteristic polynomial give the eigenvalues of $A$.

Proceed to Page 5 for Step-by-Step Worked Examples!`,

      `### Page 5: Step-by-Step Worked Example 1 (Testing Linear Independence)

#### 📝 Problem:
Determine if vectors $\\mathbf{v}_1 = (1, 2, 3)$, $\\mathbf{v}_2 = (0, 1, 4)$, and $\\mathbf{v}_3 = (5, 6, 0)$ are linearly independent in $\\mathbb{R}^3$.

#### 💡 Solution Breakdown:
- **Step 1**: Construct matrix with vectors as columns:
  $$A = \\begin{pmatrix} 1 & 0 & 5 \\\\ 2 & 1 & 6 \\\\ 3 & 4 & 0 \\end{pmatrix}$$
- **Step 2**: Calculate determinant:
  $$\\det(A) = 1(0 - 24) - 0 + 5(8 - 3) = -24 + 25 = 1$$
- **Step 3**: Since $\\det(A) = 1 \\ne 0$, the matrix is invertible and its columns are linearly independent.

Proceed to Page 6 for Rank-Nullity Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Rank-Nullity Theorem)

#### 📝 Problem:
Let $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$ be defined by $T(x, y, z) = (x + y, y - z)$. Find $\\ker(T)$, Nullity, Rank, and verify the Rank-Nullity Theorem.

#### 💡 Solution Breakdown:
- **Step 1**: Find $\\ker(T)$ by setting $T(x, y, z) = (0, 0)$:
  $$x + y = 0 \\implies x = -y$$
  $$y - z = 0 \\implies z = y$$
  Vector form: $(x, y, z) = (-y, y, y) = y(-1, 1, 1)$.
- **Step 2**: $\\ker(T) = \\text{span}\\{(-1, 1, 1)\\} \\implies \\text{Nullity} = 1$.
- **Step 3**: Since domain $\\mathbb{R}^3$ has dimension 3:
  $$\\text{Rank}(T) = \\dim(V) - \\text{Nullity}(T) = 3 - 1 = 2$$
- **Step 4**: Verify $1 + 2 = 3$. $\\blacksquare$

Proceed to Page 7 for Eigenvalue Computation!`,

      `### Page 7: Step-by-Step Worked Example 3 (Eigenvalues & Eigenvectors)

#### 📝 Problem:
Find the eigenvalues of $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$.

#### 💡 Solution Breakdown:
- **Step 1**: Form $A - \\lambda I = \\begin{pmatrix} 4-\\lambda & 1 \\\\ 2 & 3-\\lambda \\end{pmatrix}$.
- **Step 2**: Compute determinant:
  $$\\det(A - \\lambda I) = (4 - \\lambda)(3 - \\lambda) - 2 = \\lambda^2 - 7\\lambda + 12 - 2 = \\lambda^2 - 7\\lambda + 10$$
- **Step 3**: Solve characteristic equation:
  $$\\lambda^2 - 7\\lambda + 10 = 0 \\implies (\\lambda - 5)(\\lambda - 2) = 0$$
  $$\\lambda_1 = 5, \\quad \\lambda_2 = 2$$

Proceed to Page 8 for Inner Product Spaces & Gram-Schmidt!`,

      `### Page 8: Inner Product Spaces & Gram-Schmidt Process

#### 📐 Inner Product Definition
An inner product $\\langle \\mathbf{u}, \\mathbf{v} \\rangle$ generalizes the dot product satisfying Symmetry, Linearity, and Positive-definiteness.

#### 📜 Gram-Schmidt Orthogonalization Process
Given independent vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots\\}$, construct orthogonal vectors $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\dots\\}$:
1. $\\mathbf{u}_1 = \\mathbf{v}_1$
2. $\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{\\langle \\mathbf{v}_2, \\mathbf{u}_1 \\rangle}{\\|\\mathbf{u}_1\\|^2} \\mathbf{u}_1$
3. $\\mathbf{u}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\frac{\\langle \\mathbf{v}_k, \\mathbf{u}_j \\rangle}{\\|\\mathbf{u}_j\\|^2} \\mathbf{u}_j$

Proceed to Page 9 for Practice Problems!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Find the inverse of $A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$.
2. **Problem 2**: Determine the dimension of the subspace $W = \\{(x, y, z) \\in \\mathbb{R}^3 : x + 2y - z = 0\\}$.
3. **Problem 3**: Find the eigenvectors associated with $\\lambda = 5$ for $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$.
4. **Problem 4**: Apply Gram-Schmidt to orthogonalize $\\mathbf{v}_1 = (1, 1)$ and $\\mathbf{v}_2 = (1, 0)$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Linear Algebra Concepts
- **Linear Independence**: Determinant non-zero $\\implies$ independent basis vectors.
- **Rank-Nullity Theorem**: $\\text{Rank}(T) + \\text{Nullity}(T) = \\dim(V)$.
- **Eigenvalues**: Roots of $\\det(A - \\lambda I) = 0$.
- **Gram-Schmidt**: Converts basis into an orthogonal basis.

You are now ready for the **Linear Algebra Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 41,
          type: 'mcq',
          question: 'What is the determinant of $A = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$?',
          options: ['14', '20', '26', '7'],
          correct: 0,
          explanation: '$\\det(A) = (5)(4) - (2)(3) = 20 - 6 = 14$.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 5: NUMERICAL ANALYSIS
  // ==========================================
  {
    id: 5,
    title: 'Numerical Analysis',
    code: 'MTH 05',
    description: 'Root finding algorithms, polynomial interpolation, numerical differentiation, and quadrature integration formulas.',
    objectives: [
      'Solve non-linear equations using Bisection and Newton-Raphson methods',
      'Construct Lagrange and Newton interpolation polynomials',
      'Evaluate definite integrals using Trapezoidal and Simpson rules',
      'Analyze truncation and round-off error bounds'
    ],
    contentPages: [
      `### Page 1: Error Analysis & Computer Arithmetic

**Numerical Analysis** focuses on designing accurate algorithms for solving mathematical problems numerically.

#### 📐 Types of Errors
1. **Absolute Error**: $E_{abs} = |x_{true} - x_{approx}|$
2. **Relative Error**: $E_{rel} = \\frac{|x_{true} - x_{approx}|}{|x_{true}|}$
3. **Truncation Error**: Arises from approximating infinite processes with finite steps (e.g. Taylor series truncation).
4. **Round-off Error**: Caused by finite computer precision.

Proceed to Page 2 for Root-Finding Algorithms!`,

      `### Page 2: Root-Finding Methods (Bisection & Newton-Raphson)

#### 📐 Bisection Method
Based on Intermediate Value Theorem: If $f(a)f(b) < 0$, root lies in $[a, b]$. Midpoint $c = \\frac{a+b}{2}$.

#### 📜 Newton-Raphson Method
Uses tangent line approximations:
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
- **Convergence Rate**: Quadratic convergence (order 2) near simple roots.

Proceed to Page 3 for Interpolation!`,

      `### Page 3: Polynomial Interpolation (Lagrange & Newton)

#### 📐 Lagrange Interpolating Polynomial
Given $n+1$ points $(x_0, y_0), \\dots, (x_n, y_n)$:
$$P(x) = \\sum_{i=0}^{n} y_i L_i(x)$$
where basis polynomials $L_i(x)$ are:
$$L_i(x) = \\prod_{j=0, j \\neq i}^{n} \\frac{x - x_j}{x_i - x_j}$$

Proceed to Page 4 for Numerical Integration!`,

      `### Page 4: Numerical Integration (Trapezoidal & Simpson Rules)

#### 📐 Trapezoidal Rule
$$\\int_{a}^{b} f(x) dx \\approx \\frac{h}{2} [f(a) + f(b)], \\quad h = b - a$$

#### 📜 Simpson's 1/3 Rule
Requires an even number of subintervals $n$ ($h = \\frac{b-a}{n}$):
$$\\int_{a}^{b} f(x) dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4 \\sum_{\\text{odd } i} f(x_i) + 2 \\sum_{\\text{even } i} f(x_i) + f(x_n) \\right]$$

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Newton-Raphson Method)

#### 📝 Problem:
Find the root of $f(x) = x^3 - x - 2 = 0$ starting with $x_0 = 1.5$ up to 2 iterations.

#### 💡 Solution Breakdown:
- **Step 1**: Derivative $f'(x) = 3x^2 - 1$.
- **Step 2 (Iteration 1)**:
  $f(1.5) = (1.5)^3 - 1.5 - 2 = 3.375 - 3.5 = -0.125$
  $f'(1.5) = 3(2.25) - 1 = 5.75$
  $$x_1 = 1.5 - \\frac{-0.125}{5.75} = 1.5 + 0.02174 = 1.52174$$
- **Step 3 (Iteration 2)**:
  $f(1.52174) = (1.52174)^3 - 1.52174 - 2 = 3.5242 - 3.52174 = 0.00246$
  $f'(1.52174) = 3(1.52174)^2 - 1 = 5.9470$
  $$x_2 = 1.52174 - \\frac{0.00246}{5.9470} = 1.52133$$

Proceed to Page 6 for Lagrange Interpolation Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Lagrange Interpolation)

#### 📝 Problem:
Construct Lagrange polynomial for points $(1, 2)$, $(2, 3)$, and $(4, 11)$. Find $P(3)$.

#### 💡 Solution Breakdown:
- **Step 1**: Basis polynomials for $x_0=1, x_1=2, x_2=4$:
  $L_0(x) = \\frac{(x-2)(x-4)}{(1-2)(1-4)} = \\frac{(x-2)(x-4)}{3}$
  $L_1(x) = \\frac{(x-1)(x-4)}{(2-1)(2-4)} = \\frac{(x-1)(x-4)}{-2}$
  $L_2(x) = \\frac{(x-1)(x-2)}{(4-1)(4-2)} = \\frac{(x-1)(x-2)}{6}$
- **Step 2**: Evaluate at $x = 3$:
  $L_0(3) = \\frac{(1)(-1)}{3} = -1/3$
  $L_1(3) = \\frac{(2)(-1)}{-2} = 1$
  $L_2(3) = \\frac{(2)(1)}{6} = 1/3$
- **Step 3**: Compute $P(3) = 2(-1/3) + 3(1) + 11(1/3) = -2/3 + 3 + 11/3 = 12/3 + 3 = 4 + 3 = 6$.

Proceed to Page 7 for Simpson's Rule Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (Simpson's 1/3 Rule)

#### 📝 Problem:
Evaluate $\\int_{0}^{2} x^3 dx$ using Simpson's 1/3 rule with $n = 2$ subintervals.

#### 💡 Solution Breakdown:
- **Step 1**: $h = \\frac{2 - 0}{2} = 1$. Points: $x_0 = 0, x_1 = 1, x_2 = 2$.
- **Step 2**: Evaluate function values:
  $f(x_0) = 0^3 = 0$
  $f(x_1) = 1^3 = 1$
  $f(x_2) = 2^3 = 8$
- **Step 3**: Apply Simpson's 1/3 Formula:
  $$I \\approx \\frac{1}{3} [f(x_0) + 4f(x_1) + f(x_2)] = \\frac{1}{3} [0 + 4(1) + 8] = \\frac{12}{3} = 4$$
- **Step 4**: Exact value $\\int_{0}^{2} x^3 dx = \\left[ \\frac{x^4}{4} \\right]_0^2 = 4$. Simpson's rule is exact for cubic polynomials!

Proceed to Page 8 for Error Bounds!`,

      `### Page 8: Error Formulas & Convergence Rates

#### 📐 Error Bounds Summary
1. **Newton-Raphson Error**: $|e_{n+1}| \\le C |e_n|^2$ (Quadratic)
2. **Trapezoidal Error**: $E_{trap} = -\\frac{(b-a)^3}{12 n^2} f''(\\xi)$
3. **Simpson 1/3 Error**: $E_{simp} = -\\frac{(b-a)^5}{180 n^4} f^{(4)}(\\xi)$

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Perform 1 iteration of Bisection method for $f(x) = x^2 - 3 = 0$ on $[1, 2]$.
2. **Problem 2**: Write down the Newton-Raphson iteration formula for finding $\\sqrt{A}$.
3. **Problem 3**: Evaluate $\\int_{1}^{3} \\frac{1}{x} dx$ using Trapezoidal rule with $n=2$.
4. **Problem 4**: Calculate relative error if true value is $3.14159$ and approx is $3.14$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Takeaways
- **Newton-Raphson**: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.
- **Lagrange Interpolation**: $P(x) = \\sum y_i L_i(x)$.
- **Simpson 1/3 Rule**: Requires even $n$, exact up to degree 3 polynomials.

You are now ready for the **Numerical Analysis Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 51,
          type: 'mcq',
          question: 'What is the Newton-Raphson formula to solve $f(x) = 0$?',
          options: ['$x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$', '$x_{n+1} = x_n + \\frac{f(x_n)}{f\'(x_n)}$', '$x_{n+1} = f(x_n)$', '$x_{n+1} = \\frac{x_n + f(x_n)}{2}$'],
          correct: 0,
          explanation: 'Standard Newton-Raphson recurrence formula.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 6: ORDINARY DIFFERENTIAL EQUATIONS
  // ==========================================
  {
    id: 6,
    title: 'Ordinary Differential Equations',
    code: 'MTH 06',
    description: 'First-order ODEs (separable, linear, exact), integrating factors, and higher-order linear ODEs with constant coefficients.',
    objectives: [
      'Solve separable first-order differential equations',
      'Use integrating factors to solve linear first-order ODEs',
      'Identify and solve exact differential equations',
      'Find general solutions of 2nd-order homogeneous ODEs'
    ],
    contentPages: [
      `### Page 1: Classification & First-Order Separable Equations

**Ordinary Differential Equations (ODEs)** describe relationships between functions and their derivatives.

#### 📐 Order and Linearity
- **Order**: Order of highest derivative.
- **Linear ODE**: Degree of dependent variable $y$ and derivatives is 1.

#### 📜 Separable ODEs
General form: $\\frac{dy}{dx} = g(x) h(y)$.
Separate variables and integrate:
$$\\int \\frac{1}{h(y)} dy = \\int g(x) dx + C$$

Proceed to Page 2 for Integrating Factors!`,

      `### Page 2: First-Order Linear ODEs & Integrating Factors

#### 📐 Standard First-Order Linear Form
$$\\frac{dy}{dx} + P(x)y = Q(x)$$

#### 📜 Integrating Factor Method
1. Compute integrating factor:
   $$I(x) = e^{\\int P(x) dx}$$
2. Multiply ODE by $I(x)$:
   $$\\frac{d}{dx} [I(x) y] = I(x) Q(x)$$
3. Integrate both sides:
   $$y(x) = \\frac{1}{I(x)} \\int I(x) Q(x) dx$$

Proceed to Page 3 for Exact Differential Equations!`,

      `### Page 3: Exact Differential Equations

#### 📐 Definition of Exactness
An equation $M(x, y) dx + N(x, y) dy = 0$ is **exact** if:
$$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$$

#### 📜 Solution Procedure
Find potential function $F(x, y)$ such that $\\frac{\\partial F}{\\partial x} = M$ and $\\frac{\\partial F}{\\partial y} = N$. General solution is $F(x, y) = C$.

Proceed to Page 4 for 2nd-Order Homogeneous Linear ODEs!`,

      `### Page 4: 2nd-Order Homogeneous Linear ODEs

#### 📐 Standard Form with Constant Coefficients
$$a \\frac{d^2 y}{dx^2} + b \\frac{dy}{dx} + c y = 0$$

#### 📜 Characteristic Equation
$$a r^2 + b r + c = 0$$

#### 🔑 Cases for Roots $r_1, r_2$:
1. **Real & Distinct ($r_1 \\neq r_2$)**: $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$
2. **Repeated ($r_1 = r_2 = r$)**: $y = (C_1 + C_2 x) e^{r x}$
3. **Complex Conjugate ($r = \\alpha \\pm i \\beta$)**: $y = e^{\\alpha x} (C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (First-Order Linear ODE)

#### 📝 Problem:
Solve $\\frac{dy}{dx} + \\frac{2}{x}y = 4x$ for $x > 0$.

#### 💡 Solution Breakdown:
- **Step 1**: Identify $P(x) = \\frac{2}{x}$ and $Q(x) = 4x$.
- **Step 2**: Calculate Integrating Factor:
  $$I(x) = e^{\\int \\frac{2}{x} dx} = e^{2 \\ln x} = e^{\\ln(x^2)} = x^2$$
- **Step 3**: Multiply ODE by $x^2$:
  $$\\frac{d}{dx}[x^2 y] = x^2 (4x) = 4x^3$$
- **Step 4**: Integrate both sides:
  $$x^2 y = \\int 4x^3 dx = x^4 + C \\implies y(x) = x^2 + \\frac{C}{x^2}$$

Proceed to Page 6 for Exact ODE Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Exact ODE Solution)

#### 📝 Problem:
Solve $(2xy + 3) dx + (x^2 - 1) dy = 0$.

#### 💡 Solution Breakdown:
- **Step 1**: Test exactness:
  $M = 2xy + 3 \\implies \\frac{\\partial M}{\\partial y} = 2x$
  $N = x^2 - 1 \\implies \\frac{\\partial N}{\\partial x} = 2x$
  Since $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$, it is exact!
- **Step 2**: Integrate $M$ with respect to $x$:
  $$F(x, y) = \\int (2xy + 3) dx = x^2 y + 3x + g(y)$$
- **Step 3**: Differentiate $F$ with respect to $y$ and set equal to $N$:
  $$\\frac{\\partial F}{\\partial y} = x^2 + g'(y) = x^2 - 1 \\implies g'(y) = -1 \\implies g(y) = -y$$
- **Step 4**: Implicit Solution: $x^2 y + 3x - y = C$.

Proceed to Page 7 for 2nd-Order ODE Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (2nd-Order Homogeneous ODE)

#### 📝 Problem:
Solve $y'' - 6y' + 9y = 0$ with $y(0) = 2$ and $y'(0) = 5$.

#### 💡 Solution Breakdown:
- **Step 1**: Write characteristic equation:
  $$r^2 - 6r + 9 = 0 \\implies (r - 3)^2 = 0 \\implies r = 3 \\text{ (repeated)}$$
- **Step 2**: General solution form:
  $$y(x) = (C_1 + C_2 x) e^{3x}$$
- **Step 3**: Apply initial condition $y(0) = 2$:
  $$y(0) = C_1 e^0 = 2 \\implies C_1 = 2$$
- **Step 4**: Differentiate $y'(x) = C_2 e^{3x} + 3(C_1 + C_2 x) e^{3x}$. Apply $y'(0) = 5$:
  $$y'(0) = C_2 + 3(2) = 5 \\implies C_2 + 6 = 5 \\implies C_2 = -1$$
- **Step 5**: Particular solution: $y(x) = (2 - x) e^{3x}$.

Proceed to Page 8 for Non-Homogeneous ODEs!`,

      `### Page 8: Non-Homogeneous ODEs & Undetermined Coefficients

#### 📐 General Solution
$$y(x) = y_c(x) + y_p(x)$$
where $y_c$ is complementary homogeneous solution and $y_p$ is particular non-homogeneous solution.

#### 🔑 Trial Forms for $y_p(x)$
- If $R(x) = e^{kx} \\implies y_p = A e^{kx}$
- If $R(x) = \\sin(kx) \\implies y_p = A \\cos(kx) + B \\sin(kx)$
- If $R(x) = x^n \\implies y_p = A_n x^n + \\dots + A_0$

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Solve separable ODE $\\frac{dy}{dx} = \\frac{x}{y}$.
2. **Problem 2**: Find the integrating factor for $\\frac{dy}{dx} + 3y = e^{2x}$.
3. **Problem 3**: Solve $y'' + 4y = 0$.
4. **Problem 4**: Find a particular solution for $y'' - y = 2 e^{3x}$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key ODE Solution Methods
- **Integrating Factor**: $I(x) = e^{\\int P(x) dx}$ for $y' + Py = Q$.
- **Exact ODE**: $M_y = N_x \\implies F_x = M, F_y = N$.
- **Characteristic Roots**:
  - Distinct: $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$
  - Repeated: $y = (C_1 + C_2 x) e^{rx}$

You are now ready for the **ODE Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 61,
          type: 'mcq',
          question: 'What is the integrating factor for $\\frac{dy}{dx} + \\frac{2}{x}y = x^3$?',
          options: ['$x^2$', '$e^{2x}$', '$\\ln x$', '$2x$'],
          correct: 0,
          explanation: '$I(x) = e^{\\int \\frac{2}{x} dx} = e^{2\\ln x} = x^2$.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 7: COMPLEX ANALYSIS
  // ==========================================
  {
    id: 7,
    title: 'Complex Analysis',
    code: 'MTH 07',
    description: 'Complex numbers, Cauchy-Riemann equations, analytic functions, harmonic conjugates, and complex integration.',
    objectives: [
      'Express complex numbers in polar and exponential forms',
      'Test functions for analyticity using Cauchy-Riemann equations',
      'Construct harmonic conjugates for harmonic functions',
      'Apply Cauchy Integral Theorem to evaluate contour integrals'
    ],
    contentPages: [
      `### Page 1: Complex Numbers, Polar Form & Euler's Formula

**Complex Analysis** investigates functions of complex variables $z = x + iy$.

#### 📐 Representation of Complex Numbers
- **Cartesian Form**: $z = x + iy \\quad (x, y \\in \\mathbb{R}, i^2 = -1)$
- **Polar Form**: $z = r(\\cos\\theta + i\\sin\\theta)$, where $r = |z| = \\sqrt{x^2+y^2}$, $\\theta = \\arg(z) = \\arctan(y/x)$
- **Euler's Formula**: $e^{i\\theta} = \\cos\\theta + i\\sin\\theta \\implies z = r e^{i\\theta}$

Proceed to Page 2 for Cauchy-Riemann Equations!`,

      `### Page 2: Cauchy-Riemann Equations & Analyticity

#### 📐 Complex Differentiability
A complex function $f(z) = u(x, y) + i v(x, y)$ is differentiable at $z$ if:
$$f'(z) = \\lim_{\\Delta z \\to 0} \\frac{f(z + \\Delta z) - f(z)}{\\Delta z}$$

#### 📜 Cauchy-Riemann Equations
For $f(z)$ to be analytic, partial derivatives must satisfy:
$$\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y} \\quad \\text{and} \\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$$

#### 🔑 Derivative Formula
$$f'(z) = \\frac{\\partial u}{\\partial x} + i \\frac{\\partial v}{\\partial x} = \\frac{\\partial v}{\\partial y} - i \\frac{\\partial u}{\\partial y}$$

Proceed to Page 3 for Harmonic Functions!`,

      `### Page 3: Harmonic Functions & Harmonic Conjugates

#### 📐 Laplace Equation & Harmonic Functions
A real-valued function $u(x, y)$ is **harmonic** in domain $D$ if it satisfies Laplace's equation:
$$\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$$

#### 🔗 Harmonic Conjugates
If $f(z) = u + iv$ is analytic, then both $u$ and $v$ are harmonic, and $v$ is called the **harmonic conjugate** of $u$.

Proceed to Page 4 for Elementary Complex Functions!`,

      `### Page 4: Elementary Complex Functions

#### 📐 Complex Exponential & Trigonometric Functions
- $e^z = e^{x+iy} = e^x(\\cos y + i\\sin y)$
- $\\sin z = \\frac{e^{iz} - e^{-iz}}{2i}$
- $\\cos z = \\frac{e^{iz} + e^{-iz}}{2}$

#### 📜 Complex Logarithm
$$\\text{Ln}(z) = \\ln|z| + i \\text{Arg}(z), \\quad -\\pi < \\text{Arg}(z) \\le \\pi$$

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Cauchy-Riemann Verification)

#### 📝 Problem:
Test if $f(z) = z^2$ is analytic using Cauchy-Riemann equations.

#### 💡 Solution Breakdown:
- **Step 1**: Expand $f(z) = (x + iy)^2 = x^2 - y^2 + i(2xy)$.
  Real part $u(x, y) = x^2 - y^2$, Imaginary part $v(x, y) = 2xy$.
- **Step 2**: Calculate partial derivatives:
  $\\frac{\\partial u}{\\partial x} = 2x, \\quad \\frac{\\partial u}{\\partial y} = -2y$
  $\\frac{\\partial v}{\\partial x} = 2y, \\quad \\frac{\\partial v}{\\partial y} = 2x$
- **Step 3**: Compare C-R conditions:
  $\\frac{\\partial u}{\\partial x} = 2x = \\frac{\\partial v}{\\partial y} \\quad \\checkmark$
  $\\frac{\\partial u}{\\partial y} = -2y = -\\frac{\\partial v}{\\partial x} \\quad \\checkmark$
- **Step 4**: Conditions hold everywhere, so $f(z) = z^2$ is an **entire (analytic everywhere)** function.

Proceed to Page 6 for Harmonic Conjugate Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Finding Harmonic Conjugate)

#### 📝 Problem:
Given harmonic function $u(x, y) = 2x - x^3 + 3xy^2$, find its harmonic conjugate $v(x, y)$.

#### 💡 Solution Breakdown:
- **Step 1**: Apply C-R equation $\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}$:
  $$\\frac{\\partial u}{\\partial x} = 2 - 3x^2 + 3y^2 \\implies \\frac{\\partial v}{\\partial y} = 2 - 3x^2 + 3y^2$$
- **Step 2**: Integrate with respect to $y$:
  $$v(x, y) = \\int (2 - 3x^2 + 3y^2) dy = 2y - 3x^2y + y^3 + h(x)$$
- **Step 3**: Differentiate with respect to $x$ and set equal to $-\\frac{\\partial u}{\\partial y}$:
  $$\\frac{\\partial v}{\\partial x} = -6xy + h'(x)$$
  $$-\\frac{\\partial u}{\\partial y} = -(6xy) = -6xy \\implies h'(x) = 0 \\implies h(x) = C$$
- **Step 4**: Harmonic conjugate $v(x, y) = 2y - 3x^2y + y^3 + C$.

Proceed to Page 7 for Complex Integration!`,

      `### Page 7: Step-by-Step Worked Example 3 (Cauchy Integral Theorem)

#### 📜 Cauchy's Integral Theorem
If $f(z)$ is analytic within and on a simple closed contour $C$, then:
$$\\oint_C f(z) dz = 0$$

#### 📝 Worked Problem:
Evaluate $\\oint_C e^z dz$ where $C$ is the unit circle $|z| = 1$.

#### 💡 Solution:
- Since $f(z) = e^z$ is analytic everywhere in $\\mathbb{C}$, by Cauchy's Integral Theorem, $\\oint_C e^z dz = 0$.

Proceed to Page 8 for Cauchy Integral Formula!`,

      `### Page 8: Cauchy Integral Formula

#### 📜 Cauchy Integral Formula
If $f(z)$ is analytic inside and on simple closed contour $C$, and $z_0$ is inside $C$:
$$f(z_0) = \\frac{1}{2\\pi i} \\oint_C \\frac{f(z)}{z - z_0} dz$$
$$\\oint_C \\frac{f(z)}{z - z_0} dz = 2\\pi i f(z_0)$$

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Express $z = 1 + i\\sqrt{3}$ in polar form $r e^{i\\theta}$.
2. **Problem 2**: Show that $u(x, y) = x^2 - y^2$ is harmonic.
3. **Problem 3**: Evaluate $\\oint_C \\frac{1}{z - 2} dz$ where $C$ is circle $|z| = 3$.
4. **Problem 4**: Calculate $e^{i\\pi/2}$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Takeaways
- **Cauchy-Riemann**: $u_x = v_y$ and $u_y = -v_x$.
- **Harmonic Function**: $\\nabla^2 u = 0$.
- **Cauchy Integral Formula**: $\\oint_C \\frac{f(z)}{z-z_0} dz = 2\\pi i f(z_0)$.

You are now ready for the **Complex Analysis Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 71,
          type: 'mcq',
          question: 'If $f(z) = u + iv$ is analytic, what is the Cauchy-Riemann relation between $u_x$ and $v_y$?',
          options: ['$u_x = v_y$', '$u_x = -v_y$', '$u_x = u_y$', '$v_x = v_y$'],
          correct: 0,
          explanation: 'First Cauchy-Riemann equation states $u_x = v_y$.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 8: VECTOR ANALYSIS
  // ==========================================
  {
    id: 8,
    title: 'Vector Analysis',
    code: 'MTH 08',
    description: 'Vector algebra, dot/cross products, vector fields, gradient, divergence, curl, line integrals, and potential functions.',
    objectives: [
      'Compute vector products, magnitudes, and projections',
      'Calculate gradient $\\nabla f$, divergence $\\nabla \\cdot \\mathbf{F}$, and curl $\\nabla \\times \\mathbf{F}$',
      'Evaluate vector line integrals along spatial curves',
      'Identify conservative vector fields and scalar potential functions'
    ],
    contentPages: [
      `### Page 1: Vector Algebra, Dot Product & Cross Product

**Vector Analysis** deals with quantities having both magnitude and direction in space.

#### 📐 Dot Product (Scalar Product)
$$\\mathbf{a} \\cdot \\mathbf{b} = a_x b_x + a_y b_y + a_z b_z = |\\mathbf{a}| |\\mathbf{b}| \\cos\\theta$$
- Orthogonality condition: $\\mathbf{a} \\cdot \\mathbf{b} = 0 \\iff \\mathbf{a} \\perp \\mathbf{b}$.

#### 📐 Cross Product (Vector Product)
$$\\mathbf{a} \\times \\mathbf{b} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_x & a_y & a_z \\\\ b_x & b_y & b_z \\end{pmatrix}$$
- Parallel condition: $\\mathbf{a} \\times \\mathbf{b} = \\mathbf{0} \\iff \\mathbf{a} \\parallel \\mathbf{b}$.

Proceed to Page 2 for Vector Fields & Gradient!`,

      `### Page 2: Gradient Operator & Directional Derivatives

#### 📐 Gradient Vector $\\nabla f$
For a scalar field $f(x, y, z)$:
$$\\nabla f = \\frac{\\partial f}{\\partial x}\\mathbf{i} + \\frac{\\partial f}{\\partial y}\\mathbf{j} + \\frac{\\partial f}{\\partial z}\\mathbf{k}$$

#### 📜 Directional Derivative
Derivative of $f$ in the direction of unit vector $\\mathbf{u}$:
$$D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u}$$
- Maximum rate of increase occurs in the direction of $\\nabla f$, with magnitude $|\\nabla f|$.

Proceed to Page 3 for Divergence & Curl!`,

      `### Page 3: Divergence & Curl of Vector Fields

#### 📐 Divergence $\\nabla \\cdot \\mathbf{F}$
For vector field $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$:
$$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$$
- If $\\nabla \\cdot \\mathbf{F} = 0$, field is **Solenoidal** (incompressible).

#### 📐 Curl $\\nabla \\times \\mathbf{F}$
$$\\nabla \\times \\mathbf{F} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{pmatrix}$$
- If $\\nabla \\times \\mathbf{F} = \\mathbf{0}$, field is **Irrotational** (conservative).

Proceed to Page 4 for Line Integrals!`,

      `### Page 4: Line Integrals & Conservative Fields

#### 📐 Vector Line Integral
$$\\int_{C} \\mathbf{F} \\cdot d\\mathbf{r} = \\int_{a}^{b} \\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t) dt$$

#### 📜 Fundamental Theorem for Line Integrals
If $\\mathbf{F} = \\nabla f$ (conservative field):
$$\\int_{C} \\nabla f \\cdot d\\mathbf{r} = f(\\mathbf{r}(b)) - f(\\mathbf{r}(a))$$
Line integral is path-independent!

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Gradient & Directional Derivative)

#### 📝 Problem:
Find the directional derivative of $f(x, y, z) = x^2 y + z^3$ at $(1, 2, 1)$ in direction of $\\mathbf{v} = \\langle 2, -1, 2 \\rangle$.

#### 💡 Solution Breakdown:
- **Step 1**: Compute Gradient $\\nabla f = \\langle 2xy, x^2, 3z^2 \\rangle$.
- **Step 2**: Evaluate $\\nabla f$ at $(1, 2, 1)$:
  $$\\nabla f(1, 2, 1) = \\langle 2(1)(2), 1^2, 3(1)^2 \\rangle = \\langle 4, 1, 3 \\rangle$$
- **Step 3**: Find unit vector $\\mathbf{u}$:
  $$|\\mathbf{v}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = 3 \\implies \\mathbf{u} = \\frac{1}{3}\\langle 2, -1, 2 \\rangle$$
- **Step 4**: Compute $D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u}$:
  $$D_{\\mathbf{u}} f = \\langle 4, 1, 3 \\rangle \\cdot \\frac{1}{3}\\langle 2, -1, 2 \\rangle = \\frac{1}{3} (8 - 1 + 6) = \\frac{13}{3}$$

Proceed to Page 6 for Divergence & Curl Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Divergence & Curl)

#### 📝 Problem:
Find divergence and curl of $\\mathbf{F} = x^2 \\mathbf{i} + y^2 \\mathbf{j} + z^2 \\mathbf{k}$.

#### 💡 Solution Breakdown:
- **Step 1 (Divergence)**:
  $$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial}{\\partial x}(x^2) + \\frac{\\partial}{\\partial y}(y^2) + \\frac{\\partial}{\\partial z}(z^2) = 2x + 2y + 2z$$
- **Step 2 (Curl)**:
  $$\\nabla \\times \\mathbf{F} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ x^2 & y^2 & z^2 \\end{pmatrix}$$
  $$= \\mathbf{i}(0 - 0) - \\mathbf{j}(0 - 0) + \\mathbf{k}(0 - 0) = \\mathbf{0}$$
- **Step 3**: Since $\\nabla \\times \\mathbf{F} = \\mathbf{0}$, $\\mathbf{F}$ is irrotational.

Proceed to Page 7 for Line Integral Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (Line Integral Work Calculation)

#### 📝 Problem:
Compute work done $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ for $\\mathbf{F} = \\langle y, -x \\rangle$ along circle $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$ for $t \\in [0, 2\\pi]$.

#### 💡 Solution Breakdown:
- **Step 1**: Parametrize $\\mathbf{F}(\\mathbf{r}(t)) = \\langle \\sin t, -\\cos t \\rangle$.
- **Step 2**: Compute velocity vector $\\mathbf{r}'(t) = \\langle -\\sin t, \\cos t \\rangle$.
- **Step 3**: Compute dot product:
  $$\\mathbf{F} \\cdot \\mathbf{r}'(t) = (\\sin t)(-\\sin t) + (-\\cos t)(\\cos t) = -\\sin^2 t - \\cos^2 t = -1$$
- **Step 4**: Integrate over $t \\in [0, 2\\pi]$:
  $$\\int_{0}^{2\\pi} (-1) dt = -2\\pi$$

Proceed to Page 8 for Conservative Vector Fields!`,

      `### Page 8: Potential Functions & Conservative Fields

#### 📜 Test for Conservative Field in $\\mathbb{R}^3$
$\\mathbf{F}$ is conservative $\\iff \\nabla \\times \\mathbf{F} = \\mathbf{0}$.

#### 🔑 Finding Scalar Potential $f$
If $\\mathbf{F} = \\nabla f = \\langle P, Q, R \\rangle$:
1. $f(x, y, z) = \\int P dx + g(y, z)$
2. Match partial derivatives $f_y = Q$ and $f_z = R$ to find $g(y, z)$.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Find $\\mathbf{a} \\cdot \\mathbf{b}$ for $\\mathbf{a} = \\langle 1, 3, -2 \\rangle$ and $\\mathbf{b} = \\langle 4, -1, 2 \\rangle$.
2. **Problem 2**: Calculate $\\nabla f$ for $f(x, y, z) = x y^2 z^3$.
3. **Problem 3**: Is $\\mathbf{F} = \\langle y z, x z, x y \\rangle$ conservative? Find its potential $f$.
4. **Problem 4**: Calculate $\\nabla \\cdot (\\nabla \\times \\mathbf{F})$ for any smooth field.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Vector Operators
- **Gradient**: $\\nabla f = \\langle f_x, f_y, f_z \\rangle$.
- **Divergence**: $\\nabla \\cdot \\mathbf{F} = P_x + Q_y + R_z$.
- **Curl**: $\\nabla \\times \\mathbf{F}$. Irrotational when curl is zero.
- **Identity**: $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ always.

You are now ready for the **Vector Analysis Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 81,
          type: 'mcq',
          question: 'What is the divergence of $\\mathbf{F} = \\langle x^2, y^2, z^2 \\rangle$?',
          options: ['$2x + 2y + 2z$', '$x + y + z$', '$0$', '$2xyz$'],
          correct: 0,
          explanation: '$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial}{\\partial x}(x^2) + \\frac{\\partial}{\\partial y}(y^2) + \\frac{\\partial}{\\partial z}(z^2) = 2x + 2y + 2z$.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 9: ADVANCED REAL ANALYSIS
  // ==========================================
  {
    id: 9,
    title: 'Advanced Real Analysis',
    code: 'MTH 09',
    description: 'Sequences and series of functions, pointwise vs uniform convergence, Weierstrass M-test, and power series expansions.',
    objectives: [
      'Distinguish pointwise convergence from uniform convergence of function series',
      'Apply Weierstrass M-Test to prove uniform convergence',
      'Determine when differentiation and integration interchange with limits',
      'Compute radius and interval of convergence for power series'
    ],
    contentPages: [
      `### Page 1: Sequences & Series of Functions

**Advanced Real Analysis** investigates limiting behavior of function sequences $(f_n(x))$.

#### 📐 Pointwise Convergence
$f_n \\to f$ **pointwise** on set $E$ if for each $x \\in E$:
$$\\forall \\varepsilon > 0, \\exists N(\\varepsilon, x) \\in \\mathbb{N} \\text{ s.t. } n \\ge N \\implies |f_n(x) - f(x)| < \\varepsilon$$

Proceed to Page 2 for Uniform Convergence!`,

      `### Page 2: Uniform Convergence of Functions

#### 📐 Uniform Convergence Definition
$f_n \\to f$ **uniformly** on set $E$ if:
$$\\forall \\varepsilon > 0, \\exists N(\\varepsilon) \\in \\mathbb{N} \\text{ s.t. } \\forall x \\in E, n \\ge N \\implies |f_n(x) - f(x)| < \\varepsilon$$
($N$ depends ONLY on $\\varepsilon$, independent of $x$).

#### 📜 Uniform Norm Criterion
$$f_n \\to f \\text{ uniformly on } E \\iff \\lim_{n \\to \\infty} \\sup_{x \\in E} |f_n(x) - f(x)| = 0$$

Proceed to Page 3 for Weierstrass M-Test!`,

      `### Page 3: Weierstrass M-Test & Continuity Preservation

#### 📜 Weierstrass M-Test
Suppose $\\sum f_n(x)$ is a series of functions on $E$. If there exist constants $M_n$ such that:
1. $|f_n(x)| \\le M_n$ for all $x \\in E, n \\in \\mathbb{N}$
2. $\\sum_{n=1}^{\\infty} M_n$ converges

Then $\\sum_{n=1}^{\\infty} f_n(x)$ converges **uniformly and absolutely** on $E$.

#### 🔑 Continuity Theorem
If $f_n$ are continuous on $E$ and $f_n \\to f$ uniformly on $E$, then limit function $f$ is **continuous** on $E$.

Proceed to Page 4 for Limit Interchanges!`,

      `### Page 4: Interchange of Limits, Integrals & Derivatives

#### 📜 Integration Theorem
If $f_n \\to f$ uniformly on $[a, b]$, then:
$$\\lim_{n \\to \\infty} \\int_{a}^{b} f_n(x) dx = \\int_{a}^{b} \\left( \\lim_{n \\to \\infty} f_n(x) \\right) dx = \\int_{a}^{b} f(x) dx$$

#### 📜 Power Series Radius of Convergence
For power series $\\sum_{n=0}^{\\infty} c_n (x - a)^n$, radius of convergence $R$:
$$\\frac{1}{R} = \\limsup_{n \\to \\infty} |c_n|^{1/n} \\quad \\text{or} \\quad \\frac{1}{R} = \\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right|$$

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Pointwise vs Uniform Convergence)

#### 📝 Problem:
Analyze convergence of $f_n(x) = x^n$ on $[0, 1]$.

#### 💡 Solution Breakdown:
- **Step 1 (Pointwise Limit)**:
  For $x \\in [0, 1)$, $\\lim_{n \\to \\infty} x^n = 0$.
  For $x = 1$, $\\lim_{n \\to \\infty} 1^n = 1$.
  Pointwise limit function $f(x) = \\begin{cases} 0 & 0 \\le x < 1 \\\\ 1 & x = 1 \\end{cases}$.
- **Step 2 (Test Uniform Convergence)**:
  Each $f_n(x) = x^n$ is continuous on $[0, 1]$, but limit $f(x)$ is discontinuous at $x = 1$.
- **Step 3 (Conclusion)**:
  Since uniform limit of continuous functions must be continuous, $f_n(x)$ does **NOT** converge uniformly on $[0, 1]$.

Proceed to Page 6 for Weierstrass M-Test Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Weierstrass M-Test)

#### 📝 Problem:
Show that $\\sum_{n=1}^{\\infty} \\frac{\\cos(nx)}{n^2}$ converges uniformly on $\\mathbb{R}$.

#### 💡 Solution Breakdown:
- **Step 1**: Bound $f_n(x) = \\frac{\\cos(nx)}{n^2}$:
  $$\\left| \\frac{\\cos(nx)}{n^2} \\right| \\le \\frac{1}{n^2} = M_n, \\quad \\forall x \\in \\mathbb{R}$$
- **Step 2**: Test convergence of $\\sum M_n = \\sum_{n=1}^{\\infty} \\frac{1}{n^2}$:
  $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ is a convergent $p$-series ($p = 2 > 1$).
- **Step 3**: By Weierstrass M-Test, the series $\\sum_{n=1}^{\\infty} \\frac{\\cos(nx)}{n^2}$ converges uniformly and absolutely on $\\mathbb{R}$.

Proceed to Page 7 for Radius of Convergence Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (Power Series Radius)

#### 📝 Problem:
Find the radius of convergence for $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$.

#### 💡 Solution Breakdown:
- **Step 1**: $c_n = \\frac{1}{n!}$ and $c_{n+1} = \\frac{1}{(n+1)!}$.
- **Step 2**: Ratio formula for $1/R$:
  $$\\frac{1}{R} = \\lim_{n \\to \\infty} \\left| \\frac{c_{n+1}}{c_n} \\right| = \\lim_{n \\to \\infty} \\frac{n!}{(n+1)!} = \\lim_{n \\to \\infty} \\frac{1}{n+1} = 0$$
- **Step 3**: Since $1/R = 0$, $R = \\infty$. The series converges for all $x \\in \\mathbb{R}$.

Proceed to Page 8 for Taylor Series!`,

      `### Page 8: Taylor & Maclaurin Series

#### 📐 Taylor Series Definition
$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x - a)^n$$

#### 📜 Remainder Theorem (Lagrange Form)
$$R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!} (x - a)^{n+1}, \\quad c \\text{ between } a \\text{ and } x$$

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Find pointwise limit of $f_n(x) = \\frac{x}{n}$ on $[0, 1]$. Is it uniform?
2. **Problem 2**: Use Weierstrass M-Test for $\\sum_{n=1}^{\\infty} \\frac{x^n}{n^2 2^n}$ on $[-2, 2]$.
3. **Problem 3**: Find radius of convergence of $\\sum_{n=1}^{\\infty} n x^n$.
4. **Problem 4**: Write down Maclaurin series for $\\frac{1}{1-x}$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Takeaways
- **Uniform Convergence**: Preserves continuity, integration, and differentiation.
- **Weierstrass M-Test**: $|f_n(x)| \\le M_n$ with $\\sum M_n < \\infty \\implies$ uniform convergence.
- **Radius of Convergence**: $R = \\lim \\left| \\frac{c_n}{c_{n+1}} \\right|$.

You are now ready for the **Advanced Real Analysis Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 91,
          type: 'mcq',
          question: 'If $|f_n(x)| \\le M_n$ on $E$ and $\\sum M_n$ converges, what test guarantees uniform convergence of $\\sum f_n(x)$?',
          options: ['Weierstrass M-Test', 'Ratio Test', 'Root Test', 'Integral Test'],
          correct: 0,
          explanation: 'Weierstrass M-Test guarantees absolute and uniform convergence.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 10: ADVANCED ABSTRACT ALGEBRA
  // ==========================================
  {
    id: 10,
    title: 'Advanced Abstract Algebra',
    code: 'MTH 10',
    description: 'Ring theory, subrings, ideals, quotient rings, integral domains, fields, polynomial rings, and irreducibility criteria.',
    objectives: [
      'Verify ring axioms, subrings, and ideals',
      'Construct quotient rings $R/I$ and identify prime/maximal ideals',
      'Distinguish integral domains, unique factorization domains, and fields',
      'Test polynomial irreducibility using Eisenstein Criterion'
    ],
    contentPages: [
      `### Page 1: Rings, Subrings & Ring Axioms

**Advanced Abstract Algebra** shifts focus to structures with two operations: Addition ($+$) and Multiplication ($\\cdot$).

#### 📐 Ring Definition
A set $R$ with $+$ and $\\cdot$ is a **Ring** $(R, +, \\cdot)$ if:
1. $(R, +)$ is an Abelian Group.
2. $(R, \\cdot)$ is Associative.
3. Multiplication Distributes over Addition:
   $a(b + c) = ab + ac, \\quad (a + b)c = ac + bc$

#### 🔑 Commutative Ring & Ring with Unity
- **Commutative Ring**: $ab = ba$ for all $a, b \\in R$.
- **Ring with Unity**: Contains multiplicative identity $1_R \\neq 0_R$.

Proceed to Page 2 for Ideals & Quotient Rings!`,

      `### Page 2: Ideals & Quotient Rings

#### 📐 Ideal Definition
A subring $I \\subseteq R$ is a **Two-Sided Ideal** ($I \\trianglelefteq R$) if:
$$\\forall r \\in R, a \\in I \\implies r a \\in I \\quad \\text{and} \\quad a r \\in I$$

#### 📜 Quotient Ring $R/I$
For an ideal $I \\trianglelefteq R$, the cosets $R/I = \\{ r + I : r \\in R \\}$ form a ring under:
$$(r_1 + I) + (r_2 + I) = (r_1 + r_2) + I$$
$$(r_1 + I)(r_2 + I) = (r_1 r_2) + I$$

Proceed to Page 3 for Integral Domains & Fields!`,

      `### Page 3: Integral Domains & Fields

#### 📐 Zero Divisors & Integral Domains
- Elements $a, b \\neq 0$ are **zero divisors** if $ab = 0$.
- A commutative ring with unity and **no zero divisors** is an **Integral Domain**.

#### 🏛️ Fields
A commutative ring with unity where every non-zero element has a multiplicative inverse is a **Field**.
- Every field is an integral domain!

Proceed to Page 4 for Polynomial Rings & Irreducibility!`,

      `### Page 4: Polynomial Rings & Eisenstein Criterion

#### 📐 Polynomial Ring $F[x]$
Sets of polynomials with coefficients in field $F$ form a Principal Ideal Domain (PID).

#### 📜 Eisenstein's Irreducibility Criterion
Let $f(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_0 \\in \\mathbb{Z}[x]$. If there exists a prime $p$ such that:
1. $p \\nmid a_n$
2. $p \\mid a_i$ for all $i = 0, 1, \\dots, n-1$
3. $p^2 \\nmid a_0$

Then $f(x)$ is **irreducible** over $\\mathbb{Q}$.

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Verifying Ideals)

#### 📝 Problem:
Show that $I = 3\\mathbb{Z} = \\{3k : k \\in \\mathbb{Z}\\}$ is an ideal of $\\mathbb{Z}$.

#### 💡 Solution Breakdown:
- **Step 1 (Subgroup under +)**:
  $3a - 3b = 3(a - b) \\in 3\\mathbb{Z}$. Thus $(3\\mathbb{Z}, +)$ is a subgroup.
- **Step 2 (Absorption property)**:
  For any $r \\in \\mathbb{Z}$ and $3k \\in 3\\mathbb{Z}$:
  $$r \\cdot (3k) = 3(rk) \\in 3\\mathbb{Z}$$
- **Step 3**: Since multiplication absorbs elements, $3\\mathbb{Z}$ is an ideal of $\\mathbb{Z}$.

Proceed to Page 6 for Quotient Ring Construction!`,

      `### Page 6: Step-by-Step Worked Example 2 (Quotient Ring Construction)

#### 📝 Problem:
Describe the quotient ring $\\mathbb{R}[x] / \\langle x^2 + 1 \\rangle$.

#### 💡 Solution Breakdown:
- **Step 1**: Elements of quotient ring are cosets $p(x) + \\langle x^2 + 1 \\rangle$.
- **Step 2**: By polynomial division, $p(x) = q(x)(x^2 + 1) + (ax + b)$.
  Thus $p(x) + \\langle x^2 + 1 \\rangle = (ax + b) + \\langle x^2 + 1 \\rangle$.
- **Step 3**: Multiplication follows $x^2 \\equiv -1 \\pmod{x^2+1}$.
- **Step 4**: Identifies with complex numbers $a + bi$. Thus $\\mathbb{R}[x]/\\langle x^2 + 1 \\rangle \\cong \\mathbb{C}$.

Proceed to Page 7 for Eisenstein Criterion Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (Eisenstein Criterion)

#### 📝 Problem:
Prove that $f(x) = x^5 + 6x^3 + 9x + 3$ is irreducible over $\\mathbb{Q}$.

#### 💡 Solution Breakdown:
- **Step 1**: Coefficients: $a_5 = 1, a_4 = 0, a_3 = 6, a_2 = 0, a_1 = 9, a_0 = 3$.
- **Step 2**: Choose prime $p = 3$.
- **Step 3**: Verify Eisenstein conditions:
  1. $3 \\nmid 1$ (Leading coeff not divisible by 3) $\\checkmark$
  2. $3 \\mid 0, 6, 0, 9, 3$ (All lower coeffs divisible by 3) $\\checkmark$
  3. $3^2 = 9 \\nmid 3$ (Constant term not divisible by 9) $\\checkmark$
- **Step 4**: By Eisenstein Criterion, $f(x)$ is irreducible over $\\mathbb{Q}$.

Proceed to Page 8 for Field Extensions!`,

      `### Page 8: Field Extensions & Galois Theory Overview

#### 📐 Field Extension $K / F$
A field $K$ containing subfield $F$ is a field extension. Degree $[K : F]$ is dimension of $K$ as vector space over $F$.

#### 📜 Fundamental Theorem of Galois Theory
Relates subfields of $K$ to subgroups of Automorphism Group $\\text{Gal}(K/F)$.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Is $\\mathbb{Z}_6$ an integral domain? List its zero divisors.
2. **Problem 2**: Prove that every field is an integral domain.
3. **Problem 3**: Test $x^3 + 4x^2 + 2x + 2$ for irreducibility over $\\mathbb{Q}$.
4. **Problem 4**: Find all maximal ideals of $\\mathbb{Z}_{12}$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Takeaways
- **Integral Domain**: No zero divisors.
- **Ideal Absorption**: $r \\in R, a \\in I \\implies ra \\in I$.
- **Eisenstein Criterion**: Tests polynomial irreducibility over $\\mathbb{Q}$.
- $\\mathbb{R}[x]/\\langle x^2+1 \\rangle \\cong \\mathbb{C}$.

You are now ready for the **Advanced Abstract Algebra Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 101,
          type: 'mcq',
          question: 'What are the zero divisors in $\\mathbb{Z}_6$?',
          options: ['2, 3, 4', '1, 5', '2, 3', '0, 1, 2, 3, 4, 5'],
          correct: 0,
          explanation: '$2 \\cdot 3 = 6 \\equiv 0 \\pmod 6$ and $3 \\cdot 4 = 12 \\equiv 0 \\pmod 6$.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 11: COMPLEX ANALYSIS II
  // ==========================================
  {
    id: 11,
    title: 'Complex Analysis II',
    code: 'MTH 11',
    description: 'Laurent series expansions, classification of isolated singularities, Cauchy Residue Theorem, and real improper integral evaluation.',
    objectives: [
      'Expand complex functions into Laurent Series in annular domains',
      'Classify singularities (removable, poles, essential)',
      'Calculate residues at simple and higher-order poles',
      'Evaluate real improper integrals using Residue Calculus'
    ],
    contentPages: [
      `### Page 1: Complex Power Series & Laurent Series

**Complex Analysis II** extends analytic function theory to isolated singularities and residue integration.

#### 📐 Laurent Series Definition
If $f(z)$ is analytic in annulus $r < |z - z_0| < R$:
$$f(z) = \\sum_{n=-\\infty}^{\\infty} a_n (z - z_0)^n = \\sum_{n=0}^{\\infty} a_n (z - z_0)^n + \\sum_{n=1}^{\\infty} \\frac{b_n}{(z - z_0)^n}$$
- **Analytic Part**: Positive powers $\\sum_{n=0}^{\\infty} a_n (z - z_0)^n$
- **Principal Part**: Negative powers $\\sum_{n=1}^{\\infty} \\frac{b_n}{(z - z_0)^n}$

Proceed to Page 2 for Singularity Classification!`,

      `### Page 2: Classification of Isolated Singularities

#### 📐 Types of Isolated Singularities at $z = z_0$
1. **Removable Singularity**: Principal part has **0 terms** ($b_n = 0 \\quad \\forall n$).
   - Example: $\\frac{\\sin z}{z}$ at $z = 0$.
2. **Pole of Order $m$**: Principal part has **finite terms** ending at $\\frac{b_m}{(z-z_0)^m}$.
   - Example: $\\frac{1}{(z-2)^3}$ is a pole of order 3 at $z=2$.
3. **Essential Singularity**: Principal part has **infinitely many terms**.
   - Example: $e^{1/z} = 1 + \\frac{1}{z} + \\frac{1}{2!z^2} + \\dots$ at $z=0$.

Proceed to Page 3 for Residue Calculation Formulas!`,

      `### Page 3: Residue Formulas & Cauchy Residue Theorem

#### 📐 Residue Definition
The **Residue** of $f(z)$ at $z_0$, denoted $\\text{Res}(f, z_0)$, is coefficient $b_1$ of $\\frac{1}{z - z_0}$ in Laurent series.

#### 🔑 Formula for Simple Pole ($m=1$)
$$\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$$

#### 🔑 Formula for Pole of Order $m$
$$\\text{Res}(f, z_0) = \\frac{1}{(m-1)!} \\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}} \\left[ (z - z_0)^m f(z) \\right]$$

#### 📜 Cauchy Residue Theorem
$$\\oint_{C} f(z) dz = 2\\pi i \\sum_{k=1}^{N} \\text{Res}(f, z_k)$$

Proceed to Page 4 for Real Improper Integrals!`,

      `### Page 4: Evaluation of Real Improper Integrals

#### 📐 Real Integrals over $(-\\infty, \\infty)$
To evaluate $\\int_{-\\infty}^{\\infty} f(x) dx$:
1. Extend $x \\to z$ complex plane over upper half-plane semicircular contour $C_R$.
2. Verify $\\lim_{R \\to \\infty} \\int_{C_R} f(z) dz = 0$.
3. Apply Residue Theorem:
   $$\\int_{-\\infty}^{\\infty} f(x) dx = 2\\pi i \\sum_{\\text{Im}(z_k)>0} \\text{Res}(f, z_k)$$

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Laurent Series Expansion)

#### 📝 Problem:
Find the Laurent series for $f(z) = \\frac{1}{z(z - 1)}$ in annulus $0 < |z| < 1$.

#### 💡 Solution Breakdown:
- **Step 1**: Rewrite fraction:
  $$f(z) = \\frac{1}{z} \\cdot \\frac{-1}{1 - z}$$
- **Step 2**: Use geometric series $\\frac{1}{1 - z} = \\sum_{n=0}^{\\infty} z^n$ (valid for $|z| < 1$):
  $$f(z) = -\\frac{1}{z} \\left( 1 + z + z^2 + z^3 + \\dots \\right)$$
- **Step 3**: Expand:
  $$f(z) = -\\frac{1}{z} - 1 - z - z^2 - \\dots = -\\sum_{n=-1}^{\\infty} z^n$$
- **Step 4**: Principal part is $-\\frac{1}{z} \\implies z=0$ is a simple pole with residue $-1$.

Proceed to Page 6 for Residue Calculation Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Residue Computation)

#### 📝 Problem:
Compute residue of $f(z) = \\frac{z^2}{(z - 1)^2 (z + 2)}$ at $z = 1$.

#### 💡 Solution Breakdown:
- **Step 1**: Note that $z = 1$ is a pole of order $m = 2$.
- **Step 2**: Apply higher-order pole residue formula:
  $$\\text{Res}(f, 1) = \\frac{1}{(2-1)!} \\lim_{z \\to 1} \\frac{d}{dz} \\left[ (z - 1)^2 \\frac{z^2}{(z - 1)^2 (z + 2)} \\right]$$
- **Step 3**: Simplify inside derivative:
  $$\\frac{d}{dz} \\left[ \\frac{z^2}{z + 2} \\right] = \\frac{2z(z + 2) - z^2(1)}{(z + 2)^2} = \\frac{z^2 + 4z}{(z + 2)^2}$$
- **Step 4**: Take limit as $z \\to 1$:
  $$\\text{Res}(f, 1) = \\frac{1^2 + 4(1)}{(1 + 2)^2} = \\frac{5}{9}$$

Proceed to Page 7 for Real Improper Integral Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (Residue Integration)

#### 📝 Problem:
Evaluate $\\int_{-\\infty}^{\\infty} \\frac{1}{x^2 + 1} dx$ using residues.

#### 💡 Solution Breakdown:
- **Step 1**: Poles of $f(z) = \\frac{1}{z^2 + 1} = \\frac{1}{(z - i)(z + i)}$ are at $z = \\pm i$.
- **Step 2**: Only $z = i$ lies in upper half-plane $\\text{Im}(z) > 0$.
- **Step 3**: Compute residue at $z = i$:
  $$\\text{Res}(f, i) = \\lim_{z \\to i} (z - i) \\frac{1}{(z - i)(z + i)} = \\frac{1}{2i}$$
- **Step 4**: Apply Residue Theorem:
  $$\\int_{-\\infty}^{\\infty} \\frac{1}{x^2 + 1} dx = 2\\pi i \\text{Res}(f, i) = 2\\pi i \\left(\\frac{1}{2i}\\right) = \\pi$$

Proceed to Page 8 for Rouché's Theorem!`,

      `### Page 8: Argument Principle & Rouché's Theorem

#### 📜 Rouché's Theorem
If $f(z)$ and $g(z)$ are analytic inside and on simple closed contour $C$, and $|g(z)| < |f(z)|$ on $C$, then $f(z)$ and $f(z) + g(z)$ have the **same number of zeros** inside $C$.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Classify singularity of $f(z) = \\frac{\\cos z - 1}{z^2}$ at $z = 0$.
2. **Problem 2**: Calculate residue of $f(z) = \\frac{1}{z^2 - 4}$ at $z = 2$.
3. **Problem 3**: Evaluate $\\oint_{|z|=3} \\frac{z}{z^2 - 1} dz$.
4. **Problem 4**: Determine number of roots of $z^5 + 3z + 1 = 0$ inside $|z| = 2$ using Rouché's Theorem.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Residue Calculus Concepts
- **Laurent Principal Part**: Determines singularity type.
- **Residue at Simple Pole**: $\\lim_{z \\to z_0} (z - z_0) f(z)$.
- **Residue Theorem**: $\\oint_C f(z) dz = 2\\pi i \\sum \\text{Res}(f, z_k)$.

You are now ready for the **Complex Analysis II Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 111,
          type: 'mcq',
          question: 'What is the residue of $f(z) = \\frac{1}{z - 3}$ at $z = 3$?',
          options: ['1', '0', '3', '$2\\pi i$'],
          correct: 0,
          explanation: 'Coefficient of $\\frac{1}{z-3}$ is 1.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 12: MATHEMATICAL MODELLING
  // ==========================================
  {
    id: 12,
    title: 'Mathematical Modelling',
    code: 'MTH 12',
    description: 'Principles of model formulation, dimensional analysis, population dynamics, Lotka-Volterra predator-prey systems, and epidemic SIR models.',
    objectives: [
      'Formulate mathematical differential models from real-world problems',
      'Apply Buckingham Pi Theorem for dimensional analysis',
      'Analyze continuous population growth models (Exponential, Logistic)',
      'Perform phase plane analysis for Predator-Prey systems'
    ],
    contentPages: [
      `### Page 1: Principles & Stages of Mathematical Modelling

**Mathematical Modelling** translates real-world phenomena into mathematical representations.

#### 📐 Modelling Process Cycle
1. **Real-World Problem Formulation**
2. **Mathematical Abstraction & Assumptions**
3. **Model Solving (Analytical/Numerical)**
4. **Validation against Experimental Data**

Proceed to Page 2 for Dimensional Analysis!`,

      `### Page 2: Dimensional Analysis & Buckingham Pi Theorem

#### 📐 Fundamental Dimensions
Primary physical dimensions: Mass $[M]$, Length $[L]$, Time $[T]$.

#### 📜 Buckingham Pi Theorem
If a physical system involves $n$ variables expressed in $m$ fundamental dimensions, the system can be reduced to $k = n - m$ dimensionless parameters $\\Pi_1, \\Pi_2, \\dots, \\Pi_k$.

Proceed to Page 3 for Continuous Population Models!`,

      `### Page 3: Continuous Population Models (Exponential & Logistic)

#### 📐 Exponential Growth Model (Malthusian)
$$\\frac{dP}{dt} = r P \\implies P(t) = P_0 e^{rt}$$

#### 📜 Logistic Growth Model (Verhulst)
Accounts for environmental carrying capacity $K$:
$$\\frac{dP}{dt} = r P \\left(1 - \\frac{P}{K}\\right)$$

- **Solution**: $P(t) = \\frac{K P_0}{P_0 + (K - P_0)e^{-rt}}$

Proceed to Page 4 for Predator-Prey Models!`,

      `### Page 4: Predator-Prey Models (Lotka-Volterra Systems)

#### 📐 Lotka-Volterra System Equations
Let $x(t)$ be prey population and $y(t)$ be predator population:
$$\\frac{dx}{dt} = \\alpha x - \\beta x y$$
$$\\frac{dy}{dt} = \\delta x y - \\gamma y$$

#### 🔑 Equilibrium Points
1. $(0, 0)$ (Extinction)
2. $\\left(\\frac{\\gamma}{\\delta}, \\frac{\\alpha}{\\beta}\\right)$ (Coexistence periodic orbit)

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Buckingham Pi Analysis)

#### 📝 Problem:
Find dimensionless parameters for period $T$ of a simple pendulum depending on length $L$, mass $m$, and gravity $g$.

#### 💡 Solution Breakdown:
- **Step 1**: List variables: $T [T]$, $L [L]$, $m [M]$, $g [L T^{-2}]$. Total $n = 4$.
- **Step 2**: Dimensions count $m = 3$ ($M, L, T$).
- **Step 3**: Number of $\\Pi$ terms = $n - m = 4 - 3 = 1$.
- **Step 4**: Set $\\Pi = T^a L^b m^c g^d = [T]^a [L]^b [M]^c [L T^{-2}]^d = M^c L^{b+d} T^{a-2d}$.
- **Step 5**: Solve powers: $c = 0$, $b + d = 0 \\implies b = -d$, $a - 2d = 0 \\implies a = 2d$. Choose $d = 1/2 \\implies a = 1, b = -1/2$.
  $$\\Pi = \\frac{T \\sqrt{g}}{\\sqrt{L}} = T \\sqrt{\\frac{g}{L}} \\implies T = C \\sqrt{\\frac{L}{g}}$$

Proceed to Page 6 for Logistic Equation Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Logistic Differential Equation)

#### 📝 Problem:
Solve $\\frac{dP}{dt} = 0.1 P \\left(1 - \\frac{P}{1000}\\right)$ with $P(0) = 100$.

#### 💡 Solution Breakdown:
- **Step 1**: Identify $r = 0.1$, $K = 1000$, $P_0 = 100$.
- **Step 2**: Apply logistic solution formula:
  $$P(t) = \\frac{1000(100)}{100 + (1000 - 100)e^{-0.1t}} = \\frac{100000}{100 + 900 e^{-0.1t}}$$
- **Step 3**: Divide numerator and denominator by 100:
  $$P(t) = \\frac{1000}{1 + 9 e^{-0.1t}}$$
- **Step 4**: As $t \\to \\infty$, $e^{-0.1t} \\to 0 \\implies P(t) \\to 1000$ (carrying capacity).

Proceed to Page 7 for Phase Plane Analysis!`,

      `### Page 7: Step-by-Step Worked Example 3 (Lotka-Volterra Equilibrium)

#### 📝 Problem:
Find equilibrium points for $\\frac{dx}{dt} = 2x - x y$ and $\\frac{dy}{dt} = xy - 3y$.

#### 💡 Solution Breakdown:
- **Step 1**: Set $\\frac{dx}{dt} = x(2 - y) = 0 \\implies x = 0$ or $y = 2$.
- **Step 2**: Set $\\frac{dy}{dt} = y(x - 3) = 0 \\implies y = 0$ or $x = 3$.
- **Step 3**: Pair solutions:
  - If $x = 0 \\implies y = 0 \\implies (0, 0)$
  - If $y = 2 \\implies x = 3 \\implies (3, 2)$
- **Step 4**: Equilibria are $(0, 0)$ and $(3, 2)$.

Proceed to Page 8 for Epidemic SIR Models!`,

      `### Page 8: Epidemic Models (SIR Model Framework)

#### 📐 SIR Compartmental Model
Splits population into Susceptible $S$, Infectious $I$, and Recovered $R$:
$$\\frac{dS}{dt} = -\\beta S I, \\quad \\frac{dI}{dt} = \\beta S I - \\gamma I, \\quad \\frac{dR}{dt} = \\gamma I$$

#### 🔑 Basic Reproduction Number $R_0$
$$R_0 = \\frac{\\beta S_0}{\\gamma}$$
- If $R_0 > 1$, epidemic occurs. If $R_0 < 1$, disease dies out.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Write down the dimensions of Force $[F]$ and Pressure $[P]$.
2. **Problem 2**: Compute equilibrium carrying capacity for $\\frac{dP}{dt} = 0.5 P - 0.005 P^2$.
3. **Problem 3**: For SIR model with $\\beta = 0.001$, $\\gamma = 0.1$, $S_0 = 500$, calculate $R_0$.
4. **Problem 4**: Solve $\\frac{dx}{dt} = -k x$ for radioactive decay.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Modelling Concepts
- **Buckingham Pi**: $k = n - m$ dimensionless terms.
- **Logistic Model**: $P(t) \\to K$ as $t \\to \\infty$.
- **Lotka-Volterra**: Oscillation between predator and prey.
- **SIR Reproduction Number**: $R_0 > 1 \\implies$ epidemic threshold.

You are now ready for the **Mathematical Modelling Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 121,
          type: 'mcq',
          question: 'In the logistic growth model $\\frac{dP}{dt} = r P(1 - P/K)$, what does $K$ represent?',
          options: ['Carrying Capacity', 'Growth Rate', 'Initial Population', 'Extinction Point'],
          correct: 0,
          explanation: '$K$ represents the maximum sustainable population carrying capacity.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 13: NUMERICAL ANALYSIS II
  // ==========================================
  {
    id: 13,
    title: 'Numerical Analysis II',
    code: 'MTH 13',
    description: 'Direct and iterative methods for linear systems (LU decomposition, Gauss-Seidel), ODE numerical solvers (Runge-Kutta RK4), and finite difference methods.',
    objectives: [
      'Decompose matrices using LU Factorization ($PA = LU$)',
      'Solve linear systems using Jacobi and Gauss-Seidel iteration',
      'Implement Euler and 4th-order Runge-Kutta (RK4) ODE numerical algorithms',
      'Solve boundary value problems using Finite Difference methods'
    ],
    contentPages: [
      `### Page 1: Direct Methods for Linear Systems (LU Decomposition)

**Numerical Analysis II** focuses on advanced linear algebra algorithms and numerical differential equations.

#### 📐 LU Factorization Definition
Decomposes square matrix $A$ into:
$$A = L U$$
where $L$ is lower triangular with 1s on main diagonal, and $U$ is upper triangular.

#### 📜 Solving $A \\mathbf{x} = \\mathbf{b}$ via LU
1. Forward substitution: Solve $L \\mathbf{y} = \\mathbf{b}$ for $\\mathbf{y}$.
2. Back substitution: Solve $U \\mathbf{x} = \\mathbf{y}$ for $\\mathbf{x}$.

Proceed to Page 2 for Iterative Linear Solvers!`,

      `### Page 2: Iterative Methods (Jacobi & Gauss-Seidel)

#### 📐 Linear System Split
Rewrite $A \\mathbf{x} = \\mathbf{b}$ as $x_i = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j \\neq i} a_{ij} x_j \\right)$.

#### 📜 Jacobi Iteration
$$x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j \\neq i} a_{ij} x_j^{(k)} \\right)$$

#### 📜 Gauss-Seidel Iteration
Uses updated values immediately:
$$x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j < i} a_{ij} x_j^{(k+1)} - \\sum_{j > i} a_{ij} x_j^{(k)} \\right)$$
- **Convergence Condition**: Matrix $A$ is **Strictly Diagonally Dominant** ($|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|$).

Proceed to Page 3 for Numerical ODE Solvers!`,

      `### Page 3: Numerical Solutions of ODEs (Euler & Modified Euler)

#### 📐 Initial Value Problem
$$\\frac{dy}{dx} = f(x, y), \\quad y(x_0) = y_0$$

#### 📜 Euler's Method (First Order)
$$y_{n+1} = y_n + h f(x_n, y_n)$$

#### 📜 Modified Euler (Heun's Method - Second Order)
Predictor: $y_{n+1}^* = y_n + h f(x_n, y_n)$
Corrector: $y_{n+1} = y_n + \\frac{h}{2} [f(x_n, y_n) + f(x_{n+1}, y_{n+1}^*)]$

Proceed to Page 4 for Runge-Kutta RK4 Method!`,

      `### Page 4: Fourth-Order Runge-Kutta Method (RK4)

#### 📜 RK4 Algorithm
$$y_{n+1} = y_n + \\frac{h}{6} (k_1 + 2k_2 + 2k_3 + k_4)$$

where slope estimates are:
- $k_1 = f(x_n, y_n)$
- $k_2 = f\\left(x_n + \\frac{h}{2}, y_n + \\frac{h}{2} k_1\\right)$
- $k_3 = f\\left(x_n + \\frac{h}{2}, y_n + \\frac{h}{2} k_2\\right)$
- $k_4 = f(x_n + h, y_n + h k_3)$

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (LU Factorization)

#### 📝 Problem:
Find LU factorization of $A = \\begin{pmatrix} 2 & 1 \\\\ 6 & 8 \\end{pmatrix}$.

#### 💡 Solution Breakdown:
- **Step 1**: Set $L = \\begin{pmatrix} 1 & 0 \\\\ l_{21} & 1 \\end{pmatrix}$ and $U = \\begin{pmatrix} u_{11} & u_{12} \\\\ 0 & u_{22} \\end{pmatrix}$.
- **Step 2**: Multiply $LU = \\begin{pmatrix} u_{11} & u_{12} \\\\ l_{21} u_{11} & l_{21} u_{12} + u_{22} \\end{pmatrix}$.
- **Step 3**: Equate terms to matrix $A$:
  - $u_{11} = 2, \\quad u_{12} = 1$
  - $l_{21} u_{11} = 6 \\implies l_{21}(2) = 6 \\implies l_{21} = 3$
  - $l_{21} u_{12} + u_{22} = 8 \\implies 3(1) + u_{22} = 8 \\implies u_{22} = 5$
- **Step 4**: Result:
  $$L = \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}, \\quad U = \\begin{pmatrix} 2 & 1 \\\\ 0 & 5 \\end{pmatrix}$$

Proceed to Page 6 for Gauss-Seidel Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Gauss-Seidel Iteration)

#### 📝 Problem:
Perform 1 iteration of Gauss-Seidel for $\\begin{cases} 4x + y = 5 \\\\ x + 3y = 7 \\end{cases}$ starting with $(x^{(0)}, y^{(0)}) = (0, 0)$.

#### 💡 Solution Breakdown:
- **Step 1**: Express iteration formulas:
  $$x^{(k+1)} = \\frac{5 - y^{(k)}}{4}$$
  $$y^{(k+1)} = \\frac{7 - x^{(k+1)}}{3}$$
- **Step 2**: Compute $x^{(1)}$ using $y^{(0)} = 0$:
  $$x^{(1)} = \\frac{5 - 0}{4} = 1.25$$
- **Step 3**: Compute $y^{(1)}$ using updated $x^{(1)} = 1.25$:
  $$y^{(1)} = \\frac{7 - 1.25}{3} = \\frac{5.75}{3} = 1.9167$$
- **Step 4**: First iteration vector: $(1.25, 1.9167)$.

Proceed to Page 7 for RK4 Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (RK4 ODE Step)

#### 📝 Problem:
Apply 1 RK4 step to $\\frac{dy}{dx} = y, y(0) = 1$ with step size $h = 0.1$.

#### 💡 Solution Breakdown:
- **Step 1**: Compute slope coefficients:
  - $k_1 = f(0, 1) = 1$
  - $k_2 = f(0.05, 1 + 0.05(1)) = 1.05$
  - $k_3 = f(0.05, 1 + 0.05(1.05)) = 1.0525$
  - $k_4 = f(0.1, 1 + 0.1(1.0525)) = 1.10525$
- **Step 2**: Compute $y_1$:
  $$y_1 = 1 + \\frac{0.1}{6} (1 + 2(1.05) + 2(1.0525) + 1.10525) = 1 + \\frac{0.1}{6}(6.31025) = 1.10517$$
- **Step 3**: Compare with exact $e^{0.1} = 1.1051709$. Extremely accurate!

Proceed to Page 8 for Finite Difference Methods!`,

      `### Page 8: Boundary Value Problems & Finite Differences

#### 📐 Finite Difference Approximations
- **Centered First Derivative**: $y'(x) \\approx \\frac{y(x+h) - y(x-h)}{2h}$
- **Centered Second Derivative**: $y''(x) \\approx \\frac{y(x+h) - 2y(x) + y(x-h)}{h^2}$

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Is $A = \\begin{pmatrix} 2 & 3 \\\\ 4 & 1 \\end{pmatrix}$ strictly diagonally dominant?
2. **Problem 2**: Use Euler's method with $h=0.1$ to compute $y(0.1)$ for $y' = x + y, y(0)=1$.
3. **Problem 3**: Write down centered difference formula for $y''(x_i)$.
4. **Problem 4**: Find $L$ and $U$ for $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 8 \\end{pmatrix}$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Takeaways
- **LU Factorization**: $A = LU$.
- **Gauss-Seidel**: Convergence guaranteed for strictly diagonally dominant matrices.
- **RK4**: 4th-order local truncation error $O(h^5)$, global error $O(h^4)$.

You are now ready for the **Numerical Analysis II Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 131,
          type: 'mcq',
          question: 'What is the order of global accuracy for the 4th-order Runge-Kutta (RK4) method?',
          options: ['$O(h^4)$', '$O(h)$', '$O(h^2)$', '$O(h^5)$'],
          correct: 0,
          explanation: 'RK4 has a global truncation error of $O(h^4)$.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 14: VECTOR AND TENSOR ANALYSIS
  // ==========================================
  {
    id: 14,
    title: 'Vector and Tensor Analysis',
    code: 'MTH 14',
    description: 'Curvilinear coordinates, Jacobian transformations, integral theorems (Green, Stokes, Divergence), and introduction to tensor fields.',
    objectives: [
      'Transform vector operations between Cylindrical, Spherical, and Cartesian systems',
      'Compute Jacobian determinants for multivariable coordinate changes',
      'Apply Green Theorem, Stokes Theorem, and Divergence Theorem',
      'Understand contravariant, covariant, and metric tensors'
    ],
    contentPages: [
      `### Page 1: Curvilinear Coordinate Systems

**Vector and Tensor Analysis** examines vector field operations across generalized coordinate systems.

#### 📐 Cylindrical Coordinates $(r, \\theta, z)$
- $x = r \\cos\\theta, \\quad y = r \\sin\\theta, \\quad z = z$
- Volume element: $dV = r dr d\\theta dz$

#### 📐 Spherical Coordinates $(\\rho, \\theta, \\phi)$
- $x = \\rho \\sin\\phi \\cos\\theta, \\quad y = \\rho \\sin\\phi \\sin\\theta, \\quad z = \\rho \\cos\\phi$
- Volume element: $dV = \\rho^2 \\sin\\phi d\\rho d\\theta d\\phi$

Proceed to Page 2 for Jacobians!`,

      `### Page 2: Transformation of Coordinates & Jacobians

#### 📐 Jacobian Matrix & Determinant
For coordinate transformation $(x, y, z) \\to (u, v, w)$:
$$J = \\frac{\\partial(x, y, z)}{\\partial(u, v, w)} = \\det \\begin{pmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} & \\frac{\\partial x}{\\partial w} \\\\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} & \\frac{\\partial y}{\\partial w} \\\\ \\frac{\\partial z}{\\partial u} & \\frac{\\partial z}{\\partial v} & \\frac{\\partial z}{\\partial w} \\end{pmatrix}$$

Proceed to Page 3 for Green's Theorem!`,

      `### Page 3: Integral Theorems — Green's Theorem in the Plane

#### 📜 Green's Theorem
Let $C$ be a positively oriented, piecewise-smooth, simple closed curve enclosing region $D$ in $\\mathbb{R}^2$:
$$\\oint_{C} (P dx + Q dy) = \\iint_{D} \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dA$$

Proceed to Page 4 for Stokes' & Divergence Theorems!`,

      `### Page 4: Stokes' Theorem & Divergence Theorem

#### 📜 Stokes' Theorem (3D Surface to Line Integral)
$$\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_{S} (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$

#### 📜 Divergence Theorem (Gauss' Theorem - Volume to Surface)
$$\\iint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_{V} (\\nabla \\cdot \\mathbf{F}) dV$$

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Green's Theorem Calculation)

#### 📝 Problem:
Evaluate $\\oint_{C} (y^2 dx + x^2 dy)$ where $C$ is the boundary of square $[0, 1] \\times [0, 1]$.

#### 💡 Solution Breakdown:
- **Step 1**: Identify $P = y^2$ and $Q = x^2$.
- **Step 2**: Calculate partial derivatives:
  $$\\frac{\\partial Q}{\\partial x} = 2x, \\quad \\frac{\\partial P}{\\partial y} = 2y$$
- **Step 3**: Apply Green's Theorem:
  $$\\iint_{D} (2x - 2y) dA = \\int_{0}^{1} \\int_{0}^{1} (2x - 2y) dx dy$$
- **Step 4**: Compute inner integral:
  $$\\int_{0}^{1} (2x - 2y) dx = [x^2 - 2xy]_0^1 = 1 - 2y$$
- **Step 5**: Outer integral:
  $$\\int_{0}^{1} (1 - 2y) dy = [y - y^2]_0^1 = 1 - 1 = 0$$

Proceed to Page 6 for Divergence Theorem Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Divergence Theorem)

#### 📝 Problem:
Evaluate flux $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ for $\\mathbf{F} = \\langle x, y, z \\rangle$ over unit sphere $x^2 + y^2 + z^2 \\le 1$.

#### 💡 Solution Breakdown:
- **Step 1**: Compute divergence of $\\mathbf{F}$:
  $$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial}{\\partial x}(x) + \\frac{\\partial}{\\partial y}(y) + \\frac{\\partial}{\\partial z}(z) = 1 + 1 + 1 = 3$$
- **Step 2**: Apply Divergence Theorem:
  $$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V 3 dV = 3 \\text{Vol}(V)$$
- **Step 3**: Volume of unit sphere $V = \\frac{4}{3}\\pi(1)^3 = \\frac{4}{3}\\pi$.
- **Step 4**: Flux = $3 \\left( \\frac{4}{3}\\pi \\right) = 4\\pi$.

Proceed to Page 7 for Tensor Intro!`,

      `### Page 7: Step-by-Step Worked Example 3 (Spherical Jacobian)

#### 📝 Problem:
Compute Jacobian determinant $J = \\frac{\\partial(x, y)}{\\partial(r, \\theta)}$ for polar coordinates.

#### 💡 Solution Breakdown:
- **Step 1**: $x = r \\cos\\theta, y = r \\sin\\theta$.
- **Step 2**: Form matrix:
  $$J = \\det \\begin{pmatrix} \\frac{\\partial x}{\\partial r} & \\frac{\\partial x}{\\partial \\theta} \\\\ \\frac{\\partial y}{\\partial r} & \\frac{\\partial y}{\\partial \\theta} \\end{pmatrix} = \\det \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}$$
- **Step 3**: Compute determinant:
  $$J = r\\cos^2\\theta - (-r\\sin^2\\theta) = r(\\cos^2\\theta + \\sin^2\\theta) = r$$

Proceed to Page 8 for Tensors Intro!`,

      `### Page 8: Introduction to Tensors

#### 📐 Tensor Concept & Index Notation
- **Contravariant Vector (Rank 1 Tensor)**: Transforms as $A'^i = \\frac{\\partial x'^i}{\\partial x^j} A^j$.
- **Covariant Vector (Rank 1 Tensor)**: Transforms as $A'_i = \\frac{\\partial x^j}{\\partial x'^i} A_j$.
- **Metric Tensor $g_{ij}$**: Defines distance $ds^2 = g_{ij} dx^i dx^j$.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Compute spherical Jacobian $J = \\frac{\\partial(x, y, z)}{\\partial(\\rho, \\theta, \\phi)}$.
2. **Problem 2**: Use Green's theorem to compute $\\oint_C (x dy - y dx)$ for unit circle.
3. **Problem 3**: Evaluate $\\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$ for any closed surface $S$.
4. **Problem 4**: Write down metric tensor matrix $g_{ij}$ for Cartesian coordinates.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Integral Theorems & Tensors
- **Green's Theorem**: $\\oint_C (P dx + Q dy) = \\iint_D (Q_x - P_y) dA$.
- **Stokes' Theorem**: $\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$.
- **Divergence Theorem**: $\\iint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F}) dV$.

You are now ready for the **Vector & Tensor Analysis Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 141,
          type: 'mcq',
          question: 'What is the volume element $dV$ in cylindrical coordinates $(r, \\theta, z)$?',
          options: ['$r dr d\\theta dz$', '$dr d\\theta dz$', '$r^2 dr d\\theta dz$', '$\\sin\\theta dr d\\theta dz$'],
          correct: 0,
          explanation: 'Jacobian for cylindrical coordinates gives $dV = r dr d\\theta dz$.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 15: FUNCTIONAL ANALYSIS
  // ==========================================
  {
    id: 15,
    title: 'Functional Analysis',
    code: 'MTH 15',
    description: 'Normed vector spaces, Banach spaces, inner product spaces, Hilbert spaces, bounded linear operators, and fundamental operator theorems.',
    objectives: [
      'Verify norm and inner product axioms on vector spaces',
      'Distinguish Banach spaces (complete normed) and Hilbert spaces (complete inner product)',
      'Calculate operator norm $\|T\| = \\sup_{\\|x\\| \\le 1} \\|Tx\\|$',
      'Understand Hahn-Banach, Open Mapping, and Uniform Boundedness theorems'
    ],
    contentPages: [
      `### Page 1: Metric & Normed Spaces

**Functional Analysis** studies infinite-dimensional vector spaces and linear operators acting on them.

#### 📐 Normed Vector Space Axioms
A norm $\\|\\cdot\\|$ on vector space $V$ satisfies for all $x, y \\in V, \\alpha \\in F$:
1. $\\|x\\| \\ge 0$, and $\\|x\\| = 0 \\iff x = \\mathbf{0}$
2. \\|\\alpha x\\| = |\\alpha| \\cdot \\|x\\|
3. **Triangle Inequality**: $\\|x + y\\| \\le \\|x\\| + \\|y\\|$

#### 🏛️ Banach Space Definition
A normed space $V$ is a **Banach Space** if it is **complete** with respect to the metric $d(x, y) = \\|x - y\\|$ (every Cauchy sequence converges in $V$).

Proceed to Page 2 for Inner Product & Hilbert Spaces!`,

      `### Page 2: Inner Product & Hilbert Spaces

#### 📐 Inner Product Axioms
An inner product $\\langle x, y \\rangle$ induces norm $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$.

#### 📜 Cauchy-Schwarz Inequality
$$|\\langle x, y \\rangle| \\le \\|x\\| \\cdot \\|y\\|$$

#### 🏛️ Hilbert Space Definition
A complete inner product space is a **Hilbert Space**.
- Examples: $\\mathbb{R}^n$, $\\ell^2$ (sequence space), $L^2[a, b]$ (square-integrable functions).

Proceed to Page 3 for Bounded Linear Operators!`,

      `### Page 3: Bounded Linear Operators & Operator Norm

#### 📐 Bounded Operator Definition
A linear operator $T: X \\to Y$ between normed spaces is **bounded** if $\\exists M > 0$ such that:
$$\\|Tx\\|_Y \\le M \\|x\\|_X, \\quad \\forall x \\in X$$

#### 📜 Operator Norm
$$\\|T\\| = \\sup_{x \\neq \\mathbf{0}} \\frac{\\|Tx\\|_Y}{\\|x\\|_X} = \\sup_{\\|x\\| \\le 1} \\|Tx\\|_Y$$

#### 🔑 Continuity Theorem
For linear operators: Boundedness $\\iff$ Continuity at $\\mathbf{0} \\iff$ Continuity everywhere.

Proceed to Page 4 for Fundamental Theorems!`,

      `### Page 4: Fundamental Theorems of Functional Analysis

#### 📜 Hahn-Banach Theorem
Guarantees extension of bounded linear functionals from subspaces to the entire space while preserving norm.

#### 📜 Uniform Boundedness Principle (Banach-Steinhaus)
A pointwise bounded family of bounded operators on a Banach space is uniformly bounded in operator norm.

#### 📜 Open Mapping Theorem
A surjective bounded linear operator between Banach spaces maps open sets to open sets.

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Verifying Norm Axioms)

#### 📝 Problem:
Show that $\\|x\\|_1 = \\sum_{i=1}^{n} |x_i|$ defines a norm on $\\mathbb{R}^n$.

#### 💡 Solution Breakdown:
- **Step 1 (Non-negativity)**: $|x_i| \\ge 0 \\implies \\sum |x_i| \\ge 0$. Sum is 0 $\\iff$ each $|x_i|=0 \\iff x = \\mathbf{0}$.
- **Step 2 (Absolute Scalability)**:
  $$\\|\\alpha x\\|_1 = \\sum |\\alpha x_i| = \\sum |\\alpha||x_i| = |\\alpha| \\sum |x_i| = |\\alpha| \\|x\\|_1$$
- **Step 3 (Triangle Inequality)**: Using $|x_i + y_i| \\le |x_i| + |y_i|$:
  $$\\|x + y\\|_1 = \\sum |x_i + y_i| \\le \\sum (|x_i| + |y_i|) = \\sum |x_i| + \\sum |y_i| = \\|x\\|_1 + \\|y\\|_1$$
- **Step 4**: All 3 norm axioms hold. Thus $\\|\\cdot\\|_1$ is a valid norm.

Proceed to Page 6 for Operator Norm Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Computing Operator Norm)

#### 📝 Problem:
Compute operator norm of $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ given by $T(x_1, x_2) = (2x_1, 3x_2)$ under Euclidean norm.

#### 💡 Solution Breakdown:
- **Step 1**: Calculate $\\|Tx\\|^2$:
  $$\\|Tx\\|^2 = (2x_1)^2 + (3x_2)^2 = 4x_1^2 + 9x_2^2$$
- **Step 2**: Maximize $4x_1^2 + 9x_2^2$ subject to $\\|x\\|^2 = x_1^2 + x_2^2 \\le 1$.
- **Step 3**: Since $4x_1^2 + 9x_2^2 \\le 9(x_1^2 + x_2^2) \\le 9(1) = 9$.
- **Step 4**: Max value achieved at $(0, 1)$ where $\\|T(0, 1)\\| = 3$.
  Thus $\\|T\\| = 3$.

Proceed to Page 7 for Hilbert Space Orthogonality Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (Orthogonal Projection)

#### 📝 Problem:
In Hilbert space $H$, show that if $x \\perp y$, then $\\|x + y\\|^2 = \\|x\\|^2 + \\|y\\|^2$ (Pythagorean Theorem).

#### 💡 Solution Breakdown:
- **Step 1**: Expand induced norm:
  $$\\|x + y\\|^2 = \\langle x + y, x + y \\rangle = \\langle x, x \\rangle + \\langle x, y \\rangle + \\langle y, x \\rangle + \\langle y, y \\rangle$$
- **Step 2**: Apply orthogonality $x \\perp y \\implies \\langle x, y \\rangle = \\langle y, x \\rangle = 0$.
- **Step 3**: Simplify:
  $$\\|x + y\\|^2 = \\|x\\|^2 + 0 + 0 + \\|y\\|^2 = \\|x\\|^2 + \\|y\\|^2. \\quad \\blacksquare$$

Proceed to Page 8 for Space Classification!`,

      `### Page 8: Classification of Standard Function Spaces

#### 🏛️ Key Function Spaces
- $\\ell^p$: Sequence spaces with norm $\\|x\\|_p = \\left(\\sum |x_i|^p\\right)^{1/p}$. Complete Banach space for $1 \\le p \\le \\infty$.
- $L^2[a, b]$: Hilbert space of square-integrable functions with inner product $\\langle f, g \\rangle = \\int_{a}^{b} f(x) \\overline{g(x)} dx$.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Is $\\mathbb{R}^n$ with Euclidean norm a Hilbert space? Explain.
2. **Problem 2**: Prove Cauchy-Schwarz inequality for dot product in $\\mathbb{R}^2$.
3. **Problem 3**: Show that every inner product space is a normed space.
4. **Problem 4**: Compute operator norm of identity operator $I: X \\to X$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Takeaways
- **Banach Space**: Complete normed vector space.
- **Hilbert Space**: Complete inner product space.
- **Operator Norm**: $\\|T\\| = \\sup_{\\|x\\| \\le 1} \\|Tx\\|$.
- **Linear Operators**: Boundedness $\\iff$ Continuity.

You are now ready for the **Functional Analysis Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 500,
      passingScore: 60,
      questions: [
        {
          id: 151,
          type: 'mcq',
          question: 'What is a Hilbert space?',
          options: ['A complete inner product space', 'A complete normed vector space', 'Any metric space', 'A finite dimensional vector space'],
          correct: 0,
          explanation: 'A Hilbert space is defined as an inner product space that is complete under the induced norm.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 16: OPTIMIZATION THEORY
  // ==========================================
  {
    id: 16,
    title: 'Optimization Theory',
    code: 'MTH 16',
    description: 'Unconstrained and constrained optimization, convexity, Lagrange multipliers, Simplex algorithm, duality, and KKT conditions.',
    objectives: [
      'Formulate objective functions and constraints for optimization problems',
      'Locate extrema using Gradient and Hessian matrix criteria',
      'Solve equality-constrained problems via Lagrange Multipliers',
      'Solve Linear Programs using the Simplex Method and analyze Duality'
    ],
    contentPages: [
      `### Page 1: Introduction to Optimization & Extrema

**Optimization Theory** finds maximum or minimum values of objective functions subject to constraints.

#### 📐 Unconstrained Optimization Form
$$\\min_{\\mathbf{x} \\in \\mathbb{R}^n} f(\\mathbf{x})$$

#### 📜 First-Order Necessary Condition (FONC)
If $\\mathbf{x}^*$ is a local extremum of smooth function $f$, then:
$$\\nabla f(\\mathbf{x}^*) = \\mathbf{0}$$

#### 📜 Second-Order Conditions (Hessian Matrix $H$)
- $H(\\mathbf{x}^*) = \\nabla^2 f(\\mathbf{x}^*)$ is **Positive Definite** ($H > 0$) $\\implies$ Strict Local Minimum.
- $H(\\mathbf{x}^*)$ is **Negative Definite** ($H < 0$) $\\implies$ Strict Local Maximum.

Proceed to Page 2 for Convexity!`,

      `### Page 2: Convex Sets & Convex Optimization

#### 📐 Convex Set Definition
A set $C \\subseteq \\mathbb{R}^n$ is **convex** if $\\forall \\mathbf{x}, \\mathbf{y} \\in C$ and $\\lambda \\in [0, 1]$:
$$\\lambda \\mathbf{x} + (1-\\lambda)\\mathbf{y} \\in C$$

#### 📜 Convex Function Property
For a convex function, any **local minimum is a global minimum**!

Proceed to Page 3 for Lagrange Multipliers!`,

      `### Page 3: Constrained Optimization & Lagrange Multipliers

#### 📐 Equality-Constrained Problem
$$\\min f(\\mathbf{x}) \\quad \\text{subject to} \\quad g_i(\\mathbf{x}) = 0, \\, i = 1, \\dots, m$$

#### 📜 Lagrangian Function $\\mathcal{L}$
$$\\mathcal{L}(\\mathbf{x}, \\boldsymbol{\\lambda}) = f(\\mathbf{x}) + \\sum_{i=1}^{m} \\lambda_i g_i(\\mathbf{x})$$

#### 🔑 First-Order System
$$\\nabla_{\\mathbf{x}} \\mathcal{L} = \\mathbf{0} \\quad \\text{and} \\quad \\nabla_{\\boldsymbol{\\lambda}} \\mathcal{L} = \\mathbf{0}$$

Proceed to Page 4 for Linear Programming & Simplex!`,

      `### Page 4: Linear Programming & Simplex Algorithm

#### 📐 Linear Program (Standard Form)
$$\\text{Maximize } Z = \\mathbf{c}^T \\mathbf{x} \\quad \\text{subject to } A\\mathbf{x} \\le \\mathbf{b}, \\, \\mathbf{x} \\ge \\mathbf{0}$$

#### 📜 Simplex Method Basics
Moves along adjacent extreme points (vertices) of the feasible polyhedron until indicator row ($C_j - Z_j \\le 0$) signals optimality.

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Hessian Extrema Test)

#### 📝 Problem:
Find and classify critical points of $f(x, y) = x^2 + y^2 - 4x + 6y + 10$.

#### 💡 Solution Breakdown:
- **Step 1**: Compute Gradient $\\nabla f = \\langle 2x - 4, 2y + 6 \\rangle$.
- **Step 2**: Set $\\nabla f = \\mathbf{0}$:
  $$2x - 4 = 0 \\implies x = 2$$
  $$2y + 6 = 0 \\implies y = -3$$
  Critical point at $(2, -3)$.
- **Step 3**: Calculate Hessian Matrix $H$:
  $$H = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$$
- **Step 4**: Determinant $\\det(H) = 4 > 0$ and $f_{xx} = 2 > 0 \\implies$ Positive Definite.
  Thus $(2, -3)$ is a **Global Minimum** with value $f(2, -3) = 4 + 9 - 8 - 18 + 10 = -3$.

Proceed to Page 6 for Lagrange Multiplier Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Lagrange Multipliers)

#### 📝 Problem:
Find max of $f(x, y) = x y$ subject to constraint $x + y = 10$.

#### 💡 Solution Breakdown:
- **Step 1**: Constraint $g(x, y) = x + y - 10 = 0$.
- **Step 2**: Form Lagrangian $\\mathcal{L}(x, y, \\lambda) = x y - \\lambda (x + y - 10)$.
- **Step 3**: Take partial derivatives:
  $$\\frac{\\partial \\mathcal{L}}{\\partial x} = y - \\lambda = 0 \\implies y = \\lambda$$
  $$\\frac{\\partial \\mathcal{L}}{\\partial y} = x - \\lambda = 0 \\implies x = \\lambda$$
  $$\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = -(x + y - 10) = 0 \\implies x + y = 10$$
- **Step 4**: Equate $x = y \\implies 2x = 10 \\implies x = 5, y = 5$.
- **Step 5**: Maximum value $f(5, 5) = 25$.

Proceed to Page 7 for KKT Conditions!`,

      `### Page 7: Karush-Kuhn-Tucker (KKT) Conditions

#### 📜 KKT Conditions for Inequality Constraints $\\min f(\\mathbf{x})$ s.t. $g_i(\\mathbf{x}) \\le 0$:
1. **Stationarity**: $\\nabla f(\\mathbf{x}^*) + \\sum \\mu_i \\nabla g_i(\\mathbf{x}^*) = \\mathbf{0}$
2. **Primal Feasibility**: $g_i(\\mathbf{x}^*) \\le 0$
3. **Dual Feasibility**: $\\mu_i \\ge 0$
4. **Complementary Slackness**: $\\mu_i g_i(\\mathbf{x}^*) = 0$

Proceed to Page 8 for Duality Theory!`,

      `### Page 8: Duality Theory in Optimization

#### 📐 Primal vs Dual Problem
For every Linear Program (Primal), there exists a corresponding **Dual LP**.
- **Weak Duality**: $Z_{primal} \\le Z_{dual}$
- **Strong Duality**: At optimal solutions, $Z_{primal}^* = Z_{dual}^*$.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Find critical points of $f(x, y) = x^3 - 3x + y^2$.
2. **Problem 2**: Use Lagrange multipliers to minimize $x^2 + y^2$ subject to $x + y = 4$.
3. **Problem 3**: Write down the dual problem for $\\text{Max } 3x_1 + 2x_2$ s.t. $x_1 + x_2 \\le 4, x_1, x_2 \\ge 0$.
4. **Problem 4**: State complementary slackness condition in KKT.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Optimization Concepts
- **Hessian Test**: $H > 0 \\implies$ Min, $H < 0 \\implies$ Max.
- **Lagrange Multipliers**: $\\nabla f = \\lambda \\nabla g$.
- **KKT Conditions**: Extend Lagrange to inequality constraints.
- **Simplex Method**: Traverses vertices of feasible convex polyhedron.

You are now ready for the **Optimization Theory Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 450,
      passingScore: 60,
      questions: [
        {
          id: 161,
          type: 'mcq',
          question: 'In Simplex algorithm for maximization, when is the tableau optimal?',
          options: ['When all indicator row entries ($C_j - Z_j$) are $\\le 0$', 'When all variables are 0', 'When objective function equals 1', 'When there are no constraints'],
          correct: 0,
          explanation: 'Maximization optimality occurs when no positive coefficients remain in the indicator row.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 17: GENERAL TOPOLOGY
  // ==========================================
  {
    id: 17,
    title: 'General Topology',
    code: 'MTH 17',
    description: 'Topological spaces, open/closed sets, interior/closure operators, basis, continuous maps, homeomorphisms, Hausdorff spaces, and compactness.',
    objectives: [
      'Verify topological space axioms on arbitrary sets',
      'Determine interior, closure, boundary, and limit points of sets',
      'Prove continuity and homeomorphisms between topological spaces',
      'Distinguish separation axioms ($T_0-T_4$), compactness, and connectedness'
    ],
    contentPages: [
      `### Page 1: Definition of Topological Spaces & Open Sets

**General Topology** abstracts geometry by studying properties preserved under continuous deformations.

#### 📐 Topological Space Axioms
A collection $\\tau$ of subsets of set $X$ is a **Topology** on $X$ if:
1. $\\emptyset, X \\in \\tau$
2. Any union of sets in $\\tau$ belongs to $\\tau$ (Closed under arbitrary unions).
3. Any finite intersection of sets in $\\tau$ belongs to $\\tau$ (Closed under finite intersections).

Sets in $\\tau$ are called **Open Sets**.

Proceed to Page 2 for Closed Sets & Operators!`,

      `### Page 2: Closed Sets, Interior & Closure Operators

#### 📐 Closed Sets
A subset $A \\subseteq X$ is **closed** if its complement $X \\setminus A$ is open in $\\tau$.

#### 🔑 Set Operators
1. **Interior $\\text{Int}(A)$**: Union of all open sets contained in $A$ (Largest open set inside $A$).
2. **Closure $\\overline{A}$**: Intersection of all closed sets containing $A$ (Smallest closed set containing $A$).
3. **Boundary $\\partial A$**: $\\partial A = \\overline{A} \\setminus \\text{Int}(A)$.

Proceed to Page 3 for Basis & Subbasis!`,

      `### Page 3: Basis for a Topology & Metric Topologies

#### 📐 Basis Definition
A collection $\\mathcal{B} \\subseteq \\tau$ is a **Basis** for $\\tau$ if every open set $U \\in \\tau$ can be expressed as a union of elements in $\\mathcal{B}$.

#### 📏 Metric Topology
Given metric space $(X, d)$, open balls $B_r(x) = \\{ y \\in X : d(x, y) < r \\}$ form a basis for the **metric topology** on $X$.

Proceed to Page 4 for Continuity & Homeomorphisms!`,

      `### Page 4: Continuous Functions & Homeomorphisms

#### 📐 Topological Continuity
A map $f: (X, \\tau_X) \\to (Y, \\tau_Y)$ is **continuous** if:
$$\\forall V \\in \\tau_Y \\implies f^{-1}(V) \\in \\tau_X$$
(Preimage of every open set is open).

#### 📜 Homeomorphism Definition
A bijection $f: X \\to Y$ is a **homeomorphism** if both $f$ and $f^{-1}$ are continuous. Spaces $X$ and $Y$ are topologically equivalent ($X \\cong Y$).

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Verifying Topology Axioms)

#### 📝 Problem:
Let $X = \\{a, b, c\\}$. Is $\\tau = \\{\\emptyset, X, \\{a\\}, \\{a, b\\}\\}$ a valid topology on $X$?

#### 💡 Solution Breakdown:
- **Step 1 (Empty & Full set)**: $\\emptyset, X \\in \\tau \\quad \\checkmark$
- **Step 2 (Unions)**:
  $\\emptyset \\cup \\{a\\} = \\{a\\} \\in \\tau$
  \\{a\\} \\cup \\{a, b\\} = \\{a, b\\} \\in \\tau
  All unions belong to $\\tau$. $\\checkmark$
- **Step 3 (Finite Intersections)**:
  \\{a\\} \\cap \\{a, b\\} = \\{a\\} \\in \\tau
  All intersections belong to $\\tau$. $\\checkmark$
- **Step 4**: All 3 axioms hold. Thus $\\tau$ is a valid topology on $X$.

Proceed to Page 6 for Interior & Closure Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Interior & Closure Computation)

#### 📝 Problem:
In $\\mathbb{R}$ with standard topology, find interior and closure of $A = (0, 1]$.

#### 💡 Solution Breakdown:
- **Step 1 (Interior)**:
  Largest open interval inside $(0, 1]$ is $(0, 1)$.
  Thus $\\text{Int}(A) = (0, 1)$.
- **Step 2 (Closure)**:
  Smallest closed interval containing $(0, 1]$ is $[0, 1]$.
  Thus $\\overline{A} = [0, 1]$.
- **Step 3 (Boundary)**:
  $\\partial A = \\overline{A} \\setminus \\text{Int}(A) = [0, 1] \\setminus (0, 1) = \\{0, 1\\}$.

Proceed to Page 7 for Separation & Compactness!`,

      `### Page 7: Separation Axioms & Compactness

#### 📐 Hausdorff ($T_2$) Property
$X$ is **Hausdorff** if $\\forall x \\neq y \\in X, \\exists$ disjoint open sets $U, V$ s.t. $x \\in U, y \\in V$.

#### 📜 Compactness Definition
$X$ is **compact** if every open cover has a finite subcover.

#### 📜 Heine-Borel Theorem (in $\\mathbb{R}^n$)
A subset of $\\mathbb{R}^n$ with standard metric is compact **if and only if** it is closed and bounded.

Proceed to Page 8 for Connectedness!`,

      `### Page 8: Connectedness & Path-Connectedness

#### 📐 Connected Space Definition
$X$ is **connected** if it cannot be written as the union of two non-empty disjoint open sets.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: List all elements of discrete topology on $X = \\{1, 2\\}$.
2. **Problem 2**: Prove that in a Hausdorff space, every finite set is closed.
3. **Problem 3**: Is $[0, 1]$ compact in standard $\\mathbb{R}$ topology?
4. **Problem 4**: Give an example of a set that is neither open nor closed in $\\mathbb{R}$.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Topology Takeaways
- **Topology Axioms**: $\\emptyset, X$, arbitrary unions, finite intersections.
- **Continuity**: Preimage of open set is open.
- **Hausdorff ($T_2$)**: Distinct points separated by disjoint open neighborhoods.
- **Heine-Borel**: Compact in $\\mathbb{R}^n \\iff$ closed and bounded.

You are now ready for the **General Topology Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 500,
      passingScore: 60,
      questions: [
        {
          id: 171,
          type: 'mcq',
          question: 'According to Heine-Borel theorem, a subset of $\\mathbb{R}^n$ with standard metric is compact if and only if it is:',
          options: ['Closed and Bounded', 'Open and Bounded', 'Connected and Open', 'Finite'],
          correct: 0,
          explanation: 'Heine-Borel theorem states compact in $\\mathbb{R}^n \\iff$ closed and bounded.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 18: MEASURE THEORY AND INTEGRATION
  // ==========================================
  {
    id: 18,
    title: 'Measure Theory and Integration',
    code: 'MTH 18',
    description: 'Sigma-algebras, outer measure, Lebesgue measure, measurable functions, Lebesgue integral, and convergence limit theorems.',
    objectives: [
      'Understand $\\sigma$-algebras and measurable spaces',
      'Compute outer measure and Lebesgue measure of set collections',
      'Define Lebesgue integrals for non-negative and integrable functions',
      'Apply Monotone Convergence, Fatou Lemma, and Dominated Convergence theorems'
    ],
    contentPages: [
      `### Page 1: Algebras & $\\sigma$-Algebras

**Measure Theory** rigorous framework for measuring length, area, volume, and probability.

#### 📐 $\\sigma$-Algebra Definition
A collection $\\Sigma$ of subsets of $X$ is a **$\\sigma$-Algebra** if:
1. $X \\in \\Sigma$
2. $A \\in \\Sigma \\implies A^c \\in \\Sigma$ (Closed under complementation).
3. $A_1, A_2, \\dots \\in \\Sigma \\implies \\bigcup_{n=1}^{\\infty} A_n \\in \\Sigma$ (Closed under countable unions).

#### 📜 Borel $\\sigma$-Algebra $\\mathcal{B}(\\mathbb{R})$
The smallest $\\sigma$-algebra containing all open intervals of $\\mathbb{R}$.

Proceed to Page 2 for Measures & Outer Measures!`,

      `### Page 2: Measures & Outer Measure

#### 📐 Measure Definition
A function $\\mu: \\Sigma \\to [0, \\infty]$ is a **Measure** if:
1. $\\mu(\\emptyset) = 0$
2. **Countable Additivity**: For disjoint sets $A_1, A_2, \\dots \\in \\Sigma$:
   $$\\mu\\left(\\bigcup_{n=1}^{\\infty} A_n\\right) = \\sum_{n=1}^{\\infty} \\mu(A_n)$$

#### 📜 Lebesgue Outer Measure $m^*(A)$
$$m^*(A) = \\inf \\left\\{ \\sum_{k=1}^{\\infty} l(I_k) : A \\subseteq \\bigcup_{k=1}^{\\infty} I_k \\right\\}$$

Proceed to Page 3 for Lebesgue Measurable Sets!`,

      `### Page 3: Lebesgue Measurable Sets & Lebesgue Integral

#### 📜 Carathéodory Condition
A set $E \\subseteq \\mathbb{R}$ is **Lebesgue Measurable** if for every set $A$:
$$m^*(A) = m^*(A \\cap E) + m^*(A \\cap E^c)$$

#### 📐 Lebesgue Integral of Simple Functions
For simple function $\\phi(x) = \\sum_{i=1}^{n} a_i \\mathbf{1}_{E_i}$:
$$\\int \\phi d m = \\sum_{i=1}^{n} a_i m(E_i)$$

Proceed to Page 4 for Convergence Theorems!`,

      `### Page 4: Major Convergence Theorems

#### 📜 Monotone Convergence Theorem (MCT)
If $0 \\le f_1 \\le f_2 \\le \\dots$ pointwise with $f_n \\to f$, then:
$$\\lim_{n \\to \\infty} \\int f_n d\\mu = \\int f d\\mu$$

#### 📜 Fatou's Lemma
For any non-negative measurable functions $f_n$:
$$\\int (\\liminf_{n \\to \\infty} f_n) d\\mu \\le \\liminf_{n \\to \\infty} \\int f_n d\\mu$$

#### 📜 Lebesgue Dominated Convergence Theorem (DCT)
If $f_n \\to f$ pointwise and $|f_n(x)| \\le g(x)$ with $g \\in L^1$, then:
$$\\lim_{n \\to \\infty} \\int f_n d\\mu = \\int f d\\mu$$

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (Measure of Countable Sets)

#### 📝 Problem:
Prove that the Lebesgue measure of the set of rational numbers $\\mathbb{Q}$ is zero.

#### 💡 Solution Breakdown:
- **Step 1**: Rationals $\\mathbb{Q} = \\{q_1, q_2, q_3, \\dots\\}$ are countable.
- **Step 2**: Every single point set $\\{q_i\\}$ has length $l(\\{q_i\\}) = 0 \\implies m(\\{q_i\\}) = 0$.
- **Step 3**: By countable additivity of Lebesgue measure:
  $$m(\\mathbb{Q}) = m\\left(\\bigcup_{i=1}^{\\infty} \\{q_i\\}\\right) = \\sum_{i=1}^{\\infty} m(\\{q_i\\}) = \\sum_{i=1}^{\\infty} 0 = 0$$
- **Step 4**: Thus $m(\\mathbb{Q}) = 0$. Rationals have measure zero!

Proceed to Page 6 for Dominated Convergence Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Dominated Convergence Theorem)

#### 📝 Problem:
Compute $\\lim_{n \\to \\infty} \\int_{0}^{1} \\frac{n x}{1 + n^2 x^2} dx$.

#### 💡 Solution Breakdown:
- **Step 1**: Find pointwise limit $f_n(x) = \\frac{n x}{1 + n^2 x^2}$:
  For $x=0$, $f_n(0) = 0$.
  For $x > 0$, $f_n(x) = \\frac{x/n}{1/n^2 + x^2} \\to 0$ as $n \\to \\infty$.
  Pointwise limit $f(x) = 0$.
- **Step 2**: Bound $f_n(x)$ on $[0, 1]$:
  Using $2ab \\le a^2 + b^2$ with $a=1, b=nx$: $1 + n^2 x^2 \\ge 2nx \\implies f_n(x) = \\frac{nx}{1+n^2x^2} \\le \\frac{1}{2} = g(x)$.
- **Step 3**: $g(x) = 1/2$ is integrable on $[0, 1]$ with $\\int_{0}^{1} \\frac{1}{2} dx = 1/2 < \\infty$.
- **Step 4**: By Dominated Convergence Theorem:
  $$\\lim_{n \\to \\infty} \\int_{0}^{1} f_n(x) dx = \\int_{0}^{1} 0 dx = 0$$

Proceed to Page 7 for Almost Everywhere Property!`,

      `### Page 7: Almost Everywhere ("a.e.") Property

#### 📐 Almost Everywhere Definition
A property holds **almost everywhere** (a.e.) if the set of points where it fails has measure zero.
- If $f = g$ a.e., then $\\int f d\\mu = \\int g d\\mu$.

Proceed to Page 8 for $L^p$ Spaces!`,

      `### Page 8: $L^p$ Spaces & Completeness

#### 📐 $L^p(\\mu)$ Norm
$$||f||_p = \\left( \\int |f|^p d\\mu \\right)^{1/p}$$
- **Riesz-Fischer Theorem**: $L^p(\\mu)$ is a complete Banach space for $1 \\le p \\le \\infty$.

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Is $\\Sigma = \\{\\emptyset, X\\}$ a $\\sigma$-algebra?
2. **Problem 2**: What is the Lebesgue measure of the Cantor set?
3. **Problem 3**: Evaluate $\\int_{[0, 1]} f dx$ where $f(x) = 5$ for $x \\in \\mathbb{Q}$ and $f(x) = 2$ for $x \\notin \\mathbb{Q}$.
4. **Problem 4**: State Fatou's Lemma.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Measure Theory Concepts
- **Countable Sets**: Have Lebesgue measure 0.
- **Dominated Convergence**: Swap limit and integral if bounded by $L^1$ function $g$.
- **a.e. Integration**: Sets of measure 0 do not change integral values.

You are now ready for the **Measure Theory Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 500,
      passingScore: 60,
      questions: [
        {
          id: 181,
          type: 'mcq',
          question: 'What is the Lebesgue measure of the set of rational numbers $\\mathbb{Q} \\cap [0, 1]$?',
          options: ['0', '1', '1/2', 'Infinite'],
          correct: 0,
          explanation: 'Rationals are countable; every countable set has Lebesgue measure 0.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 19: PARTIAL DIFFERENTIAL EQUATIONS
  // ==========================================
  {
    id: 19,
    title: 'Partial Differential Equations',
    code: 'MTH 19',
    description: 'Classification of second-order PDEs (elliptic, parabolic, hyperbolic), separation of variables, Heat, Wave, and Laplace equations.',
    objectives: [
      'Classify second-order linear PDEs via discriminant $B^2 - 4AC$',
      'Solve 1D Heat equation using Separation of Variables',
      'Solve 1D Wave equation using d\'Alembert solution formula',
      'Solve Laplace equation in rectangular and polar coordinates'
    ],
    contentPages: [
      `### Page 1: PDE Classification & Second-Order Form

**Partial Differential Equations (PDEs)** involve functions of multiple variables and their partial derivatives.

#### 📐 General 2nd-Order Linear PDE in 2 Variables
$$A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G$$

#### 📜 Classification Discriminant $d = B^2 - 4AC$
1. **Elliptic** ($d < 0$): Laplace Equation $u_{xx} + u_{yy} = 0$
2. **Parabolic** ($d = 0$): Heat Equation $u_t = c^2 u_{xx}$
3. **Hyperbolic** ($d > 0$): Wave Equation $u_{tt} = c^2 u_{xx}$

Proceed to Page 2 for Separation of Variables!`,

      `### Page 2: Method of Separation of Variables

#### 📐 Method Assumption
Assume solution factors into product of single-variable functions:
$$u(x, t) = X(x) T(t)$$

Substitute into PDE, separate variables to form independent ODE Sturm-Liouville problems with separation constant $-\\lambda$.

Proceed to Page 3 for 1D Heat Equation!`,

      `### Page 3: 1D Heat Equation Solution

#### 📐 Heat Equation & Dirichlet Boundary Conditions
$$u_t = c^2 u_{xx}, \\quad u(0, t) = 0, \\, u(L, t) = 0, \\, u(x, 0) = f(x)$$

#### 📜 Fourier Series Solution
$$u(x, t) = \\sum_{n=1}^{\\infty} b_n \\sin\\left(\\frac{n\\pi x}{L}\\right) e^{-\\lambda_n^2 c^2 t}$$
where $\\lambda_n = \\frac{n\\pi}{L}$ and $b_n = \\frac{2}{L} \\int_{0}^{L} f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) dx$.

Proceed to Page 4 for 1D Wave Equation!`,

      `### Page 4: 1D Wave Equation & d'Alembert Solution

#### 📐 1D Wave Equation Form
$$u_{tt} = c^2 u_{xx}$$

#### 📜 d'Alembert Solution Formula for Infinite String
For initial displacement $u(x, 0) = f(x)$ and velocity $u_t(x, 0) = g(x)$:
$$u(x, t) = \\frac{1}{2} [f(x - ct) + f(x + ct)] + \\frac{1}{2c} \\int_{x-ct}^{x+ct} g(s) ds$$

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (PDE Classification)

#### 📝 Problem:
Classify the PDE $3 u_{xx} + 4 u_{xy} + u_{yy} + u_x = 0$.

#### 💡 Solution Breakdown:
- **Step 1**: Identify coefficients: $A = 3$, $B = 4$, $C = 1$.
- **Step 2**: Compute discriminant $d = B^2 - 4AC$:
  $$d = 4^2 - 4(3)(1) = 16 - 12 = 4$$
- **Step 3**: Since $d = 4 > 0$, the PDE is **Hyperbolic**.

Proceed to Page 6 for Heat Equation Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Heat Equation Solution)

#### 📝 Problem:
Solve $u_t = u_{xx}$ on $0 < x < \\pi$ with $u(0, t) = u(\\pi, t) = 0$ and $u(x, 0) = \\sin(2x)$.

#### 💡 Solution Breakdown:
- **Step 1**: Identify $L = \\pi$, $c = 1$, and $f(x) = \\sin(2x)$.
- **Step 2**: Fourier sine coefficients $b_n$:
  $f(x) = \\sin(2x) \\implies b_2 = 1$, and $b_n = 0$ for $n \\neq 2$.
- **Step 3**: Substitute into solution series:
  $$u(x, t) = b_2 \\sin(2x) e^{-2^2(1)t} = \\sin(2x) e^{-4t}$$

Proceed to Page 7 for d'Alembert Wave Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (d'Alembert Solution)

#### 📝 Problem:
Find $u(x, t)$ for $u_{tt} = 4 u_{xx}$ with initial displacement $f(x) = x^2$ and zero initial velocity $g(x) = 0$.

#### 💡 Solution Breakdown:
- **Step 1**: Wave speed $c^2 = 4 \\implies c = 2$.
- **Step 2**: Apply d'Alembert formula with $g(s) = 0$:
  $$u(x, t) = \\frac{1}{2} [f(x - 2t) + f(x + 2t)]$$
- **Step 3**: Substitute $f(z) = z^2$:
  $$u(x, t) = \\frac{1}{2} [(x - 2t)^2 + (x + 2t)^2] = \\frac{1}{2} [x^2 - 4xt + 4t^2 + x^2 + 4xt + 4t^2] = x^2 + 4t^2$$

Proceed to Page 8 for Laplace Equation!`,

      `### Page 8: Laplace Equation $\\nabla^2 u = 0$

#### 📐 Polar Laplace Equation
$$\\frac{\\partial^2 u}{\\partial r^2} + \\frac{1}{r}\\frac{\\partial u}{\\partial r} + \\frac{1}{r^2}\\frac{\\partial^2 u}{\\partial \\theta^2} = 0$$

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Classify $u_{xx} + 2 u_{xy} + u_{yy} = 0$.
2. **Problem 2**: State d'Alembert formula for wave equation.
3. **Problem 3**: Solve $u_t = u_{xx}$ if $u(x, 0) = 3 \\sin(x)$ on $[0, \\pi]$.
4. **Problem 4**: Is Laplace equation elliptic, parabolic, or hyperbolic?

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key PDE Takeaways
- **Classification**: $B^2 - 4AC < 0$ (Elliptic), $=0$ (Parabolic), $>0$ (Hyperbolic).
- **Heat Equation**: Exponential decay over time $e^{-\\lambda^2 c^2 t}$.
- **Wave Equation**: d'Alembert formula $u(x, t) = \\frac{1}{2}[f(x-ct) + f(x+ct)]$.

You are now ready for the **Partial Differential Equations Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 500,
      passingScore: 60,
      questions: [
        {
          id: 191,
          type: 'mcq',
          question: 'The 1D Heat Equation $u_t = c^2 u_{xx}$ is classified as which type of PDE?',
          options: ['Parabolic', 'Elliptic', 'Hyperbolic', 'Linear Algebraic'],
          correct: 0,
          explanation: '$A=c^2, B=0, C=0 \\implies B^2 - 4AC = 0 \\implies$ Parabolic.'
        }
      ]
    }
  },

  // ==========================================
  // TOPIC 20: INTEGRAL EQUATIONS
  // ==========================================
  {
    id: 20,
    title: 'Integral Equations',
    code: 'MTH 20',
    description: 'Volterra and Fredholm integral equations, conversion of ODE IVPs/BVPs to integral equations, Neumann series, and resolvent kernels.',
    objectives: [
      'Classify Volterra and Fredholm linear integral equations of 1st and 2nd kind',
      'Convert initial and boundary value ODE problems into integral equations',
      'Solve integral equations using separable kernels',
      'Apply Neumann series and resolvent kernels for iterative solutions'
    ],
    contentPages: [
      `### Page 1: Introduction & Classification of Integral Equations

**Integral Equations** feature an unknown function $y(x)$ under an integral sign.

#### 📐 Fredholm Integral Equation (Fixed Limits $[a, b]$)
$$y(x) = f(x) + \\lambda \\int_{a}^{b} K(x, t) y(t) dt$$
- **1st Kind**: $f(x) = 0$ on left side $\\implies \\int_a^b K(x, t) y(t) dt = f(x)$
- **2nd Kind**: Unknown $y(x)$ appears both inside and outside integral.

#### 📐 Volterra Integral Equation (Variable Limit $[a, x]$)
$$y(x) = f(x) + \\lambda \\int_{a}^{x} K(x, t) y(t) dt$$

$K(x, t)$ is the **Kernel** of the integral equation.

Proceed to Page 2 for ODE Conversions!`,

      `### Page 2: Converting ODEs to Integral Equations

#### 📜 IVP to Volterra Conversion Formula
Converting $y''(x) = f(x, y)$ with $y(0) = y_0, y'(0) = y_0'$:
Integrate twice using Cauchy formula for repeated integration:
$$\\int_{a}^{x} \\int_{a}^{x_1} \\dots \\int_{a}^{x_{n-1}} y(t) dt^n = \\frac{1}{(n-1)!} \\int_{a}^{x} (x - t)^{n-1} y(t) dt$$

Proceed to Page 3 for Separable Kernels!`,

      `### Page 3: Fredholm Equations with Separable Kernels

#### 📐 Separable (Degenerate) Kernel Definition
$$K(x, t) = \\sum_{i=1}^{n} g_i(x) h_i(t)$$

#### 📜 Solving Procedure
Substitute kernel into Fredholm equation:
$$y(x) = f(x) + \\lambda \\sum_{i=1}^{n} g_i(x) C_i$$
where constants $C_i = \\int_{a}^{b} h_i(t) y(t) dt$. Solves into linear algebraic system for $C_i$.

Proceed to Page 4 for Neumann Series & Resolvent Kernel!`,

      `### Page 4: Method of Successive Substitutions & Neumann Series

#### 📜 Neumann Series Iteration
For Volterra 2nd kind $y(x) = f(x) + \\lambda \\int_{0}^{x} K(x, t) y(t) dt$:
- Zeroth approximation: $y_0(x) = f(x)$
- $(n+1)$-th approximation: $y_{n+1}(x) = f(x) + \\lambda \\int_{0}^{x} K(x, t) y_n(t) dt$

Limit $y(x) = \\lim_{n \\to \\infty} y_n(x)$ gives exact Neumann series solution.

Proceed to Page 5 for Worked Example 1!`,

      `### Page 5: Step-by-Step Worked Example 1 (IVP to Volterra Conversion)

#### 📝 Problem:
Convert IVP $y'(x) = y(x), y(0) = 1$ into a Volterra integral equation.

#### 💡 Solution Breakdown:
- **Step 1**: Integrate both sides from $0$ to $x$:
  $$\\int_{0}^{x} y'(t) dt = \\int_{0}^{x} y(t) dt$$
- **Step 2**: Apply Fundamental Theorem of Calculus:
  $$y(x) - y(0) = \\int_{0}^{x} y(t) dt$$
- **Step 3**: Substitute $y(0) = 1$:
  $$y(x) - 1 = \\int_{0}^{x} y(t) dt \\implies y(x) = 1 + \\int_{0}^{x} y(t) dt$$
- **Step 4**: This is a Volterra integral equation of the 2nd kind with kernel $K(x, t) = 1$.

Proceed to Page 6 for Separable Kernel Example!`,

      `### Page 6: Step-by-Step Worked Example 2 (Fredholm Separable Kernel)

#### 📝 Problem:
Solve $y(x) = x + \\lambda \\int_{0}^{1} x t y(t) dt$.

#### 💡 Solution Breakdown:
- **Step 1**: Factor out $x$ from integral:
  $$y(x) = x + \\lambda x \\int_{0}^{1} t y(t) dt = x(1 + \\lambda C)$$
  where $C = \\int_{0}^{1} t y(t) dt$.
- **Step 2**: Substitute $y(t) = t(1 + \\lambda C)$ into definition of $C$:
  $$C = \\int_{0}^{1} t \\cdot t(1 + \\lambda C) dt = (1 + \\lambda C) \\int_{0}^{1} t^2 dt = (1 + \\lambda C) \\left[ \\frac{t^3}{3} \\right]_0^1 = \\frac{1 + \\lambda C}{3}$$
- **Step 3**: Solve for $C$:
  $$3C = 1 + \\lambda C \\implies C(3 - \\lambda) = 1 \\implies C = \\frac{1}{3 - \\lambda}$$
- **Step 4**: Substitute $C$ back into $y(x)$:
  $$y(x) = x \\left( 1 + \\frac{\\lambda}{3 - \\lambda} \\right) = x \\left( \\frac{3 - \\lambda + \\lambda}{3 - \\lambda} \\right) = \\frac{3x}{3 - \\lambda}$$

Proceed to Page 7 for Neumann Series Example!`,

      `### Page 7: Step-by-Step Worked Example 3 (Neumann Series Solution)

#### 📝 Problem:
Solve $y(x) = 1 + \\int_{0}^{x} y(t) dt$ using successive approximations.

#### 💡 Solution Breakdown:
- **Step 1**: $y_0(x) = 1$.
- **Step 2**: $y_1(x) = 1 + \\int_{0}^{x} 1 dt = 1 + x$.
- **Step 3**: $y_2(x) = 1 + \\int_{0}^{x} (1 + t) dt = 1 + x + \\frac{x^2}{2}$.
- **Step 4**: $y_n(x) = \\sum_{k=0}^{n} \\frac{x^k}{k!}$.
- **Step 5**: Limit as $n \\to \\infty$: $y(x) = \\sum_{k=0}^{\\infty} \\frac{x^k}{k!} = e^x$.

Proceed to Page 8 for Resolvent Kernel!`,

      `### Page 8: Resolvent Kernel & Hilbert-Schmidt Theory

#### 📐 Resolvent Kernel $R(x, t; \\lambda)$
Solution can be expressed as:
$$y(x) = f(x) + \\lambda \\int_{a}^{b} R(x, t; \\lambda) f(t) dt$$

Proceed to Page 9 for Practice Exercises!`,

      `### Page 9: Independent Practice Problem Set

1. **Problem 1**: Classify $y(x) = \\int_{0}^{x} (x-t) y(t) dt$.
2. **Problem 2**: Convert $y'' + y = 0, y(0)=0, y'(0)=1$ to Volterra equation.
3. **Problem 3**: Solve $y(x) = 1 + \\int_{0}^{1} y(t) dt$.
4. **Problem 4**: State Cauchy formula for repeated integration.

Proceed to Page 10 for Summary & Checkpoint Prep!`,

      `### Page 10: Topic Summary & Checkpoint Prep

#### 💡 Key Integral Equation Concepts
- **Volterra**: Variable upper limit $x$.
- **Fredholm**: Fixed upper limit $b$.
- **Separable Kernel**: $K(x, t) = g(x) h(t) \\implies$ algebraic system.
- **Neumann Series**: Successive approximations $y_n(x) \\to e^x$.

You are now ready for the **Integral Equations Checkpoint Quiz**!`
    ],
    quiz: {
      timeLimit: 500,
      passingScore: 60,
      questions: [
        {
          id: 201,
          type: 'mcq',
          question: 'What distinguishes a Volterra integral equation from a Fredholm integral equation?',
          options: ['Volterra has a variable upper limit of integration ($x$)', 'Fredholm has non-linear terms', 'Volterra has no kernel', 'Fredholm applies only to 2D functions'],
          correct: 0,
          explanation: 'Volterra equations feature variable limits of integration $[a, x]$, whereas Fredholm equations feature fixed limits $[a, b]$.'
        }
      ]
    }
  }
];

// Achievements definition
const ACHIEVEMENTS_DATA = [
  { id: 'math_pioneer', title: 'Mathematics Pioneer', desc: 'Completed your first mathematics study sheet.', icon: '💡' },
  { id: 'quiz_whiz', title: 'Quiz Whiz', desc: 'Scored 100% on a checkpoint quiz.', icon: '🎯' },
  { id: 'streak_3', title: '3-Day Scholar', desc: 'Logged in and studied for 3 consecutive days.', icon: '🔥' },
  { id: 'master_5_topics', title: '5 Topics Master', desc: 'Completed 5 core mathematics modules.', icon: '🎓' },
  { id: 'master_10_topics', title: '10 Topics Master', desc: 'Completed 10 core mathematics modules.', icon: '📐' },
  { id: 'master_15_topics', title: '15 Topics Master', desc: 'Completed 15 core mathematics modules.', icon: '🔬' },
  { id: 'master_all_topics', title: 'Curriculum Master', desc: 'Completed all 20 core mathematics modules.', icon: '🏆' }
];
