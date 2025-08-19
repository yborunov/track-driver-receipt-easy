import { useCallback } from 'react';
import {
  trackEvent,
  trackPageView,
  trackButtonClick,
  trackFormSubmission,
  trackFeatureUsage,
  setAmplitudeUserId,
  setAmplitudeUserProperties,
} from '@/lib/amplitude';

export const useAnalytics = () => {
  const track = useCallback((eventName: string, eventProperties?: Record<string, unknown>) => {
    trackEvent(eventName, eventProperties);
  }, []);

  const trackPage = useCallback((pageName: string, pageProperties?: Record<string, unknown>) => {
    trackPageView(pageName, pageProperties);
  }, []);

  const trackButton = useCallback((buttonName: string, buttonProperties?: Record<string, unknown>) => {
    trackButtonClick(buttonName, buttonProperties);
  }, []);

  const trackForm = useCallback((formName: string, formProperties?: Record<string, unknown>) => {
    trackFormSubmission(formName, formProperties);
  }, []);

  const trackFeature = useCallback((featureName: string, featureProperties?: Record<string, unknown>) => {
    trackFeatureUsage(featureName, featureProperties);
  }, []);

  const setUserId = useCallback((userId: string) => {
    setAmplitudeUserId(userId);
  }, []);

  const setUserProperties = useCallback((properties: Record<string, unknown>) => {
    setAmplitudeUserProperties(properties);
  }, []);

  return {
    track,
    trackPage,
    trackButton,
    trackForm,
    trackFeature,
    setUserId,
    setUserProperties,
  };
};
