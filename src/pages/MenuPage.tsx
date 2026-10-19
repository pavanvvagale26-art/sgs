import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/mockData';

interface MenuPageProps {
  onSelectMenuItem: (item: MenuItem) => void;
  onOpenFranchiseModal: () => void;
  onShowToast: (msg: string) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  onSelectMenuItem,
  onOpenFranchiseModal,
  onShowToast,
}) => {
  const [starterFilter, setStarterFilter] = useState<'all' | 'chicken' | 'mutton'>('all');

  const palavSpecialties = [
    MENU_ITEMS.find((i) => i.id === 'chicken-donne-palav')!,
    MENU_ITEMS.find((i) => i.id === 'mutton-donne-palav')!,
    MENU_ITEMS.find((i) => i.id === 'egg-donne-palav')!,
    MENU_ITEMS.find((i) => i.id === 'plain-donne-palav')!,
  ];
  const retailMasala = MENU_ITEMS.find((i) => i.id === 'sgs-palav-masala-retail')!;

  const chickenSpecialties = [
    { num: 1, item: MENU_ITEMS.find((i) => i.id === 'legendary-kshatriya-kabab')! },
    { num: 2, item: MENU_ITEMS.find((i) => i.id === 'chicken-kabab')! },
    { num: 3, item: MENU_ITEMS.find((i) => i.id === 'chicken-pepper')! },
    { num: 4, item: MENU_ITEMS.find((i) => i.id === 'chicken-chilli')! },
    { num: 5, item: MENU_ITEMS.find((i) => i.id === 'chicken-ghee-roast')! },
    { num: 6, item: MENU_ITEMS.find((i) => i.id === 'chicken-fry-chilly')! },
    { num: 7, item: MENU_ITEMS.find((i) => i.id === 'chicken-lollipop')! },
    { num: 8, item: MENU_ITEMS.find((i) => i.id === 'chicken-kalmi')! },
    { num: 9, item: MENU_ITEMS.find((i) => i.id === 'chicken-chops')! },
  ];

  const muttonSpecialties = [
    { num: 1, item: MENU_ITEMS.find((i) => i.id === 'mutton-pepper')! },
    { num: 2, item: MENU_ITEMS.find((i) => i.id === 'mutton-chops-pepper-fry')! },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Heritage Ornamental Hero Banner */}
      <section className="relative bg-primary overflow-hidden py-space-xl lg:py-space-2xl text-on-primary">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg className="w-[800px] h-[800px] text-tertiary-fixed" fill="currentColor" viewBox="0 0 200 200">
            <path d="M100 0 C105 50 150 95 200 100 C150 105 105 150 100 200 C95 150 50 105 0 100 C50 95 95 50 100 0 Z" />
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          {/* Royal Overline Crest */}
          <div className="flex items-center gap-2 mb-2 sm:mb-space-sm">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-tertiary-fixed" />
            <span className="font-label-sm text-[10px] sm:text-label-sm text-tertiary-fixed tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold">
              Estd 1989 • Bengaluru Military Heritage
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-tertiary-fixed" />
          </div>
          <h1 className="font-bradley text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tertiary-fixed max-w-3xl mb-2 sm:mb-space-sm font-bold leading-tight">
            Authentic Palav &amp; Signature Specialties
          </h1>
          <p className="font-body-lg text-sm sm:text-base lg:text-body-lg text-primary-fixed-dim max-w-2xl mx-auto leading-relaxed">
            Slow-cooked in degh cauldrons using pure Jeera Samba rice and served in traditional eco-friendly donne cups.
          </p>
          {/* Royal Badge Indicator */}
          <div className="mt-4 sm:mt-space-lg inline-flex items-center gap-2 px-3 sm:px-space-md py-1 bg-primary-container/60 rounded-full shadow-sm border border-tertiary-fixed/30">
            <span className="material-symbols-outlined text-tertiary-fixed text-[16px] sm:text-[18px]">workspace_premium</span>
            <span className="font-label-md text-xs sm:text-label-md text-tertiary-fixed tracking-wide font-bold">
              Available at all branches • Cooked fresh daily
            </span>
          </div>
        </div>
      </section>

      {/* Filter & Sensory Overview Strip */}
      <section className="bg-surface-container-low py-3 sm:py-space-md border-b border-primary/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-space-md">
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-xs sm:text-sm font-bold">
            <span className="material-symbols-outlined text-secondary text-[18px] sm:text-[20px]">restaurant_menu</span>
            <span>Authentic Traditional Palav Recipes</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-on-surface-variant font-body-sm text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim shrink-0" />
              <span>Pure Jeera Samba Short-Grain</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span>Zero Preservatives</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span>Dried Areca Donne</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Donne Palav Specialties */}
      <section className="py-space-2xl bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
          {/* Section Header with Ornamental Line */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
            <div>
              <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-space-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">skillet</span>
                <span>Signature Degh Cauldrons</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Donne Palav Specialties
              </h2>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-tertiary text-[18px]">eco</span>
              <span>Served piping hot with house Saagu gravy &amp; Curd Raita</span>
            </div>
          </div>

          {/* Donne Palav 4-Dish Showcase Grid with Dish Image Behind Each Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-space-lg mb-space-xl">
            {palavSpecialties.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-2xl min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] p-4 sm:p-6 lg:p-space-lg flex flex-col justify-between shadow-xl border border-tertiary-fixed/30 hover:border-tertiary-fixed hover:shadow-2xl transition-all duration-300 group interactive-lift"
              >
                {/* Dish image background - full cover */}
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Scrim: crystal clear upper area so image is fully uncovered, gentle gradient at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-35% to-transparent pointer-events-none" />

                {/* Top Badge & Price Bar */}
                <div className="relative z-10 flex items-start justify-between gap-2">
                  <span className="px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs sm:text-sm uppercase tracking-wider font-bold shadow-md">
                    {item.badge || 'Donne Special'}
                  </span>
                  <span className="font-headline-md text-base sm:text-headline-md text-tertiary-fixed font-bold drop-shadow-md bg-black/60 backdrop-blur-xs px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-lg border border-tertiary-fixed/30">
                    {item.price}
                  </span>
                </div>

                {/* Bottom Narrative & Dish Details */}
                <div className="relative z-10 flex flex-col gap-1 mt-auto">
                  <h3 className="font-bradley text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-tertiary-fixed transition-colors font-bold drop-shadow-md leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm lg:text-base text-gray-100 leading-relaxed drop-shadow-md max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Signature Starters & Military Sides */}
      <section className="py-8 sm:py-12 lg:py-space-2xl bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#d7e2ff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-space-lg gap-2">
            <div>
              <div className="flex items-center gap-1.5 text-tertiary-fixed font-label-sm text-xs uppercase tracking-wider mb-1 font-bold">
                <span className="material-symbols-outlined text-[16px]">whatshot</span>
                <span>Old Bangalore Savories</span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-tertiary-fixed font-bold">
                Signature Starters &amp; Sides
              </h2>
            </div>
          </div>

          {/* Starters Filter Switcher - horizontal scroll on mobile, flex on desktop */}
          <div className="flex items-center gap-2 mb-6 sm:mb-space-xl overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setStarterFilter('all')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full font-label-md text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                starterFilter === 'all'
                  ? 'bg-tertiary-fixed text-on-tertiary-fixed shadow'
                  : 'bg-primary-container/60 text-primary-fixed-dim hover:bg-primary-container hover:text-white'
              }`}
            >
              All Starters (11)
            </button>
            <button
              onClick={() => setStarterFilter('chicken')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full font-label-md text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                starterFilter === 'chicken'
                  ? 'bg-tertiary-fixed text-on-tertiary-fixed shadow'
                  : 'bg-primary-container/60 text-primary-fixed-dim hover:bg-primary-container hover:text-white'
              }`}
            >
              Chicken Specialties (9)
            </button>
            <button
              onClick={() => setStarterFilter('mutton')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full font-label-md text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                starterFilter === 'mutton'
                  ? 'bg-tertiary-fixed text-on-tertiary-fixed shadow'
                  : 'bg-primary-container/60 text-primary-fixed-dim hover:bg-primary-container hover:text-white'
              }`}
            >
              Mutton Specialties (2)
            </button>
          </div>

          {/* Chicken Specialties Sub-Section */}
          {(starterFilter === 'all' || starterFilter === 'chicken') && (
            <div className="mb-8 sm:mb-space-2xl">
              <div className="flex items-center justify-between mb-3 sm:mb-space-md border-b border-tertiary-fixed/20 pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[20px] sm:text-[24px]">restaurant</span>
                  <h3 className="font-headline-sm text-lg sm:text-headline-sm text-tertiary-fixed font-bold">
                    Chicken Specialties
                  </h3>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-tertiary-fixed-dim bg-primary-container px-2.5 py-0.5 rounded-full">
                  9 Items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-space-md">
                {chickenSpecialties.map(({ num, item }) => (
                  <div
                    key={item.id}
                    className="relative overflow-hidden rounded-xl min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] p-3 sm:p-4 lg:p-space-md flex flex-col justify-between shadow-xl border border-tertiary-fixed/30 hover:border-tertiary-fixed hover:shadow-2xl transition-all duration-300 group interactive-lift"
                  >
                    {/* Dish Image Behind the Card - full cover */}
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark gradient scrim focused on bottom text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-35% to-transparent pointer-events-none" />

                    {/* Top Row: Index number, Badge, and Price */}
                    <div className="relative z-10 flex items-start justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 backdrop-blur-xs text-tertiary-fixed font-bold text-[11px] sm:text-xs flex items-center justify-center border border-tertiary-fixed/40 shadow-sm shrink-0">
                          {String(num).padStart(2, '0')}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed shadow-sm truncate">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="font-headline-sm text-xs sm:text-sm lg:text-headline-sm text-tertiary-fixed font-bold drop-shadow-md bg-black/60 backdrop-blur-xs px-2 sm:px-2.5 py-0.5 rounded-lg border border-tertiary-fixed/30 shrink-0">
                        {item.price}
                      </span>
                    </div>

                    {/* Bottom Info: Title and Short Description */}
                    <div className="relative z-10 flex flex-col gap-0.5 sm:gap-1 mt-auto">
                      <h4 className="font-bradley text-lg sm:text-xl lg:text-2xl text-white group-hover:text-tertiary-fixed transition-colors font-bold drop-shadow-md leading-tight">
                        {item.name}
                      </h4>
                      <p className="font-body-sm text-[11px] sm:text-xs lg:text-body-sm text-gray-100 leading-relaxed drop-shadow-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mutton Specialties Sub-Section */}
          {(starterFilter === 'all' || starterFilter === 'mutton') && (
            <div className="mb-6 sm:mb-space-xl">
              <div className="flex items-center justify-between mb-3 sm:mb-space-md border-b border-tertiary-fixed/20 pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[20px] sm:text-[24px]">dinner_dining</span>
                  <h3 className="font-headline-sm text-lg sm:text-headline-sm text-tertiary-fixed font-bold">
                    Mutton Specialties
                  </h3>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-tertiary-fixed-dim bg-primary-container px-2.5 py-0.5 rounded-full">
                  2 Items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-space-md">
                {muttonSpecialties.map(({ num, item }) => (
                  <div
                    key={item.id}
                    className="relative overflow-hidden rounded-xl min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] p-3 sm:p-4 lg:p-space-md flex flex-col justify-between shadow-xl border border-tertiary-fixed/30 hover:border-tertiary-fixed hover:shadow-2xl transition-all duration-300 group interactive-lift"
                  >
                    {/* Dish Image Behind the Card - full cover */}
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark gradient scrim focused on bottom text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-35% to-transparent pointer-events-none" />

                    {/* Top Row: Index number, Badge, and Price */}
                    <div className="relative z-10 flex items-start justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 backdrop-blur-xs text-tertiary-fixed font-bold text-[11px] sm:text-xs flex items-center justify-center border border-tertiary-fixed/40 shadow-sm shrink-0">
                          {String(num).padStart(2, '0')}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed shadow-sm truncate">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="font-headline-sm text-xs sm:text-sm lg:text-headline-sm text-tertiary-fixed font-bold drop-shadow-md bg-black/60 backdrop-blur-xs px-2 sm:px-2.5 py-0.5 rounded-lg border border-tertiary-fixed/30 shrink-0">
                        {item.price}
                      </span>
                    </div>

                    {/* Bottom Info: Title and Short Description */}
                    <div className="relative z-10 flex flex-col gap-0.5 sm:gap-1 mt-auto">
                      <h4 className="font-bradley text-lg sm:text-xl lg:text-2xl text-white group-hover:text-tertiary-fixed transition-colors font-bold drop-shadow-md leading-tight">
                        {item.name}
                      </h4>
                      <p className="font-body-sm text-[11px] sm:text-xs lg:text-body-sm text-gray-100 leading-relaxed drop-shadow-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Addons */}
          <div className="bg-primary-container/20 p-3 sm:p-space-md rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-tertiary-fixed/15">
            <div>
              <h3 className="font-title-md text-sm sm:text-title-md text-tertiary-fixed font-bold">
                Sides &amp; Extras
              </h3>
              <p className="font-body-sm text-xs sm:text-body-sm text-primary-fixed-dim mt-0.5">
                Boiled Egg • Extra Onion &amp; Cucumber Salad • Fresh Lime
              </p>
            </div>
            <span className="px-3 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs uppercase tracking-wider whitespace-nowrap font-bold">
              Fresh Daily
            </span>
          </div>
        </div>
      </section>

      {/* Section 3: Retail Cook-At-Home Masala Range */}
      <section className="py-space-2xl bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
          <div className="bg-surface rounded-xl shadow-xl overflow-hidden p-space-lg lg:p-space-xl border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Masala Pack Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  onClick={() => onSelectMenuItem(retailMasala)}
                  className="relative max-w-[340px] w-full group cursor-pointer"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-tertiary-fixed to-primary-container rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
                  <div className="relative bg-surface rounded-lg overflow-hidden shadow-2xl border border-tertiary-fixed/40">
                    <img
                      alt="SGS Gundu Palav Masala 100g Retail Spice Pack"
                      className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb-nNApXV7IPtNhVeVLwDA_dWyZz3-Jv1vtRAOkk_tgfzXSqbf5FWsgNAE0uRJBgL1ugWD0MjF2pllWga5xOpDeLC6bn9goUO5xcbMHh2qNr13bnFRIlrQnPRJIeTv8KOluMndEL6VST7HtVwf3k4QexPbYq_76q8TkkPLKeaiY7tqqIS0c5qYXvGTJNqAZVhlgflIYLBgtHcczfOP3V0p14mDfUJ9GQz2JnWnyTPEa8YcWSJDoFfErw"
                    />
                  </div>
                </div>
              </div>

              {/* Product Details & Narrative */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="w-3 h-3 rounded-full bg-green-600" />
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                    100% Vegetarian Blend • Pure Spices
                  </span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                    Heritage Retail Edition
                  </span>
                  <h2 className="font-display-md text-display-md text-primary mt-space-xs">
                    SGS Gundu Palav Masala
                  </h2>
                  <span className="font-title-md text-title-md text-tertiary mt-1 block font-bold">
                    100g Master Blend Retail Pouch • ₹140
                  </span>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  Bring the authentic taste of SGS to your home with our 100g royal spice mix, made with star anise and carefully roasted spices for rich aroma and delicious flavour.
                </p>

                {/* Feature Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                  <div className="bg-surface-container rounded-lg p-space-sm flex flex-col gap-1 border border-primary/5">
                    <span className="material-symbols-outlined text-primary text-[22px]">verified</span>
                    <span className="font-title-md text-title-md text-primary">No Chemicals</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Zero preservatives or artificial colors
                    </span>
                  </div>
                  <div className="bg-surface-container rounded-lg p-space-sm flex flex-col gap-1 border border-primary/5">
                    <span className="material-symbols-outlined text-primary text-[22px]">auto_stories</span>
                    <span className="font-title-md text-title-md text-primary">Heritage Guide</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Step-by-step recipe detailed on pack
                    </span>
                  </div>
                  <div className="bg-surface-container rounded-lg p-space-sm flex flex-col gap-1 border border-primary/5">
                    <span className="material-symbols-outlined text-primary text-[22px]">storefront</span>
                    <span className="font-title-md text-title-md text-primary">All Outlets</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Available across counters &amp; grocery partners
                    </span>
                  </div>
                </div>

                {/* Branch Availability Notice */}
                <div className="mt-space-sm p-space-sm bg-secondary-fixed/40 rounded-lg flex items-center gap-space-sm text-on-secondary-fixed-variant border border-secondary/20">
                  <span className="material-symbols-outlined text-[20px]">info</span>
                  <span className="font-body-sm text-body-sm">
                    Pick up authentic retail pouches at the billing counters of Balepet, Vijayanagar, and all operational SGS Gundu Palav branches.
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onSelectMenuItem(retailMasala);
                      onShowToast('Retail Masala Pouch details opened! Pick up at any branch counter.');
                    }}
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary font-title-md rounded hover:bg-primary-container transition-all cursor-pointer shadow-md"
                  >
                    <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                    <span>View Pouch Formulation &amp; Recipe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Authentic Accompaniments & Dining Tradition */}
      <section className="py-space-xl bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
          <div className="bg-primary rounded-xl p-space-lg lg:p-space-xl text-center flex flex-col items-center justify-center relative overflow-hidden shadow-lg border border-tertiary-fixed/30 text-on-primary">
            <div className="max-w-3xl flex flex-col items-center gap-space-sm relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-tertiary-fixed mb-space-xs">
                <span className="material-symbols-outlined text-[28px]">eco</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-tertiary-fixed">
                The Donne Leaf Tradition
              </h3>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">
                Every Donne Palav is served hot in a traditional leaf bowl, accompanied by our complimentary house-made saagu and refreshing curd raita for a delicious and satisfying meal.
              </p>
              <div className="h-0.5 w-24 bg-tertiary-fixed/40 my-space-sm" />
              <p className="font-body-sm text-body-sm text-primary-fixed leading-relaxed">
                Our traditional Donne bowls bring a touch of heritage to every meal. Served hot, our aromatic Jeera Samba rice pairs beautifully with the natural, earthy feel of the leaf bowl for an authentic dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
