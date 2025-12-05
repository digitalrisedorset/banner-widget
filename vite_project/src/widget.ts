import { mountWidget } from "./mountWidget";

class BannerWidget extends HTMLElement {
    connectedCallback() {
        mountWidget(this);
    }
}

customElements.define("banner-widget", BannerWidget);
