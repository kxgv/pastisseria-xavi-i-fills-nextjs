import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function CollapseMenu() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="p-4">
            <button
                onClick={toggleCollapse}
                className="flex items-center justify-between px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition w:30"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  style={{ width: "200px", height: "20px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                {isCollapsed ? (
                    <ChevronDownIcon className="w-5 h-5" />
                ) : (
                    <ChevronUpIcon className="w-5 h-5" />
                )}
            </button>
            {!isCollapsed && (
                <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                    <ul className="text-[#ab6b56]">
                        <li>a</li>
                        <li>b</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
