import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log("Database connected");
	} catch (error) {
		console.log("error in connectDB", error);
		throw error;
	}
};

export default connectDB;
