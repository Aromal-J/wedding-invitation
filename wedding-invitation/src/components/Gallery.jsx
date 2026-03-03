const Gallery = ({ images }) => {
  return (
    <section className="py-16 md:py-24 bg-cream px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-16 h-px bg-gold"></div>
            <div className="text-gold text-2xl">✿</div>
            <div className="w-16 h-px bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brown">
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
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-square"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
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

export default Gallery;
