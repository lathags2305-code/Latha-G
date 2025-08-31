// Smooth scrolling effect

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({

      behavior: 'smooth'

    });

  });

});

// Simple greeting alert (optional)

window.onload = () => {

  console.log("Welcome to Latha's Portfolio!");

};