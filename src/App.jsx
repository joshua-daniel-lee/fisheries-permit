import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Header, SignIn, SignUp, Footer, PermitSelection, PermitApplication } from './components';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';

// Page components (placeholders for now)
const HomePage = () => (
  <main id="main-content" className="usa-section">
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col-12">
          <h1>Welcome to the fake Permit System</h1>
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
                  <Link to="/permits">
                    <button className="usa-button">Start Application</button>
                  </Link>
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
                  <Link to="/reports">
                    <button className="usa-button usa-button--outline">View Reports</button>
                  </Link>
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
          <h1>My Applications</h1>
          <p className="usa-intro">
            Track the status of your permit applications and view application history.
          </p>

          <div className="usa-alert usa-alert--info margin-bottom-4">
            <div className="usa-alert__body">
              <h4 className="usa-alert__heading">Demo Data</h4>
              <p className="usa-alert__text">
                The applications shown below are demonstration data for this sample system.
              </p>
            </div>
          </div>

          <div className="grid-row grid-gap margin-top-4">
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-bottom-4">
              <div className="usa-card">
                <div className="usa-card__header">
                  <h3 className="usa-card__heading">Commercial Fishing Permit</h3>
                  <span className="usa-tag usa-tag--big" style={{ backgroundColor: '#00a91c', color: 'white' }}>
                    Approved
                  </span>
                </div>
                <div className="usa-card__body">
                  <p><strong>Application ID:</strong> CFP-2024-001</p>
                  <p><strong>Submitted:</strong> March 15, 2024</p>
                  <p><strong>Approved:</strong> March 28, 2024</p>
                  <p><strong>Vessel:</strong> Sea Hunter</p>
                  <p><strong>Valid Until:</strong> March 28, 2025</p>
                </div>
                <div className="usa-card__footer">
                  <button className="usa-button usa-button--outline">View Details</button>
                </div>
              </div>
            </div>

            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-bottom-4">
              <div className="usa-card">
                <div className="usa-card__header">
                  <h3 className="usa-card__heading">Charter Boat Permit</h3>
                  <span className="usa-tag usa-tag--big" style={{ backgroundColor: '#ffbe2e', color: 'black' }}>
                    Under Review
                  </span>
                </div>
                <div className="usa-card__body">
                  <p><strong>Application ID:</strong> CBP-2024-015</p>
                  <p><strong>Submitted:</strong> April 2, 2024</p>
                  <p><strong>Status:</strong> Pending Coast Guard inspection</p>
                  <p><strong>Vessel:</strong> Ocean Explorer</p>
                  <p><strong>Est. Decision:</strong> May 15, 2024</p>
                </div>
                <div className="usa-card__footer">
                  <button className="usa-button usa-button--outline">View Details</button>
                </div>
              </div>
            </div>

            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-bottom-4">
              <div className="usa-card">
                <div className="usa-card__header">
                  <h3 className="usa-card__heading">Recreational Fishing License</h3>
                  <span className="usa-tag usa-tag--big" style={{ backgroundColor: '#00a91c', color: 'white' }}>
                    Active
                  </span>
                </div>
                <div className="usa-card__body">
                  <p><strong>License ID:</strong> RFL-2024-789</p>
                  <p><strong>Issued:</strong> January 1, 2024</p>
                  <p><strong>Type:</strong> Annual License</p>
                  <p><strong>Area:</strong> Atlantic Coast</p>
                  <p><strong>Expires:</strong> December 31, 2024</p>
                </div>
                <div className="usa-card__footer">
                  <button className="usa-button usa-button--outline">Renew License</button>
                </div>
              </div>
            </div>

            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-bottom-4">
              <div className="usa-card">
                <div className="usa-card__header">
                  <h3 className="usa-card__heading">Tournament Permit</h3>
                  <span className="usa-tag usa-tag--big" style={{ backgroundColor: '#e31c3d', color: 'white' }}>
                    Expired
                  </span>
                </div>
                <div className="usa-card__body">
                  <p><strong>Application ID:</strong> TP-2023-042</p>
                  <p><strong>Event:</strong> Summer Fishing Derby</p>
                  <p><strong>Date:</strong> July 15, 2023</p>
                  <p><strong>Participants:</strong> 150</p>
                  <p><strong>Status:</strong> Event completed</p>
                </div>
                <div className="usa-card__footer">
                  <button className="usa-button usa-button--outline">View Certificate</button>
                </div>
              </div>
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
          <h1>Fishing Reports & Compliance</h1>
          <p className="usa-intro">
            Submit required fishing reports and view your compliance history.
          </p>

          <div className="usa-alert usa-alert--info margin-bottom-4">
            <div className="usa-alert__body">
              <h4 className="usa-alert__heading">Demo Data</h4>
              <p className="usa-alert__text">
                The reports and data shown below are demonstration content for this sample system.
              </p>
            </div>
          </div>

          <div className="grid-row grid-gap margin-top-4">
            <div className="grid-col-12 desktop:grid-col-8">
              <h2>Recent Reports</h2>
              
              <div className="usa-card margin-bottom-4">
                <div className="usa-card__header">
                  <h3 className="usa-card__heading">Monthly Catch Report - March 2024</h3>
                  <span className="usa-tag" style={{ backgroundColor: '#00a91c', color: 'white' }}>
                    Submitted
                  </span>
                </div>
                <div className="usa-card__body">
                  <div className="grid-row grid-gap">
                    <div className="grid-col-6">
                      <p><strong>Report Period:</strong> March 1-31, 2024</p>
                      <p><strong>Vessel:</strong> Sea Hunter</p>
                      <p><strong>Total Trips:</strong> 12</p>
                    </div>
                    <div className="grid-col-6">
                      <p><strong>Total Catch:</strong> 2,450 lbs</p>
                      <p><strong>Primary Species:</strong> Cod, Haddock</p>
                      <p><strong>Submitted:</strong> April 5, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="usa-card__footer">
                  <button className="usa-button usa-button--outline margin-right-2">View Report</button>
                  <button className="usa-button usa-button--outline">Download PDF</button>
                </div>
              </div>

              <div className="usa-card margin-bottom-4">
                <div className="usa-card__header">
                  <h3 className="usa-card__heading">Weekly Logbook - Week of April 8, 2024</h3>
                  <span className="usa-tag" style={{ backgroundColor: '#ffbe2e', color: 'black' }}>
                    Due Soon
                  </span>
                </div>
                <div className="usa-card__body">
                  <div className="grid-row grid-gap">
                    <div className="grid-col-6">
                      <p><strong>Report Period:</strong> April 8-14, 2024</p>
                      <p><strong>Vessel:</strong> Sea Hunter</p>
                      <p><strong>Trips Logged:</strong> 3 of 4</p>
                    </div>
                    <div className="grid-col-6">
                      <p><strong>Due Date:</strong> April 21, 2024</p>
                      <p><strong>Status:</strong> Incomplete</p>
                      <p><strong>Remaining:</strong> 1 trip entry</p>
                    </div>
                  </div>
                </div>
                <div className="usa-card__footer">
                  <button className="usa-button margin-right-2">Complete Report</button>
                  <button className="usa-button usa-button--outline">View Draft</button>
                </div>
              </div>

              <div className="usa-card margin-bottom-4">
                <div className="usa-card__header">
                  <h3 className="usa-card__heading">Annual Compliance Summary - 2023</h3>
                  <span className="usa-tag" style={{ backgroundColor: '#0085CA', color: 'white' }}>
                    Certified
                  </span>
                </div>
                <div className="usa-card__body">
                  <div className="grid-row grid-gap">
                    <div className="grid-col-6">
                      <p><strong>Reporting Period:</strong> January - December 2023</p>
                      <p><strong>Reports Submitted:</strong> 12 of 12</p>
                      <p><strong>Compliance Rate:</strong> 100%</p>
                    </div>
                    <div className="grid-col-6">
                      <p><strong>Total Catch:</strong> 28,750 lbs</p>
                      <p><strong>Violations:</strong> None</p>
                      <p><strong>Certification Date:</strong> January 15, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="usa-card__footer">
                  <button className="usa-button usa-button--outline margin-right-2">View Summary</button>
                  <button className="usa-button usa-button--outline">Download Certificate</button>
                </div>
              </div>
            </div>

            <div className="grid-col-12 desktop:grid-col-4">
              <h2>Quick Actions</h2>
              
              <div className="usa-card margin-bottom-4">
                <div className="usa-card__body">
                  <h3>Submit New Report</h3>
                  <p>File your latest catch report or logbook entry.</p>
                  <button className="usa-button width-full">New Report</button>
                </div>
              </div>

              <div className="usa-card margin-bottom-4">
                <div className="usa-card__body">
                  <h3>Reporting Calendar</h3>
                  <p>View upcoming report due dates and deadlines.</p>
                  <button className="usa-button usa-button--outline width-full">Calendar</button>
                </div>
              </div>

              <h3>Compliance Status</h3>
              <div className="usa-alert usa-alert--success">
                <div className="usa-alert__body">
                  <h4 className="usa-alert__heading">Good Standing</h4>
                  <p className="usa-alert__text">
                    All required reports are up to date. Next report due: April 21, 2024.
                  </p>
                </div>
              </div>

              <h3 className="margin-top-4">Report Types</h3>
              <ul className="usa-list">
                <li><strong>Daily Logbook:</strong> Trip-by-trip catch records</li>
                <li><strong>Weekly Summary:</strong> Aggregated weekly data</li>
                <li><strong>Monthly Report:</strong> Comprehensive monthly statistics</li>
                <li><strong>Annual Summary:</strong> Yearly compliance overview</li>
              </ul>
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
          <p className="usa-intro">
            Find answers to common questions, access user guides, and get support for the fishing permit system.
          </p>

          <div className="grid-row grid-gap margin-top-4">
            <div className="grid-col-12 desktop:grid-col-8">
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
                    fishing area details, and other required documentation. The application 
                    process typically takes 2-6 weeks depending on the permit type.
                  </p>
                </div>

                <h4 className="usa-accordion__heading">
                  <button
                    className="usa-accordion__button"
                    aria-expanded="false"
                    aria-controls="faq-2"
                  >
                    What documents do I need for a commercial fishing permit?
                  </button>
                </h4>
                <div id="faq-2" className="usa-accordion__content usa-prose">
                  <p>
                    For commercial fishing permits, you'll need: valid vessel documentation, 
                    fishing experience certification, safety equipment compliance certificate, 
                    Coast Guard vessel inspection (for charter boats), and proof of insurance. 
                    Additional requirements may apply based on fishing area and target species.
                  </p>
                </div>

                <h4 className="usa-accordion__heading">
                  <button
                    className="usa-accordion__button"
                    aria-expanded="false"
                    aria-controls="faq-3"
                  >
                    How often do I need to submit fishing reports?
                  </button>
                </h4>
                <div id="faq-3" className="usa-accordion__content usa-prose">
                  <p>
                    Reporting frequency depends on your permit type: Commercial permits require 
                    weekly logbooks and monthly summary reports. Recreational licenses need 
                    annual catch summaries. Charter boat operators must submit trip-by-trip 
                    reports within 48 hours of each trip.
                  </p>
                </div>

                <h4 className="usa-accordion__heading">
                  <button
                    className="usa-accordion__button"
                    aria-expanded="false"
                    aria-controls="faq-4"
                  >
                    What happens if I miss a reporting deadline?
                  </button>
                </h4>
                <div id="faq-4" className="usa-accordion__content usa-prose">
                  <p>
                    Late reports may result in warnings, fines, or permit suspension. First-time 
                    late submissions typically receive a warning. Repeated violations can lead to 
                    fines ranging from $500-$5,000 and temporary permit suspension. Contact support 
                    immediately if you're unable to meet a deadline.
                  </p>
                </div>

                <h4 className="usa-accordion__heading">
                  <button
                    className="usa-accordion__button"
                    aria-expanded="false"
                    aria-controls="faq-5"
                  >
                    How do I renew my fishing permit?
                  </button>
                </h4>
                <div id="faq-5" className="usa-accordion__content usa-prose">
                  <p>
                    Permit renewal can be done online through your Applications page. You'll receive 
                    renewal notices 60 days before expiration. Most permits can be renewed if you're 
                    in good standing with no outstanding violations. Some permits may require updated 
                    documentation or re-inspection.
                  </p>
                </div>

                <h4 className="usa-accordion__heading">
                  <button
                    className="usa-accordion__button"
                    aria-expanded="false"
                    aria-controls="faq-6"
                  >
                    Can I transfer my permit to another vessel?
                  </button>
                </h4>
                <div id="faq-6" className="usa-accordion__content usa-prose">
                  <p>
                    Permit transfers are possible but require approval. Submit a transfer request 
                    with new vessel documentation, updated safety certificates, and transfer fee 
                    ($150-$500 depending on permit type). Processing takes 2-4 weeks. The new 
                    vessel must meet all original permit requirements.
                  </p>
                </div>
              </div>

              <h2 className="margin-top-6">User Guides</h2>
              <div className="grid-row grid-gap margin-top-2">
                <div className="grid-col-12 tablet:grid-col-6 margin-bottom-4">
                  <div className="usa-card">
                    <div className="usa-card__body">
                      <h3>Getting Started Guide</h3>
                      <p>Complete walkthrough for new users applying for their first permit.</p>
                      <button className="usa-button usa-button--outline">Download PDF</button>
                    </div>
                  </div>
                </div>
                <div className="grid-col-12 tablet:grid-col-6 margin-bottom-4">
                  <div className="usa-card">
                    <div className="usa-card__body">
                      <h3>Reporting Requirements</h3>
                      <p>Detailed guide on reporting schedules, requirements, and best practices.</p>
                      <button className="usa-button usa-button--outline">Download PDF</button>
                    </div>
                  </div>
                </div>
                <div className="grid-col-12 tablet:grid-col-6 margin-bottom-4">
                  <div className="usa-card">
                    <div className="usa-card__body">
                      <h3>Compliance Handbook</h3>
                      <p>Understanding regulations, violations, and maintaining good standing.</p>
                      <button className="usa-button usa-button--outline">Download PDF</button>
                    </div>
                  </div>
                </div>
                <div className="grid-col-12 tablet:grid-col-6 margin-bottom-4">
                  <div className="usa-card">
                    <div className="usa-card__body">
                      <h3>System Tutorial</h3>
                      <p>Step-by-step tutorial for navigating the online permit system.</p>
                      <button className="usa-button usa-button--outline">Watch Video</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-col-12 desktop:grid-col-4">
              <h2>Contact Support</h2>
              
              <div className="usa-card margin-bottom-4">
                <div className="usa-card__body">
                  <h3>Phone Support</h3>
                  <p><strong>1-800-853-1964</strong></p>
                  <p>Monday - Friday<br/>8:00 AM - 5:00 PM EST</p>
                  <p>Average wait time: 3-5 minutes</p>
                </div>
              </div>

              <div className="usa-card margin-bottom-4">
                <div className="usa-card__body">
                  <h3>Email Support</h3>
                  <p><strong>permits@example.gov</strong></p>
                  <p>Response time: 24-48 hours</p>
                  <p>Include your permit ID or application number for faster service.</p>
                </div>
              </div>

              <div className="usa-card margin-bottom-4">
                <div className="usa-card__body">
                  <h3>Live Chat</h3>
                  <p>Available during business hours</p>
                  <button className="usa-button width-full">Start Chat</button>
                </div>
              </div>

              <h3>Emergency Contact</h3>
              <div className="usa-alert usa-alert--warning">
                <div className="usa-alert__body">
                  <h4 className="usa-alert__heading">Urgent Issues</h4>
                  <p className="usa-alert__text">
                    For urgent permit issues affecting active fishing operations, 
                    call our emergency line: <strong>1-800-URGENT-1</strong>
                  </p>
                </div>
              </div>

              <h3 className="margin-top-4">System Status</h3>
              <div className="usa-alert usa-alert--success">
                <div className="usa-alert__body">
                  <h4 className="usa-alert__heading">All Systems Operational</h4>
                  <p className="usa-alert__text">
                    Last updated: Today at 2:00 PM EST
                  </p>
                </div>
              </div>

              <h3 className="margin-top-4">Quick Links</h3>
              <ul className="usa-list">
                <li><a href="/permits">Apply for Permits</a></li>
                <li><a href="/applications">Check Application Status</a></li>
                <li><a href="/reports">Submit Reports</a></li>
                <li><a href="#renewal">Permit Renewal</a></li>
                <li><a href="#regulations">Current Regulations</a></li>
                <li><a href="#forms">Downloadable Forms</a></li>
              </ul>
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
          <Route path="/permits" element={<PermitSelection />} />
          <Route path="/apply/:permitId" element={<PermitApplication />} />
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
