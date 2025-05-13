"use client";

import Header from "@/components/layout/Header";
import { RiHome6Fill } from "react-icons/ri";
import { HiPencilAlt } from "react-icons/hi";
import Carousel from "@/components/ui/Carousel/Carousel";
import MainMeetingCard from "@/components/ui/Card/MainMeetingCard";

export default function Main() {
    const carouselItems = [
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-full h-[400px] border-none bg-[#EFF5FF]">
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
                            <button className="flex items-center justify-center h-[28px] gap-[5px] px-[8px] border-none rounded-[5px] bg-[#4a88e5] text-[13px] font-semibold text-white cursor-pointer">
                                <RiHome6Fill className="text-white"/>
                                <span className="text-[12px]">모임 찾기</span>
                            </button>
                            <button className="flex items-center justify-center h-[28px] gap-[5px] px-[8px] border-none rounded-[5px] bg-[#4a88e5] text-[13px] font-semibold text-white cursor-pointer">
                                <HiPencilAlt className="text-white"/>
                                <span className="text-[12px]">모임 등록하기</span>
                            </button>
                        </div>
                    </div>
                    <img src="/images/banners/people-banner.png" alt="" width={"300px"} className="mb-[32px]"/>
                </div>
            </div>
        </div>
    ]

    const promotedMeetings = [
        { title: "5월 모임 A", host: "OOO 호스트", price: "무료" },
        { title: "5월 모임 B", host: "OOO 호스트", price: "무료" },
        { title: "5월 모임 C", host: "OOO 호스트", price: "무료" },
        { title: "5월 모임 D", host: "OOO 호스트", price: "무료" },
    ];

    return (
        <div className="flex flex-col min-h-screen min-w-[1200px]">
            {/* 헤더 */}
            <Header />

            {/* 캐러셀 */}
            <Carousel items={carouselItems}/>

            {/* 콘텐츠 영역 */}
            <div className="flex min-w-[1200px] min-h-screen justify-center gap-[55px] px-[300px] bg-white">
                {/* 적극 홍보 중인 행사 */}
                <div className="flex flex-col mt-[25px]">
                    <div className="text-[21px] font-semibold">호스트가 적극 홍보 중인 모임</div>
                    <div className="text-[17px] font-light text-gray-500 text-opacity-70">
                        지금 이 모임, 호스트가 열정적으로 홍보 중이에요!🙂
                    </div>
                    <div className="flex gap-[25px] pt-[15px]">
                        {promotedMeetings.map((meeting, idx) => (
                            <MainMeetingCard
                                key={idx}
                                title={meeting.title}
                                host={meeting.host}
                                price={meeting.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
