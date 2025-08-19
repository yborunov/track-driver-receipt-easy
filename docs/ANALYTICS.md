# Analytics Integration with Amplitude

This project includes Amplitude analytics integration for tracking user behavior and events.

## Setup

1. **Get an Amplitude API Key**

   - Sign up at [Amplitude](https://amplitude.com/)
   - Create a new project
   - Copy your API key from the project settings

2. **Configure Environment Variables**
   Create a `.env` file in the root directory and add:

   ```
   VITE_AMPLITUDE_API_KEY=your_amplitude_api_key_here
   ```

3. **Installation**
   The Amplitude SDK is already installed as a dependency:
   ```bash
   npm install @amplitude/analytics-browser
   ```

## Usage

### Automatic Tracking

The following events are automatically tracked:

- **Page Views**: Every route change is automatically tracked
- **Sessions**: User sessions are automatically tracked
- **Form Interactions**: Form submissions and interactions are tracked
- **File Downloads**: Any file downloads are tracked

### Manual Event Tracking

Use the `useAnalytics` hook in your components:

```tsx
import { useAnalytics } from "@/hooks/useAnalytics";

const MyComponent = () => {
  const { track, trackButton, trackFeature } = useAnalytics();

  const handleButtonClick = () => {
    trackButton("Sign Up", { location: "header" });
  };

  const handleFeatureUse = () => {
    trackFeature("Receipt Upload", { method: "camera" });
  };

  const handleCustomEvent = () => {
    track("Custom Event", {
      category: "engagement",
      value: 100,
    });
  };

  return <button onClick={handleButtonClick}>Sign Up</button>;
};
```

### Available Tracking Functions

- `track(eventName, properties?)` - Track custom events
- `trackPage(pageName, properties?)` - Track page views
- `trackButton(buttonName, properties?)` - Track button clicks
- `trackForm(formName, properties?)` - Track form submissions
- `trackFeature(featureName, properties?)` - Track feature usage
- `setUserId(userId)` - Set user identification
- `setUserProperties(properties)` - Set user properties

### User Identification

To identify users when they sign up or log in:

```tsx
const { setUserId, setUserProperties } = useAnalytics();

// When user logs in
setUserId(user.id);
setUserProperties({
  email: user.email,
  plan: user.plan,
  signupDate: user.createdAt,
});
```

## Event Properties

When tracking events, you can include additional properties for better analytics:

```tsx
trackButton("Download Receipt", {
  location: "dashboard",
  receiptType: "fuel",
  amount: 45.67,
  userType: "premium",
});
```

## Best Practices

1. **Consistent Naming**: Use consistent event names across your app
2. **Meaningful Properties**: Include relevant context in event properties
3. **User Privacy**: Don't track sensitive personal information
4. **Performance**: Analytics calls are non-blocking, so don't worry about performance impact

## Testing

In development, analytics events will be logged to the console if no API key is provided. This allows you to test your tracking implementation without affecting production data.

## Amplitude Dashboard

Once configured, you can view your analytics data in the Amplitude dashboard:

- Event tracking
- User behavior analysis
- Funnel analysis
- Cohort analysis
- And more...

## Troubleshooting

- **Events not appearing**: Check that your API key is correct and the environment variable is set
- **Console warnings**: If you see "Amplitude API key not found", make sure your `.env` file is properly configured
- **Build issues**: Ensure the environment variable starts with `VITE_` for Vite to include it in the build
