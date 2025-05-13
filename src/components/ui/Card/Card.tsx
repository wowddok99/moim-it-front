import React, { ReactNode } from "react";

interface CardProps {
    className?: string;
    children: ReactNode;
}

export default function Card({ className = "", children }: CardProps) {
    return (
        <div
            className={`
                flex flex-col
                w-full h-[412.5px]
                rounded-[15px]
                bg-white
                shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]
                ${className}
            `}
        >
            {children}
        </div>
    );
}
