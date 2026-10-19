import React from 'react';
import { BRAND } from '../data/mockData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-2xl border border-tertiary-fixed/30 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        <div className="bg-primary text-on-primary p-space-lg text-center relative border-b border-tertiary-fixed/40">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-tertiary-fixed hover:text-on-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="w-16 h-16 rounded-full bg-primary-container mx-auto mb-2 flex items-center justify-center border-2 border-tertiary-fixed shadow-md">
            <span className="material-symbols-outlined text-tertiary-fixed text-[32px]">workspace_premium</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-tertiary-fixed">
            Royal Connoisseur Circle
          </h3>
          <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider mt-1">
            SGS Gundu Palav Heritage Patron
          </p>
        </div>

        <div className="p-space-lg flex flex-col space-y-space-md">
          <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between border border-primary/10">
            <div>
              <span className="text-xs uppercase text-on-surface-variant font-semibold">Tier Status</span>
              <p className="font-title-md text-primary font-bold">Balepet Gold Member</p>
            </div>
            <span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold rounded">
              Active
            </span>
          </div>

          <div className="space-y-2 text-sm text-on-surface-variant font-body-sm">
            <div className="flex items-center gap-2 p-2 rounded hover:bg-surface-container">
              <span className="material-symbols-outlined text-primary text-[20px]">eco</span>
              <span>Authentic Areca Leaf Dining Privilege</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded hover:bg-surface-container">
              <span className="material-symbols-outlined text-primary text-[20px]">savings</span>
              <span>10% on Bulk Family &amp; Party Degh Bookings</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded hover:bg-surface-container">
              <span className="material-symbols-outlined text-primary text-[20px]">shopping_bag</span>
              <span>Priority Dispatch on 100g Retail Masala Pouches</span>
            </div>
          </div>

          <div className="pt-2 border-t border-surface-container flex flex-col gap-2">
            <button
              onClick={() => {
                onClose();
                onNavigate('our-locations');
              }}
              className="w-full py-space-sm bg-primary text-on-primary font-title-md rounded hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">storefront</span>
              <span>Browse All Outlets</span>
            </button>
            <a
              href={`tel:${BRAND.phone}`}
              className="w-full py-space-sm bg-surface-container text-primary font-title-md rounded hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Helpline ({BRAND.phone})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
