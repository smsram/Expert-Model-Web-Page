// Nav Link Section Indicator
const links = document.querySelectorAll('.header ul li a');

function setActiveLink() {
    links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default click behavior
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update the active link
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);


// Nav Bar For Mobile
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-bar').classList.toggle('active');
});
document.addEventListener('click', function(event) {
    const navBar = document.querySelector('.nav-bar');
    const menuIcon = document.querySelector('.menu-icon');

    if (!navBar.contains(event.target) && !menuIcon.contains(event.target)) {
        navBar.classList.remove('active');
    }
});

const navLinks = document.querySelectorAll('.nav-bar ul li a');

function setActiveLink1() {
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default click behavior
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update the active link
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('scroll', setActiveLink1);
window.addEventListener('load', setActiveLink1);


// Scroll Reveal
ScrollReveal({
    distance: '20px',
    duration: 2000,
    delay: 200,
    reset: true // If you dont want anmations for every scrolling time then make it false
});
ScrollReveal().reveal('.header, .projects-txt, .footer-container2',{origin:'top'});
ScrollReveal().reveal('.home-container button, .about-container1 div, .home-container, .about-img, .projects-box1, .projects-box2, .projects-box3, .contact-txt, .contact-form #submit, .footer-container1',{origin:'bottom'});
ScrollReveal().reveal('.home-container h1, .about-container1 h1, .about-container1 h2, .about-txt h1,  .services-box div:nth-child(1), .services-box div:nth-child(3), .success-stories-txt, .become-expert-container h1, .become-expert-container div',{origin:'left'});
ScrollReveal().reveal('.home-container p, .about-container1 p, .about-txt p:nth-child(2), .services-txt,  .services-box div:nth-child(2), .success-stories-box, .become-expert-container p, .menu-icon',{origin:'right'});
ScrollReveal().reveal('.about-txt p:nth-child(3), .contact-form #name',{origin:'right', delay: '0400'});
ScrollReveal().reveal('.about-txt p:nth-child(4), .contact-form #email',{origin:'right', delay: '0800'});
ScrollReveal().reveal('.about-txt p:nth-child(5), .contact-form #message',{origin:'right', delay: '1200'});
