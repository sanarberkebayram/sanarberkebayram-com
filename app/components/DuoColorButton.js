export default function DuoColorButton({ title, onClick, renderDark }) {
    const light = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#fafafa] text-[#171717] shadow hover:bg-[#fafafa]/90 h-10 rounded-md group relative overflow-hidden px-8 z-10";
    const dark = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#262626] bg-[#0a0a0a] shadow-sm hover:bg-[#000000] h-10 rounded-md group relative overflow-hidden px-8 z-10 text-white";
    return (
        <button onClick={onClick} className={`cursor-pointer ${renderDark ? dark : light}`}>
            <span className="relative z-10">
                {title}
            </span>
            <div className="absolute inset-0 bg-[#fafafa33] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </button>
    )
}
