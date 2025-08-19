import { init, track, setUserId } from '@amplitude/analytics-browser';

// Amplitude configuration
const AMPLITUDE_API_KEY = import.meta.env.VITE_AMPLITUDE_API_KEY || '';

// Initialize Amplitude
export const initAmplitude = () => {
  if (!AMPLITUDE_API_KEY) {
    console.warn('Amplitude API key not found. Analytics will be disabled.');
    return;
  }

  init(AMPLITUDE_API_KEY, {
    defaultTracking: {
      sessions: true,
      pageViews: true,
      formInteractions: true,
      fileDownloads: true,
    },
  });
};

// Track custom events
export const trackEvent = (eventName: string, eventProperties?: Record<string, unknown>) => {
  if (!AMPLITUDE_API_KEY) return;
  
  track(eventName, eventProperties);
};

// Set user ID
export const setAmplitudeUserId = (userId: string) => {
  if (!AMPLITUDE_API_KEY) return;
  
  setUserId(userId);
};

// Set user properties - simplified for now
export const setAmplitudeUserProperties = (properties: Record<string, unknown>) => {
  if (!AMPLITUDE_API_KEY) return;
  
  // Track user properties as an event for now
  trackEvent('User Properties Updated', properties);
};

// Common event tracking functions
export const trackPageView = (pageName: string, pageProperties?: Record<string, unknown>) => {
  trackEvent('Page View', {
    page_name: pageName,
    ...pageProperties,
  });
};

export const trackButtonClick = (buttonName: string, buttonProperties?: Record<string, unknown>) => {
  trackEvent('Button Click', {
    button_name: buttonName,
    ...buttonProperties,
  });
};

export const trackFormSubmission = (formName: string, formProperties?: Record<string, unknown>) => {
  trackEvent('Form Submission', {
    form_name: formName,
    ...formProperties,
  });
};

export const trackFeatureUsage = (featureName: string, featureProperties?: Record<string, unknown>) => {
  trackEvent('Feature Usage', {
    feature_name: featureName,
    ...featureProperties,
  });
};
