'use client';

export default function BlackCard({ children })
{
    return (
        <div className="cursor-target rounded-xl border border-[#262626]
        bg-[#0a0a0a]  text-[#fafafa] shadow p-6 hover:shadow-lg
        transition-shadow">
            {children}
        </div>
    )
}
