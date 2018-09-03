FROM node:10.4
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ARG HOST_IP=localhost
EXPOSE 3000
RUN sed -i -e 's#HOST_IP#'"$HOST_IP"'#g' services-controller.js
CMD [ "npm", "start" ]
