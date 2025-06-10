import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Header as USWDSHeader,
  Title,
  PrimaryNav,
} from "@trussworks/react-uswds";

const Header = ({ user, onSignOut }) => {
  const [isExpanded, setExpanded] = useState(false);
  const location = useLocation();

  // Navigation items configuration
  const navigationItems = [
    {
      path: "/",
      label: "Home",
      exact: true,
    },
    {
      path: "/permits",
      label: "Permits",
      exact: false,
    },
    {
      path: "/applications",
      label: "Applications",
      exact: false,
    },
    {
      path: "/reports",
      label: "Reports",
      exact: false,
    },
    {
      path: "/help",
      label: "Help",
      exact: false,
    },
  ];

  // Helper function to determine if a nav item is active
  const isActiveNavItem = (item) => {
    if (item.exact) {
      return location.pathname === item.path;
    }
    return location.pathname.startsWith(item.path);
  };

  // Create navigation links with proper styling
  const navLinks = navigationItems.map((item) => {
    const isActive = isActiveNavItem(item);
    
    return (
      <Link
        key={item.path}
        to={item.path}
        className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
        style={{
          color: isExpanded ? "#212529" : "#ffffff",
          fontWeight: isActive ? "700" : "500",
          textDecoration: "none",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          transition: "all 0.2s ease",
          position: "relative",
        }}
        onClick={() => setExpanded(false)} // Close mobile menu when link is clicked
      >
        {item.label}
        {isActive && (
          <span
            className="nav-link-indicator"
            style={{
              position: "absolute",
              bottom: "-2px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              height: "3px",
              backgroundColor: isExpanded ? "#0085CA" : "#ffffff",
              borderRadius: "2px",
            }}
          />
        )}
      </Link>
    );
  });

  return (
    <>
      {/* Skip navigation for accessibility */}
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      
      <USWDSHeader
        basic
        showMobileOverlay={isExpanded}
        className="header-container"
      >
        <div className="usa-nav-container">
          <div className="usa-navbar">
            {/* Logo and Title Section */}
            <div className="header-brand">
              <Link 
                to="/" 
                className="header-brand-link"
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  textDecoration: "none",
                  color: "inherit"
                }}
                onClick={() => setExpanded(false)}
              >
                <Title className="header-title" style={{ color: "#ffffff", fontSize: "1rem" }}>
                  NOAA Fisheries Permit System
                </Title>
              </Link>
            </div>
          </div>

          {/* Custom Navigation with Authentication */}
          <nav className="usa-nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {navLinks}
            </div>
            <div className="auth-links" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {user ? (
                <>
                  <span style={{ color: "#ffffff", fontSize: "0.9rem", padding: "0.5rem 1rem" }}>
                    Welcome, {user.name}
                  </span>
                  <button
                    onClick={onSignOut}
                    className="nav-link"
                    style={{
                      background: "transparent",
                      border: "1px solid #ffffff",
                      color: "#ffffff",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.25rem",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "all 0.2s ease",
                      textDecoration: "none",
                      fontWeight: "500"
                    }}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="nav-link"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.9rem",
                      transition: "all 0.2s ease",
                      fontWeight: "500"
                    }}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="nav-link"
                    style={{
                      background: "transparent",
                      border: "1px solid #ffffff",
                      color: "#ffffff",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.25rem",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "all 0.2s ease",
                      fontWeight: "500"
                    }}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </USWDSHeader>

      {/* Custom styles for the header component */}
      <style jsx>{`
        .header-brand-link:hover .header-title {
          color: #4da6d9 !important;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          background-color: ${isExpanded ? 'rgba(0, 133, 202, 0.1)' : 'rgba(255, 255, 255, 0.1)'} !important;
          color: ${isExpanded ? '#0085CA' : '#4da6d9'} !important;
        }

        .nav-link--active {
          font-weight: 700 !important;
        }


        /* Mobile navigation styles */
        @media (max-width: 1023px) {
          .usa-nav {
            background-color: #ffffff;
            border-top: 3px solid #0085CA;
            box-shadow: 0 4px 8px rgba(0, 48, 135, 0.2);
          }

          .nav-link {
            display: block;
            padding: 1rem 1.5rem !important;
            border-bottom: 1px solid #e9ecef;
            color: #212529 !important;
          }

          .nav-link:hover {
            background-color: rgba(0, 133, 202, 0.05) !important;
            color: #0085CA !important;
          }

          .nav-link--active {
            background-color: rgba(0, 133, 202, 0.1) !important;
            border-left: 4px solid #0085CA;
          }

          .nav-link-indicator {
            display: none;
          }
        }

        /* Desktop navigation styles */
        @media (min-width: 1024px) {
          .usa-nav {
            background: transparent;
          }

          .nav-link {
            margin: 0 0.25rem;
            border-radius: 0.25rem;
          }

          .nav-link:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
