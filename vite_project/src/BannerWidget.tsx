import {useEffect, useState} from "react";
import {
    type BannerConfig,
    type BannerSlide,
    defaultBannerConfig,
} from "./components/Types.ts";
import {BannerSlider} from "./components/BannerSlider.tsx";
import {BannerStatic} from "./components/BannerStatic.tsx";

export const BannerWidget = () => {
    const [slides, setSlides] = useState<BannerSlide[]>([]);
    const [bannerConfig, setBannerConfig] = useState<BannerConfig>(defaultBannerConfig);

    useEffect(() => {
        const container = document.getElementById("home-banner");
        if (!container) return;

        const rawData = container.getAttribute("data-banner");
        if (!rawData) return;

        try {
            const parsed = JSON.parse(rawData);
            setSlides(parsed.slides || []);
            setBannerConfig(parsed.settings || defaultBannerConfig)
        } catch (e) {
            console.error("Invalid JSON in data-banner", e);
        }
    }, []);

    if (slides.length === 0) return null;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const isTablet = window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches;

    let currentMode = bannerConfig.mode.desktop;

    if (isMobile) currentMode = bannerConfig.mode.mobile;
    else if (isTablet) currentMode = bannerConfig.mode.tablet;

    if (currentMode === "slider") {
        return <BannerSlider slides={slides} config={bannerConfig} />;
    }

    return <BannerStatic slides={slides} config={bannerConfig} />;
};

