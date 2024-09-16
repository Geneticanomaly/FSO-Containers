FROM node:20

WORKDIR /app

COPY . .

RUN npm ci --omit=dev

USER node

CMD npm start