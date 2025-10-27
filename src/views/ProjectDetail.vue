<template>
  <div class="project-detail">
    <div class="container">
      <div class="project-header">
        <div class="breadcrumb">
          <router-link to="/portfolio">
            <i class="fas fa-arrow-left"></i> 返回作品集
          </router-link>
        </div>
        <h1>{{ project.title }}</h1>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>

      <div class="project-content">
        <div class="project-image">
          <img :src="project.image" :alt="project.title">
        </div>

        <div class="project-info">
          <section class="info-section">
            <h2>项目概述</h2>
            <p>{{ project.description }}</p>
          </section>

          <section class="info-section">
            <h2>主要功能</h2>
            <ul class="feature-list">
              <li>数据导入与预处理</li>
              <li>交互式数据可视化</li>
              <li>模型训练与评估</li>
              <li>结果导出与报告生成</li>
            </ul>
          </section>

          <section class="info-section">
            <h2>技术栈</h2>
            <div class="tech-stack">
              <div class="tech-item">
                <i class="fab fa-r-project"></i>
                <span>R语言</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-desktop"></i>
                <span>Shiny</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-database"></i>
                <span>数据库</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-chart-bar"></i>
                <span>可视化</span>
              </div>
            </div>
          </section>

          <div class="project-actions">
            <a :href="project.demoUrl" target="_blank" class="btn primary">
              <i class="fas fa-external-link-alt"></i>
              在线演示
            </a>
            <a :href="project.codeUrl" target="_blank" class="btn secondary">
              <i class="fab fa-github"></i>
              查看源码
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '../data/projects'

export default {
  name: 'ProjectDetail',
  data() {
    return {
      project: null
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    this.project = projects.find(p => p.id === id)
    if (!this.project) {
      this.$router.push('/portfolio')
    }
  }
}
</script>

<style scoped>
.project-detail {
  padding: 4rem 0;
  background-color: var(--background);
  min-height: calc(100vh - 60px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.project-header {
  text-align: center;
  margin-bottom: 3rem;
}

.breadcrumb {
  margin-bottom: 2rem;
}

.breadcrumb a {
  color: var(--primary-color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: var(--transition);
}

.breadcrumb a:hover {
  color: var(--primary-dark);
}

.project-header h1 {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.tags {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tag {
  background: rgba(45, 95, 142, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-full);
  font-size: 0.85rem;
  font-weight: 500;
}

.project-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.project-image {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.project-image img {
  width: 100%;
  height: auto;
  display: block;
}

.info-section {
  margin-bottom: 2.5rem;
}

.info-section h2 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border);
}

.info-section p {
  color: var(--text-color);
  line-height: 1.8;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  color: var(--text-color);
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
}

.feature-list li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
}

.tech-item i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.tech-item span {
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 500;
}

.project-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.project-actions .btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
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

@media (max-width: 968px) {
  .project-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-header h1 {
    font-size: 2rem;
  }

  .tech-stack {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 