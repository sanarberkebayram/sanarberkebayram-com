import BlackCard from "../components/BlackCard";
import DuoColorButton from "../components/DuoColorButton";
import { useRef } from "react";

function ChatIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-5 w-5"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
    )
}

function GithubIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
    )
}

function EmailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    )
}


function LinkedInIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
    )
}


function ContactMiniButton({ insider, callUrl }) {
    return (
        <div
            onClick={() => {
                window.open(callUrl, "_blank")
            }}
            className="fill-white hover:fill-black stroke-white hover:stroke-black inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#ffffff]/20 bg-[#0a0a0a] shadow-sm h-9 w-9 hover:scale-110 transition-transform hover:bg-[#ffffff] cursor-pointer">
            {insider && insider}
        </div>
    )
}

const handleClick = (url) => {
    window.location.href = url;
};

export default function ContactSection() {
    const formRef = useRef(null);
    return (
        <section id="contact" className="scroll-mt-16 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4 text-white">Contact</h2>
                <p className="text-[#a3a3a3] mb-12 max-w-2xl">
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <BlackCard>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Lets Contact</h3>
                            <p className="text-[#a3a3a3]">Im always open to hearing about new projects and opportunities. Whether its a full-time opportunity, a freelance project, or a technical consultation, please contact me.</p>
                            <div className="shrink-0 bg-border h-[1px] w-full bg-[#ffffff]/10"></div>
                            <div className="space-y-6 flex flex-wrap gap-4">
                                {/* Buttons*/}
                                <ContactMiniButton insider={LinkedInIcon()} callUrl="https://www.linkedin.com/in/sanar-berke-bayram-4107b212b/" />
                                <ContactMiniButton insider={GithubIcon()} callUrl="https://github.com/sanarberkebayram" />
                                <ContactMiniButton insider={EmailIcon()} callUrl="mailto:sanarberkebayram@gmail.com?subject=From Website" />
                            </div>
                        </div>
                    </BlackCard>
                    <BlackCard>
                        <form
                            className="space-y-6"
                            ref={formRef}
                            action="https://formsubmit.co/2660bb2a25994e4b6925529bf89c70e1"
                            method="POST"
                        >
                            <h3 className="text-2xl font-semibold">Send DM</h3>
                            <input type="email" name="email" placeholder="enter your email*" className="w-full border-1 border-white/10 rounded p-2" required />
                            <textarea type="text" name="message" placeholder="enter your message*" maxLength={100} className="w-full resize-none border-1 border-white/10 p-2 rounded" required />
                            <DuoColorButton title="Submit" renderDark onClick={() => formRef.current.requestSubmit()} />
                        </form>
                    </BlackCard>
                </div>
            </div>
        </section>

    )
}
