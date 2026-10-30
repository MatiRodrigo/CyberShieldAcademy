// Add active class toggle for article titles on hover
document.querySelectorAll('article').forEach(article => {
    article.addEventListener('mouseenter', () => {
        const title = article.querySelector('h2, h3');
        if (title) title.classList.add('text-accent');
    });
    article.addEventListener('mouseleave', () => {
        const title = article.querySelector('h2, h3');
        if (title) title.classList.remove('text-accent');
    });
});