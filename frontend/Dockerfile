# NodeJS + Vite + Vue.js
# FROM node:20 AS build-stage
FROM node:18 AS build-stage
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install axios
# RUN npm install vue-router



COPY . .
RUN npm run build

# Nginx
#FROM nginx:stable-alphine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]