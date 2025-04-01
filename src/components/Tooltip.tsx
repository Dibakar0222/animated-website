import { useState } from "react";

const Tooltip = ({ 
    text, 
    children 
}: {
    text: string,
    children: React.ReactNode
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div 
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}

            <div
                className={`absolute top-5 left-2/3 transform -translate-x-1/2 mb-2 w-max max-w-xs p-2 bg-gray-900 text-white text-sm rounded-md shadow-lg transition-opacity duration-300 ease-in-out font-general
                    ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                style={{ transition: "opacity 0.3s ease-in-out" }}
            >
                {text}
                
            </div>
        </div>
    );
};

export default Tooltip;
