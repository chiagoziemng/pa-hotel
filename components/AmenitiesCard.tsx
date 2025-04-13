// components/AmenitiesCard.tsx
"use client";

import { Waves, Utensils, Wifi, Calendar } from "lucide-react";

interface AmenitiesCardProps {
  iconName: "Waves" | "Utensils" | "Wifi" | "Calendar";
  title: string;
  description: string;
  onClickMessage: string;
}

export default function AmenitiesCard({
  iconName,
  title,
  description,
  onClickMessage,
}: AmenitiesCardProps) {
  const Icon = {
    Waves,
  
    Utensils,
    Wifi,
    Calendar,
  }[iconName];

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
      onClick={() => alert(onClickMessage)}
    >
      <Icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
      <h3 className="font-cinzel text-lg text-[#1A2A44] font-semibold mb-2">
        {title}
      </h3>
      <p className="font-lora text-[#4A4A4A] text-sm">{description}</p>
    </div>
  );
}