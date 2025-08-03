/**
 * Application-wide constants for better maintainability and type safety
 */

// External URLs
export const EXTERNAL_URLS = {
  GITHUB: "https://github.com/Chirag-kumar-dev",
  LINKEDIN: "https://www.linkedin.com/in/k2chirag/",
  LEETCODE: "",
  CODEFORCES: "",
  PORTFOLIO: "https://chiragKumar.vercel.app",
  COLOURED_ICONS: "https://coloured-icons.vercel.app",
  VEMBRIC: "https://vembric.vercel.app",
  // Company URLs
  Stryker: "https://www.stryker.com/",
  Sourcefuse: "https://www.sourcefuse.com/",
} as const;

// Contact information
export const CONTACT = {
  EMAIL: "chigsofficial@gmail.com",
  NAME: "Chirag Kumar",
} as const;

// Asset paths
export const ASSET_PATHS = {
  RESUME: "/resume-chirag-kumar.pdf",
  LOGOS: {
    Stryker: "/stryker-logo.svg",
    Sourcefuse: "https://www.sourcefuse.com/wp-content/uploads/2023/04/logo.svg",
    PORTFOLIO: "/portfolio.png", // Large version for Open Graph
    PORTFOLIO_AVATAR: "/favicon-96x96.png", // Optimized small version for avatars
    COLOURED_ICONS: "/ci.svg",
    VEMBRIC: "/vembric.svg",
  },
} as const;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};