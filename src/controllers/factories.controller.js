import {getConnection, queriesFac, sql} from "../database";

export const getFactories = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesFac.getAllFactories);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewFactory = async (req, res) => {
    const {
        official_name,
        commercial_name,
        rfc,
        address,
        telephone,
        creation_date,
        director
    } = req.body;

    // validating
    if (
        official_name == null ||
        commercial_name == null ||
        rfc == null ||
        address == null ||
        telephone == null ||
        creation_date == null ||
        director == null
    ) {
        return res.status(400).json({msg: "Bad Request. Please fill all fields"});
    }

    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("official_name", sql.VarChar, official_name)
            .input("commercial_name", sql.VarChar, commercial_name)
            .input("rfc", sql.VarChar, rfc)
            .input("address", sql.VarChar, address)
            .input("telephone", sql.Int, telephone)
            .input("creation_date", sql.Date, creation_date)
            .input("director", sql.VarChar, director)
            .query(queriesFac.addNewFactory);

        res.json({
            official_name,
            commercial_name,
            rfc,
            address,
            telephone,
            creation_date,
            director
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getFactoryById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queriesFac.getFactoryById);
        return res.json(result.recordset[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteFactoryById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", req.params.id)
            .query(queriesFac.deleteFactory);

        if (result.rowsAffected[0] === 0) return res.sendStatus(404);

        return res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateFactoryById = async (req, res) => {
    const {
        official_name,
        commercial_name,
        rfc,
        address,
        telephone,
        creation_date,
        director
    } = req.body;

    // validating
    if (
        official_name == null ||
        commercial_name == null ||
        rfc == null ||
        address == null ||
        telephone == null ||
        creation_date == null ||
        director == null
    ) {
        return res.status(400).json({msg: "Bad Request. Please fill all fields"});
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("official_name", sql.VarChar, official_name)
            .input("commercial_name", sql.VarChar, commercial_name)
            .input("rfc", sql.VarChar, rfc)
            .input("address", sql.VarChar, address)
            .input("telephone", sql.Int, telephone)
            .input("creation_date", sql.Date, creation_date)
            .input("director", sql.VarChar, director)
            .input("id", req.params.id)
            .query(queriesFac.updateFactoryById);
        res.json({
            official_name,
            commercial_name,
            rfc,
            address,
            telephone,
            creation_date,
            director
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
