<?php
$server = 'localhost';
$usn = 'root';
$pswd = '123';
$db = 'newDB';
$conn = new mysqli($server,$usn,$pswd,$db);
if($conn->connect_error){
    die("connection error: ".$conn->connect_error);
}
 else {
     echo 'connected successfully<br>';
}
echo '<h1>group by</h1>';
$query = "select count(id) num,role from Cricc group by role order by count(id) asc";
$result = $conn->query($query);
print_r($result);
echo '<br>';
if($result->num_rows>0){
    while($res = $result->fetch_assoc()){
        echo $res['num'].' and  '.$res['role'].'<br>';
    }
}
$conn->close();
?>

