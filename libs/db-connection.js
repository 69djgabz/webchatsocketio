const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://gabi:123abc@ds123844.mlab.com:23844/web-chat");

mongoose.connection
  .once("open", () => console.log("Connected to the database"))
  .on("error", err => console.error(err));
