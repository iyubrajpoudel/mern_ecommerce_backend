import express from "express";

//controllers
import { registerController } from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js"
import { testController } from "../controllers/testController.js"
import { isAdmin, isLoggedIn } from './../middlewares/authMiddlewares.js';

//router object
const router = express.Router();

//routes

router.post('/register', registerController);
router.post('/login', loginController);

router.get('/test', isLoggedIn, isAdmin, testController);

export default router;
