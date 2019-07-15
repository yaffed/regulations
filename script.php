<?php

if(isset($_POST['submit']))
{

$message=
'Full Name: '.$_POST['name'].'<br/>
Comments:    '.$_POST['comments'].'<br/>
Email:       '.$_POST['email'].'
';

require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'fcohen@yaffed.org';                 // SMTP username
$mail->Password = 'nope';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom($_POST['email'], $_POST['name']);
$mail->addReplyTo($_POST['email'], $_POST['name']);

$mail->Subject = "New Form Submission";
$mail->MsgHTML($message);
$mail->addAddress('fcohen@yaffed.org');     // Add a recipient
$result = $mail->Send();
$message = $result ? 'Successfully sent!' : 'Sending Failed!';
unset($mail);
};



?>
