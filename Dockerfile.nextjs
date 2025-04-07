# Utiliza uma imagem Node.js leve
FROM node:16-alpine

# Recebe a URL do repositório como argumento
ARG GIT_REPO

# Instala o git
RUN apk add --no-cache git

WORKDIR /app

# Clona o repositório diretamente na pasta de trabalho
RUN git clone $GIT_REPO . 

# Instala as dependências
RUN npm install

# Realiza o build do Next.js (ajuste se necessário, ex: npm run build)
RUN npm run build

# Expõe a porta 3000, onde a aplicação estará rodando
EXPOSE 3000

# Inicia a aplicação (ajuste o comando conforme o script de start definido no package.json)
CMD ["npm", "start"]
