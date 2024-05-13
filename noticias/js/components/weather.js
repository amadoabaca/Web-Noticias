class Clima extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {   
       this.innerHTML = `       
        <div class="iconoClima">
            <img src="${this.attributes.condition_icon.value}" alt="${this.attributes.text.value}"/>
            <div class="">${this.attributes.text.value}</div>
            <div class="">Ciudad: ${this.attributes.location.value}</div>
            <div class="">T.: ${this.attributes.temp_c.value} ºC</div>
            <div class="">Hum.:${this.attributes.humidity.value} %</div>
            <div class="">Viento: ${this.attributes.viento.value} Kmh.</div>
        </div>
        `
    }
  }
  
  window.customElements.define('clima-actual', Clima);