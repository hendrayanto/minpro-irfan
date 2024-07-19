import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer7 thq-section-padding">
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-content">
            <div className="footer-logo"></div>
            <div className="footer-links">
              <span className="thq-body-small">{props.link1}</span>
              <span className="thq-body-small">{props.link2}</span>
              <span className="thq-body-small">{props.link3}</span>
              <span className="thq-body-small">{props.link4}</span>
              <span className="thq-body-small">{props.link5}</span>
            </div>
          </div>
          <div className="footer-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer-row">
              <div className="footer-container">
                <span className="thq-body-small">2024 Musical Party</span>
              </div>
              <div className="footer-footer-links">
                <span className="footer-text6 thq-body-small">
                  {props.privacyLink}
                </span>
                <span className="thq-body-small">{props.termsLink}</span>
                <span className="thq-body-small">{props.cookiesLink}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-logo {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer-container {
            display: flex;
            align-items: flex-start;
          }
          .footer-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer-text6 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 767px) {
            .footer-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-links {
              flex-direction: column;
            }
            .footer-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  link1: 'Browse Events',
  termsLink: 'Terms and Conditions',
  link3: 'About Us',
  privacyLink: 'Privacy Policy',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link4: 'Search Events',
  cookiesLink: 'Cookies Policy',
  link5: 'Contact Us',
  link2: 'Create Event',
  logoAlt: 'Music Concert Agency Logo',
}

Footer.propTypes = {
  link1: PropTypes.string,
  termsLink: PropTypes.string,
  link3: PropTypes.string,
  privacyLink: PropTypes.string,
  logoSrc: PropTypes.string,
  link4: PropTypes.string,
  cookiesLink: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Footer
