// Form Submission Handler (Simple Example)
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    document.getElementById('form-message').innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
    document.getElementById('form-message').style.color = 'green';
    document.getElementById('contact-form').reset(); // Reset form after submission
  } else {
    document.getElementById('form-message').innerHTML = `<p>Please fill out all fields.</p>`;
    document.getElementById('form-message').style.color = 'red';
  }
});

