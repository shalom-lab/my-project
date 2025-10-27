<template>
  <div class="about">
    <section class="hero">
      <div class="container">
        <div class="profile-header">
          <div class="profile-image-wrapper">
            <img src="https://avatars.githubusercontent.com/u/12345678" alt="个人照片" class="profile-image">
          </div>
          <div class="profile-info">
            <h1>张三</h1>
            <p class="title">数据科学家 / R语言开发者</p>
            <div class="social-links">
              <a href="https://github.com/yourusername" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto:your.email@example.com">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bio-section">
      <div class="container">
        <h2 class="section-title">关于我</h2>
        <div class="bio-content">
          <p class="bio-text">
            我是一名拥有5年经验的数据科学家，专注于使用R语言和Shiny开发数据可视化解决方案。
            在过去的工作中，我为多个行业的客户开发了超过20个数据分析应用，
            帮助他们更好地理解和利用数据价值。
          </p>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">年工作经验</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">项目经验</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">10+</span>
              <span class="stat-label">企业客户</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">技能专长</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <i class="fas fa-chart-line"></i>
            <h3>数据可视化</h3>
            <ul>
              <li>Shiny应用开发</li>
              <li>ggplot2数据绘图</li>
              <li>交互式仪表板</li>
              <li>实时数据展示</li>
            </ul>
          </div>
          <div class="skill-card">
            <i class="fas fa-code"></i>
            <h3>编程开发</h3>
            <ul>
              <li>R语言开发</li>
              <li>统计建模</li>
              <li>包开发维护</li>
              <li>性能优化</li>
            </ul>
          </div>
          <div class="skill-card">
            <i class="fas fa-brain"></i>
            <h3>机器学习</h3>
            <ul>
              <li>预测模型</li>
              <li>分类算法</li>
              <li>时间序列分析</li>
              <li>自然语言处理</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="experience-section">
      <div class="container">
        <h2 class="section-title">工作经历</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>高级数据科学家</h3>
              <p class="company">某科技公司</p>
              <p class="period">2020 - 至今</p>
              <ul>
                <li>负责团队的数据分析平台开发</li>
                <li>开发和维护多个大型Shiny应用</li>
                <li>为客户提供数据可视化解决方案</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>数据分析师</h3>
              <p class="company">某咨询公司</p>
              <p class="period">2018 - 2020</p>
              <ul>
                <li>开发数据分析工具和报告系统</li>
                <li>为客户提供数据分析支持</li>
                <li>参与多个行业的分析项目</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  background-color: var(--background);
}

.hero {
  background-color: var(--surface);
  padding: 4rem 0;
  border-bottom: 1px solid var(--border);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.profile-image-wrapper {
  position: relative;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--white);
  box-shadow: var(--shadow-lg);
}

.profile-info {
  flex: 1;
}

.profile-info h1 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.social-links a:hover {
  transform: translateY(-2px);
  background: var(--primary-dark);
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.bio-section {
  padding: 4rem 0;
}

.bio-content {
  max-width: 800px;
  margin: 0 auto;
}

.bio-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 3rem;
  text-align: center;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  color: var(--text-light);
}

.skills-section {
  padding: 4rem 0;
  background-color: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-card {
  background: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.skill-card i {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.skill-card h3 {
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.skill-card ul {
  list-style: none;
  padding: 0;
}

.skill-card li {
  color: var(--text-color);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.skill-card li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.experience-section {
  padding: 4rem 0;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  padding-left: 2rem;
  position: relative;
  margin-bottom: 3rem;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-color);
  position: absolute;
  left: -7px;
  top: 0;
  border: 3px solid var(--white);
}

.timeline-content {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
}

.timeline-content h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.company {
  color: var(--text-color);
  font-weight: 500;
}

.period {
  color: var(--text-light);
  margin-bottom: 1rem;
}

.timeline-content ul {
  list-style: none;
  padding: 0;
}

.timeline-content li {
  color: var(--text-color);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.timeline-content li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .social-links {
    justify-content: center;
  }

  .stats {
    flex-direction: column;
    gap: 2rem;
  }

  .timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }

  .timeline-item {
    padding-left: 0;
    padding-top: 2rem;
  }

  .timeline-dot {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style> 