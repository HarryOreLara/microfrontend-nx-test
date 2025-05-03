# Etapa 1: Instalación de dependencias
FROM node:20-alpine AS deps
WORKDIR /app

# Copiar archivos esenciales para cachear dependencias
COPY package.json package-lock.json nx.json ./

# Instalar dependencias globales y del proyecto
RUN npm install -g nx@latest
RUN npm install --legacy-peer-deps

# Etapa 2: Construcción de la aplicación
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar node_modules cacheados
COPY --from=deps /app/node_modules ./node_modules

# Copiar todo el workspace
COPY . .

# Construir todas las aplicaciones necesarias
RUN npx nx run-many --target=build --projects=shell,login,register,home,motos,concesionarias --prod --verbose

# Verificar estructura generada (para debugging)
RUN ls -la /app/dist/apps && \
    ls -la /app/dist/apps/auth

# Etapa 3: Servidor de producción
FROM nginx:stable-alpine AS prod

# Configuración de nginx
COPY apps/shell/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copiar aplicaciones construidas
COPY --from=builder /app/dist/apps/shell /usr/share/nginx/html
COPY --from=builder /app/dist/apps/auth/login /usr/share/nginx/html/login
COPY --from=builder /app/dist/apps/auth/register /usr/share/nginx/html/register
COPY --from=builder /app/dist/apps/home /usr/share/nginx/html/home
COPY --from=builder /app/dist/apps/motos /usr/share/nginx/html/motos
COPY --from=builder /app/dist/apps/concesionarias /usr/share/nginx/html/concesionarias

# Puertos y permisos
EXPOSE 80
RUN chown -R nginx:nginx /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]