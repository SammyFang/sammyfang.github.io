# Sammy Fang Personal Site

這是一個可直接部署到 GitHub Pages 的雙語個人專業網站。網站採用純靜態架構，部署內容位於 repository 根目錄。

## 維護原則

內容集中在一個資料檔：

- `data/site-data.js`

完整的非程式維護對照請看：

- `CONTENT_GUIDE.md`

一般情況下，只要修改這個檔案即可更新：

- 中英文首頁文案
- About / focus areas
- LinkedIn 經歷整理版
- 精選成果與專案
- Research / publications / working papers
- Speaking / workshops / media features
- Community leadership
- Media and features
- Education / awards / certifications / memberships
- Contact topics

不要為了新增一筆經歷或專案去改 `index.html` 或 `script.js`。`script.js` 只負責把資料渲染成頁面，`styles.css` 只負責視覺排版。

## 常用檔案

- `index.html`：載入字體、CSS、資料與渲染程式。通常不需要改。
- `data/site-data.js`：主要內容資料。最常改。
- `script.js`：通用渲染邏輯。只有新增全新區塊型態時才需要改。
- `styles.css`：版面、間距、顏色、響應式樣式。
- `assets/`：圖片、PDF 與視覺素材。換照片或履歷後，更新 `profile.image` 或 `profile.resumePdf`。

## 新增內容

### 新增工作經歷

到 `locales.en.experience.items` 與 `locales.zh.experience.items` 各新增一筆同樣結構的資料：

```js
{
  title: "Role title",
  organization: "Company",
  employment: "Full-time",
  period: "2026 - Present",
  location: "City · Hybrid",
  department: "Department",
  summary: "One sentence summary.",
  highlights: ["Short bullet", "Short bullet"],
  details: ["Optional detail"],
  tools: ["Tool", "Skill"]
}
```

### 新增邀訪、工作坊或媒體報導

演講與工作坊放在：

- `locales.en.speaking.items`
- `locales.zh.speaking.items`

媒體報導與公開介紹放在：

- `locales.en.media.items`
- `locales.zh.media.items`

這兩個區塊已經預留在頁面中，之後只要加資料就會自動顯示。

## 頁面架構

目前頁面採用直觀的單頁導覽：

- `Home`：首頁 hero 與個人定位
- `About`：關於摘要、履歷 PDF 按鈕、經歷、教育、證照、獎項、右側 contact
- `Portfolio`：精選成果與專案卡片
- `Research`：發表、presentation、working papers
- `邀訪/工作坊`：邀請演講、工作坊、媒體報導與公開介紹
- `Contact`：聯絡資訊與專業範圍

### 新增專案

代表性專案放在 `featured.items`；一般專案放在 `projects.items`。建議每個專案只保留：

- `title`
- `type`
- `description`
- `tags`
- `href`（可省略）

避免把 LinkedIn 長文直接貼進網站，必要時改成獨立 case study 頁面。

## 履歷 PDF

目前網站在 About 區塊提供履歷 PDF 按鈕。

如果之後要更換 PDF：

1. 將 PDF 放到 `assets/`
2. 在 `data/site-data.js` 更新 `profile.resumePdf`
3. 確認 About 區塊按鈕可以開啟該 PDF

## 本地預覽

這是純靜態網站，可直接開啟：

```text
index.html
```

若要用瀏覽器工具檢查桌機與手機截圖，可用 Playwright：

```bash
npx playwright screenshot --viewport-size=1440,1000 "file:///C:/path/to/sammyfang.github.io/index.html" output/playwright/home.png
```

## GitHub Pages 部署

已包含 `.github/workflows/deploy-github-pages.yml`。Repository 第一次設定：

1. GitHub repository -> Settings -> Pages
2. Source 選 `GitHub Actions`
3. 推送 `main` 分支或手動執行 workflow

workflow 會部署 repository 根目錄的靜態網站內容。
