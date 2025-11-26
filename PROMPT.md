以下是針對《星城Online》遊戲總覽頁 https://www.xin-stars.com/GameIntro/GAME_List/ 用 Vue + JavaScript 實作時的主要互動元件結構分析，並以 Markdown 用繁體中文說明各元件：

```plaintext
App.vue （主入口元件） 
|
|-- HeaderNav.vue        頂部導航/Logo、主選單
|
|-- SideMenu.vue         側邊功能選單
|
|-- CategoryTabs.vue     遊戲分類標籤（如全部、SLOT、國際、特殊、棋牌等）
|
|-- GameList.vue         遊戲清單（根據選取分類顯示遊戲陣列）
|     |-- GameCard.vue   遊戲卡片（單一遊戲簡要，含標題、類型連結、簡易描述）
|
|-- FooterInfo.vue       頁腳資訊條（服務條款、聯絡、品牌宣告）
```

***

### 元件說明

- **App.vue（主入口元件）**
  - 統籌頁面結構與資料流，管理所有子元件。

- **HeaderNav.vue（頂部導航/Logo、主選單）**
  - 顯示網站 Logo、選單（如遊戲介紹、下載、儲值、客服），也可加入會員登入功能。

- **SideMenu.vue（側邊功能選單）**
  - 提供快速入口連結（例如，遊戲教學、活動區、公告等）。

- **CategoryTabs.vue（遊戲分類標籤）**
  - 呈現可點擊的遊戲類型分頁，讓用戶切換清單類別。

- **GameList.vue（遊戲清單）**
  - 根據目前所選分類，動態顯示對應的遊戲資料集，支援分頁或滾動式載入。

- **GameCard.vue（遊戲卡片）**
  - 展示單一遊戲標題、類型連結、簡易描述（可包含 “進入遊戲” 按鈕），不包含動畫或複雜圖示。

- **FooterInfo.vue（頁腳資訊條）**
  - 顯示聯絡資訊、平台條款、隱私政策與版權聲明。

***

### 遊戲 ICON
請幫我自動抓取 https://www.xin-stars.com/GameIntro/GAME_List/ 頁面所有遊戲 ICON（icon，圖標）圖片資源，需求如下：

1. 僅需遊戲對應的 ICON（不包含背景大圖、按鈕或裝飾圖）。

2. 提供每個 ICON 的原始圖片 URL。

3. 若可行，請自動下載並儲存為本地檔案並給出檔名對應列表（可選，或以 base64 形式呈現）。

4. ICON 請對應遊戲名稱，產出『遊戲名稱：ICON 圖片網址』或『遊戲名稱：base64 圖』清單。

5. 僅供 DEMO 專案內部使用，勿涉及商業用途。

6. 回答以 Markdown 表格格式。

7. 請分析並執行上述需求。
