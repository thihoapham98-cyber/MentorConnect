const express = require("express");
const http = require("http");
const path = require("path");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, "../..")));

wss.on("connection", (ws) => {
    console.log("WebSocket connected");

    ws.on("message", (message) => {
        console.log("Server received:", message.toString());

        wss.clients.forEach((client) => {
            if(client !== ws && client.readyState === WebSocket.OPEN){
                client.send(message.toString());
            }
        });
    });
});

server.listen(3000, () => {
    console.log("Server running: http://localhost:3000");
});
