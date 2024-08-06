import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "email is already exits!"],
    reuired: [true, "email is required!"],
  },
  username: {
    type: String,
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
    reuired: [true, "username is required!"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
