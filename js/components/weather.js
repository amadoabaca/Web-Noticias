class Clima extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {   
       this.innerHTML = `       
        <div class="climaComponent">
            
            <div class="location"> ${this.attributes.location.value}</div>
            <div class="temp">${this.attributes.temp_c.value} ºC</div>
            
            <div class="text">
            <img src="${this.attributes.condition_icon.value}" alt="${this.attributes.text.value}"/>
              ${this.attributes.text.value}
            </div>
            <div class="wind"><img src="../../assets/wind.png" alt="viento" /> ${this.attributes.viento.value} Kmh.</div>
        </div>
        `
    }
  }
  
  window.customElements.define('clima-actual', Clima);
