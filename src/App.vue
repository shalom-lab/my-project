<template>
  <div class="app">
    <header class="header">
      <nav>
        <router-link to="/" class="logo">R语言与数据分析</router-link>
        <div class="nav-links">
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于我</router-link>
          <router-link to="/portfolio">作品展示</router-link>
          <router-link to="/contact">联系方式</router-link>
        </div>
      </nav>
    </header>

    <main>
      <router-view/>
    </main>

    <footer class="footer">
      <p>&copy; 2024 Shiny应用作品集. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
:root {
  /* 主要颜色 - 深蓝色系 */
  --primary-color: #2D5F8E;      /* 主色调：深蓝色 */
  --primary-dark: #1E3F66;       /* 深色变体 */
  --primary-light: #4682B4;      /* 浅色变体 */
  --accent-color: #64B5F6;       /* 点缀色：天蓝色 */
  
  /* 渐变 */
  --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  --gradient-dark: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  
  /* 中性色 */
  --text-color: #2C3E50;         /* 主要文本 */
  --text-light: #64748B;         /* 次要文本 */
  --background: #F8FAFC;         /* 背景色 */
  --surface: #FFFFFF;            /* 表面色 */
  --border: #E2E8F0;            /* 边框色 */
  
  /* 通用颜色 */
  --white: #FFFFFF;
  --black: #000000;
  
  /* 特效 */
  --shadow-sm: 0 2px 4px rgba(45, 95, 142, 0.1);
  --shadow-md: 0 4px 6px rgba(45, 95, 142, 0.12);
  --shadow-lg: 0 8px 16px rgba(45, 95, 142, 0.15);
  
  /* 圆角 */
  --border-radius: 8px;
  --border-radius-lg: 12px;
  --border-radius-full: 9999px;
  
  /* 过渡 */
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background);
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: var(--white);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  color: var(--primary-color);
  font-size: 1.75rem;
  letter-spacing: -0.5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-full);
  transition: var(--transition);
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary-color);
  background-color: rgba(45, 95, 142, 0.1);
}

main {
  flex: 1;
  background-color: white;
}

.footer {
  background-color: var(--primary-dark);
  color: var(--white);
  text-align: center;
  padding: 3rem 2rem;
  margin-top: 2rem;
  border-top: 1px solid var(--border);
}

h1, h2, h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 600;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background-color: var(--primary-color);
  color: var(--white);
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-sm);
}

.btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn.secondary {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn.secondary:hover {
  background-color: var(--primary-color);
  color: var(--white);
}

/* 添加到全局样式中 */
@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: var(--shadow-lg);
}

.section-subtitle {
  text-align: center;
  color: var(--text-light);
  font-size: 1.2rem;
  max-width: 600px;
  margin: -2rem auto 3rem;
}

/* 卡片样式 */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-light);
}

/* 动画效果 */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-animate {
  background-size: 200% 200%;
  animation: gradientShift 5s ease infinite;
}
</style> 