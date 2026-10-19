import React, { useState, useEffect } from 'react';
import { PageId, MenuItem } from '../types';
import { BRAND, MENU_ITEMS } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenFranchiseModal: () => void;
  onSelectMenuItem: (item: MenuItem) => void;
  onShowToast: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenFranchiseModal,
  onSelectMenuItem,
  onShowToast,
}) => {
  const chickenPalav = MENU_ITEMS.find((i) => i.id === 'chicken-donne-palav')!;
  const kshatriyaKabab = MENU_ITEMS.find((i) => i.id === 'legendary-kshatriya-kabab')!;
  const retailMasala = MENU_ITEMS.find((i) => i.id === 'sgs-palav-masala-retail')!;
  const muttonPalav = MENU_ITEMS.find((i) => i.id === 'mutton-donne-palav')!;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // High-resolution multi-dish imagery showing authentic culinary tradition
  const heroSlides = [
    {
      id: 'chicken-palav',
      name: 'Chicken Donne Palav',
      badge: 'Balepet Original',
      title: 'Authentic Military Dum',
      subtitle: 'Steaming hot Jeera Samba rice served in natural areca leaf cups',
      price: '₹220',
      icon: 'local_fire_department',
      image: BRAND.heroBannerUrl,
      alt: 'Steaming hot Chicken Donne Palav served in a traditional areca nut leaf donne cup',
      item: chickenPalav,
    },
    {
      id: 'kshatriya-kabab',
      name: 'Kshatriya Kabab',
      badge: 'Secret Military Crust',
      title: 'Legendary Kshatriya Kabab',
      subtitle: 'Ruby-hued crispy chicken flash-fried with fresh curry leaves & chilies',
      price: '₹210',
      icon: 'whatshot',
      image: kshatriyaKabab.image,
      alt: 'Crispy Legendary Kshatriya Kabab tossed with curry leaves',
      item: kshatriyaKabab,
    },
    {
      id: 'mutton-palav',
      name: 'Mutton Donne Palav',
      badge: 'Limited Morning Degh',
      title: 'Royal Mutton Donne Palav',
      subtitle: 'Slow-braised Karnataka mutton simmered with 17 military spices in degh',
      price: '₹340',
      icon: 'restaurant',
      image: muttonPalav.image,
      alt: 'Tender royal mutton donne palav simmered in brass degh',
      item: muttonPalav,
    },
    {
      id: 'balepet-cauldrons',
      name: 'Balepet Heritage Degh',
      badge: 'Estd 1989 Original',
      title: 'Wood-Fire Dum Opening',
      subtitle: 'Simmering brass cauldrons tended by master chefs at Balepet dawn',
      price: '',
      icon: 'outdoor_grill',
      image: BRAND.balepetStorefrontUrl,
      alt: 'Master chefs tending wood-fire brass cauldrons in Balepet',
      action: () => onNavigate('our-locations'),
    },
    {
      id: 'mutton-chops',
      name: 'Mutton Pepper Fry',
      badge: 'Fire Roasted',
      title: 'Sizzling Mutton Pepper Roast',
      subtitle: 'Succulent mutton chops pan-tossed with coarse black peppercorns',
      price: '₹360',
      icon: 'skillet',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSGXdoj9I9L9dt8nAZzbQyRugH_ewoGGDBac-8S3JOI_bDu4L33v2sloA1uUj6VHHLvt6CboWMD9gdxucST30juaUThvoj2aaso02c51-2FHWhdh6BuBwPnIRASirLY_ZsewckmtJjEYP9nwYOqcoM5Rv_flYaV-oCI0d8zq6GriL-cOmmtugnaOSEbYNxb8QaEWIP-KUh4dw602XPKOa5MBIZNhtcjieMgcumbF6-MVhsMvpWeUwRtw',
      alt: 'Sizzling mutton chops and pepper fry tossed on high heat',
      item: MENU_ITEMS.find((i) => i.id === 'mutton-chops-pepper-fry'),
    },
    {
      id: 'sgs-masala',
      name: 'Palav Masala Pack',
      badge: '100% Pure Spices',
      title: 'Secret 17-Spice Formula',
      subtitle: 'Bring home the aroma of 1989 with our vacuum-sealed spice master pack',
      price: '₹140',
      icon: 'stars',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbjdIRHeIrYFE4gZjKPD-QQdWpvw6kjvZa8Pg7ievgLgziePJINfr6IKqp48ekYfpyY8JbTp_xLwVGv8qvV-K-Ds5rhcAmyznQDxWmdYVUn-POJcG7HTnM5C0K-X8ChAdkDFLJWSYYrZVqXZsjG-1qc64YTGtUjwSG1kKKWDDAFO28xSHo-HL3n9AjP3ZLQVZep_kTSfOuXnSKzp4q4J2AR5wVr2vf0r6Kvv75uDoW9MhyyJs1FBd2bg',
      alt: 'Authentic 100g Sealed Royal Pouch SGS Palav Masala',
      item: retailMasala,
    },
  ];

  // Auto-cycle through the dishes every 3.8s with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handleSlideClick = () => {
    const current = heroSlides[activeSlide];
    if (current.item) {
      onSelectMenuItem(current.item);
    } else if (current.action) {
      current.action();
    } else {
      onNavigate('menu');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full bg-primary text-on-primary overflow-hidden py-space-xl lg:py-space-2xl">
        {/* Ambient Ornamental Glows with Breathing Animation */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-tertiary-fixed opacity-10 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-secondary-container opacity-15 blur-2xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
              {/* Tagline Chip with gentle float animation */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container w-fit shadow-sm animate-float-gentle border border-tertiary-fixed/20">
                <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-tertiary-fixed">
                  workspace_premium
                </span>
                <span className="font-label-sm text-[11px] sm:text-xs uppercase tracking-wider text-tertiary-fixed font-bold">
                  The Taste Every One Needs • Since 1989
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-bradley text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-tertiary-fixed leading-tight tracking-wide font-bold drop-shadow-md">
                The Taste <br className="hidden sm:inline" />
                <span className="text-secondary-fixed">Every One Needs</span>
              </h1>

              {/* Subhead */}
              <p className="font-body-lg text-sm sm:text-base lg:text-lg text-primary-fixed-dim max-w-xl leading-relaxed">
                SGS Nonveg Gundu Palav — Bengaluru's beloved donne palav restaurant, rooted in authentic South Indian tradition since 1989. Serving over 300 happy customers daily.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-sm sm:text-base rounded hover:bg-tertiary-fixed-dim transition-all shadow-md cursor-pointer font-bold active:scale-95 interactive-lift"
                >
                  <span>Explore Royal Menu</span>
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => onNavigate('our-locations')}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-primary-container text-tertiary-fixed font-title-md text-sm sm:text-base rounded hover:bg-on-primary-fixed-variant transition-all shadow-sm cursor-pointer interactive-lift border border-tertiary-fixed/20"
                >
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-tertiary-fixed">
                    storefront
                  </span>
                  <span>Find Nearest Outlet</span>
                </button>
              </div>

              {/* Heritage Stats Bar - responsive grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 mt-2 sm:mt-4 bg-primary-container/40 p-2.5 sm:p-4 rounded-xl backdrop-blur-sm border border-tertiary-fixed/15">
                {/* 1: Origin Year */}
                <div className="flex flex-col text-center sm:text-left group p-1 sm:p-2 rounded-lg hover:bg-primary-container/30 transition-all">
                  <span className="font-display-md text-xl sm:text-2xl md:text-3xl lg:text-4xl text-tertiary-fixed leading-none font-bold transition-transform group-hover:scale-105">
                    1989
                  </span>
                  <span className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider mt-1">
                    Origin Year
                  </span>
                </div>
                {/* 2: 300+ Daily Customers */}
                <div className="flex flex-col text-center sm:text-left group p-1 sm:p-2 rounded-lg hover:bg-primary-container/30 transition-all">
                  <span className="font-display-md text-xl sm:text-2xl md:text-3xl lg:text-4xl text-tertiary-fixed leading-none font-bold transition-transform group-hover:scale-105">
                    300+
                  </span>
                  <span className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider mt-1">
                    Daily Diners
                  </span>
                </div>
                {/* 3: 35+ Years of Legacy */}
                <div className="flex flex-col text-center sm:text-left group p-1 sm:p-2 rounded-lg hover:bg-primary-container/30 transition-all">
                  <span className="font-display-md text-xl sm:text-2xl md:text-3xl lg:text-4xl text-tertiary-fixed leading-none font-bold transition-transform group-hover:scale-105">
                    35+
                  </span>
                  <span className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider mt-1">
                    Years Legacy
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Graphic Frame - Animated Multi-Dish Showcase Carousel */}
            <div className="lg:col-span-5 relative flex flex-col items-center w-full">
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={handleSlideClick}
                className="relative w-full max-w-[480px] lg:max-w-[500px] bg-primary-container rounded-2xl p-2 sm:p-3 shadow-2xl border border-tertiary-fixed/30 group/hero interactive-lift cursor-pointer overflow-hidden select-none"
              >
                {/* Image Showcase Box */}
                <div className="rounded-xl overflow-hidden relative shadow-inner h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] bg-slate-950">
                  {/* Rotating Multi-Dish Image Slides with Crossfade Animation */}
                  {heroSlides.map((slide, idx) => {
                    const isActive = idx === activeSlide;
                    return (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                        }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                            isActive ? 'scale-105' : 'scale-100'
                          }`}
                        />
                      </div>
                    );
                  })}

                  {/* Gradient Scrim for Visual Depth & Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20 z-10 pointer-events-none" />

                  {/* Delicate Rising Steam Animation */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-5 z-20 pointer-events-none flex flex-col items-center opacity-65">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[24px] sm:text-[30px] animate-steam">
                      mode_heat
                    </span>
                  </div>

                  {/* Previous Slide Button - visible on touch devices, hover-fade on desktop */}
                  <button
                    onClick={handlePrevSlide}
                    aria-label="Previous dish image"
                    className="absolute left-2 sm:left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/95 flex items-center justify-center transition-all opacity-85 sm:opacity-0 sm:group-hover/hero:opacity-100 backdrop-blur-sm border border-white/20 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                  >
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">chevron_left</span>
                  </button>

                  {/* Next Slide Button - visible on touch devices, hover-fade on desktop */}
                  <button
                    onClick={handleNextSlide}
                    aria-label="Next dish image"
                    className="absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/95 flex items-center justify-center transition-all opacity-85 sm:opacity-0 sm:group-hover/hero:opacity-100 backdrop-blur-sm border border-white/20 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                  >
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">chevron_right</span>
                  </button>

                  {/* Floating Bottom Card with Prominently Displayed Dish Name & Details */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 p-2 sm:p-2.5 bg-primary/95 backdrop-blur-md rounded-xl flex items-center justify-between border border-tertiary-fixed/40 shadow-2xl z-20 transition-all gap-2">
                    <div className="flex items-center gap-2 sm:gap-2.5 overflow-hidden flex-1 min-w-0" key={activeSlide}>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary-container flex items-center justify-center text-tertiary-fixed shrink-0 border border-tertiary-fixed/30 animate-fade-in shadow-md">
                        <span className="material-symbols-outlined text-[18px] sm:text-[22px]">
                          {heroSlides[activeSlide].icon}
                        </span>
                      </div>
                      <div className="animate-fade-in-up min-w-0 flex-1">
                        <h3 className="font-title-lg text-xs sm:text-base lg:text-lg font-bold text-tertiary-fixed leading-tight tracking-wide truncate">
                          {heroSlides[activeSlide].name}
                        </h3>
                        <p className="font-body-sm text-[10px] sm:text-[11px] text-primary-fixed-dim mt-0.5 truncate">
                          {heroSlides[activeSlide].subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {heroSlides[activeSlide].price ? (
                        <span className="font-title-md text-[11px] sm:text-xs font-extrabold text-secondary-fixed bg-black/60 px-2 py-0.5 rounded border border-tertiary-fixed/30 shadow-sm">
                          {heroSlides[activeSlide].price}
                        </span>
                      ) : null}
                      <span className="font-label-sm text-[9px] sm:text-[10px] text-tertiary-fixed uppercase font-bold tracking-wider bg-primary-container px-1.5 py-0.5 rounded border border-tertiary-fixed/20 shadow-sm">
                        {heroSlides[activeSlide].badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Indicators / Navigation Dots */}
                <div className="flex items-center justify-center gap-1.5 pt-2 mt-0.5">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlide(idx);
                      }}
                      aria-label={`Jump to ${slide.name}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeSlide
                          ? 'w-6 sm:w-7 bg-tertiary-fixed shadow-[0_0_8px_rgba(255,223,150,0.8)]'
                          : 'w-2 bg-tertiary-fixed/30 hover:bg-tertiary-fixed/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE SPECIALTIES SHOWCASE */}
      <section className="w-full bg-surface py-space-2xl">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase bg-surface-container-high px-space-md py-space-xs rounded-full">
              Iconic Offerings
            </span>
            <h2 className="font-bradley text-4xl sm:text-5xl text-primary font-bold tracking-wide">
              The Masters of SGS
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mt-space-xs" />
            <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs max-w-2xl leading-relaxed">
              Every dish reflects our rich Balepet heritage, prepared with authentic spices, fresh ingredients, and traditional recipes to deliver a bold aroma and unforgettable taste in every bite.
            </p>
          </div>

          {/* 3-Card Grid with Interactive Lift & Image Zoom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Card 1: Donne Palav */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-primary/10 interactive-lift">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  alt="Chicken Donne Palav"
                  src={chickenPalav.image}
                />
                <span className="absolute top-space-sm left-space-sm bg-primary text-tertiary-fixed font-label-sm text-label-sm px-space-sm py-space-xs rounded uppercase tracking-wider shadow">
                  Crown Jewel
                </span>
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary-container transition-colors">
                    Chicken Donne Palav
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Signature rice dish served in a traditional leaf bowl with half egg, lime and raita.
                  </p>
                </div>
                <div className="flex items-center justify-end pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                  <button
                    onClick={() => onSelectMenuItem(chickenPalav)}
                    className="font-title-md text-title-md text-primary hover:text-secondary flex items-center gap-space-xs cursor-pointer group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Recipe</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Kshatriya Kabab */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-primary/10 interactive-lift">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Crispy Kshatriya Kabab"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  src={kshatriyaKabab.image}
                />
                <span className="absolute top-space-sm left-space-sm bg-tertiary text-on-tertiary font-label-sm text-label-sm px-space-sm py-space-xs rounded uppercase tracking-wider shadow">
                  Secret Spice Crust
                </span>
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary-container transition-colors">
                    Crispy Kshatriya Kabab
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    A signature SGS chicken specialty, prepared with a bold blend of aromatic spices for a rich flavour, fiery kick, and authentic Balepet taste in every bite.
                  </p>
                </div>
                <div className="flex items-center justify-end pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                  <button
                    onClick={() => onSelectMenuItem(kshatriyaKabab)}
                    className="font-title-md text-title-md text-primary hover:text-secondary flex items-center gap-space-xs cursor-pointer group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: SGS Palav Masala Blend */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-primary/10 interactive-lift">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  alt="SGS Palav Masala Spice Blend"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZkLVuQfr7_u8MYpggWkMeFHfqHkzch3tW9qQa2bxJCzDDs2b6wRLcexhwZL5sl49xPIvPqDV98yAexsZskpRSdNck_4w783karKl7YW5FdrHVjdpr4IByFVtbSNZFFSYIlKvm4sjaSIlw5Z1VrzN34Z2Q_pk41lB9uUIpElAJbcMqMJwafq6PQI93zM-LZLWDXJ8FHP_lXUu28tGzm46OaqhFXSXzhsU6uaSLTOP25lmaHQ4H_nmS-g"
                />
                <span className="absolute top-space-sm left-space-sm bg-primary-container text-tertiary-fixed font-label-sm text-label-sm px-space-sm py-space-xs rounded uppercase tracking-wider shadow">
                  Retail Packet
                </span>
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary-container transition-colors">
                    SGS Palav Masala Blend
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Bring the authentic taste of SGS to your home with our 100g royal spice mix, made with star anise and carefully roasted spices for rich aroma and delicious flavour.
                  </p>
                </div>
                <div className="flex items-center justify-end pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                  <button
                    onClick={() => onSelectMenuItem(retailMasala)}
                    className="font-title-md text-title-md text-primary hover:text-secondary flex items-center gap-space-xs cursor-pointer group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Packet</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BRING HOME THE SECRET OF 1989 (MASALA PACK FEATURE) */}
      <section className="w-full bg-primary text-on-primary py-space-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container opacity-30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="bg-primary-container rounded-2xl p-space-lg lg:p-space-xl shadow-2xl border border-tertiary-fixed/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Image Column with gentle float animation */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[380px] bg-primary rounded-xl p-space-sm shadow-xl border border-tertiary-fixed/40 animate-float-gentle interactive-lift">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      className="w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                      alt="Authentic 100g Sealed Royal Pouch"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbjdIRHeIrYFE4gZjKPD-QQdWpvw6kjvZa8Pg7ievgLgziePJINfr6IKqp48ekYfpyY8JbTp_xLwVGv8qvV-K-Ds5rhcAmyznQDxWmdYVUn-POJcG7HTnM5C0K-X8ChAdkDFLJWSYYrZVqXZsjG-1qc64YTGtUjwSG1kKKWDDAFO28xSHo-HL3n9AjP3ZLQVZep_kTSfOuXnSKzp4q4J2AR5wVr2vf0r6Kvv75uDoW9MhyyJs1FBd2bg"
                    />
                  </div>
                  <div className="mt-space-sm text-center">
                    <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-widest font-bold">
                      Authentic 100g Sealed Royal Pouch
                    </span>
                  </div>
                </div>
              </div>

              {/* Narrative Details */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary w-fit border border-tertiary-fixed/30">
                  <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                    stars
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider font-bold">
                    Same Royal Recipe Across All Outlets
                  </span>
                </div>
                <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-tertiary-fixed leading-tight">
                  Bring Home The Secret of 1989
                </h2>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">
                  For years, people have visited Balepet to enjoy our famous Military Palav. Now, bring that same traditional taste and rich aroma to your home with our special spice mix.
                </p>

                {/* Feature Points Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                  <div className="flex items-start gap-space-sm bg-primary/60 p-space-md rounded-lg border border-tertiary-fixed/15">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">
                      verified
                    </span>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-primary">
                        No Added Chemicals or Preservatives
                      </h4>
                      <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-space-xs">
                        Made with sun-dried whole spices, freshly ground using our traditional spice blend for authentic flavour and aroma.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm bg-primary/60 p-space-md rounded-lg border border-tertiary-fixed/15">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">
                      timer
                    </span>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-primary">
                        Ready in Just 30 Minutes
                      </h4>
                      <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-space-xs">
                        Follow the simple cooking instructions on each pouch to prepare delicious, flavourful Palav at home.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm bg-primary/60 p-space-md rounded-lg border border-tertiary-fixed/15">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">
                      restaurant_menu
                    </span>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-primary">
                        Perfect for Every Palav
                      </h4>
                      <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-space-xs">
                        Pairs wonderfully with chicken, mutton, paneer, and mushroom pulao for a rich and delicious taste.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm bg-primary/60 p-space-md rounded-lg border border-tertiary-fixed/15">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">
                      local_shipping
                    </span>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-primary">
                        Available at All Outlets
                      </h4>
                      <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-space-xs">
                        Pick up fresh packets straight from our restaurant counters across Karnataka.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
                  <button
                    onClick={() => onSelectMenuItem(retailMasala)}
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-title-md rounded hover:bg-tertiary-fixed-dim transition-all shadow-md cursor-pointer font-bold"
                  >
                    <span>View Spice Blend Details</span>
                    <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  </button>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider">
                    Pack size: 100 grams net • ₹140
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE BALEPET CHRONICLE (ABOUT US PREVIEW) */}
      <section className="w-full bg-surface-container-low py-space-2xl">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Story Column */}
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase bg-surface-container-high px-space-md py-space-xs rounded-full w-fit">
                The Story of Our Balepet Heritage
              </span>
              <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-on-surface leading-tight">
                Founded by Late Gundu Muneshwara &amp; Savithri
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                In 1989, Gundu Muneshwara and his wife Savithri started their journey in Balepet with a passion for traditional cooking and a unique Donne Palav recipe. What began as a small home-based business grew through the love and support of customers.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Today, their four sons continue the family tradition, preparing special masalas and preserving the authentic taste that has made SGS Gundu Palav a beloved name for generations.
              </p>

              {/* Core Value Badges with hover lift - responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-space-sm pt-space-xs">
                <div className="bg-surface-container-lowest p-space-sm sm:p-space-md rounded-lg shadow-sm text-center border border-primary/10 interactive-lift group">
                  <span className="material-symbols-outlined text-primary text-[24px] sm:text-[28px] group-hover:scale-110 transition-transform">
                    family_restroom
                  </span>
                  <p className="font-title-md text-base sm:text-title-md text-primary mt-1 sm:mt-space-xs font-bold">4 Sons</p>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Upholding Heritage</p>
                </div>
                <div className="bg-surface-container-lowest p-space-sm sm:p-space-md rounded-lg shadow-sm text-center border border-primary/10 interactive-lift group">
                  <span className="material-symbols-outlined text-primary text-[24px] sm:text-[28px] group-hover:scale-110 transition-transform">skillet</span>
                  <p className="font-title-md text-base sm:text-title-md text-primary mt-1 sm:mt-space-xs font-bold">Brass Degh</p>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Slow Charcoal Dum</p>
                </div>
                <div className="bg-surface-container-lowest p-space-sm sm:p-space-md rounded-lg shadow-sm text-center border border-primary/10 interactive-lift group">
                  <span className="material-symbols-outlined text-primary text-[24px] sm:text-[28px] group-hover:scale-110 transition-transform">
                    diversity_1
                  </span>
                  <p className="font-title-md text-base sm:text-title-md text-primary mt-1 sm:mt-space-xs font-bold">35+ Years</p>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Unchanged Recipe</p>
                </div>
              </div>

              <div className="pt-space-xs">
                <button
                  onClick={() => onNavigate('about-us')}
                  className="inline-flex items-center gap-space-xs text-primary font-title-lg text-base sm:text-title-lg hover:text-secondary transition-colors cursor-pointer group font-bold"
                >
                  <span className="group-hover:underline">Read Our Full Story</span>
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative border border-primary/20 interactive-lift group">
                <img
                  alt="Heritage brass cauldrons in SGS Gundu Palav kitchen"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSGXdoj9I9L9dt8nAZzbQyRugH_ewoGGDBac-8S3JOI_bDu4L33v2sloA1uUj6VHHLvt6CboWMD9gdxucST30juaUThvoj2aaso02c51-2FHWhdh6BuBwPnIRASirLY_ZsewckmtJjEYP9nwYOqcoM5Rv_flYaV-oCI0d8zq6GriL-cOmmtugnaOSEbYNxb8QaEWIP-KUh4dw602XPKOa5MBIZNhtcjieMgcumbF6-MVhsMvpWeUwRtw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-space-md left-3 sm:left-space-md right-3 sm:right-space-md text-on-primary">
                  <p className="font-label-sm text-[11px] sm:text-label-sm text-tertiary-fixed uppercase tracking-wider font-bold">
                    The Living Tradition
                  </p>
                  <p className="font-title-lg text-sm sm:text-title-lg text-on-primary font-semibold">
                    Bustling brass cauldrons slow-simmering fragrant donne palav at sunrise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUTLETS QUICK BANNER & FRANCHISE OPPORTUNITY */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          {/* Outlet Banner */}
          <div className="bg-surface-container p-4 sm:p-space-lg lg:p-space-xl rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-space-lg shadow-sm border border-primary/10 interactive-lift">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md w-full lg:w-auto">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary flex items-center justify-center text-tertiary-fixed shrink-0 shadow-md animate-pulse-glow">
                <span className="material-symbols-outlined text-[24px] sm:text-[32px]">pin_drop</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-xs sm:text-label-sm text-primary uppercase tracking-wider font-bold">
                  Experience The Magic Live
                </span>
                <h3 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface leading-tight font-bold">
                  Visit Our Balepet Flagship &amp; Network Outlets
                </h3>
                <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mt-space-xs">
                  Balepet • Jayanagar • Hessarghatta • Vajarahalli • Ullal • Nagarbhavi • Outlets @ IT Campus (Karle, EGL, ETV, Ecospace) • Mysore • Tumkur • Hubballi • Hosur &amp; more.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-space-md w-full lg:w-auto">
              <button
                onClick={() => onNavigate('our-locations')}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-2.5 sm:py-space-md bg-primary text-on-primary font-title-md text-sm sm:text-title-md rounded hover:bg-primary-container transition-all shadow-md cursor-pointer active:scale-95 font-bold"
              >
                <span className="material-symbols-outlined text-[20px]">directions</span>
                <span>View All Outlets &amp; Maps</span>
              </button>
            </div>
          </div>

          {/* Franchise Opportunity Hotline Banner */}
          <div className="bg-gradient-to-r from-primary to-primary-container text-on-primary p-4 sm:p-space-lg lg:p-space-xl rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg relative overflow-hidden border border-tertiary-fixed/30 interactive-lift">
            <div className="flex flex-col gap-space-xs max-w-2xl relative z-10 w-full lg:w-auto">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary-container text-tertiary-fixed w-fit border border-tertiary-fixed/20 animate-float-gentle">
                <span className="material-symbols-outlined text-[15px] sm:text-[16px]">handshake</span>
                <span className="font-label-sm text-[11px] sm:text-label-sm uppercase tracking-wider font-bold">
                  Franchise &amp; Expansion Partnerships
                </span>
              </div>
              <h3 className="font-headline-lg text-xl sm:text-2xl lg:text-headline-lg text-tertiary-fixed leading-tight font-bold">
                Partner With Karnataka’s Most Beloved Military Palav Brand
              </h3>
              <p className="font-body-md text-xs sm:text-body-md text-primary-fixed-dim leading-relaxed">
                Bring SGS Gundu Palav’s legendary heritage, high operational margins, and dedicated central spice kitchen support to your city.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-space-md shrink-0 w-full lg:w-auto relative z-10">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-space-lg py-2.5 sm:py-space-md bg-tertiary-fixed text-on-tertiary-fixed font-title-lg text-sm sm:text-title-lg rounded hover:bg-tertiary-fixed-dim transition-all shadow-md font-bold active:scale-95"
                href={`tel:${BRAND.phone}`}
              >
                <span className="material-symbols-outlined text-[20px] sm:text-[22px]">phone_in_talk</span>
                <span>{BRAND.displayPhone}</span>
              </a>
              <button
                onClick={onOpenFranchiseModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-space-lg py-2.5 sm:py-space-md bg-primary text-tertiary-fixed font-title-md text-sm sm:text-title-md rounded hover:bg-on-primary-fixed-variant transition-all cursor-pointer border border-tertiary-fixed/30 active:scale-95 font-bold"
              >
                <span>Franchise Opportunities</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
