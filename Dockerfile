FROM node:lts-alpine

RUN apk add --no-cache bash && npm install -g @nestjs/cli

WORKDIR /home/node/app

# Copiar apenas os arquivos de dependências primeiro para aproveitar o cache do Docker
COPY package*.json ./
RUN npm install

# Copiar o restante dos arquivos do código
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
