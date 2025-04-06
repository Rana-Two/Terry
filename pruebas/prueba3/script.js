// Función para crear el formulario dinámicamente según la página
function createForm(page) {
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = ''; // Limpiar contenido
  
    let formHtml = '';
  
    if (page === 'signup') {
      formHtml = `
        <h2>Registrarse</h2>
        <form>
          <input type="text" placeholder="Nombre de usuario" required>
          <input type="email" placeholder="Correo electrónico" required>
          <input type="password" placeholder="Contraseña" required>
          <button type="submit">Registrarse</button>
        </form>
        <p>¿Ya tienes cuenta? <a href="#" onclick="createForm('login')">Iniciar sesión</a></p>
      `;
    } else if (page === 'login') {
      formHtml = `
        <h2>Iniciar sesión</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required>
          <input type="password" placeholder="Contraseña" required>
          <button type="submit">Iniciar sesión</button>
        </form>
        <p>¿Olvidaste tu contraseña? <a href="#" onclick="createForm('recover')">Recuperar contraseña</a></p>
        <p>¿No tienes cuenta? <a href="#" onclick="createForm('signup')">Registrarse</a></p>
      `;
    } else if (page === 'recover') {
      formHtml = `
        <h2>Recuperar Contraseña</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required>
          <button type="submit">Recuperar</button>
        </form>
        <p><a href="#" onclick="createForm('login')">Volver a iniciar sesión</a></p>
      `;
    }
  
    formContainer.innerHTML = formHtml;
  }
  
  // Inicializar la página con el formulario de login
  createForm('login');
  