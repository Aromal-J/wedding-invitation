import { useState, useEffect } from 'react';
import { Sparkles, Clock } from 'lucide-react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }) => (
    <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl shadow-xl p-6 md:p-8 border border-gold/30 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-gold/50 hover:scale-105">
      <div className="flex justify-center mb-2">
        <Clock className="text-gold w-8 h-8 md:w-10 md:h-10" />
      </div>
      <div className="text-4xl md:text-6xl font-serif text-brown mb-2 bg-gradient-to-r from-brown via-amber-900 to-brown bg-clip-text">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-lg md:text-xl font-cormorant text-brown/80 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-cream px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <Sparkles className="text-gold w-6 h-6" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-2 bg-gradient-to-r from-brown via-amber-900 to-brown bg-clip-text">
            Counting Down
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-brown/80">
            Until the big day
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
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

export default Countdown;
