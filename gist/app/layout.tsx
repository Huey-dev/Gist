import { inter } from "@/app/ui/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../app/theme";
import type { Metadata } from "next";
import "@/app/globals.css";
import siteMetadata from "../data/siteMetaData";
import Navigation from "../app/component/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} light: bg-slate-300 antialiased`}>
        {/* navbar */}
        <Navigation />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children} </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
