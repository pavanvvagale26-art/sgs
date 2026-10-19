import React, { useState } from 'react';
import { BRAND } from '../data/mockData';

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string) => void;
  defaultFormat?: string;
}

export const FranchiseModal: React.FC<FranchiseModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  defaultFormat = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: defaultFormat || '',
    property: 'yes',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(formData.name || 'Partner');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-tertiary-fixed/30 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-primary text-on-primary p-space-lg flex items-center justify-between border-b border-tertiary-fixed/40">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-tertiary-fixed">
              <span className="material-symbols-outlined text-[24px]">business_center</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-tertiary-fixed">
                Request Franchise Prospectus
              </h3>
              <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">
                Direct Corporate Expansion Desk • Estd 1989
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-primary-container hover:bg-surface-tint flex items-center justify-center text-tertiary-fixed transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content & Form */}
        <form onSubmit={handleSubmit} className="p-space-lg flex flex-col space-y-space-md">
          <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center gap-space-xs text-primary font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
            <span>
              Connect directly with <strong>SGS Expansion Team</strong> at {BRAND.phone}.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="flex flex-col space-y-1">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="m-name">
                Full Name *
              </label>
              <input
                id="m-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Anand K. Rao"
                className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="m-phone">
                Phone Number *
              </label>
              <input
                id="m-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 98765 43210"
                className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="m-email">
                Email Address *
              </label>
              <input
                id="m-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="anand@example.com"
                className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="m-city">
                Preferred City / Locality *
              </label>
              <input
                id="m-city"
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. Mysuru / Whitefield Bengaluru"
                className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none shadow-sm"
              />
            </div>
          </div>


          <div className="flex flex-col space-y-1">
            <label className="font-label-md text-label-md text-on-surface">
              Do you currently possess or lease commercial real estate?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
              <label className="flex items-center gap-space-xs p-space-sm bg-surface-container-low rounded cursor-pointer hover:bg-surface-container-high transition-colors">
                <input
                  type="radio"
                  name="m-property"
                  value="yes"
                  checked={formData.property === 'yes'}
                  onChange={() => setFormData({ ...formData, property: 'yes' })}
                  className="accent-primary"
                />
                <span className="font-body-sm text-body-sm text-on-surface">
                  Yes, commercial property identified
                </span>
              </label>
              <label className="flex items-center gap-space-xs p-space-sm bg-surface-container-low rounded cursor-pointer hover:bg-surface-container-high transition-colors">
                <input
                  type="radio"
                  name="m-property"
                  value="no"
                  checked={formData.property === 'no'}
                  onChange={() => setFormData({ ...formData, property: 'no' })}
                  className="accent-primary"
                />
                <span className="font-body-sm text-body-sm text-on-surface">
                  Seeking site assessment support
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-label-md text-label-md text-on-surface" htmlFor="m-notes">
              Additional Notes / Background (Optional)
            </label>
            <textarea
              id="m-notes"
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Tell us about your restaurant experience or timeline..."
              className="w-full px-space-md py-space-sm rounded bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none shadow-sm"
            />
          </div>

          <div className="pt-space-xs flex flex-col sm:flex-row gap-space-sm">
            <button
              type="submit"
              className="flex-1 py-space-md bg-primary text-on-primary font-title-lg text-title-lg rounded-lg shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-space-sm cursor-pointer"
            >
              <span>Submit Franchise Request</span>
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-space-lg py-space-md bg-surface-container text-on-surface font-title-md rounded-lg hover:bg-surface-container-high transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
