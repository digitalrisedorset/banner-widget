import { createRoot } from "react-dom/client";
import {UspWidget} from "./UspWidget.tsx";
import { uspStyles } from "./components/styles/usp.styles";
import {injectStyles} from "./lib/style.ts";

export function mountWidget(hostElement: HTMLElement) {
    // Create shadow DOM
    const shadow =
        hostElement.shadowRoot || hostElement.attachShadow({ mode: "open" });

    for (const css of uspStyles) {
        injectStyles(shadow, css);
    }

    // Create React root inside shadow
    const root = createRoot(shadow);
    root.render(<UspWidget />);
}
