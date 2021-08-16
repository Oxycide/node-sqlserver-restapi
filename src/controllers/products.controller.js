import {getConnection, queriesPro, sql} from "../database";

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesPro.getAllProducts);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewProduct = async (req, res) => {
    const {
        name,
        department_id
    } = req.body;

    // validating
    if (
        name == null ||
        department_id == null
    ) {
        return res.status(400).json({msg: "Bad Request. Please fill all fields"});
    }

    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("department_id", sql.Int, department_id)
            .query(queriesPro.addNewProduct);

        res.json({
            name,
            department_id
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getProductById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queriesPro.getProductById);
        return res.json(result.recordset[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteProductById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queriesPro.deleteProduct);

        if (result.rowsAffected[0] === 0) return res.sendStatus(404);

        return res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateProductById = async (req, res) => {
    const {
        name,
        department_id
    } = req.body;

    // validating
    if (
        name == null ||
        department_id == null
    ) {
        return res.status(400).json({msg: "Bad Request. Please fill all fields"});
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("department_id", sql.Int, department_id)
            .input("id", req.params.id)
            .query(queriesPro.updateProductById);
        res.json({
            name,
            department_id
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
