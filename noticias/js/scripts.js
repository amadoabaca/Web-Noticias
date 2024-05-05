document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'ffc6693f2c1a4dccadbbb259a54dd21b';
    const keyword = 'technology';
    const language = 'es';

    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-03&sortBy=publishedAt&apiKey=ffc6693f2c1a4dccadbbb259a54dd21b`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //parece que no trae ningun dato amado capaz esta mal la url
            console.log(data);
            const secNoticias = document.querySelector('div.noticias');

            // Itera no mas de 15 veces en la cantidad de articulos
            data.articles.slice(0,15).forEach(article => {
                //MODIFICADO AHORA LLAMAMOS SOLO UN WEBCOMPONENT 'my-news' Y CAMBIAMOS EL VALOR DE LOS ATRIBUTOS
                const noticia = document.createElement('my-news');
                noticia.classList.add('noticia');
                noticia.setAttribute('image_source', article.urlToImage);
                noticia.setAttribute('image_alt', article.title);
                noticia.setAttribute('titulo', article.title);
                noticia.setAttribute('cuerpo', article.description);

                secNoticias.appendChild(noticia);
                

                /*const noti2 = document.createElement('my-news');
                noti2.classList.add('noticia');
                noti2.setAttribute('image_source', 'assets/img.png');
                noti2.setAttribute('titulo', element.title);
                noti2.setAttribute('cuerpo', element.body);*/

                //AGREGAMOS AL CONTENEDOR CADA NOTICIA
                secNoticias.appendChild(noti2);
            });                
 
        })
        .catch(error => console.error('Error:', error));
    
});
