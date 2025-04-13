// app/page.tsx
import Image from "next/image";
import AmenitiesCard from "@/components/AmenitiesCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel"

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
            Pameec Luxury Hotel
            </h1>
            <p className="font-lora text-lg md:text-xl text-white leading-relaxed">
            Step into a world of unrivaled luxury and personalized service, where every detail is crafted to exceed your expectations.
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
            Discover the epitome of luxury at Pameec Luxury Suite, the premier multi-branch accommodation hotel in Abuja, Nigeria. Our commitment to your exclusive comfort sets us apart. Book your ideal hotel, vacation apartment, or guest house with us and experience the excellence that has delighted millions of global travelers. 
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
                  Standard Room
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
                  Diplomatic Room
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


     {/* Amenities Section */}
     <section className="py-16 md:py-20 bg-[#F5F1E9]">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A2A44] font-bold tracking-wide text-center mb-12">
            Exceptional Amenities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AmenitiesCard
              iconName="Waves"
              title="Infinity Pool"
              description="Relax in our breathtaking pool overlooking Bliss City."
              onClickMessage="Explore our infinity pool with stunning views!"
            />
            <AmenitiesCard
        iconName="Calendar"
        title="Event Center"
        description="Host unforgettable events in our elegant, versatile venues."
        onClickMessage="Plan your event at Pameec Luxury's Event Center!"
      />
            <AmenitiesCard
              iconName="Utensils"
              title="Gourmet Restaurant"
              description="Savor exquisite cuisine crafted by award-winning chefs."
              onClickMessage="Discover gourmet dining at Pameec Luxury!"
            />
            <AmenitiesCard
              iconName="Wifi"
              title="Free Wi-Fi"
              description="Seamless connectivity throughout your stay."
              onClickMessage="Stay connected with high-speed Wi-Fi!"
            />
          </div>
        </div>
      </section>

    

{/* Event Center Section */}
<section className="py-16 md:py-20 bg-[#F5F1E9]">
  <div className="container mx-auto px-8 md:px-12 lg:px-16">
    <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A2A44] font-bold tracking-wide text-center mb-12">
      Our Event Center
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Image */}
      <div className="relative h-64 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2070&auto=format&fit=crop"
          alt="Pameec Luxury Event Center"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      {/* Content */}
      <div className="text-center lg:text-left">
        <p className="font-lora text-lg text-[#4A4A4A] leading-relaxed mb-6">
          Host your next event in the unparalleled elegance of Pameec Luxury’s
          Event Center. From grand weddings to corporate galas, our versatile
          venues are equipped with state-of-the-art technology and supported by
          our dedicated planning team to ensure every moment is flawless.
        </p>
        <ul className="font-lora text-[#4A4A4A] text-base mb-6 space-y-2">
          <li>🎉 Flexible spaces for events of any size</li>
          <li>📽️ Advanced audiovisual systems</li>
          <li>🍽️ Custom catering by our gourmet chefs</li>
        </ul>
        <a
          href="#"
          className="inline-block bg-[#1A2A44] text-[#D4AF37] font-lora text-base py-3 px-6 rounded hover:bg-[#D4AF37] hover:text-[#1A2A44] transition-colors duration-300"
        >
          Inquire Now
        </a>
      </div>
    </div>
  </div>
</section>

 {/* Testimonials Section */}
 <section className="py-16 md:py-20 bg-[#F5F1E9]">
  <div className="container mx-auto px-8 md:px-12 lg:px-16">
    <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A2A44] font-bold tracking-wide text-center mb-12">
      What Our Guests Say
    </h2>
    <TestimonialsCarousel
      testimonials={[
        {
          quote: "An unforgettable stay! The elegance and service at Pameec Luxury exceeded all expectations.",
          name: "Emily R.",
        },
        {
          quote: "The spa and dining were world-class. Truly a haven of luxury and comfort.",
          name: "Michael T.",
        },
        {
          quote: "Every detail was perfect, from the rooms to the warm staff. Highly recommend!",
          name: "Sophia L.",
        },
      ]}
    />
  </div>
</section>

    
    </div>
  );
}