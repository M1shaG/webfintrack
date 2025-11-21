<?php
require_once '../private/db/db.php';

$conn = database_connect();

$message = '';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    // Retrieve a password 
    $stmt = $conn->prepare('SELECT password FROM userdata WHERE username = ?');
    $stmt->execute([$user]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check if user exist
    if($row) {
        // Compare passwords
        $hashedPass = $row['password'];
        if(password_verify($pass, $hashedPass)) { 
            echo 'hello';
            $message = "Login successful!";
            // Save session 
            session_start();
            $_SESSION['user'] = $user;
            
            // Redirect 
            header("Location: dashboard.php");
            exit();

        } else {
            $message = "Invalid password.";
        }
    } else {
        $message = "Email not found";
    }
} 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration page</title>
</head>
<body>

<!-- Simple form for registration -->
 
    <form method="POST">
        <label for="mail">Username</label>
        <input type="text" placeholder="Enter Username" name="user" required>

        <label for="mail">Password</label>
        <input type="password" placeholder="Enter Password" name="pass" required>

        <button type="submit">Login</button>
    </form>
</body>
</html>