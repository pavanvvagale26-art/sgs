import React, { useState } from 'react';
import { PageId } from '../types';
import { BRAND } from '../data/mockData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenFranchiseModal: () => void;
  onOpenProfileModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenFranchiseModal,
  onOpenProfileModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'menu', label: 'Menu' },
    { id: 'our-locations', label: 'Our Locations' },
    { id: 'franchise', label: 'Franchise' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-primary shadow-[0_12px_32px_-4px_rgba(6,44,99,0.18)]">
      <div className="h-18 sm:h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        {/* Brand Crest & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3.5 text-left cursor-pointer group focus:outline-none min-w-0"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-surface-container-lowest p-1 sm:p-1.5 shadow-md flex items-center justify-center border-2 border-tertiary-fixed/60 transition-transform duration-300 group-hover:scale-105 shrink-0 overflow-hidden">
            <img
              alt="SGS Gundu Palav Crest Logo"
              className="w-full h-full object-contain"
              src="/logo.svg"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bradley text-lg sm:text-2xl lg:text-3xl text-tertiary-fixed font-bold tracking-wide leading-none uppercase drop-shadow-sm truncate">
              {BRAND.name}
            </span>
            <span className="font-label-sm text-[9px] sm:text-[11px] lg:text-xs text-tertiary-fixed-dim tracking-wider sm:tracking-widest uppercase mt-0.5 sm:mt-1 truncate">
              {BRAND.tagline}
            </span>
          </div>
        </button>

        {/* Desktop & Laptop Navigation (Visible on lg 1024px+ and xl 1280px+) */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-6 shrink-0">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-label-md xl:font-label-lg text-xs xl:text-sm transition-colors py-1 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-tertiary-fixed border-b-2 border-tertiary-fixed font-bold'
                    : 'text-primary-fixed-dim hover:text-tertiary-fixed'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Hub */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Franchise Enquiry Button - responsive label */}
          <button
            onClick={onOpenFranchiseModal}
            className="inline-flex items-center justify-center px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-xs sm:text-sm rounded shadow-sm hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all cursor-pointer font-bold active:scale-95 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Franchise Enquiry</span>
            <span className="sm:hidden">Franchise</span>
          </button>

          {/* User Profile / Royal Circle */}
          <button
            onClick={onOpenProfileModal}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-container hover:bg-surface-tint border border-tertiary-fixed/40 flex items-center justify-center text-on-primary transition-colors cursor-pointer shrink-0"
            title="Royal Connoisseur Circle"
          >
            <span className="material-symbols-outlined text-tertiary-fixed text-[18px] sm:text-[20px]">person</span>
          </button>

          {/* Mobile & Tablet Hamburger (Visible below lg / 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded bg-primary-container flex items-center justify-center text-tertiary-fixed focus:outline-none shrink-0 cursor-pointer hover:bg-primary-container/80 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Gold Filigree Gradient Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-tertiary-fixed to-transparent opacity-80" />

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-b-2 border-tertiary-fixed px-4 sm:px-6 py-4 flex flex-col space-y-2 shadow-2xl animate-in slide-in-from-top-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-3 rounded font-title-md text-sm sm:text-base transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-primary-container text-tertiary-fixed font-bold'
                      : 'text-primary-fixed-dim hover:bg-primary-container/50 hover:text-tertiary-fixed'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">
                      check_small
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-primary-container flex flex-col sm:flex-row gap-2">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex-1 flex items-center justify-center gap-2 text-tertiary-fixed py-2 px-3 rounded bg-primary-container font-title-md text-xs sm:text-sm font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Hotline: {BRAND.displayPhone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFranchiseModal();
              }}
              className="flex-1 flex items-center justify-center gap-2 text-on-tertiary-fixed py-2 px-3 rounded bg-tertiary-fixed font-title-md text-xs sm:text-sm font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              <span>Apply for Franchise</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
