import React from 'react';
import Header from './components/Header.jsx';
import Offerings from './components/Offerings.jsx';
import EventsCalendar from './components/EventsCalendar.jsx';
import InstagramFeed from './components/InstagramFeed.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-stone-800">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-emerald-100/70 via-emerald-50 to-stone-50" />

      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#16a34a_0,transparent_40%),radial-gradient(circle_at_80%_30%,#a16207_0,transparent_35%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight text-emerald-900">
                Urban Roots Co-op
              </h1>
              <p className="mt-4 text-lg text-stone-700 md:text-xl">
                A neighborhood-driven urban farming collective offering hands-on workshops, seasonal produce boxes, and community composting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#offerings" className="inline-flex items-center rounded-lg bg-emerald-700 px-5 py-3 text-white shadow hover:bg-emerald-800 transition">
                  Explore Offerings
                </a>
                <a href="#events" className="inline-flex items-center rounded-lg bg-stone-800 px-5 py-3 text-white shadow hover:bg-stone-900 transition">
                  Upcoming Events
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-600 to-amber-700 p-1 shadow-xl">
                <div className="h-full w-full rounded-2xl bg-white/90 p-4">
                  <div className="grid h-full grid-cols-3 grid-rows-3 gap-2">
                    <div className="col-span-2 row-span-2 rounded-lg bg-emerald-200/60" />
                    <div className="rounded-lg bg-amber-200/60" />
                    <div className="rounded-lg bg-emerald-100/80" />
                    <div className="rounded-lg bg-amber-100/80" />
                    <div className="col-span-2 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-900 font-medium">
                      Grown Locally • Shared Fairly
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rotate-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-emerald-900 shadow">
                Compost drop-off: Wed & Sat
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offerings" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Offerings />
      </section>

      <section id="events" className="bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <EventsCalendar />
        </div>
      </section>

      <section id="instagram" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <InstagramFeed />
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-stone-600">© {new Date().getFullYear()} Urban Roots Co-op. All rights reserved.</p>
          <p className="text-stone-600">Made with care in our neighborhood garden.</p>
        </div>
      </footer>
    </div>
  );
}
