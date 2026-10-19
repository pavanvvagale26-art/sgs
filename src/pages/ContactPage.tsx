import React, { useState } from 'react';
import { BRAND, OUTLETS } from '../data/mockData';

interface ContactPageProps {
  onShowToast: (msg: string) => void;
  onOpenFranchiseModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onShowToast, onOpenFranchiseModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    outlet: 'Balepet Flagship',
    inquiryType: 'Table Reservation / Pre-order',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onShowToast('Please provide your name and phone number');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`Dhanyavadagalu ${formData.name}! Your message has been sent to our Balepet head desk.`);
      setFormData({
        name: '',
        phone: '',
        email: '',
        outlet: 'Balepet Flagship',
        inquiryType: 'Table Reservation / Pre-order',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative bg-primary py-8 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d7e2ff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-container/80 border border-secondary-fixed/30 text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-3 sm:mb-6">
            <span className="material-symbols-outlined text-[15px] sm:text-sm">contact_support</span>
            Connect With Our Balepet Headquarters
          </div>
          <h1 className="font-bradley text-3xl sm:text-5xl md:text-6xl font-bold text-on-primary mb-3 sm:mb-6 leading-tight">
            Get In Touch With <br />
            <span className="text-secondary-fixed">SGS Gundu Palav</span>
          </h1>
          <p className="font-sans text-sm sm:text-base lg:text-lg text-primary-fixed-dim max-w-2xl mx-auto leading-relaxed">
            Have an inquiry regarding party orders, bulk festive catering, feedback on your recent meal, or visiting Balepet? We are always here to serve you.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Quick Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">storefront</span>
                Balepet Flagship Desk
              </h2>
              <div className="space-y-5 text-on-surface-variant font-sans text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <div className="font-bold text-on-surface">Main Heritage Kitchen</div>
                    <div>{BRAND.flagshipAddress}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <div>
                    <div className="font-bold text-on-surface">Direct Phone Lines</div>
                    <div>
                      <a href={`tel:${BRAND.phone}`} className="text-primary font-semibold hover:underline">
                        {BRAND.displayPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">schedule</span>
                  </div>
                  <div>
                    <div className="font-bold text-on-surface">Kitchen Timings</div>
                    <div className="text-xs text-on-surface-variant space-y-0.5 mt-1">
                      <div className="text-amber-700 font-semibold">Monday: Closed</div>
                      <div><span className="font-semibold text-on-surface">Tue – Fri:</span> 10 am–3 pm, 6–9:30 pm</div>
                      <div className="text-amber-700 font-semibold">Saturday: Closed</div>
                      <div><span className="font-semibold text-on-surface">Sunday:</span> 8 am–3 pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Franchise Banner Callout */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary border border-secondary/40 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full bg-secondary-fixed/20 border border-secondary-fixed/40 text-secondary-fixed text-xs font-bold uppercase tracking-wider inline-block mb-3">
                  Business Inquiries
                </span>
                <h3 className="font-serif text-2xl font-bold mb-2">Want to Partner with SGS?</h3>
                <p className="font-sans text-sm text-primary-fixed-dim mb-6 leading-relaxed">
                  Join Karnataka’s iconic culinary brand. Open an authorized Donne Palav outlet in your city with 100% centralized spice supply.
                </p>
                <button
                  type="button"
                  onClick={onOpenFranchiseModal}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-secondary-fixed to-secondary text-on-secondary-fixed font-bold font-sans text-sm shadow-md hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">handshake</span>
                  Launch Franchise Application
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Catering Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-8 sm:p-10 rounded-3xl border border-outline-variant/30 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
              <p className="font-sans text-sm text-on-surface-variant mb-8">
                Fill out the form below for catering inquiries, festival degh bookings, or general suggestions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/40 font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/40 font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/40 font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                      Preferred Outlet
                    </label>
                    <select
                      value={formData.outlet}
                      onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/40 font-sans text-sm"
                    >
                      {OUTLETS.map((o) => (
                        <option key={o.id} value={o.name}>
                          {o.name} ({o.area})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>


                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                    Message or Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event date, expected headcount, or specific dishes needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/40 font-sans text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold font-sans text-base shadow-md hover:bg-primary-container active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                  {isSubmitting ? 'Sending Request...' : 'Submit Inquiry to Balepet Desk'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
