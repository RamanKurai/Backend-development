const express = require("express");
const app = express();
app.use(express.json());

let todos = [];

// Create a new todo
app.post("/todos/create/", (req, res) => {
  const { todo, id } = req.body;

  if (!id) {
    return res.send("Todo id cannot be empty");
  }

  // Check if the ID already exists
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      return res.send("Todo Id already exists: " + id);
    }
  }

  if (!todo || todo.trim() === "") {
    return res.send("Todo cannot be empty");
  }

  const newtodo = { title: todo, id: id };
  todos.push(newtodo);
  res.send("Todo added successfully");
});

// Delete all todos
app.delete("/todos/delete/all", (req, res) => {
  todos = [];
  res.send("All todos deleted");
});

// Delete a specific todo by id
app.delete("/todos/delete/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  let deleted = false;

  const temptodo = todos.filter((todo) => {
    if (todo.id === todoId) {
      deleted = true;
      return false;
    }
    return true;
  });

  if (!deleted) {
    return res.send("Todo with id " + todoId + " not found");
  }

  todos = temptodo;
  res.send("Todo deleted successfully with id " + todoId);
});

// Update a todo by id
app.put("/todos/update/:id", (req, res) => {
  const { todo } = req.body;
  const todoId = parseInt(req.params.id);

  let updated = false;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === todoId) {
      todos[i].title = todo;
      updated = true;
      break;
    }
  }

  if (!updated) {
    return res.send("Todo with id " + todoId + " not found");
  }

  res.send("Todo updated successfully with id " + todoId);
});

// Get all todos
app.get("/todos/read/all", (req, res) => {
  if (todos.length === 0) {
    return res.send("No todos found");
  }
  res.send(todos);
});

// Get a specific todo by id
app.get("/todos/read/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return res.send("Todo with id " + todoId + " not found");
  }

  res.send(todo);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
