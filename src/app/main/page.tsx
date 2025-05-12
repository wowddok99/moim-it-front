"use client";

import Header from "@/components/layout/Header";

export default function Main() {
    const items = [1, 2, 3, 4];
    return (
        <div className="flex flex-col min-h-screen min-w-[1200px]">
            {/* 헤더 */}
            <Header />

            {/* 콘텐츠 영역 */}
            <div className="flex gap-[60px] px-[150px] min-h-screen bg-[#F7F7F7]">
                <div className="flex flex-col w-[65%] gap-[22px]">
                    <div className="flex flex-col w-[100%] h-[165px] mt-[6px] bg-white rounded-[15px] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                    </div>
                    <div className="flex flex-col w-[100%] h-[240px] mt-[6px] bg-white rounded-[15px] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                    </div>
                </div>
                <div className="flex flex-col w-[35%] gap-[22px]">
                    <div className="flex flex-col w-[100%] h-[433.2px] mt-[6px] bg-white rounded-[15px] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                    </div>
                </div>
            </div>

        </div>
    );
}
