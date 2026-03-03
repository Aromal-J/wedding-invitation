import Hero from './components/Hero'
import CoupleSection from './components/CoupleSection'
import EventCard from './components/EventCard'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import { weddingDetails } from './data/weddingDetails'

export function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero
        groomName={weddingDetails.couple.groom.name}
        brideName={weddingDetails.couple.bride.name}
        weddingDate={weddingDetails.weddingDateDisplay}
      />
      
      <CoupleSection
        groom={weddingDetails.couple.groom}
        bride={weddingDetails.couple.bride}
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-amber-50 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <EventCard
            title={weddingDetails.ceremony.title}
            date={weddingDetails.ceremony.date}
            day={weddingDetails.ceremony.day}
            time={weddingDetails.ceremony.time}
            venue={weddingDetails.ceremony.venue}
            address={weddingDetails.ceremony.address}
            mapLink={weddingDetails.ceremony.mapLink}
            bgColor="bg-white"
            animationDelay="200"
          />
          
          <EventCard
            title={weddingDetails.reception.title}
            date={weddingDetails.reception.date}
            day={weddingDetails.reception.day}
            time={weddingDetails.reception.time}
            venue={weddingDetails.reception.venue}
            address={weddingDetails.reception.address}
            mapLink={weddingDetails.reception.mapLink}
            bgColor="bg-amber-50/50"
            animationDelay="500"
          />
        </div>
      </section>

      <Countdown targetDate={weddingDetails.weddingDate} />
      
      <Gallery images={weddingDetails.gallery.images} />
      
      <RSVP
        message={weddingDetails.rsvp.message}
        whatsappNumber={weddingDetails.rsvp.whatsappNumber}
      />
      
      <Footer />
    </div>
  )
}
