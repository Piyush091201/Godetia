const menuToggleBtn = document.getElementById("menu-toggle-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("mobile-menu-overlay");
const menuItems = document.querySelectorAll(".menu-item span");

menuToggleBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        const submenu = item.nextElementSibling;
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});

const carouselInner = document.querySelector('.caroussel-inner');
const carouselItems = document.querySelectorAll('.caroussel-item');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.caroussel-control.prev');
const nextButton = document.querySelector('.caroussel-control.next');

let currentIndex = 0;

// Function to update carousel
function updateCarousel(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Event listeners for controls
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel(currentIndex);
});

// Automatic carousel rotation
setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel(currentIndex);
}, 5000);
