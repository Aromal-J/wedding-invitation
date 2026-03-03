const CoupleSection = ({ groom, bride }) => {
  return (
    <section id="couple-section" className="py-16 md:py-24 bg-cream px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-16 h-px bg-gold"></div>
            <div className="text-gold text-2xl">✿</div>
            <div className="w-16 h-px bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brown">
            The Happy Couple
          </h2>
        </div>

        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Groom Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="mb-6 flex justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gold/30 shadow-lg">
                <img
                  src={groom.image}
                  alt={groom.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-brown mb-4">
              {groom.name}
            </h3>
            <div className="space-y-2">
              <p className="font-cormorant text-lg md:text-xl text-brown/80">
                Son of
              </p>
              <p className="font-cormorant text-xl md:text-2xl text-brown">
                {groom.fatherName}
              </p>
              <p className="font-cormorant text-xl md:text-2xl text-brown">
                & {groom.motherName}
              </p>
            </div>
          </div>

          {/* Decorative Divider (visible on mobile) */}
          <div className="md:hidden flex justify-center items-center">
            <div className="text-gold text-4xl">❤️</div>
          </div>

          {/* Bride Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="mb-6 flex justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gold/30 shadow-lg">
                <img
                  src={bride.image}
                  alt={bride.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-brown mb-4">
              {bride.name}
            </h3>
            <div className="space-y-2">
              <p className="font-cormorant text-lg md:text-xl text-brown/80">
                Daughter of
              </p>
              <p className="font-cormorant text-xl md:text-2xl text-brown">
                {bride.fatherName}
              </p>
              <p className="font-cormorant text-xl md:text-2xl text-brown">
                & {bride.motherName}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center items-center space-x-3 mt-12">
          <div className="w-16 h-px bg-gold"></div>
          <div className="text-gold text-2xl">✿</div>
          <div className="w-16 h-px bg-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
