const Hero = ({ groomName, brideName, weddingDate }) => {
  const scrollToInvitation = () => {
    document.getElementById('couple-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream to-amber-50 relative overflow-hidden">
      {/* Floral border top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
      <div className="absolute top-4 left-0 right-0 flex justify-center">
        <div className="text-gold text-6xl opacity-20">✿</div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Decorative element */}
        <div className="mb-8 flex justify-center items-center space-x-4">
          <div className="w-20 h-px bg-gold"></div>
          <div className="text-gold text-3xl">✿</div>
          <div className="w-20 h-px bg-gold"></div>
        </div>

        {/* Main heading */}
        <h2 className="font-cormorant text-2xl md:text-3xl text-brown mb-6 tracking-wide">
          Together with their families
        </h2>

        {/* Couple names */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-brown mb-4 leading-tight">
          {groomName}
        </h1>
        
        <div className="text-red-400 text-4xl md:text-5xl mb-4">❤️</div>
        
        <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-brown mb-8 leading-tight whitespace-nowrap">
          {brideName}
        </h1>

        {/* Wedding date */}
        <div className="my-8">
          <div className="w-32 h-px bg-gold mx-auto mb-6"></div>
          <p className="font-cormorant text-2xl md:text-3xl text-brown tracking-widest">
            {weddingDate}
          </p>
          <div className="w-32 h-px bg-gold mx-auto mt-6"></div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToInvitation}
          className="mt-12 px-10 py-4 bg-gold text-cream font-cormorant text-xl md:text-2xl rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          View Invitation
        </button>

        {/* Decorative element */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <div className="w-20 h-px bg-gold"></div>
          <div className="text-gold text-3xl">✿</div>
          <div className="w-20 h-px bg-gold"></div>
        </div>
      </div>

      {/* Floral border bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="text-gold text-6xl opacity-20">✿</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
    </section>
  );
};

export default Hero;
