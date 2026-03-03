import { Sparkles } from "lucide-react";

const Gallery = ({ images }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cream via-amber-50 to-cream px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <Sparkles className="text-gold w-6 h-6" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brown bg-gradient-to-r from-brown via-amber-900 to-brown bg-clip-text">
            Gallery
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-brown/80 mt-2">
            Moments to cherish
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer aspect-square border-2 border-gold/20 hover:border-gold/40 transition-all duration-500"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles className="text-white w-12 h-12 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center items-center space-x-3 mt-12">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold"></div>
          <Sparkles className="text-gold w-6 h-6" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
