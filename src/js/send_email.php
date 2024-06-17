<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Переменные из формы
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['text'];

    // Проверка на согласие с политикой конфиденциальности
    if (!isset($_POST['agree'])) {
        echo "Please agree to the Privacy Policy.";
        exit;
    }

    // Адрес электронной почты, на который отправлять сообщения
    $to = "vada1981@gmail.com"; 

    // Заголовки для письма
    $subject = "Message from your website";
    $headers = "From: $name <$email>";

    // Отправка письма
    $mailSent = mail($to, $subject, $message, $headers);

    // Проверка успешности отправки
    if ($mailSent) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
?>
