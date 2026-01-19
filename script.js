
document.addEventListener('DOMContentLoaded', () => {
    // Pobranie elementów menu
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Funkcja otwierania/zamykania menu na telefonie
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Zamykanie menu po kliknięciu w link (żeby nie zasłaniało strony)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
});
