import express from "express";
import dotenv from "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5001;

app.listen(5001, () => {
  console.log("Server is runnin on PORT:", PORT);
});
