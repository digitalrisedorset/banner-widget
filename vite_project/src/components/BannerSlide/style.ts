// components/BannerSlide/style.ts
/**
 * Wrapper for each slide (slider mode)
 */
export const slideWrapper: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    opacity: 0,
    transition: "opacity 0.7s ease",
    pointerEvents: "none"
};

/**
 * When slide is active
 */
export const slideActive: React.CSSProperties = {
    opacity: 1,
    pointerEvents: "auto"
};

/**
 * Main image style
 */
export const slideImageBase: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
    // objectPosition is dynamic
};

/**
 * Text overlay container
 */
export const textOverlay: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    padding: "10px"
};

/**
 * CTA base style
 */
export const ctaBase: React.CSSProperties = {
    display: "inline-block",
    marginTop: "20px",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600
    // background is dynamic via mapCtaBg
};
