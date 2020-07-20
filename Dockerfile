FROM node:12
COPY . .
RUN npm install && npm run build && rm -r node_modules/ && rm -r src/
WORKDIR /server
RUN npm install
EXPOSE 3001
CMD ["node", "server.js"];
