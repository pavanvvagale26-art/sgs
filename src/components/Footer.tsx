import React from 'react';
import { PageId } from '../types';
import { BRAND } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-primary text-primary-fixed border-t-2 border-tertiary-fixed relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-space-xl">
          {/* Column 1: Brand Lore */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-surface-container-lowest p-1 shadow flex items-center justify-center border border-tertiary-fixed shrink-0 overflow-hidden">
                <img
                  alt="SGS Gundu Palav Crest Logo"
                  className="w-full h-full object-contain"
                  src={BRAND.logoUrl}
                />
              </div>
              <span className="font-bradley text-2xl text-tertiary-fixed font-bold leading-none">
                {BRAND.name}
              </span>
            </div>
            <p className="font-label-sm text-xs text-tertiary-fixed-dim uppercase tracking-wider">
              {BRAND.tagline}
            </p>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
              Keeping our rich culinary heritage alive with authentic South Indian spices and traditional Palav recipes, proudly serving Bengaluru since 1989.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-space-md">
            <span className="font-title-md text-title-md text-tertiary-fixed uppercase tracking-wider">
              Quick Navigation
            </span>
            <div className="flex flex-col gap-space-sm">
              <button
                onClick={() => handleNav('home')}
                className="text-left font-body-sm text-body-sm text-primary-fixed-dim hover:text-tertiary-fixed transition-colors cursor-pointer"
              >
                Home Heritage
              </button>
              <button
                onClick={() => handleNav('about-us')}
                className="text-left font-body-sm text-body-sm text-primary-fixed-dim hover:text-tertiary-fixed transition-colors cursor-pointer"
              >
                About Our Legacy
              </button>
              <button
                onClick={() => handleNav('menu')}
                className="text-left font-body-sm text-body-sm text-primary-fixed-dim hover:text-tertiary-fixed transition-colors cursor-pointer"
              >
                Signature Palav Menu
              </button>
              <button
                onClick={() => handleNav('our-locations')}
                className="text-left font-body-sm text-body-sm text-primary-fixed-dim hover:text-tertiary-fixed transition-colors cursor-pointer"
              >
                Our Outlets
              </button>
              <button
                onClick={() => handleNav('franchise')}
                className="text-left font-body-sm text-body-sm text-primary-fixed-dim hover:text-tertiary-fixed transition-colors cursor-pointer"
              >
                Franchise Opportunities
              </button>
              <button
                onClick={() => handleNav('gallery')}
                className="text-left font-body-sm text-body-sm text-primary-fixed-dim hover:text-tertiary-fixed transition-colors cursor-pointer"
              >
                Culinary Gallery
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="text-left font-body-sm text-body-sm text-primary-fixed-dim hover:text-tertiary-fixed transition-colors cursor-pointer"
              >
                Reach Out
              </button>
            </div>
          </div>

          {/* Column 3: Main Landmark Outlet */}
          <div className="flex flex-col gap-space-md">
            <span className="font-title-md text-title-md text-tertiary-fixed uppercase tracking-wider">
              Main Outlet
            </span>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
              21, K.V. Temple Street, 2nd Cross,<br />
              Sowrastra Pet Rd, near Balepet, Circle,<br />
              Bengaluru, Karnataka 560053
            </p>
            <div className="flex items-start gap-space-xs text-tertiary-fixed font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-[18px] mt-0.5 shrink-0">schedule</span>
              <span className="flex-1 text-xs text-primary-fixed-dim leading-relaxed">
                <span className="block font-semibold text-tertiary-fixed text-sm mb-1.5">Outlet Timings</span>
                <span className="flex justify-between items-center gap-2 py-0.5">
                  <span className="text-white/90 font-medium">Tue – Fri:</span>
                  <span className="text-right text-tertiary-fixed font-medium">10 am–3 pm, 6–9:30 pm</span>
                </span>
                <span className="flex justify-between items-center gap-2 py-0.5">
                  <span className="text-white/90 font-medium">Sunday:</span>
                  <span className="text-right text-tertiary-fixed font-medium">8 am–3 pm</span>
                </span>
                <span className="flex justify-between items-center gap-2 py-0.5 text-amber-300">
                  <span className="font-medium">Mon & Sat:</span>
                  <span className="font-semibold text-right">Closed</span>
                </span>
              </span>
            </div>
            <div className="flex items-center gap-space-xs text-tertiary-fixed-dim font-body-sm text-body-sm flex-wrap">
              <span className="material-symbols-outlined text-[18px]">call</span>
              <a href="tel:9341246466" className="hover:text-tertiary-fixed transition-colors text-white font-medium">
                9341246466
              </a>
            </div>
          </div>

          {/* Column 4: Franchise Hotline */}
          <div className="flex flex-col gap-space-md">
            <span className="font-title-md text-title-md text-tertiary-fixed uppercase tracking-wider">
              Franchise Hotline
            </span>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
              Connect directly with our corporate expansion and partnerships division.
            </p>
            <a
              href="tel:9341246466"
              className="inline-flex items-center gap-space-xs font-label-md text-label-md text-tertiary-fixed hover:text-on-primary transition-colors font-medium"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>9341246466</span>
            </a>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-space-xl pt-space-md border-t border-primary-container flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left">
          <p className="font-body-sm text-body-sm text-primary-fixed-dim">
            © 2024 SGS Gundu Palav. All Rights Reserved. Crafted for royal tastes.
          </p>
          <p className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider">
            Estd 1989 • Bengaluru Tradition
          </p>
        </div>
      </div>
    </footer>
  );
};
