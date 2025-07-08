document.addEventListener('DOMContentLoaded', () => {
  const btnRegister = document.getElementById('btn-register');
  const btnLogin = document.getElementById('btn-login');
  const mainForm = document.getElementById('main-form');
  const submitButton = document.getElementById('submit-button');

  btnRegister.addEventListener('click', () => {
    btnRegister.classList.add('active');
    btnLogin.classList.remove('active');

    // Cambiar texto botón submit
    submitButton.textContent = 'Registrarse';

    // Mostrar todos los campos para registro
    mainForm.querySelector('#name').style.display = 'block';
    mainForm.querySelector('#role').style.display = 'block';

    // Asegurarse que los campos sean requeridos
    mainForm.querySelector('#name').required = true;
    mainForm.querySelector('#role').required = true;
  });

  btnLogin.addEventListener('click', () => {
    btnLogin.classList.add('active');
    btnRegister.classList.remove('active');

    // Cambiar texto botón submit
    submitButton.textContent = 'Iniciar sesión';

    // Ocultar campos no necesarios para login
    mainForm.querySelector('#name').style.display = 'none';
    mainForm.querySelector('#role').style.display = 'none';

    // Quitar requerimiento de esos campos en login
    mainForm.querySelector('#name').required = false;
    mainForm.querySelector('#role').required = false;
  });
});
