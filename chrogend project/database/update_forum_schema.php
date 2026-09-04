<?php
// C:\Users\USER\Documents\chrogend project\database\update_forum_schema.php
require_once __DIR__ . '/../includes/db.php';

echo "Altering database schema to add Global Q&A Forum and Ask Admin Support Tickets...\n";

try {
    // 1. Create forum_questions table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `forum_questions` (
          `id` INT AUTO_INCREMENT PRIMARY KEY,
          `user_id` INT NOT NULL,
          `title` VARCHAR(255) NOT NULL,
          `content` TEXT NOT NULL,
          `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
    ");
    echo "- Created forum_questions table successfully.\n";

    // 2. Create forum_answers table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `forum_answers` (
          `id` INT AUTO_INCREMENT PRIMARY KEY,
          `question_id` INT NOT NULL,
          `user_id` INT NOT NULL,
          `content` TEXT NOT NULL,
          `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (`question_id`) REFERENCES `forum_questions` (`id`) ON DELETE CASCADE,
          FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
    ");
    echo "- Created forum_answers table successfully.\n";

    // 3. Create admin_tickets table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `admin_tickets` (
          `id` INT AUTO_INCREMENT PRIMARY KEY,
          `user_id` INT NOT NULL,
          `subject` VARCHAR(255) NOT NULL,
          `message` TEXT NOT NULL,
          `status` ENUM('open', 'resolved') DEFAULT 'open',
          `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
    ");
    echo "- Created admin_tickets table successfully.\n";

    // 4. Create ticket_replies table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `ticket_replies` (
          `id` INT AUTO_INCREMENT PRIMARY KEY,
          `ticket_id` INT NOT NULL,
          `sender_type` ENUM('student', 'admin') NOT NULL,
          `sender_id` INT NOT NULL,
          `message` TEXT NOT NULL,
          `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (`ticket_id`) REFERENCES `admin_tickets` (`id`) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
    ");
    echo "- Created ticket_replies table successfully.\n";

    echo "SUCCESS: Database schema updated successfully!\n";
} catch (PDOException $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
}
?>
