// Esperamos a que el DOM esté cargado para evitar errores de elementos inexistentes
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todas las tarjetas
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const img = card.querySelector('.product-img');
        
        // Verificamos que la imagen exista y tenga el atributo de hover
        if (img && img.hasAttribute('data-hover')) {
            const originalSrc = img.src;
            const hoverSrc = img.getAttribute('data-hover');

            // Pre-carga opcional: Ayuda a que no haya parpadeo la primera vez
            const tempImg = new Image();
            tempImg.src = hoverSrc;

            // Evento: Entra el mouse
            card.addEventListener('mouseenter', () => {
                img.style.opacity = '0'; // Inicio transición
                setTimeout(() => {
                    img.src = hoverSrc;
                    img.style.opacity = '1'; // Fin transición
                }, 150); // Tiempo medio de la transición CSS
            });

            // Evento: Sale el mouse
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