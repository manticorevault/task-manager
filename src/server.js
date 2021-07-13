const Hapi = require("@hapi/hapi")

const app = async config => {
    const { host, port } = config;

    const server = Hapi.server({ host, port });

    server.app.config = config;

}

module.exports = app;