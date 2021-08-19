import {getConnection, queriesLog, sql} from "../database";

export const getLog = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("username", req.params.username)
            .input("password", req.params.password)
            .query(queriesLog.getLogin);
        console.log(result.recordset)
        return res.send(result.recordset[0]);



    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




