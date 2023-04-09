import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGOO_URI, {
      dbName: "todoBackendapi",
    })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};
