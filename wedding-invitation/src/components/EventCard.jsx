const EventCard = ({ title, date, day, time, venue, address, mapLink, bgColor = "bg-white" }) => {
  return (
    <div className={`${bgColor} rounded-2xl shadow-lg p-8 md:p-10 border-2 border-gold/20 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
      {/* Title */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-3 mb-3">
          <div className="w-12 h-px bg-gold"></div>
          <div className="text-gold text-xl">✿</div>
          <div className="w-12 h-px bg-gold"></div>
        </div>
        <h3 className="font-serif text-3xl md:text-4xl text-brown">
          {title}
        </h3>
        <div className="flex justify-center items-center space-x-3 mt-3">
          <div className="w-12 h-px bg-gold"></div>
          <div className="text-gold text-xl">✿</div>
          <div className="w-12 h-px bg-gold"></div>
        </div>
      </div>

      {/* Event Details */}
      <div className="space-y-4 text-center">
        <div>
          <p className="font-cormorant text-2xl md:text-3xl text-brown font-semibold">
            {date}
          </p>
          <p className="font-cormorant text-xl md:text-2xl text-brown/80 mt-1">
            {day}
          </p>
        </div>

        <div className="py-4">
          <div className="w-24 h-px bg-gold/40 mx-auto"></div>
        </div>

        <div>
          <p className="font-cormorant text-xl md:text-2xl text-brown/80 mb-2">
            Time
          </p>
          <p className="font-cormorant text-2xl md:text-3xl text-brown font-semibold">
            {time}
          </p>
        </div>

        <div className="py-4">
          <div className="w-24 h-px bg-gold/40 mx-auto"></div>
        </div>

        <div>
          <p className="font-cormorant text-xl md:text-2xl text-brown/80 mb-2">
            Venue
          </p>
          <p className="font-serif text-2xl md:text-3xl text-brown font-semibold mb-3">
            {venue}
          </p>
          <p className="font-cormorant text-lg md:text-xl text-brown/70 leading-relaxed">
            {address}
          </p>
        </div>

        {/* Map Button */}
        <div className="pt-6">
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gold text-cream font-cormorant text-lg md:text-xl rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            📍 View Location
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
