<?php
// database/seeder_core.php
// Helper module for inserting curriculum data without wiping users/admins.

$curriculum = [
    // high school
    [
        'level' => 'high_school',
        'class' => 'jss1',
        'topics' => [
            'Number and Numeration' => ['Counting Numbers', 'Roman Numerals', 'Whole Numbers', 'Factors and Multiples', 'Prime Numbers', 'LCM and HCF'],
            'Fractions' => ['Proper, Improper and Mixed Fractions', 'Equivalent Fractions', 'Addition and Subtraction of Fractions', 'Multiplication and Division of Fractions'],
            'Decimals' => ['Decimal Numbers', 'Decimal Operations'],
            'Approximation' => ['Significant Figures', 'Decimal Places', 'Estimation'],
            'Commercial Arithmetic' => ['Percentages', 'Profit and Loss', 'Discount'],
            'Algebra' => ['Simple Algebraic Expressions', 'Collecting Like Terms', 'Simple Equations'],
            'Geometry' => ['Points, Lines and Planes', 'Angles', 'Triangles', 'Quadrilaterals'],
            'Mensuration' => ['Perimeter', 'Area of Rectangles and Squares'],
            'Statistics' => ['Data Collection', 'Frequency Tables', 'Bar Charts', 'Pictograms']
        ]
    ],
    [
        'level' => 'high_school',
        'class' => 'jss2',
        'topics' => [
            'Number and Numeration' => ['Directed Numbers', 'Number Bases', 'Standard Form', 'Indices'],
            'Algebra' => ['Algebraic Expressions', 'Expansion', 'Factorization', 'Linear Equations'],
            'Ratio' => ['Ratio', 'Proportion', 'Variation'],
            'Geometry' => ['Polygons', 'Circle Geometry', 'Congruent Shapes', 'Similar Shapes'],
            'Bearings and Scale Drawing' => ['Bearings', 'Scale Drawing'],
            'Mensuration' => ['Surface Area', 'Volume of Cubes', 'Volume of Cuboids', 'Volume of Cylinders'],
            'Statistics' => ['Mean', 'Median', 'Mode'],
            'Probability' => ['Experimental Probability', 'Simple Probability']
        ]
    ],
    [
        'level' => 'high_school',
        'class' => 'jss3',
        'topics' => [
            'Number and Numeration' => ['Surds', 'Logarithms'],
            'Algebra' => ['Quadratic Expressions', 'Factorization', 'Quadratic Equations', 'Simultaneous Equations'],
            'Graphs' => ['Graph of Linear Equations', 'Distance-Time Graphs', 'Coordinate Geometry'],
            'Geometry' => ['Pythagoras\' Theorem', 'Introduction to Trigonometry', 'Transformation Geometry'],
            'Mensuration' => ['Surface Area', 'Volume of Prisms', 'Volume of Pyramids', 'Volume of Cones', 'Volume of Spheres'],
            'Statistics' => ['Pie Charts', 'Histograms', 'Cumulative Frequency'],
            'Probability' => ['Probability of Events']
        ]
    ],
    [
        'level' => 'high_school',
        'class' => 'ss1',
        'topics' => [
            'Number and Numeration' => ['Sets', 'Binary Operations', 'Modular Arithmetic', 'Indices', 'Logarithms', 'Surds'],
            'Algebra' => ['Functions', 'Relations', 'Quadratic Equations', 'Inequalities', 'Variation'],
            'Sequences' => ['Arithmetic Progression (AP)', 'Geometric Progression (GP)'],
            'Coordinate Geometry' => ['Straight Line Graphs', 'Gradient', 'Midpoint'],
            'Trigonometry' => ['Trigonometric Ratios', 'Bearings', 'Angles of Elevation and Depression'],
            'Circle Geometry' => ['Chords', 'Tangents', 'Angles in Circles']
        ]
    ],
    [
        'level' => 'high_school',
        'class' => 'ss2',
        'topics' => [
            'Algebra' => ['Polynomials', 'Partial Fractions', 'Binomial Expansion', 'Remainder Theorem', 'Factor Theorem'],
            'Calculus' => ['Differentiation', 'Applications of Differentiation', 'Integration', 'Applications of Integration'],
            'Trigonometry' => ['Trigonometric Identities', 'Sine Rule', 'Cosine Rule', 'Area of Triangle'],
            'Statistics' => ['Measures of Central Tendency', 'Measures of Dispersion', 'Standard Deviation'],
            'Probability' => ['Permutations', 'Combinations', 'Probability']
        ]
    ],
    [
        'level' => 'high_school',
        'class' => 'ss3',
        'topics' => [
            'Matrices' => ['Matrix Operations', 'Determinants', 'Inverse of a Matrix'],
            'Linear Programming' => ['Graphical Method', 'Optimization Problems'],
            'Coordinate Geometry' => ['Circle Equations', 'Locus', 'Longitude and Latitude'],
            'Statistics' => ['Regression', 'Correlation']
        ]
    ],
    // university
    [
        'level' => 'university',
        'class' => '100l',
        'topics' => [
            'Elementary Mathematics I' => ['Elementary Mathematics I'],
            'Elementary Mathematics II' => ['Elementary Mathematics II'],
            'Algebra' => ['Algebra'],
            'Trigonometry' => ['Trigonometry'],
            'Coordinate Geometry' => ['Coordinate Geometry'],
            'Analytical Geometry' => ['Analytical Geometry'],
            'Differential Calculus' => ['Differential Calculus'],
            'Integral Calculus' => ['Integral Calculus'],
            'Vectors' => ['Vectors'],
            'Introduction to Statistics' => ['Introduction to Statistics'],
            'Introduction to Computer Science' => ['Introduction to Computer Science'],
            'Mathematical Logic' => ['Mathematical Logic'],
            'Set Theory' => ['Set Theory']
        ]
    ],
    [
        'level' => 'university',
        'class' => '200l',
        'topics' => [
            'Linear Algebra I' => ['Linear Algebra I'],
            'Linear Algebra II' => ['Linear Algebra II'],
            'Matrix Theory' => ['Matrix Theory'],
            'Vector Spaces' => ['Vector Spaces'],
            'Ordinary Differential Equations' => ['Ordinary Differential Equations'],
            'Multivariable Calculus' => ['Multivariable Calculus'],
            'Real Analysis I' => ['Real Analysis I'],
            'Complex Analysis I' => ['Complex Analysis I'],
            'Numerical Analysis I' => ['Numerical Analysis I'],
            'Probability Theory I' => ['Probability Theory I'],
            'Mathematical Methods I' => ['Mathematical Methods I'],
            'Mathematical Methods II' => ['Mathematical Methods II'],
            'Mathematical Modelling' => ['Mathematical Modelling'],
            'Discrete Mathematics' => ['Discrete Mathematics']
        ]
    ],
    [
        'level' => 'university',
        'class' => '300l',
        'topics' => [
            'Abstract Algebra I' => ['Abstract Algebra I'],
            'Abstract Algebra II' => ['Abstract Algebra II'],
            'Real Analysis II' => ['Real Analysis II'],
            'Complex Analysis II' => ['Complex Analysis II'],
            'Functional Analysis' => ['Functional Analysis'],
            'Numerical Analysis II' => ['Numerical Analysis II'],
            'Vector Calculus' => ['Vector Calculus'],
            'Tensor Analysis' => ['Tensor Analysis'],
            'Operations Research I' => ['Operations Research I'],
            'Mathematical Statistics I' => ['Mathematical Statistics I'],
            'Probability Theory II' => ['Probability Theory II'],
            'Graph Theory' => ['Graph Theory'],
            'Combinatorics' => ['Combinatorics'],
            'Mathematical Modelling II' => ['Mathematical Modelling II'],
            'Optimization Theory' => ['Optimization Theory'],
            'Dynamical Systems' => ['Dynamical Systems'],
            'Theory of Equations' => ['Theory of Equations']
        ]
    ],
    [
        'level' => 'university',
        'class' => '400l',
        'topics' => [
            'General Topology' => ['General Topology'],
            'Measure Theory' => ['Measure Theory'],
            'Measure and Integration' => ['Measure and Integration'],
            'Partial Differential Equations' => ['Partial Differential Equations'],
            'Integral Equations' => ['Integral Equations'],
            'Operations Research II' => ['Operations Research II'],
            'Mathematical Statistics II' => ['Mathematical Statistics II'],
            'Stochastic Processes' => ['Stochastic Processes'],
            'Time Series Analysis' => ['Time Series Analysis'],
            'Linear Programming' => ['Linear Programming'],
            'Nonlinear Programming' => ['Nonlinear Programming'],
            'Numerical Linear Algebra' => ['Numerical Linear Algebra'],
            'Coding Theory' => ['Coding Theory'],
            'Cryptography' => ['Cryptography'],
            'Mathematical Finance' => ['Mathematical Finance'],
            'Biomathematics' => ['Biomathematics'],
            'Game Theory' => ['Game Theory'],
            'Fuzzy Mathematics' => ['Fuzzy Mathematics'],
            'Computational Mathematics' => ['Computational Mathematics'],
            'Mathematical Physics' => ['Mathematical Physics'],
            'Electromagnetic Theory' => ['Electromagnetic Theory'],
            'Fluid Dynamics' => ['Fluid Dynamics'],
            'Research Methodology' => ['Research Methodology']
        ]
    ]
];

if (!function_exists('getSpecializedExamples')) {
    function getSpecializedExamples($title) {
        $data = [
            'formula' => '$$y = f(x)$$',
            'notation' => 'f(x)',
            'symbols' => 'x, y, f',
            'summary' => "The study of **{$title}** focuses on establishing mathematical relationships, calculating values, and applying step-by-step problem-solving methods.",
            'ex1_q' => "Evaluate \$f(x) = 3x^2 + 4x - 5\$ when \$x = 3\$.",
            'ex1_s' => "**Step 1**: Formula \$f(x) = 3x^2 + 4x - 5\$.\n**Step 2**: Substitute \$x = 3\\implies f(3) = 3(3)^2 + 4(3) - 5\$.\n**Step 3**: Simplify \$27 + 12 - 5 = 34\$.",
            'ex2_q' => "Find \$x\$ for which \$2x + 8 = 20\$.",
            'ex2_s' => "**Step 1**: \$2x = 12 \\implies x = 6\$.",
            'ex3_q' => "Determine the average of \$\{12, 18, 25, 31, 34\}\$.",
            'ex3_s' => "**Step 1**: Sum = 120, Count = 5. Mean = 24.",
            'ex4_q' => "Calculate perimeter of rectangle \$l=15, w=8\$.",
            'ex4_s' => "**Step 1**: \$P = 2(15 + 8) = 46\\text{ cm}\$.",
            'p1' => "1. Evaluate \$f(x) = x^3 - 4x + 7\$ for \$x = 2\$.",
            'p2' => "2. Solve \$5x - 7 = 23\$ for \$x\$.",
            'p3' => "3. Find the mean of data set \$\{6, 10, 14, 18, 22\}\$.",
            'p4' => "4. Calculate area of square with side length \$s=9\\text{ cm}\$."
        ];

        if (stripos($title, 'Counting') !== false || stripos($title, 'Roman') !== false) {
            $data['formula'] = '$$\\text{Roman Numerals: I=1, V=5, X=10, L=50, C=100, D=500, M=1000}$$';
            $data['notation'] = 'N \\in \\mathbb{W}';
            $data['symbols'] = 'I, V, X, L, C, D, M';
            $data['ex1_q'] = "Convert 2026 into Roman numerals.";
            $data['ex1_s'] = "**Step 1**: 2000 + 20 + 6 = MM + XX + VI = MMXXVI.";
            $data['ex2_q'] = "Write place value of digit 8 in 5,842,109.";
            $data['ex2_s'] = "**Step 1**: 800,000 (Eight hundred thousand).";
            $data['ex3_q'] = "Evaluate CXCVII + LXIV.";
            $data['ex3_s'] = "**Step 1**: 197 + 64 = 261 = CCLXI.";
            $data['ex4_q'] = "Simplify \$450 + 275 - 120\$.";
            $data['ex4_s'] = "**Step 1**: 725 - 120 = 605.";
            $data['p1'] = "1. Convert MMXXIV into Arabic numbers.";
            $data['p2'] = "2. Write 1984 in Roman Numerals.";
            $data['p3'] = "3. Place value of 7 in 3,745,210.";
            $data['p4'] = "4. Calculate 1,250 + 3,420 - 890.";
        } elseif (stripos($title, 'Calculus') !== false || stripos($title, 'Differentiation') !== false) {
            $data['formula'] = '$$\\frac{dy}{dx} = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x) - f(x)}{\\Delta x}$$';
            $data['notation'] = '\\frac{dy}{dx}';
            $data['symbols'] = 'd, x, y, f\'';
            $data['ex1_q'] = "Find derivative of \$y = 4x^3 - 5x^2 + 7x - 9\$.";
            $data['ex1_s'] = "**Step 1**: Power rule: \\$\\frac{dy}{dx} = 12x^2 - 10x + 7\\$.";
            $data['ex2_q'] = "Differentiate \$y = (2x^2 + 3)^5\$ using Chain Rule.";
            $data['ex2_s'] = "**Step 1**: \\$\\frac{dy}{dx} = 5(2x^2+3)^4 (4x) = 20x(2x^2+3)^4\\$.";
            $data['ex3_q'] = "Find derivative of \$y = x^3 \\sin(x)\$.";
            $data['ex3_s'] = "**Step 1**: Product rule: \$x^3 \\cos x + 3x^2 \\sin x\$.";
            $data['ex4_q'] = "Find stationary points for \$y = x^3 - 3x^2 - 9x + 5\$.";
            $data['ex4_s'] = "**Step 1**: \$3x^2 - 6x - 9 = 0 \\implies x = 3, x = -1\$.";
            $data['p1'] = "1. Differentiate \$y = 5x^4 - 2x^3 + 8x\$.";
            $data['p2'] = "2. Find derivative of \$y = (3x + 1)^4\$.";
            $data['p3'] = "3. Derivative of \$y = \\frac{x^2}{x+1}\$.";
            $data['p4'] = "4. Tangent slope for \$y = x^2 - 4x + 3\$ at \$x = 3\$.";
        }

        return $data;
    }
}

if (!function_exists('generateLessonContentCore')) {
    function generateLessonContentCore($title, $academic_level = 'high_school') {
        $data = getSpecializedExamples($title);
        $pages = [];

        $pages[] = "### Page 1: Core Concepts and Primary Formulas\n\n" .
                   "Welcome to **" . $title . "**! " . $data['summary'] . "\n\n" .
                   "#### 📐 Primary Mathematical Formula\n" .
                   $data['formula'] . "\n\n" .
                   "#### 🔍 Key Notation & Parameter Definitions\n" .
                   "- **Standard Notation**: `" . $data['notation'] . "`\n" .
                   "- **Primary Variables / Symbols**: " . $data['symbols'] . "\n\n" .
                   "Review the formula above and proceed to Page 2!";

        $pages[] = "### Page 2: Key Operational Rules and Guidelines\n\n" .
                   "1. **Order of Operations (BODMAS/PEMDAS)**: Always evaluate Brackets first.\n" .
                   "2. **Algebraic Balance**: Perform operations equally on both sides of an equality sign.\n" .
                   "3. **Sign Precision**: Mind positive/negative rules.\n\n" .
                   "Proceed to Page 3 for worked examples!";

        $pages[] = "### Page 3: Step-by-Step Worked Examples (Part I)\n\n" .
                   "#### 📝 Worked Example 1\n**Question**: " . $data['ex1_q'] . "\n\n**Solution Breakdown**:\n" . $data['ex1_s'] . "\n\n---\n\n" .
                   "#### 📝 Worked Example 2\n**Question**: " . $data['ex2_q'] . "\n\n**Solution Breakdown**:\n" . $data['ex2_s'];

        $pages[] = "### Page 4: Step-by-Step Worked Examples (Part II)\n\n" .
                   "#### 📝 Worked Example 3\n**Question**: " . $data['ex3_q'] . "\n\n**Solution Breakdown**:\n" . $data['ex3_s'] . "\n\n---\n\n" .
                   "#### 📝 Worked Example 4\n**Question**: " . $data['ex4_q'] . "\n\n**Solution Breakdown**:\n" . $data['ex4_s'];

        $pages[] = "### Page 5: Student Practice Problem Set\n\n" .
                   "#### ✏️ Independent Practice Problems\n" .
                   $data['p1'] . "\n\n" . $data['p2'] . "\n\n" . $data['p3'] . "\n\n" . $data['p4'] . "\n\n" .
                   "Click **Take Lesson Quiz** below when ready!";

        return implode("\n<!-- pagebreak -->\n", $pages);
    }
}

if (!function_exists('generateQuizForLessonCore')) {
    function generateQuizForLessonCore($pdo, $lesson_id, $title) {
        $data = getSpecializedExamples($title);
        $time_limit = 450;
        
        $stmt = $pdo->prepare("INSERT INTO quizzes (lesson_id, passing_score, randomize_questions, time_limit) VALUES (?, 50, 0, ?)");
        $stmt->execute([$lesson_id, $time_limit]);
        $quiz_id = $pdo->lastInsertId();
        
        $questions_data = [
            [
                'text' => "What is the primary governing formula for " . $title . " presented on Page 1?",
                'type' => 'mcq',
                'difficulty' => 'easy',
                'explanation' => "The primary formula is: " . $data['formula'] . ".",
                'answers' => [
                    ['text' => $data['formula'], 'correct' => 1],
                    ['text' => '$$E = mc^2$$', 'correct' => 0],
                    ['text' => '$$PV = nRT$$', 'correct' => 0],
                    ['text' => '$$\\sin(\\theta) = x$$', 'correct' => 0]
                ]
            ],
            [
                'text' => "True or False: According to Page 2 rules, algebraic balance requires performing operations on both sides of an equality sign.",
                'type' => 'tf',
                'difficulty' => 'easy',
                'explanation' => "True.",
                'answers' => [
                    ['text' => 'True', 'correct' => 1],
                    ['text' => 'False', 'correct' => 0]
                ]
            ],
            [
                'text' => "On which pages of the study sheet are Worked Examples 1 through 4 located?",
                'type' => 'mcq',
                'difficulty' => 'medium',
                'explanation' => "Pages 3 and 4.",
                'answers' => [
                    ['text' => 'Pages 3 and 4', 'correct' => 1],
                    ['text' => 'Pages 1 and 2', 'correct' => 0],
                    ['text' => 'Page 5 only', 'correct' => 0],
                    ['text' => 'Page 1 only', 'correct' => 0]
                ]
            ],
            [
                'text' => "What standard notation is used for " . $title . "? Enter `" . str_replace('\\', '\\\\', $data['notation']) . "`.",
                'type' => 'fib',
                'difficulty' => 'hard',
                'explanation' => "Canonical notation is `" . $data['notation'] . "`.",
                'answers' => [
                    ['text' => $data['notation'], 'correct' => 1]
                ]
            ],
            [
                'text' => "Where can you find the independent practice problems to test your skills?",
                'type' => 'mcq',
                'difficulty' => 'medium',
                'explanation' => "Page 5.",
                'answers' => [
                    ['text' => 'Page 5', 'correct' => 1],
                    ['text' => 'Page 1', 'correct' => 0],
                    ['text' => 'Page 2', 'correct' => 0]
                ]
            ]
        ];
        
        foreach ($questions_data as $q_data) {
            $stmt = $pdo->prepare("INSERT INTO questions (quiz_id, question_text, question_type, difficulty, explanation) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$quiz_id, $q_data['text'], $q_data['type'], $q_data['difficulty'], $q_data['explanation']]);
            $question_id = $pdo->lastInsertId();
            
            foreach ($q_data['answers'] as $ans_data) {
                $stmt = $pdo->prepare("INSERT INTO answers (question_id, answer_text, is_correct) VALUES (?, ?, ?)");
                $stmt->execute([$question_id, $ans_data['text'], $ans_data['correct']]);
            }
        }
    }
}

// Perform insertion per topic
$sort_order = 1;
$total_inserted = 0;
foreach ($curriculum as $item) {
    $academic_level = $item['level'];
    $class_level = $item['class'];
    foreach ($item['topics'] as $topic_name => $lessons) {
        $pdo->beginTransaction();
        $display_topic_name = $topic_name . ' (' . strtoupper($class_level) . ')';
        
        $stmt = $pdo->prepare("INSERT INTO topics (name, sort_order, academic_level, class_level) VALUES (?, ?, ?, ?)");
        $stmt->execute([$display_topic_name, $sort_order++, $academic_level, $class_level]);
        $topic_id = $pdo->lastInsertId();
        
        foreach ($lessons as $lesson_title) {
            $content = generateLessonContentCore($lesson_title, $academic_level);
            $desc = "Example-driven math study sheet with 4 step-by-step worked examples and 4 practice problems for " . $lesson_title . ".";
            $objectives = "Master primary formula of " . $lesson_title . "\nFollow 4 step-by-step worked solutions\nSolve 4 independent practice problems";
            
            $stmt = $pdo->prepare("INSERT INTO lessons (topic_id, title, description, learning_objectives, content, status) VALUES (?, ?, ?, ?, ?, 'published')");
            $stmt->execute([$topic_id, $lesson_title, $desc, $objectives, $content]);
            $lesson_id = $pdo->lastInsertId();
            
            generateQuizForLessonCore($pdo, $lesson_id, $lesson_title);
            $total_inserted++;
        }
        $pdo->commit();
    }
}
?>
