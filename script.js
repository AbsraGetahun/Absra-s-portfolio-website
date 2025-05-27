function toggleMenu() {
      const menu = document.getElementById('nav-menu');
      menu.classList.toggle('active');
    }
 
 
    // Email validation 

    function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

      window.addEventListener('DOMContentLoaded', () => {
      const contactForm = document.getElementById('contact-form');
      const formStatus = document.getElementById('form-status');

      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
          formStatus.textContent = '❌ Please fill out all fields.';
          formStatus.style.color = 'red';
          return;
        }

        if (!validateEmail(email)) {
          formStatus.textContent = '❌ Please enter a valid email address.';
          formStatus.style.color = 'red';
          return;
        }

        formStatus.textContent = `✅ Thank you, ${name}! Your message has been sent.`;
        formStatus.style.color = 'limegreen';

        contactForm.reset();
      });
    });

    // background animation
(function() {
  const canvas = document.getElementById('backgroundCanvas');
  const ctx = canvas.getContext('2d');

  let width, height;
  let circles = [];

  function init() {
    resize();
    createCircles(50);
    animate();
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  window.addEventListener('resize', () => {
    resize();
  });

  function createCircles(count) {
    circles = [];
    for (let i = 0; i < count; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 10 + Math.random() * 15,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: 0.1 + Math.random() * 0.2,
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    circles.forEach(c => {
      // Move circle
      c.x += c.speedX;
      c.y += c.speedY;

      // Wrap around edges
      if (c.x < -c.radius) c.x = width + c.radius;
      else if (c.x > width + c.radius) c.x = -c.radius;

      if (c.y < -c.radius) c.y = height + c.radius;
      else if (c.y > height + c.radius) c.y = -c.radius;

      // Draw circle
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(100, 149, 237, ${c.opacity})`; // Cornflower blue with opacity
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  init();
})();

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
