import { File } from "buffer";

export interface IRoom {
	name: string;
}

export interface IChat {
	room: string;
	author: string;
	message: string;
	file?: File | null;
	time: Date;
}

export interface IUser {
	name: string;
	room: string;
}
