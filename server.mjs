import { createServer } from "http";
import next from "next";
import { Server as socketioServer } from "socket.io";
import express from "express";
import dotenv from "dotenv";

const port = process.env.PORT || 3000;
dotenv.config();
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "1";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const store = {};
const chatUser = {};
app.prepare().then(async () => {
  const expressApp = express();
  const server = createServer(expressApp);
  const io = new socketioServer();
  io.attach(server);
  io.sockets.on("connection", (socket) => {});
  expressApp.all("*", (req, res) => handle(req, res));
  server.listen(port);
});
