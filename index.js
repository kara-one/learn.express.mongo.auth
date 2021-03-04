const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter.js');

const PORT = process.env.PORT || 5000;

const DB_NAME = 'learn_express_mongo_auth';
const DB_USER = 'user';
const DB_PWD = 'user';
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.gqzwc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Start server on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
