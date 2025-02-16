---
title: 如何建立、編輯、移動或刪除頁面
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

本篇文章說明如何建立、移動、刪除或編輯頁面。在執行這些操作之前，建議先參閱我們的[我們撰寫的內容](/zh-TW/docs/MDN/Writing_guidelines/What_we_write)，確認是否應該進行這些變更，並在 MDN Web 文件的[溝通管道](/zh-TW/docs/MDN/Community/Communication_channels)中與團隊討論後再開始。

## 建立頁面

MDN Web 文件上的所有頁面皆以 Markdown 格式撰寫。內容存放在 `index.md` 檔案中，並置於對應獨立目錄內，目錄名稱即為頁面名稱。例如，若要為 CSS 屬性 `align-content` 建立新的參考頁面，應在 `zh-TW/web/css` 目錄下建立名為 `align-content` 的資料夾，並在其中建立 `index.md` 檔案。

> [!NOTE]
> 目錄名稱與頁面的 slug 略有不同，特別是 slug 遵循句子大小寫格式（sentence casing）。

MDN Web 文件有許多不同的[頁面類型](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Page_types)，每種類型都有特定結構與對應頁面範本，你可以直接複製範本來加快撰寫。

每個文件的 `index.md` 檔案必須以 Front Matter 開頭，其中定義 `title`（標題）、`slug`（頁面路徑）與 `page-type`（頁面類型）。這些 Front Matter 設定可從前述頁面範本中取得，或是你也可以參考類似文件的 `index.md` 來確保格式正確。

建立新頁面的標準步驟如下：

1. 建立一個全新分支，並確保內容是最新的。

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # 再次執行 "yarn" 確保已安裝最新的 Yari 相依套件。
   yarn
   git checkout -b my-add
   ```

2. 建立一個或多個新文件目錄，並在各自目錄內新增 `index.md` 檔案。

3. 新增並提交你的變更，然後推送分支至你的 Fork 倉儲。

   ```bash
   git add files/zh-TW/folder/you/created
   git commit -m "適當描述你的變更"
   git push -u origin my-add
   ```

4. 建立 Pull Request。

## 移動頁面

移動一個或多個文件乃至整個文件樹相當簡單，因為我們創造了一個專門指令來處理所有細節：

```bash
yarn content move <from-slug> <to-slug> [locale]
```

你只須指定欲移動文件的 slug（例如 `Web/HTTP/Authentication`），以及新位置的 slug（例如 `Web/HTTP/Auth`）；可選擇性地再指定文件語系（預設為 `en-US`）。

如果要移動的文件包含子文件（亦即它是一棵文件樹），`yarn content move` 指令將一併移動整個樹狀結構。

舉例來說，你想將 `/zh-TW/Web/HTTP/Authentication` 整個文件樹移動至 `/zh-TW/Web/HTTP/Auth`，你可以按照以下步驟操作：

1. 建立一個新分支來處理這次變更。

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # 再次執行 "yarn" 確保已安裝最新的 Yari 相依套件。
   yarn
   git checkout -b my-move
   ```

2. 執行移動操作（這將會刪除、修改現有文件，並建立新的文件）。

   ```bash
   yarn content move Web/HTTP/Authentication Web/HTTP/Auth
   ```

3. 文件移動後，需要更新其它文件中對此的引用。可使用以下指令一次更新所有引用：

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. 新增並提交所有刪除、新增及修改的文件，然後推送至你的 Fork 倉儲。

   ```bash
   git add .
   git commit -m "Move Web/HTTP/Authentication to Web/HTTP/Auth"
   git push -u origin my-move
   ```

5. 建立 Pull Request。

> [!NOTE]
> 指令 `yarn content move` 會在 `_redirects.txt` 檔案中新增必要的重新導向，讓舊位置的網址自動重新導向至新位置。請不要手動編輯 `_redirects.txt` 檔案，這可能導致不易察覺的錯誤。如果你需要新增重新導向但不移動文件，請透過 [MDN Web 文件溝通管道](/zh-TW/docs/MDN/Community/Communication_channels) 與 MDN Web 文件團隊討論。

## 刪除頁面

MDN Web 文件上的文件只在特殊情況下才能刪除。若你在考慮刪除頁面，請先在 [MDN Web 文件聊天室](/zh-TW/docs/MDN/Community/Communication_channels#chat_rooms)與 MDN Web 文件團隊討論。

刪除一個或多個文件乃至整個文件樹，就跟移動頁面一樣簡單，因為我們創造了一個專門指令來處理所有細節：

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> 請使用 `yarn content delete` 指令來刪除 MDN Web 文件的頁面，**不要** 直接從倉儲中刪除它們的目錄。`yarn content delete` 指令還會處理其它必要更動，例如更新 `_wikihistory.json` 檔案。

你只須指定欲刪除文件的 slug（例如 `Web/HTTP/Authentication`），可選擇性地再指定文件語系（預設為 `en-US`）。

如果要刪除的文件包含子文件（亦即它是一棵文件樹），則須使用 `-r, --recursive` 選項，否則指令會失敗。

舉例來說，若要刪除整個 `/zh-TW/Web/HTTP/Authentication` 文件樹，請按照以下步驟操作：

1. 建立一個新分支來處理這次變更。

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # 再次執行 "yarn" 以確保已安裝最新的 Yari 相依套件。
   yarn
   git checkout -b my-delete
   ```

2. 執行刪除操作。

   ```bash
   yarn content delete Web/HTTP/Authentication --recursive
   ```

3. 新增重新導向。目標頁面可以是外部網址或 MDN Web 文件內的另一個頁面。

   ```bash
   yarn content add-redirect /zh-TW/path/of/deleted/page /zh-TW/path/of/target/page
   ```

4. 提交所有刪除的文件，然後推送至你的 Fork 倉儲。

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. 建立 Pull Request。

> [!NOTE]
> 如果要刪除的頁面 slug 包含特殊字元，請使用引號，如下所示：
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

移除 MDN Web 文件的內容通常也會影響其它現有內容，因為許多文章彼此相互連結，因此被刪除的內容可能仍會被其它地方引用。新增重新導向可以降低刪除內容的影響，但**最佳實踐**仍然是編輯相關內容，以反映這些變更，並將內容編輯與刪除請求一起提交。

## 編輯現有頁面

要編輯頁面，你需要在 [content 倉儲](https://github.com/mdn/content)中找到該頁面的原始檔案。最簡單的方法是先前往要編輯的頁面，然後滾動到底部，點擊「View the source on GitHub」連結，即可跳轉至 GitHub 上的對應原始碼。

### 預覽變更

如果你在本機編輯頁面，可以透過 `yarn start` 指令來預覽變更。在內容倉儲目錄中執行該指令後，打開瀏覽器並前往 `localhost:5042`，然後找到該頁面進行預覽。你可以在搜尋框輸入標題來快速找到頁面。當你編輯原始碼時，瀏覽器中的預覽頁面將即時更新。

### 附加檔案

要將檔案附加到你的文章，只須將該檔案放入與文章 `index.md` 相同的目錄，然後在頁面中引用該檔案，通常使用 {{htmlelement("a")}} 元素來加入連結。
