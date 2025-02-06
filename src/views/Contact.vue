<template>
  <div class="contact">
    <div class="container">
      <h1>联系方式</h1>
      <div class="contact-content">
        <div class="contact-info">
          <h2>联系信息</h2>
          <p><strong>邮箱：</strong> your.email@example.com</p>
          <p><strong>GitHub：</strong> github.com/yourusername</p>
          <p><strong>LinkedIn：</strong> linkedin.com/in/yourusername</p>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
          <h2>发送消息</h2>
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="message">消息</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="btn">发送</button>
        </form>
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
.contact {
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-content {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-info {
  padding: 1rem;
}

.contact-info h2 {
  margin-bottom: 1rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

.contact-form {
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  height: 150px;
  resize: vertical;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style> 