import type { BannerSlideProps } from "./Types";
import { mapBg, mapCtaBg, mapPadding, mapRadius, mapSize } from "./BannerSlide/util";
import {
    slideWrapper,
    slideActive,
    slideImageBase,
    textOverlay,
    ctaBase
} from "./BannerSlide/style";

export const BannerSlide = ({ slide, isActive, tileMode }: BannerSlideProps) => {
    const { images, title, subtitle, cta } = slide;

    // Breakpoints
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const isTablet = window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches;

    // Image selection
    let chosen = images.desktop;
    if (isMobile && images.mobile) chosen = images.mobile;
    else if (isTablet && images.tablet) chosen = images.tablet;

    const src = chosen?.src;
    const focal = chosen?.focalPoint || { x: 0.5, y: 0.5 };

    const wrapperStyle: React.CSSProperties = tileMode
        ? {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
        : {
            ...slideWrapper,
            ...(isActive ? slideActive : {})
        };

    return (
        <div style={wrapperStyle}>
            <img
                src={src}
                alt={title?.text || ""}
                style={{
                    ...(tileMode
                        ? {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: `${focal.x * 100}% ${focal.y * 100}%`
                        }
                        : {
                            ...slideImageBase,
                            objectPosition: `${focal.x * 100}% ${focal.y * 100}%`
                        })
                }}
            />

            <div style={textOverlay}>
                {title?.text && (
                    <h2
                        style={{
                            fontSize: mapSize(title.size),
                            margin: 0,
                            background: mapBg(title.background),
                            padding: mapPadding(title.padding),
                            borderRadius: mapRadius(title.radius)
                        }}
                    >
                        {title.text}
                    </h2>
                )}

                {subtitle?.text && (
                    <p
                        style={{
                            fontSize: mapSize(subtitle.size),
                            margin: "10px 0 0",
                            background: mapBg(subtitle.background),
                            padding: mapPadding(subtitle.padding),
                            borderRadius: mapRadius(subtitle.radius)
                        }}
                    >
                        {subtitle.text}
                    </p>
                )}

                {cta?.label && (
                    <a
                        href={cta.url}
                        style={{
                            ...ctaBase,
                            background: mapCtaBg(cta.variant)
                        }}
                    >
                        {cta.label}
                    </a>
                )}
            </div>
        </div>
    );
};