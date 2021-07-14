module.exports.register = async server => {
    server.route({
        method: "GET",
        path: "/api/events",
        handler: 
            async request => {
                try {
                    const db = request.server.plugins.sql.client;

                    // Hardcoded userId for tests
                    const userId ="testUser";
                    const res = await db.events.getEvents(userId);

                    return res.recordset;

                } catch (err) {
                    console.log(err)
                }
            }
    })
}