<?php
// Sustituye con tu llave SECRETA (la que no empieza con 6L... pública)
$secretKey = "6Le1k4csAAAAAAuatKu8ukw0AaHt_GkXvJM3sv4D";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $captchaResponse = $_POST['g-recaptcha-response'];

    // Petición a los servidores de Google para verificar el token
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $secretKey,
        'response' => $captchaResponse
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context  = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $result = json_decode($response);

    if ($result->success) {
        // AQUÍ EL CAPTCHA ES VÁLIDO
        echo "<h1>✅ ¡Formulario enviado con éxito, Jorge!</h1>";
        echo "No eres un robot.";
    } else {
        // AQUÍ EL CAPTCHA FALLÓ
        echo "<h1>❌ Error en el CAPTCHA</h1>";
        echo "Por favor, inténtalo de nuevo.";
    }
}
?>