# 🚗 DriveEase — Premium Car Rental Client Application

DriveEase is a modern, visually stunning, and highly responsive **Car Rental Web Application** designed to provide users with a seamless vehicle booking experience. Built using state-of-the-art frontend technologies, the platform features a sleek consumer-facing website and a comprehensive admin panel for car owners.

---

## ✨ Features

### 👤 Customer Experience
*   **Interactive Hero Section**: Features a responsive location-based search and filter panel to query vehicles by pickup/return dates.
*   **Premium Cars Catalog**: A grid-based listing page with a dynamic search bar to browse available vehicles by brand, model, or features.
*   **Detail-Rich Car Profiles**: Dedicated pages showing seating capacity, fuel type, transmission, specific location, and a clean booking form.
*   **Personal Bookings Tracker**: A custom panel to monitor all reservations, including booking status (`confirmed`/`pending`), pricing details, and pickup/return dates.
*   **Aesthetic UI Elements**: Embedded with custom testimonials, newsletters, feature banners, and a modern footer.

### 🏢 Owner Dashboard (Administrative Panel)
*   **Owner Layout & Navigation**: Side-navigation layout specifically built for administrative control.
*   **Car Management Skeletons**: Pre-built routes and components for listing new vehicles, updating details, and tracking user reservations.

---

## 🛠️ Technology Stack

The project utilizes a modern development stack optimized for speed, scalability, and clean code:

*   **Framework**: [React 19](https://react.dev/) — Exploits the latest React features and hooks for responsive state management.
*   **Build Tool**: [Vite 8](https://vite.dev/) — Provides super fast builds and Hot Module Replacement (HMR).
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) — Designed using Tailwind's next-gen compiler, integrated via Vite's `@tailwindcss/vite` plugin and configured with `@theme` variables.
*   **Routing**: [React Router Dom v7](https://reactrouter.com/) — Facilitates single-page routing, layout wrappers, and dynamic parameter parsing (`/car-details/:id`).
*   **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) — Modern sans-serif font integrated directly into the DOM styling.

---

## 📂 Folder Structure

The project code is organized cleanly within the `src` directory:

```text
src/
├── assets/             # SVG icons, logo, and static vehicle images/mock data
├── components/         # Reusable presentation and layout components
│   ├── owner/          # Components dedicated to the Owner panel (Sidebar, NavBar)
│   ├── Banner.jsx      # Bottom promotion banner
│   ├── CarCard.jsx     # Vehicle summary card
│   ├── Hero.jsx        # Search/Filter header
│   └── ...
├── pages/              # Routing page views
│   ├── owner/          # Owner panel pages (AddCar, ManageCars, Dashboard)
│   ├── CarDetails.jsx  # Complete vehicle view and booking request form
│   ├── Cars.jsx        # Vehicle listing catalog
│   ├── Home.jsx        # Main landing page
│   └── MyBookings.jsx  # Booking history list
├── App.jsx             # App routing and layout coordinator
├── index.css           # Global stylesheets, Tailwind directive, and CSS variables
└── main.jsx            # Application entry point
```

---

## ⚙️ Installation & Setup

Follow these steps to run the application locally:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/STRANGENIKHIL/Rental_Car.git
cd Rental_Car/Client
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Environment Variables
Create a `.env` file in the root of the `Client` directory and define the default pricing currency:
```env
VITE_CURRENCY=$
```

### 5. Start Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173/` by default.

### 6. Build for Production
To bundle and optimize the application for production deployment:
```bash
npm run build
```

---

## 🔮 Future Roadmap
*   **API & Database Integration**: Connect backend services for real-time booking operations and database storage.
*   **Authentication & Authorization**: Integrate JWT authentication to differentiate between standard customers and vehicle owners.
*   **Interactive Maps**: Embed maps to show real-time pickup/drop-off locations.
*   **Payment Gateway**: Add secure Stripe/PayPal payments for rental deposits.

---

Designed with ❤️ for car rental management.
