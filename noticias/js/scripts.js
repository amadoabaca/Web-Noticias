document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'ffc6693f2c1a4dccadbbb259a54dd21b';
    const keyword = 'technology';
    const language = 'es';

<<<<<<< HEAD
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-03&sortBy=publishedAt&apiKey=ffc6693f2c1a4dccadbbb259a54dd21b`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const secNoticias = document.querySelector('div.noticias');

            // Itera no mas de 15 veces en la cantidad de articulos
            data.articles.slice(0,15).forEach(article => {
                const noticia = document.createElement('div');
                noticia.classList.add('noticia');

                const noticiaImg = document.createElement('div');
                noticiaImg.classList.add('noticia_img');

                const noticiaImgImg = document.createElement('img');
                noticiaImgImg.src = article.urlToImage;
                noticiaImgImg.alt = article.title;
                noticiaImg.appendChild(noticiaImgImg);

                const noticiaCuerpo = document.createElement('div');
                noticiaCuerpo.classList.add('noticia_cuerpo');

                const tituloNoticia = document.createElement('h1');
                tituloNoticia.classList.add('titulo_noticia');
                tituloNoticia.textContent = article.title;
                
                const noticiaParrafo = document.createElement('p');
                noticiaParrafo.textContent = article.description;

                noticiaCuerpo.appendChild(tituloNoticia);
                noticiaCuerpo.appendChild(noticiaParrafo);

                noticia.appendChild(noticiaImg);
                noticia.appendChild(noticiaCuerpo);
                secNoticias.appendChild(noticia);
            });        
=======
            //MODIFICADO AHORA LLAMAMOS SOLO UN WEBCOMPONENT 'my-news' Y CAMBIAMOS EL VALOR DE LOS ATRIBUTOS

            const noti2 = document.createElement('my-news');
            noti2.classList.add('noticia');
            noti2.setAttribute('image_source', 'assets/img.png');
            noti2.setAttribute('titulo', element.title);
            noti2.setAttribute('cuerpo', element.body);

            //AGREGAMOS AL CONTENEDOR CADA NOTICIA
            secNoticias.appendChild(noti2);
        });        
>>>>>>> 5dd0cb2 (nuevo web component de noticias)

        })
        .catch(error => console.error('Error:', error));
    
});
