const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", async (req, res) => {
//   console.log("HERE I AM");
    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/countries",
      headers: {
        "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      },
    };
    try {
      await axios
        .request(options)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {}
});

router.get("/usa", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    params: { country: "usa", day: "2020-06-02" },
    headers: {
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    },
  };
  try {
    await axios
      .request(options)
      .then((response) => {
          res.json(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
      console.log(error)
  }
});

module.exports = router;
