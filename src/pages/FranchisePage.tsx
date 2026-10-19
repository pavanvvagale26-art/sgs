import React, { useState } from 'react';
import { BRAND } from '../data/mockData';

interface FranchisePageProps {
  onShowToast: (msg: string) => void;
}

export const FranchisePage: React.FC<FranchisePageProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: '',
    property: 'yes',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast('Franchise Prospectus requested! Our expansion director will call you within 24 hours.');
  };


  return (
    <div className="flex flex-col w-full">
      {/* HERO BANNER SECTION (Royal Blue Heritage Mood) */}
      <section className="relative w-full bg-primary text-on-primary overflow-hidden py-8 sm:py-14 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Ambient Gold & Deep Navy Scrim Ornaments */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-container/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-tertiary-container/30 blur-2xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-3 sm:space-y-4">
            {/* Heritage Gold Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-container/80 rounded-full shadow-sm border border-tertiary-fixed/30">
              <span className="material-symbols-outlined text-tertiary-fixed text-[16px] sm:text-[18px]">workspace_premium</span>
              <span className="font-label-sm text-[11px] sm:text-xs text-tertiary-fixed tracking-wider uppercase font-bold">
                Franchise &amp; Expansion Guild • Estd 1989
              </span>
            </div>

            <h1 className="font-bradley text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-tertiary-fixed tracking-tight leading-tight font-bold drop-shadow-md">
              Build Your Own <br className="hidden sm:inline" />
              <span className="text-secondary-fixed">SGS Gundu Palav Franchise</span>
            </h1>

            <p className="font-body-lg text-sm sm:text-base lg:text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              Join the SGS Gundu Palav family and bring our authentic Donne Palav tradition to more people. Share our signature flavours, aromatic spices, and beloved family recipes with your community.
            </p>

            {/* CTA Cluster */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-sm sm:text-base rounded-lg shadow-xl hover:bg-tertiary-fixed-dim transition-all font-bold"
                href={`tel:${BRAND.phone}`}
              >
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">call</span>
                <span>Direct Franchise Desk: {BRAND.displayPhone}</span>
              </a>
            </div>

            {/* Quick Proof Metrics */}
            <div className="pt-3 sm:pt-4 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg border-t border-primary-container/50">
              <div className="flex flex-col">
                <span className="font-headline-md text-xl sm:text-2xl lg:text-headline-md text-tertiary-fixed leading-tight font-bold">
                  35+
                </span>
                <span className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider font-semibold mt-0.5">
                  Years of Trust
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-xl sm:text-2xl lg:text-headline-md text-tertiary-fixed leading-tight font-bold">
                  100%
                </span>
                <span className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider font-semibold mt-0.5">
                  Standard Masala
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-xl sm:text-2xl lg:text-headline-md text-tertiary-fixed leading-tight font-bold">
                  Zero
                </span>
                <span className="font-label-sm text-[10px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider font-semibold mt-0.5">
                  Chef Risk
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Feature */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative bg-primary-container/60 rounded-xl p-2.5 sm:p-space-md shadow-2xl backdrop-blur-sm border border-tertiary-fixed/30">
              <div className="relative h-[280px] sm:h-[360px] lg:h-[440px] w-full rounded-lg overflow-hidden bg-primary shadow-inner flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  alt="A luxurious commercial pack of SGS Gundu Palav signature royal blue masala pouch sitting beside steaming authentic donne palav inside an aged bronze cauldron"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF7fXXoPaA6yWaniN9rvDt4jjApb_LmaAXp7GOkrHwdJWVus2qjQ2ZUCea61TB6Tx9Fcsk9s79n3Z8PQosv2Wopx6sz7TbtsL02PXIM1mJx_ovZm2SjmtAJE2_z2jByOwoCb84YBcB9HU4KTV6BX_njN4hbmAeaqIYzIbyJXlBSZ44DjY9x9ewF0n2JzAFqQeEu0F7YjP5MFuRKIE91IGDEvKzAsej7JIWcMvS9_tOz6zMOQvEoaBG8Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-85" />
                {/* Floating Hallmark Emblem Overlay */}
                <div className="absolute bottom-2.5 sm:bottom-space-md left-2.5 sm:left-space-md right-2.5 sm:right-space-md p-2.5 sm:p-space-md bg-primary/95 rounded-lg shadow-lg flex items-center gap-2 sm:gap-space-md border border-tertiary-fixed/40">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-tertiary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[22px] sm:text-[28px]">verified</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-xs sm:text-title-md text-tertiary-fixed leading-snug font-bold">
                      Proprietary Spice Blend Guarantee
                    </span>
                    <span className="font-body-sm text-[11px] sm:text-body-sm text-primary-fixed-dim">
                      Every franchise receives authentic premixes dispatched directly from Balepet central commissary.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY PARTNER WITH SGS GUNDU PALAV? (Bento Grid) */}
      <section className="w-full bg-surface py-space-2xl px-margin-mobile lg:px-margin">
        <div className="max-w-[1280px] mx-auto flex flex-col space-y-space-xl">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-bold">
              The Sovereign Advantage
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Why Partner With SGS Gundu Palav?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              A proven restaurant model designed to maintain consistent food quality, simplify daily operations, and bring authentic SGS Gundu Palav flavours to more customers.
            </p>
          </div>

          {/* Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Bento 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between space-y-space-md border border-primary/10">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">history_edu</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary leading-snug font-bold">
                  Over 35 Years of Customer Trust
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Loved by generations of Bengaluru food lovers, SGS Gundu Palav has built a lasting reputation for authentic taste and traditional flavours that keep customers coming back.
                </p>
              </div>
              <div className="pt-space-sm">
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                  Generational Trust <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Bento 2 (Hero Accent Royal Blue) */}
            <div className="bg-primary text-on-primary p-space-lg rounded-xl shadow-xl flex flex-col justify-between space-y-space-md lg:col-span-1 border border-tertiary-fixed/30">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-tertiary-fixed">
                  <span className="material-symbols-outlined text-[28px]">inventory_2</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-tertiary-fixed leading-snug font-bold">
                  Centralized Signature Masala Supply
                </h3>
                <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                  Maintain consistent SGS Gundu Palav flavours across every outlet with our specially prepared, pre-portioned masala blends. Simplified preparation helps reduce dependence on experienced chefs and makes daily kitchen operations easier.
                </p>
              </div>
              <div className="pt-space-sm">
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider font-bold">
                  Secret Family Recipe <span className="material-symbols-outlined text-[16px]">lock</span>
                </span>
              </div>
            </div>

            {/* Bento 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between space-y-space-md border border-primary/10">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">speed</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary leading-snug font-bold">
                  Efficient Operations &amp; Lower Setup Costs
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our fast-casual model and traditional Donne serving style help simplify dishwashing, improve table turnover, and make better use of your restaurant space.
                </p>
              </div>
              <div className="pt-space-sm">
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                  Faster Service, Smoother Operations <span className="material-symbols-outlined text-[16px]">trending_up</span>
                </span>
              </div>
            </div>

            {/* Bento 4 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between space-y-space-md border border-primary/10">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">restaurant_menu</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary leading-snug font-bold">
                  Complete Franchise Training &amp; Support
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Get guidance on kitchen setup, ingredient selection, food preparation, billing systems, and staff training to help you run your SGS Gundu Palav outlet smoothly.
                </p>
              </div>
              <div className="pt-space-sm">
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                  End-to-End Franchise Support <span className="material-symbols-outlined text-[16px]">check_circle</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 4: STEP-BY-STEP ONBOARDING PROCESS */}
      <section className="w-full bg-primary text-on-primary py-space-2xl px-margin-mobile lg:px-margin relative overflow-hidden border-t border-b border-tertiary-fixed/30">
        <div className="max-w-[1280px] mx-auto flex flex-col space-y-space-xl relative z-10">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="font-label-md text-label-md text-tertiary-fixed tracking-widest uppercase font-bold">
              The Roadmap to Grand Opening
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-tertiary-fixed tracking-tight">
              Step-by-Step Franchise Onboarding
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed-dim">
              From first handshake to first ceremonial degh ignition in under 45 days.
            </p>
          </div>

          {/* Process Steps Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
            {/* Step 1 */}
            <div className="bg-primary-container/70 p-space-md rounded-xl shadow-md flex flex-col justify-between space-y-space-md border border-tertiary-fixed/20">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-display-md text-display-md-mobile text-tertiary-fixed font-bold">01</span>
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">phone_in_talk</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-primary font-bold">Initial Discovery Call</h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                  Speak with the SGS expansion team at 9341246466 to discuss your franchise interests, investment budget, and suitable business opportunities.
                </p>
              </div>
              <div className="h-1 w-full bg-tertiary-fixed/30 rounded-full" />
            </div>

            {/* Step 2 */}
            <div className="bg-primary-container/70 p-space-md rounded-xl shadow-md flex flex-col justify-between space-y-space-md border border-tertiary-fixed/20">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-display-md text-display-md-mobile text-tertiary-fixed font-bold">02</span>
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">map</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-primary font-bold">Location Feasibility Assessment</h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                  Our team evaluates your proposed location by reviewing customer visits, road visibility, nearby competition, and commercial potential to help determine its suitability for an SGS Gundu Palav franchise.
                </p>
              </div>
              <div className="h-1 w-full bg-tertiary-fixed/30 rounded-full" />
            </div>

            {/* Step 3 */}
            <div className="bg-primary-container/70 p-space-md rounded-xl shadow-md flex flex-col justify-between space-y-space-md border border-tertiary-fixed/20">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-display-md text-display-md-mobile text-tertiary-fixed font-bold">03</span>
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">gavel</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-primary font-bold">Franchise Agreement</h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                  Sign the franchise agreement, complete the initial license payment, and receive the approved territory details and outlet layout plans.
                </p>
              </div>
              <div className="h-1 w-full bg-tertiary-fixed/30 rounded-full" />
            </div>

            {/* Step 4 */}
            <div className="bg-primary-container/70 p-space-md rounded-xl shadow-md flex flex-col justify-between space-y-space-md border border-tertiary-fixed/20">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-display-md text-display-md-mobile text-tertiary-fixed font-bold">04</span>
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">soup_kitchen</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-primary font-bold">Kitchen Setup &amp; Staff Training</h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                  Set up the kitchen equipment, install burners and cooking vessels, arrange proper ventilation, and train staff in SGS Gundu Palav’s food preparation methods.
                </p>
              </div>
              <div className="h-1 w-full bg-tertiary-fixed/30 rounded-full" />
            </div>

            {/* Step 5 */}
            <div className="bg-primary-container/70 p-space-md rounded-xl shadow-md flex flex-col justify-between space-y-space-md border border-tertiary-fixed/20">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-display-md text-display-md-mobile text-tertiary-fixed font-bold">05</span>
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">celebration</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-primary font-bold">Masala Supply &amp; Grand Launch</h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                  Receive the first supply of SGS Gundu Palav’s signature spices and get marketing support to launch your franchise successfully.
                </p>
              </div>
              <div className="h-1 w-full bg-tertiary-fixed rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FRANCHISE ENQUIRY CALLOUT FORM & HOTLINE */}
      <section className="w-full bg-surface py-space-2xl px-margin-mobile lg:px-margin" id="enquiry-form">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Editorial & Direct Line Information */}
          <div className="lg:col-span-5 flex flex-col space-y-space-lg">
            <div className="space-y-space-xs">
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-bold">
                Direct Expansion Desk
              </span>
              <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
                Initiate Your Franchise Journey
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Fill the preliminary interest brief or reach out instantly via our direct corporate line. We prioritize applications with ready commercial real estate in key Karnataka, Tamil Nadu, and Telangana corridors.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col space-y-space-md border border-primary/10">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed flex-shrink-0 shadow">
                  <span className="material-symbols-outlined text-[26px]">storefront</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                    Main Branch
                  </span>
                  <span className="font-title-lg text-title-lg text-primary font-bold">
                    Balepet Flagship Outlet
                  </span>
                </div>
              </div>

              <div className="space-y-space-xs">
                {/* Contact Number */}
                <a
                  className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg hover:bg-surface-container-high transition-colors text-primary font-title-lg text-title-lg font-bold"
                  href={`tel:${BRAND.phone}`}
                >
                  <span className="material-symbols-outlined text-secondary text-[22px]">call</span>
                  <span>{BRAND.displayPhone}</span>
                </a>

                {/* Main Branch Balepet Outlet */}
                <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg text-on-surface font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">location_on</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-primary">Balepet Main Outlet:</span>
                    <span className="text-on-surface-variant font-medium">21, K.V. Temple Street, 2nd Cross, Sowrastra Pet Rd, near Balepet Circle, Bengaluru, Karnataka 560053</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Note */}
            <div className="p-space-md bg-surface-container-low rounded-lg flex items-start gap-space-sm border border-primary/10">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">verified_user</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                All prospective applicants receive our detailed financial model dossier outlining food costs, operational margins, and projected payback schedules.
              </p>
            </div>
          </div>

          {/* Right Form Interface */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl rounded-xl shadow-xl border border-primary/15">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-container">
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Request Franchise Prospectus
                </h3>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                  Fast-Track Form
                </span>
              </div>

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col space-y-1">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="franchise-name">
                    Full Name *
                  </label>
                  <input
                    className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary shadow-sm"
                    id="franchise-name"
                    placeholder="e.g. Anand K. Rao"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="franchise-phone">
                    Phone Number *
                  </label>
                  <input
                    className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary shadow-sm"
                    id="franchise-phone"
                    placeholder="e.g. 98765 43210"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="franchise-email">
                    Email Address *
                  </label>
                  <input
                    className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary shadow-sm"
                    id="franchise-email"
                    placeholder="anand@example.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="franchise-city">
                    Preferred City / Locality *
                  </label>
                  <input
                    className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary shadow-sm"
                    id="franchise-city"
                    placeholder="e.g. Mysuru / Whitefield Bengaluru"
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>


              {/* Property Status */}
              <div className="flex flex-col space-y-1">
                <label className="font-label-md text-label-md text-on-surface">
                  Do you currently possess or lease commercial real estate?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                  <label className="flex items-center gap-space-xs p-space-sm bg-surface-container-low rounded cursor-pointer hover:bg-surface-container-high transition-colors">
                    <input
                      checked={formData.property === 'yes'}
                      onChange={() => setFormData({ ...formData, property: 'yes' })}
                      className="accent-primary"
                      name="property"
                      type="radio"
                      value="yes"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Yes, location identified
                    </span>
                  </label>
                  <label className="flex items-center gap-space-xs p-space-sm bg-surface-container-low rounded cursor-pointer hover:bg-surface-container-high transition-colors">
                    <input
                      checked={formData.property === 'no'}
                      onChange={() => setFormData({ ...formData, property: 'no' })}
                      className="accent-primary"
                      name="property"
                      type="radio"
                      value="no"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Seeking site recommendation
                    </span>
                  </label>
                </div>
              </div>

              {/* Notes / Message */}
              <div className="flex flex-col space-y-1">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="franchise-message">
                  Additional Notes (Optional)
                </label>
                <textarea
                  className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary shadow-sm"
                  id="franchise-message"
                  placeholder="Tell us about your restaurant background or target timeline..."
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-space-xs">
                <button
                  className="w-full py-space-md bg-primary text-on-primary font-title-lg text-title-lg rounded-lg shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-space-sm cursor-pointer font-bold"
                  type="submit"
                >
                  <span>Request Franchise Prospectus</span>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </div>

              <div className="text-center pt-space-xs">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Prefer instant consultation? Call <strong className="text-primary font-title-md">SGS Expansion Team</strong> directly at{' '}
                  <a className="text-primary underline font-title-md font-bold" href={`tel:${BRAND.phone}`}>
                    {BRAND.phone}
                  </a>.
                </p>
              </div>

              {/* Success Notification */}
              {submitted && (
                <div className="p-space-md bg-surface-container rounded-lg flex items-center gap-space-sm text-primary shadow border border-primary/20 animate-in fade-in">
                  <span className="material-symbols-outlined text-[24px]">task_alt</span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md leading-none font-bold">
                      Application Registered
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Our Bengaluru expansion director will dial you within 24 business hours.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
