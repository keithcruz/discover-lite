FROM node:14.16.1-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .
RUN npm i

EXPOSE 5000

# You can change this
CMD [ "npm", "run", "dev" ]
