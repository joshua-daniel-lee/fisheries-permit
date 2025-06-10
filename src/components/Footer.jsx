import React from 'react';
import { Link } from 'react-router-dom';
import {
  Footer as USWDSFooter,
  FooterNav,
  Address,
} from '@trussworks/react-uswds';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <USWDSFooter
      size="medium"
      primary={
        <div className="usa-footer__primary-container grid-container">
          <div className="usa-footer__primary-content">
            <FooterNav
              size="medium"
              links={[
                <Link key="home" className="usa-footer__primary-link" to="/">
                  Home
                </Link>,
                <Link key="permits" className="usa-footer__primary-link" to="/permits">
                  Permits
                </Link>,
                <Link key="applications" className="usa-footer__primary-link" to="/applications">
                  Applications
                </Link>,
                <Link key="reports" className="usa-footer__primary-link" to="/reports">
                  Reports
                </Link>,
                <Link key="help" className="usa-footer__primary-link" to="/help">
                  Help & Support
                </Link>,
              ]}
            />
          </div>
        </div>
      }
      secondary={
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="tablet:grid-col-8">
              <div className="usa-footer__logo grid-row grid-gap-2">
                <div className="grid-col-auto">
                </div>
                <div className="grid-col-auto">
                  <h3 className="usa-footer__logo-heading">Permit System</h3>
                </div>
              </div>
            </div>
            <div className="tablet:grid-col-4">
              <Address
                size="medium"
                items={[
                  <a key="telephone" href="tel:1-800-853-1964">
                    1-800-853-1964
                  </a>,
                  <a key="email" href="mailto:permits@noaa.gov">
                    permits@noaa.gov
                  </a>,
                ]}
              />
            </div>
          </div>
          
          <div className="grid-row grid-gap margin-top-4">
            <div className="grid-col-12">
              <div className="usa-footer__secondary-section">
                <div className="grid-row grid-gap">
                  <div className="tablet:grid-col-8">
                    <ul className="usa-list usa-list--unstyled">
                      <li className="grid-col-auto">
                        <a 
                          className="usa-footer__secondary-link" 
                          href="https://www.fisheries.noaa.gov/about/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="grid-col-auto">
                        <a 
                          className="usa-footer__secondary-link" 
                          href="https://www.fisheries.noaa.gov/about/accessibility"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Accessibility
                        </a>
                      </li>
                      <li className="grid-col-auto">
                        <a 
                          className="usa-footer__secondary-link" 
                          href="https://www.fisheries.noaa.gov/about/foia"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          FOIA
                        </a>
                      </li>
                      <li className="grid-col-auto">
                        <a 
                          className="usa-footer__secondary-link" 
                          href="https://www.noaa.gov/information-quality"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Information Quality
                        </a>
                      </li>
                      <li className="grid-col-auto">
                        <a 
                          className="usa-footer__secondary-link" 
                          href="https://www.fisheries.noaa.gov/contact-us"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tablet:grid-col-4 text-right">
                    <p className="usa-footer__logo-text">
                      © {currentYear} U.S. Department of Commerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid-row margin-top-2">
            <div className="grid-col-12">
              <div className="usa-footer__secondary-section border-top-1px border-base-lighter padding-top-2">
                <p className="usa-footer__logo-text text-center">
                  <strong>Demo Application Notice:</strong> This is a demonstration application for the NOAA Fisheries Permit System. 
                  No real permit data is processed or stored. For actual permit applications, please visit the official NOAA Fisheries website.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Footer;
