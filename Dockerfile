# get node from alpine
From node:alpine
#specify the working directory
WORKDIR /app
# copy files
COPY package.json .
RUN npm install
COPY . .
#tell th econtainer what to do next
CMD [ "npm" , "start" ] 
