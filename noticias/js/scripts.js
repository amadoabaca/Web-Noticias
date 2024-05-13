document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'ffc6693f2c1a4dccadbbb259a54dd21b';
    const keyword = 'technology';
    const language = 'es';

    let url = `https://newsapi.org/v2/everything?q=Argentina&lan=es&sortBy=publishedAt&apiKey=ffc6693f2c1a4dccadbbb259a54dd21b`




    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
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
    
});
