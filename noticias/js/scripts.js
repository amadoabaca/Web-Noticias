document.addEventListener("DOMContentLoaded", () => {
    //REQUEST A LA API DE jSON PLACE HOLDER
    //ENDPOINT A LOS POSTS DE EJEMPLO
    const url= 'https://jsonplaceholder.typicode.com/posts'
    //creamos un objeto del tipo request
    const req = new Request(url);
    //creamos encabezados para la peticion
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');  //AGREGAMOS AL HEADER QUE EL CONTENIDO SEA DEVUELTO EN FORMATO JSON
    //generamos la peticion pasando por parametro el objeto req
    fetch(req, {
        method: 'GET',  
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        const secNoticias = document.querySelector('div.noticias')
        
        //Aqui es donde cambiamos el contenido del html element
        data.forEach(element => {
            //ELEMENT ES EL CONTENIDO DE LA CONSULTA A LA API
            //SE PUEDE AGREGAR MAS DATOS COMO USUARIO ETC.

            const noticia = document.createElement('div');
            noticia.classList.add('noticia');

            const noticiaImg = document.createElement('div');
            noticiaImg.classList.add('noticia_img');

            const noticiaImgImg = document.createElement('img');
            noticiaImgImg.src = 'assets/img.png';
            noticiaImgImg.alt = '';

            noticiaImg.appendChild(noticiaImgImg);

            const noticiaCuerpo = document.createElement('div');
            noticiaCuerpo.classList.add('noticia_cuerpo');

            const tituloNoticia = document.createElement('h1');
            tituloNoticia.classList.add('titulo_noticia');
            tituloNoticia.textContent = element.title;

            const noticiaParrafo = document.createElement('p');
            noticiaParrafo.textContent = element.body;

            noticiaCuerpo.appendChild(tituloNoticia);
            noticiaCuerpo.appendChild(noticiaParrafo);

            noticia.appendChild(noticiaImg);
            noticia.appendChild(noticiaCuerpo);
            secNoticias.appendChild(noticia);
        });        

    })
    .catch(error => console.error('Error:', error));
    
});