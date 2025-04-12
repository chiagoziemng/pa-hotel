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
              456 Serenity Lane, Bliss City, 12345
            </p>
          </div>
  
          {/* Contact Info */}
          <div>
            <p className="text-sm font-lora text-[#F5F1E9]">
              Email: <a href="mailto:reservations@pameec-luxury.com" className="hover:text-[#D4AF37] transition-colors duration-300">reservations@pameec-luxury.com</a>
            </p>
            <p className="mt-2 text-sm font-lora text-[#F5F1E9]">
              Phone: <a href="tel:+5551234567" className="hover:text-[#D4AF37] transition-colors duration-300">(555) 123-4567</a>
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