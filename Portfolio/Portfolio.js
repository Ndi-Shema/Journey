const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('mail').value;

  const data = {
    to_email: 'boomer.shema@gmail.com', // replace with your email address
    from_email: email,
    subject: 'New Newsletter Signup',
    message: `A new user has signed up for your newsletter with the email address: ${email}`
  };

  fetch('https://api.example.com/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for signing up!');
      form.reset();
    } else {
      throw new Error('Error sending email');
    }
  })
  .catch(error => {
    console.error(error);
    alert('There was an error sending your email. Please try again later.');
  });
});


const button = document.querySelector('button');
const linkedInUrl = 'https://www.linkedin.com/in/shema-fred-357413231/'; // Replace with your LinkedIn profile URL

button.addEventListener('click', () => {
  window.location.href = linkedInUrl;
});