const { Router } = require("express");
const { loginUser, createUser } = require("../controller/userController");
const UserModel = require("../database/schema/userschema");
const router = Router();

const validateEmail = async (req, res, next) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: body.email });
  console.log('middleware',user)
  if (!user) {
    next();
  } else {
    res.status(403).send("Email Address is already taken ");
  }
};

router.post("/signup", validateEmail, createUser);
router.post("/login", loginUser);

module.exports = router;
