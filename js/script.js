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
    { img: "./css/Images/Products/2.png", name: "Product 2" },
    { img: "./css/Images/Products/3.png", name: "Product 3" },
    { img: "./css/Images/Products/4.jpg", name: "Product 4" },
    { img: "./css/Images/Products/5.jpg", name: "Product 5" },
    { img: "./css/Images/Products/6.jpg", name: "Product 6" },
    { img: "./css/Images/Products/7.jpg", name: "Product 7" },
    { img: "./css/Images/Products/9.jpg", name: "Product 9" },
    { img: "./css/Images/Products/10.png", name: "Product 10" },
    { img: "./css/Images/Products/11.jpg", name: "Product 11" },
    { img: "./css/Images/Products/12.jpg", name: "Product 12" },
    { img: "./css/Images/Products/13.png", name: "Product 13" },
    { img: "./css/Images/Products/14.png", name: "Product 14" },
    { img: "./css/Images/Products/15.jpg", name: "Product 15" },
    { img: "./css/Images/Products/16.jpg", name: "Product 16" },
    { img: "./css/Images/Products/17.jpg", name: "Product 17" },
    { img: "./css/Images/Products/18.jpg", name: "Product 18" },
    { img: "./css/Images/Products/19.jpg", name: "Product 19" },
    { img: "./css/Images/Products/20.jpg", name: "Product 20" },
    { img: "./css/Images/Products/21.jpg", name: "Product 21" },
    { img: "./css/Images/Products/22.jpg", name: "Product 22" },
    { img: "./css/Images/Products/23.jpg", name: "Product 23" },
    { img: "./css/Images/Products/24.jpg", name: "Product 24" },
    { img: "./css/Images/Products/25.jpg", name: "Product 25" },
    { img: "./css/Images/Products/26.jpg", name: "Product 26" },
    { img: "./css/Images/Products/27.jpg", name: "Product 27" },
    { img: "./css/Images/Products/28.jpg", name: "Product 28" },
    { img: "./css/Images/Products/29.jpg", name: "Product 29" },
    { img: "./css/Images/Products/30.jpg", name: "Product 30" },
    { img: "./css/Images/Products/31.jpg", name: "Product 31" },
    { img: "./css/Images/Products/32.jpg", name: "Product 32" },
    { img: "./css/Images/Products/33.jpg", name: "Product 33" },
    { img: "./css/Images/Products/34.jpg", name: "Product 34" },
    { img: "./css/Images/Products/35.jpg", name: "Product 35" },
    { img: "./css/Images/Products/36.jpg", name: "Product 36" },
    
    
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
                <h3>${product.name}</h3>
            </div>
        `;
        row.appendChild(col);
    });

    carouselItem.appendChild(row);
    carousselInner.appendChild(carouselItem);
}