// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8002, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });

dotenv.config({
  path: "./",
});
