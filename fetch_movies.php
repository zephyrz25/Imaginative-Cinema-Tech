<?php
include 'db_connect.php';

$sql = "SELECT * FROM movies";
$result = $conn->query($sql);

$movies = [];

while ($row = $result->fetch_assoc()) {
    $movies[] = $row;
}

echo json_encode($movies);
?>
