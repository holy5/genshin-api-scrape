import weaponModel from "../models/weapon.js";

const createWeapon = async (req, res) => {
	try {
		const weapons = await new weaponModel(req.body).save();
		res.status(200).json(weapons);
	} catch (error) {
		res.status(500).json(error);
	}
};

const getAllWeapons = async (req, res) => {
	try {
		const { type, limit } = req.query;
		let weapons;
		if (type && (!limit || limit <= 0)) {
			weapons = await weaponModel.find({
				weaponType: type,
			});
		} else if (type && limit != 0) {
			weapons = await weaponModel
				.find({
					weaponType: type,
				})
				.limit(Number(limit));
		} else if (limit && limit > 0 && !type) {
			weapons = await weaponModel.find().limit(Number(limit));
		} else {
			weapons = await weaponModel.find();
		}
		res.status(200).json(weapons);
	} catch (error) {
		res.status(500).json(error);
	}
};

const getOneWeapon = async (req, res) => {
	const { weapon } = req.params;
	try {
		const weapons = await weaponModel.find({
			name: weapon.replace("_", " "),
		});
		if (weapons.length > 0) {
			res.status(200).json(weapons);
		} else {
			res.status(404).json({ message: "No weapon found" });
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

export { createWeapon, getAllWeapons, getOneWeapon };
