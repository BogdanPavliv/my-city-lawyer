<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'php/phpmailer/src/Exception.php';
   require 'php/phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ua', 'php/phpmailer/language/');
   $mail->isHTML(true);

   // Від кого лист
   $mail->setFrom('mycitylawyer@gmail.com', 'Юридична компанія My City Lawyer');
   // Кому відправити
   $mail->addAddress('bogdan.pavliv@gmail.com');
   // Тема листа
   $mail->Subject = 'Юридична компанія My City Lawyer';
   
   // Тіло листа
   $body = '<h1>Привіт Вас вітає юридична компанія My City Lawyer</h1>';    

   if(trim(!empty($_POST['name']))){
      $body.='<p><strong>Імя:</strong> '.$_POST['name'].'</p>';
   }
   if(trim(!empty($_POST['email']))){
      $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
   }
   if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Повідомлення:</strong> '.$_POST['message'].'</p>';
   }

   
   $mail->Body = $body;

   // Відправляємо
   if(!$mail->send()) {
      $message = 'Помилка';
   } else {
      $message = 'Дані відправлені!';
   }

   $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);
?>