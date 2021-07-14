const server = require("./server");
const config = require("./config");

// Starts the server with hapi
const startServer = async () => {
    try {
        const app = await server(config);
        
        await app.start();

        console.log(`Server up and running on http://${ config.host }:${ config.port }`)
    } catch (err) {
        console.log("There was an error trying to start the server:", err)
    }
}

startServer();