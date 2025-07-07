import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Terms() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleAccept = () => {
    navigate("/profile");
  };

  const handleDecline = () => {
    navigate("/");
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
        <h1 className="text-lg font-medium">Terms & Conditions</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6">
        <div className="max-w-sm w-full text-center space-y-8">
          {/* Main Text */}
          <p className="text-gray-800 text-base leading-relaxed">
            You must accept the terms and conditions before using this
            application.
          </p>

          {/* Links */}
          <div className="space-y-4">
            <a
              href="#"
              className="block text-payment text-base font-medium hover:underline"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="block text-payment text-base font-medium hover:underline"
            >
              Privacy Policy
            </a>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-8">
            <Button
              onClick={handleAccept}
              className="h-12 bg-payment hover:bg-payment/90 text-white font-medium text-base rounded-full"
            >
              Accept
            </Button>
            <Button
              onClick={handleDecline}
              className="h-12 bg-payment hover:bg-payment/90 text-white font-medium text-base rounded-full"
            >
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
