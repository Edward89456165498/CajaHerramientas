function navigateToMenu() {
    window.location.href = './menu.html';
}

  
  function predictGender() {
    const name = document.getElementById('name-input').value;
    if (name) {
      fetch(`https://api.genderize.io/?name=${name}`)
        .then(response => response.json())
        .then(data => {
          const gender = data.gender;
          const resultDiv = document.getElementById('gender-result');
          if (gender === 'male') {
            resultDiv.innerHTML = `<div style="color: blue;">El género es masculino.</div>`;
          } else if (gender === 'female') {
            resultDiv.innerHTML = `<div style="color: pink;">El género es femenino.</div>`;
          } else {
            resultDiv.innerHTML = `<div>Género desconocido.</div>`;
          }
        })
        .catch(error => console.error('Error fetching gender:', error));
    } else {
      alert('Por favor, ingresa un nombre.');
    }
  }
  
  function determineAge() {
    const name = document.getElementById('name-input-age').value;
    if (name) {
      fetch(`https://api.agify.io/?name=${name}`)
        .then(response => response.json())
        .then(data => {
          const age = data.age;
          const resultDiv = document.getElementById('age-result');
          let ageCategory;
          let ageImage;
  
          if (age < 30) {
            ageCategory = 'Joven';
            ageImage = 'images/JovenH.jpg'; 
          } else if (age < 60) {
            ageCategory = 'Adulto';
            ageImage = 'images/Adulto.jpg'; 
          } else {
            ageCategory = 'Anciano';
            ageImage = 'images/AncianoH.jpg'; 
          }
  
          resultDiv.innerHTML = `
            <div>${ageCategory} (Edad: ${age})</div>
            <img src="${ageImage}" alt="${ageCategory}" />
          `;
        })
        .catch(error => console.error('Error fetching age:', error));
    } else {
      alert('Por favor, ingresa un nombre.');
    }
  }
  
  // Funciones de navegación para el menú
  function goToGender() {
    window.location.href = 'PrediccionGenero.html';
  }
  
  function goToAge() {
    window.location.href = 'PrediccionEdad.html';
  }
  
  function goToUniversities() {
    window.location.href = 'Universidades.html';
  }
  
  function goToWeather() {
    window.location.href = 'Clima.html';
  }
  
  function goToNews() {
    window.location.href = 'Noticias.html';
  }
  
  function goToAbout() {
    window.location.href = 'AcercaDe.html';
  }
  