var server = require("./libs/server");
var color = require("./libs/color");

server.init(3000, "Pokemon", color.red);

// when we receive playMovement, send info to all
// clients
server.on("playerMovement", function (data) {
    server.send(data, "playerMovement");
});