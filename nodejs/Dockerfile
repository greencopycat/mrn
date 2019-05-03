FROM node:latest
RUN mkdir /opt/app
WORKDIR /opt/app
ADD . /opt/app/
RUN apt-get update
RUN apt-get install -y mongodb
RUN npm init -y
RUN npm install express
RUN npm install mongodb
RUN npm install cors
EXPOSE 3002
ENTRYPOINT mongod --fork --logpath ws/log --dbpath ws & mongoimport --db mongo --collection Filmstrip --jsonArray filmstrip.json & mongoimport --db mongo --collection Users --jsonArray users.json & node index.js
