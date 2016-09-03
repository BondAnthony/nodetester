### Test Nodejs Server
- - -
 Simple nodejs service to respond with json. The data coming back from each route is being read out of a predefined property file. Main purpose of this project is to have a simple service respond with expected json for testing.

# Run Tasks #
---
Fire up the application by running a number of node/npm commands.

1. Clone project to a directory and open terminal within that directory.

2. Run ```npm install -G``` to download all required modules.

3. Start server.js ```node server.js``` or ```npm start```

4. Open your browser to the address logged.

# Build Docker Container #
---
1. Build a container by running the docker build command, substitute **REPONAME** and **CONTAINERNAME** with a string that is unique to you and your build. My command look like this ```docker build -t spacer:test-nodejs-1.0```
2. Run container ```docker run --name="CONTAINER_SHORT_NAME" -p 80:3000 -d REPONAME:CONTAINERNAME```. Change the shortname to something user friendly so you don't have to remember the container id.

# Tooling: #
---
* [Nodejs and npm](https://nodejs.org/en/) version ~4.4.3 LTS. Newer LTS version is acceptable.
* Favorite js IDE [VisualCode](https://code.visualstudio.com), [Atom](https://atom.io) or [WebStorm](https://www.jetbrains.com/webstorm/?fromMenu)
* [git](https://git-scm.com) of course is required.
* [Docker](https://www.docker.com) if you want to run builds of the Docker container. You can also spin up a VPS with docker already installed at [DigitalOcean](https://m.do.co/c/d5e5957d1fd0)
