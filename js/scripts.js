document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FF6F3C';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggle.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page.

    // Display success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Clear the form fields
    const form = document.getElementById('contactForm');
    form.reset();

    // Automatically hide the success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Example: Fetch item counts from localStorage or server
    const cartCount = localStorage.getItem('cartCount') || 0;
    const wishlistCount = localStorage.getItem('wishlistCount') || 0;

    // Optionally display the counts on icons
    const cartIcon = document.querySelector('.cart-icon');
    const wishlistIcon = document.querySelector('.wishlist-icon');

    if (cartCount > 0) {
        cartIcon.innerHTML += `<span class="icon-badge">${cartCount}</span>`;
    }

    if (wishlistCount > 0) {
        wishlistIcon.innerHTML += `<span class="icon-badge">${wishlistCount}</span>`;
    }
});
