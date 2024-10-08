<?php

###-save user information of job.html in database-###

// اطلاعات دیتابیس
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "omran_iso";
// گرفتن اطلاعات فرم
$h1 = $_POST['firstname'];
$h2 = $_POST['lastname'];
$h3 = $_POST['email'];
$h4 = $_POST['phone'];
$h5 = $_POST['gender'];
// وصل شدن به دیتابیس
$conn = mysqli_connect($servername, $username, $password, $dbname);
// چک کردن اتصال
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
// مقداردهی جداول با استفاده از مقادیر دریافتی
$sql = "INSERT INTO user_info (firstname, lastname, email, phone, gender)
VALUES ('$h1', '$h2', '$h3', '$h4', '$h5')";
// چک کردن انجام درست عملیات
if (mysqli_query($conn, $sql)) {
  header("Location: index.html?s=1 ");
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
// قطع اتصال
mysqli_close($conn);
