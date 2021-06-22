<?php
$ser = 'localhost';
$usn = 'root';
$pswd = 123;
$db = 'newDB';
//added new content
/*
multiline comment
*/
$conn = new mysqli($ser,$usn,$pswd,$db);
if($conn->connect_error){
    die("connection error: ".$conn->connect_error);
}
else{
    echo 'connected to newDB  successfully<br>';
}
$retrieve = "select firstname,lastname from Cricc where role='batsman' or role='keeper'";//using or
$result = $conn->query($retrieve);
if($result->num_rows>0){
    while($res = $result->fetch_assoc()){
        echo $res['firstname'].' '.$res['lastname'].'<br>';
    }
}
echo '<h1>Top performers</h1>';
$retrieve = "select firstname,lastname from Cricc where role='batsman' and runs>10000";// using and
$result = $conn->query($retrieve);
if($result->num_rows>0){
    while($res = $result->fetch_assoc()){
        echo $res['firstname'].' '.$res['lastname'].'<br>';
    }
}
echo '<h1>who can bat</h1>';
$retrieve = "select firstname,lastname from Cricc where not role='bowler'";//using not
$result = $conn->query($retrieve);
if($result->num_rows>0){
    while($res = $result->fetch_assoc()){
        echo $res['firstname'].' '.$res['lastname'].'<br>';
    }
}
echo "commiting to the git<br>";
$conn->close();
?>