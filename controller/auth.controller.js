const userModel = require("../module/user.module");

async function register(req, res, next) {
  try {
    const { fullName, email, password } = req.body;
    const user = await userModel.create({ fullName, email, password });
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
