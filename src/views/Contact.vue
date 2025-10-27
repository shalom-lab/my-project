<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="section-title">联系方式</h1>
      <p class="section-subtitle">如果您有任何问题或项目需求，请随时与我联系</p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info-card-content">
              <h3>地址</h3>
              <p>北京市海淀区</p>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-card-content">
              <h3>邮箱</h3>
              <p>your.email@example.com</p>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="info-card-content">
              <h3>电话</h3>
              <p>+86 xxx xxxx xxxx</p>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">
              <i class="fab fa-weixin"></i>
            </div>
            <div class="info-card-content">
              <h3>微信</h3>
              <p>your_wechat_id</p>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
          <h2>发送消息</h2>
          <div class="form-content">
            <div class="form-group">
              <label for="name">姓名</label>
              <div class="input-wrapper">
                <i class="fas fa-user"></i>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="请输入您的姓名"
                  required
                >
              </div>
            </div>
            <div class="form-group">
              <label for="email">邮箱</label>
              <div class="input-wrapper">
                <i class="fas fa-envelope"></i>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="请输入您的邮箱"
                  required
                >
              </div>
            </div>
            <div class="form-group">
              <label for="message">消息</label>
              <div class="input-wrapper">
                <i class="fas fa-comment-alt"></i>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  placeholder="请输入您的消息"
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit" class="btn submit-btn">
              <span>发送消息</span>
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>

      <div class="social-links">
        <a href="https://github.com/yourusername" target="_blank" class="social-link">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" class="social-link">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 这里添加表单提交逻辑
      console.log('Form submitted:', this.form)
      alert('消息已发送！')
      this.form = { name: '', email: '', message: '' }
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 4rem 0;
  background-color: var(--background);
  min-height: calc(100vh - 60px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto 3rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  align-items: stretch;
}

.contact-info {
  background: var(--surface);
  padding: 2.5rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
  flex: 1;
  min-height: 100px;
}

.info-card:first-child {
  padding-top: 0;
}

.info-card:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.info-icon {
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: var(--primary-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.info-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.info-card p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.contact-form {
  background: var(--surface);
  padding: 2.5rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contact-form h2 {
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
}

.form-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper i {
  position: absolute;
  left: 1rem;
  color: var(--primary-color);
}

input,
textarea {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  background: var(--white);
  color: var(--text-color);
  transition: var(--transition);
}

textarea {
  height: 120px;
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(45, 95, 142, 0.2);
}

.submit-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--primary-color);
  color: var(--white);
  padding: 1rem;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.submit-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  width: 45px;
  height: 45px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1.25rem;
  transition: var(--transition);
}

.social-link:hover {
  background: var(--primary-color);
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    max-width: 500px;
    margin: 0 auto;
    height: auto;
  }

  .info-card {
    min-height: auto;
    padding: 1.25rem 0;
  }
}

@media (max-width: 480px) {
  .contact-form {
    padding: 1.5rem;
  }
}
</style> 