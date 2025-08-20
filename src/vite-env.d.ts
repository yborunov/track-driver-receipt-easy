/// <reference types="vite/client" />

// Google Analytics gtag declarations
declare global {
  interface Window {
    gtag: (
      command: 'js' | 'config' | 'event',
      targetId: string | Date,
      config?: {
        send_to?: string;
        value?: number;
        currency?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

export {};
