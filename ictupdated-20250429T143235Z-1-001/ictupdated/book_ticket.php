<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_name = $_POST['name'];
    $email = $_POST['email'];
    $movie_id = $_POST['movie_id'];
    $seats = $_POST['seats'];

    $sql = "INSERT INTO bookings (user_name, email, movie_id, seats) 
            VALUES ('$user_name', '$email', '$movie_id', '$seats')";

    if ($conn->query($sql) === TRUE) {
        echo "Booking successful!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
