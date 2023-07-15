import express from "express";
import {
	createRoom,
	deleteAllRooms,
	getRoomById,
	getRooms,
} from "../controllers/room";

const roomRouter = express.Router();

roomRouter.get("/", getRooms);
roomRouter.get("/:id", getRoomById);
roomRouter.post("/", createRoom);
roomRouter.delete("/", deleteAllRooms);

export default roomRouter;
