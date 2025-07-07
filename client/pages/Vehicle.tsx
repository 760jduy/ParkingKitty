import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export default function Vehicle() {
  const navigate = useNavigate();
  const [licensePlate, setLicensePlate] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [vehicleNickname, setVehicleNickname] = useState("");

  const handleBack = () => {
    navigate("/profile");
  };

  const handleSave = () => {
    if (licensePlate.trim()) {
      // Store vehicle data
      const vehicleData = {
        licensePlate,
        stateProvince,
        vehicleNickname,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("parkingKittyVehicle", JSON.stringify(vehicleData));

      navigate("/zone");
    }
  };

  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const isFormValid = licensePlate.trim();

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
        <h1 className="text-lg font-medium">Add Vehicle</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col min-h-[calc(100vh-64px)] p-6">
        <div className="max-w-sm w-full mx-auto space-y-6 flex-1">
          {/* Instructions */}
          <div>
            <p className="text-gray-700 text-base leading-relaxed">
              Enter the license plate number (including stacked characters*) of
              the vehicle you want to add. Do not enter special characters.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* License Plate */}
            <div>
              <Input
                id="licensePlate"
                type="text"
                placeholder="Plate"
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                className="h-12 text-base border-gray-300 focus:border-payment focus:ring-payment"
                maxLength={10}
              />
            </div>

            {/* State/Province */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                State / Province
              </Label>
              <Select value={stateProvince} onValueChange={setStateProvince}>
                <SelectTrigger className="h-12 text-base border-gray-300 focus:border-payment focus:ring-payment">
                  <SelectValue placeholder="OR" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Vehicle Nickname */}
            <div>
              <Label
                htmlFor="vehicleNickname"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Vehicle Nickname
              </Label>
              <Input
                id="vehicleNickname"
                type="text"
                placeholder="Vehicle Nickname"
                value={vehicleNickname}
                onChange={(e) => setVehicleNickname(e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-payment focus:ring-payment"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-sm w-full mx-auto space-y-4">
          {/* Save Button */}
          <Button
            onClick={handleSave}
            disabled={!isFormValid}
            className="w-full h-12 bg-payment hover:bg-payment/90 disabled:bg-gray-300 text-white font-medium text-base rounded-full"
          >
            Save
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Privacy Policy Link */}
          <div className="text-center">
            <a href="#" className="text-payment text-sm hover:underline">
              Read our privacy policy.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
