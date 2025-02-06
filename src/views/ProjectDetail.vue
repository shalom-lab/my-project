<template>
  <div class="project-detail">
    <div class="container">
      <h1>{{ project?.title || '项目详情' }}</h1>
      
      <div class="project-content" v-if="project">
        <img :src="project.image" :alt="project.title" class="project-image">
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
        <p class="description">{{ project.description }}</p>
        
        <div class="links">
          <a :href="project.demoUrl" target="_blank" class="btn">在线演示</a>
          <a :href="project.codeUrl" target="_blank" class="btn">查看代码</a>
        </div>
      </div>
      
      <div v-else class="not-found">
        项目未找到
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
    const projectId = parseInt(this.$route.params.id)
    this.project = projects.find(p => p.id === projectId)
  }
}
</script>

<style scoped>
.project-detail {
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.project-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin: 2rem 0;
}

.description {
  line-height: 1.8;
  color: #666;
  margin: 1.5rem 0;
}

.links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
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

.not-found {
  text-align: center;
  color: #666;
  margin-top: 2rem;
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