import {useEffect, useState} from "react";
import {type BannerMode, defaultBannerMode} from "./components/Types.ts";
import {BannerSlider} from "./components/BannerSlider.tsx";
import {BannerStatic} from "./components/BannerStatic.tsx";

export const BannerWidget = () => {
    console.log('BannerWidget start', '')
    const [slides, setSlides] = useState<any[]>([]);
    const [mode, setMode] = useState<BannerMode>(defaultBannerMode);

    useEffect(() => {
        const container = document.getElementById("home-banner");
        if (!container) return;

        const rawData = container.getAttribute("data-banner");
        if (!rawData) return;

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

    if (currentMode === "slider") {
        return <BannerSlider slides={slides} aspectRatio={aspectRatio} />;
    }

    return <BannerStatic slides={slides} aspectRatio={aspectRatio} />;
};

