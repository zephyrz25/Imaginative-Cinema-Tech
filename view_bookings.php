<?php
include 'db_connect.php';

$sql = "SELECT bookings.id, bookings.user_name, bookings.email, 
               movies.title, bookings.seats, bookings.booking_date 
        FROM bookings 
        JOIN movies ON bookings.movie_id = movies.id";

$result = $conn->query($sql);

$bookings = [];

while ($row = $result->fetch_assoc()) {
    $bookings[] = $row;
}

echo json_encode($bookings);
?>
