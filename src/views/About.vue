<template>
  <div class="about">
    <div class="container">
      <h1>关于我</h1>
      <div class="content">
        <img 
          src="../assets/images/profile.jpg" 
          alt="个人照片" 
          class="profile-image"
        >
        <div class="bio">
          <h2>个人简介</h2>
          <p>我是一名专注于R语言和Shiny应用开发的数据科学家，致力于创建直观、交互式的数据可视化解决方案。</p>
          
          <h2>技能专长</h2>
          <ul>
            <li>R语言开发</li>
            <li>Shiny应用开发</li>
            <li>数据可视化</li>
            <li>统计分析</li>
            <li>机器学习</li>
          </ul>

          <h2>工作经历</h2>
          <div class="experience">
            <div class="experience-item">
              <h3>高级数据科学家</h3>
              <p>某科技公司 | 2020-至今</p>
              <p>负责开发数据分析平台和可视化工具</p>
            </div>
            <div class="experience-item">
              <h3>数据分析师</h3>
              <p>某咨询公司 | 2018-2020</p>
              <p>为客户提供数据分析解决方案</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.content {
  margin-top: 2rem;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 2rem;
  display: block;
}

.bio h2 {
  margin: 2rem 0 1rem;
}

ul {
  list-style-position: inside;
  margin-left: 1rem;
}

.experience {
  margin-top: 1rem;
}

.experience-item {
  margin-bottom: 1.5rem;
}

.experience-item h3 {
  margin-bottom: 0.5rem;
}
</style> 