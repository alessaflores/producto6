const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');
const btnClean = document.querySelector('.btn-clean');
const btnAddToCart = document.querySelector('.btn-add-to-cart');
const selectProduct = document.querySelector('#colour');
const selectSize = document.querySelector('#size');

let valueByDefault = parseInt(inputQuantity.value);

// Funciones Click
btnIncrement.addEventListener('click', () => {
    valueByDefault += 1;
    inputQuantity.value = valueByDefault;
});
btnDecrement.addEventListener('click', () => {
    if (valueByDefault === 1) {
        return;
    }
    valueByDefault -= 1;
    inputQuantity.value = valueByDefault;
});

// Limpiar formulario
btnClean.addEventListener('click', () => {
    selectProduct.value = "";
    selectSize.value = "";
    inputQuantity.value = 1;
    valueByDefault = 1;
});

// Comprar Ahora
btnAddToCart.addEventListener('click', () => {
    alert('Producto añadido al carrito');
});

// Toggle
// Constantes toggle titles
const toggleDescription = document.querySelector('.title-description');
const toggleAdditionalInformation = document.querySelector('.title-additional-information');
const toggleReviews = document.querySelector('.title-reviews');

// Constantes Contenido Texto
const contentDescription = document.querySelector('.text-description');
const contentAdditionalInformation = document.querySelector('.text-additional-information');
const contentReviews = document.querySelector('.text-reviews');

// Funciones toggle
toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
});
toggleAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
});
toggleReviews.addEventListener('click', () => {
    contentReviews.classList.toggle('hidden');
});


