FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

# Use non-root user
USER node

EXPOSE 8000

CMD ["node", "index.js"]
