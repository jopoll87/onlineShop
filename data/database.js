const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

const connectToDatabase = async() => {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('online-shop');
}

const getDb = () => {
    if(!database) {
        throw new Error('You must connect first!');
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb,
}