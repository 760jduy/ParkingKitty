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
        <div className="relative mb-4">
          {/* WiFi Signal Lines */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <svg className="w-16 h-8" viewBox="0 0 64 32">
              <path
                d="M8 24 C8 16, 16 8, 32 8 C48 8, 56 16, 56 24"
                fill="none"
                stroke="#E91E8C"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M16 22 C16 18, 22 14, 32 14 C42 14, 48 18, 48 22"
                fill="none"
                stroke="#E91E8C"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M24 20 C24 18, 26 16, 32 16 C38 16, 40 18, 40 20"
                fill="none"
                stroke="#E91E8C"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Cat Face Container */}
          <div className="relative w-28 h-28">
            {/* Main Cat Head */}
            <div className="w-28 h-28 bg-white rounded-full border-4 border-payment flex items-center justify-center relative">
              {/* Cat Ears */}
              <div className="absolute -top-2 left-6">
                <div className="w-8 h-10 bg-payment rounded-t-full transform -rotate-12"></div>
                <div className="absolute top-2 left-1 w-4 h-6 bg-white rounded-t-full"></div>
              </div>
              <div className="absolute -top-2 right-6">
                <div className="w-8 h-10 bg-payment rounded-t-full transform rotate-12"></div>
                <div className="absolute top-2 right-1 w-4 h-6 bg-white rounded-t-full"></div>
              </div>

              {/* Cat Face Features */}
              <div className="text-payment relative">
                {/* Eyes - happy closed eyes */}
                <div className="flex justify-center space-x-4 mb-2">
                  <svg className="w-3 h-2" viewBox="0 0 12 8">
                    <path
                      d="M2 6 Q6 2 10 6"
                      fill="none"
                      stroke="#E91E8C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg className="w-3 h-2" viewBox="0 0 12 8">
                    <path
                      d="M2 6 Q6 2 10 6"
                      fill="none"
                      stroke="#E91E8C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Nose */}
                <div className="w-2 h-2 bg-payment rounded-full mx-auto mb-1"></div>

                {/* Mouth - happy cat smile */}
                <div className="flex justify-center space-x-1 mb-1">
                  <svg className="w-3 h-2" viewBox="0 0 12 8">
                    <path
                      d="M2 2 Q6 6 10 2"
                      fill="none"
                      stroke="#E91E8C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Tongue */}
                <div className="w-2 h-3 bg-payment rounded-b-full mx-auto"></div>

                {/* Whiskers */}
                <div className="absolute left-2 top-4">
                  <div className="w-4 h-0.5 bg-payment rotate-12"></div>
                  <div className="w-4 h-0.5 bg-payment -rotate-12 mt-1"></div>
                </div>
                <div className="absolute right-2 top-4">
                  <div className="w-4 h-0.5 bg-payment -rotate-12"></div>
                  <div className="w-4 h-0.5 bg-payment rotate-12 mt-1"></div>
                </div>
              </div>
            </div>
          </div>
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
