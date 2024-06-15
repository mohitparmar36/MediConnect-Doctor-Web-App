const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(token);
        return res.status(401).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        console.log(token);
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};
