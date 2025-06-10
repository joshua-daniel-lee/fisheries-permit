import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header, SignIn, SignUp, Footer } from './components';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';

// Page components (placeholders for now)
const HomePage = () => (
  <main id="main-content" className="usa-section">
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col-12">
          <h1>Welcome to the NOAA Fisheries Permit System</h1>
          <p className="usa-intro">
            This system helps you manage fishing permits, applications, and reports 
            in compliance with federal regulations.
          </p>
          
          <div className="usa-alert usa-alert--info margin-bottom-4">
            <div className="usa-alert__body">
              <h4 className="usa-alert__heading">Getting Started</h4>
              <p className="usa-alert__text">
                Use the navigation menu above to access different sections of the permit system.
              </p>
            </div>
          </div>

          <div className="grid-row grid-gap margin-top-4">
            <div className="grid-col-12 tablet:grid-col-6">
              <div className="usa-card">
                <div className="usa-card__header">
                  <h3 className="usa-card__heading">Apply for Permits</h3>
                </div>
                <div className="usa-card__body">
                  <p>Submit new permit applications and track their status.</p>
                </div>
                <div className="usa-card__footer">
                  <button className="usa-button">Start Application</button>
                </div>
              </div>
            </div>
            
            <div className="grid-col-12 tablet:grid-col-6">
              <div className="usa-card">
                <div className="usa-card__header">
                  <h3 className="usa-card__heading">View Reports</h3>
                </div>
                <div className="usa-card__body">
                  <p>Access your fishing reports and compliance documents.</p>
                </div>
                <div className="usa-card__footer">
                  <button className="usa-button usa-button--outline">View Reports</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const PermitsPage = () => (
  <main id="main-content" className="usa-section">
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col-12">
          <h1>Permits</h1>
          <p>Manage your fishing permits and licenses.</p>
          
          <div className="usa-alert usa-alert--warning">
            <div className="usa-alert__body">
              <h4 className="usa-alert__heading">Under Development</h4>
              <p className="usa-alert__text">
                This section is currently being developed. Please check back later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const ApplicationsPage = () => (
  <main id="main-content" className="usa-section">
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col-12">
          <h1>Applications</h1>
          <p>View and manage your permit applications.</p>
          
          <div className="usa-alert usa-alert--warning">
            <div className="usa-alert__body">
              <h4 className="usa-alert__heading">Under Development</h4>
              <p className="usa-alert__text">
                This section is currently being developed. Please check back later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const ReportsPage = () => (
  <main id="main-content" className="usa-section">
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col-12">
          <h1>Reports</h1>
          <p>Access your fishing reports and compliance documentation.</p>
          
          <div className="usa-alert usa-alert--warning">
            <div className="usa-alert__body">
              <h4 className="usa-alert__heading">Under Development</h4>
              <p className="usa-alert__text">
                This section is currently being developed. Please check back later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const HelpPage = () => (
  <main id="main-content" className="usa-section">
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col-12">
          <h1>Help & Support</h1>
          <p>Find answers to common questions and get support.</p>
          
          <h2>Frequently Asked Questions</h2>
          
          <div className="usa-accordion" aria-multiselectable="true">
            <h4 className="usa-accordion__heading">
              <button
                className="usa-accordion__button"
                aria-expanded="false"
                aria-controls="faq-1"
              >
                How do I apply for a fishing permit?
              </button>
            </h4>
            <div id="faq-1" className="usa-accordion__content usa-prose">
              <p>
                To apply for a fishing permit, navigate to the Permits section and 
                click "Start Application". You'll need to provide vessel information, 
                fishing area details, and other required documentation.
              </p>
            </div>
          </div>

          <div className="margin-top-4">
            <h3>Contact Information</h3>
            <div className="usa-alert usa-alert--info">
              <div className="usa-alert__body">
                <p className="usa-alert__text">
                  <strong>Phone:</strong> 1-800-XXX-XXXX<br/>
                  <strong>Email:</strong> permits@noaa.gov<br/>
                  <strong>Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
  };

  const handleSignUp = (userData) => {
    setUser(userData);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} onSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/permits" element={<PermitsPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route 
            path="/signin" 
            element={
              user ? <Navigate to="/" replace /> : <SignIn onSignIn={handleSignIn} />
            } 
          />
          <Route 
            path="/signup" 
            element={
              user ? <Navigate to="/" replace /> : <SignUp onSignUp={handleSignUp} />
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
