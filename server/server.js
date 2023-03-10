const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
const MONGO_URI = "mongodb+srv://lyricaluser:sXri9i7ICYbfvhhs@cluster0.qxwn2ks.mongodb.net/claster0?retryWrites=true&w=majority";
// added database name "cluster0" after "mongodb.net/"
// const MONGO_URI = "mongodb://lyricaluser:sXri9i7ICYbfvhhs@ac-qr6585c-shard-00-00.qxwn2ks.mongodb.net:27017,ac-qr6585c-shard-00-01.qxwn2ks.mongodb.net:27017,ac-qr6585c-shard-00-02.qxwn2ks.mongodb.net:27017/?ssl=true&replicaSet=atlas-n28kj0-shard-0&authSource=admin&retryWrites=true&w=majority";


if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));


const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
