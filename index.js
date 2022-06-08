import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

import mongoose from "mongoose";

import characterRoute from "./routes/character.js";
import weaponRoute from "./routes/weapon.js";
import artifactRoute from "./routes/artifact.js";

dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true, limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/characters", characterRoute);
app.use("/api/weapons", weaponRoute);
app.use("/api/artifacts", artifactRoute);

mongoose.connect(process.env.MONGO_URL, () => {
	app.listen(process.env.PORT, () => {
		console.log("Server is running on port 6969");
	});
});
