<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $response = "Name: $name\nEmail: $email\nMessage: $message";
    file_put_contents('submissions.txt', $response . PHP_EOL, FILE_APPEND);

    echo "Form submitted successfully! Thank you, $name.";
} else {
    echo "Invalid request method.";
}
?>
