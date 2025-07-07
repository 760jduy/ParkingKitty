import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ParkingDuration() {
  const navigate = useNavigate();
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleBack = () => {
    navigate("/zone");
  };

  const handleContinue = () => {
    if (hours || minutes) {
      navigate("/payment");
    }
  };

  // Calculate price based on hours and minutes
  const calculatePrice = () => {
    const hoursNum = parseInt(hours) || 0;
    const minutesNum = parseInt(minutes) || 0;
    const totalHours = hoursNum + minutesNum / 60;
    const price = totalHours * 4.2;
    return price.toFixed(2);
  };

  const generateHours = () => {
    return Array.from({ length: 25 }, (_, i) => ({
      value: i.toString(),
      label: i === 0 ? "0 hours" : i === 1 ? "1 hour" : `${i} hours`,
    }));
  };

  const generateMinutes = () => {
    const intervals = [0, 15, 30, 45];
    return intervals.map((min) => ({
      value: min.toString(),
      label: min === 0 ? "0 minutes" : `${min} minutes`,
    }));
  };

  const isFormValid = hours !== "" || minutes !== "";
  const totalPrice = calculatePrice();

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
        <h1 className="text-lg font-medium">Select Parking Duration</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col min-h-[calc(100vh-64px)] p-6">
        <div className="max-w-sm w-full mx-auto space-y-6 flex-1">
          {/* Instructions */}
          <div className="text-center">
            <p className="text-gray-700 text-base leading-relaxed">
              How long would you like to park?
            </p>
          </div>

          {/* Duration Selection */}
          <div className="space-y-4">
            {/* Hours */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Hours
              </Label>
              <Select value={hours} onValueChange={setHours}>
                <SelectTrigger className="h-12 text-base border-gray-300 focus:border-payment focus:ring-payment">
                  <SelectValue placeholder="Select hours" />
                </SelectTrigger>
                <SelectContent>
                  {generateHours().map((hour) => (
                    <SelectItem key={hour.value} value={hour.value}>
                      {hour.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Minutes */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Minutes
              </Label>
              <Select value={minutes} onValueChange={setMinutes}>
                <SelectTrigger className="h-12 text-base border-gray-300 focus:border-payment focus:ring-payment">
                  <SelectValue placeholder="Select minutes" />
                </SelectTrigger>
                <SelectContent>
                  {generateMinutes().map((minute) => (
                    <SelectItem key={minute.value} value={minute.value}>
                      {minute.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price Display */}
          {isFormValid && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">
                  {hours && parseInt(hours) > 0 && `${hours}h `}
                  {minutes && parseInt(minutes) > 0 && `${minutes}m`}
                  {(!hours || parseInt(hours) === 0) &&
                    (!minutes || parseInt(minutes) === 0) &&
                    "0m"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rate:</span>
                <span className="text-sm text-gray-500">$4.20 per hour</span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center">
                <span className="font-medium text-lg">Total:</span>
                <span className="font-bold text-xl text-payment">
                  ${totalPrice}
                </span>
              </div>
            </div>
          )}

          {/* Info Message */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              You can extend your parking time from the app if needed.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-sm w-full mx-auto">
          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            disabled={!isFormValid}
            className="w-full h-12 bg-payment hover:bg-payment/90 disabled:bg-gray-300 text-white font-medium text-base rounded-full"
          >
            Continue to Payment
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
