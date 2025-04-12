// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1E9]">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://i0.wp.com/www.transcorphotels.com/wp-content/uploads/2022/11/Businesses-Hero.jpg?fit=1728%2C1117&ssl=1"
            alt="Pameec Luxury Hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1A2A44] opacity-50" />
        </div>
        <div className="relative container mx-auto px-8 md:px-12 lg:px-16 z-10">
          <div className="max-w-lg md:max-w-xl text-center md:text-left">
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-4">
              Escape to Pameec Luxury
            </h1>
            <p className="font-lora text-lg md:text-xl text-white leading-relaxed">
              Indulge in unparalleled elegance and serenity at your premier
              getaway destination.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-[#F5F1E9]">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A2A44] font-bold tracking-wide text-center mb-8">
            About Pameec Luxury
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-lora text-lg text-[#4A4A4A] leading-relaxed mb-6">
              Nestled in the heart of Bliss City, Pameec Luxury offers an
              exquisite retreat where timeless elegance meets modern comfort.
              Our hotel embodies a serene sophistication, designed to envelop
              you in tranquility and indulgence from the moment you arrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <h3 className="font-cinzel text-xl text-[#D4AF37] font-semibold mb-2">
                Prime Location
              </h3>
              <p className="font-lora text-[#4A4A4A] text-sm">
                Steps away from iconic landmarks and vibrant city life, yet a
                peaceful oasis.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-cinzel text-xl text-[#D4AF37] font-semibold mb-2">
                World-Class Amenities
              </h3>
              <p className="font-lora text-[#4A4A4A] text-sm">
                Spa, infinity pool, and gourmet dining crafted for ultimate
                relaxation.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-cinzel text-xl text-[#D4AF37] font-semibold mb-2">
                Personalized Service
              </h3>
              <p className="font-lora text-[#4A4A4A] text-sm">
                Attentive staff dedicated to making your stay unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 md:py-20 bg-[#F5F1E9]">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A2A44] font-bold tracking-wide text-center mb-12">
            Our Rooms & Suites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Deluxe Suite */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2070&auto=format&fit=crop"
                alt="Deluxe Suite"
                fill
                className="object-cover"
              />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-xl text-[#D4AF37] font-semibold mb-2">
                  Deluxe Suite
                </h3>
                <p className="font-lora text-[#4A4A4A] text-sm mb-4">
                  Spacious and refined, with plush bedding and stunning city
                  views.
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#1A2A44] text-[#D4AF37] font-lora text-sm py-2 px-4 rounded hover:bg-[#D4AF37] hover:text-[#1A2A44] transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Executive Room */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2070&auto=format&fit=crop"
                alt="Executive Room"
                fill
                className="object-cover"
              />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-xl text-[#D4AF37] font-semibold mb-2">
                  Executive Room
                </h3>
                <p className="font-lora text-[#4A4A4A] text-sm mb-4">
                  Modern elegance with a private balcony and premium amenities.
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#1A2A44] text-[#D4AF37] font-lora text-sm py-2 px-4 rounded hover:bg-[#D4AF37] hover:text-[#1A2A44] transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Penthouse */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Penthouse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-xl text-[#D4AF37] font-semibold mb-2">
                  Penthouse
                </h3>
                <p className="font-lora text-[#4A4A4A] text-sm mb-4">
                  The pinnacle of luxury with expansive space and panoramic
                  vistas.
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#1A2A44] text-[#D4AF37] font-lora text-sm py-2 px-4 rounded hover:bg-[#D4AF37] hover:text-[#1A2A44] transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <section className="py-12 text-center">
        <p className="font-lora text-[#4A4A4A]">More content coming soon...</p>
      </section>
    </div>
  );
}