// import events from "events";

// const eventEmitter = new events.EventEmitter();

// eventEmitter.on("joinRoom", (user) => {
//   console.log(`${user} joined the room`);
// });

// eventEmitter.emit("joinRoom", "Gloadric");

import http from "http";

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("{message: 'Hello World!'}");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
