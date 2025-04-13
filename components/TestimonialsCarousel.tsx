// components/TestimonialsCarousel.tsx
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  quote: string;
  name: string;
}

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((t, index) => (
        <div key={index} className="p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center mx-auto max-w-lg">
            <p className="font-lora text-[#4A4A4A] text-base italic mb-4">
              &quot;{t.quote}&quot;
            </p>
            <p className="font-cinzel text-[#D4AF37] text-sm font-semibold">
              {t.name}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}