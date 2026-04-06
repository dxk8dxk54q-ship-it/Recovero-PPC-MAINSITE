/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, CheckCircle2, Plus, Minus, Truck, MapPin, Anchor, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function App() {
  const phoneNumber = "023 9200 0000"; // Placeholder Portsmouth number
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleLocationShare = () => {
    const phone = "447366302341"; // Your dispatch WhatsApp number
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          // Clean standard Google Maps link
          const mapLink = "https://www.google.com/maps?q=" + lat + "," + lng;
          const message = encodeURIComponent("URGENT: I need recovery. My location: " + mapLink);
          
          // SAFARI BYPASS: Create an invisible link and click it programmatically
          const link = document.createElement('a');
          link.href = "https://wa.me/" + phone + "?text=" + message;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
        () => {
          // Fallback if they block location or it fails
          const failMsg = encodeURIComponent("URGENT: I need recovery assistance. (Location blocked).");
          const link = document.createElement('a');
          link.href = "https://wa.me/" + phone + "?text=" + failMsg;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
        // Force quick response so Safari doesn't time out the click
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      window.location.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent("URGENT: I need recovery assistance.");
    }
  };

  const faqs = [
    {
      question: "Do I need membership?",
      answer: "No. Just call if you need vehicle recovery."
    },
    {
      question: "Can you help with non-runners?",
      answer: "Yes. We help with breakdowns, non-runners and roadside recovery."
    },
    {
      question: "Do you cover my area?",
      answer: "We cover Portsmouth and nearby areas. Call with your location and we’ll confirm."
    },
    {
      question: "Will I get a quote before recovery is arranged?",
      answer: "Yes. We give you an upfront quote before recovery is arranged."
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-black text-white selection:bg-orange-500 selection:text-white relative">
      {/* Background Image with Dark Overlay - Fixed to cover scroll */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://github.com/dxk8dxk54q-ship-it/Recovero/blob/main/images/breakdown2-recovery.jpg?raw=true"
          alt="Recovery Truck"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="https://github.com/dxk8dxk54q-ship-it/Recovero/blob/main/images/recovero-logo.png?raw=true" 
              alt="Recovero24/7 Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-black font-black text-xl tracking-tighter uppercase">
            RECOVERO<span className="text-orange-600">24</span>/<span className="text-orange-600">7</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:02392000000"
            className="hidden md:flex items-center justify-center bg-orange-500 text-black font-black px-4 py-2 rounded-lg text-sm uppercase tracking-widest shadow-lg z-[999] relative block cursor-pointer"
          >
            CALL NOW
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 pt-24 pb-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center px-6 mb-12">
          <div className="w-full max-w-lg flex flex-col items-center text-center">
            <h1 
              className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tighter mb-4"
            >
              Broken down in <span className="text-orange-500">Portsmouth?</span>
            </h1>

            <h2 
              className="text-lg md:text-xl font-medium text-gray-300 leading-tight mb-8 max-w-md"
            >
              Need recovery right now? We connect you to a local recovery truck fast.
            </h2>

            <ul 
              className="w-full text-left space-y-3 mb-10"
            >
              {[
                "Local Portsmouth recovery",
                "Fast help for non-runners & breakdowns",
                "Upfront quote before we send anyone",
                "No membership required"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg font-medium text-gray-100">{text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-black text-orange-500 uppercase tracking-widest mb-2">
              Call now — we’ll get you sorted fast
            </p>
            <a
              href="tel:02392000000"
              className="group w-full bg-orange-500 text-black font-black text-2xl py-6 px-4 rounded-xl flex items-center justify-center gap-4 transition-colors shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] z-[999] relative block cursor-pointer"
            >
              CALL NOW
            </a>

            {/* Trust Pills removed from here and moved to bottom for better conversion flow */}
          </div>
        </section>

        {/* Trust Strip */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["24/7 SERVICE", "UPFRONT PRICING", "LOCAL COVERAGE", "NO MEMBERSHIP"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-black uppercase tracking-widest text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        {/* What We Help With Section */}
        <section className="px-6 mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-center">
            WHAT WE HELP WITH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Vehicle Recovery",
                description: "Broken down in Portsmouth? Don't waste time with national call centres. We're local, we're fast, and we're ready to move you NOW.",
                image: "https://github.com/dxk8dxk54q-ship-it/Recovero/blob/main/images/breakdown3-recovery.jpg?raw=true"
              },
              {
                title: "Vehicle Transport",
                description: "Need a vehicle moved in Portsmouth? Don't gamble with your car. We offer the safest, most reliable transport in the area. Call us.",
                image: "https://github.com/dxk8dxk54q-ship-it/Recovero/blob/main/images/Transport-recovery.jpg.jpg?raw=true"
              },
              {
                title: "Accident Recovery",
                description: "Accident in Portsmouth? Stay safe and let us handle the rest. We’re the only team you need to clear the scene fast. Call Recovero immediately.",
                image: "https://github.com/dxk8dxk54q-ship-it/Recovero/blob/main/images/accident-recovery.jpg?raw=true"
              }
            ].map((service) => (
              <div key={service.title} className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-4">
                  <h3 className="font-black text-lg uppercase tracking-tight text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="px-6 mb-16 max-w-lg mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">
            Service areas
          </h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-6">
            24/7 coverage across Portsmouth and nearby areas
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              "Portsmouth", "Petersfield", "Winchester", 
              "Andover", "Fareham", "Havant", 
              "Waterlooville", "Gosport"
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="text-sm font-black uppercase tracking-tight text-gray-300 group-hover:text-white transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
            24/7 vehicle recovery across Portsmouth and surrounding areas
          </p>
        </section>

        {/* FAQ Section */}
        <section className="px-6 mb-16 max-w-lg mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">
            FAQ
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden"
              >
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5"
                >
                  <span className="font-bold text-sm uppercase tracking-tight text-gray-100 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${expandedFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedFaq === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Conversion Section */}
        <section className="flex flex-col items-center px-6 mb-24">
          <div className="w-full max-w-lg flex flex-col items-center text-center gap-4">
            <a
              href="tel:02392000000"
              className="group w-full bg-orange-500 text-black font-black text-2xl py-6 px-4 rounded-xl flex items-center justify-center gap-4 transition-colors shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] z-[999] relative block cursor-pointer"
            >
              CALL NOW
            </a>
            <p className="text-xs text-gray-400 text-center mt-2">
              Only click this when you are on the call and we ask you to, so we can pinpoint your location.
            </p>
            <button 
              onClick={handleLocationShare}
              className="mt-4 w-full bg-[#25D366] text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-[#1DA851] transition-colors shadow-lg"
            >
              <MapPin className="w-6 h-6" />
              📍 SHARE EXACT LOCATION
            </button>
          </div>
        </section>
      </div>

      {/* Sticky Footer Location Ticker */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-orange-500 py-3 overflow-hidden border-t border-orange-600/20">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-4 px-4 text-black font-black text-sm uppercase tracking-widest">
            <span className="text-black/60">RECOVERO 24/7</span>
            <span>&gt; PETERSFIELD</span>
            <span>&gt; WINCHESTER</span>
            <span>&gt; ANDOVER</span>
            <span>&gt; FAREHAM</span>
            <span>&gt; HAVANT</span>
            <span>&gt; WATERLOOVILLE</span>
            <span>&gt; GOSPORT</span>
            <span className="bg-black text-orange-500 px-2 py-0.5 rounded ml-2 flex items-center gap-1">
              <Phone className="w-3 h-3 fill-orange-500" />
              {phoneNumber}
            </span>
            {/* Duplicate for seamless loop */}
            <span className="text-black/60 ml-4">RECOVERO 24/7</span>
            <span>&gt; PETERSFIELD</span>
            <span>&gt; WINCHESTER</span>
            <span>&gt; ANDOVER</span>
            <span>&gt; FAREHAM</span>
            <span>&gt; HAVANT</span>
            <span>&gt; WATERLOOVILLE</span>
            <span>&gt; GOSPORT</span>
            <span className="bg-black text-orange-500 px-2 py-0.5 rounded ml-2 flex items-center gap-1">
              <Phone className="w-3 h-3 fill-orange-500" />
              {phoneNumber}
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 5s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
