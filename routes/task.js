import express from "express";
import {
  deleteTasks,
  getMyTasks,
  newTask,
  updateTasks,
} from "../controllers/task.js";
import { isAuthenticte } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", isAuthenticte, newTask);

router.get("/my", isAuthenticte, getMyTasks);

router
  .route("/:id")
  .put(isAuthenticte, updateTasks)
  .delete(isAuthenticte, deleteTasks);

export default router;
