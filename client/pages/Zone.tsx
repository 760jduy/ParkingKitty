import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Info, ChevronRight } from "lucide-react";

export default function Zone() {
  const navigate = useNavigate();
  const [zoneNumber, setZoneNumber] = useState("");

  const handleBack = () => {
    navigate("/profile");
  };

  const handleContinue = () => {
    if (zoneNumber.trim()) {
      navigate("/duration");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-700 text-white p-4 flex items-center">
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-8 h-8 rounded-full mr-4 hover:bg-gray-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-medium">Enter Zone</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6">
        <div className="max-w-sm w-full space-y-6">
          {/* Instruction Text */}
          <p className="text-gray-700 text-base leading-relaxed">
            Enter the zone number posted at this location:
          </p>

          {/* Zone Number Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Zone Number"
              value={zoneNumber}
              onChange={(e) => setZoneNumber(e.target.value)}
              className="h-12 text-base pr-12 border-gray-300 focus:border-payment focus:ring-payment"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
              <Info className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            disabled={!zoneNumber.trim()}
            className="w-full h-12 bg-payment hover:bg-payment/90 disabled:bg-gray-300 text-white font-medium text-base rounded-full mt-8"
          >
            Continue
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Disclaimer Text */}
          <p className="text-gray-600 text-sm text-center leading-relaxed pt-4">
            By continuing you agree you are abiding to all zone signage on
            restrictions and rules.
          </p>
        </div>
      </div>
    </div>
  );
}
