let employees = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', departmentId: 1 },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', departmentId: 2 },
];

let departments = [
  { id: 1, name: 'Engineering' },
  { id: 2, name: 'Marketing' },
];

// function to get all employees.
async function getAllEmployees() {
  return employees;
}
// function to get employee by id.
async function getEmployeeById(id) {
  return employees.find((employee) => employee.id === id) ;
}
// function to get all departments.
async function getAllDepartments() {
  return departments;
}
// function to get department by id.
async function getDepartmentById(id) {
  return departments.find((department) => department.id === id);
}

module.exports = { getAllEmployees, getEmployeeById, getAllDepartments, getDepartmentById };