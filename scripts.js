// Carrusel
let images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

const carouselImage = document.getElementById('carousel-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateImage() {
    carouselImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Validación del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    let valid = true;
    let errorMessage = '';

    if (name.length > 50) {
        valid = false;
        errorMessage += 'El nombre no puede exceder 50 caracteres. ';
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        valid = false;
        errorMessage += 'El correo electrónico no es válido. ';
    }

    if (valid) {
        let responseDiv = document.getElementById('form-response');
        responseDiv.innerHTML = '';
        let responseMessage = document.createElement('p');
        responseMessage.textContent = `Nombre: ${name}, Email: ${email}, Edad: ${age}`;
        responseDiv.appendChild(responseMessage);
    } else {
        let responseDiv = document.getElementById('form-response');
        responseDiv.innerHTML = '';
        let errorMessageElement = document.createElement('p');
        errorMessageElement.textContent = errorMessage;
        responseDiv.appendChild(errorMessageElement);
    }
});
