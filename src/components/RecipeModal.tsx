import React from 'react';
import { MenuItem } from '../types';

interface RecipeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOrderOrLocate: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ item, onClose, onOrderOrLocate }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-tertiary-fixed/30 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Header Visual */}
        <div className="relative h-64 w-full overflow-hidden bg-primary">
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-primary/80 hover:bg-primary text-tertiary-fixed flex items-center justify-center shadow-lg transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              {item.badge && (
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold tracking-widest uppercase bg-tertiary-fixed text-on-tertiary-fixed mb-1.5 shadow">
                  {item.badge}
                </span>
              )}
              <h3 className="font-headline-md text-headline-md text-on-primary font-bold drop-shadow">
                {item.name}
              </h3>
            </div>
            {item.price && (
              <span className="font-headline-md text-headline-md text-tertiary-fixed font-bold bg-primary/90 px-3 py-1 rounded shadow">
                {item.price}
              </span>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-space-lg flex flex-col space-y-space-md">
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            {item.description}
          </p>

          {item.historyNote && (
            <div className="p-space-md bg-surface-container-low rounded-xl border-l-4 border-tertiary-fixed">
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {item.historyNote}
              </p>
            </div>
          )}

          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <span className="font-bradley text-2xl text-primary font-bold mb-2 block">
                Our Signature Serving
              </span>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-sm font-semibold flex items-center gap-2 border border-outline-variant/30 shadow-xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-space-sm pt-space-xs text-sm">
            <div className="p-space-sm bg-surface-container rounded-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                Serving Style
              </span>
              <span className="font-title-md text-primary">{item.servingNote}</span>
            </div>
            <div className="p-space-sm bg-surface-container rounded-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                Spice Intensity
              </span>
              <span className="font-title-md text-primary">{item.spiceLevel || 'Signature Military Spiced'}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-space-sm flex items-center justify-between gap-space-md">
            <button
              onClick={() => {
                onClose();
                onOrderOrLocate();
              }}
              className="flex-1 py-space-sm bg-primary text-on-primary font-title-md rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">storefront</span>
              <span>Find Nearest Branch to Savor</span>
            </button>
            <button
              onClick={onClose}
              className="px-space-md py-space-sm bg-surface-container text-on-surface font-title-md rounded-lg hover:bg-surface-container-high transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
