const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`App is running on port number 3000`);
});
