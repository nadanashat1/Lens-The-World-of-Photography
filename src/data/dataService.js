import postsData from '../../posts.json'

export const { posts, categories, siteInfo } = postsData

export const getFeaturedPosts = () => posts.filter(p => p.featured)

export const getLatestPosts = (count = 3) =>
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, count)

export const getPostBySlug = (slug) => posts.find(p => p.slug === slug) || null

export const searchPosts = (query, category = '') => {
  let result = posts
  if (category) {
    result = result.filter(p => p.category === category)
  }
  if (query.trim()) {
    const q = query.trim().toLowerCase()
    result = result.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
    )
  }
  return result
}

export const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })
}
