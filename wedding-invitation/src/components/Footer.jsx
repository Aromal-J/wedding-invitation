import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 bg-gradient-to-b from-cream to-amber-100 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Thank You Message */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <Sparkles className="text-gold w-6 h-6" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl text-brown mb-4 bg-gradient-to-r from-brown via-amber-900 to-brown bg-clip-text">
            Thank You
          </h3>
          
          <p className="font-cormorant text-xl md:text-2xl text-brown/80 leading-relaxed max-w-2xl mx-auto">
            Your presence on our special day will make it even more memorable. 
            We can't wait to celebrate with you!
          </p>
          
          <div className="flex justify-center items-center space-x-3 mt-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <Sparkles className="text-gold w-6 h-6" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold"></div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="my-8 flex justify-center">
          <Heart className="text-gold w-8 h-8 fill-current animate-pulse" />
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
