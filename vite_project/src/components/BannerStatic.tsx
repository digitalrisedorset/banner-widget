// components/BannerStatic.tsx
import { BannerSlide } from "./BannerSlide.tsx";

interface BannerStaticProps {
    slides: any[];
    aspectRatio: {
        desktop?: string;
        tablet?: string;
        mobile?: string;
    };
}

export const BannerStatic = ({ slides, aspectRatio }: BannerStaticProps) => {
    // Breakpoints
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const isTablet = window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches;

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: isMobile
                    ? "1fr"
                    : isTablet
                        ? "repeat(2, 1fr)"
                        : "repeat(3, 1fr)",
                gap: "20px",
                width: "100%"
            }}
        >
            {slides.map((slide, index) => {
                const ratio = isMobile
                    ? aspectRatio.mobile || "3:4"
                    : isTablet
                        ? aspectRatio.tablet || "4:3"
                        : aspectRatio.desktop || "16:7";

                const [w, h] = ratio.split(":").map(Number);
                const paddingTop = (h / w) * 100;

                return (
                    <div
                        key={index}
                        style={{
                            position: "relative",
                            width: "100%",
                            paddingTop: paddingTop + "%"
                        }}
                    >
                        <BannerSlide slide={slide} isActive={true} tileMode={true} />
                    </div>
                );
            })}
        </div>
    );
};
