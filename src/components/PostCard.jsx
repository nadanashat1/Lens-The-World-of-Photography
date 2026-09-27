import { Link } from 'react-router-dom'
import { formatDate } from '../data/dataService'
import './PostCard.css'

function PostCard({ post, view = 'grid' }) {
  return (
    <article className={`post-card ${view === 'list' ? 'post-card--list' : 'post-card--grid'}`}>
      <Link to={`/blog/${post.slug}`} className="post-card-image-link">
        <div className="post-card-image">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop' }}
          />
          <div className="post-card-category">{post.category}</div>
        </div>
      </Link>
      <div className="post-card-body">
        <div className="post-card-meta">
          <span className="post-card-time">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            {post.readTime}
          </span>
          <span className="post-card-dot">•</span>
          <span className="post-card-date">{formatDate(post.date)}</span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="post-card-title">{post.title}</h3>
        </Link>
        <p className="post-card-excerpt">{post.excerpt}</p>
        <div className="post-card-footer">
          <div className="post-card-author">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="post-card-avatar"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }}
            />
            <div>
              <span className="post-card-author-name">{post.author.name}</span>
              <span className="post-card-author-date">{formatDate(post.date)}</span>
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
    </article>
  )
}

export default PostCard
