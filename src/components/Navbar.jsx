import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { siteInfo } from '../data/dataService'
import './Navbar.css'

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchValue.trim()) {
      navigate(`/blog?q=${encodeURIComponent(searchValue.trim())}`)
      setSearchOpen(false)
      setSearchValue('')
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        {/* CTA + Search - right side in RTL = appears on left visually */}
        <div className="navbar-actions">
          <Link to="/blog" className="btn-primary navbar-cta">ابدأ القراءة</Link>
          <button
            className="navbar-search-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="بحث"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>

        {/* Nav Links - center */}
        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            الرئيسية
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            المدونة
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            من نحن
          </NavLink>
        </nav>

        {/* Logo - left side in RTL = appears on right visually */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18 3C9.716 3 3 9.716 3 18c0 2.5.6 4.86 1.66 6.94L3 32l7.35-1.61C12.39 31.37 15.09 32 18 32c8.284 0 15-6.716 15-15S26.284 3 18 3z" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 8l4.5 7.8M26.5 14.5l-4.5 7.8M24 25.5l-9 0M13.5 26.5l-4.5-7.8M10.5 18l4.5-7.8M15.5 10.5l9 0" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="18" cy="18" r="4" stroke="#f97316" strokeWidth="1.6"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">{siteInfo.name}</span>
            <span className="logo-tagline">{siteInfo.tagline}</span>
          </div>
        </Link>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="navbar-search-bar container">
          <form onSubmit={handleSearch} className="search-form">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="ابحث عن مقالة..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>بحث</button>
          </form>
        </div>
      )}
    </header>
  )
}

export default Navbar
