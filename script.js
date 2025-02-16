document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Cart Functionality
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
        document.getElementById("cart-link").innerText = `Cart (${cart.length})`;
    }

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", function () {
            const productCard = this.closest(".product-card");

            const product = {
                title: productCard.querySelector(".product-title").innerText,
                price: productCard.querySelector(".product-price").innerText,
                image: productCard.querySelector(".product-image").src, // Store Image
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
            alert("Product added to cart!");
        });
    });

    // Update cart count on page load
    updateCartCount();

    // Search Bar Toggle
    const searchIcon = document.querySelector(".search-link");
    const searchInput = document.querySelector("#searchInput");

    searchIcon.addEventListener("click", function (event) {
        event.preventDefault();
        searchInput.classList.toggle("show");
        if (searchInput.classList.contains("show")) {
            searchInput.focus();
        }
    });

    // Hide search bar when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchIcon.contains(event.target) && !searchInput.contains(event.target)) {
            searchInput.classList.remove("show");
        }
    });
});
