<?php
require_once '../private/db/db.php';

$message = '';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    // Retrieve a password 
    $stmt = $conn->prepare('SELECT password FROM userdata WHERE user = ?');
    $stmt->execute([$user]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if($row) {
        $hashedPassword = $row['pass'];
    } 
} 
?>