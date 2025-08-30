import React from 'react';
import { Calendar, Package, Recycle } from 'lucide-react';

const Card = ({ icon: Icon, title, description, cta, href, colorClasses }) => (
  <div className={`group relative rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md ${colorClasses}`}> 
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 group-hover:scale-105 transition">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
    <p className="mt-2 text-stone-700">{description}</p>
    <a href={href} className="mt-4 inline-flex items-center text-emerald-800 font-medium hover:text-emerald-900">
      {cta} →
    </a>
  </div>
);

export default function Offerings() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">What we offer</h2>
        <p className="mt-3 text-stone-700">Hands-on learning, farm-fresh produce, and easy composting for our community.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card 
          icon={Calendar}
          title="Workshops"
          description="Monthly sessions on seed starting, balcony gardening, composting 101, and more. Beginner-friendly and fun."
          cta="View schedule"
          href="#events"
        />
        <Card 
          icon={Package}
          title="Produce Boxes"
          description="Seasonal harvest boxes featuring greens, herbs, and veggies grown within a few blocks. Sliding-scale pricing."
          cta="See what's in season"
          href="#contact"
        />
        <Card 
          icon={Recycle}
          title="Compost Drop-off"
          description="Bring your kitchen scraps to our hub. We turn waste into soil that nourishes our gardens."
          cta="Drop-off hours"
          href="#events"
        />
      </div>

      <div id="contact" className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
        <h3 className="font-semibold text-lg">Join the co-op</h3>
        <p className="mt-1">Sign up for volunteer days, workshop seats, or produce shares. Email us at <a className="underline" href="mailto:hello@urbanroots.local">hello@urbanroots.local</a> or stop by during an event.</p>
      </div>
    </div>
  );
}
