import type { UspSlideProps } from "./Types";

export const UspSlide = ({ slide, isActive, tileMode }: UspSlideProps) => {
    const { text, backgroundColor, textColor } = slide;

    const stateClass = !tileMode
        ? isActive
            ? "uspSlide--active"
            : "uspSlide--inactive"
        : "";

    return (
        <div
            className={`uspBaseWrapper ${stateClass}`}
            style={{
                backgroundColor: backgroundColor ?? "transparent",
                color: textColor ?? "inherit",
            }}
        >
            {text}
        </div>
    );

};