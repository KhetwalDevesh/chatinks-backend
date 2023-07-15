import express from "express";
import {
	createChat,
	deleteAllChats,
	getChatById,
	getChats,
} from "../controllers/chat";

const chatRouter = express.Router();

chatRouter.get("/", getChats);
chatRouter.get("/:id", getChatById);
chatRouter.post("/", createChat);
chatRouter.delete("/", deleteAllChats);

export default chatRouter;
