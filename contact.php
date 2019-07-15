<?php
if($_POST["message"]) {
    mail("your@email.address", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>

<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>Page Title</title>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
<form method="post" action="contact.php">
    <textarea name="message"></textarea>
    <input type="submit">
</form>
</body>
</html>

