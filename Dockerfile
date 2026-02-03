# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runtime stage
FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html

# Use our nginx config (listens on 8080 inside container)
COPY nginx/frontend-cloud.conf /etc/nginx/conf.d/default.conf

# Copy built static assets
COPY --from=build /app/dist ./

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

