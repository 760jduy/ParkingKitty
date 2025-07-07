import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleBack = () => {
    navigate("/terms");
  };

  const handleSave = () => {
    // Form validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      alert("First Name and Last Name are required");
      return;
    }

    // Store data in localStorage for now (instead of sending to external email)
    const profileData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("parkingKittyProfile", JSON.stringify(profileData));

    navigate("/zone");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFormValid = formData.firstName.trim() && formData.lastName.trim();

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
        <h1 className="text-lg font-medium">Update Profile</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col min-h-[calc(100vh-64px)] p-6">
        <div className="max-w-sm w-full mx-auto space-y-6 flex-1">
          {/* Required Information Header */}
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-800 mb-6">
              Required Information
            </h2>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* First Name */}
            <div>
              <Label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Required"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-payment focus:ring-payment"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <Label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Required"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-payment focus:ring-payment"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder=""
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-payment focus:ring-payment"
              />
            </div>

            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
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
