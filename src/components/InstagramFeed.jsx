import React from 'react';
import { Instagram } from 'lucide-react';

const demoImages = [
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1437750769465-301382cdf094?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524594154908-edd0a1f00a5f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469536526925-9b5547cd66ac?q=80&w=800&auto=format&fit=crop',
];

export default function InstagramFeed() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">From the garden</h2>
        <p className="mt-3 text-stone-700">See what we’re growing and harvesting. Follow us on Instagram for daily updates.</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {demoImages.map((src, idx) => (
          <a
            key={idx}
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-square overflow-hidden rounded-xl border border-stone-200 bg-stone-100"
          >
            <img src={src} alt="Urban farm post" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/40 via-stone-900/0 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-stone-900 opacity-0 shadow transition group-hover:opacity-100">
              <Instagram className="h-3.5 w-3.5" />
              View on Instagram
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-white shadow hover:bg-emerald-800 transition"
        >
          <Instagram className="h-4 w-4" />
          Follow Urban Roots Co-op
        </a>
        <span className="text-sm text-stone-600">
          Want a live feed? Connect your Instagram token and replace this grid with your media endpoint.
        </span>
      </div>
    </div>
  );
}
