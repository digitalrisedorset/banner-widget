import type {NavigationProps} from "./Types.ts";
import {arrowBtn, arrowsContainer} from "./NavigationArrows/style.ts";

export const NavigationArrows = ({ current, total, onChange }: NavigationProps) => {

    const prev = () => {
        const newIndex = current === 0 ? total - 1 : current - 1;
        onChange(newIndex);
    };

    const next = () => {
        const newIndex = current === total - 1 ? 0 : current + 1;
        onChange(newIndex);
    };

    return (
        <div style={arrowsContainer}>
            <button style={arrowBtn} onClick={prev}>‹</button>
            <button style={arrowBtn} onClick={next}>›</button>
        </div>
    );
};


