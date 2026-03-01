import { Request, Response } from "express";
import Task from "../models/taskModel";

// GET ALL TASKS
export const getTasks = async (req: any, res: any) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createTask = async (req: any, res: any) => {
  try {
    const { title, description, priority } = req.body;

    const task = new Task({
      title,
      description,
      priority,
      user: req.user.id,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const toggleTask = async (req: any, res: any) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) return res.status(404).json({ message: "Not found" });

    task.completed = !task.completed;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

export const deleteTask = async (req: any, res: any) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) return res.status(404).json({ message: "Not found" });

    await task.deleteOne();
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
export const updateTask = async (req: any, res: any) => {
  const { id } = req.params;
  const { title, description, priority } = req.body;

  const updatedTask = await Task.findOneAndUpdate(
    { _id: id, user: req.user.id },
    { title, description, priority },
    { new: true }
  );

  res.json(updatedTask);
};