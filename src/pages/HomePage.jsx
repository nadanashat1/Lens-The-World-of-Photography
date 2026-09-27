import { Link } from 'react-router-dom'
import { getFeaturedPosts, getLatestPosts, categories, posts, formatDate } from '../data/dataService'
import PostCard from '../components/PostCard'
import Newsletter from '../components/Newsletter'
import './HomePage.css'

// Category icons mapping
const categoryIcons = {
  'إضاءة': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      <circle cx="12" cy="12" r="5"/>
    </svg>
  ),
  'بورتريه': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  'مناظر طبيعية': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l4-8 4 4 3-6 4 10"/>
      <path d="M3 21h18"/>
    </svg>
  ),
  'تقنيات': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
  'معدات': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
}

function HomePage() {
  const featuredPosts = getFeaturedPosts()
  const latestPosts = getLatestPosts(3)

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero grid-bg">
        <div className="container">
          <div className="hero-content">
            <div className="badge hero-badge">
              <span className="dot"></span>
              <span className="dot"></span>
              <span>مرحباً بك في عدسة</span>
            </div>
            <h1 className="hero-title">
              اكتشف <span className="hero-highlight">فن</span><br/>
              التصوير الفوتوغرافي
            </h1>
            <p className="hero-description">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في<br/>
              التصوير.
            </p>
            <div className="hero-actions">
              <Link to="/blog" className="btn-primary hero-btn-primary">
                استكشف المقالات
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m12 19-7-7 7-7"/>
                  <path d="M19 12H5"/>
                </svg>
              </Link>
              <Link to="/blog" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4M12 16h.01"/>
                </svg>
                اعرف المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">مقالة</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="stat-number">10+ألف</div>
              <div className="stat-label">قارئ</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="stat-number">4</div>
              <div className="stat-label">تصنيفات</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <div className="stat-number">6</div>
              <div className="stat-label">كاتب</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED POSTS ===== */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-header">
            <div>
              <div className="badge" style={{ marginBottom: '12px' }}>
                <span className="dot"></span>
                <span className="dot"></span>
                مميز
              </div>
              <div className="section-header-row">
                <div>
                  <h2>مقالات مختارة</h2>
                  <p>محتوى منتقى لبدء رحلة تعلمك</p>
                </div>
                <Link to="/blog" className="btn-primary view-all-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m12 19-7-7 7-7"/>
                    <path d="M19 12H5"/>
                  </svg>
                  عرض الكل
                </Link>
              </div>
            </div>
          </div>

          <div className="featured-list">
            {featuredPosts.map(post => (
              <article key={post.id} className="featured-card">
                <div className="featured-card-content">
                  <div className="featured-card-meta">
                    <span className="featured-tag">{post.category}</span>
                    <span className="featured-time">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="featured-card-title">{post.title}</h3>
                  </Link>
                  <p className="featured-card-excerpt">{post.excerpt}</p>
                  <div className="featured-card-footer">
                    <div className="featured-author">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }}
                      />
                      <div>
                        <span className="featured-author-name">{post.author.name}</span>
                        <span className="featured-author-date">
                          <span className="dot" style={{ width: '5px', height: '5px', background: '#f97316', display: 'inline-block', borderRadius: '50%' }}></span>
                          {formatDate(post.date)}
                        </span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="post-card-read-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                      </svg>
                      اقرأ المقال
                    </Link>
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`} className="featured-card-image-link">
                  <div className="featured-card-image">
                    <img
                      src={post.image}
                      alt={post.title}
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop' }}
                    />
                    <div className="featured-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      مميز
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="categories-section">
        <div className="container">
          <div className="badge" style={{ marginBottom: '12px' }}>
            <span className="dot"></span>
            <span className="dot"></span>
            التصنيفات
          </div>
          <div className="section-header-row">
            <div>
              <h2 className="section-title">استكشف حسب الموضوع</h2>
              <p className="section-sub">اعثر على محتوى مصمم حسب اهتماماتك</p>
            </div>
          </div>
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <Link
                key={cat.name}
                to={`/blog?category=${encodeURIComponent(cat.name)}`}
                className={`category-card ${index === 0 ? 'category-card--active' : ''}`}
              >
                <div className="category-card-icon">
                  {categoryIcons[cat.name] || categoryIcons['تقنيات']}
                </div>
                <div className="category-card-info">
                  <span className="category-card-name">{cat.name}</span>
                  <span className="category-card-count">{cat.count} مقالة</span>
                </div>
                <div className="category-card-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m12 19-7-7 7-7"/>
                    <path d="M19 12H5"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST POSTS ===== */}
      <section className="latest-section">
        <div className="container">
          <div className="badge" style={{ marginBottom: '12px' }}>
            <span className="dot"></span>
            <span className="dot"></span>
            الأحدث
          </div>
          <div className="section-header-row">
            <div>
              <h2 className="section-title">أحدث المقالات</h2>
              <p className="section-sub">محتوى جديد طازج من المطبعة</p>
            </div>
            <Link to="/blog" className="view-all-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              عرض جميع المقالات
            </Link>
          </div>

          <div className="latest-grid">
            {latestPosts.map(post => (
              <PostCard key={post.id} post={post} view="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <Newsletter />
    </div>
  )
}

export default HomePage
