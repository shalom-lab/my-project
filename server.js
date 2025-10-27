// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));

// 处理前端路由
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
