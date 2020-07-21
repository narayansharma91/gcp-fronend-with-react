FROM node:12
COPY . .
ARG _PROXY_URL=""
ENV _PROXY_URL=$_PROXY_URL
RUN npm install && npm run build && rm -r node_modules/ && rm -r src/
WORKDIR /server
RUN npm install
EXPOSE 80
RUN echo $_PROXY_URL
CMD node server.js $_PROXY_URL
