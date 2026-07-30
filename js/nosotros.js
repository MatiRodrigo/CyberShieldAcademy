// nosotros.js
// Feedback visual para componentes interactivos

document.querySelectorAll('.tech-border-glow').forEach(el => {
    el.addEventListener('mouseenter', () => {
        const icon = el.querySelector('.material-symbols-outlined');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });
    el.addEventListener('mouseleave', () => {
        const icon = el.querySelector('.material-symbols-outlined');
        if (icon) icon.style.transform = 'scale(1) rotate(0deg)';
    });
});
