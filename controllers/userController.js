const Todo = require("../models/user");

exports.createtask = async (req, res) => {
  try {
    if(!req.body.task)
    {
        return res.json({message:"Task is required"})
    }
    const user = await Todo.create(req.body);
    res.json(user);
  } catch (err) {
    res.json({ message: "Error creating task" });
  }
};
