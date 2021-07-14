const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
    const dataQueries = await utils.loadQueries("events");

    const getEvents = async userId => {
        const connection = await getConnection();
        const request = await connection.request();

        request.input("userId", sql.VarChar(50), userId);

        return request.query(dataQueries.getEvents);
    };

    return { getEvents };

}

module.exports = { register };