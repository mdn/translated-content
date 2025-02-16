---
title: 如何新增圖片與多媒體
short-title: 新增多媒體
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

## 新增圖片

要新增圖片到文件，請先將圖片檔案放入文件所在的資料夾，然後在 `index.md` 文件中連結該圖片，可使用 [Markdown 圖片語法](https://github.github.com/gfm/#images) 或等效的 HTML `<img>` 元素。

讓我們來看一個範例：

1. 先建立一個新工作分支，並確保取得 `mdn` 遠端 `main` 分支的最新內容。

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # 再次執行 "yarn" 以確保你已安裝最新的 Yari 相依套件。
   yarn
   git checkout -b my-images
   ```

2. 將圖片新增到文件資料夾。本範例中，我們假設要將新圖片放入 `files/zh-TW/web/css` 資料夾。

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/zh-TW/web/css/
   ```

3. 對每張圖片執行 `filecheck` 指令進行檢查，如有問題，工具可能會提出警告。
   更多詳情請參閱[壓縮圖片](#compressing_images)章節。

   ```bash
   yarn filecheck files/zh-TW/web/css/my-cool-image.png
   ```

4. 在文件中連結圖片時，可使用 Markdown 圖片語法，並在中括號內提供[描述性 `alt` 屬性文字](/zh-TW/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives)來說明圖片內容，或是在 `files/zh-TW/web/css/index.md` 中使用 {{htmlelement("img")}} 元素並加入 `alt` 屬性：

   ```md
   ![我的酷炫圖片](my-cool-image.png)
   <img src="my-cool-image.png" alt="我的酷炫圖片" />
   ```

5. 將所有刪除、新增及修改的檔案加入 Git 暫存區，然後提交變更，並推送分支至你的 Fork：

   ```bash
   git add files/zh-TW/web/css/my-cool-image.png files/zh-TW/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. 現在你已準備好建立
   [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) 來提交你的變更。

## 給圖片加上替代文字

所有圖片（無論 `![]` 還是 `<img>`）都必須包含 `alt` 文字。`alt` 屬性內容應簡短，並提供圖片傳達的所有相關資訊。撰寫圖片描述時，請思考圖片代表的關鍵資訊，以及如何向能閱讀頁面內容卻無法載入圖片的使用者傳達這些資訊。

請確保圖片的替代文字符合其使用情境。

假設有一張狗狗 Fluffy 的照片，顯示在 Yuckymeat 狗飼料的評論旁邊，「alt="Fluffy"」就很適當。

如果相同照片出現在 Fluffy 的動物救援領養頁面，則應提供對潛在領養人更有幫助的資訊，像是「alt="Fluffy，一隻三色短毛梗犬，嘴裡叼著一顆網球。"」；在這種情境下，Fluffy 的體型和品種可能已在上下文裡提到，因此不必重覆這些資訊。

請避免過多細節，例如 Fluffy 是在室內還是室外，或是它戴著紅色項圈還是藍色牽繩，這些資訊對潛在認養人來說並不重要。

對於螢幕截圖，請描述從圖片中能學到的資訊，而不是逐一說明圖片的內容，並省略使用者不需要或已經知道的資訊。例如，在一篇關於如何變更 Bing 設定的頁面中放了一張包含 Bing 搜尋結果的螢幕截圖：

- `alt` 文字不應提及搜尋關鍵字或搜尋結果數量，因為這不是圖片的重點。
- `alt` 文字應限於當前主題，例如：「alt="設定圖示位於搜尋欄下方的導覽列中。"」
- `alt` 文字不用提及「螢幕截圖」或「Bing」，因為使用者已經知道這是關於 Bing 設定的頁面。

Markdown 和 HTML 語法：

```md-nolint
![<alt-文字>](<圖片網址>)
<img alt="<alt-文字>" src="<圖片網址>">
```

範例：

```md
![OpenWebDocs 標誌：書蟲卡爾](carle.png)
<img alt="OpenWebDocs 標誌：書蟲卡爾" src="carle.png" />
```

盡管純裝飾性的圖片應該將 `alt` 的值設為空字串（`""`），但在 MDN 文件中，圖片應具備實際用途，因此必須提供非空字串的描述。關於 `alt` 文字的撰寫建議，請參閱 [alt 決策樹](https://www.w3.org/WAI/tutorials/images/decision-tree/)，了解如何依照不同情境正確使用 `alt` 屬性。

## 壓縮圖片

當你在 MDN Web 文件上新增圖片時，應確保圖片已壓縮至最小尺寸（但不影響品質），以減少讀者的下載大小。事實上，若沒這麼做，我們的持續整合（Continuous Integration，簡寫 CI）流程會失敗，建置結果也會警告你某些圖片太大了。

壓縮圖片最佳方法是使用內建壓縮工具。你可以透過 `filecheck` 指令搭配 `--save-compression` 選項來適當壓縮圖片；此選項會盡可能壓縮圖片，並以壓縮後的版本取代原始檔案。

例如：

```bash
yarn filecheck files/zh-TW/web/css/my-cool-image.png --save-compression
```

## 新增影片

MDN Web 文件並非以影片為主的網站，但在某些情境下，影片內容可作為文章的一部分來輔助說明。本章節將討論何時適合在文章中加入影片，並提供一些如何以低預算製作簡單有效的影片的建議。

在技術文件（特別是參考資料與進階指南）中使用影片的做法存在一些爭議，以下列出幾個主要問題：

- 影片是線性內容。人們閱讀線上文件時通常不會按照線性方式從頭讀到尾，_而是掃描重點內容_；影片則很難掃描，它迫使觀眾必須從頭看到尾來獲取資訊。

- 影片的資訊密度低於文字。觀看影片來理解某個概念通常比直接閱讀相同文字說明還費時。

- 影片的檔案較大，因此比純文字內容更吃效能。

- 影片的親和性較差：相較文字，影片的製作成本更高，尤其是進行在地化或讓螢幕閱讀器使用者能有效使用時，成本會更高。

- 延續前述看法，影片比文字更難編輯、更新與維護。

> [!NOTE]
> 當你決定製作影片時，也應記住這些問題，這樣你就能嘗試減輕它們帶來的不便。

有很多熱門影音平台提供大量教學影片。MDN Web 文件雖然不是以影片為主的網站，但在某些情境下，影片仍有其價值。

我們最常用影片說明一些很難用文字簡述的操作步驟或多步驟工作流程，像是「_先執行這個，再點擊那個，然後就會發生這個變化_」。當描述涉及多個應用程式或視窗、包含圖形使用者介面（Graphical User Interface，簡寫 GUI）互動，且難以用純文字描述的操作時，影片更顯方便，像是「_現在請點擊位於左上角，看起來有點像鴨子的按鈕_」。

在這些情境下，直接**展示**內容往往更有效。

<!-- 我們最常使用影片來說明 [Firefox 開發者工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html) 的功能。-->

## 影片內容指南

MDN Web 文件的影片內容應符合以下原則：

- **簡短**：盡量控制在 30 秒內，理想情況下不超過 20 秒。這能確保影片不會過度佔用讀者的注意力。
- **簡單**：保持操作流程簡單，控制在 2 到 4 個明確步驟內。這能讓觀眾更容易理解與跟隨。
- **無聲**：雖然音訊能讓影片更具吸引力，但製作音訊會大幅增加工作量。此外，解說內容會讓影片變長，並提高在地化的成本（不管金錢還是時間）。

若要解釋較複雜的概念，可以結合短片、螢幕截圖與文字內容。文字能強化影片傳遞的訊息，讓使用者能自由選擇要依賴文字還是影片來學習。

參考[使用動畫檢查工具](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector)來了解一個好例子。

此外，請考慮以下建議：

- 影片最終會上傳至 YouTube，然後再嵌入 MDN。建議使用 16:9 的{{glossary("長寬比")}}，以確保影片能完整填滿播放畫面，避免上下或左右出現黑邊。例如，你可以選擇 1024×576、1152×648 或 1280×720 的解析度。
- 影片應以 HD（高畫質）錄製，以確保上傳後的畫質清晰。
- 在錄製開發者工具（DevTools）相關影片時，建議選擇與網頁內容對比明顯的主題。例如，若範例網頁為淺色主題，可選擇深色主題的開發者工具，以便區分介面，使內容更清楚。
- 錄製開發者工具相關影片時，盡量放大開發者工具介面，以確保重點內容清楚可見，且整體畫面仍然可讀。
- 確保滑鼠游標不遮擋你要展示的重點內容。
- 考慮是否設定螢幕錄製工具，使其顯示滑鼠點擊的視覺指示，使觀眾更容易理解。

## 影片工具指南

你需要一款工具來錄製影片。這類工具免費到昂貴、簡單到進階應有盡有。若你已經有影片製作經驗，那太好了！如果沒有，我們建議從簡單的工具開始，等你對製作影片產生興趣並想製作更具吸引力的作品時，再逐步學習進階工具。

下表列出了一些適合初學者的推薦錄製工具：

| 工具名稱                  | 作業系統              | 費用 | 是否具備後製功能？     |
| ------------------------- | --------------------- | ---- | ---------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | 免費 | 是                     |
| CamStudio                 | Windows               | 免費 | 限制較多               |
| Camtasia                  | Windows, macOS        | 高價 | 是                     |
| QuickTime Player          | macOS                 | 免費 | 無，僅提供簡單錄製功能 |
| ScreenFlow                | macOS                 | 中價 | 是                     |
| Kazam                     | Linux                 | 免費 | 基本功能               |

### QuickTime Player 使用技巧

如果你使用 macOS，系統內建的 QuickTime Player 可用來錄製螢幕。該工具的錄製步驟非常簡單：

1. 從主選單選擇*檔案*>_新螢幕錄製_。
2. 在*螢幕錄製*視窗中，點擊錄製按鈕（紅色圓形按鈕）。
3. 拖曳矩形來選擇要錄製的螢幕範圍。
4. 按下*開始錄製*按鈕。
5. 執行你想要錄製的操作。
6. 按下*停止*按鈕。
7. 從主選單選擇*檔案*>_匯出為..._>_1080p_，將影片儲存為高畫質版本。

### 其它資源

- [如何在 ScreenFlow 錄製影片中加入自訂標註](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## 影片製作流程

以下各小節說明建立影片並新增至 MDN Web 文件的一般步驟。

### 準備

首先，規劃你要錄製的流程，並考慮最佳的開始與結束點。

確保桌面背景與瀏覽器設定檔保持乾淨。規劃瀏覽器視窗的大小與位置，尤其當使用多個視窗時。

詳細規劃錄製內容，並在正式錄製前多練習幾次操作步驟：

- 不要從流程中間開始錄製，請確保觀眾能理解你的操作脈絡。例如，在錄製開發者工具相關影片時，建議先開啟開發者工具，讓觀眾有明確的起點。

- 放慢操作步調，使操作明顯且易於理解。每當執行某個操作（例如點擊圖示）時，應該有意識地放慢速度，使其容易辨識，例如：

  - 將滑鼠移至圖示上方。
  - 根據需要，突出顯示或放大該區域（視情況決定是否需要）。
  - 停頓片刻，讓觀眾有時間注意到變化。
  - 點擊圖示。

- 規劃使用者介面中各區域的縮放等級。並非所有觀眾都能以高畫質觀看你的影片。你可以在後製時放大特定部分，但事先在應用程式內適當縮放會更理想。

> [!NOTE]
> 避免過度放大，否則使用者介面可能變得難以辨識或顯得不自然。

### 錄製

錄製操作流程時，請確保過程順暢穩定。在關鍵時刻（例如即將點擊按鈕時）稍微停頓一兩秒，並確保游標不會遮擋你要展示的重要圖示或文字。

錄製結束時，記得再停留一兩秒，好讓觀眾清楚看到操作結果。

> [!NOTE]
> 若你使用的是 QuickTime Player 這種簡易錄製工具，且無法進行後製，請事先調整視窗大小，以確保錄製範圍合適。在 Firefox 開發者工具中，你可以使用[標尺工具](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html)來確保視口符合錄製的長寬比。

### 後製

在後製過程中，你可以突顯影片的關鍵時刻。這通常包含幾種手法，並且可以組合使用，例如：

- 放大螢幕上的特定區域。
- 模糊背景以突顯重要內容。

請特別強調操作流程中的關鍵步驟，例如點擊特定圖示或輸入特定網址等細節較難看清的地方。建議突顯效果維持 1 到 2 秒，並在開頭與結尾加入短暫的過渡效果（約 200 到 300 毫秒）。

請適度使用這些效果，避免讓影片充斥過多縮放與切換，否則觀眾可能感到不適，以致影響觀看體驗。

如果需要，請裁剪影片以符合適當的長寬比。

### 上傳

目前，MDN Web 文件的影片須先上傳至 YouTube，例如 [mozhacks](https://www.youtube.com/user/mozhacks/videos) 頻道，才能嵌入到頁面中。若你沒有適合的上傳管道，請聯絡 MDN Web 文件團隊成員協助上傳。

> [!NOTE]
> 如果影片脫離頁面內容後變得沒有意義（例如短影片通常是這種情況），請將其設為「不公開」。

### 嵌入

影片上傳後，你可以使用 [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs) 巨集將影片嵌入頁面中。在想要顯示影片的位置插入以下語法：

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

此巨集的唯一參數是影片網址結尾的字串，而不是完整的網址。例如，若影片網址為 `https://www.youtube.com/watch?v=ELS2OOUvxIw`，則對應的巨集呼叫方式如下：

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
