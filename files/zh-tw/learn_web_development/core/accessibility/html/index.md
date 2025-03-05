---
title: "HTML：無障礙的良好基礎"
slug: Learn_web_development/Core/Accessibility/HTML
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

網頁內容其實只要確保使用正確的 HTML 標籤，就可以實現無障礙性。本文將詳細介紹如何使用 HTML 來確保最大程度的無障礙性。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>需熟悉<a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-TW/docs/Learn_web_development/Core/Styling_basics">CSS</a>及<a href="/zh-TW/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">基礎無障礙相關概念</a>。</td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>
        <ul>
          <li>使用語意化 HTML，即「正確的元素做正確的工作」，因為瀏覽器提供了許多內建的無障礙 hook。</li>
          <li>無障礙最佳實踐，如替代文字、良好的連結文字、表單標籤，以及表格的行列標題和範圍定義。</li>
          <li>使用簡單明瞭的語言，盡可能避免俚語和縮寫，在無法避免時提供定義。</li>
          <li>鍵盤無障礙的概念和實踐。</li>
          <li>源始碼順序的重要性。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML 和無障礙

當你學習更多關於 HTML 的知識——閱讀更多資源、查看更多範例等——你會不斷看到一個共同的主題：使用語意化 HTML 的重要性（有時稱為 POSH，或 Plain Old Semantic HTML）。這意味著盡可能地使用正確的 HTML 標籤來表達正確的意圖。

你可能會想，為什麼語意化很重要。畢竟，你可以使用 CSS 和 JavaScript 的組合讓幾乎任何 HTML 元素以任何你想要的方式運作。例如，網站上播放影片的控制按鈕可以像這樣標記：

```html
<div>Play video</div>
```

你將會看到更好的寫法，它使用了正確的 HTML 標籤，整體看上去更合理了：

```html
<button>Play video</button>
```

HTML 的 `<button>` 標籤提供預設的樣式（也許你會想要覆蓋這些樣式），這些預設的標籤具備內建的鍵盤無障礙功能——使用者可以使用 <kbd>Tab</kbd> 鍵在按鈕之間導航，並使用 <kbd>Space</kbd>、<kbd>Return</kbd> 或 <kbd>Enter</kbd> 鍵來選擇。

語意化 HTML 如果從專案初始就使用，它不會比撰寫非語意化（不良）標記花更多時間。語意化標記除了無障礙性之外還有其他好處：

1. **便於開發** — 如上所述，可以免費獲得預設的功能，加上它們可以很輕易地被理解。
2. **更適合移動端** — 語意化 HTML 在檔案大小上可能比非語意化的雜亂程式碼更輕，也更容易實現響應式設計。
3. **對 SEO 友善** — 搜尋引擎對標題、連結等內部的關鍵字比包含在非語意化 `<div>` 等中的關鍵字給予更多重視，因此網頁會更容易被客戶找到。

讓我們來更近一步地了解無障礙 HTML 的細節。

## 好的語意

我們已經討論過正確語意的重要性，以及為什麼應該使用正確的 HTML 標籤。使用不當，是無障礙性嚴重受損的主要原因之一。
在網路世界中，事實是人們用 HTML 標籤做一些非常奇怪的事情。對 HTML 的濫用無非是因還未完全遺忘舊有的做法，有些則純粹是無知。無論如何，你應該替換這種不良程式碼。
有時你無法擺脫糟糕的標籤——頁面可能由某種無法完全控制的伺服器端框架生成，或者可能有無法控制的第三方內容（如廣告橫幅）。
目標不是「全有或全無」；我們能做的就是開始改進，這都將有助於無障礙性。

### 文字內容

對於螢幕閱讀器使用者來說，最好的無障礙輔助之一是有優良內容結構的網頁，包含標題、段落、清單等。一個優秀的語意化範例可能如下：

```html example-good
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<ol>
  <li>Here is</li>
  <li>a list for</li>
  <li>you to read</li>
</ol>

<h2>My subheading</h2>

<p>
  This is the first subsection of my document. I'd love people to be able to
  find this content!
</p>

<h2>My 2nd subheading</h2>

<p>
  This is the second subsection of my content, which I think is more interesting
  than the last one.
</p>
```

我們準備了一個較長文本的版本，供你使用螢幕閱讀器試用（請見 good-semantics.html）。如果你嘗試瀏覽這個頁面，你會發現它相當容易導航：

1. 當瀏覽內容時，螢幕閱讀器會讀出每個標題，告知你什麼是標題，什麼是段落等。
2. 它會在每個元素後停止，以舒適的步調前進。
3. 在許多螢幕閱讀器中，你可以跳到下一個/上一個標題。
4. 在許多螢幕閱讀器中，還可以叫出所有標題的列表，來作為便捷的目錄以尋找特定內容。

人們有時使用換行符來編寫標題、段落等，並純粹為了樣式增加 HTML 元素，類似下面這樣：

```html example-bad
<span style="font-size: 3em">My heading</span> <br /><br />
This is the first section of my document.
<br /><br />
I'll add another paragraph here too.
<br /><br />
1. Here is
<br /><br />
2. a list for
<br /><br />
3. you to read
<br /><br />
<span style="font-size: 2.5em">My subheading</span>
<br /><br />
This is the first subsection of my document. I'd love people to be able to find
this content!
<br /><br />
<span style="font-size: 2.5em">My 2nd subheading</span>
<br /><br />
This is the second subsection of my content. I think is more interesting than
the last one.
```

如果使用螢幕閱讀器試用這個較長版本（請見 [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)），將不會有很好的體驗——螢幕閱讀器沒有任何可用作標記的內容，所以無法獲取有用的目錄，整個頁面被視為一個巨大的區塊，因此會一次性全部讀出。
除了無障礙性之外還有其他問題——例如，使用 CSS 設計內容樣式或用 JavaScript 操作內容會更困難，因為沒有可用作選擇器的元素。

#### 使用易懂清楚的語言

頁面使用的語言也會影響無障礙性。一般來說，應該使用清晰、不過於複雜且不使用不必要專業術語或俚語的語言。這不僅有利於認知或其他障礙的人士；它也有利於非母語閱讀者、年輕人...，實際上是所有人！除此之外，也應該避免使用不能被螢幕閱讀器清楚讀出的語言和字符。例如：

1. 如果可以避免，請不要使用破折號。請寫「5 至 7」而非「5–7」。
2. 展開縮寫——寫「一月」而非「1月」。
3. 展開首字母縮略詞，至少一到兩次，然後使用 [`<abbr>`](/zh-TW/docs/Web/HTML/Element/abbr) 標籤來描述它們。

### 頁面佈局

過去，人們曾經使用 HTML 表格來建立頁面佈局——使用不同的表格儲存格來包含頁首、頁尾、側邊欄、主要內容欄等。這不是一個好主意，因為螢幕閱讀器讀出令人困惑的內容，特別是當佈局複雜且有許多嵌套表格時。
試試以下的範例 [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html)：

```html
<table width="1200">
  <!-- main heading row -->
  <tr id="heading">
    <td colspan="6">
      <h1 align="center">Header</h1>
    </td>
  </tr>
  <!-- nav menu row -->
  <tr id="nav" bgcolor="#ffffff">
    <td width="200">
      <a href="#" align="center">Home</a>
    </td>
    <td width="200">
      <a href="#" align="center">Our team</a>
    </td>
    <td width="200">
      <a href="#" align="center">Projects</a>
    </td>
    <td width="200">
      <a href="#" align="center">Contact</a>
    </td>
    <td width="300">
      <form width="300">
        <label
          >Search
          <input
            type="search"
            name="q"
            placeholder="Search query"
            width="300" />
        </label>
      </form>
    </td>
    <td width="100">
      <button width="100">Go!</button>
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- main content and aside row -->
  <tr id="main">
    <td id="content" colspan="4">
      <!-- main content goes here -->
    </td>
    <td id="aside" colspan="2" valign="top">
      <h2>Related</h2>

      <!-- aside content goes here -->
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- footer row -->
  <tr id="footer">
    <td colspan="6">
      <p>©Copyright 1996 by nobody. All rights reversed.</p>
    </td>
  </tr>
</table>
```

如果你嘗試使用螢幕閱讀器來導航，它可能會告訴你有一個表格需要查看（儘管有些螢幕閱讀器可以猜測表格佈局和資料表格之間的差異）。你可能也需要（取決於你使用的螢幕閱讀器）進入表格作為一個物件，單獨查看其特性，然後再從表格中退出才能繼續導航內容。
表格佈局是過去的遺物——在瀏覽器的 CSS 支援不普及時是有意義的，但現在它們會對螢幕閱讀器使用者帶來困擾。此外，因為需要更多標籤，將會變得不靈活且更難維護。你可以透過比較先前的體驗與更現代的網站結構範例來驗證這些說法，它看起來可能像這樣：

```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <!-- main navigation in here -->
</nav>

<!-- Here is our page's main content -->
<main>
  <!-- It contains an article -->
  <article>
    <h2>Article heading</h2>

    <!-- article content in here -->
  </article>

  <aside>
    <h2>Related</h2>

    <!-- aside content in here -->
  </aside>
</main>

<!-- And here is our main footer that is used across all the pages of our website -->

<footer>
  <!-- footer content in here -->
</footer>
```

如果你使用螢幕閱讀器嘗試更現代結構範例，你會注意到佈局標籤不再干擾或造成內容讀出的混亂。就程式碼大小而言，也更精簡小巧，這意味著程式碼更容易維護，使用者需要下載的頻寬更少，也有益於網路連線較慢的使用者。

在建立佈局時，另一個考量是使用如上例所示的 HTML 語意元素 (請見 [此內容](/zh-TW/docs/Web/HTML/Element#content_sectioning)) — 你僅能使用嵌套的 {{htmlelement("div")}} 元素來建立佈局，但更好的是使用正確的區塊元素來包裹主要的導航 ({{htmlelement("nav")}})、`footer` ({{htmlelement("footer")}})、重複的內容單元 ({{htmlelement("article")}}) 等。這些為螢幕閱讀器（和其他工具）提供額外的語意，給使用者有關當下瀏覽的內容的額外線索（請見[螢幕閱讀器對新 HTML5 區段元素](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/)的支援，了解螢幕閱讀器支援的情況）。

> [!NOTE]
> 除了擁有良好的語意和吸引人的佈局外，內容在原始碼順序中應該具有邏輯性——你之後可以用 CSS 擺在想要的位置，但前提是要先確保原始碼順序正確，這樣螢幕閱讀器使用者聽到的內容才有意義。

### UI 控制

所謂的 UI 控制，我們指的是使用者與其互動的網頁文件主要部分——最常見的是按鈕、連結和表單控件。在本節中，我們將探討建立這類控制項時需要注意的基本無障礙性問題。後續關於 WAI-ARIA 和多媒體的文章將探討 UI 無障礙性的其他方面。

UI 控制無障礙性的一個關鍵方面是，默認情況下，瀏覽器允許使用鍵盤操作它們。你可以使用我們的 [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) 範例來嘗試（查看[原始碼](ttps://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)）。在新分頁中打開它，並嘗試按 Tab 鍵；按幾下後，你應該會看到 Tab 焦點開始在不同的可聚焦元素間移動。每個瀏覽器中，被聚焦的元素都會有一個默認的強調樣式（在不同瀏覽器之間略有不同），這樣就能知道哪個元素被聚焦了。

![三個按鈕，分別顯示文字「Click me!」、「Click me too!」和「And me!」。第三個按鈕周圍有藍色輪廓，表示目前的 Tab 鍵焦點在此按鈕上。](button-focused-unfocused.png)

> [!NOTE]
> 你可以在開發者工具中啟用一個顯示頁面 Tab 鍵順序的覆蓋層。更多資訊請參見： [無障礙檢測器 > 顯示網頁 Tab 鍵順序](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

然後你可以按 Enter/Return 鍵來跟隨已聚焦的連結或按下按鈕（我們已經加入一些 JavaScript 讓按鈕顯示提示訊息），或開始輸入來在文字輸入框中輸入文字。其他表單元素有不同的控制方式；例如，可以使用上下箭頭鍵來顯示 {{htmlelement("select")}} 元素的選項並在它們之間循環選擇。

基本上你可以透過使用這些合適的標籤來免費獲得這些功能，例如：

```html example-good
<h1>Links</h1>

<p>This is a link to <a href="https://www.mozilla.org">Mozilla</a>.</p>

<p>
  Another link, to the
  <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.
</p>

<h2>Buttons</h2>

<p>
  <button data-message="This is from the first button">Click me!</button>
  <button data-message="This is from the second button">Click me too!</button>
  <button data-message="This is from the third button">And me!</button>
</p>

<h2>Form</h2>

<form>
  <div>
    <label for="name">Fill in your name:</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Enter your age:</label>
    <input type="text" id="age" name="age" />
  </div>
  <div>
    <label for="mood">Choose your mood:</label>
    <select id="mood" name="mood">
      <option>Happy</option>
      <option>Sad</option>
      <option>Angry</option>
      <option>Worried</option>
    </select>
  </div>
</form>
```

這意味著適當地使用連結、按鈕、表單元素和標籤（包括為表單控制使用 {{htmlelement("label")}} 元素）。
然而，人們有時會對 HTML 做一些奇怪的事情。像是有時會看到使用 {{htmlelement("div")}} 元素來標記按鈕，例如：

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

但不建議使用這樣的程式碼——這樣會立即失去使用 {{htmlelement("button")}} 元素的原生鍵盤無障礙功能，也不會獲得按鈕的任何默認 CSS 樣式。在極少數到幾乎不存在的情況下，若你需要使用非按鈕元素作為按鈕時，請使用 [`button role`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/button_role) 並實現所有默認按鈕行為，包括鍵盤和滑鼠按鈕支援。

#### 重建鍵盤無障礙性

重新加入這些默認優勢需要一些額外的工作（你可以 [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) 查看範例——也可以查看[原始碼](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)）。在這裡，我們為假的 `<div>` 按鈕提供了可以被聚焦的能力（包括通過 tab 鍵），方法是給每個按鈕新增屬性 `tabindex="0"`。我們還包含了 `role="button"`，這樣螢幕閱讀器使用者就知道他們可以聚焦並與該元素互動：

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
<div data-message="This is from the second button" tabindex="0" role="button">
  Click me too!
</div>
<div data-message="This is from the third button" tabindex="0" role="button">
  And me!
</div>
```

基本上，[`tabindex`](/zh-TW/docs/Web/HTML/Global_attributes/tabindex) 屬性主要是允許可標籤元素擁有自定義的標籤順序（以正數數字順序指定），而不僅僅是按照在原始碼中的默認順序進行標籤。由於它可能會導致重大混淆，因此建議只有在真正需要時才使用它，例如，如果佈局顯示的內容在視覺順序上與原始碼相差很大，而你希望它運作得更符合邏輯。`tabindex` 還有兩個其他選項：

- `tabindex="0"` — 如上所述，此值允許通常不可標籤的元素變得可標籤。這是 `tabindex` 最有用的值。
- `tabindex="-1"` — 這允許通常不可標籤的元素通過程式接收焦點，例如，通過 JavaScript，或作為連結的目標。

雖然上述允許我們使用 tab 鍵導航到按鈕，但它不允許我們通過 <kbd>Enter</kbd>/<kbd>Return</kbd> 鍵啟用它們。為此，我們必須新增以下 JavaScript：

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Here we add a listener to the `document` object to detect when a button has been pressed on the keyboard. We check what button was pressed via the event object's [`key`](/zh-TW/docs/Web/API/KeyboardEvent/key) property; if the key pressed is <kbd>Enter</kbd>/<kbd>Return</kbd>, we run the function stored in the button's `onclick` handler using `document.activeElement.click()`. [`activeElement`](/zh-TW/docs/Web/API/Document/activeElement) which gives us the element that is currently focused on the page.

在這裡，我們向 `document` 物件新增一個監聽器，來檢測何時在鍵盤上按下了按鈕。我們通過事件物件的 [`key`](/zh-TW/docs/Web/API/KeyboardEvent/key) 屬性檢查按下了什麼按鈕；如果按下的是 <kbd>Enter</kbd>/<kbd>Return</kbd> 鍵，我們使用 `document.activeElement.click()` 執行儲存在按鈕 `onclick` 處理程式中的函式。[`activeElement`](/zh-TW/docs/Web/API/Document/activeElement) 為我們提供了頁面上當前聚焦的元素。

重建這些功能會帶來許多額外的麻煩。而且肯定還有其他問題。**因此從一開始就使用正確的元素做正確的工作是最佳解**。

#### 有意義的文字標籤

UI 控制文字標籤對所有使用者都非常有用，但對身心障礙使用者來說，正確設置這些標籤極為重要。

你應確保你的按鈕和連結文字標籤易於理解且具有獨特性。不要只使用「點擊這裡」作為標籤，因為螢幕閱讀器使用者有時會調出按鈕和表單控件的列表。下面的截圖顯示了我們的控制項在 Mac 上被 VoiceOver 列出的情況。

![Mac 上 VoiceOver 軟體列出的表單輸入標籤列表。這個列表包含了給予各種表單控制項（如按鈕、文字欄位和連結）的無意義標籤，例如「happy menu button」](voiceover-formcontrols.png)

確保你的標籤在脫離上下文時、單獨閱讀時以及所在段落的上下文中都是有意義的。例如，下列展示了一個好的連結文字範例：

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

這是一個不好的示範：

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> 你可以在這篇[建立連結](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Creating_links)的文章中找到更多關於連結實作和最佳實踐的資訊。也可以在[good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html)和[bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html)查看好的和不好的範例。

表單標籤對於提示需要在每個表單輸入什麼內容也很重要。以下看起來是一個相當合理的例子：

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

然而，這對身心障礙使用者來說並不是那麼有用。上述例子中沒有任何東西能明確地將標籤與表單輸入框關聯起來，並且如果看不到它，也不清楚如何填寫。如果使用某些螢幕閱讀器訪問它，可能只會得到類似「edit text」這樣的描述。

以下是一個更好的例子：

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

使用這樣的程式碼，標籤將與輸入框明確關聯；描述會更像是「填寫你的姓名：編輯文字。」

![一個寫著「填寫你的姓名」的良好表單標籤被賦予給一個文字輸入表單控件。](voiceover-good-form-label.png)

額外的好處是，大多數瀏覽器中，將標籤與表單輸入框關聯意味著可以點擊標籤來選擇或啟動表單元素。這為輸入框提供了更大的點擊區域，使其更容易選擇。

> [!NOTE]
> 你可以在[good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html)和[bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html)中查看一些良好的和不良的表單範例。

你可以在以下影片中找到關於適當文字標籤重要性的詳細解釋，以及如何使用[Firefox無障礙檢查器](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)調查文字標籤問題：

{{EmbedYouTube("YhlAVlfH0rQ")}}

## 無障礙資料表格

基本資料表格可以使用非常簡單的標記語言來撰寫，舉例如下：

```html
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Pronouns</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
    <td>he/him</td>
  </tr>
  <tr>
    <td>Elva</td>
    <td>8</td>
    <td>she/her</td>
  </tr>
  <tr>
    <td>Freida</td>
    <td>5</td>
    <td>she/her</td>
  </tr>
</table>
```

但這段內容有個問題 — 對於螢幕閱讀器使用者來說，無法將列或欄關聯成資料群組。要做到這一點，需要知道標題列是什麼，以及它們是標示列或欄位等。在前面提到的表格中，這些只能透過視覺方式辨別（請參閱 [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) 並親自嘗試這個範例）。

現在來看看我們的[龐克樂團表格](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html)範例 — 你可以看到一些無障礙輔助功能在其中運作：

- 表格標題是使用 {{htmlelement("th")}} 元素定義 — 你也可以透過 `scope` 屬性指定它們是列或欄位的標題。這提供了完整的資料群組，螢幕閱讀器可以將其視為單一單元。
- {{htmlelement("caption")}} 元素和 `<table>` 元素的 `summary` 屬性功能相似 — 它們充當表格的替代文字，為螢幕閱讀器使用者提供表格內容的快速摘要。一般而言，較推薦使用 `<caption>` 元素，因為它的內容對於有視力的使用者也同樣有幫助。兩者通常不需要同時使用。

> [!NOTE]
> 查看我們的 [HTML 表格無障礙](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) 文章來了解更多關於無障礙資料表格的相關細節。

## 替代文字

相較於文字內容本身就具有無障礙性，多媒體內容卻不盡然 — 影像和影片內容對於視障人士來說是看不見的，音訊內容對於聽障人士來說是聽不到的。我們在[無障礙多媒體](/zh-TW/docs/Learn_web_development/Core/Accessibility/Multimedia)單元中會詳細討論影片和音訊內容，但在本文中，我們將聚焦於簡單的 {{htmlelement("img")}} 元素的無障礙性。

我們已經準備了一個簡單的範例，[accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html)，內含四份相同的影像：

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="一隻紅色暴龍：一隻像人一樣直立站立的雙腳恐龍，有小小的手臂，以及一個佈滿尖銳牙齒的大頭" />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur" />

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like
  a human, with small arms, and a large head with lots of sharp teeth.
</p>
```

當透過螢幕閱讀器檢視第一張影像時，實際上並未為使用者提供太多協助 — 舉例來說，VoiceOver 只會念出「/dinosaur.png, 影像」。它試圖透過唸出檔案名稱來提供一些資訊。在這個範例中，使用者至少會知道這是某種恐龍，但通常檔案可能是透過數位相機上傳，這些機器產生的檔案名稱很可能無法提供影像內容的任何上下文。

> [!NOTE]
> 絕對不要在影像中包含文字內容 — 螢幕閱讀器無法存取它。另外還有其他缺點 — 你無法選取及複製貼上文字。千萬不要這麼做！

當螢幕閱讀器遇到第二張影像時，會唸出完整的替代文字（alt attribute）— 「一隻紅色暴龍：一隻像人一樣直立站立的雙腳恐龍，有小小的手臂，以及一個佈滿尖銳牙齒的大頭」。

這突顯了兩個重要性：不僅要使用有意義的檔案名稱（以防無法使用替代文字），還要確保在可能的情況下，在 alt 屬性中提供**替代文字**。

`alt` 屬性的內容應該直接呈現影像及其視覺傳達的內容。替代文字應該簡潔扼要，包含影像中未在周圍文字重複的所有資訊。

對於單一影像的 `alt` 屬性內容，其撰寫方式會因脈絡而異。舉例來說： 如果一張 Fluffy 影像是一篇難吃的狗食評論旁邊的頭像，那麼替代文字為 `alt="Fluffy"` 是適當的。如果照片是在動物救援協會的 Fluffy 認養頁面，則應該包含對於可能的養狗人士來說重要且周圍文字未提及的資訊。例如 `alt="Fluffy，一隻三色短毛犬，嘴裡咬著網球" 就很合適`。 周圍文字可能已經提到 Fluffy 的體型和品種，所以不需要再重覆。然而，由於狗狗的生平介紹可能未提及毛髮長度、顏色或玩具喜好，這些對潛在領養人很重要，因此值得包含在`alt`內。影像是否在戶外，或 Fluffy 是否戴紅色項圈搭配藍色牽繩？這些對於認養寵物來說並不重要，所以不需要納入。關鍵是傳達影像中對有視力的使用者可見且與脈絡相關的所有資訊 — 既不多也不少。保持簡短、精確且有用。

不應該加入任何個人知識或額外描述，因為這對於未曾見過影像的人無法提供有用的資訊。如果網球是 Fluffy 最喜歡的玩具，但這一點無法從影像中直接判斷，那麼就不應該將其納入描述中。
替代文字的目的是準確且客觀地描述影像的視覺內容，僅包含有視力的使用者能夠直接從影像中觀察到的資訊。任何無法從影像本身推斷的額外資訊都不應被納入。這確保了替代文字對所有使用者都具有一致且實用的資訊價值。

需要考慮你的影像是否在內容中具有意義，還是純粹作為視覺裝飾，因此沒有實質意涵。如果是裝飾性影像，較好的做法是將 `alt` 屬性的值設為空字串（參見[空 alt 屬性](#empty_alt_attributes)）或僅將其包含在頁面中作為 CSS 背景影像。

> [!NOTE]
> 閱讀 [HTML 影像](/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_images) and [Responsive images](/zh-TW/docs/Web/HTML/Responsive_images) 獲取更多關於影像的最佳實踐。
> 你也可以查看 [替代文字決策樹](https://www.w3.org/WAI/tutorials/images/decision-tree/) 來學習如何在不同的情境下為影像撰寫替代文字。

If you do want to provide extra contextual information, you should put it in the text surrounding the image, or inside a `title` attribute, as shown above. In this case, most screen readers will read out the alt text, the title attribute, and the filename. In addition, browsers display title text as tooltips when moused over.

![Screenshot of a red Tyrannosaurus Rex with the text "The mozilla red dinosaur" displayed as tooltip on mouseover.](title-attribute.png)

Let's have another quick look at the fourth method:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

In this case, we are not using the `alt` attribute at all — instead, we have presented our description of the image as a regular text paragraph, given it an `id`, and then used the `aria-labelledby` attribute to refer to that `id`, which causes screen readers to use that paragraph as the alt text/label for that image. This is especially useful if you want to use the same text as a label for multiple images — something that isn't possible with `alt`.

> **Note:** [`aria-labelledby`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) is part of the [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) spec, which allows developers to add in extra semantics to their markup to improve screen reader accessibility where needed.

### Figures and figure captions

HTML includes two elements — {{htmlelement("figure")}} and {{htmlelement("figcaption")}} — which associate a figure of some kind (it could be anything, not necessarily an image) with a figure caption:

```html
<figure>
  <img
    src="dinosaur.png"
    alt="The Mozilla Tyrannosaurus"
    aria-describedby="dinodescr" />
  <figcaption id="dinodescr">
    A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a
    human, with small arms, and a large head with lots of sharp teeth.
  </figcaption>
</figure>
```

While there is mixed screen reader support of associating figure captions with their figures, including [`aria-labelledby`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or [`aria-describedby`](/zh-TW/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) creates the association if none is present. That said, the element structure is useful for CSS styling, plus it provides a way to place a description of the image next to it in the source.

### Empty alt attributes

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

There may be times where an image is included in a page's design, but its primary purpose is for visual decoration. You'll notice in the code example above that the image's `alt` attribute is empty — this is to make screen readers recognize the image, but not attempt to describe the image (instead they'd just say "image", or similar).

The reason to use an empty `alt` instead of not including it is because many screen readers announce the whole image URL if no `alt` is provided. In the above example, the image is acting as a visual decoration to the heading it's associated with. In cases like this, and in cases where an image is only decoration and has no content value, you should include an empty `alt` in your `img` elements. Another alternative is to use the aria [`role`](/zh-TW/docs/Web/Accessibility/ARIA/Roles) attribute [`role="presentation"`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role) as this also stops screen readers from reading out alternative text.

> [!NOTE]
> If possible you should use CSS to display images that are only decorative.

## More on links

Links (the [`<a>`](/zh-TW/docs/Web/HTML/Element/a) element with an `href` attribute), depending on how they are used, can help or harm accessibility. By default, links are accessible in appearance. They can improve accessibility by helping a user quickly navigate to different sections of a document. They can also harm accessibility if their accessible styling is removed or if JavaScript causes them to behave in unexpected ways.

### Link styling

By default, links are visually different from other text in both color and [text-decoration](/zh-TW/docs/Web/CSS/text-decoration), with links being blue and underlined by default, purple and underlined if visited, and with a [focus-ring](/zh-TW/docs/Web/CSS/:focus) when they receive keyboard focus.

Color should not be used as the sole method of distinguishing links from non-linking content. Link text color, like all text, has to be significantly different from the background color ([a 4.5:1 contrast](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). In addition, links should visually be significantly different from non-linking text, with a minimum contrast requirement of 3:1 between link text and surrounding text and between default, visited, and focus/active states and a 4.5:1 contrast between all those state colors and the background color.

### `onclick` events

Anchor tags are often abused with the `onclick` event to create pseudo-buttons by setting **href** to `"#"` or `"javascript:void(0)"` to prevent the page from refreshing.

These values cause unexpected behavior when copying or dragging links, opening links in a new tab or window, bookmarking, and when JavaScript is still downloading, errors out, or is disabled. This also conveys incorrect semantics to assistive technologies (e.g., screen readers). In these cases, it is recommended to use a {{HTMLElement("button")}} instead. In general you should only use an anchor for navigation using a proper URL.

### External links and linking to non-HTML resources

Links that open in a new tab or window via the `target="_blank"` declaration and links to whose `href` value points to a file resource should include an indicator about the behavior that will occur when the link is activated.

People experiencing low vision conditions, who are navigating with the aid of screen reading technology, or who have cognitive concerns may become confused when the new tab, window, or application is opened unexpectedly. Older versions of screen reading software may not even announce the behavior.

#### Link that opens a new tab or window

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (opens in a new window)</a
>
```

#### Link to a non-HTML resource

```html
<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

If an icon is used in place of text to signify this kind of links behavior, make sure it includes an [alternate description](/zh-TW/docs/Web/HTML/Element/img#alt).

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip links

A skip link, also known as skipnav, is an `a` element placed as close as possible to the opening {{HTMLElement("body")}} element that links to the beginning of the page's main content. This link allows people to bypass content repeated throughout multiple pages on a website, such as a website's header and primary navigation.

Skip links are especially useful for people who navigate with the aid of assistive technology such as switch control, voice command, or mouth sticks/head wands, where the act of moving through repetitive links can be a laborious task.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How–to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Proximity

Large amounts of interactive content—including anchors—placed in close visual proximity to each other should have space inserted to separate them. This spacing is beneficial for people who suffer from fine motor control issues and may accidentally activate the wrong interactive content while navigating.

Spacing may be created using CSS properties such as {{CSSxRef("margin")}}.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Test your skills

You've reached the end of this article, but can you remember the most important information? See [Test your skills: HTML Accessibility](/zh-TW/docs/Learn_web_development/Core/Accessibility/Test_your_skills:_HTML_accessibility) to verify that you've retained this information before you move on.

## Summary

You should now be well-versed in writing accessible HTML for most occasions. Our WAI-ARIA basics article will help to fill gaps in this knowledge, but this article has taken care of the basics. Next up we'll explore CSS and JavaScript, and how accessibility is affected by their good or bad use.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
