<?php
$servername = "localhost";
$username = "root";
$password = "Sh@lini_0207";
$dbname = "user";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO products (ProductName, Quantity, Price)
VALUES ('Tables', '10', '400');";
$sql .= "INSERT INTO products (ProductName, Quantity, Price)
VALUES ('Chairs', '10', '300');";
$sql .= "INSERT INTO products (ProductName, Quantity, Price)
VALUES ('Fans', '10', '500');";

//inserting multiple data at once

if ($conn->multi_query($sql) === TRUE) {
    $last_id = $conn->insert_id;
  echo "New records crea"
    . "ted successfully with last id as " . $last_id;
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
