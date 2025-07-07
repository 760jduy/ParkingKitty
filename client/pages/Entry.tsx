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
        <div className="mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8d40bec469b444f9a94ff6550deba60a%2F2ac7d840e24a4a9c8a750c3c4712cf8c?format=webp&width=800"
            alt="Parking Kitty Logo"
            className="w-24 h-24 mx-auto"
          />
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
