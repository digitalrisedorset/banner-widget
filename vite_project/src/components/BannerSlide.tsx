import type { BannerSlideProps } from "./Types";
import {
    slideWrapper,
    slideActive,
    slideImageBase
} from "./BannerSlide/style";

export const BannerSlide = ({ slide, isActive, tileMode }: BannerSlideProps) => {
    const { image, title } = slide;

    const focal = image?.focalPoint || { x: 0.5, y: 0.5 };

    const wrapperStyle: React.CSSProperties = tileMode
        ? {}
        : {
            ...slideWrapper,
            ...(isActive ? slideActive : {})
        };

    return (
        <div style={wrapperStyle}>
            <img
                src={image.src}
                srcSet={image.srcset}
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
        </div>
    );
};