const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

// This function creates the dark overlay
function createMenuOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('menu-overlay');
    document.body.appendChild(overlay);
    // When overlay is clicked, close the menu
    overlay.addEventListener('click', closeMenu);
}

// This function removes the dark overlay
function removeMenuOverlay() {
    const overlay = document.querySelector('.menu-overlay');
    if (overlay) {
        document.body.removeChild(overlay);
    }
}

// This function closes the menu
function closeMenu() {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('is-active');
    removeMenuOverlay();
}

// Main toggle button event
navToggle.addEventListener('click', () => {
    const isMenuOpen = navMenu.classList.contains('show-menu');

    if (isMenuOpen) {
        closeMenu();
    } else {
        navMenu.classList.add('show-menu');
        navToggle.classList.add('is-active');
        createMenuOverlay(); // Create the dark overlay
    }
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
