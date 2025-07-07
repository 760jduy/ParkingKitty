import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Entry() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4 text-white">
      <div className="flex flex-col items-center space-y-8 max-w-sm w-full">
        {/* Cat Logo */}
        <div className="relative mb-8">
          {/* WiFi Signal Lines */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <svg className="w-12 h-6" viewBox="0 0 48 24">
              <path
                d="M6 20 C6 14, 12 8, 24 8 C36 8, 42 14, 42 20"
                fill="none"
                stroke="#E91E8C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M12 18 C12 15, 16 12, 24 12 C32 12, 36 15, 36 18"
                fill="none"
                stroke="#E91E8C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M18 16 C18 14.5, 20 13, 24 13 C28 13, 30 14.5, 30 16"
                fill="none"
                stroke="#E91E8C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Cat Face - Complete SVG */}
          <svg className="w-24 h-24 mx-auto" viewBox="0 0 96 96">
            {/* Cat Head Circle */}
            <circle
              cx="48"
              cy="52"
              r="32"
              fill="white"
              stroke="#E91E8C"
              strokeWidth="4"
            />

            {/* Cat Ears */}
            <path
              d="M25 30 L35 15 L45 30 Z"
              fill="#E91E8C"
              stroke="#E91E8C"
              strokeWidth="2"
            />
            <path
              d="M51 30 L61 15 L71 30 Z"
              fill="#E91E8C"
              stroke="#E91E8C"
              strokeWidth="2"
            />

            {/* Inner Ears */}
            <path d="M29 28 L33 20 L37 28 Z" fill="white" />
            <path d="M59 28 L63 20 L67 28 Z" fill="white" />

            {/* Eyes - Happy closed curved lines */}
            <path
              d="M38 46 Q42 42 46 46"
              fill="none"
              stroke="#E91E8C"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M50 46 Q54 42 58 46"
              fill="none"
              stroke="#E91E8C"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Nose */}
            <path d="M46 52 L48 50 L50 52 L48 54 Z" fill="#E91E8C" />

            {/* Mouth - Happy smile */}
            <path
              d="M42 58 Q48 62 54 58"
              fill="none"
              stroke="#E91E8C"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Tongue */}
            <ellipse cx="48" cy="64" rx="2" ry="4" fill="#E91E8C" />

            {/* Whiskers */}
            <line
              x1="28"
              y1="50"
              x2="36"
              y2="48"
              stroke="#E91E8C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="28"
              y1="56"
              x2="36"
              y2="56"
              stroke="#E91E8C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="60"
              y1="48"
              x2="68"
              y2="50"
              stroke="#E91E8C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="60"
              y1="56"
              x2="68"
              y2="56"
              stroke="#E91E8C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-wider">PARKING</h1>
          <h1 className="text-4xl font-bold tracking-wider">KITTY</h1>
        </div>

        {/* Get Started Button */}
        <Button
          onClick={handleGetStarted}
          className="w-full h-12 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 font-medium text-lg rounded-full transition-colors"
          variant="outline"
        >
          Get Started
        </Button>

        {/* Powered By */}
        <div className="text-center text-sm text-gray-400 space-y-1">
          <div>POWERED BY</div>
          <div className="text-white font-semibold text-lg">Passport</div>
        </div>
      </div>
    </div>
  );
}
