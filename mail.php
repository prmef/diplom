<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $product_name = $_POST["product_name"]
    $to = "krainukovaleksandr@gmail.com"; // Change this to your email address
    $subject = "New Order";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "$product_name\n"

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed!";
    }
}
?>
