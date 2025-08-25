'use client';

import Image from "next/image";
import SpotlightCard from "../components/SpotlightCard";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Video from "yet-another-react-lightbox/plugins/video";

function WorkCardRibbon({ text }) {
    return (
        <div className="bg-[#afafaf] px-2 py-1 rounded-md text-xs font-bold hover:bg-black text-black hover:text-white transition-colors duration-300">
            {text}
        </div>
    )
}

function WorkCard({ url, image, video, title, text, ribbons, color }) {
    const [open, setOpen] = useState(false);

    return (
        <SpotlightCard spotlightColor={color}>
            {/* Image Goes Here*/}
            {(image != null || video != null) &&
                <div className="flex gap-2 w-full p-20 relative mb-4 rounded-md overflow-hidden bg-gray-500">
                    {image &&
                        <Image
                            alt='work image'
                            fill
                            className="object-cover"
                            src={image}
                        />
                    }
                    {video &&
                        <div className="absolute inset-0">
                            <video
                                src={video}
                                controls
                                autoPlay
                                playsInline
                                loop
                                muted
                                className="w-full h-full object-cover"
                            />
                        </div>
                    }
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={[
                            { src: image, width: 100, height: 100 }
                        ]}
                        plugins={[Slideshow, Video]}
                    />
                </div>
            }
            <h3 className="text-xl font-semibold mb-2">{title} {url && <a href={url} className="text-sm text-white/50">Link</a>}</h3>
            <p className="text-[#a3a3a3] mb-4">{text}</p>
            <div className="flex gap-2 flex-wrap">
                {ribbons && ribbons.map((item, i) => {
                    return <WorkCardRibbon key={i}
                        text={item}
                    />;
                })}
            </div>
        </SpotlightCard>
    )
}

const WorkData = [
    {
        title: "The Rabbit Project",
        text: "Blockchain based online MMORPG game.",
        ribbons: ["Unity", "NodeJS", "HTML5", "WebGL", "C#", "Solana"],
        video: "/videos/rabbit.mp4",
        color: "rgba(255, 165, 0, 0.55)",
    },
    {
        title: "SolRush",
        text: "Blockchain based multiplayer realtime racing game",
        ribbons: ["Unity", "NodeJS", "HTML5", "WebGL", "C#", "Solana"],
        image: "/images/solrush.png",
        color: "rgba(255, 0, 0, 0.55)",
    },
    {
        title: "WAY - Who Are You",
        text: "Open-source fast, robust & modular authentication system in C++",
        url: "https://github.com/sanarberkebayram/WAY",
        image: "/images/way.png",
        ribbons: ["C++"],
        color: "rgba(0, 255, 0, 0.55)",
    },
    {
        title: "DotAgent",
        text: "Open-source modular agent & orchestration system in C#",
        url: "https://github.com/sanarberkebayram/AgentDot",
        ribbons: ["Dotnet", "C#"],
        image: "/images/dot.png",
        color: "rgba(0, 0, 255, 0.55)",
    },
    {
        title: "Coffie King Idle",
        text: "Mobile Game",
        url: "https://www.taptap.io/app/305022",
        image: "/images/coffee.png",
        ribbons: ["Unity", "C#"],
        color: "rgba(0, 255, 0, 0.55)",
    },
    {
        title: "Button Fever",
        text: "Mobile Game",
        url: "https://button-fever.en.softonic.com/android?ex=RAMP-3406.0&rex=true",
        image: "/images/buttonfever.png",
        ribbons: ["Unity", "C#"],
        color: "rgba(255, 255, 100, 0.55)",
    },
    {
        title: "Rat Rush",
        text: "Mobile Game",
        ribbons: ["Unity", "C#"],
        image: "/images/ratrush.png",
        color: "rgba(0, 165, 255, 0.55)",
    },
    {
        title: "Demolish Factory",
        text: "Mobile Game",
        url: "https://www.taptap.io/app/288869",
        image: "/images/demolish.png",
        ribbons: ["Unity", "C#"],
        color: "rgba(100, 100, 100, 0.55)",
    },
    {
        title: "Dessert Matchup",
        text: "Mobile Game",
        url: "https://www.taptap.io/app/327365",
        image: "/images/dessert.png",
        ribbons: ["Unity", "C#"],
        color: "rgba(160, 32, 240, 0.35)",
    },

]

export default function WorkSection() {
    return (
        <section id="work" className="scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-[#fafafa]">Work</h2>
            <div className="grid lg:grid-cols-3 gap-8">
                {WorkData && WorkData.map((item, i) => {
                    return <WorkCard key={i}
                        url={item.url}
                        title={item.title}
                        text={item.text}
                        image={item.image}
                        video={item.video}
                        ribbons={item.ribbons}
                        color={item.color}
                    />
                })}
            </div>
        </section>
    )
}
