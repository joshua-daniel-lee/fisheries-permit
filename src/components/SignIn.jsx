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

const SignIn = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Demo authentication - accept any email/password combination
    if (formData.email && formData.password) {
      // Simulate successful login
      const user = {
        email: formData.email,
        name: formData.email.split('@')[0], // Use part before @ as name
      };
      onSignIn(user);
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <main id="main-content" className="usa-section">
      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-col-12 tablet:grid-col-8 tablet:grid-offset-2 desktop:grid-col-6 desktop:grid-offset-3">
            <h1>Sign In</h1>
            <p className="usa-intro">
              Sign in to access your NOAA Fisheries permit account.
            </p>

            {showAlert && (
              <Alert type="error" heading="Sign In Error" headingLevel="h4">
                Please enter both email and password to continue.
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Fieldset legend="Account Information">
                <Label htmlFor="email">Email address</Label>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Label htmlFor="password">Password</Label>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Fieldset>

              <Button type="submit" className="margin-top-2">
                Sign In
              </Button>
            </Form>

            <div className="margin-top-4">
              <p>
                Don't have an account?{' '}
                <Link to="/signup">Create an account</Link>
              </p>
            </div>

            <div className="usa-alert usa-alert--info margin-top-4">
              <div className="usa-alert__body">
                <h4 className="usa-alert__heading">Demo Application</h4>
                <p className="usa-alert__text">
                  This is a demonstration application. You can sign in with any email address and password combination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
