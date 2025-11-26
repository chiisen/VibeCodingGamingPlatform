// scripts/fetch-icons.js
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

const dataPath = path.resolve('src/data/games.json');
const games = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const LIST_URL = 'https://www.xin-stars.com/GameIntro/GAME_List/';

async function fetchIconsFromList() {
    try {
        const res = await fetch(LIST_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
            }
        });
        const html = await res.text();
        const dom = new JSDOM(html);
        const cards = dom.window.document.querySelectorAll('a.js-item.game-card');
        const map = new Map();
        cards.forEach(card => {
            const img = card.querySelector('img');
            const nameSpan = card.querySelector('span');
            if (img && nameSpan) {
                const name = nameSpan.textContent.trim();
                map.set(name, img.src);
            }
        });
        return map;
    } catch (e) {
        console.error('❌ Failed to fetch list page:', e.message);
        return new Map();
    }
}

(async () => {
    console.log('🔎 Fetching icons from list page for', games.length, 'games...');
    const iconsMap = await fetchIconsFromList();
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        const newIcon = iconsMap.get(game.name);
        if (newIcon) {
            game.icon = newIcon;
            console.log(`✅ ${game.name} -> ${newIcon}`);
        } else {
            console.log(`⚠️ ${game.name} -> keep existing (${game.icon})`);
        }
    }
    fs.writeFileSync(dataPath, JSON.stringify(games, null, 2), 'utf-8');
    console.log('🎉 All possible icons updated in src/data/games.json');
})();
