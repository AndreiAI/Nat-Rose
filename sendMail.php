<?php

    $name = $_POST['userName'];
    $email = $_POST['userEmail'];
    $phone = $_POST['userPhone'];
    $type = $_POST['type'];
    $description = $_POST['description'];

    // The message
    $message = "Name: " . $name . "\r\nPhone: " . $phone . "\r\n\r\nMessage:\r\n" . $description;

    $headers = 'From: ' . $email . "\r\n" . 'Reply-To: ' . $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();

    // Send
    mail('JustJordas@gmail.com', $type, $message, $headers);

?>