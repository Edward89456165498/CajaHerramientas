document.addEventListener('DOMContentLoaded', function () {
  function determineAgeAndGender() {
    const name = document.getElementById('age-name-input').value.trim(); 
    const nameParts = name.split(' ');

    if (!name || nameParts.length < 2) {
      alert("Por favor ingresa un nombre completo (al menos dos palabras).");
      return;
    }

    const ageUrl = `https://api.agify.io/?name=${name}`;
    const genderUrl = `https://api.genderize.io/?name=${name}`;
    
    // Establecer el color base verde
    document.body.style.backgroundColor = '#98FB98'; 

    fetch(ageUrl)
      .then(response => response.json())
      .then(ageData => {
        if (ageData.age === null) {
          document.getElementById('age-result').innerHTML = `<p>No se pudo determinar la edad para el nombre ingresado.</p>`;
          document.getElementById('age-image').innerHTML = '';
          return;
        }

        fetch(genderUrl)
          .then(response => response.json())
          .then(genderData => {
            const ageResult = document.getElementById('age-result');
            const ageImage = document.getElementById('age-image');
            let classification = '';
            let imagePath = '';

            // Clasificación por edad
            if (ageData.age < 18) {
              classification = 'Joven';
            } else if (ageData.age < 60) {
              classification = 'Adulto';
            } else {
              classification = 'Anciano';
            }

            // Determinar el color de fondo y la imagen basada en el género
            if (genderData.gender === 'male') {
              document.body.style.backgroundColor = '#ADD8E6'; // Azul claro para hombres

              if (classification === 'Joven') {
                imagePath = 'img/JovenH.jpg'; // Imagen joven hombre
              } else if (classification === 'Adulto') {
                imagePath = 'img/AdultoH.jpg'; // Imagen adulto hombre
              } else {
                imagePath = 'img/AncianoH.jpg'; // Imagen anciano hombre
              }
            } else if (genderData.gender === 'female') {
              document.body.style.backgroundColor = '#FFB6C1'; // Rosa claro para mujeres

              if (classification === 'Joven') {
                imagePath = 'img/JovenM.jpg'; // Imagen joven mujer
              } else if (classification === 'Adulto') {
                imagePath = 'img/AdultoM.jpg'; // Imagen adulto mujer
              } else {
                imagePath = 'img/AncianaM.jpg'; // Imagen anciana mujer
              }
            } else {
              // Si no se puede determinar el género
              ageResult.innerHTML = `<p>Nombre: ${name}, Edad: ${ageData.age}, Género: Desconocido - ${classification}</p>`;
              document.getElementById('age-image').innerHTML = '';
              return;
            }

            // Mostrar resultados
            ageResult.innerHTML = `<p>Nombre: ${name}, Edad: ${ageData.age}, Género: ${genderData.gender === 'male' ? 'Hombre' : 'Mujer'} - ${classification}</p>`;

            // Mostrar la imagen
            if (imagePath) {
              ageImage.innerHTML = `<img src="${imagePath}" alt="${classification}" style="width: 150px; height: auto;" />`;
            }
          })
          .catch(error => {
            console.error('Error fetching gender data:', error);
            document.getElementById('age-result').innerHTML = `<p>Error al obtener el género.</p>`;
            document.getElementById('age-image').innerHTML = '';
          });
      })
      .catch(error => {
        console.error('Error fetching age data:', error);
        document.getElementById('age-result').innerHTML = `<p>Error al obtener la edad.</p>`;
        document.getElementById('age-image').innerHTML = '';
      });
  }

  const button = document.getElementById('age-button');
  button.addEventListener('click', determineAgeAndGender);
});
