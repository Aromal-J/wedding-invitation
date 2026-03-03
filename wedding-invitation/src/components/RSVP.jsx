const RSVP = ({ message, whatsappNumber }) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I would like to confirm my attendance for the wedding.`;

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-cream to-amber-50 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Decorative border */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 lg:p-16 border-2 border-gold/30">
          {/* Top decorative element */}
          <div className="flex justify-center items-center space-x-3 mb-6 md:mb-8">
            <div className="w-12 md:w-20 h-px bg-gold"></div>
            <div className="text-gold text-2xl md:text-3xl">✿</div>
            <div className="w-12 md:w-20 h-px bg-gold"></div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown mb-3 md:mb-4">
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
              className="inline-flex items-center px-6 py-3 md:px-10 md:py-4 bg-gold text-cream font-cormorant text-lg md:text-xl lg:text-2xl rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span className="mr-2 md:mr-3 text-xl md:text-2xl">💬</span>
              Confirm Attendance
            </a>
          </div>

          {/* Bottom decorative element */}
          <div className="flex justify-center items-center space-x-3 mt-8 md:mt-10">
            <div className="w-12 md:w-20 h-px bg-gold"></div>
            <div className="text-gold text-2xl md:text-3xl">✿</div>
            <div className="w-12 md:w-20 h-px bg-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
