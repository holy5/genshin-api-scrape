import express from "express";
const router = express.Router();

import { verify } from "../middleware.js";
import {
	createArtifact,
	getAllArtifacts,
	getOneArtifact,
} from "../controllers/artifact.js";

router.get("/", getAllArtifacts);
router.get("/:name", getOneArtifact);
router.route("/").post(verify, createArtifact);

export default router;
