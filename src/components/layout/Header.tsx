"use client";

import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return (
        <div className="flex min-w-[1200px] items-center justify-center gap-[150px] border-b border-b-gray-100">
            {/* 로고 */}
            <div className="flex gap-[15px] cursor-pointer">
                <div className="flex gap-[2px] text-[25px]">
                    <div className="font-semibold">Moim</div>
                    <div className="font-thin">It</div>
                </div>
            </div>

            {/* 메뉴 */}
            <div className="flex gap-[25px] text-[18px] font-semibold">
                <div className="relative p-[23px]">
                    <span className="cursor-pointer">홈</span>
                    <div className="absolute left-1 right-1 bottom-[-1px] h-[2px] bg-black"></div>
                </div>
                <div className="px-[17px] py-[23px]">
                    <span className="cursor-pointer">카테고리</span>
                </div>
                <div className="px-[17px] py-[23px]">
                    <span className="cursor-pointer">모임 캘린더</span>
                </div>
                <div className="px-[17px] py-[23px]">
                    <span className="cursor-pointer">모임 맵</span>
                </div>
                <div className="px-[17px] py-[23px]">
                    <span className="cursor-pointer">무료 모임</span>
                </div>
                <div className="px-[17px] py-[23px]">
                    <span className="cursor-pointer">유료 모임</span>
                </div>
            </div>

            {/* 우측 아이콘 */}
            <div className="flex items-center gap-[22px]">
                <FaUserLarge className="text-[20px] cursor-pointer" />
                <FaMagnifyingGlass className="text-[20px] cursor-pointer" />
                <AiOutlineMenu className="text-[25px] cursor-pointer" onClick={() => setSidebarOpen(true)} />
            </div>

            {/* 오버레이 */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-black z-40 transition-opacity duration-300 ease-in-out ${
                    sidebarOpen ? "opacity-30 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* 사이드바 */}
            <div
                className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
                    sidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* 사이드바 내용 */}
            </div>
        </div>
    );
}
