#  Sample Node.js App

Sample Node.js App integrating SAWO for authentication

```bash
git clone https://github.com/xrootms/nodejs-sample-app.git 
```

```bash
docker build -t node-app .
```

```bash
docker run -d --name cont3 -p 8000:8000 --env-file .env node-app       ## local test

```
