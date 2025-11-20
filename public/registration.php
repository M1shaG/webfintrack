<?php
$message = ""; 
    
require_once '../private/db/db.php';

$conn = database_connect();

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve data from form
    $user = $_POST['user'];
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    $rep_pass = $_POST['rep_pass'];

    // Check if email already exists

    $checkEmailStmt = $conn->prepare("SELECT email FROM userdata WHERE email = ?");
    $checkEmailStmt->execute([$mail]);
    
    if($checkEmailStmt->rowCount() > 0) {
        $message = "Email ID already exists";
    } else {
        # Hash password
        $hashedPass = password_hash($pass, PASSWORD_DEFAULT);
        
        # Insert new account
        $stmt = $conn->prepare("INSERT INTO userdata (username, email, password) VALUES (?,?,?)");
        $stmt->execute([$user, $mail, $hashedPass]);

        $message = "Account created succesfully!";
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

        <label for="mail">Email</label>
        <input type="text" placeholder="Enter Email" name="mail" required>

        <label for="mail">Password</label>
        <input type="password" placeholder="Enter Password" name="pass" required>

        <label for="mail">Repeat Password</label>
        <input type="password" placeholder="Repeat Password" name="rep_pass" required>

        <button type="submit">Register</button>
    </form>
</body>
</html>