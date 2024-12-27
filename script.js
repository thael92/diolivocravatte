let cart = [];
let cartCount = 0;

// Atualiza a contagem do carrinho na interface
function updateCartCount() {
  document.getElementById('cart-count').innerText = cartCount;
}

// Adiciona produtos ao carrinho
function addToCart(productName, productImage) {
  cart.push({ name: productName, image: productImage });
  cartCount++;
  updateCartCount();
  alert(`${productName} foi adicionado ao carrinho!`);
}

// Adiciona produtos ao carrinho
function addToCart(productName) {
  cart.push(productName);
  cartCount++;
  updateCartCount();
  alert(`${productName} foi adicionado ao carrinho!`);
}

// Controle do carrossel
const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

function updateCarousel() {
  const width = document.querySelector('.product-card').offsetWidth + 20; // Card width + margin
  carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.product-card');
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Redireciona para o WhatsApp ao clicar no carrinho
document.getElementById('cart-icon').addEventListener('click', () => {
  if (cart.length > 0) {
    const cartMessage = encodeURIComponent(`Olá, gostaria de finalizar a compra dos seguintes produtos: ${cart.join(', ')}`);
    window.open(`https://wa.me/5521995508233?text=${cartMessage}`, '_blank');
  } else {
    alert('Seu carrinho está vazio!');
  }
});

// Menu Toggle para dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
