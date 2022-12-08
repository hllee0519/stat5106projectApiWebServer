FROM mhart/alpine-node:latest

# Create app directory
WORKDIR /usr/src/pj

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# Bundle app source
COPY ./app/* /usr/src/pj/app/
COPY ./app/route/* /usr/src/pj/app/route/
COPY *.js /usr/src/pj/
COPY *.json /usr/src/pj/

RUN npm update
RUN npm install
RUN npm install --save express
# If you are building your code for production
# RUN npm ci --only=production


CMD [ "ls -l" ]
CMD [ "node", "server.js" ]
