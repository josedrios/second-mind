const Task = require("../models/tasks");

exports.createTask = async (req, res) => {
  try {
    console.log(req.body);
    const { name, info, tag } = req.body;

    const newTask = new Task({
      name,
      info,
      tag,
    });

    await newTask.save();

    return res.status(201).json(newTask);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error occurred while creating new task",
      error: err.message,
    });
  }
};

exports.editTask = async (req, res) => {
  try {
    const { name, info, tag } = req.body;
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(
      id,
      {
        name,
        info,
        tag,
      },
      {
        new: true,
      }
    );

    return res.status(201).json(task);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error occurred while editing task",
      error: err.message,
    });
  }
};

exports.statusUpdateTask = async (req, res) => {
    try {
      const { name, info, tag } = req.body;
      const { id } = req.params;
  
      const task = await Task.findByIdAndUpdate(
        id,
        {
          name,
          info,
          tag,
        },
        {
          new: true,
        }
      );
  
      return res.status(201).json(task);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Error occurred while editing task",
        error: err.message,
      });
    }
  };

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error occurred while getting tasks",
      error: err.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted" });
    return;
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error occurred while deleting task",
      error: err.message,
    });
  }
};
