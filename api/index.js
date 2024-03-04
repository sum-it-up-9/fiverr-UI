import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const PORT = process.env.PORT || 8800; // Use the PORT provided by Heroku or 5000 locally

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);


app.use(cors());
app.use(express.json());
app.use(cookieParser());


import Connection from "./db.js";

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const DATABASE_NAME = 'fiverr';
const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-slvjufh-shard-00-00.ejrgjas.mongodb.net:27017,ac-slvjufh-shard-00-01.ejrgjas.mongodb.net:27017,ac-slvjufh-shard-00-02.ejrgjas.mongodb.net:27017/${DATABASE_NAME}?ssl=true&replicaSet=atlas-qgs623-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);








// const connect = async () => {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/fiverr');
//     console.log("Connected to mongoDB!");
//   } catch (error) {
//     console.log(error);
//   }
// };



app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/gigs", gigRoute);
app.use("/orders", orderRoute);
app.use("/conversations", conversationRoute);
app.use("/messages", messageRoute);
app.use("/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});


// app.listen(8800, () => {
//   connect();
//   console.log("Backend server is running!");
// });
