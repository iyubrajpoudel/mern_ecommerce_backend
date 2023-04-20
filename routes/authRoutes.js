import express from "express";

//controllers
import { registerController } from "../controllers/registerController.js"

//router object
const router = express.Router();

//routes
router.post('/register', registerController);

export default router;
