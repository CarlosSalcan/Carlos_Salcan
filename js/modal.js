// Obtener los elementos del DOM
const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');

// Abrir la ventana emergente
openPopupButton.addEventListener('click', () => {
    popup.style.display = 'flex'; // Cambia a flex para centrar el contenido
});

// Cerrar la ventana emergente
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Cerrar la ventana emergente al hacer clic fuera de ella
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
