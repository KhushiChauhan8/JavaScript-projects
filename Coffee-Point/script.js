document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded and running");

    // Responsive Navigation Menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Message sent successfully!");
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add Menu Item
    const addMenuItemButton = document.getElementById('add-menu-item');
    const menuItemsContainer = document.getElementById('menu-items');
    
    addMenuItemButton.addEventListener('click', () => {
        const newItem = document.createElement('div');
        newItem.classList.add('menu-item');
        newItem.innerHTML = `
            <h3>New Coffee</h3>
            <p>$5.00</p>
        `;
        menuItemsContainer.appendChild(newItem);
    });
});
