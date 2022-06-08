import axios from "axios";

const config = {
	headers: {
		"Content-Type": "application/json",
		authorization: `Bearer ${process.env.HASH}`,
	},
};

const createCharacter = async (data) => {
	return await axios.post(`/api/characters`, data, config);
};

const createWeapon = async (data) => {
	return await axios.post(`/api/weapons`, data, config);
};

const createArtifact = async (data) => {
	return await axios.post(`/api/artifacts`, data, config);
};
const updateArtifact = async (data) => {
	return await axios.put(`/api/artifacts`, data, config);
};

export { createCharacter, createWeapon, createArtifact, updateArtifact };
