import express from "express"
import cors from "corsr"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

//Used to import data in json format with 16kb size limit
app.use(express.json({limit: "16kb"}))

//used encode url links with special characters such as %20 , + .the extended allows for further nesting eg objects
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//allows to store files or data on server in public folder created in the main folder
app.use(express.static("public"))

//it allows CRUD operations on users secure cookies
app.use(cookieParser())

export {app}