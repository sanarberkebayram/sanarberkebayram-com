'use client';

import Image from "next/image";
import DuoColorButton from "../components/DuoColorButton";

export default function HeroSection() {
    return (
        <section id="home" className="min-h-[90vh] flex w-full items-center relative mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center"> {/* Grid Starts*/}
                <div className="cursor-target space-y-8 order-2 md:order-1">{/* Hero Text*/}
                    <div className="space-y-4 text-[#a3a3a3cc]">
                        <span className="text-5xl sm:text-3xl lg:text-5xl font-bold"> Sanar Berke Bayram</span>
                        <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">Senior Software Developer</p>
                    </div>
                    <p className="text-[#a3a3a3cc] text-lg text-muted-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">Focus on creating excellent digital experience and use modern network technologies to build scalable and user-friendly applications. With rich full-stack development experience, committed to creating excellent user experience and high-performance technical solutions. </p>
                    <div className="flex flex-wrap gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                        <span className="px-4 py-2 text-sm rounded-full bg-[#fafafa1a] text-[#fafafa] border border-[#fafafa33]">Gameplay</span>
                        <span className="px-4 py-2 text-sm rounded-full bg-[#fafafa1a] text-[#fafafa] border border-[#fafafa33]">Backend</span>
                        <span className="px-4 py-2 text-sm rounded-full bg-[#fafafa1a] text-[#fafafa] border border-[#fafafa33]">Frontend</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                        <DuoColorButton title="Contact"
                            onClick={() => {
                                const el = document.getElementById("contact");
                                el?.scrollIntoView({ behavior: "smooth" });
                            }}
                        />
                        <DuoColorButton title="View Projects" renderDark
                            onClick={() => {
                                const el = document.getElementById("work");
                                el?.scrollIntoView({ behavior: "smooth" });
                            }}
                        />
                    </div>
                </div>
                <div className="relative order-1 md:order-2"> {/* Profile Picture*/}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#fafafa33] to-[#fafafa0d] animate-pulse" />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#fafafa1a]/10 to-transparent" >
                            <Image width={320} height={320} alt="profile_picture" src="/images/pp.png" className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 w-full h-full object-cover rounded-2xl border-4 border-[#0a0a0a] shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
