import React from 'react';
import { Link } from 'react-router-dom';

const PermitSelection = () => {
  const permits = [
    {
      id: 'commercial-fishing',
      title: 'Commercial Fishing Permit',
      description: 'Required for commercial fishing operations in federal waters. Includes vessel registration and catch reporting requirements.',
      requirements: ['Valid vessel documentation', 'Fishing experience certification', 'Safety equipment compliance'],
      fee: '$250',
      processingTime: '2-3 weeks',
      category: 'Commercial'
    },
    {
      id: 'recreational-fishing',
      title: 'Recreational Fishing License',
      description: 'For recreational fishing in designated areas. Includes daily catch limits and seasonal restrictions.',
      requirements: ['Valid ID', 'Fishing safety course completion'],
      fee: '$45',
      processingTime: '1-2 days',
      category: 'Recreational'
    },
    {
      id: 'charter-boat',
      title: 'Charter Boat Permit',
      description: 'For operating charter fishing services. Includes passenger safety requirements and guide certification.',
      requirements: ['Coast Guard vessel inspection', 'Captain\'s license', 'Insurance documentation'],
      fee: '$500',
      processingTime: '4-6 weeks',
      category: 'Commercial'
    },
    {
      id: 'research-permit',
      title: 'Scientific Research Permit',
      description: 'For scientific research activities involving marine life. Includes data sharing requirements.',
      requirements: ['Research proposal', 'Institutional affiliation', 'Ethics approval'],
      fee: '$150',
      processingTime: '3-4 weeks',
      category: 'Research'
    },
    {
      id: 'aquaculture',
      title: 'Aquaculture Permit',
      description: 'For fish farming and aquaculture operations. Includes environmental impact assessments.',
      requirements: ['Site survey', 'Environmental impact study', 'Water quality certification'],
      fee: '$750',
      processingTime: '6-8 weeks',
      category: 'Commercial'
    },
    {
      id: 'tournament',
      title: 'Fishing Tournament Permit',
      description: 'For organizing fishing tournaments and competitions. Includes participant registration requirements.',
      requirements: ['Event insurance', 'Safety plan', 'Prize structure documentation'],
      fee: '$100',
      processingTime: '1-2 weeks',
      category: 'Event'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Commercial': return '#0085CA';
      case 'Recreational': return '#00A91C';
      case 'Research': return '#8168B3';
      case 'Event': return '#FA9441';
      default: return '#71767A';
    }
  };

  return (
    <main id="main-content" className="usa-section">
      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-col-12">
            <h1>Select a Fishing Permit</h1>
            <p className="usa-intro">
              Choose the type of fishing permit you need to apply for. Each permit has specific requirements and fees.
            </p>

            <div className="usa-alert usa-alert--info margin-bottom-4">
              <div className="usa-alert__body">
                <h4 className="usa-alert__heading">Demo Application</h4>
                <p className="usa-alert__text">
                  This is a demonstration system. All permit applications are simulated and no real permits will be issued.
                </p>
              </div>
            </div>

            <div className="grid-row grid-gap margin-top-4">
              {permits.map((permit) => (
                <div key={permit.id} className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-bottom-4">
                  <div className="usa-card height-full">
                    <div className="usa-card__header">
                      <h3 className="usa-card__heading">
                        {permit.title}
                      </h3>
                      <span 
                        className="usa-tag"
                        style={{ 
                          backgroundColor: getCategoryColor(permit.category),
                          color: 'white'
                        }}
                      >
                        {permit.category}
                      </span>
                    </div>
                    <div className="usa-card__body">
                      <p>
                        {permit.description}
                      </p>
                      
                      <div style={{ marginBottom: '1rem' }}>
                        <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#1b1b1b', fontWeight: '600' }}>Requirements:</h4>
                        <ul style={{ fontSize: '0.875rem', paddingLeft: '1.25rem', margin: 0 }}>
                          {permit.requirements.map((req, index) => (
                            <li key={index} style={{ marginBottom: '0.25rem' }}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid-row grid-gap" style={{ marginTop: 'auto' }}>
                        <div className="grid-col-6">
                          <strong>Fee:</strong>
                          <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0085CA' }}>
                            {permit.fee}
                          </div>
                        </div>
                        <div className="grid-col-6">
                          <strong>Processing:</strong>
                          <div>
                            {permit.processingTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="usa-card__footer">
                      <Link to={`/apply/${permit.id}`}>
                        <button type="button" className="usa-button width-full">
                          Apply for This Permit
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="margin-top-6">
              <div className="usa-alert usa-alert--warning">
                <div className="usa-alert__body">
                  <h4 className="usa-alert__heading">Need Help Choosing?</h4>
                  <p className="usa-alert__text">
                    If you're unsure which permit you need, please contact our support team at{' '}
                    <a href="tel:1-800-853-1964">1-800-853-1964</a> or{' '}
                    <a href="mailto:permits@example.gov">permits@example.gov</a> for assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PermitSelection;
