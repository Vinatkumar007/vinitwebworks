 // JavaScript Minified
    document.addEventListener('DOMContentLoaded', function () {
      // Mobile Menu Toggle
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.getElementById('navLinks');
      if (menuToggle) menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

      // Close menu when clicking link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
      });

      // Portfolio Filtering
      const filterButtons = document.querySelectorAll('.filter-btn');
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
              item.style.display = 'block';
              setTimeout(() => item.style.opacity = '1', 10);
            } else {
              item.style.opacity = '0';
              setTimeout(() => item.style.display = 'none', 300);
            }
          });
        });
      });

      // Form Submission
      // const contactForm = document.getElementById('contactForm');
      // const formResponse = document.getElementById('formResponse');
      // if (contactForm) {
      //   contactForm.addEventListener('submit', function (e) {
      //     e.preventDefault();
      //     formResponse.textContent = 'Sending message...';
      //     formResponse.style.color = '#4361ee';
      //     const formData = new FormData(this);
      //     fetch('https://script.google.com/macros/s/AKfycbwkkVGvMoVKSS0oZOmQywXaJb6L64EOvQlWhu8iYpwaNLJsgNGOoKDAceXEUPityo6Apw/exec', {
      //       method: 'POST',
      //       body: formData
      //     })
      //       .then(res => res.text())
      //       .then(data => {
      //         formResponse.textContent = 'Message sent successfully! We\'ll contact you soon.';
      //         formResponse.style.color = '#25D366';
      //         contactForm.reset();
      //         setTimeout(() => formResponse.textContent = '', 5000);
      //       })
      //       .catch(err => {
      //         formResponse.textContent = 'Something went wrong. Please try again or contact directly.';
      //         formResponse.style.color = '#ff4757';
      //       });
      //   });
      // }

      const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  formResponse.innerText = "Sending...";

  const formData = new FormData(this);

  fetch("https://script.google.com/macros/s/AKfycbymaKvfUZbWQOboy2zbFaFCbn5dhc8Sv9-5o0HKYWPKBvqbc9M5hdk0KjzsOQreNmo9oQ/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    if (data === "Success") {
      formResponse.innerText = "Message Sent ✅";
      formResponse.style.color = "green";
      contactForm.reset();
    } else {
      formResponse.innerText = "Error: " + data;
      formResponse.style.color = "red";
    }
  })
  .catch(err => {
    formResponse.innerText = "Network Error ❌";
    formResponse.style.color = "red";
    console.log(err);
  });
});

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
    });
