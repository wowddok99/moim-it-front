interface MainMeetingCardProps {
    title: string; // 행사 제목
    host: string; // 행사 주최자(호스트) 이름
    price: string; // 행사 가격(무료/유료 등)
}

export default function MainMeetingCard({ title, host, price }: MainMeetingCardProps) {
    return (
        <div className="flex flex-col gap-[10px]">
            {/* 행사 대표 이미지 또는 사진 영역 */}
            <div
                className="
                    flex flex-col
                    w-[320px] h-[200px]
                    px-[25px] py-[25px]
                    border rounded-[15px]
                    cursor-pointer
                    transition duration-300 transform
                    hover:shadow-lg hover:-translate-y-2
                "
            ></div>

            {/* 행사 정보 영역 */}
            <div className="flex flex-col">
                <div className="font-normal text-black cursor-pointer">{title}</div>
                <div className="flex flex-col mt-[5px]">
                    <div className="font-light text-gray-500">{host}</div>
                    <div className="font-light text-black">{price}</div>
                </div>
            </div>
        </div>
    );
}
