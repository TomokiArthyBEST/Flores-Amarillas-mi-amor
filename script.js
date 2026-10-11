document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const hiddenContent = document.getElementById('hiddenContent');
    const heartsContainer = document.getElementById('hearts-container');

    // Función para crear corazones y destellos flotantes
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        const emojis = ['💛', '💖', '🌻', '✨', '❤️', '🥰'];
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 2.5 + 's';
        heart.style.fontSize = Math.random() * 12 + 16 + 'px';
        
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Acción al presionar el botón
    loveButton.addEventListener('click', () => {
        // Muestra las fotos, las flores y el mensaje final con animación
        hiddenContent.classList.add('show');
        loveButton.style.display = 'none'; // Oculta el botón para limpiar la vista

        // Dispara una ráfaga grande de corazones y flores de golpe
        for (let i = 0; i < 25; i++) {
            setTimeout(createHeart, i * 100);
        }

        // Mantiene una lluvia suave constante en segundo plano
        setInterval(createHeart, 600);
    });
});