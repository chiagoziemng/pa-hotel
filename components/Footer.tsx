// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-[#1A2A44] text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Hotel Info */}
          <div>
            <p className="font-cinzel text-xl font-semibold text-[#D4AF37] tracking-wide">
              Pameec Luxury
            </p>
            <p className="mt-3 text-sm font-lora text-[#F5F1E9]">
            Lokogoma Address - Plot 354 Apo/Lokogoma Express Way, Abuja
            </p>
            <p className="mt-3 text-sm font-lora text-[#F5F1E9]">
            Utako Address - No 36 Ajose Adeogun Street, Abuja
            </p>
            <p className="mt-3 text-sm font-lora text-[#F5F1E9]">
            Utako Apartment Address - No 4 Henry Adefope Close, Abuja
            </p>
          </div>
  
          {/* Contact Info */}
          <div>
            <p className="text-sm font-lora text-[#F5F1E9]">
              Email: <a href="mailto:reservations@pameec-luxury.com" className="hover:text-[#D4AF37] transition-colors duration-300">reservations@pameec-luxury.com.ng</a>
            </p>
            <p className="mt-2 text-sm font-lora text-[#F5F1E9]">
              Phone: <a href="tel:+2348166065843" className="hover:text-[#D4AF37] transition-colors duration-300">(+234) 816 606 5843 - Pameec Hotel Lokogoma</a>
            </p>
            <p className="mt-2 text-sm font-lora text-[#F5F1E9]">
              Phone: <a href="tel:+2349014084741" className="hover:text-[#D4AF37] transition-colors duration-300">(+234) 901 408 4741 - Pameec Hotel Utako</a>
            </p>
            <p className="mt-2 text-sm font-lora text-[#F5F1E9]">
              Phone: <a href="tel:+2347033134119" className="hover:text-[#D4AF37] transition-colors duration-300">(+234) 703 313 4119 - Pameec Apartment Utako</a>
            </p>
            <p className="mt-2 text-sm font-lora text-[#F5F1E9]">
              Phone: <a href="tel:+2348131577816" className="hover:text-[#D4AF37] transition-colors duration-300">(+234) 813 157 7816 - Toll Free</a>
            </p>
          </div>
  
          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-6">
            {["Facebook", "Instagram", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm font-lora text-[#F5F1E9] hover:text-[#D4AF37] transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
  
        {/* Copyright */}
        <p className="text-center text-xs mt-10 font-lora text-[#F5F1E9]">
          © 2025 Pameec Luxury. All rights reserved.
        </p>
      </footer>
    );
  }