FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci --omit=dev

USER node

CMD npm start