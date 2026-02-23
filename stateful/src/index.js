import { app } from "./app.js";
import "dotenv/config"
import connectDB from "./config/db.config.js";


connectDB();

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})