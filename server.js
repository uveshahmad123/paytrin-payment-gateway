import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import "dotenv/config.js";
import  api  from "./routes/route.api.js";
 

const PORT = process.env.PORT || 3000;
connectDB();

const app = express();

// CORS configuration
var corsOption = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials : true
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  API routes
app.use("/api", api);


app.listen(PORT, () => {
    console.log(`Server is running on   http://localhost:${PORT}`);
});
