import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongodb is alreadt connected");
  }

  try {
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: "shared_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};
