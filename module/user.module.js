const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);
module.exports = userModel;
