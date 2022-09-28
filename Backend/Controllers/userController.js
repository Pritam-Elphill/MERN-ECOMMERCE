const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../Middlewares/catchAsyncErrors");
const User = require("../Models/userModel");

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "this is a sample url",
    },
  });
  res.status(201).json({
    success: true,
    user,
  });
});

