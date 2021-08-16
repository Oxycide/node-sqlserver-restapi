import { Router } from "express";
import {
  getFactories,
  createNewFactory,
  getFactoryById,
  deleteFactoryById,
  updateFactoryById
} from "../controllers/factories.controller";
import {
  getDepartments,
  createNewDepartment,
  getDepartmentById,
  deleteDepartmentById,
  updateDepartmentById
} from "../controllers/departments.controller";
import {
  getEmployees,
  createNewEmployee,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployeeById
} from "../controllers/employees.controller";
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  updateProductById
} from "../controllers/products.controller";

import {
  getUser
} from "../controllers/login.controller";

const router = Router();

// Factory Routes

router.get("/factories", getFactories);

router.post("/factories", createNewFactory);

router.get("/factories/:id", getFactoryById);

router.delete("/factories/:id", deleteFactoryById);

router.put("/factories/:id", updateFactoryById);

// Department Routes

router.get("/departments", getDepartments);

router.post("/departments", createNewDepartment);

router.get("/departments/:id", getDepartmentById);

router.delete("/departments/:id", deleteDepartmentById);

router.put("/departments/:id", updateDepartmentById);

// Employee Routes

router.get("/employees", getEmployees);

router.post("/employees", createNewEmployee);

router.get("/employees/:id", getEmployeeById);

router.delete("/employees/:id", deleteEmployeeById);

router.put("/employees/:id", updateEmployeeById);

// Product Routes

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;

router.get("/login/:username&:password", getUser)
