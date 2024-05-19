document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'ffc6693f2c1a4dccadbbb259a54dd21b';
    let keyword = 'technology';
    const language = 'es';

    let url = `https://newsapi.org/v2/everything?q=${keyword}&language=${language}&sortBy=publishedAt&apiKey=${apiKey}`;

    if(keyword == 'technology'){
        llamarApiNoticias(url);
    }

    

    function llamarApiNoticias(url){
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
    }


    //-------------------- LLAMADA A LA API DEL CLIMA --------------------
    const keyWeather = '867014d98631456eb4b91249241305'
    const locationCity = 'Venado';//se puede obtener desde la ubicacion fisica del equipo
    const limitDays = '5';

    const urlWeather = `https://api.weatherapi.com/v1/current.json?q=${locationCity}&lang=${language}&days=${limitDays}&key=${keyWeather}`
    //Documentacion:
    //https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2#/APIs/realtime-weather 


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
    .catch(error => console.log(error));

    document.getElementById('entretenimiento').addEventListener('click', () => {
        console.log('entretenimiento');
        keyword = 'entertainment';
        const secNoticias = document.querySelector('div.noticias');
        let noticias = document.querySelector('my-news');
        secNoticias.removeChild(noticias);    
        url = `https://newsapi.org/v2/everything?q=${keyword}&language=${language}&sortBy=publishedAt&apiKey=${apiKey}`;
        llamarApiNoticias(url);    
    });

    document.getElementById('deportes').addEventListener('click', () => {
        console.log('deportes');
        keyword = 'sports';
        const secNoticias = document.querySelector('div.noticias');
        let noticias = document.querySelector('my-news');
        secNoticias.removeChild(noticias);  
        url = `https://newsapi.org/v2/everything?q=${keyword}&language=${language}&sortBy=publishedAt&apiKey=${apiKey}`;
        llamarApiNoticias(url);      
    });

    document.getElementById('economia').addEventListener('click', () => {
        console.log('economy');
        keyword = 'economy';
        const secNoticias = document.querySelector('div.noticias');
        let noticias = document.querySelector('my-news');
        secNoticias.removeChild(noticias);      
        url = `https://newsapi.org/v2/everything?q=${keyword}&language=${language}&sortBy=publishedAt&apiKey=${apiKey}`;
        llamarApiNoticias(url);  
    });

    document.getElementById('politica').addEventListener('click', () => {
        console.log('politics');
        keyword = 'politics';
        const secNoticias = document.querySelector('div.noticias');
        let noticias = document.querySelector('my-news');
        secNoticias.removeChild(noticias);  
        url = `https://newsapi.org/v2/everything?q=${keyword}&language=${language}&sortBy=publishedAt&apiKey=${apiKey}`;
        llamarApiNoticias(url);      
    });

    
});
