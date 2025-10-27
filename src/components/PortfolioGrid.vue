<template>
  <div class="portfolio-container">
    <h1>我的Shiny应用作品集</h1>
    <div class="portfolio-grid">
      <router-link 
        v-for="project in projects" 
        :key="project.id" 
        :to="{ name: 'ProjectDetail', params: { id: project.id }}"
        class="project-card"
      >
        <div class="card-image">
          <img :src="project.image" :alt="project.title">
          <div class="image-overlay">
            <span class="view-details">查看详情</span>
          </div>
        </div>
        <div class="project-info">
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
          <h3>{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>
          <div class="project-links">
            <a :href="project.demoUrl" target="_blank" class="btn primary">
              <i class="fas fa-external-link-alt"></i>
              在线演示
            </a>
            <a :href="project.codeUrl" target="_blank" class="btn secondary">
              <i class="fab fa-github"></i>
              源代码
            </a>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { projects } from '../data/projects'

export default {
  name: 'PortfolioGrid',
  data() {
    return {
      projects
    }
  }
}
</script>

<style scoped>
.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--surface);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition);
  text-decoration: none;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.card-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.view-details {
  color: var(--white);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 2px solid var(--white);
  border-radius: var(--border-radius);
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.project-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: rgba(45, 95, 142, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-full);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.project-info h3 {
  color: var(--text-color);
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.description {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.project-links .btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.btn.primary {
  background: var(--primary-color);
  color: var(--white);
}

.btn.primary:hover {
  background: var(--primary-dark);
}

.btn.secondary {
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn.secondary:hover {
  background: var(--primary-color);
  color: var(--white);
}

.btn i {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style> 