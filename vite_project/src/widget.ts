import { mountWidget } from "./mountWidget";

class UspWidget extends HTMLElement {
    connectedCallback() {
        console.log('mounted usp')
        mountWidget(this);
    }
}

customElements.define("usp-widget", UspWidget);
