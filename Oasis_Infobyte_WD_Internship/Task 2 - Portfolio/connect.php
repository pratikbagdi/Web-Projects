<?php
// Establish a connection to the database
$servername = "localhost";
$username = "root";
$password = "12345";
$dbname = "portDb";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check for connection errors
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve data from the form
$fullName= $_POST['fullName'];
$contact= $_POST['contact'];
$email= $_POST['email'];
$subject= $_POST['subject'];
$message= $_POST['message'];

// Insert the data into the database
$sql = "insert into portdata( fullName, contact, email, subject, message) values('$fullName', '$contact', '$email', '$subject', '$message');";

if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully";
} else {
    echo "Error inserting data: " . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>
