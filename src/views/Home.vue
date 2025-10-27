<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-wrapper">
          <div class="hero-content">
            <h1>专业的Shiny应用开发解决方案</h1>
            <p class="hero-text">
              从数据分析到交互式可视化，我们为您提供端到端的 R Shiny 应用开发服务
            </p>
            <div class="hero-buttons">
              <router-link to="/portfolio" class="btn primary">查看作品</router-link>
              <router-link to="/contact" class="btn secondary">联系我</router-link>
            </div>
          </div>
          <div class="hero-slider">
            <div class="slider-container" ref="slider">
              <div v-for="(image, index) in images" :key="index" class="slide" :class="{ active: currentSlide === index }">
                <img :src="image" :alt="`Slide ${index + 1}`">
              </div>
            </div>
            <div class="slider-dots">
              <span v-for="(_, index) in images" 
                    :key="index" 
                    class="dot"
                    :class="{ active: currentSlide === index }"
                    @click="setSlide(index)">
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <h2 class="section-title">核心优势</h2>
        <p class="section-subtitle">专业技术，优质服务，助力您的项目成功</p>
        <div class="features">
          <div class="feature">
            <div class="feature-icon blue">
              <i class="fas fa-code-branch"></i>
            </div>
            <div class="feature-content">
              <h3>专业开发</h3>
              <p>5年+Shiny开发经验，深入理解R语言生态系统，提供高质量的代码实现</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon purple">
              <i class="fas fa-chart-area"></i>
            </div>
            <div class="feature-content">
              <h3>数据可视化</h3>
              <p>精通ggplot2、plotly等可视化库，打造美观实用的交互式图表</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon orange">
              <i class="fas fa-rocket"></i>
            </div>
            <div class="feature-content">
              <h3>性能优化</h3>
              <p>注重应用性能，实现数据缓存、并行计算等优化策略</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="solutions-section">
      <div class="container">
        <h2 class="section-title">解决方案</h2>
        <p class="section-subtitle">为不同领域提供专业的Shiny应用开发服务</p>
        <div class="solutions-grid">
          <div class="solution-card">
            <div class="solution-icon">
              <i class="fas fa-heartbeat"></i>
            </div>
            <h3>医疗健康</h3>
            <ul>
              <li>临床预测模型</li>
              <li>生存分析工具</li>
              <li>医学数据可视化</li>
            </ul>
          </div>
          <div class="solution-card">
            <div class="solution-icon">
              <i class="fas fa-dna"></i>
            </div>
            <h3>生物信息</h3>
            <ul>
              <li>基因组数据分析</li>
              <li>序列比对工具</li>
              <li>通路富集分析</li>
            </ul>
          </div>
          <div class="solution-card">
            <div class="solution-icon">
              <i class="fas fa-map-marked-alt"></i>
            </div>
            <h3>地理信息</h3>
            <ul>
              <li>空间数据分析</li>
              <li>地图可视化</li>
              <li>时空数据展示</li>
            </ul>
          </div>
          <div class="solution-card">
            <div class="solution-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>企业应用</h3>
            <ul>
              <li>数据分析平台</li>
              <li>业务监控大屏</li>
              <li>报表自动化</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="portfolio-section">
      <div class="container">
        <h2 class="section-title">精选作品</h2>
        <p class="section-subtitle">展示部分已完成的Shiny应用项目</p>
        <PortfolioGrid />
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备开始您的项目了吗？</h2>
          <p>让我们一起讨论您的需求，为您提供最适合的解决方案</p>
          <router-link to="/contact" class="btn primary">立即联系</router-link>
        </div>
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
  },
  data() {
    return {
      currentSlide: 0,
      images: [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb'
      ]
    }
  },
  mounted() {
    this.startSlideshow()
  },
  beforeUnmount() {
    this.stopSlideshow()
  },
  methods: {
    startSlideshow() {
      this.slideshowInterval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    stopSlideshow() {
      clearInterval(this.slideshowInterval)
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length
    },
    setSlide(index) {
      this.currentSlide = index
    }
  }
}
</script>

<style scoped>
.hero {
  background-color: var(--primary-color);
  background-image: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--primary-dark) 100%
  );
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
}

.hero-wrapper {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero-content {
  text-align: left;
  max-width: 100%;
  padding-right: 0;
}

.hero h1 {
  color: var(--white);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.hero-text {
  color: var(--white);
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
}

.hero-buttons .btn.secondary {
  border-color: var(--white);
  color: var(--white);
}

.hero-buttons .btn.secondary:hover {
  background-color: var(--white);
  color: var(--primary-color);
}

.hero-slider {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  height: auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.slider-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: var(--transition);
}

.dot.active {
  background: var(--white);
}

.features-section {
  background: var(--surface);
  position: relative;
  overflow: hidden;
}

.features-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-subtitle {
  text-align: center;
  color: var(--text-light);
  margin-bottom: 4rem;
  font-size: 1.1rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.feature {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
}

.feature-icon.blue {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
}

.feature-icon.purple {
  background: linear-gradient(135deg, #a855f7, #6366f1);
}

.feature-icon.orange {
  background: linear-gradient(135deg, #f97316, #db2777);
}

.feature-icon::after {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: skewX(-15deg);
  transition: 0.5s;
  opacity: 0;
}

.feature:hover .feature-icon::after {
  opacity: 1;
  transform: skewX(-15deg) translateX(50%);
}

.feature-icon i {
  font-size: 1.8rem;
  color: var(--white);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.feature-content {
  text-align: left;
}

.feature-content h3 {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.feature-content p {
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

.lead {
  font-size: 1.25rem;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
}

section {
  padding: 6rem 0;
}

.about-section {
  background-color: var(--primary-dark);
}

.portfolio-section {
  background-color: var(--background);
}

.contact-section {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-info {
  margin-top: 2rem;
}

.solutions-section {
  padding: 6rem 0;
  background-color: var(--surface);
  border-top: 1px solid var(--border);
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.solution-card {
  background: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.solution-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.solution-icon i {
  font-size: 1.5rem;
  color: var(--white);
}

.solution-card h3 {
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.solution-card ul {
  list-style: none;
  padding: 0;
}

.solution-card li {
  color: var(--text-color);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.solution-card li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.cta-section {
  padding: 6rem 0;
  background: var(--gradient-primary);
  color: var(--white);
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  color: var(--white);
  margin-bottom: 1rem;
  font-size: 2rem;
}

.cta-content p {
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-content .btn {
  background: var(--white);
  color: var(--primary-color);
}

.cta-content .btn:hover {
  background: var(--primary-light);
  color: var(--white);
}

@media (max-width: 1024px) {
  .hero-wrapper {
    max-width: 960px;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 5rem 0;
  }

  .hero-wrapper {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    max-width: 540px;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-buttons {
    justify-content: center;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .feature {
    padding: 2rem;
  }
  
  .feature-icon {
    width: 56px;
    height: 56px;
  }
  
  .feature-icon i {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.4rem;
  }
  
  .hero-wrapper {
    padding: 0 1rem;
  }
}
</style> 