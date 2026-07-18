// Preloader //
window.addEventListener("load", function() {
    const preloader = document.getElementById("tela-de-carregamento");
    preloader.classList.add("preloader-hidden");
});

// slide feedback //

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.slide-feedback');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const scrollAmount = 948;

    if (container && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: 320, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }
});