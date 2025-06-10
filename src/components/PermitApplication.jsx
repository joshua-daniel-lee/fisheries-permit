import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Form,
  Fieldset,
  Label,
  TextInput,
  Textarea,
  Select,
  Button,
  Alert,
  Checkbox,
} from '@trussworks/react-uswds';

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
          <div className="grid-row">
            <div className="grid-col-12 tablet:grid-col-8 tablet:grid-offset-2">
              <div className="usa-alert usa-alert--success">
                <div className="usa-alert__body">
                  <h3 className="usa-alert__heading">Application Submitted Successfully!</h3>
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
                <Button 
                  type="button" 
                  onClick={() => navigate('/permits')}
                  className="usa-button usa-button--outline margin-right-2"
                >
                  Apply for Another Permit
                </Button>
                <Button 
                  type="button" 
                  onClick={() => navigate('/')}
                  className="usa-button"
                >
                  Return to Home
                </Button>
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
        <div className="grid-row">
          <div className="grid-col-12 tablet:grid-col-8 tablet:grid-offset-2">
            <h1>Apply for {currentPermit.title}</h1>
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
              <Alert type="error" heading="Application Error" headingLevel="h4">
                {alertMessage}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Fieldset legend="Personal Information">
                <div className="grid-row grid-gap">
                  <div className="grid-col-12 tablet:grid-col-6">
                    <Label htmlFor="firstName">First name *</Label>
                    <TextInput
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid-col-12 tablet:grid-col-6">
                    <Label htmlFor="lastName">Last name *</Label>
                    <TextInput
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
                    <Label htmlFor="email">Email address *</Label>
                    <TextInput
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid-col-12 tablet:grid-col-6">
                    <Label htmlFor="phone">Phone number *</Label>
                    <TextInput
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <Label htmlFor="address">Address *</Label>
                <TextInput
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

                <div className="grid-row grid-gap">
                  <div className="grid-col-12 tablet:grid-col-6">
                    <Label htmlFor="city">City *</Label>
                    <TextInput
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid-col-12 tablet:grid-col-3">
                    <Label htmlFor="state">State *</Label>
                    <Select
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
                    </Select>
                  </div>
                  <div className="grid-col-12 tablet:grid-col-3">
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <TextInput
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </Fieldset>

              <Fieldset legend="Fishing Information">
                <div className="grid-row grid-gap">
                  <div className="grid-col-12 tablet:grid-col-6">
                    <Label htmlFor="vesselName">Vessel name</Label>
                    <TextInput
                      id="vesselName"
                      name="vesselName"
                      type="text"
                      value={formData.vesselName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid-col-12 tablet:grid-col-6">
                    <Label htmlFor="vesselLength">Vessel length (feet)</Label>
                    <TextInput
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
                    <Label htmlFor="vesselType">Vessel type</Label>
                    <Select
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
                    </Select>
                  </div>
                  <div className="grid-col-12 tablet:grid-col-6">
                    <Label htmlFor="homePort">Home port</Label>
                    <TextInput
                      id="homePort"
                      name="homePort"
                      type="text"
                      value={formData.homePort}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Label htmlFor="intendedFishingArea">Intended fishing area</Label>
                <TextInput
                  id="intendedFishingArea"
                  name="intendedFishingArea"
                  type="text"
                  value={formData.intendedFishingArea}
                  onChange={handleChange}
                />

                <Label htmlFor="targetSpecies">Target species</Label>
                <TextInput
                  id="targetSpecies"
                  name="targetSpecies"
                  type="text"
                  value={formData.targetSpecies}
                  onChange={handleChange}
                />

                <Label htmlFor="fishingExperience">Years of fishing experience</Label>
                <Select
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
                </Select>
              </Fieldset>

              <Fieldset legend="Additional Information">
                <Label htmlFor="additionalInfo">Additional information or special requests</Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                />
              </Fieldset>

              <Fieldset legend="Certification">
                <Checkbox
                  id="certifyTruth"
                  name="certifyTruth"
                  label="I certify that the information provided is true and accurate to the best of my knowledge."
                  checked={formData.certifyTruth}
                  onChange={handleChange}
                />

                <Checkbox
                  id="agreeToTerms"
                  name="agreeToTerms"
                  label="I agree to comply with all applicable fishing regulations and permit conditions."
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
              </Fieldset>

              <div className="margin-top-4">
                <Button type="submit" className="usa-button margin-right-2">
                  Submit Application
                </Button>
                <Button 
                  type="button" 
                  onClick={() => navigate('/permits')}
                  className="usa-button usa-button--outline"
                >
                  Cancel
                </Button>
              </div>
            </Form>

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
    </main>
  );
};

export default PermitApplication;
