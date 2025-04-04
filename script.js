document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Section animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.section').forEach((section) => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'all 0.6s ease-out';
      observer.observe(section);
    });
  
    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
  
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      themeToggle.textContent = body.classList.contains("light-mode") ? "🌞" : "🌙";
    });
  });
  