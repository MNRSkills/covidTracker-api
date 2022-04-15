const express = require("express");
const cors = require("cors");
const app = express();
const covidRouter = require("./routes/countries");
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

app.use("/countries", covidRouter);
app.use("/history", covidRouter);

app.listen(PORT, () => {
  console.log("EXPRESS server is now running", PORT);
});
