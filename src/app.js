import express from "express";
import cors from "cors";
import allRoutes from "./routes/all.routes";
import morgan from "morgan";

import config from "./config";

const app = express();

const corsOpt = { origin: "http://localhost:4200" };

// settings
app.set("port", config.port);

// Middlewares
app.use(cors(corsOpt));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.all('*', function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})

// Routes
app.use("/api", allRoutes);

export default app;
