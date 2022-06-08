import cheerio from "cheerio";
import axios from "axios";
import { createArtifact } from "../api.js";

const BASE_URL = "https://genshin-impact.fandom.com/wiki/Artifacts";

const scrape = async () => {
	const html = (await axios.get(BASE_URL)).data;
	const $ = cheerio.load(html);

	const artifactItem = $(
		"#mw-content-text > div.mw-parser-output > div:nth-child(31) > div.card_with_caption"
	);
	$(artifactItem, html).each(function () {
		const name = $(this).find("div.card_caption > a").text();
		const imgUrl = $(this)
			.find("div.card_image > a > img")
			.attr("data-src");
		createArtifact({ name, imgUrl });
	});
};

(async () => {
	await scrape();
})();
