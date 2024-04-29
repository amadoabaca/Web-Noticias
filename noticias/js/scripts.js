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
        //Aqui es donde cambiamos el contenido del html element
        data.forEach(element => {
            console.log(element.title);
            console.log(element.body);
        });
    })
    .catch(error => console.error('Error:', error));
    
});