"use client";

import React, { useState } from "react";

export default function Carousel({ items }) {
    // 현재 보여지는 아이템의 인덱스
    const [index, setIndex] = useState(0);
    // 페이드 애니메이션 상태
    const [fade, setFade] = useState(false);

    // 인덱스 변경 시 페이드 효과 적용
    const changeIndex = (newIndex) => {
        setFade(true); // 페이드 아웃 시작
        setTimeout(() => {
            setIndex(newIndex); // 인덱스 변경
            setFade(false);     // 페이드 인 시작
        }, 200); // 0.2초 후 인덱스 변경
    };

    // 이전/다음 아이템으로 이동
    const prev = () => changeIndex(index === 0 ? items.length - 1 : index - 1);
    const next = () => changeIndex(index === items.length - 1 ? 0 : index + 1);

    return (
        <div className="flex items-center justify-center">
            {/* 캐러셀 컨테이너 */}
            <div className="flex w-full h-[250px] items-center justify-between bg-white border border-gray-300">
                {/* 왼쪽(이전) 버튼 */}
                <button
                    onClick={prev}
                    className="px-6 py-2 text-3xl text-gray-500 hover:text-gray-800 transition-colors"
                >
                    {"<"}
                </button>
                {/* 캐러셀 아이템 영역 (페이드 효과 적용) */}
                <div
                    className={`flex-1 text-center text-5xl font-semibold transition-opacity duration-200 ${fade ? "opacity-0" : "opacity-100"}`}
                >
                    {items[index]}
                </div>
                {/* 오른쪽(다음) 버튼 */}
                <button
                    onClick={next}
                    className="px-6 py-2 text-3xl text-gray-500 hover:text-gray-800 transition-colors"
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}
