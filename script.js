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
            seccion.classList.add("oculto");
        }
    });
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

        let currentCaptcha;

function generateCaptcha() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  currentCaptcha = result;
  document.getElementById("captcha-box").innerText = result;
}

function validateCaptcha() {
  const userInput = document.getElementById("user-input").value;
  const msg = document.getElementById("message");
  
  if (userInput === currentCaptcha) {
    msg.innerText = "✅ ¡Correcto! No eres un robot.";
    msg.style.color = "green";
  } else {
    msg.innerText = "❌ Código incorrecto. Intenta de nuevo.";
    msg.style.color = "red";
    generateCaptcha(); // Reinicia el captcha si falla
  }
}

// Generar uno al cargar la página
window.onload = generateCaptcha;

const botonFlotante = document.querySelector('.icon-btn'); // Ajusta a la clase de tu botón verde
const carrito = document.getElementById('carrito-contenedor');
const btnCerrar = document.getElementById('cerrar-carrito');

// Abrir / Cerrar al click
botonFlotante.addEventListener('click', () => {
    carrito.classList.toggle('carrito-oculto');
});

btnCerrar.addEventListener('click', () => {
    carrito.classList.add('carrito-oculto');
});

const overlay = document.getElementById('popupOverlay');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

// Abrir pop-up
openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

// Cerrar pop-up al hacer clic en la X
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Cerrar pop-up al hacer clic fuera de la caja blanca
window.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});

let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    index = (index + step + totalSlides) % totalSlides;
    
    const offset = -index * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// Movimiento automático
setInterval(() => {
    moveSlide(1);
}, 3000);