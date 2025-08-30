import React from 'react';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-stone-200">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-semibold text-stone-900">Urban Roots Co-op</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-stone-700">
          <a className="hover:text-stone-900" href="#offerings">Offerings</a>
          <a className="hover:text-stone-900" href="#events">Events</a>
          <a className="hover:text-stone-900" href="#instagram">Instagram</a>
          <a className="hover:text-stone-900" href="#contact">Contact</a>
        </nav>
        <a href="#events" className="inline-flex items-center rounded-lg bg-emerald-700 px-3 py-2 text-sm font-medium text-white shadow hover:bg-emerald-800 transition">
          Get Involved
        </a>
      </div>
    </header>
  );
}
