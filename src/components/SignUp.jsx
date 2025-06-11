import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Fieldset,
  Label,
  TextInput,
  Button,
  Alert,
} from '@trussworks/react-uswds';

const SignUp = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setAlertMessage('Passwords do not match.');
      setShowAlert(true);
      return;
    }

    if (formData.password.length < 6) {
      setAlertMessage('Password must be at least 6 characters long.');
      setShowAlert(true);
      return;
    }

    // Demo registration - accept any valid input
    const user = {
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
    };
    
    onSignUp(user);
    setShowAlert(false);
  };

  return (
    <main id="main-content" className="usa-section">
      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-col-12 tablet:grid-col-8 tablet:grid-offset-2 desktop:grid-col-6 desktop:grid-offset-3">
            <h1>Create Account</h1>
            <p className="usa-intro">
              Create a new account to access the fishing permit system.
            </p>

            {showAlert && (
              <Alert type="error" heading="Registration Error" headingLevel="h4">
                {alertMessage}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Fieldset legend="Personal Information">
                <Label htmlFor="firstName">First name</Label>
                <TextInput
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <Label htmlFor="lastName">Last name</Label>
                <TextInput
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

                <Label htmlFor="email">Email address</Label>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Fieldset>

              <Fieldset legend="Account Security">
                <Label htmlFor="password">Password</Label>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="usa-hint">
                  Password must be at least 6 characters long.
                </div>

                <Label htmlFor="confirmPassword">Confirm password</Label>
                <TextInput
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Fieldset>

              <Button type="submit" className="margin-top-2">
                Create Account
              </Button>
            </Form>

            <div className="margin-top-4">
              <p>
                Already have an account?{' '}
                <Link to="/signin">Sign in</Link>
              </p>
            </div>

            <div className="usa-alert usa-alert--info margin-top-4">
              <div className="usa-alert__body">
                <h4 className="usa-alert__heading">Demo Application</h4>
                <p className="usa-alert__text">
                  This is a demonstration application. Account creation is simulated and no real data is stored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
