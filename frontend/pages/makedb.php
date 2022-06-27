<?php
$host = 'localhost';
$user = 'root';
$pswd = '';
$db = 'test';
$conn = mysqli_connect($host, $user, $pswd, $db);
if(!$conn){
    die('Could not connect to database'.mysqli_connect_error());
}
else{
    echo 'Connected to db successfully';
}

$user=$_POST["username"];
$pass=$_POST["password"];
$sql1 = "INSERT INTO login(username,password) VALUES('$user', '$pass')";
$rs = mysqli_query($conn, $sql1);
if($rs){
    echo '<h1>Record added</h1>';
}

$sql3 = "SELECT * FROM login";
$rs1 = mysqli_query($conn, $sql3);
echo '<br>';
echo '<table border="1">';
while($row = mysqli_fetch_assoc($rs1)){
    echo '<tr>';
    foreach($row as $value){
        echo "<td>" . $value . "</td>";
    }
    echo '</tr>';

}
echo '</table>';


?>
