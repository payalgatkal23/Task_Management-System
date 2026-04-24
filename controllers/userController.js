const Todo = require("../models/user");

exports.createtask = async (req, res) => {
  try {
    if(!req.body.task)
    {
        return res.json({message:"Task is required"})
    }
    const Task = await Todo.create(req.body);
    res.json(Task);
  } catch (err) {
    res.json({ message: "Error creating task" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.json(tasks);
  } catch (err) {
    res.json({ message: "Error fetching tasks" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.json({ message: "Error deleting task" });
  }
};