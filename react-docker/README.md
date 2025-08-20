run app with docker 
build first
- docker build -t react-docker .
then run the upp
- docker run -p 5173:5173 react-docker

to keep updating docker when you are coding 
- add this into vite.config
  -  server: {
    host: true, // Allows access from external devices
    watch: {
      usePolling: true, // Enables polling for file changes
      interval: 500, // Sets the polling interval to 500ms
    },
  },
- docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules react-docker

publish container
- docker tag react-docker alidurul/react-docker
- docker push alidurul/react-docker