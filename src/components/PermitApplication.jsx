import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PermitApplication = () => {
  const { permitId } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Permit Specific Information
    vesselName: '',
    vesselLength: '',
    vesselType: '',
    homePort: '',
    fishingExperience: '',
    intendedFishingArea: '',
    targetSpecies: '',
    estimatedCatchVolume: '',
    
    // Additional Information
    additionalInfo: '',
    certifyTruth: false,
    agreeToTerms: false
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Permit data for display
  const permitData = {
    'commercial-fishing': {
      title: 'Commercial Fishing Permit',
      fee: '$250',
      processingTime: '2-3 weeks'
    },
    'recreational-fishing': {
      title: 'Recreational Fishing License',
      fee: '$45',
      processingTime: '1-2 days'
    },
    'charter-boat': {
      title: 'Charter Boat Permit',
      fee: '$500',
      processingTime: '4-6 weeks'
    },
    'research-permit': {
      title: 'Scientific Research Permit',
      fee: '$150',
      processingTime: '3-4 weeks'
    },
    'aquaculture': {
      title: 'Aquaculture Permit',
      fee: '$750',
      processingTime: '6-8 weeks'
    },
    'tournament': {
      title: 'Fishing Tournament Permit',
      fee: '$100',
      processingTime: '1-2 weeks'
    }
  };

  const currentPermit = permitData[permitId] || permitData['commercial-fishing'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setAlertMessage('Please fill in all required personal information fields.');
      setShowAlert(true);
      return;
    }

    if (!formData.certifyTruth || !formData.agreeToTerms) {
      setAlertMessage('Please check both certification boxes to continue.');
      setShowAlert(true);
      return;
    }

    // Simulate successful submission
    setIsSubmitted(true);
    setShowAlert(false);
  };

  if (isSubmitted) {
    return (
      <main id="main-content" className="usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap flex-justify-center">
            <div className="grid-col-12 tablet:grid-col-10 desktop:grid-col-8">
              <div className="usa-card">
                <div className="usa-card__container">
                  <div className="usa-card__header">
                    <h1 className="usa-card__heading">Application Submitted Successfully!</h1>
                  </div>
                  <div className="usa-card__body">
                    <div className="usa-alert usa-alert--success">
                      <div className="usa-alert__body">
                        <p className="usa-alert__text">
                          Your application for <strong>{currentPermit.title}</strong> has been submitted.
                        </p>
                      </div>
                    </div>

                    <div className="usa-summary-box margin-top-4">
                      <div className="usa-summary-box__body">
                        <h3 className="usa-summary-box__heading">Application Summary</h3>
                        <div className="usa-summary-box__text">
                          <ul>
                            <li><strong>Permit Type:</strong> {currentPermit.title}</li>
                            <li><strong>Application Fee:</strong> {currentPermit.fee}</li>
                            <li><strong>Processing Time:</strong> {currentPermit.processingTime}</li>
                            <li><strong>Application ID:</strong> DEMO-{Date.now()}</li>
                            <li><strong>Submitted:</strong> {new Date().toLocaleDateString()}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="usa-alert usa-alert--info margin-top-4">
                      <div className="usa-alert__body">
                        <h4 className="usa-alert__heading">What's Next?</h4>
                        <p className="usa-alert__text">
                          In a real system, you would receive a confirmation email and be able to track your application status. 
                          This is a demonstration application, so no actual permit will be processed.
                        </p>
                      </div>
                    </div>

                    <div className="margin-top-4">
                      <button 
                        type="button" 
                        onClick={() => navigate('/permits')}
                        className="usa-button usa-button--outline margin-right-2"
                      >
                        Apply for Another Permit
                      </button>
                      <button 
                        type="button" 
                        onClick={() => navigate('/')}
                        className="usa-button"
                      >
                        Return to Home
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="usa-section">
      <div className="grid-container">
        <div className="grid-row grid-gap flex-justify-center">
          <div className="grid-col-12 tablet:grid-col-10 desktop:grid-col-8">
            <div className="usa-card">
              <div className="usa-card__container">
                <div className="usa-card__header">
                  <h1 className="usa-card__heading">Apply for {currentPermit.title}</h1>
                </div>
                <div className="usa-card__body">
                  <p className="usa-intro">
                    Complete the form below to submit your permit application.
                  </p>

                  <div className="usa-summary-box margin-bottom-4">
                    <div className="usa-summary-box__body">
                      <h3 className="usa-summary-box__heading">Permit Information</h3>
                      <div className="usa-summary-box__text">
                        <ul>
                          <li><strong>Application Fee:</strong> {currentPermit.fee}</li>
                          <li><strong>Processing Time:</strong> {currentPermit.processingTime}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {showAlert && (
                    <div className="usa-alert usa-alert--error">
                      <div className="usa-alert__body">
                        <h4 className="usa-alert__heading">Application Error</h4>
                        <p className="usa-alert__text">{alertMessage}</p>
                      </div>
                    </div>
                  )}

                  <form className="usa-form" onSubmit={handleSubmit}>
                    <fieldset className="usa-fieldset">
                      <legend className="usa-legend">Personal Information</legend>
                      <div className="grid-row grid-gap">
                        <div className="grid-col-12 tablet:grid-col-6">
                          <label className="usa-label" htmlFor="firstName">First name *</label>
                          <input
                            className="usa-input"
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="grid-col-12 tablet:grid-col-6">
                          <label className="usa-label" htmlFor="lastName">Last name *</label>
                          <input
                            className="usa-input"
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid-row grid-gap">
                        <div className="grid-col-12 tablet:grid-col-6">
                          <label className="usa-label" htmlFor="email">Email address *</label>
                          <input
                            className="usa-input"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="grid-col-12 tablet:grid-col-6">
                          <label className="usa-label" htmlFor="phone">Phone number *</label>
                          <input
                            className="usa-input"
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <label className="usa-label" htmlFor="address">Address *</label>
                      <input
                        className="usa-input"
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />

                      <div className="grid-row grid-gap">
                        <div className="grid-col-12 tablet:grid-col-6">
                          <label className="usa-label" htmlFor="city">City *</label>
                          <input
                            className="usa-input"
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="grid-col-12 tablet:grid-col-3">
                          <label className="usa-label" htmlFor="state">State *</label>
                          <select
                            className="usa-select"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select a state</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="CA">California</option>
                            <option value="FL">Florida</option>
                            <option value="HI">Hawaii</option>
                            <option value="ME">Maine</option>
                            <option value="TX">Texas</option>
                            <option value="WA">Washington</option>
                          </select>
                        </div>
                        <div className="grid-col-12 tablet:grid-col-3">
                          <label className="usa-label" htmlFor="zipCode">ZIP Code *</label>
                          <input
                            className="usa-input"
                            id="zipCode"
                            name="zipCode"
                            type="text"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="usa-fieldset">
                      <legend className="usa-legend">Fishing Information</legend>
                      <div className="grid-row grid-gap">
                        <div className="grid-col-12 tablet:grid-col-6">
                          <label className="usa-label" htmlFor="vesselName">Vessel name</label>
                          <input
                            className="usa-input"
                            id="vesselName"
                            name="vesselName"
                            type="text"
                            value={formData.vesselName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="grid-col-12 tablet:grid-col-6">
                          <label className="usa-label" htmlFor="vesselLength">Vessel length (feet)</label>
                          <input
                            className="usa-input"
                            id="vesselLength"
                            name="vesselLength"
                            type="number"
                            value={formData.vesselLength}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid-row grid-gap">
                        <div className="grid-col-12 tablet:grid-col-6">
                          <label className="usa-label" htmlFor="vesselType">Vessel type</label>
                          <select
                            className="usa-select"
                            id="vesselType"
                            name="vesselType"
                            value={formData.vesselType}
                            onChange={handleChange}
                          >
                            <option value="">Select vessel type</option>
                            <option value="motorboat">Motorboat</option>
                            <option value="sailboat">Sailboat</option>
                            <option value="commercial-vessel">Commercial Vessel</option>
                            <option value="charter-boat">Charter Boat</option>
                          </select>
                        </div>
                        <div className="grid-col-12 tablet:grid-col-6">
                          <label className="usa-label" htmlFor="homePort">Home port</label>
                          <input
                            className="usa-input"
                            id="homePort"
                            name="homePort"
                            type="text"
                            value={formData.homePort}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <label className="usa-label" htmlFor="intendedFishingArea">Intended fishing area</label>
                      <input
                        className="usa-input"
                        id="intendedFishingArea"
                        name="intendedFishingArea"
                        type="text"
                        value={formData.intendedFishingArea}
                        onChange={handleChange}
                      />

                      <label className="usa-label" htmlFor="targetSpecies">Target species</label>
                      <input
                        className="usa-input"
                        id="targetSpecies"
                        name="targetSpecies"
                        type="text"
                        value={formData.targetSpecies}
                        onChange={handleChange}
                      />

                      <label className="usa-label" htmlFor="fishingExperience">Years of fishing experience</label>
                      <select
                        className="usa-select"
                        id="fishingExperience"
                        name="fishingExperience"
                        value={formData.fishingExperience}
                        onChange={handleChange}
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1">0-1 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="11-20">11-20 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                    </fieldset>

                    <fieldset className="usa-fieldset">
                      <legend className="usa-legend">Additional Information</legend>
                      <label className="usa-label" htmlFor="additionalInfo">Additional information or special requests</label>
                      <textarea
                        className="usa-textarea"
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                      />
                    </fieldset>

                    <fieldset className="usa-fieldset">
                      <legend className="usa-legend">Certification</legend>
                      <div className="usa-checkbox">
                        <input
                          className="usa-checkbox__input"
                          id="certifyTruth"
                          name="certifyTruth"
                          type="checkbox"
                          checked={formData.certifyTruth}
                          onChange={handleChange}
                        />
                        <label className="usa-checkbox__label" htmlFor="certifyTruth">
                          I certify that the information provided is true and accurate to the best of my knowledge.
                        </label>
                      </div>

                      <div className="usa-checkbox">
                        <input
                          className="usa-checkbox__input"
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                        />
                        <label className="usa-checkbox__label" htmlFor="agreeToTerms">
                          I agree to comply with all applicable fishing regulations and permit conditions.
                        </label>
                      </div>
                    </fieldset>

                    <div className="margin-top-4">
                      <button type="submit" className="usa-button margin-right-2">
                        Submit Application
                      </button>
                      <button 
                        type="button" 
                        onClick={() => navigate('/permits')}
                        className="usa-button usa-button--outline"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>

                  <div className="usa-alert usa-alert--info margin-top-4">
                    <div className="usa-alert__body">
                      <h4 className="usa-alert__heading">Demo Application</h4>
                      <p className="usa-alert__text">
                        This is a demonstration application. No real permit will be processed and no payment will be collected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PermitApplication;
