<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$conexion = new mysqli("localhost", "root", "", "verdevida");

// Capturamos todos los campos del formulario
$nombre   = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo   = $_POST['correo'];
$password = $_POST['password']; 
$codigo   = rand(100000, 999999); // Generamos el código aquí

// 1. Creamos la instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuración del servidor
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'mewrojo866@@gmail.com'; // Tu correo real
    $mail->Password   = 'pkjbfmlgqmbpycqd'; // Tu contraseña de aplicación (sin espacios)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Destinatarios
    $mail->setFrom('mewrojo866@gmail.com', 'Verde Vida');
    $mail->addAddress($correo); 

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'Codigo de Verificacion - Verde Vida';
    $mail->Body    = "Hola <b>$nombre</b>, tu código de verificación es: <h1>$codigo</h1>";

    // 2. Intentamos enviar el correo
    $mail->send();

    // 3. Si el correo se envió, guardamos en la base de datos
    // Usamos las nuevas columnas: nombre, telefono y codigo_verificacion
    $sql = "INSERT INTO usuarios (nombre, telefono, correo, password, codigo_verificacion) 
            VALUES ('$nombre', '$telefono', '$correo', '$password', '$codigo')";

    if($conexion->query($sql)){
        echo "Usuario registrado. ¡Revisa tu correo para ver el código!";
    } else {
        echo "Error en la base de datos: " . $conexion->error;
    }

} catch (Exception $e) {
    echo "El mensaje no pudo enviarse. Error de Mailer: {$mail->ErrorInfo}";
}

$conexion->close();
?>