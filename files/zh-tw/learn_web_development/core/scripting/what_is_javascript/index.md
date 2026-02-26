---
title: 什麼是 JavaScript？
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

歡迎來到 MDN 的 JavaScript 新手課程！在本文中，我們將從高層次的角度探討 JavaScript，回答諸如「它是什麼？」和「你能用它做什麼？」等問題，並確保你清楚了解 JavaScript 的用途。

<table>
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>了解 <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a> 和 <a href="/zh-TW/docs/Learn_web_development/Core/Styling_basics">CSS 基礎</a>。</td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>
        <ul>
          <li>什麼是 JavaScript，以及它如何融入網站。</li>
          <li>你可以用 JavaScript 做什麼。</li>
          <li>將 JavaScript 加入網頁。</li>
          <li>在 JavaScript 中撰寫註解。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 高層次定義

JavaScript 是一種腳本或程式設計語言，可讓你實作網頁的複雜功能——每當網頁不只是靜靜地顯示靜態訊息供你觀看，而是顯示即時的內容更新、互動式地圖、動畫 2D/3D 圖形、滾動的影片點唱機等時——你幾乎可以肯定 JavaScript 參與其中。它是標準 Web 技術三層蛋糕中的第三層，其中兩層（[HTML](/zh-TW/docs/Learn_web_development/Core/Structuring_content) 和 [CSS](/zh-TW/docs/Learn_web_development/Core/Styling_basics)）我們已在學習區的其他部分更詳細地介紹過。

![標準 Web 技術的三層；HTML、CSS 和 JavaScript](cake.png)

- {{glossary("HTML")}} 是我們用來結構化和賦予 Web 內容意義的標記語言，例如定義段落、標題和資料表，或在頁面中嵌入圖片和影片。
- {{glossary("CSS")}} 是一種樣式規則語言，我們用它來為 HTML 內容套用樣式，例如設定背景顏色和字體，以及將內容排版成多欄。
- {{glossary("JavaScript")}} 是一種腳本語言，可讓你建立動態更新的內容、控制多媒體、製作圖像動畫，以及幾乎所有其他事情。（好吧，不是所有事情，但用幾行 JavaScript 程式碼就能達成的效果令人驚嘆。）

這三層完美地相輔相成。讓我們以一個按鈕為例。我們可以用 HTML 來標記它，賦予其結構和目的：

```html live-sample___string-concat-name
<button type="button">玩家 1：Chris</button>
```

![顯示「玩家 1：Chris」但沒有樣式的按鈕](just-html.png)

然後我們可以加入一些 CSS 來讓它看起來更美觀：

```css live-sample___string-concat-name
button {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;
}
```

![顯示「玩家 1：Chris」且有樣式的按鈕](html-and-css.png)

最後，我們可以加入一些 JavaScript 來實作動態行為：

```js live-sample___string-concat-name
function updateName() {
  const name = prompt("請輸入新名稱");
  button.textContent = `玩家 1：${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

你可以點擊「Play」在 MDN Playground 中查看和編輯範例。試著點擊文字標籤看看會發生什麼事。

{{EmbedLiveSample('string-concat-name', , '80', , , , , 'allow-modals')}}

JavaScript 能做的遠不止於此——讓我們更詳細地探討一下。

> [!NOTE]
> 在繼續之前，何不在這個早期階段就透過 Scrimba 的挑戰來親自動手試試看呢？請查看 [Render a welcome message](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN 學習夥伴_](/zh-TW/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>。如果你不知道如何撰寫這段程式碼，完全不用擔心；你可以試著在網路上搜尋答案，或在 scrim 的最後查看解答。

## 所以它到底能做什麼？

核心的用戶端 JavaScript 語言包含一些常見的程式設計功能，可讓你做以下事情：

- 將有用的值儲存在變數中。例如，在上面的範例中，我們要求輸入一個新名稱，然後將該名稱儲存在名為 `name` 的變數中。
- 對文字片段（在程式設計中稱為「字串」）進行操作。在上面的範例中，我們將字串「玩家 1：」與 `name` 變數連接起來，以建立完整的文字標籤，例如「玩家 1：Chris」。
- 回應網頁上發生的特定事件來執行程式碼。我們在上面的範例中使用了 {{domxref("Element/click_event", "click")}} 事件來偵測標籤何時被點擊，然後執行更新文字標籤的程式碼。
- 還有更多！

然而，更令人興奮的是建立在用戶端 JavaScript 語言之上的功能。所謂的**應用程式介面**（**API**）為你的 JavaScript 程式碼提供了額外的超能力。

API 是現成的程式碼建構區塊集合，讓開發者能夠實作原本很難或不可能實作的程式。它們對程式設計的作用，就像現成的家具套件對居家建築的作用一樣——拿現成的裁切好的板子用螺絲組裝成書架，遠比自己設計、尋找合適的木材、將所有板子裁切成正確的尺寸和形狀、找到合適尺寸的螺絲，*然後*再把它們組裝成書架要容易得多。

它們通常分為兩類。

![兩種類型的 API；第三方 API 顯示在瀏覽器旁邊，而瀏覽器 API 則在瀏覽器內部](browser.png)

**瀏覽器 API** 內建於你的 Web 瀏覽器中，能夠揭露周圍電腦環境的資料，或執行有用的複雜操作。例如：

- [DOM（文件物件模型）API](/zh-TW/docs/Web/API/Document_Object_Model) 允許你操作 HTML 和 CSS，建立、移除和變更 HTML，動態地為你的頁面套用新樣式等。每當你在頁面上看到彈出視窗，或顯示一些新內容（如我們在上面的簡單示範中所見），那就是 DOM 在作用。
- [地理位置 API](/zh-TW/docs/Web/API/Geolocation_API) 可擷取地理訊息。這就是 [Google 地圖](https://www.google.com/maps) 如何能夠找到你的位置並在地圖上標示出來的方式。
- [Canvas](/zh-TW/docs/Web/API/Canvas_API) 和 [WebGL](/zh-TW/docs/Web/API/WebGL_API) API 允許你建立動畫 2D 和 3D 圖形。人們正在使用這些 Web 技術做一些令人驚嘆的事情——請參見 [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) 和 [webglsamples](https://webglsamples.org/)。
- [音訊和影片 API](/zh-TW/docs/Web/Media/Guides/Audio_and_video_delivery) 如 {{domxref("HTMLMediaElement")}} 和 [WebRTC](/zh-TW/docs/Web/API/WebRTC_API) 允許你對多媒體做一些非常有趣的事情，例如直接在網頁中播放音訊和影片，或從你的網路攝影機擷取影片並顯示在別人的電腦上（試試我們簡單的 [Snapshot 示範](https://chrisdavidmills.github.io/snapshot/) 來了解一下）。

**第三方 API** 預設並未內建於瀏覽器中，你通常需要從網路上的某處取得它們的程式碼和訊息。例如：

- [Bluesky API](https://docs.bsky.app/) 允許你做一些事情，例如在你的網站上顯示你最新的貼文。
- [Google Maps API](https://developers.google.com/maps/) 和 [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) 允許你在你的網站中嵌入自訂地圖，以及其他類似的功能。

> [!NOTE]
> 這些 API 比較進階，我們不會在本模組中涵蓋任何這些內容。你可以在我們的[用戶端 Web API 模組](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs)中找到更多相關資訊。

還有更多可用的 API！不過，先別太興奮。學習 JavaScript 24 小時後，你還無法建立下一個 Facebook、Google 地圖或 Instagram——還有很多基礎知識需要先學習。這就是你來這裡的原因——讓我們繼續吧！

## JavaScript 在你的頁面上做什麼？

在這裡，我們將實際開始看一些程式碼，並在過程中探討當你在頁面中執行一些 JavaScript 時，實際上發生了什麼。

讓我們簡要回顧一下在瀏覽器中載入網頁時會發生什麼（這在我們的[什麼是 CSS？](/zh-TW/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html)文章中首次討論）。當你在瀏覽器中載入網頁時，你正在一個執行環境（瀏覽器分頁）中執行你的程式碼（HTML、CSS 和 JavaScript）。這就像一個工廠，接收原料（程式碼）並產出產品（網頁）。

![HTML、CSS 和 JavaScript 程式碼在頁面載入時共同在瀏覽器分頁中建立內容](execution.png)

JavaScript 一個非常常見的用途是透過文件物件模型 API（如上所述）動態修改 HTML 和 CSS 來更新使用者介面。

### 瀏覽器安全性

每個瀏覽器分頁都有自己獨立的程式碼執行空間（在技術術語中稱為「執行環境」）——這意味著在大多數情況下，每個分頁中的程式碼是完全分開執行的，一個分頁中的程式碼不能直接影響另一個分頁中的程式碼——或另一個網站上的程式碼。這是一個很好的安全措施——如果不是這樣，那麼駭客就可以開始撰寫程式碼來竊取其他網站的訊息，以及其他諸如此類的壞事。

> [!NOTE]
> 有一些方法可以安全地在不同網站／分頁之間傳送程式碼和資料，但這些是進階技術，我們不會在本課程中涵蓋。

### JavaScript 執行順序

當瀏覽器遇到一個 JavaScript 區塊時，它通常會按順序從上到下執行。這意味著你需要注意放置事物的順序。例如，讓我們回到我們在第一個範例中看到的 JavaScript 區塊：

```js
function updateName() {
  const name = prompt("請輸入新名稱");
  button.textContent = `玩家 1：${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

在這裡，我們首先定義一個名為 `updateName()` 的程式碼區塊（這類可重複使用的程式碼區塊稱為**函式**），它會詢問使用者一個新名稱，並將該名稱插入按鈕的文字中。然後我們使用 `document.querySelector` 儲存一個按鈕的參考，並使用 `addEventListener` 為其附加一個事件監聽器，這樣當按鈕被點擊時，就會執行 `updateName()` 函式。

如果你交換 `const button = ...` 和 `button.addEventListener(...)` 這兩行的順序，程式碼將無法運作——相反地，你會在[瀏覽器開發者主控台](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)中得到一個錯誤——`Uncaught ReferenceError: Cannot access 'button' before initialization`。這意味著 `button` 物件尚未初始化，所以我們無法為它新增事件監聽器。

> [!NOTE]
> 由於像[提升（hoisting）](/zh-TW/docs/Glossary/Hoisting)這樣的行為，JavaScript 並不總是完全從上到下依序執行，但目前請記住，通常項目需要先被定義才能使用。這是一個常見的錯誤來源。

### 直譯式與編譯式程式碼

在程式設計的語境中，你可能會聽到**直譯**和**編譯**這兩個術語。在直譯語言中，程式碼從上到下執行，執行的結果會立即回傳。在瀏覽器執行程式碼之前，你不需要將程式碼轉換成另一種形式。程式碼以其對程式設計師友善的文字形式被接收，並直接從該形式進行處理。

另一方面，編譯語言在被電腦執行之前會被轉換（編譯）成另一種形式。例如，C/C++ 被編譯成機器碼，然後由電腦執行。程式是從一個二進位格式執行的，該格式是從原始程式碼產生的。

JavaScript 是一種輕量級的直譯式程式設計語言。Web 瀏覽器以其原始文字形式接收 JavaScript 程式碼，並從該形式執行腳本。從技術角度來看，大多數現代 JavaScript 直譯器實際上使用一種稱為**即時編譯**（just-in-time compiling）的技術來提高效能；JavaScript 原始碼在使用腳本時會被編譯成更快的二進位格式，以便能盡快執行。然而，JavaScript 仍被視為一種直譯語言，因為編譯是在執行時處理，而不是提前處理。

兩種語言都有其優點，但我們現在不討論它們。

### 伺服器端與用戶端程式碼

在 Web 開發的語境中，你可能也會聽到**伺服器端**和**用戶端**程式碼這兩個術語。用戶端程式碼是在使用者電腦上執行的程式碼——當瀏覽網頁時，頁面的用戶端程式碼會被下載，然後由瀏覽器執行並顯示。在本模組中，我們明確地討論**用戶端 JavaScript**。

另一方面，伺服器端程式碼在伺服器上執行，然後其結果被下載並顯示在瀏覽器中。流行的伺服器端 Web 語言範例包括 PHP、Python、Ruby、C#，甚至還有 JavaScript！JavaScript 也可以作為伺服器端語言使用，例如在流行的 Node.js 環境中——你可以在我們的[動態網站——伺服器端程式設計](/zh-TW/docs/Learn_web_development/Extensions/Server-side)主題中了解更多關於伺服器端 JavaScript 的資訊。

### 動態與靜態程式碼

**動態**這個詞用來描述用戶端 JavaScript 和伺服器端語言——它指的是在不同情況下更新網頁／應用程式顯示內容的能力，根據需要產生新內容。伺服器端程式碼在伺服器上動態產生新內容，例如從資料庫中提取資料；而用戶端 JavaScript 則在用戶端的瀏覽器內部動態產生新內容，例如建立一個新的 HTML 表格，用從伺服器請求的資料填充它，然後在顯示給使用者的網頁中顯示該表格。這兩個語境中的含義略有不同，但相關，且兩種方法（伺服器端和用戶端）通常會協同工作。

沒有動態更新內容的網頁被稱為**靜態**——它總是顯示相同的內容。

## 如何將 JavaScript 加入你的頁面？

JavaScript 套用到你的 HTML 頁面的方式與 CSS 類似。CSS 使用 {{htmlelement("link")}} 元素來套用外部樣式表，並使用 {{htmlelement("style")}} 元素來套用內部樣式表到 HTML，而 JavaScript 在 HTML 世界中只需要一個朋友——{{htmlelement("script")}} 元素。讓我們來學習它是如何運作的。

> [!NOTE]
> Scrimba 的 [Setting up our JavaScript file](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN 學習夥伴_](/zh-TW/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> 互動式教學將引導你了解幾種將 JavaScript 加入 HTML 的不同方法。

### 內部 JavaScript

1. 首先，建立我們的範例檔案 [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html) 的本地副本。將它儲存在一個合適的目錄中。
2. 在你的 Web 瀏覽器和文字編輯器中打開該檔案。你會看到 HTML 建立了一個包含可點擊按鈕的簡單網頁。
3. 接下來，到你的文字編輯器中，在 body 的底部——就在 `</body>` 結束標籤之前——加入以下內容：

   ```html
   <script>
     // JavaScript 程式碼寫在這裡
   </script>
   ```

   請注意，你的 Web 文件中的程式碼通常是按照它在頁面上出現的順序載入和執行的。將 JavaScript 放在底部，我們可以確保所有 HTML 元素都已載入。（另請參見下文的[腳本載入策略](#腳本載入策略)）。

4. 現在我們將在 {{htmlelement("script")}} 元素內加入一些 JavaScript，讓頁面做一些更有趣的事情——在「// JavaScript 程式碼寫在這裡」這行下面加入以下程式碼：

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "你點擊了按鈕！";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

5. 儲存你的檔案並重新整理瀏覽器——現在你應該會看到，當你點擊按鈕時，會產生一個新的段落並放置在下方。

> [!NOTE]
> 如果你的範例似乎無法運作，請重新執行這些步驟並檢查你是否都做對了。你是否將起始程式碼的本地副本儲存為 `.html` 檔案？你是否在 `</body>` 標籤之前加入了 {{htmlelement("script")}} 元素？你是否完全按照顯示的樣子輸入了 JavaScript？**JavaScript 是區分大小寫的，而且非常挑剔，所以你需要完全按照顯示的語法輸入，否則可能無法運作。**

> [!NOTE]
> 你可以在 GitHub 上看到這個版本 [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)（[也可以看即時範例](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)）。

### 外部 JavaScript

這運作得很好，但如果我們想把 JavaScript 放在一個外部檔案中呢？現在就來探討一下。

1. 首先，在與你的範例 HTML 檔案相同的目錄中建立一個新檔案。將其命名為 `script.js`——確保它有 .js 副檔名，因為這是它被辨識為 JavaScript 的方式。
2. 移除你目前在 `</body>` 底部的 {{htmlelement("script")}} 元素，並在 `</head>` 結束標籤之前加入以下內容（這樣瀏覽器就可以比在底部時更早開始載入檔案）：

   ```html
   <script type="module" src="script.js"></script>
   ```

3. 在 `script.js` 中，加入以下腳本：

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "你點擊了按鈕！";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

4. 儲存並重新整理你的瀏覽器。你會發現點擊按鈕沒有任何效果，如果你檢查瀏覽器的主控台，你會看到類似 `Cross-origin request blocked` 的錯誤。這是因為像許多外部資源一樣，JavaScript 模組需要從與 HTML [同源](/zh-TW/docs/Web/Security/Defenses/Same-origin_policy)的地方載入，而 `file://` URL 不符合資格。有兩種解決方案可以解決這個問題：
   - 我們推薦的解決方案是[設定一個本地測試伺服器](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)。在伺服器程式執行並在 `8000` 埠提供 `apply-javascript-external.html` 和 `script.js` 檔案的情況下，打開你的瀏覽器並前往 `http://localhost:8000`。
   - 如果你無法執行本地伺服器，你也可以使用 `<script defer src="script.js"></script>` 來代替 `<script type="module" src="script.js"></script>`。更多資訊請參見下文的[腳本載入策略](#腳本載入策略)。但請注意，我們在教學其他部分使用的功能可能無論如何都需要本地 HTTP 伺服器。
5. 現在網站的運作方式和以前完全一樣，但現在我們的 JavaScript 在一個外部檔案中。這在組織程式碼和使其可在多個 HTML 檔案中重複使用方面通常是件好事。此外，沒有大塊腳本塞在裡面，HTML 也更容易閱讀。

> [!NOTE]
> 你可以在 GitHub 上看到這個版本 [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) 和 [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js)（[也可以看即時範例](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)）。

### 內聯 JavaScript 處理器

請注意，有時你會遇到一些實際的 JavaScript 程式碼存在於 HTML 中。它可能看起來像這樣：

```js example-bad
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "你點擊了按鈕！";
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">點我！</button>
```

你可以在下面嘗試這個版本的示範。

{{ EmbedLiveSample('內聯 JavaScript 處理器', '100%', 150) }}

這個示範的功能與前兩節完全相同，只是 {{htmlelement("button")}} 元素包含一個內聯的 `onclick` 處理器，以便在按下按鈕時執行該函式。

**然而，請不要這樣做。** 用 JavaScript 污染你的 HTML 是一種不好的做法，而且效率低下——你必須在你想要套用 JavaScript 的每個按鈕上都包含 `onclick="createParagraph()"` 屬性。

### 改用 addEventListener

不要在你的 HTML 中包含 JavaScript，而是使用純 JavaScript 的結構。`querySelectorAll()` 函式允許你選取頁面上的所有按鈕。然後你可以遍歷這些按鈕，使用 `addEventListener()` 為每個按鈕指派一個處理器。相關程式碼如下所示：

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

這可能比 `onclick` 屬性長一點，但它對所有按鈕都有效——無論頁面上有多少個按鈕，也不管新增或移除了多少個。JavaScript 不需要更改。

> [!NOTE]
> 試著編輯你的 `apply-javascript.html` 版本，並在檔案中加入更多按鈕。當你重新載入時，你應該會發現所有按鈕在點擊時都會建立一個段落。很酷吧？

### 腳本載入策略

頁面上的所有 HTML 都按照其出現的順序載入。如果你使用 JavaScript 來操作頁面上的元素（或更準確地說，是[文件物件模型](/zh-TW/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)），如果 JavaScript 在你試圖操作的 HTML 之前被載入和解析，你的程式碼將無法運作。

有幾種不同的策略可以確保你的 JavaScript 僅在 HTML 解析後才執行：

- 在上面的內部 JavaScript 範例中，script 元素被放置在文件 body 的底部，因此只有在 HTML body 的其餘部分被解析後才會執行。
- 在上面的外部 JavaScript 範例中，script 元素被放置在文件的 head 中，在 HTML body 被解析之前。但因為我們使用 `<script type="module">`，程式碼被視為一個[模組](/zh-TW/docs/Web/JavaScript/Guide/Modules)，瀏覽器會等待所有 HTML 都處理完畢後才執行 JavaScript 模組。（你也可以將外部腳本放在 body 的底部。但如果 HTML 很多且網路很慢，瀏覽器可能需要很長時間才能開始擷取和載入腳本，所以將外部腳本放在 head 中通常更好。）
- 如果你仍然想在文件 head 中使用非模組腳本，這可能會阻止整個頁面的顯示，並可能因為它在 HTML 解析前執行而導致錯誤：
  - 對於外部腳本，你應該在 {{htmlelement("script")}} 元素上加入 `defer`（或者如果你不需要 HTML 準備好，則加入 `async`）屬性。
  - 對於內部腳本，你應該將程式碼包裹在一個 [`DOMContentLoaded` 事件監聽器](/zh-TW/docs/Web/API/Document/DOMContentLoaded_event)中。

  這超出了本教學目前的範圍，但除非你需要支援非常舊的瀏覽器，否則你不需要這樣做，可以直接使用 `<script type="module">`。

## 註解

與 HTML 和 CSS 一樣，你可以在 JavaScript 程式碼中撰寫註解，這些註解會被瀏覽器忽略，其存在是為了向你的開發夥伴提供關於程式碼如何運作的說明（也包括你自己，如果你在六個月後回來看程式碼，卻想不起來你做了什麼）。註解非常有用，你應該經常使用它們，特別是對於較大的應用程式。註解有兩種類型：

- 單行註解寫在兩個正斜線（`//`）之後，例如：

  ```js
  // 我是一個註解
  ```

- 多行註解寫在 `/*` 和 `*/` 字串之間，例如：

  ```js
  /*
     我也是
     一個註解
  */
  ```

所以，舉例來說，我們可以像這樣用註解來註釋我們最後一個示範的 JavaScript：

```js
// 函式：建立一個新段落並將其附加到 HTML body 的底部。

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "你點擊了按鈕！";
  document.body.appendChild(para);
}

/*
  1. 以陣列格式取得頁面上所有按鈕的參考。
  2. 遍歷所有按鈕，並為每個按鈕新增一個點擊事件監聽器。

  當任何按鈕被按下時，將會執行 createParagraph() 函式。
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

> [!NOTE]
> 一般來說，註解多通常比少好，但如果你發現自己為了說明變數是什麼（你的變數名稱或許應該更直觀），或為了說明非常簡單的操作而加入大量註解，你就應該小心了（也許你的程式碼過於複雜）。

## 總結

好了，這就是你踏入 JavaScript 世界的第一步。我們從理論開始，讓你開始熟悉為什麼要使用 JavaScript 以及你可以用它做些什麼。在此過程中，你看到了一些程式碼範例，並學習了 JavaScript 如何與你網站上的其他程式碼相結合，以及其他一些事情。

JavaScript 現在可能看起來有點嚇人，但別擔心——在本課程中，我們將透過簡單的步驟帶你學習，讓你循序漸進。在下一篇文章中，我們將直接進入實作，讓你直接動手建立自己的 JavaScript 範例。

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
