import session from "express-session"
import express from "express"
import "dotenv/config"
import MongoStore from "connect-mongo"
import authRoutes from "./routes/auth.routes.js"
export const app = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,
            collectionName: "sessions",
            ttl: 24 * 60 * 60
        }),
        cookie: {
            maxAge: 1000 * 24 * 60 * 60,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        }
    })
)

app.use("/api/auth", authRoutes)

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: "Something went wrong" })
// })
