<?php

$conexion = new mysqli("localhost","root","","verdevida");

if($conexion->connect_error){
    die("Error de conexión");
}

$correo = $_POST['correo'];
$password = $_POST['password'];

$sql = "SELECT * FROM usuarios WHERE correo='$correo' AND password='$password'";

$resultado = $conexion->query($sql);

if($resultado->num_rows > 0){
    echo "Login correcto";
}else{
    echo "Correo o contraseña incorrectos";
}

?>