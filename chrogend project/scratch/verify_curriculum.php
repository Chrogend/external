<?php
// verify_curriculum.php
require_once __DIR__ . '/../includes/db.php';

echo "=== MathVibe Database Verification ===\n";

$topics_count = $pdo->query("SELECT COUNT(*) FROM topics")->fetchColumn();
echo "Total topics: $topics_count\n";

$lessons_count = $pdo->query("SELECT COUNT(*) FROM lessons")->fetchColumn();
echo "Total lessons: $lessons_count\n";

$quizzes_count = $pdo->query("SELECT COUNT(*) FROM quizzes")->fetchColumn();
echo "Total quizzes: $quizzes_count\n";

$questions_count = $pdo->query("SELECT COUNT(*) FROM questions")->fetchColumn();
echo "Total questions: $questions_count\n";

$answers_count = $pdo->query("SELECT COUNT(*) FROM answers")->fetchColumn();
echo "Total answers: $answers_count\n";

// Show first 5 topics with class levels
echo "\n--- First 5 topics ---\n";
$stmt = $pdo->query("SELECT id, name, academic_level, class_level FROM topics ORDER BY sort_order ASC LIMIT 5");
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "ID: {$row['id']} | Name: {$row['name']} | Level: {$row['academic_level']} | Class: {$row['class_level']}\n";
}

// Show first lesson page counts
echo "\n--- First lesson page check ---\n";
$first_lesson = $pdo->query("SELECT id, title, content FROM lessons LIMIT 1")->fetch(PDO::FETCH_ASSOC);
if ($first_lesson) {
    $pages = explode('<!-- pagebreak -->', $first_lesson['content']);
    echo "Lesson ID: {$first_lesson['id']}\n";
    echo "Lesson Title: {$first_lesson['title']}\n";
    echo "Total pages: " . count($pages) . "\n";
}

// Show first quiz settings & question details
echo "\n--- First quiz checking ---\n";
$first_quiz = $pdo->query("SELECT q.id, q.time_limit, l.title FROM quizzes q JOIN lessons l ON q.lesson_id = l.id LIMIT 1")->fetch(PDO::FETCH_ASSOC);
if ($first_quiz) {
    echo "Quiz ID: {$first_quiz['id']} | Time Limit: {$first_quiz['time_limit']}s | Lesson: {$first_quiz['title']}\n";
    
    // List questions and difficulties
    $q_stmt = $pdo->prepare("SELECT id, question_text, question_type, difficulty FROM questions WHERE quiz_id = ?");
    $q_stmt->execute([$first_quiz['id']]);
    while ($q_row = $q_stmt->fetch(PDO::FETCH_ASSOC)) {
        echo " - Q_ID: {$q_row['id']} | Type: {$q_row['question_type']} | Difficulty: {$q_row['difficulty']} | Text: " . substr($q_row['question_text'], 0, 50) . "...\n";
    }
}
?>
