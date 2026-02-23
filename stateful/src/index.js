import express from "express"
import "dotenv/config"
import session from "express-session"

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(process.env.PORT, () => {
    console.log("Server is running")
})