import mongoose from "mongoose";

const artifactModel = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	components: [
		{
			name: {
				type: String,
				required: true,
			},
			lore: String,
			componentImgUrl: String,
		},
	],
	setBonus: {
		twoPieces: String,
		fourPieces: String,
	},
	rarity: [String],
});

export default mongoose.model("Artifact", artifactModel);
