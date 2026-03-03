import { MessageCircle, Sparkles } from "lucide-react";

const RSVP = ({ message, whatsappNumber }) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I would like to confirm my attendance for the wedding.`;

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-cream via-amber-50 to-orange-50 px-4 md:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Decorative border */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10 lg:p-16 border border-gold/30">
          {/* Top decorative element */}
          <div className="flex justify-center items-center space-x-3 mb-6 md:mb-8">
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <Sparkles className="text-gold w-6 h-6" />
            <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-gold"></div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown mb-3 md:mb-4 bg-gradient-to-r from-brown via-amber-900 to-brown bg-clip-text">
              RSVP
            </h2>
            <p className="font-cormorant text-lg md:text-2xl lg:text-3xl text-brown/80 leading-relaxed px-2">
              {message}
            </p>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 md:space-x-3 px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-cormorant text-lg md:text-xl lg:text-2xl rounded-full hover:from-green-600 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>Confirm Attendance</span>
            </a>
          </div>

          {/* Bottom decorative element */}
          <div className="flex justify-center items-center space-x-3 mt-8 md:mt-10">
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <Sparkles className="text-gold w-6 h-6" />
            <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
