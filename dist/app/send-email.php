<?php
    // отправляем клиенту письмо
    if (isset($_POST["email"]) && isset($_POST["phone"]) && isset($_POST["product"])) { 
        function sendToLightStart() {
            $to = "ligghtstart@gmail.com";

            $subject = "Новая заявка"; 

            $message = 'Email: ' . $_POST["email"] . '<br>Номер телефона: ' . $_POST["phone"] . '<br>Услуга: ' . $_POST["product"];

            $headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
            $headers .= "From: ligghtstart@gmail.com\r\n"; 
            $headers .= "Reply-To:" . $to . "\r\n"; 

            mail($to, $subject, $message, $headers); 
        }
        function sendToUser() {
            $to = $_POST["email"];

            $subject = "Начало работы с Light Start"; 

            $message = ' <p>Для продолжения оформления подписки следуйте указаниям</p> </br> <b>1-ая строчка </b> </br><i>2-ая строчка </i> </br>';

            $headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
            $headers .= "From: ligghtstart@gmail.com\r\n"; 
            $headers .= "Reply-To:" . $to . "\r\n"; 

            mail($to, $subject, $message, $headers); 
        }

        sendToLightStart();
        sendToUser();

        $result = array(
            'status' => "done"
        ); 

        echo json_encode($result);
    }
?>