const path = require('path');
const express = require('express');


const app = express();
// const env = config.mongoDB.dev_localhost



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

app.use(log);

app.use("/api/netflix/financialStatement", cardRoutes);


module.exports = app;