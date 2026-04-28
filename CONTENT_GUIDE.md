# 網站內容維護指南

這個版本的版面不用動。日後只改兩個地方：

- 文字、連結、圖片路徑：`data/site-data.js`
- 圖片與媒體檔案：`assets/`

不要為了改文字去動 `index.html`、`script.js`、`styles.css`。那三個檔案分別負責載入、渲染、排版。

## 內容修改位置

`data/site-data.js` 裡分成三層：

- `profile`：全站共用資料，例如姓名、信箱、LinkedIn、GitHub、ORCID、首頁照片。
- `locales.en`：英文版內容。
- `locales.zh`：中文版內容。

中英文網站要一致時，記得同時改 `locales.en` 與 `locales.zh`。

## 常改欄位對照

| 要改的內容 | 修改位置 |
| --- | --- |
| 姓名、信箱、LinkedIn、GitHub、ORCID | `profile` |
| 首頁大頭照 | `profile.image` |
| 履歷 PDF 按鈕連結 | `profile.resumePdf` |
| 首頁一句定位與標籤 | `locales.zh.hero`、`locales.en.hero` |
| 關於摘要 | `about.paragraphs` |
| 工作經歷 | `experience.items` |
| 學歷 | `education.schools` |
| 獎項 | `education.awards` |
| 證照 | `education.certifications` |
| 作品集精選 | `featured.items` |
| 一般專案 | `projects.items` |
| 研究發表 | `research.publications` |
| 進行中研究 | `research.workingPapers` |
| 邀請演講 / 工作坊 | `speaking.items` |
| 媒體報導 / 公開介紹 | `media.items` |
| 聯絡區專業範圍 | `contact.body`、`contact.topics` |
| 音訊節目 / podcast | `podcast` |

## 新增、修改、刪除文字

修改文字：直接改對應欄位的字串。

新增卡片：在對應的 `items` 陣列中複製一筆 `{ ... }`，貼到同區塊最後，再改 `title`、`type`、`description`、`tags`、`href`、`image`。

刪除卡片：刪除完整一筆 `{ ... }`，包含後面的逗號。中英文兩邊都要刪，否則切換語言時會不一致。

## 圖片與媒體

所有可被網站顯示的圖片放在：

```text
assets/
```

使用方式：

1. 把圖片放進 `assets/`。
2. 在內容項目中把 `image` 改成相對路徑，例如：

```js
image: "./assets/my-event-photo.jpg",
```

3. 如果照片人物被裁到，可以加或調整：

```js
imagePosition: "center 24%",
```

建議圖片比例：

- 首頁頭像：直式，約 4:5。
- 作品、研究、邀訪、媒體卡片：橫式，約 16:9。
- 檔名使用英文、數字、連字號，避免空白與特殊符號。

## 連結

所有可點擊的外部連結放在 `href` 欄位，或全站共用的 `profile` 欄位。

常見格式：

```js
href: "https://example.com",
href: "mailto:yfang097@ucr.edu",
```

如果某個卡片暫時不要放連結，可以把 `href` 那一行刪掉。Podcast 若還不想公開，保持：

```js
href: "",
```

About 區塊的履歷 PDF 按鈕使用：

```js
resumePdf: "./assets/sammy-fang-resume.pdf",
```

若要換履歷檔，先把新的 PDF 放進 `assets/`，再更新 `profile.resumePdf`。

## Podcast 放法

Podcast 現在放在聯絡區下方，定位是補充紀錄，不會搶首頁與作品集。設計上已使用 YouTube Podcast 樣式的小卡片。

修改位置：

```js
podcast: {
  title: "YouTube Podcast",
  status: "不定期更新",
  body: "...",
  action: "前往 YouTube Podcast",
  href: "https://www.youtube.com/podcasts",
}
```

正式上線後，把 `href` 改成你的 YouTube Podcast、playlist 或 channel 連結即可。

## 修改後檢查

修改內容後先開：

```text
index.html
```

再檢查：

- 中文 / 英文切換是否都正常。
- 圖片是否顯示。
- 卡片文字是否太長。
- 外部連結是否能開。
- 手機寬度下是否沒有文字擠壓或重疊。
