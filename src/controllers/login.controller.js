import {getConnection, queriesLog, sql} from "../database";

export const getUser = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("username", req.params.username)
            .input("password", req.params.password)
            .query(queriesLog.getUser);
        return res.json(result.recordset[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

