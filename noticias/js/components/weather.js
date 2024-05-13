class Clima extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {   
       this.innerHTML = `       
        <div class="climaComponent">
            <img src="${this.attributes.condition_icon.value}" alt="${this.attributes.text.value}"/>
            <div class="location"> ${this.attributes.location.value}</div>
            <div class="temp">${this.attributes.temp_c.value} ºC</div>
            <div class="text">${this.attributes.text.value}</div>
            <div class="wind">${this.attributes.viento.value} Kmh.</div>
        </div>
        `
    }
  }
  
  window.customElements.define('clima-actual', Clima);
