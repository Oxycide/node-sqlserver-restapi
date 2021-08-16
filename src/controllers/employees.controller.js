import {getConnection, queriesEmp, sql} from "../database";

export const getEmployees = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesEmp.getAllEmployees);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewEmployee = async (req, res) => {
    const {
        name,
        address,
        hiring_date,
        department_id
    } = req.body;

    // validating
    if (
        name == null ||
        address == null ||
        hiring_date == null ||
        department_id == null
    ) {
        return res.status(400).json({msg: "Bad Request. Please fill all fields"});
    }

    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("address", sql.VarChar, address)
            .input("hiring_date", sql.Date, hiring_date)
            .input("department_id", sql.Int, department_id)
            .query(queriesEmp.addNewEmployee);

        res.json({
            name,
            address,
            hiring_date,
            department_id
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEmployeeById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queriesEmp.getEmployeeById);
        return res.json(result.recordset[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteEmployeeById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queriesEmp.deleteEmployee);

        if (result.rowsAffected[0] === 0) return res.sendStatus(404);

        return res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateEmployeeById = async (req, res) => {
    const {
        name,
        address,
        hiring_date,
        department_id
    } = req.body;

    // validating
    if (
        name == null ||
        address == null ||
        hiring_date == null ||
        department_id == null
    ) {
        return res.status(400).json({msg: "Bad Request. Please fill all fields"});
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("address", sql.VarChar, address)
            .input("hiring_date", sql.Date, hiring_date)
            .input("department_id", sql.Int, department_id)
            .input("id", req.params.id)
            .query(queriesEmp.updateEmployeeById);
        res.json({
            name,
            address,
            hiring_date,
            department_id
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
