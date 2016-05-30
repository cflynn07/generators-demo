FROM node:6.2.0-slim
RUN mkdir -p /var/www/generators-demo
WORKDIR /var/www/generators-demo
COPY . /var/www/generators-demo
RUN npm install
ENV NODE_PATH=./
EXPOSE 8080
CMD ["node","index.js"]
