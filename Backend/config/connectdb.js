//import mongoose
const mongoose = require("mongoose");
// fonction
const connectdb = async () => {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(process.env.mongoUrl,opts)
    console.log("The database is connected")
  } catch (error) {
   console.log(error) 
  }
};
module.exports = connectdb
