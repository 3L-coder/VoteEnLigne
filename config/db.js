const mongoose = require('mongoose');

//global maping of promises
mongoose.Promise = global.Promise;

//connexion a mongoose mongodb
mongoose.connect('mongodb://dbUsename:dbPassword@cluster0-shard-00-00-7hssh.mongodb.net:27017,cluster0-shard-00-01-7hssh.mongodb.net:27017,cluster0-shard-00-02-7hssh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
