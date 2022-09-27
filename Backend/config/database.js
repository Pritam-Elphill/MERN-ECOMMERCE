const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    })
    .then((res) => {
      console.log(`Mongodb connected with server : ${(res.connection.host)}`);
    })
};

module.exports = connectDatabase;
