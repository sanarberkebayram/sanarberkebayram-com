import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GridBackground from "./components/GridBackground";
import TopNavbar from "./components/TopNavbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Sanar Berke Bayram",
    description: "Portfolio Website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <GridBackground />
                <TopNavbar />
                {children}
            </body>
        </html>
    );
}
