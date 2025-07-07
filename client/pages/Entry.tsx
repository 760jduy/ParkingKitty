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
        <div className="relative">
          {/* WiFi/Signal Lines */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              <div className="w-6 h-3 border-2 border-payment rounded-t-full"></div>
              <div className="w-8 h-4 border-2 border-payment rounded-t-full"></div>
              <div className="w-6 h-3 border-2 border-payment rounded-t-full"></div>
            </div>
          </div>

          {/* Cat Face */}
          <div className="w-24 h-24 bg-payment rounded-full flex items-center justify-center relative">
            {/* Cat Ears */}
            <div className="absolute -top-3 left-3 w-6 h-6 bg-payment transform rotate-45 rounded-tl-lg"></div>
            <div className="absolute -top-3 right-3 w-6 h-6 bg-payment transform rotate-45 rounded-tr-lg"></div>

            {/* Cat Face Features */}
            <div className="text-white text-center">
              {/* Eyes */}
              <div className="flex justify-center space-x-3 mb-1">
                <div className="w-2 h-1 bg-white rounded-full"></div>
                <div className="w-2 h-1 bg-white rounded-full"></div>
              </div>

              {/* Nose */}
              <div className="w-1 h-1 bg-white rounded-full mx-auto mb-1"></div>

              {/* Mouth */}
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-1 border-b border-white transform -rotate-12"></div>
                <div className="w-2 h-1 border-b border-white transform rotate-12"></div>
              </div>

              {/* Tongue */}
              <div className="w-1 h-2 bg-white rounded-b-full mx-auto mt-1"></div>
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
