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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://wa.me/?text=My%20exact%20location%20is:%20https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
          window.open(url, '_blank');
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const howItWorks = [
    {
      id: 1,
      title: "1. Call now",
      description: "Tap the orange button and tell us your location, vehicle and what the issue is.",
      icon: <Phone className="w-5 h-5 text-orange-500" />
    },
    {
      id: 2,
      title: "2. Tell us the details",
      description: "We confirm the job details and the type of recovery needed.",
      icon: <Truck className="w-5 h-5 text-orange-500" />
    },
    {
      id: 3,
      title: "3. Vehicle moved safely",
      description: "Your vehicle is recovered and taken where it needs to go.",
      icon: <Anchor className="w-5 h-5 text-orange-500" />
    }
  ];

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
              24/7 Vehicle Recovery<br />
              in <span className="text-orange-500">Portsmouth</span>
            </h1>

            <h2 
              className="text-lg md:text-xl font-medium text-gray-300 leading-tight mb-8 max-w-md"
            >
              Broken down in Portsmouth? Recovero helps with breakdowns, non-runners and roadside assistance across Portsmouth and nearby areas.<br /><br />Whatever the issue we get you moving again!
            </h2>

            <ul 
              className="w-full text-left space-y-3 mb-10"
            >
              {[
                "Local Portsmouth coverage",
                "Fast help for breakdowns and non-runners",
                "Upfront quote before recovery is arranged",
                "Arrival in as little as 30min!"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg font-medium text-gray-100">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:02392000000"
              className="group w-full bg-orange-500 text-black font-black text-2xl py-6 px-4 rounded-xl flex items-center justify-center gap-4 transition-colors shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] z-[999] relative block cursor-pointer"
            >
              CALL NOW
            </a>

            {/* Trust Pills removed from here and moved to bottom for better conversion flow */}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-6 mb-16 max-w-lg mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">
            HOW IT WORKS
          </h2>

          <div className="space-y-4">
            {howItWorks.map((step) => (
              <div key={step.id} className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
                <div className="bg-gray-800 p-3 rounded-xl shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tight text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
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
          <div className="w-full max-w-lg flex flex-col items-center text-center gap-8">
            <div className="flex flex-wrap justify-center gap-2">
              {["24/7", "UPFRONT QUOTE", "NO MEMBERSHIP"].map((badge) => (
                <span 
                  key={badge} 
                  className="bg-white text-black text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>
            
            <a
              href="tel:02392000000"
              className="group w-full bg-orange-500 text-black font-black text-2xl py-6 px-4 rounded-xl flex items-center justify-center gap-4 transition-colors shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] z-[999] relative block cursor-pointer"
            >
              CALL NOW
            </a>
            {/* --- NEW WHATSAPP BUTTON GOES HERE --- */}
        <button 
          onClick={handleLocationShare}
          className="mt-4 w-full bg-[#25D366] text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-[#1DA851] transition-colors shadow-lg"
        >
          <MapPin className="w-6 h-6" />
          📍 SHARE EXACT LOCATION
        </button>
        {/* -------------------------------------- */}
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
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
