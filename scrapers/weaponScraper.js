import cheerio from "cheerio";
import axios from "axios";
import { createWeapon } from "../api.js";

const BASE_URL = "https://genshin-impact.fandom.com/wiki/Claymores";

const scrape = async () => {
	// const browser = await puppeteer.launch();
	// const page = await browser.newPage();
	// await page.goto(BASE_URL, { waitUntil: "networkidle0" });
	// const html = await page.content();
	// await browser.close();
	const html = (await axios.get(BASE_URL)).data;
	const $ = cheerio.load(html);
	const weaponItem = $(
		"#mw-content-text > div.mw-parser-output > table:nth-child(25) > tbody > tr"
	);

	$(weaponItem, html).each(function () {
		const name = $(this).find("td:nth-child(2) > a").text();
		const imgUrl = $(this)
			.find("td:nth-child(1) > a > img")
			.attr("data-src");
		const rarity = $(this).find("td:nth-child(3) > img").attr("alt");
		const baseAtkLv90 = $(this).find("td:nth-child(4)").text().trimEnd();
		const secondStatLv90 = $(this).find("td:nth-child(5)").text().trimEnd();
		const passiveAbility = $(this).find("td:nth-child(6)").text().trimEnd();
		if (name && imgUrl) {
			createWeapon({
				name,
				imgUrl,
				rarity,
				baseAtkLv90,
				secondStatLv90,
				passiveAbility,
				weaponType: "Claymore",
			});
			// console.log(name);
		}
	});
};
(async () => {
	await scrape();
})();
