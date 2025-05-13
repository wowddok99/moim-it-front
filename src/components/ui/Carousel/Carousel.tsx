"use client";

import React, { useState } from "react";

export default function Carousel({ items }) {
    // 현재 보여지는 아이템의 인덱스 상태
    const [index, setIndex] = useState(0);
    // 페이드 애니메이션 상태 (true면 투명, false면 불투명)
    const [fade, setFade] = useState(false);

     // 인덱스를 변경하며 페이드 애니메이션을 적용하는 함수
    const changeIndex = (newIndex) => {
        setFade(true); // 페이드 아웃 시작 (투명하게)
        setTimeout(() => {
            setIndex(newIndex); // 인덱스 변경
            setFade(false);     // 페이드 인 시작 (불투명하게)
        }, 200); // 0.2초 후 인덱스 변경
    };

     // 이전 아이템으로 이동
    const prev = () =>
        changeIndex(index === 0 ? items.length - 1 : index - 1);

    // 다음 아이템으로 이동
    const next = () =>
        changeIndex(index === items.length - 1 ? 0 : index + 1);

    return (
        <div className="relative flex">
            {/* 왼쪽(이전) 버튼 */}
            <button
                onClick={prev}
                className="absolute left-0 top-1/2 z-50 -translate-y-1/2 px-6 py-2 text-3xl text-gray-500 transition-colors hover:text-gray-800"
                aria-label="이전"
            >
                {"<"}
            </button>
            {/* 캐러셀 아이템 영역 (페이드 효과 적용) */}
            <div
                className={`flex-1 transition-opacity duration-200 ${fade ? "opacity-0" : "opacity-100"}`}
            >
                {items[index]}
            </div>
            {/* 오른쪽(다음) 버튼 */}
            <button
                onClick={next}
                className="absolute right-0 top-1/2 z-50 -translate-y-1/2 px-6 py-2 text-3xl text-gray-500 transition-colors hover:text-gray-800"
                aria-label="다음"
            >
                {">"}
            </button>
        </div>
    );
}
