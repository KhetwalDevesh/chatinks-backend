import { Request, Response } from "express";
import { IUser } from "../types";
import Room from "../models/room";
import User from "../models/user";

type CreateUserRequestType = Pick<IUser, "name" | "room">;

export const createRoom = async (request: Request, response: Response) => {
	try {
		const { name, room }: CreateUserRequestType = request.body;
		const user = await User.create({
			name,
			room,
		});
		response.send(user);
	} catch (error) {
		console.log("error in createUser", error);
		response.send({
			message: "Something went wrong",
		});
		throw error;
	}
};

export const getUsers = async (request: Request, response: Response) => {
	try {
		const users = await User.find({});
		response.send(users);
	} catch (error) {
		console.log("error in getUsers", error);
		throw error;
	}
};

export const getUserById = async (request: Request, response: Response) => {
	try {
		const { id } = request.params;
		const user = await User.findById(id);
		response.send(user);
	} catch (error) {
		console.log("error in getUser by id", error);
		throw error;
	}
};

export const deleteAllUsers = async (request: Request, response: Response) => {
	try {
		await User.deleteMany({});
		response.send("All users deleted successfully");
	} catch (error) {
		console.log("error in getUser by id", error);
		throw error;
	}
};
