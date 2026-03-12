<?php

$conexion = new mysqli("localhost","root","","verdevida");

$correo = $_POST['correo'];
$password = $_POST['password'];

$sql = "INSERT INTO usuarios (correo,password) VALUES ('$correo','$password')";

if($conexion->query($sql)){
    echo "Usuario registrado correctamente";
}else{
    echo "Error al registrar";
}

?>