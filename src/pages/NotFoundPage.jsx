import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="notfound-page grid-bg">
      <div className="container">
        <div className="notfound-content">
          {/* Big 404 */}
          <div className="notfound-number">404</div>

          {/* Camera icon */}
          <div className="notfound-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>

          <div className="badge notfound-badge">
            <span className="dot"></span>
            <span className="dot"></span>
            الصفحة مفقودة
          </div>

          <h1 className="notfound-title">عفواً، لم نجد هذه الصفحة</h1>
          <p className="notfound-desc">
            يبدو أن الصفحة التي تبحث عنها قد تحركت أو لم تعد موجودة.
            <br/>
            لكن لا تقلق، يمكنك العودة إلى المسار الصحيح.
          </p>

          <div className="notfound-actions">
            <Link to="/" className="btn-primary notfound-btn-home">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              العودة للرئيسية
            </Link>
            <Link to="/blog" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              تصفح المدونة
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
