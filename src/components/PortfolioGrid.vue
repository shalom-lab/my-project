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
        <img :src="project.image" :alt="project.title">
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
          <div class="project-links">
            <a :href="project.demoUrl" target="_blank" class="btn">在线演示</a>
            <a :href="project.codeUrl" target="_blank" class="btn">查看代码</a>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 1.5rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #45a049;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tag {
  background-color: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}
</style> 