export interface NavigationProps {
    current: number;
    total: number;
    onChange: (index: number) => void;
}

export interface BannerSliderProps {
    slides: any[];
    aspectRatio: BannerMode;
}

export interface BannerSlideProps {
    slide: any;              // fully typed later
    isActive: boolean;       // true = visible, false = hidden
    tileMode: boolean
}

export type BannerModeValue = "static" | "slider" | "none";

export interface BannerMode {
    desktop: BannerModeValue;
    tablet: BannerModeValue;
    mobile: BannerModeValue;
}

export const defaultBannerMode: BannerMode = {
    desktop: "static",
    tablet: "slider",
    mobile: "slider"
};