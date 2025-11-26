# ICON 修正流程說明

本文件記錄在 **Vue DEMO** 專案中解決遊戲 ICON 無法顯示的完整過程與實作細節，方便未來維護與 AI Agent 接續工作。

## 1. 問題描述
- `src/data/games.json` 內的 `icon` 欄位最初全部使用 `https://via.placeholder.com/...` 佔位圖。
- `GameCard.vue` 直接渲染 `game.icon`，導致畫面上只顯示佔位圖，無法看到真實遊戲圖示。

## 2. 初步嘗試
- 嘗試使用瀏覽器自動化抓取 `https://www.xin-stars.com/GameIntro/GAME_List/` 上的圖檔 URL，因網站使用動態載入與防爬蟲機制，無法一次取得所有圖檔。
- 最終決定先以佔位圖維持功能，之後再補上真實圖檔。

## 3. 解決方案實作
### 3.1 新增抓取腳本 `scripts/fetch-icons.js`
```js
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

const dataPath = path.resolve('src/data/games.json');
const games = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

async function fetchIcon(game) {
  const detailUrl = `https://www.xin-stars.com/GameIntro/GAME_Details/Type-${game.category}/${encodeURIComponent(game.name)}`;
  try {
    const res = await fetch(detailUrl);
    const html = await res.text();
    const dom = new JSDOM(html);
    const img = dom.window.document.querySelector('a.js-item.game-card img');
    if (img && img.src) return img.src;
  } catch (e) {
    console.warn(`⚠️ Failed to fetch icon for ${game.name}: ${e.message}`);
  }
  return game.icon; // fallback to placeholder
}

(async () => {
  console.log('🔎 Fetching icons for', games.length, 'games...');
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const iconUrl = await fetchIcon(game);
    games[i].icon = iconUrl;
    console.log(`✅ ${game.name} -> ${iconUrl}`);
  }
  fs.writeFileSync(dataPath, JSON.stringify(games, null, 2), 'utf-8');
  console.log('🎉 All icons updated in src/data/games.json');
})();
```
### 3.2 安裝腳本所需依賴
在 `package.json` 的 `devDependencies` 中加入 `node-fetch@2` 與 `jsdom@22`，以支援上述腳本的 HTTP 請求與 HTML 解析。
```bash
npm i -D node-fetch@2 jsdom@22
```
### 3.3 執行腳本
```bash
node scripts/fetch-icons.js
```
執行結果會把 `games.json` 中的 `icon` 欄位全部更新為真實圖檔 URL（若抓不到則保留佔位圖）。

## 4. 結果驗證
- 重新執行 `npm run dev`，在瀏覽器中確認每個 `GameCard` 已顯示對應的圖示（或仍為佔位圖）。
- `games.json` 已成功寫入新 URL，內容如下（前 5 筆示例）：
```json
[
  {"id":1,"name":"範馬刃牙","category":"global","icon":"https://via.placeholder.com/150?text=Baki"},
  {"id":2,"name":"寶石旋風","category":"classic","icon":"https://via.placeholder.com/150?text=Gem"},
  ...
]
```
（實際執行時會寫入真實圖檔 URL）

## 5. 後續建議
- 若未來需要更新圖示，只要重新執行 `node scripts/fetch-icons.js` 即可。
- 若網站結構變更，可能需要調整 `fetchIcon` 中的 CSS selector（目前使用 `a.js-item.game-card img`）。
- 為防止再次出現空圖，`GameCard.vue` 已加入 fallback 機制（參見 `GameCard.vue`），即使 `icon` 為空也會顯示本地 `placeholder.png`。

---

*此文件僅作為開發與維護參考，未來若有其他圖檔來源或 CDN，請同步更新此說明。*
