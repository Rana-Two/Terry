document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const inputs = form.querySelectorAll("input");
      const data = {
        nombre: inputs[0].value.trim(),
        correo: inputs[1].value.trim(),
        contraseña: inputs[2].value.trim(),
        fechaNacimiento: inputs[3].value.trim(),
      };
  
      // Validación simple
      if (!data.nombre || !data.correo || !data.contraseña || !data.fechaNacimiento) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Simular guardado (puedes conectar a base real luego)
      console.log("Datos registrados:", data);
      alert("Registro exitoso");
  
      // Limpiar formulario
      form.reset();
    });
  });
  