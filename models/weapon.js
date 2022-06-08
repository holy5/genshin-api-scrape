import mongoose from "mongoose";

const weaponModel = new mongoose.Schema({
	imgUrl: String,
	name: {
		type: String,
		required: true,
	},
	rarity: String,
	baseAtkLv90: String,
	secondStatLv90: String,
	passiveAbility: String,
	weaponType: String,
});

export default mongoose.model("Weapon", weaponModel);
