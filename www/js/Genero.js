function predictGender() {
  const name = document.getElementById('name-input').value.trim(); // Elimina espacios en blanco
  const url = `https://api.genderize.io/?name=${name}`;

  // Validar que el nombre no esté vacío
  if (!name) {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la red: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Muestra la respuesta de la API en la consola
      const genderResult = document.getElementById('gender-result');
      const genderImage = document.getElementById('gender-image');

      // Manejo de la respuesta de la API
      if (data.gender === 'male') {
        genderResult.innerHTML = '<p>Género: Masculino</p>';
        genderResult.style.backgroundColor = 'blue';
        genderImage.src = 'img/AdultoH.jpg'; 
        genderImage.style.display = 'block'; 
      } else if (data.gender === 'female') {
        genderResult.innerHTML = '<p>Género: Femenino</p>';
        genderResult.style.backgroundColor = 'pink';
        genderImage.src = 'img/AdultoM.jpg'; 
        genderImage.style.display = 'block'; 
      } else {
        genderResult.innerHTML = '<p>Género no determinado</p>';
        genderResult.style.backgroundColor = 'gray';
        genderImage.style.display = 'none'; 
      }
    })
    .catch(error => {
      console.error('Error al obtener el género:', error);
      alert('Ocurrió un error al determinar el género. Por favor, inténtalo de nuevo más tarde. Detalles del error: ' + error.message);
    });
}
