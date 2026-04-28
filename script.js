document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const img = card.querySelector('.product-img');
        if (img && img.hasAttribute('data-hover')) {
            const originalSrc = img.src;
            const hoverSrc = img.getAttribute('data-hover');
            const tempImg = new Image();
            tempImg.src = hoverSrc;
            card.addEventListener('mouseenter', () => {
                img.style.opacity = '0'; 
                setTimeout(() => {
                    img.src = hoverSrc;
                    img.style.opacity = '1';
                }, 150); 
            });
            card.addEventListener('mouseleave', () => {
                img.style.opacity = '0';
                setTimeout(() => {
                    img.src = originalSrc;
                    img.style.opacity = '1';
                }, 150);
            });
        }
    });
});

/* ==========================================================================
   PARA LA PÁGINA DE DETALLES (shoe-dark.html)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Llenar datos básicos si estamos en shoe-dark.html
    if (document.getElementById('detalle-titulo')) {
        document.getElementById('detalle-titulo').innerText = "Cloudflow 5 AD Obsidian";
        document.getElementById('detalle-precio').innerText = "2,400.00 MXN";
        document.getElementById('detalle-specs').innerHTML = "<li>Tecnología CloudTec</li><li>Diseño liviano</li><li>Amortiguación reactiva</li>";
    }
});


// 1. Definimos el array de imágenes de la bota
const imagenesBota = [
    "Stock/bota cafe 1.png",
    "Stock/bota cafe 2.png", 
    "Stock/bota cafe 3.png"
];

let indiceActual = 0;
const imagenPrincipal = document.getElementById('detalle-imagen-principal');

// 2. Función para actualizar la imagen con una pequeña transición
function actualizarImagen(indice) {
    imagenPrincipal.style.opacity = 0; // Efecto de desvanecimiento
    setTimeout(() => {
        imagenPrincipal.src = imagenesBota[indice];
        imagenPrincipal.style.opacity = 1;
    }, 200);
}

// 3. Configurar flecha ARRIBA (Anterior)
document.querySelector('.thumb-arrow.up').addEventListener('click', () => {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = imagenesBota.length - 1; // Ciclar al final
    }
    actualizarImagen(indiceActual);
});

// 4. Configurar flecha ABAJO (Siguiente)
document.querySelector('.thumb-arrow.down').addEventListener('click', () => {
    indiceActual++;
    if (indiceActual >= imagenesBota.length) {
        indiceActual = 0; // Ciclar al inicio
    }
    actualizarImagen(indiceActual);
});

// 5. Opcional: Llenar la lista de miniaturas automáticamente
const thumbList = document.getElementById('thumb-list');
imagenesBota.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('img-thumbnail', 'mb-2');
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        indiceActual = index;
        actualizarImagen(indiceActual);
    });
    thumbList.appendChild(img);
});

document.addEventListener('DOMContentLoaded', () => {
    // Si NO existe el ID de la página de detalles, detenemos el script
    if (!document.getElementById('page-details')) {
        return; 
    }

    console.log("Ejecutando lógica de shoe-dark...");
    
    // Aquí va todo tu código de imagenesBota, flechas y llenar datos
    // ...
});