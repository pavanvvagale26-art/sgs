import React from 'react';
import { Outlet } from '../types';
import { BRAND, OUTLETS, UPCOMING_CITIES } from '../data/mockData';

interface LocationsPageProps {
  onOpenFranchiseModal: () => void;
  onShowToast: (msg: string) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({
  onOpenFranchiseModal,
  onShowToast,
}) => {
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${label} to clipboard!`);
  };

  const centralSouthOutlets = OUTLETS.filter((o) => o.zone === 'central');
  const northWestOutlets = OUTLETS.filter((o) => o.zone === 'north');
  const itCampusOutlets = OUTLETS.filter((o) => o.zone === 'tech');
  const outOfBangaloreOutlets = OUTLETS.filter((o) => o.zone === 'outstation');

  const outletSections = [
    {
      id: 'central-south',
      title: 'Central & South Bengaluru',
      subtitle: 'Historic Balepet Flagship (1989), Jayanagar heritage dining, and Vajarahalli branch.',
      badge: 'Central & South Zone',
      icon: 'location_city',
      outlets: centralSouthOutlets,
    },
    {
      id: 'north-west',
      title: 'North & West Bengaluru',
      subtitle: 'Serving traditional military palav across Malleshwaram, Hessarghatta, Sahakaarnagar, Ullal, and Nagarbhavi.',
      badge: 'North & West Zone',
      icon: 'explore',
      outlets: northWestOutlets,
    },
    {
      id: 'it-campus',
      title: 'Outlets @ IT Campus',
      subtitle: 'Specialized tech park counters and express food courts across Bengaluru’s premier IT business parks.',
      badge: 'Tech Parks & Campus Counters',
      icon: 'corporate_fare',
      outlets: itCampusOutlets,
    },
    {
      id: 'out-of-bangalore',
      title: 'Out of Bangalore & Regional Outlets',
      subtitle: 'Spreading authentic Bangalore Donne Palav culinary heritage across Mysuru, Tumakuru, Hubballi, and Hosur (Tamil Nadu).',
      badge: 'Interstate & Regional Outlets',
      icon: 'distance',
      outlets: outOfBangaloreOutlets,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Section 1: Hero Banner & Decorative Intro */}
      <section className="relative bg-primary text-on-primary overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-gradient-to-br from-tertiary-fixed/10 to-transparent pointer-events-none blur-3xl" />
        <div className="absolute -left-24 bottom-0 w-80 h-80 rounded-full bg-secondary-container/10 pointer-events-none blur-2xl" />

        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Crest Overline Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-tertiary-fixed font-label-sm text-xs sm:text-label-sm uppercase tracking-wider mb-3 sm:mb-space-md shadow-sm border border-tertiary-fixed/30 font-bold">
            <span className="material-symbols-outlined text-[15px] sm:text-[16px]">restaurant</span>
            <span>Original Karnataka Legacy • Estd. 1989</span>
          </div>
          <h1 className="font-bradley text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tertiary-fixed max-w-4xl tracking-tight font-bold leading-tight">
            Our Branches &amp; Outlets
          </h1>
          <p className="font-body-lg text-sm sm:text-base lg:text-body-lg text-primary-fixed-dim max-w-2xl mt-2 sm:mt-space-md leading-relaxed">
            Visit us to enjoy hot, freshly prepared Donne Palav, cooked with aromatic spices, fresh mint, and carefully selected ingredients for an authentic taste of Balepet tradition.
          </p>

          {/* Royal Metric Badges - 2 cols on mobile, 4 cols on desktop/tablet */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-4xl mt-6 sm:mt-space-xl">
            <div className="bg-primary-container/60 p-3 sm:p-space-md rounded-xl text-center backdrop-blur-sm shadow-sm border border-tertiary-fixed/20">
              <p className="font-headline-md text-xl sm:text-headline-md text-tertiary-fixed leading-none font-bold">35+</p>
              <p className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider mt-1">
                Years Mastery
              </p>
            </div>
            <div className="bg-primary-container/60 p-3 sm:p-space-md rounded-xl text-center backdrop-blur-sm shadow-sm border border-tertiary-fixed/20">
              <p className="font-headline-md text-xl sm:text-headline-md text-tertiary-fixed leading-none font-bold">{OUTLETS.length}</p>
              <p className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider mt-1">
                Active Outlets
              </p>
            </div>
            <div className="bg-primary-container/60 p-3 sm:p-space-md rounded-xl text-center backdrop-blur-sm shadow-sm border border-tertiary-fixed/20">
              <p className="font-headline-md text-xl sm:text-headline-md text-tertiary-fixed leading-none font-bold">100%</p>
              <p className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider mt-1">
                Authentic Degh
              </p>
            </div>
            <div className="bg-primary-container/60 p-3 sm:p-space-md rounded-xl text-center backdrop-blur-sm shadow-sm border border-tertiary-fixed/20">
              <p className="font-headline-md text-xl sm:text-headline-md text-tertiary-fixed leading-none font-bold">3</p>
              <p className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider mt-1">
                Cities Launching
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Flagship Golden Highlight (Balepet Landmark) */}
      <section className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden p-space-md lg:p-space-xl border border-tertiary-fixed/40">
          {/* Decorative Top Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md border-b border-primary/10 mb-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-tertiary-fixed shadow-sm">
                <span className="material-symbols-outlined text-[20px]">stars</span>
              </span>
              <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest font-bold">
                Crown Jewel Heritage Destination
              </span>
            </div>
            <span className="px-space-md py-space-xs bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider rounded font-bold shadow-sm">
              Original Heritage Kitchen
            </span>
          </div>

          {/* Main Highlight Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Visual Presentation Left */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-lg shadow-md border border-primary/20">
              <img
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                alt="Traditional Indian copper degh cauldron steaming with hot aromatic Donne Palav in Balepet"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDphLLl-1J9cPIscijbzrINUNHQTWO4ZUy32bQKiVStIBRKUsQ0c_xF2_QLzWT9nJUjOia1uuZil1s1nAGiGYL_cQq08eYYTaGs-H2_9Kpde0vLjpq-2RpsiH3afUzQ12RtjZWM8rg3_4gc_8_NYUWYawo0Dw8H-QmmwbV18d2mQqxqlLSmPBYtn39k5DdE19HCqKBuLlVzpx-8gKvdilatNrCCygS_1xR__9NHdDInua6atffrDi_4Zg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-space-lg text-on-primary">
                <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider font-bold">
                  Estd. 1989 Landmark
                </span>
                <p className="font-title-lg text-title-lg text-on-primary font-bold">
                  Our Original Balepet Branch.
                </p>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                  Where the sensory journey of SGS Gundu Palav first began 35 years ago.
                </p>
              </div>
            </div>

            {/* Information Right */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-baseline gap-space-sm">
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    Balepet Flagship (Since 1989)
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                  The heart of our culinary tradition lies in historic Chickpet–Balepet, where our kitchen prepares fresh, aromatic Donne Palav every day. Rooted in family recipes and traditional cooking methods, we proudly serve food lovers who cherish the authentic taste of SGS Gundu Palav.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mt-space-lg">
                  <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low border border-primary/5">
                    <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">
                      location_on
                    </span>
                    <div>
                      <p className="font-title-md text-title-md text-primary font-bold">
                        Balepet Flagship
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        21, K.V. Temple Street, 2nd Cross, Sowrastra Pet Rd, near Balepet, Circle, Bengaluru, Karnataka 560053
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low border border-primary/5">
                    <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">
                      schedule
                    </span>
                    <div>
                      <p className="font-title-md text-title-md text-primary font-bold">Outlet Timings</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        <span className="block font-medium">Tue – Fri: 10 am–3 pm, 6–9:30 pm</span>
                        <span className="block font-medium">Sunday: 8 am–3 pm</span>
                      </p>
                      <span className="font-label-sm text-label-sm text-amber-700 font-semibold block mt-0.5">
                        Mon &amp; Sat: Closed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-space-md mt-space-md p-space-sm rounded-lg bg-surface-container-high border border-primary/10">
                  <a
                    href="tel:9341246466"
                    className="flex items-center gap-space-xs text-primary font-title-md text-title-md hover:underline font-bold"
                  >
                    <span className="material-symbols-outlined text-[20px]">call</span>
                    <span>9341246466</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-space-sm mt-space-lg">
                <a
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary font-label-lg text-label-lg rounded shadow hover:bg-primary-container transition-all cursor-pointer font-bold"
                  href="tel:9341246466"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Call Flagship</span>
                </a>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      '21, K.V. Temple Street, 2nd Cross, Sowrastra Pet Rd, near Balepet, Circle, Bengaluru, Karnataka 560053 • 9341246466',
                      'Balepet Flagship Address'
                    )
                  }
                  className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container text-primary font-label-lg text-label-lg rounded hover:bg-surface-container-high transition-all cursor-pointer border border-primary/15 font-semibold"
                >
                  <span className="material-symbols-outlined text-[18px]">content_copy</span>
                  <span>Copy Address &amp; Info</span>
                </button>
                <a
                  className="inline-flex items-center gap-space-xs px-space-md py-space-sm text-secondary font-label-lg text-label-lg hover:text-primary transition-colors ml-auto font-bold"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('SGS Non Veg Gundu Palav, 21, K.V. Temple Street, 2nd Cross, Sowrastra Pet Rd, near Balepet Circle, Bengaluru, Karnataka 560053')}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">navigation</span>
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Location Discovery & City Outlets Grid */}
      <section className="max-w-[1280px] mx-auto w-full px-margin-mobile lg:px-margin py-space-2xl">
        {/* Directory Intro & Jump Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[16px]">storefront</span>
              <span>Authentic Branch Directory</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-space-xs font-bold">
              Our Outlets Across Bengaluru &amp; Beyond
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Organized into dedicated sections across Central &amp; South Bengaluru, North &amp; West, IT Campus food courts, and Out of Bangalore regional locations.
            </p>
          </div>

          {/* Quick Jump Bar - smoothly scrollable on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-surface-container p-2 sm:p-2.5 rounded-xl shadow-sm border border-primary/10 overflow-x-auto no-scrollbar sm:flex-wrap">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-on-surface-variant px-2 py-1 flex items-center gap-1 shrink-0">
              <span className="material-symbols-outlined text-[14px] sm:text-[15px]">near_me</span>
              <span>Zones:</span>
            </span>
            {outletSections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => {
                  document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs whitespace-nowrap shrink-0"
              >
                <span className="material-symbols-outlined text-[14px]">{sec.icon}</span>
                <span>{sec.title}</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-primary/15 text-current font-bold">
                  {sec.outlets.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Separate Sections for Different Parts */}
        <div className="flex flex-col gap-14">
          {outletSections.map((sec, secIdx) => (
            <div
              key={sec.id}
              id={sec.id}
              className={`scroll-mt-24 ${secIdx !== 0 ? 'pt-10 border-t border-outline-variant/30' : ''}`}
            >
              {/* Section Part Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-space-lg">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-1">
                    <span className="material-symbols-outlined text-[15px]">{sec.icon}</span>
                    <span>{sec.badge}</span>
                  </div>
                  <h3 className="font-bradley text-3xl text-primary font-bold">
                    {sec.title}
                    <span className="ml-3 text-xs font-sans font-bold text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded-full align-middle">
                      {sec.outlets.length} {sec.outlets.length === 1 ? 'Outlet' : 'Outlets'}
                    </span>
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
                    {sec.subtitle}
                  </p>
                </div>
              </div>

              {/* Outlet Cards Grid for this Part */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {sec.outlets.map((outlet) => (
                  <div
                    key={outlet.id}
                    className={`bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border ${
                      outlet.isOutOfBangalore
                        ? 'border-amber-400 ring-1 ring-amber-300/40'
                        : outlet.isITCampus
                        ? 'border-indigo-300 ring-1 ring-indigo-200/50'
                        : 'border-primary/10'
                    } group`}
                  >
                    <div>
                      {outlet.image && (
                        <div className="relative h-48 w-full overflow-hidden bg-primary-fixed/20 border-b border-outline-variant/20">
                          <img
                            src={outlet.image}
                            alt={outlet.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                          <div className="absolute bottom-3 left-3 flex items-center">
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold text-on-primary bg-primary/90 backdrop-blur-sm tracking-wider uppercase">
                              {outlet.zoneLabel}
                            </span>
                          </div>
                          {outlet.isOutOfBangalore && (
                            <div className="absolute top-3 right-3 flex items-center">
                              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold text-amber-950 bg-amber-400 border border-amber-500 shadow-md flex items-center gap-1 uppercase tracking-wider">
                                <span className="material-symbols-outlined text-[14px]">distance</span>
                                Out of Bangalore
                              </span>
                            </div>
                          )}
                          {outlet.isITCampus && (
                            <div className="absolute top-3 right-3 flex items-center">
                              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold text-indigo-950 bg-indigo-100 border border-indigo-300 shadow-md flex items-center gap-1 uppercase tracking-wider">
                                <span className="material-symbols-outlined text-[14px]">corporate_fare</span>
                                IT Campus
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="p-space-lg">
                        {!outlet.image && (
                          <div className="flex items-center justify-between gap-space-sm mb-space-sm flex-wrap">
                            <span className="px-space-sm py-0.5 rounded text-primary bg-primary-fixed font-label-sm text-label-sm font-semibold uppercase">
                              {outlet.zoneLabel}
                            </span>
                            <div className="flex items-center gap-2">
                              {outlet.isITCampus && (
                                <span className="px-2 py-0.5 rounded text-[11px] font-bold text-indigo-950 bg-indigo-200 border border-indigo-300 uppercase tracking-wider flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[13px]">corporate_fare</span>
                                  IT Campus
                                </span>
                              )}
                              <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                                <span className={`w-2 h-2 rounded-full ${outlet.typeColor} inline-block`} />
                                {outlet.typeLabel}
                              </span>
                            </div>
                          </div>
                        )}
                        {outlet.image && (
                          <div className="flex items-center justify-between gap-space-sm mb-space-xs">
                            <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                              <span className={`w-2 h-2 rounded-full ${outlet.typeColor} inline-block`} />
                              {outlet.typeLabel}
                            </span>
                            {outlet.isITCampus && (
                              <span className="text-[11px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[13px]">corporate_fare</span>
                                Food Court
                              </span>
                            )}
                          </div>
                        )}
                        <h3 className="font-bradley text-2xl text-primary font-bold">
                          {outlet.name}
                        </h3>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outlet.mapQuery || `SGS Non Veg Gundu Palav, ${outlet.address}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-1.5 mt-space-xs text-on-surface hover:text-primary transition-colors cursor-pointer"
                          title={`Open ${outlet.name} on Google Maps`}
                        >
                          <span className="material-symbols-outlined text-secondary group-hover:text-primary text-[20px] shrink-0 mt-0.5">
                            location_on
                          </span>
                          <span className="font-body-md text-body-md font-semibold group-hover:underline">
                            {outlet.address}
                          </span>
                        </a>
                        <div className="mt-space-md pt-space-sm flex flex-col gap-space-sm border-t border-surface-container">
                          {outlet.phone && (
                            <div className="flex items-center gap-space-sm text-on-surface">
                              <span className="material-symbols-outlined text-secondary text-[20px]">call</span>
                              <a
                                className="font-title-md text-title-md hover:text-primary transition-colors font-bold"
                                href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                              >
                                {outlet.phone}
                              </a>
                            </div>
                          )}
                          <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                            <span className="material-symbols-outlined text-outline text-[20px]">schedule</span>
                            <span>{outlet.timings}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-space-lg pt-0 flex items-center justify-between border-t border-surface-container">
                      {outlet.phone ? (
                        <a
                          className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-bold hover:underline"
                          href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                        >
                          <span className="material-symbols-outlined text-[16px]">phone_enabled</span>
                          <span>Contact Desk</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[16px] text-secondary">storefront</span>
                          <span className="font-medium">Direct Food Court Counter</span>
                        </span>
                      )}
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outlet.mapQuery || `SGS Non Veg Gundu Palav, ${outlet.address}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-secondary hover:text-primary px-2.5 py-1 rounded bg-secondary-container/40 hover:bg-secondary-container text-xs font-bold transition-colors cursor-pointer"
                          title={`Navigate to ${outlet.name} on Google Maps`}
                        >
                          <span className="material-symbols-outlined text-[16px]">map</span>
                          <span>Map</span>
                        </a>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopy(
                              `${outlet.name}, ${outlet.address}${outlet.phone ? `, Tel: ${outlet.phone}` : ''}`,
                              outlet.name
                            )
                          }
                          className="text-outline hover:text-primary p-space-xs rounded transition-colors cursor-pointer"
                          title="Copy Info"
                        >
                          <span className="material-symbols-outlined text-[18px]">share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Upcoming Outlets (Expansion Horizon) */}
      <section className="w-full bg-primary-container text-on-primary py-space-2xl px-margin-mobile lg:px-margin relative overflow-hidden border-t border-tertiary-fixed/30">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider mb-space-sm border border-tertiary-fixed/30 font-bold">
            <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
            <span>Karnataka State Expansion</span>
          </div>
          <h2 className="font-headline-lg lg:font-display-md text-headline-lg lg:text-display-md text-tertiary-fixed max-w-3xl">
            Coming Soon @ Yelahanka, Udupi &amp; RR Nagar!
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mt-space-sm">
            Bringing the authentic taste of Bengaluru Donne Palav closer to you.
          </p>

          {/* 3 Preview Cards of Upcoming Cities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg w-full mt-space-xl">
            {UPCOMING_CITIES.map((item, idx) => (
              <div
                key={idx}
                className="bg-primary/80 backdrop-blur-md p-space-lg rounded-xl text-left shadow-md flex flex-col justify-between border border-tertiary-fixed/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-bradley text-2xl text-tertiary-fixed font-bold">
                      {item.city}
                    </span>
                    <span className="px-space-sm py-0.5 rounded bg-tertiary-container text-tertiary-fixed font-label-sm text-label-sm font-semibold">
                      {item.area}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-primary-fixed leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm text-tertiary-fixed-dim font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-space-xs border-t border-primary/40 font-bold">
                  <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Central Branch Assistance & Bulk Orders */}
      <section className="max-w-[1280px] mx-auto w-full px-margin-mobile lg:px-margin py-space-2xl">
        <div className="bg-surface-container rounded-xl p-space-lg lg:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm border border-primary/10">
          <div className="flex items-start gap-space-md max-w-2xl">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">support_agent</span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
                Central Hospitality Desk
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
                Quick Branch Assistance &amp; Large Orders
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                For bulk catering, celebration deliveries, or general branch inquiries, call our central desk directly.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full md:w-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-title-md rounded font-bold shadow hover:bg-tertiary-fixed-dim transition-all"
              href={`tel:${BRAND.phone}`}
            >
              <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
              <span>{BRAND.displayPhone}</span>
            </a>
            <button
              onClick={onOpenFranchiseModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-primary text-on-primary font-title-md text-title-md rounded font-bold shadow hover:bg-primary-container transition-all cursor-pointer"
            >
              <span>Franchise Enquiry</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
