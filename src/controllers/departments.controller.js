import {getConnection, queriesDep, sql} from "../database";

export const getDepartments = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesDep.getAllDepartments);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewDepartment = async (req, res) => {
    const {
        name,
        specialty,
        area_phone,
        responsible_name,
        responsible_user_id,
        creation_date
    } = req.body;

    // validating
    if (
        name == null ||
        specialty == null ||
        area_phone == null ||
        responsible_name == null ||
        responsible_user_id == null ||
        creation_date == null
    ) {
        return res.status(400).json({msg: "Bad Request. Please fill all fields"});
    }

    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("specialty", sql.VarChar, specialty)
            .input("area_phone", sql.VarChar, area_phone)
            .input("responsible_name", sql.VarChar, responsible_name)
            .input("responsible_user_id", sql.Int, responsible_user_id)
            .input("creation_date", sql.Date, creation_date)
            .query(queriesDep.addNewDepartment);

        res.json({
            name,
            specialty,
            area_phone,
            responsible_name,
            responsible_user_id,
            creation_date
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getDepartmentById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queriesDep.getDepartmentById);
        return res.json(result.recordset[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteDepartmentById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queriesDep.deleteDepartment);

        if (result.rowsAffected[0] === 0) return res.sendStatus(404);

        return res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateDepartmentById = async (req, res) => {
    const {
        name,
        specialty,
        area_phone,
        responsible_name,
        responsible_user_id,
        creation_date
    } = req.body;

    // validating
    if (
        name == null ||
        specialty == null ||
        area_phone == null ||
        responsible_name == null ||
        responsible_user_id == null ||
        creation_date == null
    ) {
        return res.status(400).json({msg: "Bad Request. Please fill all fields"});
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("specialty", sql.VarChar, specialty)
            .input("area_phone", sql.VarChar, area_phone)
            .input("responsible_name", sql.VarChar, responsible_name)
            .input("responsible_user_id", sql.Int, responsible_user_id)
            .input("creation_date", sql.Date, creation_date)
            .input("id", req.params.id)
            .query(queriesDep.updateDepartmentById);
        res.json({
            name,
            specialty,
            area_phone,
            responsible_name,
            responsible_user_id,
            creation_date
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
