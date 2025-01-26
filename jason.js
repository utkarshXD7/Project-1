const typingText = document.querySelector('.typing-text span');
const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Fullstack Developer',
    'UI/UX Designer',
    'Tech Enthusiast'
];

let currentIndex = 0;

function updateTypingText() {
    typingText.textContent = roles[currentIndex];
    currentIndex = (currentIndex + 1) % roles.length;
}

// Start the update cycle
setInterval(updateTypingText, 4000);  // Change text every 4 seconds

let menuIcon=document.querySelector('#menuIcon');
let navbar=document.querySelector('.navbar');


menuIcon.oneclick = () =>{
    menuIcon.classlist.toggle('bx-x')
navbar.classlist.toggle('active');
}



document.addEventListener("DOMContentLoaded", () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth", // Smooth scroll
                    block: "start" // Align to the start of the section
                });
            }
        });
    });
});

// JavaScript to handle menu functionality and smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.navbar a');

    // Toggle menu visibility on mobile
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('open'); // Optional for toggling icon styles
    });

    // Close menu and add smooth scroll when clicking a link
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));

            // Smooth scroll to the section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Remove active class from menu after clicking
            navbar.classList.remove('active');
            menuIcon.classList.remove('open');
        });
    });
});

