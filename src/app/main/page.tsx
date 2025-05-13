"use client";

import Header from "@/components/layout/Header";
import { RiHome6Fill } from "react-icons/ri";
import { HiPencilAlt } from "react-icons/hi";
import Carousel from "@/components/ui/Carousel/Carousel";

export default function Main() {
    const carouselItems = [
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-full h-[300px] border-none bg-[#EFF5FF]">
                <div className="flex items-center justify-center gap-[30px]">
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex flex-col gap-[7px]">
                            <div className="flex flex-col gap-[5px] leading-none">
                                <div className="text-[32px] font-medium">취미도 친구도, 모임잇에서 한 번에!</div>
                                <div className="text-[32px] font-bold">모임잇에서 만나는 나만의 모임</div>
                            </div>
                            <div className="text-[15px] font-medium">지금 바로 새로운 모임을 찾아보세요</div>
                        </div>
                        <div className="flex gap-[10px]">
                            <div className="flex items-center justify-center h-[28px] gap-[5px] px-[8px] border-none rounded-[5px] bg-[#4a88e5] text-[13px] font-semibold text-white cursor-pointer">
                                <RiHome6Fill className="text-white"/>
                                <span className="text-[12px]">모임 찾기</span>
                            </div>
                            <div className="flex items-center justify-center h-[28px] gap-[5px] px-[8px] border-none rounded-[5px] bg-[#4a88e5] text-[13px] font-semibold text-white cursor-pointer">
                                <HiPencilAlt className="text-white"/>
                                <span className="text-[12px]">모임 등록하기</span>
                            </div>
                        </div>
                    </div>
                    <img src="/images/banners/people-banner.png" alt="" width={"300px"} className="mb-[32px]"/>
                </div>
            </div>
        </div>
    ]

    return (
        <div className="flex flex-col min-h-screen min-w-[1200px]">
            {/* 헤더 */}
            <Header />

            {/* 캐러셀 */}
            <Carousel items={carouselItems}/>

            {/* 콘텐츠 영역 */}
            <div className="flex justify-center min-w-[1200px] gap-[55px] px-[150px] min-h-screen bg-white">

            </div>
        </div>
    );
}
