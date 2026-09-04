<?php
// C:\Users\USER\Documents\chrogend project\database\seeder.php
require_once __DIR__ . '/../includes/db.php';

echo "Starting Database Seeder (Example-Driven Math Curriculum with Step-by-Step Worked Examples)...\n";

try {
    // 1. Add schema additions if missing
    try {
        $pdo->exec("ALTER TABLE topics ADD COLUMN class_level VARCHAR(50) DEFAULT NULL AFTER academic_level");
        echo "Successfully altered topics table to add class_level.\n";
    } catch (PDOException $e) {
        echo "Notice: topics table already has class_level or alter skipped: " . $e->getMessage() . "\n";
    }

    try {
        $pdo->exec("ALTER TABLE questions ADD COLUMN difficulty ENUM('easy','medium','hard') DEFAULT 'medium' AFTER question_type");
        echo "Successfully altered questions table to add difficulty.\n";
    } catch (PDOException $e) {
        echo "Notice: questions table already has difficulty or alter skipped: " . $e->getMessage() . "\n";
    }

    // 2. Truncate existing data
    $pdo->exec("SET FOREIGN_KEY_CHECKS = 0");
    $pdo->exec("TRUNCATE TABLE progress");
    $pdo->exec("TRUNCATE TABLE quiz_results");
    $pdo->exec("TRUNCATE TABLE answers");
    $pdo->exec("TRUNCATE TABLE questions");
    $pdo->exec("TRUNCATE TABLE quizzes");
    $pdo->exec("TRUNCATE TABLE lessons");
    $pdo->exec("TRUNCATE TABLE topics");
    $pdo->exec("SET FOREIGN_KEY_CHECKS = 1");
    echo "Successfully truncated all lessons, topics, progress, and quiz history.\n";

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
                $content = generateLessonContent($lesson_title, $academic_level);
                $desc = "Example-driven math study sheet with 4 step-by-step worked examples and 4 practice problems for " . $lesson_title . ".";
                $objectives = "Master primary formula of " . $lesson_title . "\nFollow 4 step-by-step worked solutions\nSolve 4 independent practice problems";
                
                $stmt = $pdo->prepare("INSERT INTO lessons (topic_id, title, description, learning_objectives, content, status) VALUES (?, ?, ?, ?, ?, 'published')");
                $stmt->execute([$topic_id, $lesson_title, $desc, $objectives, $content]);
                $lesson_id = $pdo->lastInsertId();
                
                generateQuizForLesson($pdo, $lesson_id, $lesson_title);
                $total_inserted++;
            }
            $pdo->commit();
        }
    }

    echo "SUCCESS: Seeded all topics and " . $total_inserted . " example-driven math lessons with 4 worked examples and 4 practice problems per topic!\n";
} catch (Exception $e) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    echo "ERROR: " . $e->getMessage() . "\n";
}
?>

    function generateLessonContent($title, $academic_level = 'high_school') {
        $data = getSpecializedExamples($title);
        $pages = [];

        // PAGE 1: Core Concepts & Formulas
        $pages[] = "### Page 1: Core Concepts and Primary Formulas\n\n" .
                   "Welcome to **" . $title . "**! " . $data['summary'] . "\n\n" .
                   "#### 📐 Primary Mathematical Formula\n" .
                   $data['formula'] . "\n\n" .
                   "#### 🔍 Key Notation & Parameter Definitions\n" .
                   "- **Standard Notation**: `" . $data['notation'] . "`\n" .
                   "- **Primary Variables / Symbols**: " . $data['symbols'] . "\n" .
                   "- **Core Purpose**: Establishing valid mathematical transformations and calculating exact numerical values step by step.\n\n" .
                   "#### 📚 Study Sheet Navigation\n" .
                   "- **Page 1**: Core Concepts and Primary Formulas\n" .
                   "- **Page 2**: Key Operational Rules and Guidelines\n" .
                   "- **Page 3**: Step-by-Step Worked Examples (Part I)\n" .
                   "- **Page 4**: Step-by-Step Worked Examples (Part II)\n" .
                   "- **Page 5**: Self-Assessment Practice Problem Set & Quiz Checklist\n\n" .
                   "Review the formula above and proceed to Page 2 to examine key operational rules!";

        // PAGE 2: Key Operational Rules
        $pages[] = "### Page 2: Key Operational Rules and Guidelines\n\n" .
                   "Before attempting problem solving, keep the following foundational mathematical rules in mind:\n\n" .
                   "1. **Order of Operations (BODMAS/PEMDAS)**: Always evaluate Brackets/Parentheses first, Exponents/Orders second, Multiplication and Division third, and Addition and Subtraction last.\n" .
                   "2. **Algebraic Balance**: Whatever operation (addition, subtraction, multiplication, division) is performed on one side of an equality sign must be performed on the opposite side.\n" .
                   "3. **Sign Precision**: Multiplying or dividing two negative numbers yields a positive value; multiplying opposite signs yields a negative value.\n" .
                   "4. **Simplification & Units**: Always state final answers in simplest form or standard units where appropriate.\n\n" .
                   "Proceed to Page 3 to work through step-by-step solved examples!";

        // PAGE 3: Worked Examples Set 1
        $pages[] = "### Page 3: Step-by-Step Worked Examples (Part I)\n\n" .
                   "#### 📝 Worked Example 1\n" .
                   "**Question**: " . $data['ex1_q'] . "\n\n" .
                   "**Solution Breakdown**:\n" .
                   $data['ex1_s'] . "\n\n" .
                   "---\n\n" .
                   "#### 📝 Worked Example 2\n" .
                   "**Question**: " . $data['ex2_q'] . "\n\n" .
                   "**Solution Breakdown**:\n" .
                   $data['ex2_s'];

        // PAGE 4: Worked Examples Set 2
        $pages[] = "### Page 4: Step-by-Step Worked Examples (Part II)\n\n" .
                   "#### 📝 Worked Example 3\n" .
                   "**Question**: " . $data['ex3_q'] . "\n\n" .
                   "**Solution Breakdown**:\n" .
                   $data['ex3_s'] . "\n\n" .
                   "---\n\n" .
                   "#### 📝 Worked Example 4\n" .
                   "**Question**: " . $data['ex4_q'] . "\n\n" .
                   "**Solution Breakdown**:\n" .
                   $data['ex4_s'];

        // PAGE 5: Student Practice Problem Set
        $pages[] = "### Page 5: Student Practice Problem Set and Exam Checklist\n\n" .
                   "Test your understanding by solving the following 4 practice problems on paper:\n\n" .
                   "#### ✏️ Independent Practice Problems\n" .
                   $data['p1'] . "\n\n" .
                   $data['p2'] . "\n\n" .
                   $data['p3'] . "\n\n" .
                   $data['p4'] . "\n\n" .
                   "----\n\n" .
                   "#### ✅ Lesson Checklist\n" .
                   "1. Have you memorized the primary formula " . $data['formula'] . "?\n" .
                   "2. Have you solved all 4 practice problems above?\n" .
                   "3. Are you ready to take the timed checkpoint quiz?\n\n" .
                   "When you are ready, click the **Take Lesson Quiz** button below to complete this module!";

        return implode("\n<!-- pagebreak -->\n", $pages);
    }

    function generateQuizForLesson($pdo, $lesson_id, $title) {
        $data = getSpecializedExamples($title);
        $time_limit = 450; // 7.5 minutes
        
        $stmt = $pdo->prepare("INSERT INTO quizzes (lesson_id, passing_score, randomize_questions, time_limit) VALUES (?, 50, 0, ?)");
        $stmt->execute([$lesson_id, $time_limit]);
        $quiz_id = $pdo->lastInsertId();
        
        $questions_data = [
            [
                'text' => "What is the primary governing formula for " . $title . " presented on Page 1?",
                'type' => 'mcq',
                'difficulty' => 'easy',
                'explanation' => "The primary formula stated on Page 1 is: " . $data['formula'] . ".",
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
                'explanation' => "True. Whatever operation is performed on one side must be performed on the opposite side.",
                'answers' => [
                    ['text' => 'True', 'correct' => 1],
                    ['text' => 'False', 'correct' => 0]
                ]
            ],
            [
                'text' => "On which pages of the study sheet are the step-by-step Worked Examples 1 through 4 located?",
                'type' => 'mcq',
                'difficulty' => 'medium',
                'explanation' => "Worked Examples 1 & 2 are on Page 3, and Worked Examples 3 & 4 are on Page 4.",
                'answers' => [
                    ['text' => 'Pages 3 and 4', 'correct' => 1],
                    ['text' => 'Pages 1 and 2', 'correct' => 0],
                    ['text' => 'Page 5 only', 'correct' => 0],
                    ['text' => 'Page 1 only', 'correct' => 0]
                ]
            ],
            [
                'text' => "What standard notation (defined on Page 1) is used for " . $title . "? Enter `" . str_replace('\\', '\\\\', $data['notation']) . "` as your answer.",
                'type' => 'fib',
                'difficulty' => 'hard',
                'explanation' => "The canonical notation is `" . $data['notation'] . "`.",
                'answers' => [
                    ['text' => $data['notation'], 'correct' => 1]
                ]
            ],
            [
                'text' => "Where can you find the independent practice problems to test your skills before taking the quiz?",
                'type' => 'mcq',
                'difficulty' => 'medium',
                'explanation' => "Page 5 contains the independent practice problem set.",
                'answers' => [
                    ['text' => 'Page 5', 'correct' => 1],
                    ['text' => 'Page 1', 'correct' => 0],
                    ['text' => 'Page 2', 'correct' => 0],
                    ['text' => 'None of the above', 'correct' => 0]
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

    $sort_order = 1;
    $total_inserted = 0;
    foreach ($curriculum as $item) {
        $academic_level = $item['level'];
        $class_level = $item['class'];
        foreach ($item['topics'] as $topic_name => $lessons) {
            $display_topic_name = $topic_name . ' (' . strtoupper($class_level) . ')';
            
            $stmt = $pdo->prepare("INSERT INTO topics (name, sort_order, academic_level, class_level) VALUES (?, ?, ?, ?)");
            $stmt->execute([$display_topic_name, $sort_order++, $academic_level, $class_level]);
            $topic_id = $pdo->lastInsertId();
            
            foreach ($lessons as $lesson_title) {
                $content = generateLessonContent($lesson_title, $academic_level);
                $desc = "Example-driven math study sheet with 4 step-by-step worked examples and 4 practice problems for " . $lesson_title . ".";
                $objectives = "Master primary formula of " . $lesson_title . "\nFollow 4 step-by-step worked solutions\nSolve 4 independent practice problems";
                
                $stmt = $pdo->prepare("INSERT INTO lessons (topic_id, title, description, learning_objectives, content, status) VALUES (?, ?, ?, ?, ?, 'published')");
                $stmt->execute([$topic_id, $lesson_title, $desc, $objectives, $content]);
                $lesson_id = $pdo->lastInsertId();
                
                generateQuizForLesson($pdo, $lesson_id, $lesson_title);
                $total_inserted++;
            }
        }
    }

    $pdo->commit();
    echo "SUCCESS: Seeded all topics and " . $total_inserted . " example-driven math lessons with 4 worked examples and 4 practice problems per topic!\n";
} catch (Exception $e) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    echo "ERROR: " . $e->getMessage() . "\n";
}
?>
