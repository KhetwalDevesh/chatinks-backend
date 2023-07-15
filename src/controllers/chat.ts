import { Request, Response } from "express";
import { IChat } from "../types";
import Chat from "../models/chat";

type CreateChatRequestType = Pick<
	IChat,
	"room" | "author" | "message" | "file" | "time"
>;

export const createChat = async (request: Request, response: Response) => {
	try {
		const { room, author, message, file, time }: CreateChatRequestType =
			request.body;
		const chat = await Chat.create({
			room,
			author,
			message,
			file,
			time,
		});
		response.send(chat);
	} catch (error) {
		console.log("error in createChat", error);
		response.send({
			message: "Something went wrong",
		});
		throw error;
	}
};

export const getChats = async (request: Request, response: Response) => {
	try {
		const chats = await Chat.find({});
		response.send(chats);
	} catch (error) {
		console.log("error in getChats", error);
		throw error;
	}
};

export const getChatById = async (request: Request, response: Response) => {
	try {
		const { id } = request.params;
		const chat = await Chat.findById(id);
		response.send(chat);
	} catch (error) {
		console.log("error in getChat by id", error);
		throw error;
	}
};

export const deleteAllChats = async (request: Request, response: Response) => {
	try {
		await Chat.deleteMany({});
		response.send("All chats deleted successfully");
	} catch (error) {
		console.log("error in getChat by id", error);
		throw error;
	}
};
