const expressSession = require("express-session");
const mongoDbStore = require("connect-mongodb-session");

const createSessionStore = (session) => {
  const MongoDBStore = mongoDbStore(expressSession);

  const store = new MongoDBStore({
    // uri: 'mongodb://localhost:27017',
    uri: "mongodb+srv://jonpoll:WWkGQlPyMFEnk6XV@cluster0.osaiegw.mongodb.net/?retryWrites=true&w=majority",
    databaseName: "online-shop",
    collection: "sessions",
  });

  return store;
};

const createSessionConfig = () => {
  return {
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    },
  };
};

module.exports = createSessionConfig;
