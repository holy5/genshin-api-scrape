import artifactModel from "../models/artifact.js";

const createArtifact = async (req, res) => {
	try {
		const artifacts = await new artifactModel(req.body).save();
		res.status(200).json(artifacts);
	} catch (error) {
		res.status(500).json(error);
	}
};

const getAllArtifacts = async (req, res) => {
	try {
		const { limit } = req.query;
		if (limit && limit > 0) {
			const artifacts = await artifactModel.find().limit(Number(limit));
			res.status(200).json(artifacts);
		} else {
			const artifacts = await artifactModel.find();
			res.status(200).json(artifacts);
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

const getOneArtifact = async (req, res) => {
	try {
		const { name } = req.params;
		const artifact = await artifactModel.findOne({
			name: name.replace("_", " "),
		});
		res.status(200).json(artifact);
	} catch (error) {
		res.status(500).json(error);
	}
};

export { createArtifact, getAllArtifacts, getOneArtifact };
