const express = require('express');
const app = express();

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 3000;;

app.listen(PORT, () => {
    console.log(`App is running on port number 3000`);
});

const todoRoutes = require("./routes/todos");
app.use("api/v1", todoRoutes);

const dbConnect = require("./config/database");
dbConnect();

app.use("/", (req, res) => {
    res.send("Welcome to the Todo App");
})