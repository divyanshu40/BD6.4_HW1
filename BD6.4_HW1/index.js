let express = require("express");
let { getAllEmployees, getEmployeeById, getAllDepartments, getDepartmentById } = require("./functions");
let app = express();
app.use(express.json());

// Exercise 1: Get All Employees
app.get("/api/employees", async (req, res) => {
  try {
    let result = await getAllEmployees();
    if (result.length === 0) {
      return res.status(404).json({ error: "No employees found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 2: Get Employee by ID
app.get("/api/employees/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getEmployeeById(id);
    if (! result) {
      return res.status(404).json({ error: "No employee found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
//Exercise 3: Get All Departments
app.get("/api/departments", async (req, res) => {
  try {
    let result = await getAllDepartments();
    if (result.length === 0) {
      return res.status(404).json({ error: "No departments found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 4: Get Department by ID
app.get("/api/departments/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getDepartmentById(id);
    if ( ! result) {
      return res.status(404).json({ error: "No department found."});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});

module.exports = { app };