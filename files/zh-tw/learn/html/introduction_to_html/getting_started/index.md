---
title: HTML 入門
slug: Learn/HTML/Introduction_to_HTML/Getting_started
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

本文將探討 HTML 最基本的部分。首先，我們將會定義元素（element）、屬性（attribute）以及其它你可能聽過的重要名詞，然後講解該如何使用它們。我們也會告訴你典型的 HTML 頁面以及其中的元素是如何構成的，以及解釋其他重要的基礎語言特性。在此過程中，我們會撰寫一些 HTML 來引發你的興趣！

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">需求：</th>
      <td>
        基礎電腦能力、已安裝<a
          href="/zh-TW/Learn/Getting_started_with_the_web/Installing_basic_software"
          >需要的基本軟體</a
        >、並知道如何<a
          href="/zh-TW/Learn/Getting_started_with_the_web/Dealing_with_files"
          >操作檔案</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>對 HTML 產生初步認識、並練習如何撰寫 HTML 元素。</td>
    </tr>
  </tbody>
</table>

## 什麼是 HTML？

{{glossary("HTML")}}（Hypertext Markup Language）並不是一種程式語言，而是用來告訴瀏覽器該如何呈現網頁的**標記式語言**（markup language）。它可以很複雜也可以很陽春，端看網頁開發者如何構思。HTML 由一系列的元素（{{glossary("Element", "elements")}}）組成，你將利用它們來圍住、包裹，或者說標記（mark up）網頁中的每個部分，使它們在外表或行為上呈現某種特定風貌。被標籤（{{glossary("Tag", "tags")}}）包住的內容會變成超連結，或者斜體字，以及諸如此類的功能，舉例來說，請看下列內容：

```
My cat is very grumpy
```

如果我們想要讓這行字獨立出來，不讓它跟其他東西排在一起，我們可以用段落標籤（paragraph tag {{htmlelement("p")}}）讓它自成段落：

```html
<p>My cat is very grumpy</p>
```

> **備註：** HTML 中的元素是不區分大小寫的。例如：一個 {{htmlelement("title")}} 標籤可以寫成 `<title>`、`<TITLE>`、`<Title>`、`<TiTlE>` 之類的形式，都沒有問題。通常來說，為了保持一致性（consistency）、可讀性（readability），以及其他可能的原因，最好還是以小寫來撰寫標籤。

## 分析 HTML 元素

讓我們更深入地探索段落中的元素：

![](grumpy-cat-small.png)

元素中主要的內容有:

1. **起始標籤**（opening tag）：它包含了元素的名字（在這裡是 p），夾在一對打開和關閉尖括號之間。它指明元素從何開始生效——在上例中則代表段落的開始。
2. **結束標籤**（closing tag）：結束標籤和起始標籤長得差不多，只不過它在名字前面還多加了一條斜線（forward slash）。它表示元素結束的地方——在上例中表示該段落的結束。忘記加上結束標籤是初學者常犯的錯誤，這將導致奇怪的結果。
3. **內容**（content）：元素的內容。在上例中就是一段文字。
4. **元素**（element）：以上三者加起來就是元素。

### 不要光是看：創造你的第一個 HTML 元素

編輯下面輸入區域中的文字，嘗試用 `<em>` 和 `</em>` 標籤包裹住文字（把 `<em>` 放在文字前面來起始元素，把 `</em>` 放在後面來結束元素），這會使得文字變成斜體字。你可以在下面的輸出區域看到更新後的變化。

如果你不小心打錯了，你可以按下 _Reset_ 鍵來重置。如果你卡關了，你可以點擊 _Show solution_ 鍵來偷看答案。

```html hidden
<h2>Live output</h2>
<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="min-height: 100px;width: 95%">
  This is my text.
</textarea>

<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution = "<em>This is my text.</em>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('不要光是看：創造你的第一個 HTML 元素', 700, 400) }}

### 巢狀元素（Nesting element）

你可以把元素放進另一個元素裡面——這叫做**巢狀元素**（nesting element）。比如說，我們想要強調我們的貓咪**非常**兇，我們可以用 {{htmlelement("strong")}} 元素來包住「very」這個字，這樣就可以標註我們想要強調的字:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

你必須確保你的元素正確地巢套：在上述範例中，我們先用了 `p` 元素，然後才用 `strong` 元素，因此我們必須先關閉 `strong` 元素，再關閉 `p` 元素。下面是錯誤示範：

```html example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

這些元素必須要正確地開啟與關閉，它們與其他元素的內外關係要相當明確。如果它們像上例這樣交互重疊，你的網頁瀏覽器將無法解讀，只能盡可能地猜測你的意思，因此你很有可能會得到一個不如預期的結果。所以，別這樣做！！

### 區塊級元素 vs. 行內元素（Block versus inline element）

在 HTML 中有兩種你應該要知道的重要元素類別——區塊級元素（block-level element）和行內元素（inline element）。

- 區塊級元素在頁面中組成一個可見區塊——它在頁面中單獨佔據一行，在它前後的內容都將以一個換行分隔。區塊級元素傾向於作為頁面上的結構化元素（structural element），舉凡段落、列表、導航選單（navigation menu）、頁尾（footer）等等皆是。區塊級元素不會巢套在行內元素中，但有可能會巢套其他區塊級元素中。
- 行內元素指的是放在區塊級元素之中的內容，這些元素只由文件內容的一小部分組成，而非由完整段落或群組式內容組成。一個行內元素不會在文件中產生新的一行，它們通常只會出現在一段文字中，舉例來說，{{htmlelement("a")}} 元素（超連結），或者強調元素如 {{htmlelement("em")}} 和 {{htmlelement("strong")}}。

以下面這個例子來說：

```html
<em>first</em><em>second</em><em>third</em>

<p>fourth</p>
<p>fifth</p>
<p>sixth</p>
```

{{htmlelement("em")}} 是一個行內元素，所以你可以看到下面的例子中，前三個元素互相緊鄰在同一行，兩兩中間並無任何空白。另一方面，{{htmlelement("p")}} 是一個區塊級元素，所以每個元素都自成一行，並且上下都有一些空間（這些空間是由於瀏覽器套用預設的[CSS styling](/zh-TW/docs/Learn/CSS/Introduction_to_CSS)到這些段落上的緣故）。

{{ EmbedLiveSample('區塊級元素_vs._行內元素Block_versus_inline_elements', 700, 200, "", "") }}

> **備註：** HTML5 重新定義了元素類別：請見 [Element content categories](http://www.whatwg.org/specs/web-apps/current-work/complete/section-index.html#element-content-categories)。新的定義比先前所定義的更為準確且少歧義性，因此它們也同時比 block 和 inline 還來得複雜，所以我們選擇在這裡繼續使用這個觀念。

> **備註：** 在本主題所使用的區塊級（block）與行內級（inline）這兩個名詞，不應與 CSS 的 box 種類混淆。它們在預設時是很像的，但改變 CSS 的顯示型態（display type）並不會改變元素的類別，也不會影響該元素能包含或被包含的元素類別。HTML5 之所以會重新定義元素類別，部分也是基於此一原因。

> **備註：** 你可以查看區塊級元素與行內級元素分別有哪些元素——請見[區塊級元素](/zh-TW/docs/Glossary/Block-level_content)和[行內級元素](/zh-TW/docs/Glossary/Inline-level_content)。

### 空元素

不是所有元素都符合起始標籤、內容、結束標籤的格式。有些元素只有一個標籤，這些標籤通常用來在文件中插入/嵌入物件。例如 {{htmlelement("img")}} 元素便是用來在當前位置嵌入圖片檔：

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" />
```

這將會產生下面的結果:

{{ EmbedLiveSample('空元素', 700, 300) }}

> **備註：** 空元素（empty element）有時也被稱作 _void element_。

## 屬性（Attribute）

你也可以在元素中加入屬性，像是：

![<p class="editor-note">My cat is very grumpy</p>](grumpy-cat-attribute-small.png)

屬性有著關於元素的額外資訊，但你並不會想要顯示它們。在這個例子中 `class` 屬性讓你能夠賦予一個元素辨別名稱，稍後就能用這個名稱來指定元素的樣式及其他的東西。

一個屬性應該要有：

1. 一個空白，用來隔開屬性和元素名稱（或者前一個屬性，如果該元素已經有一個以上的屬性的話）。
2. 屬性名稱以及一個接在其後的等號。
3. 屬性值以及一對包著它的引號。

### 主動學習：在元素中加入屬性

我們再舉另外一個元素的例子 {{htmlelement("a")}} 代表 anchor（錨），而這個元素會讓被它包裹住的內容變成一個超連結。它可以和很多種屬性搭配，以下僅列出幾種：

- `href`
  - : 這個屬性的值為你想要連到的網址，當連結被點擊時，瀏覽器就會導向到該網站。例如: `href="https://www.mozilla.org/"`。
- `title`
  - : `title` 屬性用來附加有關連結的其他資訊，像是連結到的網站名稱。例如: `title="The Mozilla homepage"` 。當游標移動到連結上時，就會以提示的方式顯示。
- `target`
  - : `target` 屬性用來指定要在哪裡打開網頁。例如：`target="_blank"` 會開啟新分頁。如果你想要在目前的分頁開啟網站，只要忽略這個屬性即可。

請編輯下面輸入區的文字，使它變成一個通往你最喜歡的網站的連結。

1. 首先，加入`<a>` 元素。
2. 再來，加入 `href` 屬性以及 `title` 屬性。
3. 最後，將 `target` 屬性設定為在新分頁中開啟。

你將會在底下的輸出區域裡面即時地看到你改動產生的變化。當你完成後，你應該會看到一個連結；當你滑過時，連結將顯示 `title` 屬性的內容；當你點擊連結時，將會導向到 `href` 元素中的網址。切記，你需要以空白隔開元素名字以及每一個屬性。

如果你不小心打錯了，你可以按下 _Reset_ 鍵重置。如果你卡關了，可以點擊 _Show solution_ 鍵來偷看答案。

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">
&lt;p&gt;A link to my favourite website.&lt;/p&gt;</textarea
>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 2em;
  padding: 10px;
  border: 1px solid #0095dd;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<p>A link to my <a href="https://www.mozilla.org/" title="The Mozilla homepage" target="_blank">favourite website</a>.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('主動學習：在元素中加入屬性', 700, 300) }}

### 布林屬性（Boolean attributes）

你有時會看到一些沒有值的屬性，這完全是可行的。它們叫做布林屬性，他們只能附帶一個值，而這個值一般來說會和屬性的名字一樣。以 [`disabled`](/zh-TW/docs/Web/HTML/Element/input#disabled) 屬性來說，你可以把它指派為 input 元素的屬性，使得輸入文字的框框變得不能輸入文字。

```html
<input type="text" disabled="disabled" />
```

你可以把它寫得更簡短（在下面的例子中，我們也寫出了沒有 disabled 屬性的 input 元素供你參考，讓你更了解兩者的差別）：

```html
<input type="text" disabled />

<input type="text" />
```

結果 :

{{ EmbedLiveSample('布林屬性Boolean_attributes' , 700, 100, "", "", "hide-codepen-jsfiddle") }}

### 忘記加屬性值的引號

當你看遍全世界的網頁，你就會發現各種千奇百怪的標記風格（markup style），包括沒加引號的屬性值。這在某些情況是被允許的，但在其他情況下則會使屬性結果不如預期。沿用我們之前的例子，我們先只用 `href` 屬性，如下：

```html
<a href=https://www.mozilla.org/>favourite website</a>
```

看起來沒甚麼問題，但是，一旦我們加上 `title` 屬性時，就會造成錯誤的結果：

```html
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favourite website</a>
```

此時瀏覽器會誤解你的標記，認為 `title` 屬性其實是三個屬性：一個值為 "The" 的標題屬性，以及兩個布林屬性 `Mozilla` 和 `homepage`。這絕對不是你想要的結果，而且會導致錯誤或者意想不到的行為。你可以看看下面的示範，把你的游標移到連結上，看看會出現什麼提示！

{{ EmbedLiveSample('忘記加屬性值的引號', 700, 100) }}

我們建議不管怎樣都要加屬性引號，避免這些錯誤，同時增加原始碼的可讀性。

### 要用單引號還是雙引號？（Single or double quote?）

在這個章節中，你會發現所有的屬性都是使用雙引號，而你可能會發現其他人的 HTML 中使用的是單引號。這純粹是個人風格，你可以依照你個人的喜好去使用它們。下面兩行的意思是相同的：

```html
<a href="http://www.example.com">A link to my example.</a>

<a href="http://www.example.com">A link to my example.</a>
```

但是，你應該確認你沒有混著使用它們。下面這行則會造成錯誤！

```html
<a href="http://www.example.com'>A link to my example.</a>
```

如果你在你的 HTML 中使用其中一種引號，你就可以包裹另外一種引號：

```html
<a href="http://www.example.com" title="Isn't this fun?"
  >A link to my example.</a
>
```

不過，如果你想要包裹相同種類的引號，你就必須要用到 [HTML entities](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Entity_references_including_special_characters_in_HTML)。例如，以下範例是錯的：

```html
 <a href='http://www.example.com' title='Isn't this fun?'>A link to my example.</a>
```

你應該要這樣寫：

```html
<a href="http://www.example.com" title="Isn&#39;t this fun?"
  >A link to my example.</a
>
```

## 解析 HTML 文件

以上講述了 HTML 中個別元素的基礎知識，但是單獨使用它們，並沒有多大用處。所以現在就讓我們來看看如何將這些元素組成一個 HTML 網頁吧：

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

這裡有：

1. `<!DOCTYPE html>`：文件類型（doctype）。 在很久很久以前，當 HTML 還年輕的時候（大約西元 1991 年），文件類型是要作為一系列規範的連結，HTML 網頁必須要遵守這些規範才會被當作是好的 HTML，比如說具備自動錯誤檢查和其他有用的東西等。在那個時候，它們看起來像這樣：

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   不過，現在已經沒有人在乎它們了，它們只是個歷史痕跡，需要形式上地被引入，以確保一切正常。`<!DOCTYPE html>` 是字數最短的有效 doctype。你只需要知道這些就夠了。

2. `<html></html>`：{{htmlelement("html")}} 元素。該元素包裹住頁面的所有內容，有時也被稱作根元素（root element）。
3. `<head></head>`：{{htmlelement("head")}} 元素。這個元素放著你想含括的所有重要資訊，這些資訊不會呈現在網頁瀏覽者眼前。這些東西包括，顯示於搜尋結果的關鍵字、頁面說明、CSS 等等。你將會在這個系列的下個章節中學到更多有關這部分的知識。
4. `<meta charset="utf-8">`：這個元素指定你的文件使用 UTF-8 為字元編碼，這種編碼含有這世上大部分語言的字元，理論上可以處理所有你想放文字內容，因此建議大家都要使用這種編碼，它能幫你免去許多煩惱。
5. `<title></title>`：{{htmlelement("title")}} 元素。這是用來設定網頁名稱的，它會顯示在分頁標籤上，當你將該網頁加入書籤或加入最愛時，則是用來形容這個網站。
6. `<body></body>`：{{htmlelement("body")}} 元素含括了*所有*你想要給網頁瀏覽者看到的內容，不管是文字、圖片、遊戲、可以播放的音樂或其他東西。

### 主動學習：在 HTML 文檔中加入一些特徵

如果你想試試看在你的電腦上寫一些 HTML，你可以：

1. 複製上面的 HTML 範例。
2. 在你的文字編輯器中建立一個新檔案。
3. 將剛複製的 HTML 範例貼到新開的檔案裡。
4. 將檔案儲存為 `index.html`。

> **備註：** 你也能在這找到 HTML 範例：[MDN Learning Area Github repo](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)。

接著你就可以用網頁瀏覽器開啟你的檔案，看看這些原始碼會被渲染（rendered）的樣子，然後編輯原始碼並重新整理瀏覽器，再看看會變成怎樣。目前你的網頁會長這樣：

![A simple HTML page that says This is my page](template-screenshot.png)在這個練習中，你可以在自己的電腦中撰寫原始碼，就像上面寫的一樣，或者你可以在底下的範例視窗中進行編輯（該視窗僅表示 {{htmlelement("body")}} 元素的內容）我們希望你依照以下的步驟逐步前行：

- 在 {{htmlelement("body")}} 之後，加入這個文件的主要標題。這應該由一個 `<h1>` 以及一個 `</h1>` 包著。
- 撰寫段落的內容，這些內容可以是一些你感興趣的事物。
- 讓其中重要的字詞以粗體顯示，讓它們更加搶眼，你可以用一個 `<strong>` 以及一個 `</strong>` 包著它們來達成這件事情。
- 加入一個連結到你的文章段落中，像[前面所講過的那樣](/zh-TW/Learn/HTML/Introduction_to_HTML/Getting_started#Active_learning_Adding_attributes_to_an_element)。
- 在這段文字的下面加入一張圖片，[像前面所說的那樣](/zh-TW/Learn/HTML/Introduction_to_HTML/Getting_started#Empty_elements)。如果你可以使用不同的圖片（你電腦裡的或網路上的都可以），你就能獲得加分！！

如果你不小心打錯了，你可以用 _Reset_ 鍵重置。如果你卡關了，可以點擊 _Show solution_ 鍵來偷看答案。

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">&lt;p&gt;This is my page&lt;/p&gt;</textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
}

img {
  max-width: 100%;
}

.output {
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<p>I really enjoy <strong>playing the drums</strong>. One of my favourite drummers is Neal Peart, who\
 plays in the band <a href="https://en.wikipedia.org/wiki/Rush_%28band%29" title="Rush Wikipedia article">Rush</a>.\
 My favourite Rush album is currently <a href="http://www.deezer.com/album/942295">Moving Pictures</a>.</p>\
<img src="http://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg">';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('主動學習：在 HTML 文檔中加入一些特徵', 700, 600) }}

### HTML 中的空格（Whitespace）

在上面的範例中，你可能會發現原始碼中有許多空格，其實這是完全不需要的，下面兩段原始碼會有相同的結果：

```html
<p>Dogs are silly.</p>

<p>Dogs are silly.</p>
```

不管你用多少空格（whitespace，包括空白字元與換行字元），HTML 的語法分析器都只會留下一個空格。所以說，為什麼要用這麼多空格呢？答案是為了增加可讀性——適當的排版會讓人更明白你的原始碼，所以千萬不要把你的原始碼擠成一團，讓它們變得雜亂無章。在我們的 HTML 中，我們將每個巢狀的元素都以兩個空格縮排。原始碼的排版風格（如要用多少空格進行縮排），可依照個人喜好使用，但你的排版方式應該要一致。

## 實體參照（Entity reference）：引用 HTML 中的特殊字元

在 HTML 中， `<` 、 `>` 、 `"` 、 `'` 和 `&` 是特殊字元，它們是 HTML 語法的一部份。那麼，要如何使用這些特殊字元呢？比方說，你如果想要用 `&`（ampersand）或小於符號 `<`（less than sign）時，要如何避免它們被瀏覽器當成原始碼呢？

這時候我們就需要用到字元參照（character references），它們是用來表示特殊字元的編碼，專門用在這種情形上。每個字元參照都是以 `&`（ampersand）起頭，以分號 `;`（semi-colon）做結。

| 字元 | 相應的字元引用 |
| ---- | -------------- |
| <    | &lt;           |
| >    | &gt;           |
| "    | &quot;         |
| '    | &apos;         |
| &    | &amp;          |

如果你英文不錯的話，應該不難發現字元參照其實就是這些字元的英文縮寫，也就是說，「\&lt;」為 less than （小於）；「\&gt;」為 great than（大於）；「\&quot;」為 quotation（引號）；「\&apos;」為 apostrophe （單引號）；「\&amp;」為 ampersand（和號）。你可以透過下面的維基連結來查看 HTML 的字元實體參照。在下面的範例中，你可以看到兩段敘述網頁技術的段落：

```html
<p>In HTML, you define a paragraph using the</p>
<p>element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

看到下面的輸出結果，你會發現第一個段落是錯誤的，因為瀏覽器認為第二個 `<p>` 是要開啟新段落。而第二個段落就沒問題，因為我們將 `<` 及 `>` 換成了字元參照。

{{ EmbedLiveSample('實體參照Entity_references_引用_HTML_中的特殊字元', 700, 200, "", "", "hide-codepen-jsfiddle") }}

> **備註：** 你可以在維基百科中找到完整的 HTML 字元實體參照的對照表：[List of XML and HTML character entity references](http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)。請記得只要你的 HTML 的[字元編碼設定為 UTF-8](Introduction_to_HTML/The_head_metadata_in_HTML#Specifying_your_document's_character_encoding)，你就不需要使用其他字元的實體參照，因為現今的瀏覽器都能應付。

## HTML 註解

HTML 就像大部分的程式語言，提供了一種能讓我們可以在原始碼中加入註解的方式——註解是會被瀏覽器忽略，並且不會被使用者看到的，它們存在的目的是要讓你得以在原始碼中說明你的原始碼是如何運作的、每段原始碼的作用等等。當你已經六個月沒有察看某個網頁的原始碼，而你完全想不起來你做了什麼的時候、或是當你把你的原始碼交給別人一同協作時，註解將會是你的好朋友！

試著將你 HTML 檔案中的一部份內容變成註解，你需要將內容包裹在特殊的符號 `<!--` 和 `-->` 之中，例如：

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

如你所見，在下方的範例中，第一個段落出現在輸出結果中，但第二個段落並沒有出現。

{{ EmbedLiveSample('HTML_註解', 700, 100) }}

## 總結

恭喜你看完了這個章節，我們你能享受這個學習基礎 HTML 的旅程！目前，你應該已經了解 HTML 長什麼樣子、它最基本的運作方式，並且能夠寫出一些元素和屬性。基礎 HTML 大致上就到這裡結束，在單元接下來的章節中，我們將會更深入探討本章節學到的內容並介紹更多 HTML 的觀念。千萬別轉台！

> **備註：** 目前，在你要開始學更多有關 HTML 的知識時，你可能也想要探索基礎的 [CSS](/zh-TW/docs/Learn/CSS)（Cascading Style Sheet）。CSS 是一種用來為你的網頁增添花樣的語言，例如改變字型、顏色，或改變頁面的布局。你很快就會發現，同時使用 HTML 和 CSS 會帶來很棒的效果。

## 參見

- [用 CSS 為 HTML 元素修改顏色](/zh-TW/docs/Web/HTML/Applying_color)

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}
