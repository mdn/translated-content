---
title: JavaScript 是什麼?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
original_slug: Learn/JavaScript/First_steps/What_is_JavaScript
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

歡迎來到 MDN 的 JavaScript 初學者課程！我們將在這個章節綜觀 JavaScript ，回答一些像是「它什麼？」和「可以使用它作什麼？」之的問題，並確保你了解 JavaScript 的特性。

<table>
  <tbody>
    <tr>
      <th scope="row">先備條件：</th>
      <td>基本的電腦知識，基本了解 HTML 和 CSS 技術。</td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>了解 JavaScript 的本質、功能、以及它如何構成網站的一部分</td>
    </tr>
  </tbody>
</table>

## 高層次的定義

JavaScript 是一種腳本，也能稱它為程式語言，可以讓你在網頁中實現出複雜的功能。當網頁不只呈現靜態的內容，另外提供了像是：內容即時更新、地圖交動、繪製 2D/3D 圖形，影片播放控制……等，你就可以大膽地認為 JavaScript 已經參與其中。它是標準網頁技術蛋糕的第三層，而其他兩層（[HTML](/zh-TW/docs/Learn_web_development/Core/Structuring_content) 和 [CSS](/zh-TW/docs/Learn_web_development/Core/Styling_basics)）我們在其他學習單元中有更多詳細的介紹。

![](cake.png)

- {{glossary("HTML")}} 是一種標記語言，我們使用它組織網頁裡的內容並給予定義， 例如：定義段落、標題、資料表格，或是在頁面嵌入圖片和影片。
- {{glossary("CSS")}} 是一種樣式規則的語言，用來幫我們的 HTML 內容上套用樣式，例如：設置背景顏色、字型，或讓內容以多欄的方式呈現。
- {{glossary("JavaScript")}} 是一種腳本語言，它使你能夠動態的更新內容、控制多媒體、動畫……幾乎所有事。（好吧，不是所有事情，但神奇的是你可以通過短短幾行 JavaScript 程式碼實現。）

這三層很好的構建在一起。讓我們以一個簡單的文字為例。我們可以使用 HTML 標記來表示它的結構和意圖：

```html
<p>Player 1: Chris</p>
```

![](just-html.png)

然後我們可以加一些 CSS ，讓它看起來更好：

```css
p {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0, 0, 200, 0.6);
  background: rgba(0, 0, 200, 0.3);
  color: rgba(0, 0, 200, 0.6);
  box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor: pointer;
}
```

![](html-and-css.png)

最後，我們可以加一些 JavaScript 來作出互動的行為：

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("輸入新的名字");
  para.textContent = "Player 1: " + name;
}
```

{{ EmbedLiveSample('高層次的定義', '100%', 80, "", "", "hide-codepen-jsfiddle") }}

試試點擊這最後版本的文字，看看會發生什麼事情（你同樣也可以在 GitHub 找到這個範例，來查看[原始碼](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/javascript-label.html)或[在線上執行](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html)）！

JavaScript 能做到更多，讓我們更深入地探索。

## 它究竟可以做什麼呢?

JavaScript 語言的核心包含了很多常用的程式功能供你使用，如：

- 將有用的值存儲在變數中。例如上述例子，我們要求輸入一個新名字，然後將該名字存在名為`name`的變數裡。
- 對文本片段的操作（在程式裡稱作"字串"）。在上述例子中，我們拿了字串 "Player 1: " 並將其與 `name` 變數連接來創造完整文本標籤，如：''Player 1: Chris"。
- 執行程式碼，回應網頁上發生的某些事件。在上述例子中，我們使用 [`click`](/zh-TW/docs/Web/API/Element/click_event) 事件，當按鈕被點擊時，便執行更新文本標籤的程式碼。
- 以及其他更多更多的功能！

然而，更令人興奮的是那些基於用戶端的 JavaScript 語言構建的功能。也就是所謂的 **應用程式介面**（**API**），提供 JavaScript 程式額外的超能力。

API 是預先製作完成的程式模組，支援開發者實現困難或無法實現的功能。在程式設計中就如同在建築房子的時候使用系統傢俱，拿預先裁好的板子用螺絲鎖上來組合成書架，相比從頭自己設計，找合適木材，切成正確的形狀和尺寸，再找到合適的螺絲最後組裝書架而言更簡單。

他們通常分為兩類。

![](browser.png)

**瀏覽器 API**（Browser API）內建在你的瀏覽器中，能夠依本地的電腦環境輸出資料或實現複雜的功能。舉例而言：

- {{domxref("Document_Object_Model","DOM （文件物件模型） API")}} 讓你能操作 HTML 和 CSS，像是建立、移除或改變 HTML 元素，或動態地將新樣式套用到頁面…等等。每當你看到彈出視窗，或有新的內容出現在畫面上（就像上面的範例所展示的），那就是 DOM 在動作。
- {{domxref("Geolocation","Geolocations（地理位置） API")}} 可以取得位置資訊。這就是 [Google Maps](https://www.google.com/maps) 取得你的位置並標示在地圖上所透過的方式。
- {{domxref("Canvas_API","Canvas")}} 和 {{domxref("WebGL_API","WebGL")}} API 可以讓你在網頁創造 2D 動畫及 3D 圖像。人們正使用這些技術來作一些令人驚奇的事，參見 [Chrome Experiments](https://www.chromeexperiments.com/) 及 [webglsamples](https://webglsamples.org/).
- [Audio 和 Video API](/zh-TW/docs/Web/Media/Guides/Audio_and_video_delivery) 像 {{domxref("HTMLMediaElement")}} 和 {{domxref("WebRTC API", "WebRTC")}} 一樣讓你可以使用多媒體做真正有趣的事情，例如在網頁中播放音樂或影片，或由網路攝影機頡取你的影像顯示在另一個人電腦裡（試試我們的[簡單例子](https://chrisdavidmills.github.io/snapshot/)來了解）。

> [!NOTE]
> 上面的許多範例無法在舊版的瀏覽器上運作。使用現代的瀏覽器像是 Firefox、Chrome、Edge 或 Opera 來嘗試執行你的程式總是比較好的。當你接近要交付作為產品的程式（也就是實際的用戶將要使用的時候)，就需要思考關於[跨瀏覽器測試](/zh-TW/docs/Learn_web_development/Extensions/Testing)的事情。

**第三方 API** 預設不內建在瀏覽器裡，你通常由網路上取得他們的程式碼與資訊。例如：

- [Twitter API](https://dev.twitter.com/overview/documentation) 能讓你做很多事，像是顯示最新的 Twitter 貼文在你的網站上。
- [Google Maps API](https://developers.google.com/maps/) 能讓你在自己的網站中嵌入訂製的地圖或其他相關功能。

> [!NOTE]
> 我們不會在此涵蓋這些進階的 APIs。你可以在我們的 [客戶端網頁 API 單元](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs)找到更多資訊。

那裡也有很多的東西。然而不要一頭熱陷進去。你不會在學習 JavaScript 24 小時後，就能開發出下一個 Facebook、Google 地圖或 Instagram 之類的產品出來。有許多的基礎的東西得先了解，這也是你在這裡的原因，讓我們繼續吧！

## JavaScript 在你的頁面做了些什麼？

這裡我們開始看一些程式碼，探索當 JavaScript 在你的頁面上執行時，發生了哪些事情。

簡單回顧一下當瀏覽器載入一個網站時會發生的事情（第一次是在我們的[CSS 如何工作](/zh-TW/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_does_css_actually_work)章節中提到）。當瀏覽器載入一個網頁，就是在執行環境（瀏覽器分頁）中執行程式碼（HTML，CSS 和 JavaScript）。就像是工廠收集原料（程式碼）並且產出商品（網頁呈現的結果）。

![](execution.png)

透過 DOM API （上面提到的）動態調整 HTML 與 CSS 進行改變網頁呈現，在 JavaScript 是很常見的使用方式。要注意的是，檔案中的程式碼通常會以出現在頁面上的順序來執行。如果 JavaScript 比準備操作的 HTML 、 CSS 更早被載入，就可能會發生錯誤。你將會在這個章節的後段學到一些解決問題的方法，它在[腳本載入策略](#腳本載入策略)的部分。

### 瀏覽器安全性

瀏覽器的每個分頁有獨立的空間來執行程式碼（技術上稱「執行環境 excution environments」），這表示在絕大部分的情形之下，每個分頁的程式碼是獨立運行的，不能直接影響其它分頁（或網站）裡的程式。這是一個好的安全措施，少了它，有心人會開始寫程式來偷取網站的資料，或是作其它不好的事情。

> [!NOTE]
> 是有一些安全的方式能在不同的網頁、分頁之間傳遞程式和資料，不過這些進階的技術不會在涵蓋在這個單元中。

### JavaScript 的執行順序

當瀏覽器遇到一段 JavaScript 程式碼，通常會由上到下執行。這意味著你需要注意東西擺放的順序。為了說明，讓我們回到我們曾看過的第一個範例：

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("輸入新的名字");
  para.textContent = "Player 1: " + name;
}
```

這裡我們選擇了一個文字段落（第 1 行），然後加上事件偵聽器，所以當段落被點擊的時候，`updateName()` 程式區塊（5 到 8 行 ）會被執行。`updateName()` 程式區塊（這種可以重複使用的程式區塊被稱為「函數 function」）會向使用者要一個新的名字，然後將插到段落中，更新顯示的內容。

如果你交換前兩行的程式碼，它將不再正常運作。取而代之的，[瀏覽器開發主控台](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)會回報一個錯誤訊息：「`TypeError: para is undefined`」，意思是 `para` 物件尚不存在，所以我們在它上頭增加事件偵聽器。

> [!NOTE]
> 這是一個很常見的錯誤，在你嘗試對物件進行操作之前，你需要注意它們已經存在。

### 直譯式與編譯式程式語言

你可能在程式相關的文章中看過**直譯式** (**interpreted** )與**編譯式 (compiled)**這兩個詞。在直譯式程式語言中，程式碼由上到下執行，而且執行的結果是立即回應得到的。在瀏覽器執行前，你不需要將程式轉換為其它的形式。程式碼的內容是以對程式人員友善的形式並直接能夠運作。

另一方面，編譯式程式語言需要在電腦執行之前轉換（編譯）成另一種形式。例如： C/C++ 在被電腦執行之前要編譯為組合語言。被執行的程式是一種二進位的格式，由程式原始碼產生出來。

JavaScript 是一個輕量的直接程式語言。網頁瀏覽器收到文字格式的 JavaScript 程式碼，並直接執行。以技術的角度來看，大多數現代的 JavaScript 直譯器實際上會使用一種稱為**即時編譯（just-in-time compiling）**的技術來提升執行表現。 JavaScript 被使用時，原始程式會被編譯成更快的二進位格式，讓它們能更有效率的運行。然而， JavaScript 仍然被認為是一種直譯式的程式語言，因為編譯動作是在程式運作時，而不是事先完成。

兩種語言都有各自的優點，但是我們不在此時討論這個議題。

### 伺服器端與用戶端程式

你也有可能聽過**伺服器端**與**客戶端**程式，尤其在網站開發的領域。客戶端程式在使用者的電腦中運作，當瀏覽網頁的時候，頁面中的客戶端程式被下載，接著被瀏覽器執行與顯示結果。在這個單元中，我們只談論**客戶端 JavaScript**。

另一方面，伺服器端的程式在伺服器上執行，接著產出的結果被瀏覽器下載後顯示。受歡迎的伺服器端網頁語言，包括 PHP、Python、Ruby 和 ASP.NET 以及… JavaScript！JavaScript 也能夠作為伺服器端程式語言，流行的 Node.js 環境就是一例。你可以在我們的[動態網站—伺服器端網站程式設計](/zh-TW/docs/Learn_web_development/Extensions/Server-side)主題中找到更多資訊。

### 動態與靜態程式

**動態**一詞被用於描述用戶端 JavaScript 和伺服器端程的式語言，用來描述具有在不同的狀況下更新網頁／網頁應用程式來顯示不同東西，依需要來產生新內容的能力。是根據要求生成新內容的能力。伺服器端程式在伺服器上動態產生的新內容，可能是來自資料庫中取出的數據，而用戶端 JavaScript 在收到由伺服器端要回來的資料，在瀏覽器內動態產生新的內容（如 HTML 表格）後加入頁面中呈現出來。在兩個情境中詞義稍微不同，但是相關的，兩種方法（伺服器端和用戶端）通常可以協同工作。

一個沒有動態更新內容能力的網頁被稱為**靜態**，它在任何時候都只顯示一樣的內容。

## 如何在網頁中增加 JavaScript？

在 HTML 頁面中使用 JavaScript 與 CSS 的方法類似。在 HTML 中 CSS 藉著{{htmlelement("link")}} 元素引入外部樣式（stylesheets）以及 {{htmlelement("style")}} 元素定義內部樣式。JavaScript 在 HTML 中只需要一個朋友 — {{htmlelement("script")}} 元素。讓我們了解它是如何運作。

### 內部的 JavaScript

1. 首先，下載一份 [apply-javascript.html 範例](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript.html)儲存在自己的電腦上合適的目錄裡。
2. 用瀏覽器與文字編輯器打開範例。你會看到 HTML 建立了一個簡單的網頁，包含一個可點擊的按鈕。
3. 接著，切換到文字編輯器，在標頭區加入下面的文字，就放在 `</head>` 結尾標籤前：

   ```html
   <script>
     // JavaScript 將放在這裡
   </script>
   ```

4. 現在，我們將在我們的 {{htmlelement("script")}} 元素中加入一些 JavaScript 程式，讓網頁能做些有趣的事，接者在「// JavaScript 將放在這裡」那行後面：

   ```js
   document.addEventListener("DOMContentLoaded", function () {
     function createParagraph() {
       let para = document.createElement("p");
       para.textContent = "You clicked the button!";
       document.body.appendChild(para);
     }

     const buttons = document.querySelectorAll("button");

     for (let i = 0; i < buttons.length; i++) {
       buttons[i].addEventListener("click", createParagraph);
     }
   });
   ```

5. 儲存你的檔案並且重新整理網頁，現在你會發現每次點擊按鈕，都會在下方產生一個新的文字段落。

> [!NOTE]
> 如果你的版本不能正常運作，重新按照步驟再操作一次，檢查每一步都正確。你下載的範例是 `.html` 結尾的檔名？你加入的 {{htmlelement("script")}} 元素在 `</head>` 標籤的前面？你輸入的 JavaScript 與上面提供的一模一樣？**JavaScript 程式大小寫，而且很挑剔，所以你輸入的語法要一模一樣，不然可能會無法運作。**

> [!NOTE]
> GitHub 上有完整版本的範例在 [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)（[看線上版本](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)）。

### 外部的 JavaScript

內部 JavaScript 目前運作得很好，但如果我們想把 JavaScript 放在外部檔案，應該怎麼做？讓我們現在來探索。

1. 首先，建立一個新的檔案，和 HTML 檔案放在相同的目錄下，命名為 `script.js` ，確定這個檔案是以 .js 為副檔名， 因為這就是它被識別為 JavaScript 的原因。
2. 將 {{htmlelement("script")}} 元素（包含裡面的程式）換成下面的樣子：

   ```html
   <script src="script.js" async></script>
   ```

3. 在 `script.js` 中，加入下面的程式碼：

   ```js
   function createParagraph() {
     let para = document.createElement("p");
     para.textContent = "You clicked the button!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", createParagraph);
   }
   ```

4. 儲存檔案並在你的瀏覽器執行重新整理，你應該會看到一樣的結果！雖然是一樣的結果，但現在我們是由外部的檔案來引入 JavaScript 程式。就組織程式碼，讓程式可以在多個 HTML 間重複被使用而言，這通常是好的作法。另外，因為少了一大堆程式碼在裡頭，也能夠讓 HTML 檔案更容易被閱讀。

> [!NOTE]
> 你可以在 GitHub 上找到這個版本的 [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) 與 [script.js](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/script.js) （[看線上版本](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)）。

### 行內的 JavaScript

注意，有時候你會遇到一些 JavaScript 程式混在 HTML 語法之中。它可能會看起來像這樣：

```js example-bad
function createParagraph() {
  var para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">Click me!</button>
```

你可以在底下試試這個段程式的作用。

{{ EmbedLiveSample('行內的_JavaScript', '100%', 150, "", "", "hide-codepen-jsfiddle") }}

這個範例與前面兩個有完全相同的功能，除了 {{htmlelement("button")}} 元素中包含了一個行內 `onclick` 處理程序，當按鈕按下時執行。

**然而，請不要這樣做。**用 JavaScript 汙染你的 HTML 是一種不好的作法，而且沒有效率，因為你必須在每個你希望 JavaScript 作用的地方加入 `onclick="createParagraph()"` 屬性。

使用單純 JavaScript 的結構，讓你可以用一個指令選擇所有的按鈕。在我們前面的範例中，使用下面的程式碼達到這個目的：

```plain
var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
```

這或許看起來比 `onclick` 屬性還長一點，但是能套用在全部的按鈕上，無論頁面上有多少按鈕，也不管未來新增或移除多少個（按鈕）。這段 JavaScript 程式都不需要改變。

> [!NOTE]
> 試著編輯你自己版本的 `apply-javascript.html` ，在裡面多添加一點按鈕。當你重新載入網頁，你應該會發現所有按鈕，按下去的時候都會建立一的段落。很簡潔吧！

### 腳本載入策略

在正確的時機載入腳本涉及一些要注意的東西。並不如它看起來的簡單！其中一個常見的問題是，所有的 HTML 是根據出現順序載入。假如你使用 JavaScript 操作頁面中的元素（精確地來說是 [DOM 元素](/zh-TW/docs/Learn_web_development/Core/Scripting/DOM_scripting#The_document_object_model)），如果 JavaScript 在這些 HTML 操作對象前被讀取及解析，你的程式將無法運作。

上面的範例中，內部和外部 JavaScript 範例裡的程式碼都放在 HTML 的 head 區域，在 body 區被載入前就先被解析。這樣會造成一些問題，所以我們載入與執行在文件(HTML 檔)的開頭，是 HTML `body` 還沒解析之前。這可能會產生錯誤，所以我們使用一些模式來處理它。

在內部程式的範例中，你可以看到以下這樣結構的程式碼：

```js
document.addEventListener("DOMContentLoaded", function() {
  ...
});
```

這是一個事件偵聽器，它偵聽瀏覽器的「DOMContentLoaded」事件，它是在 HTML body 部分已經完全載入與解析發出。區塊內（... 的部分）的 JavaScript 直到事件被發出後才會執行，這樣子問題就被避開了。（你將會在這個課程中[學習到什麼是事件](/zh-TW/docs/Learn_web_development/Core/Scripting/Events)）

在外部程式的範例中，我們使用比較現代的 JavaScript 特性來解決這個問題，`defer` 屬性，它告訴瀏覽器碰到這種 `<script>` 標籤時，繼續下載後面其他的 HTML 內容。

```js
<script src="script.js" defer></script>
```

在這個例子中，腳本（JavaScript 程式）與 HTML 會同時載入，所以程式將正確地執行。

> [!NOTE]
> 在外部程式的範例裡，我們不需要使用 `DOMContentLoaded` 事件因為 `defer` 為我們解決問題了。而在內部程式的範例裡我們沒用 `defer` 屬性，是因為 `defer` 屬性只能用於外部的腳本。

這個問題有另一個舊式的解決方法，就是將 `script` 元素放在 `body` 元素的底部（剛好在 `</body>` 的前面），如此它就會在所有 HTML 被解析完之後才被載入。這個方法的問題在於腳本的載入與解析工作會被完成擋住，一直到所有 HTML 載入完成。在擁有許多 JavaScript 的大型網站中，這樣會導致嚴重的效能問題，拖慢你的網站。

#### async 和 defer

實際上，有兩個方法可以閃過上述腳本被擋到的問題：`async` 與 `defer`（前面看到的）。來看看兩者的區別。

使用 `async` 屬性（如下所示）所載入的腳本，在下載的同時不會讓網頁的渲染被阻塞（停住），並且在下載完成後馬上執行。它並不保證腳本會按照任何特定的順序執行，只保證不去妨礙網頁中其他部分顯示工作。`async` 的最佳使用情境，是當網頁中的腳本間彼此獨立，因而不依賴彼此運行的狀況下。

例如你有以下的 `script` 元素

```html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

你不能將元素的順序視為腳本載入順序。 `jquery.js` 可能會在 `script2.js` 與 `script3.js` 的之前或之後載入，在這個情況下，在腳本中依賴 `jquery` 的函數將會發生錯誤，因為被執行到的時候 `jquery` 還沒被定義（載入且解析完畢）。

當有許多非立即要使用的腳本，而你只希望它們能盡快被載入完畢，就應該使用 `async` 。例如：你有一些遊戲內容的檔案需要載入，它將在遊戲開始後被用到。但是現在你只是需要顯示遊戲介紹、一些選單以及遊戲大廳，不希望等到所有內容都下載完成之後才顯示。

使用 `defer` 屬性（如下所示）所載入的腳本，會在腳本與內容都下載完成後，依照出現順序被執行。

```html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

全部具有 `defer` 屬性的腳本會依據出現的順序載入。因此在第二個範例中，我們可以肯定 `jquery.js` 會在 `script2.js` 與 `script3.js` 之前被載入， `script2.js` 會在 `script3.js` 之前載入。在網頁的所有內容被載入完成之前，它是不會被執行的。當你的程式依賴著某些元素存在時（如：要調整頁面上一到多個元素），這個屬性很有用。

總結一下：

- `async` 和 `defer` 屬性都是用來告訴瀏覽器使用獨立線程（行程）來下載腳本，同一時間頁面的其它部分（如 DOM 元件之類）也在下載，因此頁面的載入不會因為腳本被影響。
- 如果你的腳本應該立即被執行，而且不依賴其它腳本先被載入，就用 `async` 。
- 如果你的腳本依賴其他腳本先被解析或 DOM 已經存在，就用 `defer` 來載入它們，並根據你想要瀏覽器執行的順序安排 `<script>` 元素的次序。

## 註解

如同 HTML 和 CSS，在 JavaScript 的程式碼中也可以撰寫註解，它會被瀏覽器忽略，僅用來提供你的開發伙伴，說明程式是如何運作（或是自己，當六個月後回來看程式碼，忘記曾經做過了什麼）。註解非常有用，你應該常常使用它，尤其是在大型應用程式裡。註解有兩種形式：

- 單行註解，寫在兩個（正）斜線「//」之後，例如：

  ```js
  // 我是一個註解
  ```

- 多行註解，寫在 /\* 和 \*/ 之間的文字，例如：

  ```js
  /*
    我也是
    一個註解
  */
  ```

舉例來說，我們可以在前面範例的 JavaScript 裡加入註解，像是：

```js
// 函數：建立一個段落元素並加到 HTML body 的尾端

function createParagraph() {
  var para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

/*
  1. 找出頁面上所有按鈕，並把它們放到陣列中
  2. 使用迴圈，對每個按鈕偵聽 click 事件

  當任何按鈕被按下，執行 createParagraph() 函數
*/

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
```

> [!NOTE]
> 一般而言，多寫註解比少寫來得好。但是要注意，如果你發現加了許多註解在說明變數的用途（那麼你的變數命名可能需要更直觀，更帶有意義），或是解釋非常簡單的操作（也許你的程式碼太過於複雜）。

## 總結

所以你已經踏出在 JavaScript 世界中的第一步。我們從理論開始，逐漸熟悉使用 JavaScript 的原因，以及你可以用它做些什麼。過程中你看到了一些程式碼範例，學到如何將 JavaScript 與你網站的其它東西放在一起。

JavaScript 目前可能看起來有一點嚇人，然而不用擔心，在本課程我們會透過簡單的步驟，帶著你建立觀念並繼續向前。 在下一章節，我們將會[投入更實用的知識](/zh-TW/docs/Learn_web_development/Core/Scripting/A_first_splash)，帶你直接入門並建立你自己的 JavaScript 作品。

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
