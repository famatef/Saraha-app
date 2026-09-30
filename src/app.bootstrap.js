import express from "express";

const app = express();
const port = 3000;
import cors from "cors";
import userRouter from "./modules/user/user.controller.js";

import 
    connectionDB
 from "./DB/connectionDB.js";

export const bootstrap = async () => {
    app.use(cors(
        {origin:"*"
}));

    app.use(express.json());
    await connectionDB();
    app.get("/", (req, res) => {
        res.send("welcome on saraha app");
    });
    app.use("/users", userRouter);
    app.use((req, res, next) => {
        throw new Error(`Url:${req.originalUrl} with method:${req.method} not found`, { cause: 404 });
    });
    
    app.use((err, req, res, next) => {
        console.log(err);
        res.status(err.cause || 500).json({
            message: err.message,
            stack: err.stack,
        });
    });
    
    app.listen(port, () => {

        console.log(
            "Server running on port 3000"
        );

    });

};

export default bootstrap;