// Analytics event types for better TypeScript support
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

// Common event properties
export interface ButtonClickProperties {
  location?: string;
  buttonType?: 'primary' | 'secondary' | 'outline';
  page?: string;
  section?: string;
}

export interface PageViewProperties {
  page_name: string;
  path: string;
  search?: string;
  hash?: string;
  referrer?: string;
}

export interface FormSubmissionProperties {
  form_name: string;
  formType?: 'signup' | 'login' | 'contact' | 'feedback';
  success?: boolean;
  errorMessage?: string;
}

export interface FeatureUsageProperties {
  feature_name: string;
  method?: string;
  platform?: 'web' | 'mobile';
  userType?: 'free' | 'premium';
}

// User properties
export interface UserProperties {
  email?: string;
  plan?: string;
  signupDate?: string;
  lastLogin?: string;
  userType?: 'free' | 'premium';
  region?: string;
  language?: string;
}
