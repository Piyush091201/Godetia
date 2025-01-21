$(document).ready(function () {
    $('#menu-toggle-btn').on('click', function () {
        $('.navbarr-menu').toggleClass('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: 'Personal First Aid Kit', rating: 4.5, imageUrl: '/css/Images/Products/1.png' },
        { id: 2, name: 'Latex Gloves', rating: 4.0, imageUrl: '/css/Images/Products/13.png' },
        { id: 3, name: '250 in 1 Survival First Aid Kit', rating: 3.5, imageUrl: '/css/Images/Products/28.jpg' },
        { id: 4, name: 'Workplace/Industrial First Aid Kits', rating: 4.2, imageUrl: '/css/Images/Products/25.jpg' },
        { id: 5, name: '', rating: 3.9, imageUrl: './css/Images/Products/18.jpg' },
        { id: 6, name: '', rating: 4.1, imageUrl: './css/Images/Products/35.jpg' },
        { id: 7, name: '', rating: 5.0, imageUrl: './css/Images/Products/3.png' },
        { id: 8, name: '', rating: 2.5, imageUrl: './css/Images/Products/29.jpg' },
        { id: 9, name: '', rating: 4.3, imageUrl: './css/Images/Products/11.jpg' },
        { id: 10, name: '', rating: 3.8, imageUrl: './css/Images/Products/2.png' },
        { id: 11, name: '', rating: 4.0, imageUrl: './css/Images/Products/6.jpg' },
        { id: 12, name: '', rating: 4.1, imageUrl: './css/Images/Products/9.jpg' },
        { id: 13, name: '', rating: 3.5, imageUrl: './css/Images/Products/10.png' },
        { id: 14, name: '', rating: 4.2, imageUrl: './css/Images/Products/14.png' },
        { id: 15, name: '', rating: 3.7, imageUrl: './css/Images/Products/15.jpg' },
        { id: 16, name: '', rating: 4.4, imageUrl: './css/Images/Products/16.jpg' },
        { id: 17, name: '', rating: 4.5, imageUrl: './css/Images/Products/18.jpg' },
        { id: 18, name: '', rating: 3.6, imageUrl: './css/Images/Products/19.jpg' },
        { id: 19, name: '', rating: 4.3, imageUrl: './css/Images/Products/20.jpg' },
        { id: 20, name: '', rating: 3.8, imageUrl: './css/Images/Products/21.jpg' },
        { id: 21, name: '', rating: 4.2, imageUrl: './css/Images/Products/22.jpg' },
        { id: 22, name: '', rating: 3.5, imageUrl: './css/Images/Products/25.jpg' },
        { id: 23, name: '', rating: 4.1, imageUrl: './css/Images/Products/26.jpg' },
        { id: 24, name: '', rating: 5.0, imageUrl: './css/Images/Products/29.jpg' },
        { id: 25, name: '', rating: 4.4, imageUrl: './css/Images/Products/34.jpg' },
        { id: 26, name: '', rating: 4.5, imageUrl: './css/Images/Products/35.jpg' },
        { id: 27, name: '', rating: 4.0, imageUrl: './css/Images/Products/SCR-20250115-taet.jpeg' },
     
    ];

    const pageSize = 20; // Show 20 products per page

    // Function to render products for a specific page
    function renderProducts(pageNumber) {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const productsToDisplay = products.slice(startIndex, endIndex);

        // Clear previous products
        const productContainer = document.getElementById('product-container');
        if (!productContainer) return; // Make sure the container exists

        productContainer.innerHTML = '';

        // Display the products for the current page
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
               
            `;
            
            // Add click event to each product card
            productCard.addEventListener('click', function () {
                // Redirect to single product page and pass the product ID in the URL
                window.location.href = `#`; // You can modify this URL as needed
            });

            productContainer.appendChild(productCard);
        });

        // Update pagination controls
        renderPaginationControls(pageNumber);
    }

    // Function to render pagination controls
    function renderPaginationControls(currentPage) {
        const totalPages = Math.ceil(products.length / pageSize);
        const paginationControls = document.getElementById('pagination-controls');
        if (!paginationControls) return; // Make sure pagination controls element exists

        paginationControls.innerHTML = '';

        // Previous button
        const prevButton = document.createElement('button');
        prevButton.classList.add('pagination-btn');
        prevButton.innerText = 'Previous';
        prevButton.disabled = currentPage === 1;
        prevButton.onclick = () => renderProducts(currentPage - 1);
        paginationControls.appendChild(prevButton);

        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.classList.add('pagination-btn');
            pageButton.innerText = i;
            pageButton.classList.toggle('active', i === currentPage);
            pageButton.onclick = () => renderProducts(i);
            paginationControls.appendChild(pageButton);
        }

        // Next button
        const nextButton = document.createElement('button');
        nextButton.classList.add('pagination-btn');
        nextButton.innerText = 'Next';
        nextButton.disabled = currentPage === totalPages;
        nextButton.onclick = () => renderProducts(currentPage + 1);
        paginationControls.appendChild(nextButton);
    }

    // Initialize the first page
    renderProducts(1);
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
// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//     updateCarousel(currentIndex);
// });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % carouselItems.length;
//     updateCarousel(currentIndex);
// });

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
