import { useState } from "react";
import { BannerSlide } from "./BannerSlide.tsx";
import { NavigationDots } from "./NavigationDots.tsx";
import { NavigationArrows } from "./NavigationArrows.tsx";
import type {BannerSliderProps} from "./Types.ts";

export const BannerSlider = ({ slides, config }: BannerSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const ratio = config.mode.desktop || "16:7";
    const [w, h] = ratio.split(":").map(Number);
    const paddingTop = (h / w) * 100;

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <div style={{
                position: "relative",
                width: "100%",
                height: config.height,
                paddingTop: paddingTop + "%"
            }}>
                {slides.map((slide, i) => (
                    <BannerSlide
                        key={i}
                        slide={slide}
                        isActive={i === currentIndex}
                        tileMode={false}
                    />
                ))}
            </div>

            <NavigationDots
                current={currentIndex}
                total={slides.length}
                onChange={setCurrentIndex}
            />

            <NavigationArrows
                current={currentIndex}
                total={slides.length}
                onChange={setCurrentIndex}
            />
        </div>
    );
};
