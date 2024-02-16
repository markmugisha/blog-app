import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    next(error);
  }
};

//Sign in API Route
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    //checking if email is valid ie if it exists in the db User collection?
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "Invalid credentials"));
    }
    //checking the password
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
     return next(errorHandler(400, "Invalid credentials"));
    }
    //authenticating the user
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    //removing the password from the user object so that it is not sent to the client
    const {password: passiwadi, ...rest} = validUser._doc;

    //cookie is the encrypted value of the id of the user
    res
      .status(200)
      .cookie("access_token", token, { 
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
