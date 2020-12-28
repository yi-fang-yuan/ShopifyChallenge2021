require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const appRoute = require("./routes/appRoute");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use("/api", appRoute);
mongoose
.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log("connected to mongo database"))
.catch((error) => console.errror(error));
app.listen(PORT, () => console.log(`listening on port : ${PORT}`));