const ws = new require("ws");
const WS_PORT = 3000;

const connections = new Set();

var wss = new ws.Server({ port: WS_PORT });

wss.on("connection", (ws) => {
  connections.add(ws);

  ws.on("message", (data) => {
    console.log("received: %s", data);
  });

  ws.on("close", () => {
    connections.delete(ws);
  });
});

console.log("websocket on ", WS_PORT);
