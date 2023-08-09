FROM node:alpine AS development

ENV NODE_ENV development

ENV REACT_APP_URL_API http://44.195.129.139:5000

WORKDIR /app

COPY /app/financas/package.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "start", "--host=0.0.0.0"]
