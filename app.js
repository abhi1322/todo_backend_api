import express, { json } from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

const router = express.Router();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

// using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("It is working");
});

app.use(errorMiddleware);
