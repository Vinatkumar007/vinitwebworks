AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });

  const form = document.getElementById('contactForm');
  const responseMsg = document.getElementById('formResponse');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbwN6NH8HXkOjo58vmw1o-_037C0nTzayNcFruzGcMX9zG_jkIfl8lnyBSv6b3joy-gY/exec', {
      method: 'POST',
      body: formData
    })
    .then(res => res.text())
    .then(data => {
      responseMsg.innerText = "Message sent successfully!";
      form.reset();
    })
    .catch(err => {
      responseMsg.innerText = "Something went wrong!";
    });
  });

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });
  