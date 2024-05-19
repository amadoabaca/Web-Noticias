class Noticia extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {   
     this.innerHTML = `<div 
        class="noticia_img">
      <img 
      src="${this.attributes.image_source.value}"
      alt="${this.attributes.image_alt.value}">
      </div>
      <div 
        class="noticia_cuerpo">
        <h1 
          class="titulo_noticia">${this.attributes.titulo.value}</h1>
          <p>${this.attributes.cuerpo.value}</p>
          <p>${this.attributes.publishedAt.value.split("T")[0]}</p>
      </div>`
  }

}

window.customElements.define('my-news', Noticia);
