import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => {
        setSubscribed(false)
      }, 5000)
    }
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>

          <h2 className="newsletter-title">اشترك في نشرتنا الإخبارية</h2>
          <p className="newsletter-subtitle">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              اشترك الآن
            </button>
          </form>

          {subscribed && (
            <div className="newsletter-success">
              شكراً لاشتراكك! تم إرسال رسالة تأكيد إلى بريدك الإلكتروني.
            </div>
          )}

          <div className="newsletter-proof">
            <div className="newsletter-avatars">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="مصور"
                className="newsletter-avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                alt="مصور"
                className="newsletter-avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="مصور"
                className="newsletter-avatar"
              />
            </div>
            <span className="newsletter-proof-text">
              انضم لـ <span className="newsletter-proof-highlight">+10,000</span> مصور
            </span>
            <span className="newsletter-proof-dot">•</span>
            <span className="newsletter-proof-muted">بدون إزعاج</span>
            <span className="newsletter-proof-dot">•</span>
            <span className="newsletter-proof-muted">إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
