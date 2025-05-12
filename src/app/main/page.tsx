"use client";

import Header from "@/components/layout/Header";
import Card from "@/components/ui/Card/Card";

export default function Main() {
    const items = [1, 2, 3, 4];
    return (
        <div className="flex flex-col min-h-screen min-w-[1200px]">
            {/* 헤더 */}
            <Header />

            {/* 콘텐츠 영역 */}
            <div className="flex justify-center min-w-[1200px] gap-[55px] px-[150px] min-h-screen bg-[#F7F7F7]">
                {/* 좌측 카드 섹션 */}
                <Card className="mt-[20px]" />

                {/* 우측 카드 섹션 */}
                <Card className="mt-[20px]" />
            </div>
        </div>
    );
}
