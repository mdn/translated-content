---
title: JavaScript 基礎
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
original_slug: Learn/Getting_started_with_the_web/JavaScript_basics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript 是一個可以幫你在網站裡加入互動功能的程式語言（舉例來說，一個遊戲可能會在按鈕按下或資料被輸入表單內時回應、動態更改樣式、以及展示動畫等）。這篇文章會幫助你踏上學習這個令人興奮的語言的旅程，並展示她可以實現的所有可能。

## 所以 JavaScript 到底是什麼？

{{Glossary("JavaScript")}} 是一個成熟的動態程式語言，應用於 {{Glossary("HTML")}} 文件（document）上時，就可以為網頁提供動態的互動功能。JavaScript 是由 Mozilla project、Mozilla Foundation 和 Mozilla Corporation 的創辦人 Brendan Eich 所發明的。

你可以用 JavaScript 實現許多事情。你可以先從簡單的特性開始，如跑馬燈、相簿、動態版型、回應按鈕點擊等。在你熟悉的這個程式語言以後，甚至可以製作遊戲、2D 平面以及立體的圖像、資料庫系統等等的應用！

JavaScript 本身非常的簡潔，卻也充滿彈性，開發者們已經以 JavaScript 核心為基礎為她撰寫了相當多的工具，讓各位可以感到事半功倍。這些工具包括：

- 內建在瀏覽器內的應用程式介面（Application Programming Interfaces，{{Glossary("API","APIs")}}）提供了多樣化的功能，像是動態產生 HTML 以及設定 CSS 樣式、擷取以及處理從使用者的網路攝影機錄下的影像、製作立體圖形或是聲音樣本。
- 第三方 API 允許開發者將他們的網頁與其他如 Twitter 或 Facebook 提供的內容合併在一起。
- 第三方框架和函式庫允許你將這些元件套用在你的 HTML 文件內，讓你可以迅速地建立網頁或應用程式。

## 「Hello world」範例程式

前面所述的功能聽起來令人興奮，而她也的確符合這樣的期待— JavaScript 是眾多令人感到興奮的網路科技之一，你會因為選擇利用她來製作網頁而進入一個嶄新且充滿創意及力量的次元。

但無論如何，要讓 JavaScript 跟 HTML 和 CSS 合作無間的話，可能還要費一些功夫。現在你將會從一些細小的地方開始著手，接著一步步地往前進。首先，我們將會向你展示如何將一些基本的 JavaScript 給加入你的頁面中，並且打造一個*「hello world!」*的範例（[這同時也是許多程式語言的標準範例程式](https://zh.wikipedia.org/zh-tw/Hello_World)）。

> [!WARNING]
> 如果你還沒有學習過先前的課程，[請你下載這個範例程式碼](https://github.com/mdn/beginner-html-site-styled/archive/gh-pages.zip)，並以此開始練習。

1. 首先，進入你測試網頁的資料夾中，並建立一個名為 `main.js` 的檔案，再將她存放於 `scripts` 資料夾內。
2. 接著，開啟 `index.html` 檔案，並在 `</body>` 這個結束標籤之前的位置，使用一行新的空間來輸入以下的元素：

   ```html
   <script src="scripts/main.js"></script>
   ```

3. 我們做的事情，基本上跟新增一個 CSS 的 {{htmlelement("link")}} 元素是相同的概念 — 我們將 JavaScript 給導入這個頁面中，讓她來影響 HTML（以及 CSS、還有任何頁面上的東西）。
4. 再來我們把以下的程式碼新增到 `main.js` 檔案內：

   ```js
   var myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. 現在請你將修改過的 HTML 和 JavaScript 給存檔，再用瀏覽器讀取 `index.html`。你應該會看到以下的內容：![](hello-world.png)

> [!NOTE]
> 我們選擇將 {{htmlelement("script")}} 元素放在接近 HTML 檔案底部的原因，是因為瀏覽器是依照程式碼存在檔案中的順序來讀取 HTML 檔案的。如果 JavaScript 先被瀏覽器讀取了，那她應該要去影響她之後的 HTML 程式碼，但有時候卻行不通，因為她比應該產生改變的 HTML 還要早被讀取到。因此，把她放在接近檔案底部的位置，通常都會是一個不錯的策略。

### 發生什麼事了？

所以你的標題文字已經被 JavaScript 修改成「Hello world!」了。我們先使用了一個叫做 {{domxref("Document.querySelector", "querySelector()")}} 的函式來取得了我們標題參考（Reference），並且將她存在一個叫做 `myHeading` 的變數裡面。這跟我們在操作 CSS 時使用的選擇器是相似的。當你想要更動某個元素時，首先你要將她選取起來。

之後，我們將變數 `myHeading` 中 {{domxref("Element.innerHTML", "innerHTML")}} 特性的值設為「Hello world!」。

> [!NOTE]
> Both of the features you used above are parts of the [Document Object Model (DOM) API](/zh-TW/docs/Web/API/Document_Object_Model), which allows you to manipulate documents.

## 語言基礎速成

接著我們來解釋一下 JavaScript 基本特性，以讓你更加地了解她是如何運作的。更好的事情是，這些特性基本上也存在於所有程式語言中。所以如果你可以充分理解這些基礎知識，你就可以撰寫程式來創造無限可能！

> [!WARNING]
> 在這篇文章中，請你試著將範例程式碼輸入到 JavaScript 主控台中，並觀察發生了什麼事。如果你想要了解更多 JavaScript 主控台的細節，請參閱 [Discover browser developer tools](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)。

### 變數（Variables）

變數（{{Glossary("Variable", "Variables")}}）是可以用來儲存數值的容器。要宣告一個變數，首先要用關鍵字 `var` 來開頭，並在後面輸入你想要用來呼叫她的名字：

```js
let myVariable;
```

> [!NOTE]
> 在 JavaScript 檔案內的每行內容都需要在結尾加上分號，以標示出這行結束的位置。只有在需要於單行中隔開敘述句時，分號才是絕對需要的。然而，有些人相信在每一個敘述句結尾加上分號才是最佳實踐。這裡有其他何時要加或不加分號的規則——請參考 [Your Guide to Semicolons in JavaScript](http://news.codecademy.com/your-guide-to-semicolons-in-javascript/) 以瞭解更多資訊。

> [!NOTE]
> 基本上你可以幫變數取任何名字，不過還是有一些限制的（請參閱[這篇文章](http://www.codelifter.com/main/tips/tip_020.shtml)以了解變數的命名規則）。假如不太確定，可以[檢查變數名稱](https://mothereff.in/js-variables)來看看是否合法。

> [!NOTE]
> JavaScript 是會區分大小寫字母的——`myVariable` 就跟 `myvariable` 不相同。如果你的程式碼出現了一些問題，可以試著檢查一下字母的大小寫！

宣告了一個變數之後，你可以為她指定一個數值：

```js
myVariable = "Bob";
```

你可以呼叫這個變數的名字來取得這個值：

```js
myVariable;
```

如果你有需要，你也可以在一行之內同時做完這兩件事情：

```js
let myVariable = "Bob";
```

當你把一個數值指定給一個變數之後，你也可以再次改變它：

```plain
let myVariable = 'Bob';
myVariable = 'Steve';
```

請記得這些變數有著不同的[資料型態](/zh-TW/docs/Web/JavaScript/Data_structures)：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">變數</th>
      <th scope="col">說明</th>
      <th scope="col">範例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{Glossary("String")}}</th>
      <td>
        字串，一段文字。如果要將字串指定給一個變數，你應該將內容用引號給框起來。
      </td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number")}}</th>
      <td>數值，一個數字。數字不被引號框起來。</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Boolean")}}</th>
      <td>
        布林值，一個 True（真）/False（假）數值。<code>true</code>/<code
          >false</code
        >
        是 JavaScript 內的特殊關鍵字，不需要用引號將她框住。
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array")}}</th>
      <td>陣列，一個可以儲存多個數值在單一參考中的結構。</td>
      <td>
        <p>
          <code>let myVariable = [1,'Bob','Steve',10];</code
          ><br />可以用這個方式來呼叫陣列的每一個成員：<code
            >myVariable[0]、myVariable[1]</code
          >
          等等。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object")}}</th>
      <td>
        物件。基本上，JavaScript
        內的所有東西都可以視為一個物件，而且可以被存放在變數裡。請將這個概念記下來。
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code
        ><br />這個項目之前的所有例子也都是物件。
      </td>
    </tr>
  </tbody>
</table>

所以為什麼我們需要變數？這個嘛，我們寫程式時可以做的任何有趣的事情，都需要有變數的參與。如果數值不會更動，那你也無法做任何動態的事情，像是客製化一個歡迎訊息、或是變更相簿裡的圖片。

### 註解（Comments）

你可以在你的 JavaScript 程式碼中加入註解，就像你在撰寫 CSS 時做的事情一樣：

```js
/*
Everything in between is a comment.
*/
```

如果你的註解只有一行，我們通常會簡單將註解放在兩個斜線的後方，像以下的範例：

```js
// This is a comment
```

### 運算子（Operators）

運算子（ {{Glossary("operator")}}）是一個數學符號，可以讓兩個數值（或是變數）交互作用以後產生結果。你可以從以下的表格中看到一些最簡單的運算子，並將範例輸入 JavaScript 主控台來測試看看。

<table>
  <thead>
    <tr>
      <th scope="row">運算子</th>
      <th scope="col">說明</th>
      <th scope="col">符號</th>
      <th scope="col">範例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">相加／連接</th>
      <td>用於將兩個數字相加，或是將兩個字串連接在一起。</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>減、乘、除</p></th>
      <td>這些運算子就跟基礎數學計算中在做的事情相同。</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
          >9 - 3;<br />8 * 2; // 在 JavaScript 中，相乘運算子是個星號<br />9 /
          3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">指定運算子</th>
      <td>你已經見過她了：這可以將一個數值指定給一個變數。</td>
      <td><code>=</code></td>
      <td><code>var myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">等價運算子</th>
      <td>
        測試兩個數值是否相等，並且回傳一個 <code>true</code>/<code>false</code>
        的結果。
      </td>
      <td><code>===</code></td>
      <td>
        <code>var myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">否定、不相等</th>
      <td>
        通常會跟相等運算子搭配使用，否定運算子在 JavaScript
        中代表邏輯非（NOT）—她可以將 <code>true </code>轉換為
        <code>false</code> ……等。
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          第一個敘述句回傳的是
          <code>true</code>，但我們使否定運算子，使得對照組的敘述句回傳了
          <code>false</code>：
        </p>
        <p>
          <code>var myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          在這裏，我們測試了「<code>myVariable </code>是否不等於
          3」的一個敘述。這個敘述回傳的是 <code>false</code>，因為她確實等於 3。
        </p>
        <p>
          <code><code>var myVariable = 3;</code><br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

其實還有更多的運算子等的你去探索，但我們將在這裡先打住。你可以參照這篇[運算式與運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators)以取得完整的列表。

> [!NOTE]
> 混合使用多種資料型態的話，可能會在計算時產生一些奇怪的結果，所以你要謹慎地為變數選用正確的資料類型。舉個例子：在主控台中輸入 `"35" + "25"`。為什麼你沒有得到你所想要的結果？因為使用引號框住數字會將她轉換成字串，所以你其實是將兩個字串給連接起來，而不是將她們給相加。如果你輸入的是 `35 + 25`，你將會得到正確的結果。

### 條件（Conditionals）

條件是種程式碼結構，可以讓你測試某個陳述式會不會回傳真值，並根據不同的結果執行不同程式碼。最常見的形式是 `if ... else` 。以下是一個範例：

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");
}
```

在 `if ( ... )` 裡面的陳述式就是一個測試—這將會使用到等價運算子（如先前所描述的）來比較變數 `iceCream` 和字串 `chocolate` 兩者是否相等，如果在比較之後回傳了 `true`，接著就執行第一個區塊內的程式碼。如果不是，就略過第一個區塊的程式碼並轉而執行寫在執行在 `else` 之後、第二個區塊內的程式碼。

### 函式（Functions）

函式（{{Glossary("Function", "Functions")}}）是一種將需要重複使用的功能打包裝起來的方法，所以當要再次執行這些功能的時候，就可以呼叫這個函式來達成，而不是一再的重新撰寫程式碼。你在先前的篇幅中其實已經看過一些函式了，例如：

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

這些函式是瀏覽器為你內建的，你可以自由地使用。

如果你看到某些很像是變數名稱的東西，但是後面帶有括號 — `()` — 的話，表示這可能是一個函式。函式通常會接收參數（{{Glossary("Argument", "arguments")}}）—這是一些可以讓她完成工作的必要資料。這些參數會被寫在括號裡面，如果有不只一個參數的話，彼此間要用逗號隔開。

舉例來說，`alert()` 這個函式會在瀏覽器內視窗內產生一個彈出視窗，但是我們必須要傳給她一個字串當作參數，告訴這個函式，該把什麼東西放到這個彈出視窗裡。

好消息是：你可以定義你自己的函式 — 底下的這個範例中，我們將會為你帶來一個簡單的函式，她會接收兩個數字當作參數，並將其相乘：

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

你可以試著在主控台中執行上述的函式，然後再用不同的參數來測試這個函式幾次，例如：

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> **備註：** [`return`](/zh-TW/docs/Web/JavaScript/Reference/Statements/return) 陳述式會要求瀏覽器將 `result`變數回傳，以利後續使用。這是必要的，不然在函式內定義的變數就只能在函式內使用。這個現象叫作變數的有效使用範圍（{{Glossary("Scope", "scoping")}}）（請參閱[這篇文章以了解變數的有效使用範圍](/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types#變數範圍)）

### 事件（Events）

如果要在網頁上創造真正的互動功能，你將會需要事件（Events） — 這是一種可以監聽瀏覽器發生了什麼事情的程式碼結構，接著她會允許你執行其他程式碼以回應這些事件。最明顯的事件就是 [click event](/zh-TW/docs/Web/API/Element/click_event) 了，當瀏覽器裡的某個東西被滑鼠點選時，這個事件就會被觸發。如果要測試一下這個事件，請你把底下的程式碼輸入到主控台內，接著用滑鼠點選目前的網頁：

```js
document.querySelector("html").onclick = function () {
  alert("Ouch! Stop poking me!");
};
```

有許多的方法可以把事件跟網頁元素結合在一起。在底下的程式碼中，我們先選擇了 HTML 元素，並把這個元素的 [`onclick`](/zh-TW/docs/Web/API/Element/click_event) 處理器設定為一個匿名函式，裡面裝著在滑鼠點選事件發生時，要執行的程式碼：

請特別注意到以下這段程式碼：

```js
document.querySelector("html").onclick = function () {};
```

產生的結果將會與下面這段程式碼相同

```js
var myHTML = document.querySelector("html");
myHTML.onclick = function () {};
```

只是上面那段寫起來比較簡短罷了。

## 徹底加強我們的範例網頁

到目前為止，我們已經學會一些 JavaScript 的基礎知識了，接下來讓我們幫這個網頁新增一些很酷的特色，並給你一些靈感。

### 加入一個圖片變換器

在這個小節中，我們將在這個網頁裡添加一個圖片，以及一些簡單的 JavaScript，當這個圖片被滑鼠點選的時候，就會在兩個圖片之間互相切換。

1. 首先，先去找張你可以為你的網頁增添光彩的圖片。請盡量找一張尺寸跟第一張圖相同的圖片、或至少是張相似尺寸的圖片。
2. 將圖片存放到 `images` 資料夾內。
3. 編輯你的 `main.js` 檔案，並且將以下的 JavaScript 輸入到檔案內（如果你還有看見那段 hello world 的 JavaScript，請把她們給刪除）：

   ```js
   var myImage = document.querySelector("img");

   myImage.onclick = function () {
     let mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   };
   ```

4. 請將全部檔案儲存，並用瀏覽器開啟 `index.html`。現在請你點選圖片，她應該會切換成另外一張！

在這裡，我們把一個圖片元素的參考存進了 `myImage` 變數裡。接著，我們把這個變數的 `onclick` 事件處理器設定為一個匿名函式。現在，每當這個圖片被點選一次：

1. 我們會去取得圖片中 `src` 屬性的數值
2. 我們用一個條件判斷式，來檢查 `src` 的數值是否跟原始圖片的位址相同：

   1. 如果兩者相同，那我們就把 `src` 的數值更改為第二個圖片的位址，也就是在 {{htmlelement("image")}} 元素裡強迫讀取另外一張圖片。
   2. 如果兩者不同（也就是圖片已經被切換過了），我們就把 `src` 的數值更改為原始圖片的位址，圖片就會被切換回原來那張。

### 添加個客製化的歡迎訊息

接著我們再來添加一些程式碼，在使用者瀏覽這個網頁的時候，將網頁標題改為客製化的歡迎訊息。這個歡迎訊息會一直保留著，直到使用者離開這個網頁為止。我們也會添加個切換使用者的選項，並且一併更改歡迎訊息。

1. 編輯 `index.html` 檔案，並將下列程式碼置於 {{htmlelement("script")}} 元素之前：

   ```html
   <button>Change user</button>
   ```

2. 編輯 `main.js` 檔案，並將下列程式碼一字不漏地置於檔案的最末端 — 這些程式碼將會取得新按鈕、標題的參考，並把它們存在變數裡：

   ```js
   var myButton = document.querySelector("button");
   var myHeading = document.querySelector("h1");
   ```

3. 現在，將以下的函式加進去以設定客製化的歡迎訊息 — 這些函式目前還不會產生作用，但我們等一下會用到她們：

   ```js
   function setUserName() {
     let myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.innerHTML = "Mozilla is cool, " + myName;
   }
   ```

   這個函式包含了一個會產生一個對話視窗的 [`prompt()`](/zh-TW/docs/Web/API/Window/prompt) 函式，有點像 `alert()`，只是 `prompt()` 會要求使用者輸入一些資料，並在使用者點選`確認`之後，將內容儲存在一個變數裡面。接著，我們呼叫一個名稱為 `localStorage` 的 API，這個 API 可以讓使用者先將一些資料儲存在瀏覽器裡面，之後有需要的話再取出來使用。我們使用 localStorage 的 `setItem()` 函式來建立並且把資料儲存到一個名稱為 `'name'` 的變數裡，再把包含者用者名字的 `myName` 的值指定給她。最後，我們將一個字串跟使用者的名字指定給標題的 `innerHTML` 特性：

4. 接著，加入這個 `if ... else` 區塊 — 因為她會在程式一開始被讀取的時候就被啟用，我們稱她為初始化程式碼：

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     let storedName = localStorage.getItem("name");
     myHeading.innerHTML = "Mozilla is cool, " + storedName;
   }
   ```

   這個區塊一開始使用了邏輯負運算子（邏輯非）來檢查 `name` 這個物件是否存在。如果沒有，那就執行 `setUserName()` 這個函式並且創造她。如果有了（例如：使用者已經在上一次造訪網頁時就設定過了），我們就使用 `getItem()` 函式來取得儲存的名字，並且將標題的 `innerHTML` 特性設定為一個字串加上使用者的名字，也就是我們在 `setUserName()` 函式裡做的事情。

5. 最後，把以下的 `onclick` 事件處理器跟按鈕綁定，如此一來，每次點選按鈕時就會執行 `setUserName()`。這將允許使用者透過點選那個按鈕來重新設定一個新的名字：

   ```js
   myButton.onclick = function () {
     setUserName();
   };
   ```

現在當你造訪這個網頁時，她會詢問你的名字，並且給你一個客製化過的歡迎訊息。在這之後，你也可以隨時透過點選那個按鈕來更改名字。順帶一提，因為這組客製化過的訊息是存在 localStorage 裡的，所以即使你將網頁關起來，她還是會保留著，所以當你下次開啟這個網頁時，這段客製化的訊息依然會出現！

### 用戶名稱是否為 null

當你運行範例並出現提示你輸入用戶名稱的對話框時，請嘗試按下*取消* 鈕。你會看到一個標題顯示著"Mozilla is cool, null"。這是因為當你取消提示時，該值將會被設為 null。null 在 Javascript 中的一個特殊值，基本上用來表示沒有任何值。

再試試按下 OK，但不輸入任何名字。你將會看到"Mozilla is cool,"，該結果的原因非常簡單的可以理解。

如果你想避免產生這些問題，你應該檢查使用者是否輸入了 null 或是空白的名字。試著透過修改`setUserName()`來應對這些問題，結果如下：

```plain
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}
```

用人類的語言來理解，如果`myName`沒有值或是它的值是`null`，再次從頭執行`setUserName()。`如果`myName`有值（如果上述條件是不為真）．將值存入`localStorage`並將值設定給標頭檔的文件。

## 結語

如果你已經照著這篇文章的所有步驟做完了，你應該會看到以下的畫面（或者你也可以[瀏覽我們製作的版本](https://mdn.github.io/beginner-html-site-scripted/)）：

![](website-screen-scripted.png)

如果在過程中遇到了任何問題，你也可以隨時把你的成品與我們 [放在 Github 上的範例](https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js) 相互對照。

在此，我們只稍稍體驗了 JavaScript 的一些皮毛。如果你非常享受這段學習的過程，並想要繼續深究，請你繼續瀏覽我們製作的 [JavaScript 指南](/zh-TW/docs/Web/JavaScript/Guide)。

## 參見

- [JavaScript — Dynamic client-side scripting](/zh-TW/docs/Learn_web_development/Core/Scripting)
  - : Our JavaScript learning topic — dive into JavaScript in much more detail.
- [Learn JavaScript](https://learnjavascript.online/)
  - : An excellent resource for aspiring web developers — Learn JavaScript in an interactive environment, with short lessons and interactive tests, guided by automated assessment. The first 40 lessons are free, and the complete course is available for a small one-time payment.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
