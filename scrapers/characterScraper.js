import axios from "axios";
import cheerio from "cheerio";

import { createCharacter } from "../api.js";

const PAGE_URL = "https://genshin-impact.fandom.com/wiki";

const scrapeAllCharacters = async () => {
	const res = await axios.get(`${PAGE_URL}/Characters#Playable_Characters`);
	const html = res.data;
	const $ = cheerio.load(html);
	const characterItem = $(
		"#mw-content-text > div.mw-parser-output > table:nth-child(46) > tbody > tr"
	);

	$(characterItem, html).each(function () {
		const name = $(this).find("td:nth-child(2) > a").text();
		const imgUrl = $(this)
			.find("td:nth-child(1) > a > img")
			.attr("data-src");
		const rarity = $(this).find("td:nth-child(3) > img").attr("alt");
		const element = $(this)
			.find("td:nth-child(4) > span > a:nth-child(2)")
			.text();
		const weapon = $(this)
			.find("td:nth-child(5) > span > .mw-redirect")
			.text();
		const region = $(this).find("td:nth-child(6) > a").text();
		if (name && imgUrl) {
			createCharacter({ name, imgUrl, rarity, element, weapon, region });
		}
	});
};

const scraper = async () => {
	try {
		await scrapeAllCharacters();
	} catch (error) {
		console.log(error.message);
	}
};
(async () => {
	await scraper();
})();
