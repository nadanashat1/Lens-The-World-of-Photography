import { Link } from 'react-router-dom'
import { siteInfo, posts } from '../data/dataService'
import './AboutPage.css'

function AboutPage() {
  // Stat items matching Screenshot 1
  const stats = [
    {
      id: 1,
      number: '+2 مليون',
      label: 'قارئ شهرياً',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 2,
      number: '+500',
      label: 'مقالة منشورة',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="7" y1="8" x2="17" y2="8" />
          <line x1="7" y1="12" x2="17" y2="12" />
          <line x1="7" y1="16" x2="13" y2="16" />
        </svg>
      )
    },
    {
      id: 3,
      number: '+50',
      label: 'كاتب خبير',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      )
    },
    {
      id: 4,
      number: '+15',
      label: 'تصنيف',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      )
    }
  ]

  // Values matching Screenshot 2
  const values = [
    {
      id: 1,
      title: 'الجودة أولاً',
      desc: 'محتوى مدروس ومكتوب بخبرة',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'تركيز عملي',
      desc: 'أمثلة واقعية يمكنك تطبيقها اليوم',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#f97316" stroke="#f97316" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'المجتمع',
      desc: 'تعلم مع آلاف المصورين',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#f97316">
          <path d="M19.78 8.44a1.5 1.5 0 0 0-2.12 0l-1.32 1.32a.5.5 0 0 1-.71 0l-1.06-1.06a.5.5 0 0 1 0-.71l1.32-1.32a1.5 1.5 0 0 0-2.12-2.12l-1.32 1.32a.5.5 0 0 1-.71 0l-1.06-1.06a.5.5 0 0 1 0-.71l1.32-1.32a1.5 1.5 0 0 0-2.12-2.12L7.4 4.38a1.5 1.5 0 0 0 0 2.12l1.06 1.06a.5.5 0 0 1 0 .71L7.14 9.59a.5.5 0 0 1-.71 0L5.37 8.53a1.5 1.5 0 0 0-2.12 0l-1.06 1.06a1.5 1.5 0 0 0 0 2.12l5.3 5.3a4.5 4.5 0 0 0 6.36 0l5.93-5.93a1.5 1.5 0 0 0 0-2.12l-1.82-1.02z" />
          <rect x="1" y="7" width="3" height="7" rx="1" />
          <rect x="20" y="7" width="3" height="7" rx="1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'دائماً محدث',
      desc: 'أحدث الاتجاهات وأفضل الممارسات',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2v6h-6" />
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M3 22v-6h6" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        </svg>
      )
    }
  ]

  // Team members matching the design, utilizing author data from posts.json
  const authorNames = [
    'سالم أحمد',
    'محمد علي',
    'إبراهيم حسن',
    'داود خالد',
    'ليث محمود',
    'جمال عبدالله',
    'خالد الفيصل',
    'نادر سعيد',
    'هاني الشمري',
    'عمر الراشد',
    'فارس العلي',
    'سامي الحربي',
    'رامي الخطيب',
    'باسم المصري',
    'منصور الزهراني',
    'فيصل الدوسري',
    'لؤي الصالح',
    'طارق النعيمي',
    'أحمد الشهري',
    'ماجد القحطاني',
    'ياسر العتيبي',
    'دحام الحسيني',
    'نايف المطيري',
    'عبدالله الغامدي',
    'كريم الفهد',
    'سلطان الراجحي',
    'فهد السبيعي',
    'راشد الجاسر'
  ]

  const teamMembers = authorNames.map((name) => {
    const postWithAuthor = posts.find(p => p.author?.name === name)
    return {
      name,
      role: postWithAuthor?.author?.role || 'مصور محترف',
      avatar: postWithAuthor?.author?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  })

  return (
    <div className="about-page">
      {/* ===== HERO & STATS SECTION ===== */}
      <section className="about-hero grid-bg">
        <div className="container">
          <div className="about-hero-content">
            {/* Badge */}
            <div className="badge about-badge">
              <span>من نحن</span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            {/* Title */}
            <h1 className="about-hero-title">
              مهمتنا هي <span className="highlight-orange">الإعلام والإلهام</span>
            </h1>

            {/* Description incorporating siteInfo.description */}
            <p className="about-hero-desc">
              {siteInfo.description} نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>

            {/* Stats Cards */}
            <div className="about-stats-grid">
              {stats.map(stat => (
                <div key={stat.id} className="about-stat-card">
                  <div className="about-stat-icon">{stat.icon}</div>
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="about-values">
        <div className="container">
          <div className="about-values-header">
            <h2 className="about-values-title">
              <span className="title-pipe">|</span>
              <span>قيمنا</span>
              <span className="title-pipe">|</span>
            </h2>
            <p className="about-values-desc">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="about-values-grid">
            {values.map(val => (
              <div key={val.id} className="about-value-card">
                <div className="about-value-icon">{val.icon}</div>
                <h3 className="about-value-title">{val.title}</h3>
                <p className="about-value-text">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="about-team">
        <div className="container">
          <div className="about-team-header">
            <div className="badge about-team-badge">
              <span>فريقنا</span>
              <span className="dot"></span>
            </div>
            <h2 className="about-team-title">تعرف على كتابنا</h2>
            <p className="about-team-desc">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
            </p>
          </div>

          <div className="about-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="about-team-card">
                <div className="about-avatar-wrapper">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="about-avatar-img"
                    loading="lazy"
                  />
                  <span className="about-verified-badge" title="موثق">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </div>
                <h3 className="about-member-name">{member.name}</h3>
                <span className="about-member-role">{member.role}</span>
                <div className="about-social-row">
                  <a
                    href={siteInfo.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="about-social-link"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={siteInfo.social.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="about-social-link"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={siteInfo.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter / X"
                    className="about-social-link"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER SECTION ===== */}
      <section className="about-cta-section">
        <div className="container about-cta-container">
          <h2 className="about-cta-title">لديك أسئلة؟ دعنا نتحدث!</h2>
          <p className="about-cta-desc">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="about-cta-actions">
            <a href={`mailto:${siteInfo.email}`} className="cta-btn-dark">
              <span>تواصل معنا</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <Link to="/blog" className="cta-btn-outline">
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
