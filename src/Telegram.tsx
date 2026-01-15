import { useState } from 'react';

export default function Telegram() {
    const [hover, setHover] = useState(false);
    const fillColor = hover ? '#ca7865' : '#F2EEDE';
    const strokeColor = '#42210B';

    return (
        <svg
            width={50}
            height={53}
            viewBox="0 0 50 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <path
                d="M48.8402 1.00024L46.5602 9.02026L44.1703 8.34009L18.9603 23.9202L17.9003 39.3401L18.8802 42.03L11.4203 44.7502V29.9202L1.00024 23.9202L48.8402 1.00024Z"
                fill={fillColor}
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M46.5601 9.02026L34.3401 52.0002L26.5001 39.2502L18.8801 42.03L17.9001 39.3401L27.5001 24.9202L44.1701 8.34009L46.5601 9.02026Z"
                fill={fillColor}
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M1.00024 23.9202L48.8402 1.00024"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M34.3403 52.0002L46.5603 9.02026L48.8403 1.00024"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M1.00024 23.9202L11.4203 29.9202"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M34.3402 52.0002L26.5002 39.2502"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M11.4202 29.9202V44.7502"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M26.5002 39.2502L18.8802 42.03L11.4202 44.7502"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M18.9601 23.9202L17.9001 39.3401"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M27.5001 24.9202L17.9001 39.3401"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M18.9602 23.9202L44.1702 8.34009"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
            <path
                d="M27.5002 24.9202L44.1703 8.34009"
                stroke={strokeColor}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                className="transition-colors duration-300 ease-in-out"
            />
        </svg>
    )
}