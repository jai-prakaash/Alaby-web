const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

const items = [
    { imageUrl: "Alabay Assets/Alabay Assets/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png", caption: 'Image1' },
    { imageUrl: 'Alabay Assets/Frame 17.png', caption: 'Image2' },
    { imageUrl: 'Alabay Assets/Alabay Assets/DALL·E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png', caption: 'Image3' },
    { imageUrl: 'Alabay Assets/Alabay Assets/DALL·E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png', caption: 'Image4' },
    { imageUrl: 'Alabay Assets/Alabay Assets/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png', caption: 'Image5' },
    { imageUrl: 'Alabay Assets/Alabay Assets/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png', caption: 'Image6' },
    { imageUrl: 'Alabay Assets/Alabay Assets/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png', caption: 'Image7' },
];

let currentIndex = 0;

function createCarouselItem(item) {
    const div = document.createElement('div');
    div.className = 'carousel-item';
    div.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.caption}">
    `;
    return div;
}

function updateCarousel() {
    carousel.innerHTML = '';
    for (let i = -1; i <= 3; i++) {
        const index = (currentIndex + i + items.length) % items.length;
        carousel.appendChild(createCarouselItem(items[index]));
    }
    carousel.style.transform = 'translateX(calc(-33.333% - 10px))';
}

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    const movement = direction > 0 ? 'calc(-66.666% - 20px)' : '0px';
    
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${movement})`;
    
    setTimeout(() => {
        carousel.style.transition = 'none';
        updateCarousel();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            });
        });
    }, 500);
}

prevButton.addEventListener('click', () => moveCarousel(-1));
nextButton.addEventListener('click', () => moveCarousel(1));

updateCarousel();










const backgrounds = [
'url("Alabay Assets/Alabay Assets/Alabay Merch/black hoodie bck.png")',
'url("Alabay Assets/Alabay Assets/Alabay Merch/blue cap bck.png")',
'url("Alabay Assets/Alabay Assets/Alabay Merch/pink tee bck.png")',
'url("Alabay Assets/Alabay Assets/Alabay Merch/yellow tee bck.png")'
];

const products = [
'Alabay Assets/Alabay Assets/Alabay Merch/black hoodie.png',
'Alabay Assets/Alabay Assets/Alabay Merch/cap mockup.png',
'Alabay Assets/Alabay Assets/Alabay Merch/pink tshirt.png',
'Alabay Assets/Alabay Assets/Alabay Merch/yellow tshirt.png',
];

let activeIndex = 0;  // Renamed from currentIndex to activeIndex

// Select DOM elements
const backgroundContainer0 = document.querySelector('.background-container0');
const productContainer0 = document.querySelector('.product-container0');
const prevBtn0 = document.querySelector('.prev-btn0');
const nextBtn0 = document.querySelector('.next-btn0');

// Create elements for backgrounds and products
function createElements() {
backgrounds.forEach((bg, index) => {
const bgDiv = document.createElement('div');
bgDiv.className = 'background0';
bgDiv.style.backgroundImage = bg;
bgDiv.style.opacity = index === 0 ? 1 : 0;
bgDiv.style.transition = 'opacity 0.5s ease-in-out';
backgroundContainer0.appendChild(bgDiv);
});

products.forEach(product => {
const img = document.createElement('img');
img.className = 'product0';
img.src = product;
productContainer0.appendChild(img);
});
}

// Update the display of the carousel
function updateDisplay() {
const bgElements = backgroundContainer0.children;
const productElements = productContainer0.children;

// Update background visibility
Array.from(bgElements).forEach((bgElement, index) => {
bgElement.style.opacity = index === activeIndex ? 1 : 0;
});

// Update product positioning
productContainer0.style.transform = `translateX(-${activeIndex * 100}%)`;
}

// Change the current slide
function changeSlide(direction) {
activeIndex = (activeIndex + direction + backgrounds.length) % backgrounds.length;
updateDisplay();
}

// Event listeners for buttons
nextBtn0.addEventListener('click', () => changeSlide(1));
prevBtn0.addEventListener('click', () => changeSlide(-1));

// Initialize the carousel
createElements();
updateDisplay();
