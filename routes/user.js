import express from "express";
import { getMyprofile, login, logout, register } from "../controllers/user.js";
import { isAuthenticte } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticte, getMyprofile);

export default router;
