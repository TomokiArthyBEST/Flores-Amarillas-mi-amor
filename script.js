document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const secretMessage = document.getElementById('secretMessage');

    loveButton.addEventListener('click', () => {
        if (secretMessage.style.display === 'block') {
            secretMessage.style.display = 'none';
            loveButton.textContent = 'Haz clic aquí ✨';
        } else {
            secretMessage.style.display = 'block';
            loveButton.textContent = 'Ocultar mensaje 💛';
        }
    });
});