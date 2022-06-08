import express from "express";
const router = express.Router();

import { verify } from "../middleware.js";
import {
	createWeapon,
	getAllWeapons,
	getOneWeapon,
} from "../controllers/weapon.js";

router.get("/", getAllWeapons);
router.get("/:weapon", getOneWeapon);
router.route("/").post(verify, createWeapon);

export default router;
