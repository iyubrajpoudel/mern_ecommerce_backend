import express from "express";

//controllers
import { registerController } from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js"

//router object
const router = express.Router();

//routes

router.post('/register', registerController);
router.post('/login', loginController);

export default router;
