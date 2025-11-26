# 專案規劃書 (Planning.md)

## 1. 專案概述
本專案為一個 Vue 前端 DEMO，旨在模仿《星城Online》遊戲總覽頁面的核心功能與視覺結構。
目標是建立一個具有響應式設計、組件化結構的前端應用，並展示動態載入遊戲列表的功能。

## 2. 技術棧
- **核心框架**: Vue 3 (使用 Vite 建構)
- **語言**: JavaScript (ES6+)
- **樣式**: CSS (Vanilla 或 Scoped CSS)
- **路由**: Vue Router (視需要，目前單頁結構可能不需要複雜路由，但可預留)

## 3. 檔案結構分析
根據 `PROMPT.mt` 的要求，專案結構如下：

```plaintext
src/
|-- components/
|   |-- HeaderNav.vue        # 頂部導航/Logo、主選單
|   |-- SideMenu.vue         # 側邊功能選單
|   |-- CategoryTabs.vue     # 遊戲分類標籤
|   |-- GameList.vue         # 遊戲清單容器
|   |-- GameCard.vue         # 單一遊戲卡片
|   |-- FooterInfo.vue       # 頁腳資訊
|-- App.vue                  # 主入口
|-- main.js                  # 程式入口
|-- assets/                  # 靜態資源 (圖片、樣式)
```

## 4. 組件詳細功能

### 4.1 App.vue
- 佈局容器 (Layout Container)。
- 組合 Header, SideMenu, Main Content (CategoryTabs + GameList), Footer。

### 4.2 HeaderNav.vue
- 展示 Logo。
- 頂部導航連結 (遊戲介紹, 下載, 儲值, 客服)。
- 登入/註冊按鈕佔位。

### 4.3 SideMenu.vue
- 側邊欄連結 (遊戲教學, 活動區, 公告)。
- 可能在移動端會隱藏或變為漢堡選單。

### 4.4 CategoryTabs.vue
- 顯示分類：全部, SLOT, 國際, 特殊, 棋牌等。
- 點擊切換 `activeCategory` 狀態，觸發 `GameList` 更新。

### 4.5 GameList.vue
- 接收 `activeCategory` prop。
- 遍歷遊戲數據，渲染 `GameCard`。
- 處理 RWD 網格佈局 (Grid Layout)。

### 4.6 GameCard.vue
- 接收單個遊戲數據 (Object)。
- 顯示：Icon, 標題, 類別。
- 懸停效果 (Hover Effect)。

### 4.7 FooterInfo.vue
- 靜態資訊展示。

## 5. 數據來源
- 將從 `https://www.xin-stars.com/GameIntro/GAME_List/` 抓取遊戲名稱與 Icon 圖片。
- 數據將存儲於 `src/data/games.json` 中，模擬 API 回傳。

## 6. 執行步驟
1.  **數據採集**: 使用工具爬取目標網站的遊戲數據。
2.  **專案初始化**: 使用 Vite 建立 Vue 專案。
3.  **組件開發**: 依序開發各個 Vue 組件。
4.  **樣式調整**: 確保視覺效果接近原站或具備現代感。
5.  **整合測試**: 確認分類切換與列表渲染正常。
