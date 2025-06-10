# NOAA Fisheries Permit System

A React-based web application for managing fishing permits, applications, and reports in compliance with federal regulations.

## Features

- **Responsive Design**: Built with the US Web Design System (USWDS) for accessibility and mobile-first design
- **Navigation**: Multi-page application with React Router for seamless navigation
- **Government Standards**: Follows federal web design guidelines and accessibility standards
- **Modern React**: Built with React 18 and functional components with hooks

## Pages

- **Home**: Welcome page with overview and quick access cards
- **Permits**: Manage fishing permits and licenses
- **Applications**: View and manage permit applications
- **Reports**: Access fishing reports and compliance documentation
- **Help**: FAQ and support information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Required Assets

The application expects the following assets to be placed in the `public/icons/` directory:

- `radfish.png` - NOAA Fisheries logo (48x48 pixels)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Dependencies

- **React**: UI library
- **React Router DOM**: Client-side routing
- **@trussworks/react-uswds**: US Web Design System components for React
- **React Scripts**: Build tools and configuration

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Main navigation header
│   └── index.js           # Component exports
├── App.jsx                # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles

public/
├── icons/                # Logo and icon assets
├── index.html           # HTML template
└── manifest.json        # Web app manifest
```

## Development Notes

- The application uses USWDS color scheme with NOAA branding
- All pages except Home show "Under Development" placeholders
- Navigation includes active state indicators
- Mobile-responsive design with collapsible navigation
- Accessibility features including skip navigation and proper ARIA labels

## Next Steps

To continue development:

1. Add the NOAA Fisheries radfish logo to `public/icons/radfish.png`
2. Implement the permit application forms
3. Add data management and API integration
4. Implement user authentication
5. Add more detailed content to each section
