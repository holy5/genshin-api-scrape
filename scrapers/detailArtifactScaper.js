import cheerio from "cheerio";
import axios from "axios";
import { createArtifact } from "../api.js";
// import { updateArtifact } from "../api.js";
import { allArtifacts } from "../data/genshin_all_artifacts.js";

const BASE_URL = "https://genshin-impact.fandom.com/wiki";

const scrape = async (field) => {
	const html = (await axios.get(`${BASE_URL}/${field}`)).data;
	const $ = cheerio.load(html);
	let components = [];
	let rarity = [];

	const artifactName = $(
		"#mw-content-text > div.mw-parser-output > aside > h2.pi-item.pi-item-spacing.pi-title.pi-secondary-background"
	).text();

	const rarityList = $(
		"#mw-content-text > div.mw-parser-output > aside > section.pi-item.pi-panel.pi-border-color.wds-tabber > div.wds-tabs__wrapper > ul > li"
	);

	const artifactSet = $(
		"#mw-content-text > div.mw-parser-output > aside > div.pi-item"
	);

	const twoPiecesBonus = $(
		"#mw-content-text > div.mw-parser-output > aside > section.pi-item.pi-group.pi-border-color > div:nth-child(2) > div"
	).text();

	const fourPiecesBonus = $(
		"#mw-content-text > div.mw-parser-output > aside > section.pi-item.pi-group.pi-border-color > div:nth-child(3) > div"
	).text();

	$(artifactSet, html).each(function () {
		let componentImgUrl = $(this)
			.find("h3.pi-data-label > center > a > img")
			.attr("src");
		if (componentImgUrl.startsWith("data:image")) {
			componentImgUrl = $(this)
				.find("h3.pi-data-label > center > a > img")
				.attr("data-src");
		}
		const componentName = $(this).find("div.pi-data-value > b").text();
		const loreName = $(this).find("div.pi-data-value>  a").text();
		components.push({
			name: componentName,
			lore: loreName,
			componentImgUrl,
		});
	});

	$(rarityList, html).each(function () {
		const rarityItem = $(this).text().trim();
		rarity.push(rarityItem);
	});

	createArtifact({
		name: artifactName,
		components,
		setBonus: {
			twoPieces: twoPiecesBonus,
			fourPieces: fourPiecesBonus,
		},
		rarity,
	});
};

(async () => {
	for (let i = 0; i < allArtifacts.length; i++) {
		await scrape(allArtifacts[i]);
	}
})();
