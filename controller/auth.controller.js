const userModel = require("../module/user.module");
const { hashPassword, comparePassword } = require("../utils/auth.util");

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
  try {
    const { email, password } = req.body;
    const user = userModel.findOne({ email });
    if (!user) throw { status: 404, message: "Not Found User" };
    if (comparePassword(password, user.password)) {
      res.send("login system");
    } else {
      throw {
        status: 400,
        message: "email or password is incorrect",
      };
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
};
