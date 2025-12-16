import {useEffect, useState} from "react";
import {
    type UspConfig,
    type UspSlide,
    defaultUspConfig,
} from "./components/Types.ts";
import {UspStatic} from "./components/UspStatic.tsx";
import {UspSlider} from "./components/UspSlider.tsx";

export const UspWidget = () => {
    const [slides, setSlides] = useState<UspSlide[]>([]);
    const [uspConfig, setUspConfig] = useState<UspConfig>(defaultUspConfig);

    useEffect(() => {
        const container = document.getElementById("home-usp");
        if (!container) return;

        const rawData = container.getAttribute("data-usp");
        if (!rawData) return;

        try {
            const parsed = JSON.parse(rawData);
            setSlides(parsed.slides || []);
            setUspConfig(parsed.settings || defaultUspConfig)
        } catch (e) {
            console.error("Invalid JSON in data-usp", e);
        }
    }, []);

    if (slides.length === 0) return null;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const isTablet = window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches;

    let currentMode = uspConfig.mode.desktop;

    if (isMobile) currentMode = uspConfig.mode.mobile;
    else if (isTablet) currentMode = uspConfig.mode.tablet;

    if (currentMode === "slider") {
        return <UspSlider slides={slides} config={uspConfig} />;
    }

    return <UspStatic slides={slides} config={uspConfig} />;
};

