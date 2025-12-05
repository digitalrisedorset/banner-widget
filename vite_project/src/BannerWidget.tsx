import {useEffect, useState} from "react";
import {type BannerMode, defaultBannerMode} from "./components/Types.ts";
import {BannerSlide} from "./components/BannerSlide.tsx";
import {NavigationDots} from "./components/NavigationDots.tsx";
import {NavigationArrows} from "./components/NavigationArrows.tsx";

export const BannerWidget = () => {
    const [slides, setSlides] = useState<any[]>([]);
    const [mode, setMode] = useState<BannerMode>(defaultBannerMode);
    //const [settings, setSettings] = useState<any>({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const container = document.getElementById("home-banner");
        if (!container) return;

        const rawData = container.getAttribute("data-banner");
        if (!rawData) return;

        console.log("Banner raw data:", rawData);

        try {
            const parsed = JSON.parse(rawData);
            setSlides(parsed.slides || []);
            setMode(parsed.mode || defaultBannerMode)
        } catch (e) {
            console.error("Invalid JSON in data-banner", e);
        }
    }, []);

    if (slides.length === 0) return null;

    // get aspect ratio from the FIRST slide (all slides MUST match)
    const aspectRatio = slides[0].aspectRatio || { desktop: "16:7" };

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const isTablet = window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches;

    let currentMode = mode.desktop;

    if (isMobile) currentMode = mode.mobile;
    else if (isTablet) currentMode = mode.tablet;

    const ratio = isMobile
        ? aspectRatio.mobile || "3:4"
        : isTablet
            ? aspectRatio.tablet || "4:3"
            : aspectRatio.desktop || "16:7";

    const [w, h] = ratio.split(":").map(Number);
    const paddingTop = (h / w) * 100;

    return (
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <div style={{
                position: "relative",
                width: "100%",
                paddingTop: paddingTop + "%"   // aspect ratio defines height
            }}>
                {slides.map((slide, i) => (
                    <BannerSlide
                        key={i}
                        slide={slide}
                        isActive={ currentMode === "slider" ? (i === currentIndex): (i==0) }
                    />
                ))}
            </div>

            {currentMode === "slider" && (
                <>
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
                </>
            )}
        </div>
    );
};

