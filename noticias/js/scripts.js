document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'ffc6693f2c1a4dccadbbb259a54dd21b';
    const keyword = 'technology';
    const language = 'es';

    const url = `https://newsapi.org/v2/everything?q=Argentina&language=es&sortBy=publishedAt&apiKey=ffc6693f2c1a4dccadbbb259a54dd21b`

    let urlWeather = `http://api.weatherapi.com/v1/current.json?q=Venado&lang=es&days=5&key=867014d98631456eb4b91249241305`




    fetch(url)
    .then(response => response.json())
    .then(data => {
        const secNoticias = document.querySelector('div.noticias');
        // Itera no mas de 15 veces en la cantidad de articulos
        data.articles.slice(0,15).forEach(article => {            
            if(article.urlToImage != null){
                const noticia = document.createElement('my-news');
                noticia.classList.add('noticia');
                //MODIFICADO AHORA LLAMAMOS SOLO UN WEBCOMPONENT 'my-news' Y CAMBIAMOS EL VALOR DE LOS ATRIBUTOS                
                noticia.setAttribute('image_source', article.urlToImage);
                noticia.setAttribute('image_alt', article.title);
                noticia.setAttribute('titulo', article.title);
                noticia.setAttribute('cuerpo', article.description);
                noticia.setAttribute('publishedAt', article.publishedAt);
                secNoticias.appendChild(noticia);
            }          

        });                

    })
    .catch(error => console.error('Error:', error));

    fetch(urlWeather)
    .then(response => response.json())
    .then(data => { 
        const sectionClima = document.querySelector('div.clima');
        const clima = document.createElement('clima-actual');
        clima.setAttribute('location', data.location.name);
        clima.setAttribute('temp_c', data.current.temp_c);
        clima.setAttribute('humidity', data.current.humidity);
        clima.setAttribute('text', data.current.condition.text);
        clima.setAttribute('condition_icon', data.current.condition.icon);
        clima.setAttribute('viento', data.current.wind_kph);


        sectionClima.appendChild(clima);})
    .catch(error => console.loog(error));
    
});
