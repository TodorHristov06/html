// Получаване на всички линкове в навигацията
const navLinks = document.querySelectorAll('#sidebar nav ul li a');

// Добавяне на слушател на събитие за клик на всеки линк
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Премахване на активния клас от всички линкове
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Добавяне на активния клас към текущия линк
        this.classList.add('active');
    });
});

// Проверка на URL при зареждане на страницата
window.addEventListener('load', function() {
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
