const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const secretKey = "rahasia"; // Same secret key used for token generation

router.use(bodyParser.json());

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
}

router.post("/", verifyToken, (req, res) => {
  const { username, email } = req.body;

  // Process creating a new user...

  res.json({ message: "User created successfully" });
});

module.exports = router;