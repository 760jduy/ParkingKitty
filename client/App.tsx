import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./pages/Entry";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import Vehicle from "./pages/Vehicle";
import Zone from "./pages/Zone";
import ParkingDuration from "./pages/ParkingDuration";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/zone" element={<Zone />} />
        <Route path="/duration" element={<ParkingDuration />} />
        <Route path="/payment" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
