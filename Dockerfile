FROM node:alpine AS development

ENV NODE_ENV development

WORKDIR /app

COPY /app/financas/package.json .

EXPOSE 3000

CMD ["npm", "start", "--host=0.0.0.0"]
