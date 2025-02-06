<template>
  <div class="home">
    <section id="about" class="about-section">
      <h2>关于我</h2>
      <p>我是一名专注于R语言和Shiny应用开发的数据科学家，致力于创建直观、交互式的数据可视化解决方案。</p>
    </section>

    <section id="portfolio" class="portfolio-section">
      <PortfolioGrid />
    </section>

    <section id="contact" class="contact-section">
      <h2>联系方式</h2>
      <div class="contact-info">
        <p>邮箱：your.email@example.com</p>
        <p>GitHub：github.com/yourusername</p>
      </div>
    </section>
  </div>
</template>

<script>
import PortfolioGrid from '../components/PortfolioGrid.vue'

export default {
  name: 'Home',
  components: {
    PortfolioGrid
  }
}
</script>

<style scoped>
section {
  padding: 4rem 2rem;
}

.about-section, .contact-section {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-info {
  margin-top: 2rem;
}
</style> 