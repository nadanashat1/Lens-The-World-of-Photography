import { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../data/dataService'
import './Footer.css'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Column 1 - Brand */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo">
              <div className="footer-logo-badge">ع</div>
              <span className="footer-logo-text">عدسة</span>
            </Link>
            <p className="footer-brand-desc">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="footer-social-row">
              <a
                href={siteInfo.social.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="يوتيوب"
                className="footer-social-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={siteInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="لينكدإن"
                className="footer-social-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={siteInfo.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="غيتهب"
                className="footer-social-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={siteInfo.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="تويتر"
                className="footer-social-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div className="footer-links-col">
            <div className="footer-title-wrap">
              <h4 className="footer-col-heading">استكشف</h4>
              <span className="footer-title-bar"></span>
            </div>
            <ul className="footer-nav-list">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/blog">المدونة</Link></li>
              <li><Link to="/about">من نحن</Link></li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div className="footer-links-col">
            <div className="footer-title-wrap">
              <h4 className="footer-col-heading">التصنيفات</h4>
              <span className="footer-title-bar"></span>
            </div>
            <ul className="footer-nav-list">
              <li><Link to="/blog?category=إضاءة">إضاءة</Link></li>
              <li><Link to="/blog?category=بورتريه">بورتريه</Link></li>
              <li><Link to="/blog?category=مناظر طبيعية">مناظر طبيعية</Link></li>
              <li><Link to="/blog?category=تقنيات">تقنيات</Link></li>
            </ul>
          </div>

          {/* Column 4 - Stay Updated */}
          <div className="footer-newsletter-col">
            <div className="footer-title-wrap">
              <h4 className="footer-col-heading">ابقى على اطلاع</h4>
              <span className="footer-title-bar"></span>
            </div>
            <p className="footer-newsletter-desc">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form className="footer-subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-email-input"
                required
              />
              <button type="submit" className="footer-submit-btn">
                اشترك
              </button>
            </form>
            {subscribed && (
              <span className="footer-subscribe-msg">تم الاشتراك بنجاح!</span>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 عدسة. صنع بكل <span className="heart-icon">🧡</span> جميع الحقوق محفوظة.
          </div>
          <div className="footer-legal-links">
            <Link to="#" onClick={(e) => e.preventDefault()}>سياسة الخصوصية</Link>
            <Link to="#" onClick={(e) => e.preventDefault()}>شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
