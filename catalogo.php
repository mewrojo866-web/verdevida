<?php 
include 'conexion.php'; // Conectamos a 'verdevida'
?>

<div class="container">

    <?php
    // Definimos las categorías que tienes en tu HTML para recorrerlas
    $secciones = [
        1 => ['titulo' => '🌿 Plantas Aromáticas', 'id' => 'aromaticas'],
        2 => ['titulo' => '🌸 Plantas Ornamentales', 'id' => 'ornamentales'],
        3 => ['titulo' => '🥕 Hortalizas', 'id' => 'hortalizas'],
        4 => ['titulo' => '🍎 Plantas Frutales', 'id' => 'frutales']
    ];

    foreach ($secciones as $id_cat => $info) {
    ?>
        <section id="<?php echo $info['id']; ?>" class="seccion-catalogo">
            <h2 class="titulo-categoria"><?php echo $info['titulo']; ?></h2>
            <div class="products-grid">
                
                <?php
                // Consultamos los productos de ESTA categoría específica
                $sql = "SELECT * FROM productos WHERE id_categoria = $id_cat";
                $resultado = mysqli_query($conexion, $sql);

                if (mysqli_num_rows($resultado) > 0) {
                    while ($row = mysqli_fetch_assoc($resultado)) {
                ?>
                    <div class="planta">
                        <img src="<?php echo $row['imagen_ruta']; ?>" alt="<?php echo $row['nombre']; ?>">
                        <h3><?php echo $row['nombre']; ?></h3>
                        <p><?php echo $row['descripcion']; ?></p>
                        <p>Medidas: <?php echo $row['medidas']; ?></p>
                        <p>Precio: $<?php echo number_format($row['precio'], 2); ?></p>
                        <button onclick="agregarCarrito('<?php echo $row['nombre']; ?>', <?php echo $row['precio']; ?>)">
                            Agregar
                        </button>
                    </div>
                <?php 
                    }
                } else {
                    echo "<p>Próximamente más variedades de esta categoría...</p>";
                }
                ?>

            </div>
        </section>
    <?php } ?>

</div>