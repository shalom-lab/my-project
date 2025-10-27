# 使用 Node 官方镜像
FROM node:20-alpine

# 创建工作目录
WORKDIR /app

# 拷贝文件（只需要运行服务的文件）
COPY package*.json ./
COPY server.js ./
COPY dist ./dist

# 安装生产依赖（无需dev依赖）
RUN npm ci --omit=dev

# 暴露端口
EXPOSE 80

# 启动命令
CMD ["node", "server.js"]
