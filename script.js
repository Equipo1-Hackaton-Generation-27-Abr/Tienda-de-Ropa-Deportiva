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
