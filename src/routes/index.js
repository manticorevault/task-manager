module.exports.register = async server => {
    server.route({
        method: "GET",
        path:"/",
        handler: async(request, h) => {
            return "It's working!"
        }
    });
}