import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./users/userRouter";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/users", userRouter);

app.use(globalErrorHandler);
export default app;
