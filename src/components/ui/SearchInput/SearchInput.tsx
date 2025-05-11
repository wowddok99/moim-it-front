import { FaMagnifyingGlass } from "react-icons/fa6";
export default function SearchInput({ placeholder = "검색어를 입력하세요", ...props }) {
    return (
        <div className="flex items-center px-3 border rounded-[15px] bg-white shadow-sm">
            <FaMagnifyingGlass className="text-gray-400 mr-2" />
            <input
                className="w-[350px] h-[37px] bg-transparent border-none outline-none placeholder:text-gray-300 text-[15px]"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}