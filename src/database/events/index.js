const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
    const dataQueries = await utils.loadQueries("events");

    const getEvents = async userId => {

        const connection = await getConnection();
        const request = await connection.request();

        request.input("userId", sql.VarChar(50), userId);

        return request.query(dataQueries.getEvents);

    };

    const addEvent = async ({
        userId,
        title,
        description,
        startDate,
        startTime,
        endDate,
        endTime
    }) => {

        const connection = await getConnection();
        const request = await connection.request();

        request.input("userId", sql.VarChar(50), userId);
        request.input("title", sqlNVarChar(200), title);
        request.input("description", sqlNVarChar(1000), description);
        request.input("startDate", sql.Date, startDate);
        request.input("startTime", sql.Time, startTime);
        request.input("endDate", sql.Date, endDate);
        request.input("endTime", sql.Time, endTime);

        return await request.query(dataQueries.addEvent)

    };

    const updateEvent = async ({
        userId,
        title,
        description,
        startDate,
        startTime,
        endDate,
        endTime
    }) => {

        const connection = await getConnection();
        const request = await connection.request();

        request.input("id", sql.Int, id);
        request.input("userId", sql.NVarChar(50), userId);
        request.input("title", sqlNVarChar, (200), title)
        request.input("description", sql.NVarChar( 1000 ), description );
		request.input("startDate", sql.Date, startDate);
		request.input("startTime", sql.Time, startTime);
		request.input("endDate", sql.Date, endDate);
		request.input("endTime", sql.Time, endTime);

		return request.query(sqlQueries.updateEvent);

    }

    const deleteEvent = async ({ id, userId }) => {
        const connection = await getConnection();
        const request = await connection.request();

        request.input("id", sql.Int, id);
        request.input("userId", sql.VarChar(50), userId);

        return request.query(dataQueries.deleteEvent);
    }

    return { getEvents, addEvent, updateEvent, deleteEvent };

}

module.exports = { register };