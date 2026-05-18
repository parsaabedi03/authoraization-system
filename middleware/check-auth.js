const userModel = require("../module/user.module");
const { verifyToken } = require("../utils/auth.util");

async function checkAuth(req, res, next) {
  try {
    const authorization = req?.headers?.authorization;
    const [bearer, token] = authorization?.split(" ");

    if (bearer && bearer.toLowerCase() === "bearer") {
      if (token) {
        const verifyResult = verifyToken(token);
        const user = await userModel.findOne({ email: verifyResult.email });
        req.isAuthenticated = !!user;
        if (!user)
          throw {
            status: 401,
            message: "not found user account please login again",
          };
        req.user = {
          fullName: user.fullName,
          email: user.email,
        };
        return next();
      }
      throw { status: 401, message: "Authorization failed please login" };
    } else {
      throw { status: 401, message: "Authorization failed please login" };
    }
  } catch (error) {
    next(error);
  }
}

module.exports = checkAuth;
