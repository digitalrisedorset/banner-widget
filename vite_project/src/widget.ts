import { mountWidget } from "./mountWidget";

class BannerWidget extends HTMLElement {
    connectedCallback() {
        console.log('mounted banner')
        mountWidget(this);
    }
}

customElements.define("banner-widget", BannerWidget);
