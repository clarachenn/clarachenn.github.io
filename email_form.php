<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $name = filter_var($name, FILTER_SANITIZE_STRING);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $message = filter_var($message, FILTER_SANITIZE_STRING);
    
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill out all the fields.";
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit();
    }

    $to = "clarachenn1@gmail.com";  
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $email_message = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";
    
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Thank you for your message! I will get back to you soon.";
    } else {
        echo "Oops! There was an issue sending the email. Please try again later.";
    }
} else {
    header("Location: contact.html");
    exit();
}
?>
