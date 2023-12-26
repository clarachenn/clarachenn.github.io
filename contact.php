<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $to = "claracjx@gmail.com";
        $subject = "New Contact Form Submission";

        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Subject: $subject\n\n";
        $email_content .= "Message:\n$message";

        $headers = "From: $email";

        if (mail($to, $subject, $email_content, $headers)) {
            echo "Success: Email sent successfully";
            exit;
        } else {
            echo "Error: Email could not be sent";
        }
    }
?>
