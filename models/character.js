import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	imgUrl: String,
	rarity: String,
	element: String,
	weapon: String,
	region: String,
});

export default mongoose.model("Character", characterSchema);
