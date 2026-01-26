---
title: 如何建立、編輯、移動或刪除頁面
short-title: 建立、編輯、移動或刪除頁面
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

本文描述如何建立、移動、刪除或編輯頁面。在進行這些操作之前，建議先查閱[我們撰寫的內容](/zh-TW/docs/MDN/Writing_guidelines/What_we_write)，以確認是否應該進行這些操作，並在 MDN Web Docs 的[溝通管道](/zh-TW/docs/MDN/Community/Communication_channels)中與團隊討論。

## 建立頁面

MDN Web Docs 上的所有頁面均以 Markdown 格式撰寫。內容存放於名為 `index.md` 的檔案中，該檔案位於其專屬的目錄中。目錄名稱代表頁面的名稱。例如，如果 `align-content` 是一個新的 CSS 屬性，且你想為其建立一個新的參考頁面，你需要在 `en-us/web/css` 中建立一個名為 `align-content` 的資料夾，並在其中建立一個名為 `index.md` 的檔案。

> [!NOTE]
> 目錄名稱與頁面 slug 略有不同。最明顯的是，slug 遵循句子大小寫格式。

有許多不同的[頁面類型](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Page_types)，它們具有特定的結構和支援的頁面範本，你可以複製這些範本來開始撰寫。

文件的 `index.md` 檔案必須以前置內容開頭，定義 `title`、`slug` 和 `page-type`。所有這些前置內容資訊都可以在上述的頁面範本中找到。此外，你也可以查閱類似文件中的 `index.md`，並參考其前置內容，這可能會對你有所幫助。

建立頁面的基本步驟如下：

1. 建立一個全新、最新的分支進行工作。

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # 再次執行 "yarn" 以確保你已安裝最新的 Yari 相依性。
   yarn
   git checkout -b my-add
   ```

2. 建立一個或多個新的文件資料夾，每個資料夾內都有自己的 `index.md` 檔案。

3. 新增並提交你的新檔案，然後將你的新分支推送到你的 fork。

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "適當描述你的更改"
   git push -u origin my-add
   ```

4. 建立你的拉取請求。

## 移動頁面

移動一個或多個文件或整個文件樹非常簡單，因為我們已經創建了一個特殊的指令來幫助你處理細節：

```bash
yarn content move <from-slug> <to-slug> [locale]
```

你只需指定你想移動的現有文件的 slug（例如 `Web/HTTP/Guides/Authentication`），以及其新位置的 slug（例如 `Web/HTTP/Guides/Auth`），也可以選擇性地加上現有文件的語言（預設為 `en-US`）。

如果你想移動的現有文件有子文件（即它代表一個文件樹），`yarn content move` 指令將移動整個文件樹。

例如，假設你想將整個 `/en-US/Web/HTTP/Guides/Authentication` 文件樹移動到 `/en-US/Web/HTTP/Guides/Auth`，你需要執行以下步驟：

1. 建立一個全新的分支進行工作。

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # 再次執行 "yarn" 以確保你已安裝最新的 Yari 相依性。
   yarn
   git checkout -b my-move
   ```

2. 執行移動操作（這將刪除和修改現有檔案，並建立新檔案）。

   ```bash
   yarn content move Web/HTTP/Guides/Authentication Web/HTTP/Guides/Auth
   ```

3. 移動檔案後，我們需要更新其他內容檔案中對這些檔案的引用。使用以下指令一次性自動更新所有引用：

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. 新增並提交所有刪除、建立和修改的檔案，然後將你的分支推送到你的 fork。

   ```bash
   git add .
   git commit -m "將 Web/HTTP/Guides/Authentication 移動到 Web/HTTP/Guides/Auth"
   git push -u origin my-move
   ```

5. 建立你的拉取請求。

> [!NOTE]
> `yarn content move` 指令會在 `_redirects.txt` 檔案中新增必要的重新導向，讓舊位置會重新導向到新位置。請勿手動編輯 `_redirects.txt` 檔案！這樣很容易產生錯誤。如果需要新增重新導向但不移動檔案，請在 [MDN Web Docs 溝通管道](/zh-TW/docs/MDN/Community/Communication_channels)中與 MDN Web Docs 團隊討論。

## 刪除頁面

只有在特殊情況下，文件才應從 MDN Web Docs 中移除。如果你正在考慮刪除頁面，請先在 [MDN Web Docs 聊天室](/zh-TW/docs/MDN/Community/Communication_channels#聊天室)中與 MDN Web Docs 團隊討論。

刪除一個或多個文件或整個文件樹非常簡單，就像移動頁面一樣，因為我們已經創建了一個特殊的指令來幫助你處理細節：

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> 你需要使用 `yarn content delete` 指令來刪除 MDN Web Docs 中的頁面。請勿僅從 repo 中刪除其目錄。`yarn content delete` 指令還會處理其他必要的更改，例如更新 `_wikihistory.json` 檔案。

你只需指定你想刪除的現有文件的 slug（例如 `Web/HTTP/Guides/Authentication`），也可以選擇性地加上現有文件的語言（預設為 `en-US`）。

如果你想刪除的現有文件有子文件（即它代表一個文件樹），你必須同時指定 `-r, --recursive` 選項，否則指令將失敗。

例如，如果你想刪除整個 `/en-US/Web/HTTP/Guides/Authentication` 文件樹，你需要執行以下步驟：

1. 建立一個全新的分支進行工作。

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # 再次執行 "yarn" 以確保你已安裝最新的 Yari 相依性。
   yarn
   git checkout -b my-delete
   ```

2. 執行刪除操作。

   ```bash
   yarn content delete Web/HTTP/Guides/Authentication --recursive
   ```

3. 新增重新導向。目標頁面可以是外部 URL 或 MDN Web Docs 上的另一個頁面。

   ```bash
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. 新增並提交所有刪除的檔案，然後將你的分支推送到你的 fork。

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. 建立你的拉取請求。

> [!NOTE]
> 如果你想刪除的頁面 slug 包含特殊字元，請將其包含在引號中，例如：
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

從 MDN Web Docs 中移除內容不可避免地會導致更新現有內容。由於許多文章會連結到其他文章，移除的內容可能會在其他地方被引用。新增重新導向將減輕移除內容的影響；然而，最佳做法是編輯內容以反映更改，並將內容編輯與移除的拉取請求一起提交。

## 編輯現有頁面

要編輯頁面，你需要在我們的[內容](https://github.com/mdn/content)倉儲中找到頁面原始碼。找到它的最簡單方法是前往你想編輯的頁面，移動到頁面底部，然後點擊「View this page on GitHub」連結。

### 預覽更改

如果你在本地編輯頁面並想查看更改的效果，可以進入內容倉儲資料夾，執行 CLI 指令 `yarn start`，然後在瀏覽器中打開 `localhost:5042`，前往頁面並查看它。在搜尋框中輸入標題可以輕鬆找到它。預覽的頁面會隨著你編輯原始碼而在瀏覽器中更新。

### 附加檔案

若要將檔案附加到文章中，只要將檔案放在與文章的 `index.md` 檔案相同的目錄。通常透過 {{htmlelement("a")}} 元素將檔案加入頁面中。
