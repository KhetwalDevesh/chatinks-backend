import mongoose, { Schema } from "mongoose";
import { IChat } from "../types";
import { File } from "buffer";

const chatSchema = new Schema<IChat>(
	{
		room: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		file: {
			type: File,
			required: false,
		},
		message: {
			type: String,
			required: true,
		},
		time: {
			type: Date,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
