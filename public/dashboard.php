<?php
session_start();

// Redirect to login not authorized user
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit();
} 

echo 'User:'. $_SESSION['user']."<br>";

require_once '../private/db/db.php';

$conn = database_connect();

// Get ID
$idStmt = $conn->prepare("SELECT id FROM userdata WHERE username = ?");
$idStmt->execute([$_SESSION['user']]);
$id = $idStmt->fetch(PDO::FETCH_ASSOC);
// Print current balance

// Get initial balance
$balance = $conn->prepare("SELECT balance FROM userdata WHERE username = ?");
$balance->execute([$_SESSION['user']]);
$balance = $balance->fetch(PDO::FETCH_ASSOC);

// Subtract expenses
$spending = $conn->prepare("SELECT date, description, spend FROM usercosts WHERE user_id = ?");
$spending->execute([$id["id"]]);
$spending = $spending->fetchAll(PDO::FETCH_ASSOC);

// Print all expenses 
$sum = 0;
echo "<table>";
foreach ($spending as $row) {
    echo "<tr>";
    echo "<th>" . date("d-m-Y",strtotime($row["date"])) . "</th>";
    echo "<th>" . $row["description"] . "</th>";
    echo "<th>" . $row["spend"] / 100 . "</th>";
    echo "</tr>";
    $sum += $row["spend"];
}
echo "</table>";
echo 'Money: ' . number_format(($balance["balance"] - $sum) / 100, 2, ',', '') . "<br> ";
 

// Send spend to the db
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $money_spend = $_POST['money_spend'];
    $desc = $_POST['desc'];


    // Send
    if($id) {
        $idEmailStmt = $conn->prepare("INSERT INTO users.usercosts (user_id, date, description, spend) 
        VALUES (?, NOW(), ?, ?)");
        $idEmailStmt->execute([$id["id"], $desc, $money_spend * 100]);
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
        <label for="money_spend">Spend:</label>
        <input type="number" placeholder="Enter amount" name="money_spend" required>

        <label for="desc">Description:</label>
        <input type="text" placeholder="Enter description" name="desc" required>

        <button type="submit">Send</button>
    </form>
</body>
</html>