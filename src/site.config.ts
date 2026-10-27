export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  description: string;
  author: string;
  locale: string;
  ogType: "website" | "article";
  ogImage: string;
  ogImageAlt: string;
  twitterCard: "summary_large_image" | "summary";
  twitterSite?: string;
  twitterCreator?: string;
}

export const siteConfig: SiteConfig = {
  siteName: "Aetherion Studio",
  siteUrl: "https://aetherion.example.com",
  defaultTitle: "Aetherion: Architecture & Spatial Design",
  description:
    "Architects of inspirational environments. Aetherion Studio weaves raw stone, warm timber, and sculpted daylight into enduring residential, cultural, and hospitality sanctuaries.",
  author: "Aetherion Studio",
  locale: "en_US",
  ogType: "website",
  ogImage: "/images/hero-main.jpg",
  ogImageAlt:
    "Contemporary cantilevered timber and concrete villa in a landscaped garden by Aetherion Studio",
  twitterCard: "summary_large_image",
  twitterSite: "@aetherionstudio",
  twitterCreator: "@aetherionstudio",
};

export default siteConfig;
