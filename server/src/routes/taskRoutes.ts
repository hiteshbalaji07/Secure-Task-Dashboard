import express from "express";
import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController";

import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

// Get all tasks (for logged-in user)
router.get("/", authenticateToken, getTasks);

// Create task
router.post("/", authenticateToken, createTask);

// Toggle complete
router.put("/:id/toggle", authenticateToken, toggleTask);

// Update task
router.put("/:id", authenticateToken, updateTask);

// Delete task
router.delete("/:id", authenticateToken, deleteTask);

export default router;