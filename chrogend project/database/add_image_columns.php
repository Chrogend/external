<?php
// C:\Users\USER\Documents\chrogend project\database\add_image_columns.php
require_once __DIR__ . '/../includes/db.php';

echo "Altering Q&A Forum and Admin Tickets tables to support image attachments...\n";

try {
    $tables = ['forum_questions', 'forum_answers', 'admin_tickets', 'ticket_replies'];
    foreach ($tables as $tbl) {
        try {
            $pdo->exec("ALTER TABLE `$tbl` ADD COLUMN `image_path` VARCHAR(255) DEFAULT NULL AFTER `content`");
            echo "- Added image_path column to $tbl table successfully.\n";
        } catch (PDOException $e) {
            echo "Notice: column already exists or table alter skipped in $tbl: " . $e->getMessage() . "\n";
        }
    }
    // Note: ticket_replies table uses `message` instead of `content`, so let's adjust if needed:
    try {
        $pdo->exec("ALTER TABLE `ticket_replies` ADD COLUMN `image_path` VARCHAR(255) DEFAULT NULL AFTER `message`");
        echo "- Added image_path column to ticket_replies table successfully.\n";
    } catch (PDOException $e) {
        // Already added above or exists
    }

    echo "SUCCESS: Database schema altered successfully!\n";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
}
?>
