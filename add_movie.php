<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];
    $genre = $_POST['genre'];
    $description = $_POST['description'];
    $poster = $_POST['poster'];  
    $showtime = $_POST['showtime'];

    $sql = "INSERT INTO movies (title, genre, description, poster, showtime) 
            VALUES ('$title', '$genre', '$description', '$poster', '$showtime')";

    if ($conn->query($sql) === TRUE) {
        echo "Movie added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
