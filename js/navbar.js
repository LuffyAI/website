// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.getElementById('navbar-links');
  
    hamburger.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  });