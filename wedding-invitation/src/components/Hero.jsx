import { Heart, Sparkles } from "lucide-react";

const Hero = ({ groomName, brideName, weddingDate }) => {
  const scrollToInvitation = () => {
    document
      .getElementById("couple-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gold/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floral border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <div className="absolute top-6 left-0 right-0 flex justify-center">
        <Sparkles className="text-gold w-12 h-12 opacity-30 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Decorative element */}
        <div className="mb-8 flex justify-center items-center space-x-4 animate-scale-in delay-100">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold"></div>
          <Sparkles className="text-gold w-6 h-6" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold"></div>
        </div>

        {/* Main heading */}
        <h2 className="font-cormorant text-2xl md:text-3xl text-brown mb-6 tracking-wide animate-fade-in delay-200">
          Together with their families
        </h2>

        {/* Couple names */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-brown mb-4 leading-tight animate-slide-up delay-300">
          {groomName}
        </h1>

        <div className="flex justify-center mb-4 animate-bounce-in delay-500">
          <Heart className="text-red-400 w-12 h-12 md:w-14 md:h-14 fill-current animate-pulse" />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-brown mb-8 leading-tight whitespace-nowrap animate-slide-up delay-600">
          {brideName}
        </h1>

        {/* Wedding date */}
        <div className="my-8 animate-scale-in delay-700">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="font-cormorant text-2xl md:text-3xl text-brown tracking-widest">
            {weddingDate}
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToInvitation}
          className="mt-12 px-10 py-4 bg-gradient-to-r from-gold to-amber-600 text-cream font-cormorant text-xl md:text-2xl rounded-full hover:from-amber-600 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 active:scale-95 animate-bounce-in delay-800"
        >
          View Invitation
        </button>

        {/* Decorative element */}
        <div className="mt-12 flex justify-center items-center space-x-4 animate-fade-in delay-1000">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold"></div>
          <Sparkles className="text-gold w-6 h-6" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold"></div>
        </div>
      </div>

      {/* Floral border bottom */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <Sparkles className="text-gold w-12 h-12 opacity-30 animate-pulse" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </section>
  );
};

export default Hero;
