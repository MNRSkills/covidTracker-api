const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())
const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
    console.log("EXPRESS server is now running", PORT)
})