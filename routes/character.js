import express from "express";
const router = express.Router();

import {
	createCharacter,
	getAllCharacters,
	getOneCharacter,
} from "../controllers/character.js";
import { verify } from "../middleware.js";

router.route("/").get(getAllCharacters);
router.route("/").post(verify, createCharacter);
router.get("/:character", getOneCharacter);

export default router;
