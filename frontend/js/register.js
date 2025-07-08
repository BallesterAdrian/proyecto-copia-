document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('register-form');
  const message = document.getElementById('register-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const userData = { name, email, password, role };

    try {
      const res = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await res.json();

      if (res.ok) {
        message.style.color = 'green';
        message.textContent = data.message;
        form.reset();
      } else {
        message.style.color = 'red';
        message.textContent = data.error || 'Error en el registro.';
      }

    } catch (err) {
      console.error('Error al registrar:', err);
      message.style.color = 'red';
      message.textContent = 'Error de conexión con el servidor.';
    }
  });
});
