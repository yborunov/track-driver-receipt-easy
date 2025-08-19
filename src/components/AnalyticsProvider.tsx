import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '@/hooks/useAnalytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const location = useLocation();
  const { trackPage } = useAnalytics();

  // Track page views automatically when route changes
  useEffect(() => {
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.slice(1);
    trackPage(pageName, {
      path: location.pathname,
      search: location.search,
      hash: location.hash,
    });
  }, [location, trackPage]);

  return <>{children}</>;
};
