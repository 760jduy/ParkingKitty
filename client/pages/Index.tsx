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
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [cardName, setCardName] = useState("");

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const generateMonths = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const month = (i + 1).toString().padStart(2, "0");
      return { value: month, label: month };
    });
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 10 }, (_, i) => {
      const year = (currentYear + i).toString();
      return { value: year, label: year };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="space-y-6">
            {/* Card Number */}
            <div className="space-y-2">
              <Label
                htmlFor="cardNumber"
                className="text-sm font-medium text-gray-700"
              >
                Enter your debit/credit card number.
              </Label>
              <Input
                id="cardNumber"
                type="text"
                placeholder="Enter Card Number"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
                className="h-11 text-gray-500 placeholder:text-gray-400"
              />
            </div>

            {/* Expiry Date */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Exp. month:
                </Label>
                <Select value={expiryMonth} onValueChange={setExpiryMonth}>
                  <SelectTrigger className="h-11 text-gray-500">
                    <SelectValue placeholder="01" />
                  </SelectTrigger>
                  <SelectContent>
                    {generateMonths().map((month) => (
                      <SelectItem key={month.value} value={month.value}>
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Exp. year:
                </Label>
                <Select value={expiryYear} onValueChange={setExpiryYear}>
                  <SelectTrigger className="h-11 text-gray-500">
                    <SelectValue placeholder="2025" />
                  </SelectTrigger>
                  <SelectContent>
                    {generateYears().map((year) => (
                      <SelectItem key={year.value} value={year.value}>
                        {year.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Billing Zip */}
            <div className="space-y-2">
              <Label
                htmlFor="billingZip"
                className="text-sm font-medium text-gray-700"
              >
                Billing Zip:
              </Label>
              <Input
                id="billingZip"
                type="text"
                placeholder="Zip Code"
                value={billingZip}
                onChange={(e) => setBillingZip(e.target.value)}
                className="h-11 text-gray-500 placeholder:text-gray-400"
              />
            </div>

            {/* Name on Card */}
            <div className="space-y-2">
              <Label
                htmlFor="cardName"
                className="text-sm font-medium text-gray-700"
              >
                Name this card:
              </Label>
              <Input
                id="cardName"
                type="text"
                placeholder="Friendly card name"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="h-11 text-gray-500 placeholder:text-gray-400"
              />
            </div>

            {/* Save Button */}
            <Button
              onClick={() => navigate("/duration")}
              className="w-full h-12 bg-payment hover:bg-payment/90 text-white font-medium text-base rounded-lg shadow-sm"
            >
              Save
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Payment Methods */}
            <div className="flex flex-col items-center space-y-3 pt-4">
              <div className="flex items-center justify-center space-x-2">
                {/* Visa */}
                <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">
                  VISA
                </div>
                {/* MasterCard */}
                <div className="w-10 h-6 bg-red-500 rounded text-white text-xs font-bold flex items-center justify-center">
                  MC
                </div>
                {/* American Express */}
                <div className="w-10 h-6 bg-blue-500 rounded text-white text-xs font-bold flex items-center justify-center">
                  AMEX
                </div>
                {/* Discover */}
                <div className="w-10 h-6 bg-orange-500 rounded text-white text-xs font-bold flex items-center justify-center">
                  DISC
                </div>
                {/* UnionPay */}
                <div className="w-10 h-6 bg-blue-800 rounded text-white text-xs font-bold flex items-center justify-center">
                  UP
                </div>
              </div>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Read our privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
