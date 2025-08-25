'use client';
import BlackCard from "../components/BlackCard";
import SpotlightCard from "../components/SpotlightCard";

export default function AboutSection() {
    return (
        <section id="about" className="scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-[#fafafa]">About Me</h2>
            <div className="grid lg:grid-cols-3 gap-8">
                <BlackCard>
                    <h3 className="text-xl font-semibold mb-4">Backend</h3>
                    <p className="text-[#a3a3a3]">My backend expertise spans 3 years in blockchain and fintech, where I delivered secure, scalable systems and even developed the world’s first online multiplayer real-time blockchain racing game.</p>
                </BlackCard>
                <BlackCard>
                    <h3 className="text-xl font-semibold mb-4">Game</h3>
                    <p className="text-[#a3a3a3]">I’m a game creator with a strong focus on real-time rendering and networking. Over the past 5 years in game development—with a mobile-heavy portfolio—I’ve built projects that have reached over 65 million downloads worldwide.</p>
                </BlackCard>
                <BlackCard>
                    <h3 className="text-xl font-semibold mb-4">Tools & Techonologies</h3>
                    <ul className="text-[#a3a3a3]"> I work across the stack with a focus on performance, scalability, and real-time interaction.</ul>
                    <li className="text-[#a3a3a3]"> C#, C++, Python, JavaScript, and TypeScript – advanced-level proficiency. </li>
                    <li className="text-[#a3a3a3]"> Game Engines: Unity (primary) and PixiJS for 2D/HTML5 projects. </li>
                    <li className="text-[#a3a3a3]"> Frontend: Next.js for modern, high-performance web applications. </li>
                    <li className="text-[#a3a3a3]"> Backend: Expertise in blockchain, fintech, and real-time networking architectures. </li>
                </BlackCard>
            </div>
        </section>
    )
}
