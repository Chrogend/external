<?php
// database/seed_mock_presentation.php
// Comprehensive Seeder for Presentation Demo:
// 1. Math Curriculum (Topics, Lessons, Quizzes, Questions)
// 2. Demo Student & Admin Accounts
// 3. Realistic Quiz History, Lesson Progress, Badges, Forum Posts & Support Tickets

require_once __DIR__ . '/../includes/db.php';

echo "=== MathVibe Presentation Seeder ===\n";

try {
    // ----------------------------------------------------
    // Step 1: Ensure Schema alterations exist
    // ----------------------------------------------------
    try {
        $pdo->exec("ALTER TABLE topics ADD COLUMN class_level VARCHAR(50) DEFAULT NULL AFTER academic_level");
    } catch (PDOException $e) {}

    try {
        $pdo->exec("ALTER TABLE questions ADD COLUMN difficulty ENUM('easy','medium','hard') DEFAULT 'medium' AFTER question_type");
    } catch (PDOException $e) {}

    // ----------------------------------------------------
    // Step 2: Clean & Truncate tables for fresh demo data
    // ----------------------------------------------------
    $pdo->exec("SET FOREIGN_KEY_CHECKS = 0");
    $pdo->exec("TRUNCATE TABLE ticket_replies");
    $pdo->exec("TRUNCATE TABLE admin_tickets");
    $pdo->exec("TRUNCATE TABLE forum_answers");
    $pdo->exec("TRUNCATE TABLE forum_questions");
    $pdo->exec("TRUNCATE TABLE notifications");
    $pdo->exec("TRUNCATE TABLE achievements");
    $pdo->exec("TRUNCATE TABLE progress");
    $pdo->exec("TRUNCATE TABLE quiz_results");
    $pdo->exec("TRUNCATE TABLE answers");
    $pdo->exec("TRUNCATE TABLE questions");
    $pdo->exec("TRUNCATE TABLE quizzes");
    $pdo->exec("TRUNCATE TABLE lessons");
    $pdo->exec("TRUNCATE TABLE topics");
    $pdo->exec("TRUNCATE TABLE users");
    $pdo->exec("TRUNCATE TABLE admins");
    $pdo->exec("SET FOREIGN_KEY_CHECKS = 1");

    echo "[1/5] Database tables cleaned successfully.\n";

    // ----------------------------------------------------
    // Step 3: Seed Administrators & Students
    // ----------------------------------------------------
    $password_hash = password_hash('password', PASSWORD_DEFAULT);

    // Admin account
    $stmt = $pdo->prepare("INSERT INTO admins (id, full_name, email, password, created_at) VALUES (1, 'Dr. Marcus Vance (Admin)', 'admin@mathvibe.com', ?, NOW())");
    $stmt->execute([$password_hash]);

    // Student accounts
    $students_data = [
        [1, 'Chrogend', 'student@mathvibe.com', 'default_avatar.png', 'active', 7, '2026-07-27', '2026-06-01 10:00:00'],
        [2, 'Sarah Jenkins', 'sarah.jenkins@stanford.edu', 'default_avatar.png', 'active', 12, '2026-07-26', '2026-06-05 11:30:00'],
        [3, 'Alex Chen', 'alex.chen@mit.edu', 'default_avatar.png', 'active', 5, '2026-07-25', '2026-06-10 14:15:00'],
        [4, 'Emily Watson', 'emily.watson@oxford.edu', 'default_avatar.png', 'active', 14, '2026-07-27', '2026-06-12 09:45:00'],
        [5, 'David Kumar', 'david.kumar@cambridge.edu', 'default_avatar.png', 'active', 3, '2026-07-24', '2026-06-20 16:20:00'],
        [6, 'Sophia Rodriguez', 'sophia.rodriguez@harvard.edu', 'default_avatar.png', 'active', 9, '2026-07-27', '2026-07-01 08:10:00']
    ];

    $stmt = $pdo->prepare("INSERT INTO users (id, full_name, email, password, profile_picture, status, streak_count, last_activity_date, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    foreach ($students_data as $s) {
        $stmt->execute([$s[0], $s[1], $s[2], $password_hash, $s[3], $s[4], $s[5], $s[6], $s[7]]);
    }

    echo "[2/5] Admin and 6 Demo Student accounts created (Password: 'password').\n";

    // ----------------------------------------------------
    // Step 4: Seed Curriculum (Topics, Lessons, Quizzes)
    // ----------------------------------------------------
    include __DIR__ . '/seeder_core.php';

    echo "[3/5] Math Curriculum fully populated with step-by-step worked examples & quizzes.\n";

    // ----------------------------------------------------
    // Step 5: Seed Interactive Activity, Quiz Results & Progress
    // ----------------------------------------------------
    // Fetch all quizzes with lesson and topic info
    $quizzes = $pdo->query("
        SELECT q.id as quiz_id, q.lesson_id, l.title as lesson_title, l.topic_id 
        FROM quizzes q 
        JOIN lessons l ON q.lesson_id = l.id 
        ORDER BY q.id ASC
    ")->fetchAll();

    if (!empty($quizzes)) {
        $num_quizzes = count($quizzes);

        // Generate quiz attempts & lesson progress for students
        $stmt_result = $pdo->prepare("INSERT INTO quiz_results (user_id, quiz_id, score, total_questions, time_spent, submitted_answers, completed_at) VALUES (?, ?, ?, 5, ?, ?, ?)");
        $stmt_prog = $pdo->prepare("INSERT INTO progress (user_id, lesson_id, status, bookmark, updated_at) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE status=VALUES(status), updated_at=VALUES(updated_at)");

        $dates = [
            '2026-07-01 10:15:00', '2026-07-05 14:20:00', '2026-07-10 09:30:00',
            '2026-07-15 16:45:00', '2026-07-20 11:10:00', '2026-07-22 15:00:00',
            '2026-07-25 18:30:00', '2026-07-26 12:40:00', '2026-07-27 14:10:00'
        ];

        // Seed primary demo student (User ID = 1) with rich history
        $student1_quizzes = array_slice($quizzes, 0, 15);
        foreach ($student1_quizzes as $idx => $q) {
            $score = rand(3, 5); // High scores (60% - 100%)
            $time = rand(180, 400); // seconds
            $date = $dates[$idx % count($dates)];

            $mock_answers = json_encode(["q1" => 1, "q2" => 1, "q3" => 1, "q4" => "formula", "q5" => 1]);
            $stmt_result->execute([1, $q['quiz_id'], $score, $time, $mock_answers, $date]);
            $stmt_prog->execute([1, $q['lesson_id'], 'completed', rand(0, 1), $date]);
        }

        // Seed additional students to create rich analytics graphs on Admin Dashboard
        for ($uid = 2; $uid <= 6; $uid++) {
            $sample = array_rand($quizzes, min(10, $num_quizzes));
            if (!is_array($sample)) $sample = [$sample];
            
            foreach ($sample as $s_idx) {
                $q = $quizzes[$s_idx];
                $score = rand(2, 5);
                $time = rand(150, 420);
                $date = $dates[rand(0, count($dates) - 1)];

                $mock_answers = json_encode(["q1" => rand(0,1), "q2" => 1, "q3" => 1]);
                $stmt_result->execute([$uid, $q['quiz_id'], $score, $time, $mock_answers, $date]);
                $stmt_prog->execute([$uid, $q['lesson_id'], rand(0, 1) ? 'completed' : 'started', rand(0, 1), $date]);
            }
        }
    }

    // Achievements for student 1
    $stmt = $pdo->prepare("INSERT INTO achievements (user_id, badge_type, unlocked_at) VALUES (?, ?, NOW()) ON DUPLICATE KEY UPDATE unlocked_at=NOW()");
    $stmt->execute([1, 'pioneer']);
    $stmt->execute([1, 'quiz_whiz']);
    $stmt->execute([1, 'streak_weekly']);

    // Notifications for student 1
    $stmt = $pdo->prepare("INSERT INTO notifications (user_id, title, message, is_read, created_at) VALUES (?, ?, ?, ?, NOW())");
    $stmt->execute([1, '🏆 Achievement Unlocked!', 'You have unlocked the "Quiz Whiz" badge for scoring above 80% on 5 quizzes!', 0]);
    $stmt->execute([1, '🔥 7-Day Streak!', 'Congratulations on maintaining your study streak for 7 consecutive days!', 1]);
    $stmt->execute([1, '📚 New Calculus Module Available', 'Check out the new Differential Calculus worked examples in your dashboard.', 1]);

    echo "[4/5] Quiz attempts, performance metrics, badges, and notifications seeded.\n";

    // ----------------------------------------------------
    // Step 6: Seed Forum Discussions & Admin Tickets
    // ----------------------------------------------------
    // Forum Questions
    $forum_qs = [
        [
            'user_id' => 2,
            'title' => 'How do I intuitively understand the Chain Rule in Differentiation?',
            'content' => 'I am studying $y = (2x^2 + 3)^5$ on Page 3 of the Calculus module. Why do we multiply the derivative of the inner function by the outer function\'s derivative?',
            'created_at' => '2026-07-24 14:00:00'
        ],
        [
            'user_id' => 1,
            'title' => 'Question regarding HCF and LCM relationship formula',
            'content' => 'On the Number and Numeration module, we have $\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$. Does this formula hold true for three numbers $a, b, c$ as well?',
            'created_at' => '2026-07-25 10:30:00'
        ],
        [
            'user_id' => 4,
            'title' => 'Matrix Inverse: What if the Determinant is zero?',
            'content' => 'When calculating $A^{-1} = \\frac{1}{\\det A} \\text{adj}(A)$, what happens when $\\det A = 0$? Does the matrix have an inverse?',
            'created_at' => '2026-07-26 16:15:00'
        ]
    ];

    $stmt_fq = $pdo->prepare("INSERT INTO forum_questions (id, user_id, title, content, created_at) VALUES (?, ?, ?, ?, ?)");
    $stmt_fa = $pdo->prepare("INSERT INTO forum_answers (question_id, user_id, content, created_at) VALUES (?, ?, ?, ?)");

    foreach ($forum_qs as $idx => $fq) {
        $q_id = $idx + 1;
        $stmt_fq->execute([$q_id, $fq['user_id'], $fq['title'], $fq['content'], $fq['created_at']]);
    }

    // Forum Answers
    $stmt_fa->execute([1, 1, 'Think of it like gears turning! If $u = 2x^2+3$, $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$. The rate of change of $y$ with respect to $x$ is the product of rates!', '2026-07-24 15:20:00']);
    $stmt_fa->execute([2, 3, 'No, for three numbers $a,b,c$, $\\text{HCF}(a,b,c) \\times \\text{LCM}(a,b,c)$ does NOT equal $a \\times b \\times c$ in general. It only strictly applies to two numbers!', '2026-07-25 11:45:00']);
    $stmt_fa->execute([3, 1, 'If $\\det A = 0$, the matrix is called **singular** and its inverse does not exist because division by zero is undefined!', '2026-07-26 17:00:00']);

    // Admin Support Tickets
    $stmt_t = $pdo->prepare("INSERT INTO admin_tickets (id, user_id, subject, message, status, created_at) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt_tr = $pdo->prepare("INSERT INTO ticket_replies (ticket_id, sender_type, sender_id, message, created_at) VALUES (?, ?, ?, ?, ?)");

    $stmt_t->execute([1, 1, 'Request for Additional Worked Examples on Integration by Parts', 'Hello Administrator, could we get extra worked examples for integration by parts in the 200L Integral Calculus section? Thank you!', 'resolved', '2026-07-22 09:00:00']);
    $stmt_tr->execute([1, 'admin', 1, 'Hello Chrogend! We have updated the Worked Examples on Page 4 of Integral Calculus with step-by-step solutions using $\\int u \\, dv = uv - \\int v \\, du$. Check it out!', '2026-07-22 11:30:00']);
    $stmt_tr->execute([1, 'student', 1, 'Thank you so much Dr. Vance! That was extremely helpful.', '2026-07-22 12:00:00']);

    $stmt_t->execute([2, 2, 'Certificate Download Verification', 'Hi Admin, I completed all required High School JSS1 topics but wanted to verify if my certificate signature is valid for my school submission.', 'open', '2026-07-27 11:00:00']);
    $stmt_tr->execute([2, 'admin', 1, 'Hello Sarah, yes! All generated certificates include the official MathVibe Academic Committee signature seal.', '2026-07-27 13:15:00']);

    echo "[5/5] Forum questions, answers, and support tickets populated successfully.\n";

    echo "\n🎉 SUCCESS! Presentation Database Seeding Completed Successfully!\n";

} catch (Exception $e) {
    echo "ERROR during seeder execution: " . $e->getMessage() . "\n";
}
?>
