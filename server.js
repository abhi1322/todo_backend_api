import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `\nServer is working on \nhttp://localhost:${process.env.PORT} \nunder "${process.env.NODE_ENV}"\n`
  );
});
