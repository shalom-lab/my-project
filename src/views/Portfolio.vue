<template>
  <div class="portfolio">
    <div class="container">
      <h1>作品展示</h1>
      <PortfolioGrid />
    </div>
  </div>
</template>

<script>
import PortfolioGrid from '../components/PortfolioGrid.vue'

export default {
  name: 'Portfolio',
  components: {
    PortfolioGrid
  }
}
</script>

<style scoped>
.portfolio {
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style> 