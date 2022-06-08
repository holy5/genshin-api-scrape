import characterModel from "../models/character.js";

const createCharacter = async (req, res) => {
	try {
		const newCharacter = await new characterModel(req.body);
		await newCharacter.save();
		res.status(200).json(newCharacter);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getAllCharacters = async (req, res) => {
	try {
		const { limit } = req.query;
		if (limit && limit > 0) {
			const characters = await characterModel.find().limit(limit);
			res.status(200).json(characters);
		} else {
			const characters = await characterModel.find();
			res.status(200).json(characters);
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

const getOneCharacter = async (req, res) => {
	const { character } = req.params;
	try {
		const selectedCharacter = await characterModel.find({
			name: character.replace("_", " "),
		});
		if (selectedCharacter.length > 0) {
			res.status(200).json(selectedCharacter);
		} else {
			res.status(404).json({ message: "No character found" });
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

export { createCharacter, getAllCharacters, getOneCharacter };
