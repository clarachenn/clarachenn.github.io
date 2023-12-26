<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Log the form data to a file for testing purposes
    $logFile = fopen("form_data_log.txt", "a");
    fwrite($logFile, "Name: $name\nEmail: $email\nMessage: $message\n\n");
 }
?>
