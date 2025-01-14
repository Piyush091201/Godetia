document.addEventListener('DOMContentLoaded', function () {

    const products = [
        { id: 1, name: 'Product 1', rating: 4.5, imageUrl: '/css/Images/4ɫEVA-.png' },
        { id: 2, name: 'Product 2', rating: 4.0, imageUrl: 'https://via.placeholder.com/200x200?text=Product2' },
        { id: 3, name: 'Product 3', rating: 3.5, imageUrl: 'https://via.placeholder.com/200x200?text=Product3' },
        { id: 4, name: 'Product 4', rating: 4.2, imageUrl: 'https://via.placeholder.com/200x200?text=Product4' },
        { id: 5, name: 'Product 5', rating: 3.9, imageUrl: 'https://via.placeholder.com/200x200?text=Product5' },
        { id: 6, name: 'Product 6', rating: 4.1, imageUrl: 'https://via.placeholder.com/200x200?text=Product6' },
        { id: 7, name: 'Product 7', rating: 5.0, imageUrl: 'https://via.placeholder.com/200x200?text=Product7' },
        { id: 8, name: 'Product 8', rating: 2.5, imageUrl: 'https://via.placeholder.com/200x200?text=Product8' },
        { id: 9, name: 'Product 9', rating: 4.3, imageUrl: 'https://via.placeholder.com/200x200?text=Product9' },
        { id: 10, name: 'Product 10', rating: 3.8, imageUrl: 'https://via.placeholder.com/200x200?text=Product10' },
        { id: 11, name: 'Product 11', rating: 4.0, imageUrl: 'https://via.placeholder.com/200x200?text=Product11' },
        { id: 12, name: 'Product 12', rating: 4.1, imageUrl: 'https://via.placeholder.com/200x200?text=Product12' },
        { id: 13, name: 'Product 13', rating: 3.5, imageUrl: 'https://via.placeholder.com/200x200?text=Product13' },
        { id: 14, name: 'Product 14', rating: 4.2, imageUrl: 'https://via.placeholder.com/200x200?text=Product14' },
        { id: 15, name: 'Product 15', rating: 3.7, imageUrl: 'https://via.placeholder.com/200x200?text=Product15' },
        { id: 16, name: 'Product 16', rating: 4.4, imageUrl: 'https://via.placeholder.com/200x200?text=Product16' },
        { id: 17, name: 'Product 17', rating: 4.5, imageUrl: 'https://via.placeholder.com/200x200?text=Product17' },
        { id: 18, name: 'Product 18', rating: 3.6, imageUrl: 'https://via.placeholder.com/200x200?text=Product18' },
        { id: 19, name: 'Product 19', rating: 4.3, imageUrl: 'https://via.placeholder.com/200x200?text=Product19' },
        { id: 20, name: 'Product 20', rating: 3.8, imageUrl: 'https://via.placeholder.com/200x200?text=Product20' },
        { id: 21, name: 'Product 21', rating: 4.2, imageUrl: 'https://via.placeholder.com/200x200?text=Product21' },
        { id: 22, name: 'Product 22', rating: 3.5, imageUrl: 'https://via.placeholder.com/200x200?text=Product22' },
        { id: 23, name: 'Product 23', rating: 4.1, imageUrl: 'https://via.placeholder.com/200x200?text=Product23' },
        { id: 24, name: 'Product 24', rating: 5.0, imageUrl: 'https://via.placeholder.com/200x200?text=Product24' },
        { id: 25, name: 'Product 25', rating: 4.4, imageUrl: 'https://via.placeholder.com/200x200?text=Product25' },
        // Add more products here if needed
      ];
  
    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);
    
    // Find the product by ID from the products array (or you can fetch from an API)
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.body.innerHTML = '<h2>Product not found</h2>';
        return;
    }

    // Display product details
    const productTitle = document.getElementById('product-title');
    const productDescription = document.getElementById('product-description');
    const productImage = document.getElementById('product-image');
    const productRating = document.getElementById('product-rating');

    productTitle.textContent = product.name;
    productDescription.textContent = `Description of ${product.name}.`; // You can replace this with actual description data
    productImage.src = product.imageUrl;
    productRating.innerHTML = 'Rating: ' + '★'.repeat(Math.floor(product.rating));
    
    // Add action for WhatsApp and Contact Us buttons
    document.getElementById('whatsapp-button').addEventListener('click', function () {
        window.open(`https://wa.me/?text=I'm interested in ${product.name}`, '_blank');
    });

    document.getElementById('contact-us-button').addEventListener('click', function () {
        window.location.href = 'contact.html'; // Redirect to contact us page
    });

    // Suggested Products (for simplicity, showing random products)
    const suggestedProductContainer = document.getElementById('suggested-product-container');
    const suggestedProducts = products.filter(p => p.id !== productId); // Exclude current product

    suggestedProducts.slice(0, 4).forEach(suggestedProduct => {
        const suggestedProductCard = document.createElement('div');
        suggestedProductCard.classList.add('product-card');
        suggestedProductCard.innerHTML = `
            <img src="${suggestedProduct.imageUrl}" alt="${suggestedProduct.name}">
            <h3>${suggestedProduct.name}</h3>
            <p>Rating: ${'★'.repeat(Math.floor(suggestedProduct.rating))}</p>
        `;
        suggestedProductCard.addEventListener('click', function () {
            window.location.href = `product-details.html?id=${suggestedProduct.id}`;
        });
        suggestedProductContainer.appendChild(suggestedProductCard);
    });
});
