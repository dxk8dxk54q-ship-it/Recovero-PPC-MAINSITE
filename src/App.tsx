/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import RecoveroLogo from './components/RecoveroLogo';

export default function App() {
  const phoneNumber = "07366302341"; // Main recovery line
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast can you get to me?",
      answer: "We are local to Portsmouth and aim to get a truck to you as fast as possible. Call us now for an ETA."
    },
    {
      question: "Can you help right now?",
      answer: "Yes. We operate 24/7 and are ready to dispatch a recovery truck immediately."
    },
    {
      question: "Do I get a quote before recovery?",
      answer: "Yes. We provide an upfront quote before we dispatch a truck."
    },
    {
      question: "Do you cover areas outside Portsmouth?",
      answer: "Yes. We arrange recovery across Portsmouth and surrounding areas including Southsea, Cosham, Havant, Fareham, Gosport, Waterlooville, Portchester, Emsworth, Chichester and Southampton. Call us and we’ll confirm availability before booking."
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
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-start px-6 py-4">
        <div className="flex items-center gap-4">
          <RecoveroLogo className="w-[64px] h-[64px] md:w-[88px] md:h-[88px] drop-shadow-xl" />
          <div className="flex items-center gap-2 mt-1 drop-shadow-md">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-white font-black text-sm md:text-base uppercase tracking-widest opacity-95">
              24/7 Recovery Line
            </span>
          </div>
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
              BROKEN DOWN IN <span className="text-orange-500">PORTSMOUTH?</span>
            </h1>

            <h2 
              className="text-lg md:text-xl font-medium text-gray-300 leading-tight mb-8 max-w-md"
            >
              Need recovery now? Call Recovero and we’ll arrange help across Portsmouth and nearby areas, with an upfront price before booking.
            </h2>

            <ul 
              className="w-full text-left space-y-3 mb-10"
            >
              {[
                "Local recovery arranged",
                "Cars, vans, non-runners & accidents",
                "No membership needed",
                "Price confirmed before dispatch"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg font-medium text-gray-100">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:07366302341"
              className="group w-full bg-orange-500 text-black font-black text-2xl py-6 px-4 rounded-xl flex items-center justify-center gap-4 transition-colors shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] z-[999] relative block cursor-pointer"
            >
              CALL 07366302341
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
                description: "Broken down in Portsmouth? We’ll get a recovery truck to you fast.",
                image: "https://github.com/dxk8dxk54q-ship-it/Recovero/blob/main/images/breakdown3-recovery.jpg?raw=true"
              },
              {
                title: "Vehicle Transport",
                description: "Need a vehicle moved? We’ll get it picked up and delivered quickly.",
                image: "https://github.com/dxk8dxk54q-ship-it/Recovero/blob/main/images/Transport-recovery.jpg.jpg?raw=true"
              },
              {
                title: "Accident Recovery",
                description: "Accident in Portsmouth? We’ll recover your vehicle fast and get it cleared safely.",
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

        {/* Areas We Cover Section */}
        <section className="px-6 mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 text-center">
            AREAS WE COVER
          </h2>
          <p className="text-gray-400 font-medium text-sm md:text-base mb-8 text-center max-w-2xl mx-auto">
            Recovero arranges vehicle recovery across Portsmouth and surrounding areas.
          </p>
          <div className="relative overflow-hidden w-full max-w-[100vw] mb-8">
            {/* Fade effect edges */}
            <div className="absolute top-0 left-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute top-0 right-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

            <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex gap-3">
                  {[
                    "Portsmouth", "Southsea", "Cosham", "Havant", "Fareham", 
                    "Gosport", "Waterlooville", "Portchester", "Emsworth", 
                    "Chichester", "Southampton"
                  ].map((area) => (
                    <div key={`${arrayIndex}-${area}`} className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-full px-4 py-2 flex items-center gap-2 m-0">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      <span className="font-bold text-sm uppercase tracking-tight text-white whitespace-nowrap">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center mt-10">
            <p className="text-sm font-black text-gray-300 uppercase tracking-widest mb-4">
              Not sure if we cover your location? Call us and we’ll check availability.
            </p>
            <a
              href="tel:07366302341"
              className="bg-orange-500 text-black font-black text-lg py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg z-10 relative cursor-pointer"
            >
              CALL 07366302341
            </a>
          </div>
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
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
