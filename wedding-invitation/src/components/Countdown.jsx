import { useState, useEffect } from 'react';

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
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gold/20 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-4xl md:text-6xl font-serif text-brown mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-lg md:text-xl font-cormorant text-brown/80 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-amber-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-16 h-px bg-gold"></div>
            <div className="text-gold text-2xl">✿</div>
            <div className="w-16 h-px bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-2">
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
          <div className="w-16 h-px bg-gold"></div>
          <div className="text-gold text-2xl">✿</div>
          <div className="w-16 h-px bg-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
