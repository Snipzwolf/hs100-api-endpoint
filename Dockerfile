FROM node:7.7.3

WORKDIR /app
RUN npm init -y && npm install hs100-api
ADD src/server.js ./
ADD src/flame_* ./

ENV PLUG_IP="192.168.86.16"

VOLUME ["/var/log"]

EXPOSE 9000
CMD /usr/local/bin/node server.js
