import { useState, useEffect } from "react";
import { Sparkles, Calendar } from "lucide-react";

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

  const TimeBox = ({ value, label, delay }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-lg border-2 border-gold/20 relative overflow-hidden group">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <div className="relative z-10">
        <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-brown font-bold mb-1 text-center bg-gradient-to-br from-brown via-amber-900 to-brown bg-clip-text text-transparent">
          {String(value).padStart(2, "0")}
        </div>
        <div className="flex items-center justify-center space-x-1">
          <div className="w-8 h-px bg-gold/40"></div>
        </div>
        <div className="text-sm sm:text-base md:text-lg font-cormorant text-brown/70 uppercase tracking-widest text-center mt-1">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-amber-50 via-cream to-amber-50 px-4 md:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-24 h-24 md:w-32 md:h-32 bg-gold/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-32 h-32 md:w-40 md:h-40 bg-gold/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="flex justify-center items-center space-x-3 mb-3">
            <Calendar className="text-gold w-5 h-5 md:w-6 md:h-6 animate-pulse" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brown mb-2">
            Save the Date
          </h2>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-brown/70">
            Counting down to our special day
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5 max-w-4xl mx-auto mb-6">
          <TimeBox value={timeLeft.days} label="Days" delay="100" />
          <TimeBox value={timeLeft.hours} label="Hours" delay="200" />
          <TimeBox value={timeLeft.minutes} label="Minutes" delay="300" />
          <TimeBox value={timeLeft.seconds} label="Seconds" delay="400" />
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
