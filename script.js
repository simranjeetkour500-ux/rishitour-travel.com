const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Dhanyavaad! Ham aapse jald contact karenge.');
    form.reset();
  });
}
