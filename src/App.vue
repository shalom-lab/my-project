<template>
  <div class="app">
    <header class="header">
      <nav>
        <router-link to="/" class="logo">作品集</router-link>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #333;
  color: white;
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
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #4CAF50;
}

main {
  flex: 1;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
</style> 