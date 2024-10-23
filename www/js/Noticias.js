function getNews() {
  const url = 'https://911.gob.do/wp-json/wp/v2/posts';

  fetch(url)
    .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const newsResult = document.getElementById('news-result');
      if (newsResult) {  
        newsResult.innerHTML = data.slice(0, 3).map(
          post => `<p><strong>${post.title.rendered}</strong><br>${post.excerpt.rendered} <a href="${post.link}" target="_blank">Leer más</a></p>`
        ).join('');
      } else {
        console.error('Element with id "news-result" not found');
      }
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

window.onload = getNews;
