const mongoose = require('mongoose');
const config = require('config');
// const db = config.get(process.env.MONGODB_URI);

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(process.env.MONGODB_URI);
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
