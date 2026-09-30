import {Router} from "express";
import * as US from "./user.service.js";
const userRouter = Router();
userRouter.post("/signup", US.signup);
userRouter.post("/signup/gmail", US.signupGmail);
userRouter.post("/signin", US.signin);
userRouter.get("/profile", US.getprofile);




export default userRouter;