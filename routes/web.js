const express = require("express");
const router = express.Router();
const utils = require("./../utils/utils");

const devs = [
  {
    name: "Hemant Kumar",
    github: "https://github.com/hemant-kr-meena",
  },
  {
    name: "Parmod Kumar",
    github: "https://github.com/ErParmod",
  },
];
const aboutInfo = {
  title: "Hindi Font Converter API",
  message: "Hurry! API is working 🥳",
  repository: "https://github.com/ErParmod/hindi-font-converter",
  developer: devs,
  version: utils.version(),
};

router.get("/", (req, res) => {
  res.status(200).json({
    alive: true,
    status: "running...",
    about: aboutInfo,
  });
  // res.json(aboutInfo);
});

router.get("/about", (req, res) => {
  res.json(aboutInfo);
});
module.exports = router;
