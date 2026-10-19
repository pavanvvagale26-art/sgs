import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-primary text-on-primary border border-tertiary-fixed/60 shadow-2xl rounded-lg p-space-md flex items-center gap-space-sm animate-in slide-in-from-bottom-4">
      <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">
        {type === 'success' ? 'check_circle' : 'info'}
      </span>
      <div className="flex-1 text-sm font-body-md text-primary-fixed">
        {message}
      </div>
      <button
        onClick={onClose}
        className="text-tertiary-fixed-dim hover:text-tertiary-fixed p-1 rounded"
      >
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  );
};
