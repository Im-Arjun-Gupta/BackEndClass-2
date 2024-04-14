const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connection successful")
    })
    .catch((err) => {
        console.log("Database connection error: ", err);
        process.exit(1);
    });
}

module.exports = dbConnect;