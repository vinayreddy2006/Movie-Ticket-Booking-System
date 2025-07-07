const router = require("express").Router();

const {
  register,
  login,
  editProfile,
} = require("../controllers/authController");

const fetchUser=require("../middlewares/fetchUser")
router.post("/register", register);
router.post("/login", login);

router.put("/editprofile",fetchUser,editProfile);
module.exports = router;
