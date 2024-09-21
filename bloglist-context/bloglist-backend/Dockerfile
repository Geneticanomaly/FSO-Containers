FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm test

USER node

CMD npm start