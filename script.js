// Theme toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const roleText = document.getElementById('roleText');
const descText = document.getElementById('descText');

function updateTerminalText() {
    if (!roleText || !descText) return;
    if (document.body.classList.contains('light-mode')) {
        roleText.textContent = 'Building with code & creativity';
        descText.textContent = 'Bright ideas, clean design.';
    } else {
        roleText.textContent = 'Software Developer | Tech Enthusiast';
        descText.textContent = 'Welcome to my portfolio!';
    }
}

function syncToggleIcon() {
    if (!darkModeToggle) return;
    darkModeToggle.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        syncToggleIcon();
        updateTerminalText();
    });
    syncToggleIcon();
    updateTerminalText();
}
// Contact form validation
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.style.color = 'red';
            return;
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            formStatus.textContent = 'Please enter a valid email address.';
            formStatus.style.color = 'red';
            return;
        }
        formStatus.textContent = 'Message sent! (Demo only)';
        formStatus.style.color = 'green';
        contactForm.reset();
    });
}
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

