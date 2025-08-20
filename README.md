# Dockerize node

1) create a Dockerfile for node

    ```dockerfile
    FROM node:20-alpine

    # 1) Create non-root user
    # addgroup --system appgroup: Creates a system group named appgroup.
    # adduser --system --ingroup appgroup appuser: Creates a system user named appuser and adds it to appgroup.
    # USER appuser: Tells Docker to run all subsequent commands (including your app) as appuser instead of root.
    RUN addgroup -S appgroup && adduser -S -G appgroup appuser

    # 2) Set working directory
    WORKDIR /app

    # Fix: Set ownership of /app to app user
    RUN chown app:app /app

    # 3) Copy only manifest files first (better layer caching)
    COPY --chown=app:app package*.json ./

    # 4) Install deps (prod only for production images)
    USER app
    RUN npm ci --omit=dev

    # 5) Copy the rest of the app
    COPY --chown=app:app . .

    # 6) Runtime config
    ENV NODE_ENV=production
    EXPOSE 8000
    CMD ["npm", "start"]
    ```

2) Create a .dockerignore

    ```
    node_modules
    npm-debug.log
    .git
    .gitignore
    Dockerfile
    .dockerignore
    .env
    dist
    coverage
    .vscode
    ```

3) Build the image

    ```sh
    docker build -t blogapi:latest .
    ```

4) Run Container with .env
    ```sh
    docker run -d --restart unless-stopped --name blogapi --env-file .env -p 8000:8000 blogapi:latest
    ```

5) Inspect and interact

- Logs (follow): `docker logs -f web-app`
- Stop / remove: `docker stop web-app docker rm web-app`

6) Optional: Dev mode (hot reload)

7) Publihs image
- `docker login`
- `docker tag blogapi:latest <your-username>/blogapi:latest`
- `docker push <your-username>/blogapi:latest`

