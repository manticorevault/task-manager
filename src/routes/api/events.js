const boom = require("@hapi/boom");

module.exports.register = async server => {
    server.route({
        method: "GET",
        path: "/api/events",
        options: {
            auth: { mode: try }
        },
        handler: 
            async request => {
                try {
                    if (!request.auth.isAuthenticated) {
                        return boom.unauthorized();
                    }

                    const db = request.server.plugins.sql.client;

                    const userId = request.auth.credentials.profile.id;
                    const res = await db.events.getEvents(userId);

                    return res.recordset;

                } catch (err) {
                    console.log(err)
                }
            }
    })
}