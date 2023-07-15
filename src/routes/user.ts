import express from "express";
import {
	createRoom,
	deleteAllUsers,
	getUserById,
	getUsers,
} from "../controllers/user";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createRoom);
userRouter.delete("/", deleteAllUsers);

export default userRouter;
