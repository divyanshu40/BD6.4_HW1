let request = require("supertest");
let http = require("http");
let { app } = require("../index");
let { getAllEmployees, getEmployeeById, getAllDepartments, getDepartmentById } = require("../functions");


jest.mock("../functions", () => ({
  ...jest.requireActual("../functions"),
  getAllEmployees: jest.fn(),
  getEmployeeById: jest.fn(),
  getAllDepartments: jest.fn(),
  getDepartmentById: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe("API Error Testing.", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // Exercise 5: Test get all employees with no employees
  it("GET API /api/employees should return 404 if employees not found", async () => {
    getAllEmployees.mockReturnValue([]);
    let result = await request(server).get("/api/employees");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("No employees found");
  });
  // Exercise 6: Test get employee by non-existent ID
  it("GET API /api/employees/:id should return 404 if employee not found", async () => {
    getEmployeeById.mockReturnValue(null);
    let result = await request(server).get("/api/employees/6");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("No employee found");
  });
  // Exercise 7: Test get all departments with no departments
it("GET API /api/departments should return 404 if departments not found", async () => {
  getAllDepartments.mockReturnValue([]);
  let result = await request(server).get("/api/departments");
  expect(result.status).toEqual(404);
  expect(result.body.error).toBe("No departments found");
});
// Exercise 8: Test get department by non-existent ID
it("GET API /api/departments/:id should return 404 if department not found", async () => {
  getDepartmentById.mockReturnValue(null);
  let result = await request(server).get("/api/departments/4");
  expect(result.status).toEqual(404);
  expect(result.body.error).toBe("No department found.");
});
});