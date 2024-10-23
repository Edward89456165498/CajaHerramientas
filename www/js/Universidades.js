function loadUniversities() {
    const country = document.getElementById('country-input').value;
    if (country) {
      fetch(`http://universities.hipolabs.com/search?country=${country}`)
        .then(response => response.json())
        .then(data => {
          const universitiesList = document.getElementById('universities-list');
          universitiesList.innerHTML = ''; 
          data.forEach(university => {
            const uniItem = document.createElement('div');
            uniItem.innerHTML = `
              <h3>${university.name}</h3>
              <p>Dominio: ${university.domains[0]}</p>
              <a href="http://${university.domains[0]}" target="_blank">Visitar Página Web</a>
            `;
            universitiesList.appendChild(uniItem);
          });
        })
        .catch(error => console.error('Error fetching universities:', error));
    } else {
      alert('Por favor, ingresa un país.');
    }
  }