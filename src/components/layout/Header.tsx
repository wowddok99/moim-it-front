import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
    return (
        <div className="flex items-center justify-between px-[120px] border-b border-b-gray-100">
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
                <AiOutlineMenu className="text-[25px] cursor-pointer" />
            </div>
        </div>
    );
}