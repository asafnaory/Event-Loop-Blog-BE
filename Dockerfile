# Base image
FROM node:18

WORKDIR /usr/src/app   

COPY . .    

RUN npm install

RUN npx prisma generate  

RUN npx prisma migrate deploy 

RUN npm run build  

CMD [ "node", "dist/main.js" ]