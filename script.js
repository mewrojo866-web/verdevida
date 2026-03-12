// Inicializar Iconos Lucide
lucide.createIcons();

// Cambio de estilo del Nav al hacer Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('#main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Animación de aparición (Scroll Reveal)
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);

// Ejecutar una vez al cargar
scrollReveal();

/* =========================
   CATALOGO PLANTAS
========================= */

window.mostrarAromaticas = function () {
    ocultarTipos();
    document.getElementById("aromaticas").classList.remove("oculto");
};

window.mostrarOrnamentales = function () {
    ocultarTipos();
    document.getElementById("ornamentales").classList.remove("oculto");
};

window.mostrarHortalizas = function () {
    ocultarTipos();
    document.getElementById("hortalizas").classList.remove("oculto");
};

window.mostrarFrutales = function () {
    ocultarTipos();
    document.getElementById("frutales").classList.remove("oculto");
};

function ocultarTipos() {
    const tipos = ["aromaticas","ornamentales","hortalizas","frutales"];
    tipos.forEach(id => {
        const seccion = document.getElementById(id);
        if (seccion) {
            seccion.classList.add("seccion-catalogo");
        }
    });
}

let indice = 0;
const slides = document.querySelectorAll('.item');

function cambiarSlide(n) {
    slides[indice].classList.remove('active');
    indice = (indice + n + slides.length) % slides.length;
    slides[indice].classList.add('active');
}

// Opcional: Que cambie solo cada 5 segundos
setInterval(() => cambiarSlide(1), 5000);

window.onload = function() {
            const btnAbrir = document.getElementById('btnAbrir');
            const btnCerrar = document.getElementById('btnCerrar');
            const modal = document.getElementById('modalTikTok');

            // Abrir modal
            btnAbrir.onclick = function() {
                modal.style.display = 'flex';
            };

            // Cerrar con la X
            btnCerrar.onclick = function() {
                modal.style.display = 'none';
            };

            // Cerrar si hacen clic en lo oscuro (fuera de la caja)
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            };
        };

        
