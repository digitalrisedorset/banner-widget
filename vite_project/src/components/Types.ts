export interface NavigationProps {
    current: number;
    total: number;
    onChange: (index: number) => void;
}

export interface BannerSliderProps {
    slides:  BannerSlide[];
    config: BannerConfig;
}

export interface BannerStaticProps {
    slides:  BannerSlide[];
    config: BannerConfig;
}

export interface BannerSlide {
    image: {
        src: string;
        srcset?: string;
        alt?: string;
        focalPoint?: {
            x: number; // 0 → far left, 1 → far right
            y: number; // 0 → top, 1 → bottom
        };
    };
    title?:BannerTitle;
    subtitle?:string;
    cta?:string;
}

export interface BannerTitle {
    text: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    color?: string;
    background?: string;
    align?: "left" | "center" | "right";
}

export interface BannerSlideProps {
    slide: BannerSlide;
    isActive: boolean;
    tileMode: boolean
}

export type BannerModeValue = "static" | "slider" | "none";

export interface BannerConfig {
    mode: BannerMode;
    height: string
}

export interface BannerMode {
    desktop: BannerModeValue;
    tablet: BannerModeValue;
    mobile: BannerModeValue;
}

export const defaultBannerConfig: BannerConfig = {
    mode: {
        desktop: "static",
        tablet: "slider",
        mobile: "slider"
    },
    height: "400px"
};