const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.headers.authorization;
    if (token) {
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          return res.status(400).json({
            success: 0,
            message: "Invalid Token"
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(200).json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};
