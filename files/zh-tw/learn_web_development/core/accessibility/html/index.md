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

In the bad old days, people used to create page layouts using HTML tables — using different table cells to contain the header, footer, sidebar, main content column, etc. This is not a good idea because a screen reader will likely give out confusing readouts, especially if the layout is complex and has many nested tables.

Try our example [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html) example, which looks something like this:

在過去的時期，人們曾經使用 HTML 表格來建立頁面佈局——使用不同的表格儲存格來包含頁首、頁尾、側邊欄、主要內容欄等。這不是一個好主意，因為螢幕閱讀器讀出令人困惑的內容，特別是當佈局複雜且有許多嵌套表格時。
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

If you try to navigate this using a screen reader, it will probably tell you that there's a table to be looked at (although some screen readers can guess the difference between table layouts and data tables). You'll then likely (depending on which screen reader you're using) have to go down into the table as an object and look at its features separately, then get out of the table again to carry on navigating the content.

Table layouts are a relic of the past — they made sense back when CSS support was not widespread in browsers, but now they just create confusion for screen reader users. Additionally, their source code requires more markup, which makes them less flexible and more difficult to maintain. You can verify these claims by comparing your previous experience with a [more modern website structure example](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/), which could look something like this:

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
> In addition to having good semantics and an attractive layout, your content should make logical sense in its source order — you can always place it where you want using CSS later on, but you should get the source order right to start with, so what screen reader users get read out to them will make sense.

### UI controls

By UI controls, we mean the main parts of web documents that users interact with — most commonly buttons, links, and form controls. In this section, we'll look at the basic accessibility concerns to be aware of when creating such controls. Later articles on WAI-ARIA and multimedia will look at other aspects of UI accessibility.

One key aspect of the accessibility of UI controls is that by default, browsers allow them to be manipulated by the keyboard. You can try this out using our [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) example (see the [source code](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Open this in a new tab, and try pressing the tab key; after a few presses, you should see the tab focus start to move through the different focusable elements. The focused elements are given a highlighted default style in every browser (it differs slightly between different browsers) so that you can tell what element is focused.

![Three buttons with the text "Click me!", "Click me too!", and "And me!" inside them respectively. The third button has a blue outline around it to indicate current tab focus.](button-focused-unfocused.png)

> [!NOTE]
> You can enable an overlay that shows the page tabbing order in your developer tools. For more information see: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

You can then press Enter/Return to follow a focused link or press a button (we've included some JavaScript to make the buttons alert a message), or start typing to enter text in a text input. Other form elements have different controls; for example, the {{htmlelement("select")}} element can have its options displayed and cycled between using the up and down arrow keys.

You essentially get this behavior for free, just by using the appropriate elements, e.g.

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

This means using links, buttons, form elements, and labels appropriately (including the {{htmlelement("label")}} element for form controls).

However, it is again the case that people sometimes do strange things with HTML. For example, you sometimes see buttons marked up using {{htmlelement("div")}}s, for example:

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

But using such code is not advised — you immediately lose the native keyboard accessibility you would have had if you'd just used {{htmlelement("button")}} elements, plus you don't get any of the default CSS styling that buttons get. In the rare to non-existent case when you need to use a non-button element for a button, use the [`button` role](/zh-TW/docs/Web/Accessibility/ARIA/Roles/button_role) and implement all the default button behaviors, including keyboard and mouse button support.

#### Building keyboard accessibility back in

Adding such advantages back in takes a bit of work (you can see an example in our [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) example — also see the [source code](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Here we've given our fake `<div>` buttons the ability to be focused (including via tab) by giving each one the attribute `tabindex="0"`. We also include `role="button"` so screen reader users know they can focus on and interact with the element:

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

Basically, the [`tabindex`](/zh-TW/docs/Web/HTML/Global_attributes/tabindex) attribute is primarily intended to allow tabbable elements to have a custom tab order (specified in positive numerical order), instead of just being tabbed through in their default source order. This is nearly always a bad idea, as it can cause major confusion. Use it only if you really need to, for example, if the layout shows things in a very different visual order to the source code, and you want to make things work more logically. There are two other options for `tabindex`:

- `tabindex="0"` — as indicated above, this value allows elements that are not normally tabbable to become tabbable. This is the most useful value of `tabindex`.
- `tabindex="-1"` — this allows not normally tabbable elements to receive focus programmatically, e.g., via JavaScript, or as the target of links.

While the above addition allows us to tab to the buttons, it does not allow us to activate them via the <kbd>Enter</kbd>/<kbd>Return</kbd> key. To do that, we had to add the following bit of JavaScript trickery:

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Here we add a listener to the `document` object to detect when a button has been pressed on the keyboard. We check what button was pressed via the event object's [`key`](/zh-TW/docs/Web/API/KeyboardEvent/key) property; if the key pressed is <kbd>Enter</kbd>/<kbd>Return</kbd>, we run the function stored in the button's `onclick` handler using `document.activeElement.click()`. [`activeElement`](/zh-TW/docs/Web/API/Document/activeElement) which gives us the element that is currently focused on the page.

This is a lot of extra hassle to build the functionality back in. And there's bound to be other problems with it. **Better to just use the right element for the right job in the first place.**

#### Meaningful text labels

UI control text labels are very useful to all users, but getting them right is particularly important to users with disabilities.

You should make sure that your button and link text labels are understandable and distinctive. Don't just use "Click here" for your labels, as screen reader users sometimes get up a list of buttons and form controls. The following screenshot shows our controls being listed by VoiceOver on Mac.

![List of form input labels being listed by VoiceOver software on Mac. This list contains meaningless labels like 'happy menu button` given to various form controls like button, textfield and link](voiceover-formcontrols.png)

Make sure your labels make sense out of context, read on their own, as well as in the context of the paragraph they are in. For example, the following shows an example of good link text:

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

but this is bad link text:

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> [!NOTE]
> You can find a lot more about link implementation and best practices in our [Creating links](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Creating_links) article. You can also see some good and bad examples at [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) and [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html).

Form labels are also important for giving you a clue about what you need to enter into each form input. The following seems like a reasonable enough example:

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

However, this is not so useful for disabled users. There is nothing in the above example to associate the label unambiguously with the form input and make it clear how to fill it in if you cannot see it. If you access this with some screen readers, you may only be given a description along the lines of "edit text."

The following is a much better example:

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

With code like this, the label will be clearly associated with the input; the description will be more like "Fill in your name: edit text."

![A good form label that reads 'Fill in your name' is given to a text input form control. ](voiceover-good-form-label.png)

As an added bonus, in most browsers associating a label with a form input means that you can click the label to select or activate the form element. This gives the input a bigger hit area, making it easier to select.

> [!NOTE]
> You can see some good and bad form examples in [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) and [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html).

You can find a nice explanation of the importance of proper text labels, and how to investigate text label issues using the [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html), in the following video:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Accessible data tables

A basic data table can be written with very simple markup, for example:

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

But this has problems — there is no way for a screen reader user to associate rows or columns together as groupings of data. To do this, you need to know what the header rows are and if they are heading up rows, columns, etc. This can only be done visually for the above table (see [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) and try the example out yourself).

Now have a look at our [punk bands table example](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) — you can see a few accessibility aids at work here:

- Table headers are defined using {{htmlelement("th")}} elements — you can also specify if they are headers for rows or columns using the `scope` attribute. This gives you complete groups of data that can be consumed by screen readers as single units.
- The {{htmlelement("caption")}} element and the `<table>` element's `summary` attribute both do similar jobs — they act as alt text for a table, giving a screen reader user a useful quick summary of the table's contents. The `<caption>` element is generally preferred as it makes it's content accessible to sighted users too, who might also find it useful. You don't really need both.

> [!NOTE]
> See our [HTML table accessibility](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) article for more details about accessible data tables.

## Text alternatives

Whereas textual content is inherently accessible, the same cannot necessarily be said for multimedia content — image and video content cannot be seen by visually-impaired people, and audio content cannot be heard by hearing-impaired people. We cover video and audio content in detail in the [Accessible multimedia](/zh-TW/docs/Learn_web_development/Core/Accessibility/Multimedia), but for this article we'll look at accessibility for the humble {{htmlelement("img")}} element.

We have a simple example written up, [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), which features four copies of the same image:

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />

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

The first image, when viewed by a screen reader, doesn't really offer the user much help — VoiceOver for example reads out "/dinosaur.png, image". It reads out the filename to try to provide some help. In this example the user will at least know it is a dinosaur of some kind, but often files may be uploaded with machine-generated file names (e.g. from a digital camera) and these file names would likely provide no context to the image's content.

> [!NOTE]
> This is why you should never include text content inside an image — screen readers can't access it. There are other disadvantages too — you can't select it and copy/paste it. Just don't do it!

When a screen reader encounters the second image, it reads out the full alt attribute — "A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.".

This highlights the importance of not only using meaningful file names in case so-called **alt text** is not available, but also making sure that alt text is provided in `alt` attributes wherever possible.

Note that the contents of the `alt` attribute should always provide a direct representation of the image and what it conveys visually. The alt should be brief and concise and include all the information conveyed in the image that is not duplicated in the surrounding text.

The content of the `alt` attribute for a single image differs based on the context. For example, if the photo of Fluffy is an avatar next to a review for Yuckymeat dog food, `alt="Fluffy"` is appropriate. If the photo is part of Fluffy's adoption page for the animal rescue society, information conveyed in the image that is relevant for a prospective dog parent that is not duplicated in the surrounding text should be included. A longer description, such as `alt="Fluffy, a tri-color terrier with very short hair, with a tennis ball in her mouth."` is appropriate. As the surrounding text likely has Fluffy's size and breed, that is not included in the `alt`. However, as the dog's biography likely doesn't include hair length, colors, or toy preferences, which the potential parent needs to know, it is included. Is the image outdoors, or does Fluffy have a red collar with a blue leash? Not important in terms of adopting the pet and therefore not included. All information image conveys that a sighted user can access and is relevant to the context is what needs to be conveyed; nothing more. Keep it short, precise, and useful.

Any personal knowledge or extra description shouldn't be included here, as it is not useful for people who have not seen the image before. If the ball is Fluffy's favorite toy or if a sighted user can't know that from the image, then don't include it.

One thing to consider is whether your images have meaning inside your content, or whether they are purely for visual decoration, and thus have no meaning. If they are decorative, it is better to write an empty text as a value for `alt` attribute (see [Empty alt attributes](#empty_alt_attributes)) or to just include them in the page as CSS background images.

> [!NOTE]
> Read [HTML images](/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_images) and [Responsive images](/zh-TW/docs/Web/HTML/Responsive_images) for a lot more information about image implementation and best practices.
> You can also check [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) to learn how to use an alt attribute for images in various situations.

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
