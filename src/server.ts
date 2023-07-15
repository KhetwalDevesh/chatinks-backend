import express from "express";
const app = express();
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./db";
import dotenv from "dotenv";
import roomRouter from "./routes/room";
import userRouter from "./routes/user";
import chatRouter from "./routes/chat";
dotenv.config();
app.use(cors());

const server = http.createServer(app);
connectDB();

app.use("/rooms", roomRouter);
app.use("/users", userRouter);
app.use("/chats", chatRouter);

const io = new Server(server, {
	cors: {
		origin: " http://localhost:5173",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log(`User Connected: ${socket.id}`);

	socket.on("join_room", (data) => {
		socket.join(data);
		console.log(`User with ID: ${socket.id} joined room: ${data}`);
	});

	socket.on("send_message", (data) => {
		socket.to(data.room).emit("receive_message", data);
	});

	socket.on("disconnect", () => {
		console.log("User Disconnected", socket.id);
	});
});

server.listen(8000, () => {
	console.log("SERVER RUNNING");
});
