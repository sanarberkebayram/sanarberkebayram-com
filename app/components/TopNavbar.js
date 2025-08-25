"use client";

import Image from "next/image"
import useScrollPosition from "../hooks/useScrollPosition";
import { useEffect, useState } from "react";
import { useIsSectionVisible } from "../hooks/useIsSectionVisible";
import ThemeToggleButton from "./ThemeToggleButton";

export default function TopNavbar() {
    const { x, y } = useScrollPosition();
    const [progress, setProgress] = useState(0);
    const isHomeVisible = useIsSectionVisible("home");
    const isAboutVisible = useIsSectionVisible("about");
    const isWorkVisible = useIsSectionVisible("work");
    const isBlogVisible = useIsSectionVisible("blog");
    const isContactVisible = useIsSectionVisible("contact");

    useEffect(() => {
        if (y > 400)
            setProgress(1.0);
        else
            setProgress(y / 400); // Max 2000 scroll
    }, [y, setProgress])

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 md:block hidden rounded-full  ${progress > 0 ? "cursor-target bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/30 shadow-lg" : "bg-transparent"}`}
            style={{ width: `${85 - 35 * progress}%` }}
        >
            <div className="w-full mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center"> {/* Icon */}
                    <div className="">
                        <div className="w-[36px] h-[36px]"></div>
                    </div>
                </div>

                <div className="flex items-center gap-x-8">
                    <a
                        className="text-sm font-medium transition-all duration-300 relative group text-zinc-900 dark:text-zinc-100 dark:drop-shadow-[0_0_8px_#e5e7eb]"
                        href="#home">home
                        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${isHomeVisible ? "w-4" : "w-0"}`} />
                    </a>
                    <a
                        className="text-sm font-medium transition-all duration-300 relative group text-zinc-900 dark:text-zinc-100 dark:drop-shadow-[0_0_8px_#e5e7eb]"
                        href="#about">about
                        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${isAboutVisible ? "w-4" : "w-0"}`} />
                    </a>
                    <a
                        className="text-sm font-medium transition-all duration-300 relative group text-zinc-900 dark:text-zinc-100 dark:drop-shadow-[0_0_8px_#e5e7eb]"
                        href="#work">work
                        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${isWorkVisible ? "w-4" : "w-0"}`} />
                    </a>
        {/*
                    <a
                        className="text-sm font-medium transition-all duration-300 relative group text-zinc-900 dark:text-zinc-100 dark:drop-shadow-[0_0_8px_#e5e7eb]"
                        href="#blog">blog
                        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${isBlogVisible ? "w-4" : "w-0"}`} />
                    </a>
            */ }
                    <a
                        className="text-sm font-medium transition-all duration-300 relative group text-zinc-900 dark:text-zinc-100 dark:drop-shadow-[0_0_8px_#e5e7eb]"
                        href="#contact">contact
                        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${isContactVisible ? "w-4" : "w-0"}`} />
                    </a>
                </div> {/* Buttons */}
                {/*<ThemeToggleButton /> */}
                <div className='w-9 h-9'></div>
            </div>
        </nav>
    )
}
