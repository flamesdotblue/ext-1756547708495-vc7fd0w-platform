import React, { useMemo } from 'react';

function formatKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function EventsCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const events = useMemo(() => {
    const base = new Date(year, month, 1);
    const mk = (day, title, time, type, location) => ({
      date: formatKey(new Date(base.getFullYear(), base.getMonth(), day)),
      title,
      time,
      type,
      location,
    });
    return [
      mk(3, 'Compost Drop-off', '5:00–7:00 PM', 'Compost', 'Co-op Hub'),
      mk(6, 'Community Garden Day', '10:00 AM–1:00 PM', 'Volunteer', 'Maple St. Lot'),
      mk(12, 'Balcony Gardening 101', '6:00–7:30 PM', 'Workshop', 'Co-op Hub'),
      mk(17, 'Seedling Swap', '11:00 AM–12:30 PM', 'Community', 'Co-op Hub'),
      mk(20, 'Compost Drop-off', '5:00–7:00 PM', 'Compost', 'Co-op Hub'),
      mk(27, 'Herb Harvest + Tea', '10:00 AM–12:00 PM', 'Workshop', 'Garden Beds'),
    ];
  }, [year, month]);

  const eventMap = useMemo(() => {
    const m = new Map();
    for (const e of events) {
      if (!m.has(e.date)) m.set(e.date, []);
      m.get(e.date).push(e);
    }
    return m;
  }, [events]);

  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  const startDay = monthStart.getDay();
  const daysInMonth = monthEnd.getDate();

  const weeks = [];
  let currentDay = 1 - startDay; // start from Sunday of the first week
  while (currentDay <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(year, month, currentDay);
      const inMonth = currentDay >= 1 && currentDay <= daysInMonth;
      const key = formatKey(date);
      week.push({ date, inMonth, key });
      currentDay++;
    }
    weeks.push(week);
  }

  const monthName = today.toLocaleString(undefined, { month: 'long', year: 'numeric' });

  return (
    <div>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-emerald-900">Calendar of Events</h2>
          <p className="text-stone-700">Workshops, volunteer days, and compost drop-offs this month.</p>
        </div>
        <div className="rounded-lg bg-stone-100 px-3 py-2 text-sm text-stone-700">{monthName}</div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
          <div key={d} className="px-2 py-1 text-xs font-semibold tracking-wide text-stone-600">{d}</div>
        ))}
        {weeks.map((week, wi) => (
          <React.Fragment key={wi}>
            {week.map(({ date, inMonth, key }) => {
              const hasEvents = eventMap.has(key);
              return (
                <div
                  key={key}
                  className={`min-h-[88px] rounded-xl border p-2 transition ${
                    inMonth ? 'bg-white/90 border-stone-200' : 'bg-stone-50 border-stone-200/60 text-stone-400'
                  } ${hasEvents ? 'ring-1 ring-emerald-600/30' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${inMonth ? 'text-stone-800' : 'text-stone-400'}`}>{date.getDate()}</span>
                    {hasEvents && <span className="inline-flex h-2 w-2 rounded-full bg-emerald-600" />}
                  </div>
                  <div className="mt-1 space-y-1">
                    {eventMap.get(key)?.slice(0,2).map((e, idx) => (
                      <div key={idx} className="truncate rounded-md bg-emerald-50 px-2 py-1 text-xs text-emerald-900">
                        {e.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <h3 className="text-lg font-semibold text-stone-900">Upcoming highlights</h3>
          <ul className="mt-3 space-y-3">
            {events.map((e, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-0.5 w-20 shrink-0 rounded-md bg-emerald-100 px-2 py-1 text-center text-xs font-medium text-emerald-900">
                  {new Date(e.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </div>
                <div>
                  <p className="font-medium text-stone-900">{e.title}</p>
                  <p className="text-sm text-stone-700">{e.time} • {e.location} • {e.type}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
          <h3 className="text-lg font-semibold">Compost drop-off guidelines</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Accepted: veggie scraps, coffee grounds, tea, eggshells.</li>
            <li>Avoid: meat, dairy, oil, plastic, or compostable bags.</li>
            <li>Bring in a sealed container; rinse stations available.</li>
          </ul>
          <p className="mt-3 text-sm">Questions? Email <a className="underline" href="mailto:compost@urbanroots.local">compost@urbanroots.local</a>.</p>
        </div>
      </div>
    </div>
  );
}
