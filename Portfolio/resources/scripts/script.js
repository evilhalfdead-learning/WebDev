document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('#projects .sites');

    projectCards.forEach(card => {
        card.style.transition = 'transform 0.2s ease';

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.5)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});