#####
## Dockerfile to build nodejs test server
# Built on nodejs

#Set the base image to node
FROM node:argon

# File Author / Maintainer
MAINTAINER ajbond2005@gmail.com

# Make app direcotry
RUN mkdir -p /usr/src/app

#Set working directory
WORKDIR /usr/src/app

# Install application
ADD . /usr/src/app

#Run npm install
RUN npm install

# Set app port
ENV PORT 80

#Expose default port
EXPOSE 8081

#Fire up the app
CMD ["npm", "start"]