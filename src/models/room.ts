import mongoose, { Schema } from "mongoose";
import { IRoom } from "../types";

const roomSchema = new Schema<IRoom>(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
