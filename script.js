function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Select all elements with the class 'external-link'
document.querySelectorAll('.external-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const url = this.getAttribute('data-url'); // Get the URL from the data-url attribute
        if (url) {
            window.open(url, '_blank'); // Open the URL in a new tab
        }
    });
});

