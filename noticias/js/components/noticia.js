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

  //getters y setters
  set cuerpo(value) {
    this.$cuerpo.innerHTML = value;
  }
  get titulo() {
    return this.$cuerpo.innerHTML;
  }
  set titulo(value) {
    this.$titulo.innerHTML = value;
  }
  get titulo() {
    return this.$titulo.innerHTML;
  }
  set image_source(value) {
    this.$image_source.innerHTML = value;
  }
  get image_source() {
    return this.$image_source.innerHTML;
  }

  set publishedAt(value) {
    this.$publishedAt.innerHTML = value;
  }
  get publishedAt() {
    return this.$publishedAt.innerHTML;
  }
}

window.customElements.define('my-news', Noticia);