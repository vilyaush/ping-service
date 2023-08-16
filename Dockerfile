FROM node:14 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM node:14 AS runner

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /app/dist ./dist

CMD [ "node", "dist/main" ]