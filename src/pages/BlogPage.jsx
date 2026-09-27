import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { searchPosts, categories, posts } from '../data/dataService'
import PostCard from '../components/PostCard'
import './BlogPage.css'

function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [view, setView] = useState('grid')

  const query = searchParams.get('q') || ''
  const activeCategory = searchParams.get('category') || ''

  const filteredPosts = useMemo(
    () => searchPosts(query, activeCategory),
    [query, activeCategory]
  )

  const handleSearch = (e) => {
    e.preventDefault()
    const q = e.target.elements.search.value.trim()
    const params = {}
    if (q) params.q = q
    if (activeCategory) params.category = activeCategory
    setSearchParams(params)
  }

  const handleCategory = (cat) => {
    const params = {}
    if (cat) params.category = cat
    if (query) params.q = query
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasFilters = query || activeCategory

  return (
    <div className="blog-page">
      {/* ===== BLOG HERO ===== */}
      <section className="blog-hero grid-bg">
        <div className="container">
          <div className="blog-hero-content">
            <div className="badge" style={{ marginBottom: '20px' }}>
              <span className="dot"></span>
              <span className="dot"></span>
              المدونة
            </div>
            <h1 className="blog-hero-title">
              استكشف <span className="blog-hero-highlight">عالم</span> التصوير
            </h1>
            <p className="blog-hero-sub">
              {posts.length} مقالة في التصوير الفوتوغرافي من أفضل المصورين العرب
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="blog-search-form">
              <div className="blog-search-inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  name="search"
                  defaultValue={query}
                  placeholder="ابحث في المقالات..."
                  className="blog-search-input"
                />
                <button type="submit" className="btn-primary blog-search-btn">بحث</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FILTERS + CONTENT ===== */}
      <section className="blog-main">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="blog-filters">
            <div className="blog-filter-pills">
              <button
                className={`filter-pill ${!activeCategory ? 'filter-pill--active' : ''}`}
                onClick={() => handleCategory('')}
              >
                الكل
                <span className="filter-pill-count">{posts.length}</span>
              </button>
              {categories.map(cat => (
                <button
                  key={cat.name}
                  className={`filter-pill ${activeCategory === cat.name ? 'filter-pill--active' : ''}`}
                  onClick={() => handleCategory(cat.name)}
                >
                  {cat.name}
                  <span className="filter-pill-count">{cat.count}</span>
                </button>
              ))}
            </div>

            {/* View toggle + result count */}
            <div className="blog-view-toggle">
              <span className="blog-result-count">
                {filteredPosts.length} نتيجة
              </span>
              <button
                className={`view-btn ${view === 'grid' ? 'view-btn--active' : ''}`}
                onClick={() => setView('grid')}
                aria-label="عرض شبكي"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/>
                </svg>
              </button>
              <button
                className={`view-btn ${view === 'list' ? 'view-btn--active' : ''}`}
                onClick={() => setView('list')}
                aria-label="عرض قائمة"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6"/>
                  <line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/>
                  <line x1="3" y1="12" x2="3.01" y2="12"/>
                  <line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Active filter indicator */}
          {hasFilters && (
            <div className="blog-active-filters">
              <span className="blog-filter-label">
                {query && <span className="filter-chip">بحث: "{query}"</span>}
                {activeCategory && <span className="filter-chip">{activeCategory}</span>}
              </span>
              <button className="clear-filters-btn" onClick={clearFilters}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
                مسح الفلاتر
              </button>
            </div>
          )}

          {/* Posts grid/list */}
          {filteredPosts.length > 0 ? (
            <div className={view === 'grid' ? 'blog-grid' : 'blog-list'}>
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} view={view} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <div className="blog-empty-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <h3>لا توجد نتائج</h3>
              <p>لم نجد مقالات تطابق بحثك. جرب كلمات مختلفة أو تصفح جميع المقالات.</p>
              <button className="btn-primary" onClick={clearFilters}>
                عرض جميع المقالات
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BlogPage
