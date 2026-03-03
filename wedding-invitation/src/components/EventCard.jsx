import { MapPin, Clock, Calendar, Sparkles } from "lucide-react";

const EventCard = ({
  title,
  date,
  day,
  time,
  venue,
  address,
  mapLink,
  bgColor = "bg-white",
  animationDelay = "200",
}) => {
  return (
    <div
      className={`${bgColor} rounded-2xl shadow-xl p-8 md:p-10 border border-gold/20 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-gold/40 active:scale-95 animate-scale-in delay-${animationDelay}`}
    >
      {/* Title */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-3 mb-3">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold"></div>
          <Sparkles className="text-gold w-5 h-5" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold"></div>
        </div>
        <h3 className="font-serif text-3xl md:text-4xl text-brown bg-gradient-to-r from-brown via-amber-900 to-brown bg-clip-text">
          {title}
        </h3>
        <div className="flex justify-center items-center space-x-3 mt-3">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold"></div>
          <Sparkles className="text-gold w-5 h-5" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold"></div>
        </div>
      </div>

      {/* Event Details */}
      <div className="space-y-6 text-center">
        <div className="flex items-start justify-center space-x-3 bg-gradient-to-r from-cream/50 to-amber-50/50 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
          <Calendar className="text-gold w-6 h-6 mt-1" />
          <div>
            <p className="font-cormorant text-2xl md:text-3xl text-brown font-semibold">
              {date}
            </p>
            <p className="font-cormorant text-xl md:text-2xl text-brown/80 mt-1">
              {day}
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center space-x-3 bg-gradient-to-r from-amber-50/50 to-cream/50 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
          <Clock className="text-gold w-6 h-6 mt-1" />
          <div>
            <p className="font-cormorant text-xl md:text-2xl text-brown/80 mb-1">
              Time
            </p>
            <p className="font-cormorant text-2xl md:text-3xl text-brown font-semibold">
              {time}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gold/5 to-amber-100/20 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <MapPin className="text-gold w-6 h-6" />
            <p className="font-cormorant text-xl md:text-2xl text-brown/80">
              Venue
            </p>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-brown font-semibold mb-3">
            {venue}
          </p>
          <p className="font-cormorant text-lg md:text-xl text-brown/70 leading-relaxed">
            {address}
          </p>
        </div>

        {/* Map Button */}
        <div className="pt-4">
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-gold to-amber-600 text-cream font-cormorant text-lg md:text-xl rounded-full hover:from-amber-600 hover:to-gold transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <MapPin className="w-5 h-5" />
            <span>View Location</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
