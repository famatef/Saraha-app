import {Router} from "express";
import * as US from "./user.service.js";
import { authentication } from "../../common/middleware/authentication.js";
import { authorization } from "../../common/middleware/authorization.js";
import { RoleEnum } from "../../common/enum/user.enum.js";
import { validation } from "../../common/middleware/validation.js";
import { signupScehema } from "./user.validation.js";
import { signinScehema } from "./user.validation.js";


const userRouter = Router();



userRouter.post("/signup",validation(signupScehema), US.signup);
userRouter.post("/signup/gmail", US.signupGmail);
userRouter.post("/signin",validation(signinScehema), US.signin);
userRouter.get("/profile",authentication,authorization(Object.values(RoleEnum)), US.getprofile);

;


export default userRouter;
