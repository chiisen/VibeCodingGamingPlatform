# VibeCodingGamingPlatform
Vibe Coding 使用 Google Antigravity 模仿某知名遊戲平台，並記錄所下的 PROMPT、CHANGELOG(修改紀錄)、PLANNING(專案規劃)、ICON(爬蟲抓取遊戲圖示的說明)等文件。

![Online](./images/Online.png)

## PROMTP
[PROMPT](./PROMPT.md)

## 環境設定
Node.js v22  
參考 [.nvmrc](.nvmrc) 檔案設定  

## Vue DEMO 專案的建立與分析
1. 分析結果: 已建立 Planning.md，包含詳細的組件結構與功能規劃。
2. 專案內容: 已在 vue-demo 資料夾中建立 Vue 3 + Vite 專案，並實作了所有要求的組件 (HeaderNav, SideMenu, CategoryTabs, GameList, GameCard, FooterInfo)。
3. 數據: 遊戲名稱已從目標網站提取並存入 src/data/games.json。
4. 注意: 由於目標網站的圖片資源無法自動抓取（可能是動態載入或防爬蟲機制），目前使用 Placeholder 圖片代替。您可以在 games.json 中替換為真實連結。
5. 執行: 請進入 vue-demo 資料夾執行 npm install 與 npm run dev 即可預覽。

## 圖示自動抓取腳本

`node scripts/fetch-icons.js` 會從 https://www.xin-stars.com/GameIntro/GAME_List/ 抓取每個遊戲的真實圖示 URL，並更新 `src/data/games.json`。

### 使用方式

```bash
# 安裝依賴（已在 package.json 中列出）
npm install

# 執行腳本，更新圖示
npm run fetch-icons
# 或者直接
node scripts/fetch-icons.js
```

執行完畢後重新啟動開發伺服器 `npm run dev`，即可看到正確圖示。若圖示載入失敗，`GameCard.vue` 會使用本地 `placeholder.png` 作為備援。
## 相關文件說明

- **Planning.md**  
  記錄了專案的需求分析、技術棧、檔案結構與各 Vue 組件的設計規劃，作為開發前的藍圖與後續維護的參考。

- **CHANGE.md**  
  詳細的變更日誌，列出每次提交的問題描述、解決方案與時間戳記，方便追蹤專案演進與協作決策。

- **ICON.md**  
  說明了遊戲圖示（icon）問題的根因、解決流程以及自動抓取腳本的實作細節，提供未來更新圖示的操作指引。
