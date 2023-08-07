FROM node:alpine AS development

ENV NODE_ENV development

WORKDIR /app/financas

EXPOSE 3000

CMD ["npm", "start"]