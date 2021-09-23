import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const PORT = 3000;

const { json } = express;

const app = express();

app.use(json());
app.use(cors());

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a client connected");
});

app.post("/api/webhooks/:type", (req, res, next) => {
  io.emit(req.params.type, req.body);

  res.status(200).end();
});

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
