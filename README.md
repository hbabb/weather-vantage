# Weather Prediction and Analysis App

A weather analysis platform offering real-time updates, historical trends, and machine learning-based predictions for localized weather conditions.

---

## Features

- **User Authentication**: Secure login and preferences storage.
- **Real-Time Updates**: Fetch live weather data via API.
- **Historical Trends**: Visualize past weather data.
- **ML-Powered Predictions**: Predict future weather conditions.
- **Custom Alerts**: Notify users when weather thresholds are met.
- **Multi-Location Support**: Track weather for multiple locations.

---

## Tech Stack

### Frontend

- **Next.js**: React framework for the user interface.
- **TypeScript**: Strongly typed JavaScript for reliability.
- **TailwindCSS**: Utility-first styling framework.

### Backend

- **Next.js API Routes**: Backend API functionality.
- **Neon**: PostgreSQL database for weather and user data.
- **Drizzle ORM**: Simplified database queries with TypeScript support.
- **zod**: Schema validation for backend logic.
- **Next Safe Actions**: Secure server-side actions.

### Machine Learning

- **Python Flask API**: ML-based weather prediction API.

### Other Tools

- **Auth.js**: User authentication.
- **Sentry**: Error tracking and monitoring.

---

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/weather-analysis.git
   cd weather-analysis
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Setup Environment Variables**:

   ```bash
   cp .env.example .env
   ```

4. **Run the App**:

   ```bash
   npm run dev
   ```

5. **Run the Python ML API**:

   ```bash
   cd ml-api
   python app.py
   ```

## Future Enhancements

- Add support for voice-activated commands.
- Integrate radar and satellite imagery.
- Develop a mobile app companion.

## License
