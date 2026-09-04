<?php
require_once __DIR__ . '/../includes/db.php';
$stmt = $pdo->query("SELECT title, content FROM lessons WHERE id = 7");
$l = $stmt->fetch();
echo "=== LESSON: {$l['title']} ===\n\n";
echo $l['content'];
?>
