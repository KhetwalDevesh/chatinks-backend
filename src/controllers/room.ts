import { Request, Response } from "express";
import { IRoom } from "../types";
import Room from "../models/room";

type CreateRoomRequestType = Pick<IRoom, "name">;

export const createRoom = async (request: Request, response: Response) => {
	try {
		const { name }: CreateRoomRequestType = request.body;
		const room = await Room.create({
			name,
		});
		response.send(room);
	} catch (error) {
		console.log("error in createRoom", error);
		response.send({
			message: "Something went wrong",
		});
		throw error;
	}
};

export const getRooms = async (request: Request, response: Response) => {
	try {
		const rooms = await Room.find({});
		response.send(rooms);
	} catch (error) {
		console.log("error in getRooms", error);
		throw error;
	}
};

export const getRoomById = async (request: Request, response: Response) => {
	try {
		const { id } = request.params;
		const room = await Room.findById(id);
		response.send(room);
	} catch (error) {
		console.log("error in getroom by id", error);
		throw error;
	}
};

export const deleteAllRooms = async (request: Request, response: Response) => {
	try {
		await Room.deleteMany({});
		response.send("All rooms deleted successfully");
	} catch (error) {
		console.log("error in getroom by id", error);
		throw error;
	}
};
