import { useParams, Link } from 'react-router-dom'
import { getPostBySlug, posts, formatDate } from '../data/dataService'
import PostCard from '../components/PostCard'
import NotFoundPage from './NotFoundPage'
import './BlogDetailsPage.css'

function BlogDetailsPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <NotFoundPage />
  }

  // Get related posts: same category, excluding current
  const related = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  // Parse content: split by \n\n and render headings/paragraphs
  const renderContent = (text) => {
    const paragraphs = text.split('\n\n')
    return paragraphs.map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="post-content-h2">{block.replace('## ', '')}</h2>
      }
      return <p key={i} className="post-content-p">{block}</p>
    })
  }

  return (
    <div className="blog-details-page">
      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">الرئيسية</Link>
            <span className="breadcrumb-sep">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </span>
            <Link to="/blog" className="breadcrumb-link">المدونة</Link>
            <span className="breadcrumb-sep">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </span>
            <span className="breadcrumb-current">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* ===== POST HEADER ===== */}
      <header className="post-header grid-bg">
        <div className="container">
          <div className="post-header-inner">
            <div className="post-header-meta">
              <Link
                to={`/blog?category=${encodeURIComponent(post.category)}`}
                className="post-category-tag"
              >
                {post.category}
              </Link>
              <span className="post-header-time">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {post.readTime}
              </span>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>

            {/* Author + date */}
            <div className="post-author-bar">
              <div className="post-author-info">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="post-author-avatar"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }}
                />
                <div>
                  <span className="post-author-name">{post.author.name}</span>
                  <span className="post-author-role">{post.author.role}</span>
                </div>
              </div>
              <div className="post-date-info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                {formatDate(post.date)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== FEATURED IMAGE ===== */}
      <div className="post-image-wrapper">
        <div className="container">
          <div className="post-featured-image">
            <img
              src={post.image}
              alt={post.title}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop' }}
            />
            {post.featured && (
              <div className="post-featured-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                مقال مميز
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== POST BODY ===== */}
      <article className="post-body-section">
        <div className="container">
          <div className="post-layout">
            {/* Content */}
            <div className="post-content">
              {renderContent(post.content)}
            </div>

            {/* Sidebar */}
            <aside className="post-sidebar">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="sidebar-card">
                  <h3 className="sidebar-card-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                      <line x1="7" y1="7" x2="7.01" y2="7"/>
                    </svg>
                    الوسوم
                  </h3>
                  <div className="sidebar-tags">
                    {post.tags.map(tag => (
                      <Link
                        key={tag}
                        to={`/blog?q=${encodeURIComponent(tag)}`}
                        className="sidebar-tag"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Category */}
              <div className="sidebar-card">
                <h3 className="sidebar-card-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                  التصنيف
                </h3>
                <Link
                  to={`/blog?category=${encodeURIComponent(post.category)}`}
                  className="sidebar-category-btn"
                >
                  {post.category}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m12 19-7-7 7-7M19 12H5"/>
                  </svg>
                </Link>
              </div>

              {/* Author card */}
              <div className="sidebar-card sidebar-author-card">
                <h3 className="sidebar-card-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  الكاتب
                </h3>
                <div className="sidebar-author">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="sidebar-author-avatar"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }}
                  />
                  <div>
                    <span className="sidebar-author-name">{post.author.name}</span>
                    <span className="sidebar-author-role">{post.author.role}</span>
                  </div>
                </div>
              </div>

              {/* Back to blog */}
              <Link to="/blog" className="sidebar-back-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m12 19-7-7 7-7M19 12H5"/>
                </svg>
                العودة للمدونة
              </Link>
            </aside>
          </div>
        </div>
      </article>

      {/* ===== RELATED POSTS ===== */}
      {related.length > 0 && (
        <section className="related-posts-section">
          <div className="container">
            <div className="badge" style={{ marginBottom: '12px' }}>
              <span className="dot"></span>
              <span className="dot"></span>
              مقالات ذات صلة
            </div>
            <div className="section-header-row" style={{ marginBottom: '40px' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
                  قد يعجبك أيضاً
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '4px' }}>
                  مقالات في نفس التصنيف
                </p>
              </div>
              <Link to={`/blog?category=${encodeURIComponent(post.category)}`} className="view-all-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m12 19-7-7 7-7M19 12H5"/>
                </svg>
                عرض الكل
              </Link>
            </div>
            <div className="related-grid">
              {related.map(p => (
                <PostCard key={p.id} post={p} view="grid" />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default BlogDetailsPage
