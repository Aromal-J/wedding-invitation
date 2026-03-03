const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 bg-cream px-6">
      <div className="max-w-4xl mx-auto">
        {/* Thank You Message */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-16 h-px bg-gold"></div>
            <div className="text-gold text-2xl">✿</div>
            <div className="w-16 h-px bg-gold"></div>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl text-brown mb-4">
            Thank You
          </h3>
          
          <p className="font-cormorant text-xl md:text-2xl text-brown/80 leading-relaxed max-w-2xl mx-auto">
            Your presence on our special day will make it even more memorable. 
            We can't wait to celebrate with you!
          </p>
          
          <div className="flex justify-center items-center space-x-3 mt-6">
            <div className="w-16 h-px bg-gold"></div>
            <div className="text-gold text-2xl">✿</div>
            <div className="w-16 h-px bg-gold"></div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="my-8 flex justify-center">
          <div className="text-gold text-4xl">❤️</div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-cormorant text-lg text-brown/70">
            © {currentYear} Wedding Invitation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
