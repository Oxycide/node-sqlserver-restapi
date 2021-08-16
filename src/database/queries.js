export const queriesFac = {
  getAllFactories: "SELECT TOP(500) * FROM [DanielDominguezDB].[dbo].[factory]",
  getFactoryById: "SELECT * FROM factory Where id = @id",
  addNewFactory:
    "INSERT INTO [DanielDominguezDB].[dbo].[factory] (official_name, commercial_name, rfc, address, telephone, creation_date, director) VALUES (@official_name, @commercial_name, @rfc, @address, @telephone, @creation_date, @director);",
  deleteFactory: "DELETE FROM [DanielDominguezDB].[dbo].[factory] WHERE id= @id",
  getTotalFactories: "SELECT COUNT(*) FROM test.dbo.factory",
  updateFactoryById:
    "UPDATE [DanielDominguezDB].[dbo].[factory] SET official_name = @official_name , commercial_name = @commercial_name , rfc = @rfc , address = @address , telephone = @telephone , creation_date = @creation_date , director = @director  WHERE id = @id",
};

export const queriesDep = {
  getAllDepartments: "SELECT TOP(500) * FROM [DanielDominguezDB].[dbo].[department]",
  getDepartmentById: "SELECT * FROM department Where id = @id",
  addNewDepartment:
      "INSERT INTO [DanielDominguezDB].[dbo].[department] (name, specialty, area_phone, responsible_name, responsible_user_id, creation_date) VALUES (@name, @specialty, @area_phone, @responsible_name, @responsible_user_id, @creation_date);",
  deleteDepartment: "DELETE FROM [DanielDominguezDB].[dbo].[department] WHERE id= @id",
  getTotalDepartments: "SELECT COUNT(*) FROM test.dbo.department",
  updateDepartmentById:
      "UPDATE [DanielDominguezDB].[dbo].[department] SET name = @name , specialty = @specialty , area_phone = @area_phone , responsible_name = @responsible_name , responsible_user_id = @responsible_user_id , creation_date = @creation_date  WHERE id = @id",
};

export const queriesEmp = {
  getAllEmployees: "SELECT TOP(500) * FROM [DanielDominguezDB].[dbo].[employees]",
  getEmployeeById: "SELECT * FROM employees Where id = @id",
  addNewEmployee:
      "INSERT INTO [DanielDominguezDB].[dbo].[employees] (name, address, hiring_date, department_id) VALUES (@name, @address, @hiring_date, @department_id);",
  deleteEmployee: "DELETE FROM [DanielDominguezDB].[dbo].[employees] WHERE id= @id",
  getTotalEmployees: "SELECT COUNT(*) FROM test.dbo.employees",
  updateEmployeeById:
      "UPDATE [DanielDominguezDB].[dbo].[employees] SET name = @name , address = @address , hiring_date = @hiring_date , department_id = @department_id WHERE id = @id",
};

export const queriesPro = {
  getAllProducts: "SELECT TOP(500) * FROM [DanielDominguezDB].[dbo].[product]",
  getProductById: "SELECT * FROM product Where id = @id",
  addNewProduct:
      "INSERT INTO [DanielDominguezDB].[dbo].[product] (name, department_id) VALUES (@name, @department_id);",
  deleteProduct: "DELETE FROM [DanielDominguezDB].[dbo].[employees] WHERE id= @id",
  getTotalProducts: "SELECT COUNT(*) FROM test.dbo.product",
  updateProductById:
      "UPDATE [DanielDominguezDB].[dbo].[product] SET name = @name, department_id = @department_id WHERE id = @id",
};

export const queriesLog = {
  getUser: "SELECT * FROM [DanielDominguezDB].[dbo].[login] WHERE username = @username and password=@password"

};
