// const menuToggleBtn = document.getElementById("menu-toggle-btn");
// const closeMenuBtn = document.getElementById("close-menu-btn");
// const mobileMenu = document.getElementById("mobile-menu");
// const overlay = document.getElementById("mobile-menu-overlay");
// const menuItems = document.querySelectorAll(".menu-item span");

// menuToggleBtn.addEventListener("click", () => {
//     mobileMenu.classList.add("active");
//     overlay.classList.add("active");
// });

// closeMenuBtn.addEventListener("click", () => {
//     mobileMenu.classList.remove("active");
//     overlay.classList.remove("active");
// });

// overlay.addEventListener("click", () => {
//     mobileMenu.classList.remove("active");
//     overlay.classList.remove("active");
// });

// menuItems.forEach((item) => {
//     item.addEventListener("click", () => {
//         const submenu = item.nextElementSibling;
//         if (submenu.style.display === "block") {
//             submenu.style.display = "none";
//         } else {
//             submenu.style.display = "block";
//         }
//     });
// });
AOS.init({
    duration: 3000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing for animations
    once: true // Animation triggers only once
  });

$(document).ready(function () {
    $('#menu-toggle-btn').on('click', function () {
        $('.navbarr-menu').toggleClass('active');
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


// Automatic carousel rotation
setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel(currentIndex);
}, 3000);


document.addEventListener('DOMContentLoaded', function () {
    // Create an intersection observer to detect when the points are in view
    const points = document.querySelectorAll('.point');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to each point when it comes into view
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the point is visible
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is in view
    });

    points.forEach(point => {
        observer.observe(point); // Start observing each point
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const certificates = document.querySelectorAll(".certificate");
    let currentIndex = 0;

    function updateCarousel() {
        certificates.forEach((certificate, index) => {
            certificate.classList.remove("active");
            if (index === currentIndex) {
                certificate.classList.add("active");
            }
        });
    }

    // Automatically rotate certificates every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % certificates.length;
        updateCarousel();
    }, 3000);

    // Add click functionality for manual navigation
    certificates.forEach((certificate, index) => {
        certificate.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });
});

const products = [
    { img: "./css/Images/Products/1.png", name: "Product 1" },
    { img: "./css/Images/Products/13.png", name: "Product 2" },
    { img: "./css/Images/Products/26.jpg", name: "Product 3" },
    { img: "./css/Images/Products/25.jpg", name: "Product 4" },
    { img: "./css/Images/Products/18.jpg", name: "Product 5" },
    { img: "./css/Images/Products/35.jpg", name: "Product 6" },
    { img: "./css/Images/Products/3.png", name: "Product 7" },
    { img: "./css/Images/Products/29.jpg", name: "Product 9" },
    { img: "./css/Images/Products/11.jpg", name: "Product 10" },
    
    
    
];

const carousselInner = document.getElementById("carouselInner");
const chunkSize = 3; // 3 products per row

for (let i = 0; i < products.length; i += chunkSize) {
    const chunk = products.slice(i, i + chunkSize);
    const isActive = i === 0 ? "active" : "";
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${isActive}`;

    const row = document.createElement("div");
    row.className = "row";

    chunk.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                
            </div>
        `;
        row.appendChild(col);
    });

    carouselItem.appendChild(row);
    carousselInner.appendChild(carouselItem);
}

const productCarousel = new bootstrap.Carousel('#productCarousel', {
    interval: 2000 // Speed in milliseconds (2 seconds)
});