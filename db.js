const mongoose = require("mongoose");

async function dbConnect() {
  var connection = await mongoose.connect(
    "mongodb://localhost:27017/museum"
  );

  return connection;
}

module.exports = dbConnect;
