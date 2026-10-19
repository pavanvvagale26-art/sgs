import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/mockData';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="relative bg-primary text-on-primary py-8 sm:py-14 lg:py-space-2xl text-center px-4 sm:px-6 lg:px-8 border-b border-tertiary-fixed/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <span className="material-symbols-outlined text-[300px] sm:text-[400px] text-tertiary-fixed">photo_camera</span>
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-tertiary-fixed font-label-sm text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-space-sm border border-tertiary-fixed/30 font-bold">
            <span className="material-symbols-outlined text-[15px] sm:text-[16px]">gallery_thumbnail</span>
            <span>Balepet Archives • Since 1989</span>
          </div>
          <h1 className="font-bradley text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tertiary-fixed max-w-3xl font-bold leading-tight">
            A Glimpse into Our Culinary Tradition
          </h1>
          <p className="font-body-lg text-sm sm:text-base lg:text-body-lg text-primary-fixed-dim max-w-2xl mt-2 sm:mt-space-sm leading-relaxed">
            Explore the art of traditional cooking, freshly prepared spices, sizzling dishes, and the family legacy behind every serving of SGS Gundu Palav.
          </p>

          {/* Filter Pills - scrollable on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-4 sm:mt-space-lg bg-primary-container/60 p-1.5 sm:p-space-xs rounded-xl backdrop-blur-sm border border-tertiary-fixed/20 overflow-x-auto no-scrollbar sm:flex-wrap justify-start sm:justify-center max-w-full">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'kitchen', label: 'Kitchen Artistry' },
              { id: 'palav', label: 'Donne Palav' },
              { id: 'starters', label: 'Starters & Sides' },
              { id: 'retail', label: 'Retail Spices' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 sm:px-space-md py-1 sm:py-space-xs rounded font-label-md text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-tertiary-fixed text-on-tertiary-fixed shadow'
                    : 'text-primary-fixed-dim hover:text-tertiary-fixed hover:bg-primary/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-14 lg:py-space-2xl bg-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-space-lg">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-primary/10 cursor-pointer flex flex-col"
              >
                <div className="relative h-60 sm:h-64 lg:h-72 w-full overflow-hidden bg-primary">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-2.5 sm:top-space-sm left-2.5 sm:left-space-sm bg-primary/80 backdrop-blur-sm text-tertiary-fixed font-label-sm text-[10px] sm:text-xs px-2 sm:px-space-sm py-0.5 rounded uppercase tracking-wider font-bold border border-tertiary-fixed/30">
                    {item.categoryLabel}
                  </div>
                  {item.year && (
                    <div className="absolute top-2.5 sm:top-space-sm right-2.5 sm:right-space-sm bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] sm:text-xs px-2 sm:px-space-sm py-0.5 rounded font-bold">
                      {item.year}
                    </div>
                  )}
                  <div className="absolute bottom-3 sm:bottom-space-md left-3 sm:left-space-md right-3 sm:right-space-md text-on-primary">
                    <h3 className="font-title-lg text-base sm:text-title-lg text-tertiary-fixed font-bold leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-xs sm:text-body-sm text-primary-fixed-dim mt-0.5 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
                <div className="p-2 sm:p-space-sm bg-surface-container-low flex items-center justify-between text-xs text-on-surface-variant font-semibold">
                  <span>Click to expand high-res</span>
                  <span className="material-symbols-outlined text-[16px] text-primary">zoom_in</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl border border-tertiary-fixed/50 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>
            <div className="p-space-lg bg-primary text-on-primary flex flex-col gap-1 border-t border-tertiary-fixed/30">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-tertiary-fixed uppercase font-bold tracking-wider">
                  {selectedPhoto.categoryLabel}
                </span>
                {selectedPhoto.year && (
                  <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">
                    {selectedPhoto.year}
                  </span>
                )}
              </div>
              <h3 className="font-headline-sm text-tertiary-fixed font-bold">
                {selectedPhoto.title}
              </h3>
              <p className="font-body-md text-primary-fixed-dim mt-1">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
