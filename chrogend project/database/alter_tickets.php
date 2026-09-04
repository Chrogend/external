<?php
// C:\Users\USER\Documents\chrogend project\database\alter_tickets.php
require_once __DIR__ . '/../includes/db.php';
try {
    $pdo->exec("ALTER TABLE admin_tickets ADD COLUMN image_path VARCHAR(255) DEFAULT NULL AFTER message");
    echo "SUCCESS: Added image_path column to admin_tickets successfully.\n";
} catch (PDOException $e) {
    echo "Notice: " . $e->getMessage() . "\n";
}
?>
