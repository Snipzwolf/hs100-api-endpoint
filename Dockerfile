FROM node:7.7.3

WORKDIR /app
RUN npm init -y
RUN npm install hs100-api
ADD src/server.js ./

EXPOSE 9000
CMD /usr/local/bin/node server.js
