import React, { useState, useEffect } from 'react';
import { PageId, MenuItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { FranchiseModal } from './components/FranchiseModal';
import { RecipeModal } from './components/RecipeModal';
import { ProfileModal } from './components/ProfileModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { LocationsPage } from './pages/LocationsPage';
import { FranchisePage } from './pages/FranchisePage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isFranchiseModalOpen, setIsFranchiseModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Smooth scroll to top on page change
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleFranchiseSuccess = (name: string) => {
    setIsFranchiseModalOpen(false);
    showToast(`Application successfully received for ${name}. Our Balepet franchise expansion desk will call within 24 hours.`);
  };

  // Sync title based on current screen
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'SGS Gundu Palav | Bengaluru Military Donne Palav Since 1989',
      'about-us': 'Our Heritage & Sacred Journey | SGS Gundu Palav',
      menu: 'Authentic Military Palav Menu & Specialties | SGS Gundu Palav',
      'our-locations': 'Our Branches & Outlets | SGS Gundu Palav',
      franchise: 'Franchise Opportunity & Expansion | SGS Gundu Palav',
      gallery: 'Visual Archives & Kitchen Artistry | SGS Gundu Palav',
      contact: 'Contact & Bulk Festive Catering | SGS Gundu Palav',
    };
    document.title = titles[currentPage] || 'SGS Gundu Palav';
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden w-full">
      {/* Royal Global Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Screen Router with Smooth Page Fade Animation */}
      <main key={currentPage} className="flex-1 animate-fade-in">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
            onSelectMenuItem={(item) => setSelectedMenuItem(item)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'about-us' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            onSelectMenuItem={(item) => setSelectedMenuItem(item)}
            onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'our-locations' && (
          <LocationsPage
            onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'franchise' && (
          <FranchisePage onShowToast={showToast} />
        )}

        {currentPage === 'gallery' && <GalleryPage />}

        {currentPage === 'contact' && (
          <ContactPage
            onShowToast={showToast}
            onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
          />
        )}
      </main>

      {/* Royal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      <FranchiseModal
        isOpen={isFranchiseModalOpen}
        onClose={() => setIsFranchiseModalOpen(false)}
        onSuccess={handleFranchiseSuccess}
      />

      <RecipeModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
        onOrderOrLocate={() => {
          setSelectedMenuItem(null);
          handleNavigate('our-locations');
        }}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onNavigate={(page) => handleNavigate(page as PageId)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
