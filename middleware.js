const verify = async function (req, res, next) {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] === "Bearer"
	) {
		const token = req.headers.authorization.split(" ")[1];
		if (token === process.env.HASH) {
			next();
		} else {
			res.status(401).json({ message: "Unauthorized" });
		}
	} else {
		res.status(403).json({
			message: "Forbidden",
		});
	}
};
export { verify };
