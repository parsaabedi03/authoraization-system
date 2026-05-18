const userModel = require("../module/user.module");
const { hashPassword } = require("../utils/auth.util");

async function register(req, res, next) {
  try {
    const { fullName, email, password } = req.body;
    const user = await userModel.create({
      fullName,
      email,
      password: hashPassword(password),
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
}
function login(req, res, next) {
  res.send("login system");
}

module.exports = {
  register,
  login,
};
