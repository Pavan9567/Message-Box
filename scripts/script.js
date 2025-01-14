const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    fetch('backend/config.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        this.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
});
  