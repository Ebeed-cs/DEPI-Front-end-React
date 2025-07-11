import React, { useState, useEffect } from 'react';

// Mock logo - replace with your actual logo import
const logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MzY2ZjEiLz4KPHR0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RkM8L3RleHQ+Cjwvc3ZnPgo=';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <style jsx>{`
        .udemy-footer {
          background-color: #2d2f31;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .top-banner {
          background-color: #1c1d1f;
          padding: 24px 0;
          text-align: center;
          border-bottom: 1px solid #3e4143;
        }

        .banner-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .banner-text {
          color: #ffffff;
          font-size: 16px;
          font-weight: 400;
          margin: 0;
        }

        .banner-text strong {
          font-weight: 700;
        }

        .company-logos {
          display: flex;
          align-items: center;
          gap: 32px;
          opacity: 0.8;
        }

        .company-logo {
          height: 32px;
          filter: brightness(0) invert(1);
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .company-logo:hover {
          opacity: 1;
        }

        .footer-main {
          padding: 48px 0 32px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 32px;
        }

        .footer-brand {
          max-width: 300px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .footer-logo img {
          width: 40px;
          height: 40px;
          margin-right: 12px;
        }

        .footer-logo-text {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
        }

        .footer-description {
          color: #c0c4fc;
          line-height: 1.6;
          margin-bottom: 24px;
          font-size: 14px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #3e4143;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background-color: #5624d0;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .footer-column h3 {
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 16px;
          margin-top: 0;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links a {
          color: #c0c4fc;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .contact-info {
          color: #c0c4fc;
          font-size: 14px;
          line-height: 1.6;
        }

        .contact-info i {
          margin-right: 8px;
          color: #5624d0;
          width: 16px;
        }

        .contact-info a {
          color: #c0c4fc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-info a:hover {
          color: #ffffff;
        }

        .footer-bottom {
          border-top: 1px solid #3e4143;
          padding: 24px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright {
          color: #c0c4fc;
          font-size: 14px;
          margin: 0;
        }

        .language-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: transparent;
          border: 1px solid #3e4143;
          color: #ffffff;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .language-selector:hover {
          border-color: #5624d0;
        }

        .back-to-top {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 48px;
          height: 48px;
          background-color: #5624d0;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(86, 36, 208, 0.3);
          transition: all 0.3s ease;
          z-index: 1000;
          font-size: 16px;
        }

        .back-to-top:hover {
          background-color: #4c1d95;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(86, 36, 208, 0.4);
        }

        /* Newsletter Section */
        .newsletter-section {
          background-color: #1c1d1f;
          padding: 32px 0;
          border-bottom: 1px solid #3e4143;
        }

        .newsletter-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }

        .newsletter-text h3 {
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .newsletter-text p {
          color: #c0c4fc;
          font-size: 14px;
          margin: 0;
        }

        .newsletter-form {
          display: flex;
          gap: 12px;
          min-width: 300px;
        }

        .newsletter-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #3e4143;
          background-color: #2d2f31;
          color: #ffffff;
          border-radius: 4px;
          font-size: 14px;
          transition: border-color 0.3s ease;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #5624d0;
        }

        .newsletter-input::placeholder {
          color: #6b7280;
        }

        .newsletter-btn {
          padding: 12px 24px;
          background-color: #5624d0;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .newsletter-btn:hover {
          background-color: #4c1d95;
          transform: translateY(-1px);
        }

        .newsletter-btn.subscribed {
          background-color: #059669;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 32px;
          }

          .footer-brand {
            grid-column: 1 / -1;
            max-width: none;
          }
        }

        @media (max-width: 768px) {
          .banner-content {
            flex-direction: column;
            text-align: center;
          }

          .company-logos {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }

          .newsletter-content {
            flex-direction: column;
            text-align: center;
          }

          .newsletter-form {
            width: 100%;
            max-width: 400px;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .newsletter-form {
            flex-direction: column;
            gap: 12px;
          }

          .newsletter-input,
          .newsletter-btn {
            width: 100%;
          }
        }
      `}</style>

      <footer className="udemy-footer">
        {/* Top Banner */}
        <div className="top-banner">
          <div className="banner-content">
            <p className="banner-text">
              Top companies choose <strong>FreshCart Business</strong> to build in-demand shopping skills.
            </p>
            <div className="company-logos">
              <svg className="company-logo" width="80" height="32" viewBox="0 0 80 32" fill="currentColor">
                <text x="40" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">NASDAQ</text>
              </svg>
              <svg className="company-logo" width="80" height="32" viewBox="0 0 80 32" fill="currentColor">
                <text x="40" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">VW</text>
              </svg>
              <svg className="company-logo" width="80" height="32" viewBox="0 0 80 32" fill="currentColor">
                <text x="40" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">NetApp</text>
              </svg>
              <svg className="company-logo" width="80" height="32" viewBox="0 0 80 32" fill="currentColor">
                <text x="40" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">Eventbrite</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Updated</h3>
              <p>Get exclusive deals and updates delivered to your inbox</p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                onClick={handleSubscribe}
                className={`newsletter-btn ${isSubscribed ? 'subscribed' : ''}`}
              >
                {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-container">
            <div className="footer-grid">
              {/* Brand Column */}
              <div className="footer-brand">
                <div className="footer-logo">
                  <img src={logo} alt="FreshCart" />
                  <span className="footer-logo-text">FreshCart</span>
                </div>
                <p className="footer-description">
                  Premium quality products with fast delivery and excellent customer service. Your trusted partner for online shopping.
                </p>
                <div className="footer-social">
                  <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    📘
                  </a>
                  <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    🐦
                  </a>
                  <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    📷
                  </a>
                  <a href="https://youtube.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    📺
                  </a>
                  <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    💼
                  </a>
                </div>
              </div>

              {/* Shop Links */}
              <div className="footer-column">
                <h3>Shop</h3>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/products">Products</a></li>
                  <li><a href="/categories">Categories</a></li>
                  <li><a href="/brands">Brands</a></li>
                  <li><a href="/deals">Deals</a></li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="footer-column">
                <h3>Support</h3>
                <ul className="footer-links">
                  <li><a href="/help">Help Center</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/shipping">Shipping Info</a></li>
                  <li><a href="/returns">Returns</a></li>
                  <li><a href="/faq">FAQ</a></li>
                </ul>
              </div>

              {/* Legal Links */}
              <div className="footer-column">
                <h3>Legal</h3>
                <ul className="footer-links">
                  <li><a href="/terms">Terms of Service</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/cookies">Cookie Policy</a></li>
                  <li><a href="/accessibility">Accessibility</a></li>
                  <li><a href="/sitemap">Sitemap</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footer-column">
                <h3>Contact</h3>
                <div className="contact-info">
                  <p><i>📍</i> 123 Commerce St, NY 10001</p>
                  <p><i>📞</i> <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                  <p><i>✉️</i> <a href="mailto:support@freshcart.com">support@freshcart.com</a></p>
                  <p><i>🕒</i> Mon-Fri: 9AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-container">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} FreshCart, Inc. All rights reserved.
              </p>
              <button className="language-selector">
                🌐 English
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button 
            className="back-to-top" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑
          </button>
        )}
      </footer>
    </>
  );
}