---
title: HTML中的圖片
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

最初的網頁最初的發展階段，只是文字。而只有文字想當然爾令網頁讀起來十分的枯燥乏味。然而幸運的是沒有多久，將圖片（以及其他更有趣的內容類型）嵌入網頁的功能就誕生了。 在多媒體嵌入網頁的學習中，從 [element embeds an image into the document.">`<img>`](/zh-TW/docs/Web/HTML/Element/img)元素開始是相對適當，因為該元素用於在網頁中嵌入簡單的圖像。 在本文中，我們將研究如何深入使用它，包括在網頁中嵌入簡單圖像的基礎知識，使用\<figure>增加標題說明以做註釋，以及詳細說明它與 CSS 背景圖片的關係。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">課成需求:</th>
      <td>
        基本的電腦操作, <a href="/zh-TW/docs/">安裝軟體的能力</a>,
        <a href="/zh-TW/docs/">處理檔案的基本能力</a>, 熟悉最基本的HTML的 （<a
          href="/zh-TW/docs/"
          >如HTML入門中所述</a
        >）
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標:</th>
      <td>
        了解如何在HTML中嵌入簡單的圖片，為它們加上標題註釋，以及HTML圖片與CSS背景圖片之間的關係。
      </td>
    </tr>
  </tbody>
</table>

## 如何將圖片放入網頁中?

為了在網頁上放置一個簡單的圖像，我們使用\<img>元素。 這是一個空元素（意味著它沒有文本內容或結束標記），並需要至少一個屬性（src）（有時稱為其完整標題，source）才有用。 src 屬性包含指向要嵌入頁面的圖像的路徑，該路徑可以是相對路徑或絕對路徑 URL，與\<a>元素中的 href 屬性相同。

> **備註：** 在繼續之前，您應該閱讀有關 URL 和路徑的快速入門，以複習[相對路徑和絕對路徑 URL](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#A_quick_primer_on_URLs_and_paths)。

舉例來說, 如果您的圖片名為 dinosaur.jpg 且與 HTML 檔案位於同一資料夾中，可以這樣嵌入圖片：

```html
<img src="dinosaur.jpg" />
```

如果圖片位於名為 images 的資料夾中，且該目錄與 HTML 頁面位於同一資料夾（Google 建議這樣的編排，以利於 SEO /索引目的），則應將其嵌入如下：

```html
<img src="images/dinosaur.jpg" />
```

像這樣.

> **備註：** 搜索引擎還會讀取圖片名稱，並將其納入 SEO 中。 因此您應該為圖片提供一個描述性的檔名。 例如 dinosaur.jpg 的命名方式會比 img835.png 更好。

你也可以用絕對路徑 URL 來嵌入圖片，例如

```html
<img src="https://www.example.com/images/dinosaur.jpg" />
```

但這麼做是沒有意義的，因為它只會使瀏覽器執行更多工作，瀏覽器需重複執行從 DNS 服務器中搜尋 IP 地址等等工作。您應將網站上的圖片與 HTML 存放在同一個伺服器上。

> **警告：** 大多數圖像均受版權保護。 請勿在你的網站上隨意顯示圖片，除非：
>
> - 你是圖片的擁有者.
> - 您已收到圖片所有者的白紙黑字認可。
> - 您有充分的證據證明該圖片實際上是大家皆能使用。
>
> 侵犯版權是違法及不道德的。 此外，切勿將 src 屬性指向您未被授權的他人網站上的圖便。 這稱為「熱連結」。再次重申，竊取某人的頻寬是違法的，且這會減慢您網站的速度。此外當別人變更、移除或換上令人尷尬的內容時你將無法做出改變。

我們上面的程式碼將有以下結果：

![A basic image of a dinosaur, embedded in a browser, with "Images in HTML" written above it](basic-image.png)

> **備註：** \<img>和\<video>之類的元素有時也稱為替換元素。 這是因為元素的內容和圖片大小是由外部（例如圖片或影音檔）所定義的，而不是由元素的內容定義。

> **備註：** 您可以從在 [Github](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) 上找到本節完成的示例（參見[開源碼](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/images-in-html/index.html)。）

### 替代性文字

我們下一個要看的屬性是 alt。 它的功能算是圖片的文字描述，應用於因網路連接速度慢而無法看到/顯示圖片或需要長時間來跑圖等等情況。 例如，上面的程式碼我們可以像這樣修改：

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

測試替代文字最簡單方法是故意拼錯檔名。 例如，如果我們的圖片名稱為 dinosooooor.jpg，則瀏覽器將不會顯示該圖片，而是顯示 alt 文本：![The Images in HTML title, but this time the dinosaur image is not displayed, and alt text is in its place.](alt-text.png)

那麼，為什麼您會看到或需要替代文字？ 它可以派上用場的原因有很多：

- 使用者視力不佳，正在使用[螢幕閱讀器](https://zh.wikipedia.org/wiki/%E8%9E%A2%E5%B9%95%E9%96%B1%E8%AE%80%E5%99%A8)向他們朗讀網頁。 實際上，對於大多數使用者而言，擁有可用於描述圖像的替代文字是很有用的。
- 如上所述，文件或路徑名的拼寫可能不正確。
- 瀏覽器不支持圖像類型。 有些人仍然使用純文字瀏覽器，例如[Lynx](https://zh.wikipedia.org/wiki/Lynx)，它可顯示圖片的替代文字。
- 您可能希望提供文字供搜索引擎使用； 例如，搜索引擎可以將替代文字與搜索查詢匹配。
- 使用者已關閉圖像以減少數據傳輸量和干擾。 這在手機以及網路頻寬有限或成本昂貴的國家中尤其常見。

您應該在`alt`屬性中確切寫些什麼？ 這取決於圖片為何而出現；也就是說，如果圖片不顯示，您將損失什麼：

- **裝飾：** 你可以用 [CSS 背景圖片](#css_背景圖片) 加入裝飾圖片，但如果必須使用 HTML，可以添加一個空的 `alt=""`。如果圖片不是內容的一部分，那麼就不應該讓螢幕閱讀器浪費時間去閱讀它。
- **內容：** 如果您的圖片提供了重要的資訊，請在簡短的`alt`文字中提供相同的資訊，甚至最好在所有人都能看到的主要文字中提供相同的資訊。請不要撰寫冗餘替代文字，試想如果所有段落都在主要內容中寫了兩次，對於用視力觀看的使用者有多煩人。如果圖像在正文中已充分敘述，請使用 `alt=""`。
- **連結：** 如果你在{{htmlelement("a")}} 標籤中放了圖片使其轉入連結，你仍應該提供[明確的字詞](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E4%BD%BF%E7%94%A8%E6%98%8E%E7%A2%BA%E7%9A%84%E5%AD%97%E8%A9%9E)。在这种情况下，您可以根據適合你的情況，将其写在相同的`<a>`元素内，或是写在图像的`alt` 属性内。
- **文字：** 請不要在圖片中寫字。如果你的主要目的是為標題加上下拉式陰影，你可以[使用 CSS](/zh-TW/docs/Web/CSS/text-shadow)更甚於在圖片中描繪文字。 但如果你無法避免這麼做，也請將文字敘述加在`alt` 属性内。

本質上，關鍵是即使在看不見圖片的情況下也能提供相同的體驗。這樣可以確保所有使用者都不會丟失任何內容。嘗試在瀏覽器中關閉圖像，然後查看外觀。您很快就會意識到，如果看不到圖片，替代文字會很有幫助。

> **備註：** For more information, see our guide to [Text Alternatives](/zh-TW/docs/Learn/Accessibility/HTML#Text_alternatives).

### 寬與高

You can use the `width` and `height` attributes to specify the width and height of your image. You can find your image's width and height in a number of ways. For example on the Mac you can use <kbd>Cmd</kbd> + <kbd>I</kbd> to get the info display up for the image file. Returning to our example, we could do this:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

This doesn't result in much difference to the display, under normal circumstances. But if the image isn't being displayed, for example, the user has just navigated to the page, and the image hasn't yet loaded, you'll notice the browser is leaving a space for the image to appear in:

![The Images in HTML title, with dinosaur alt text, displayed inside a large box that results from width and height settings](alt-text-with-width-height.png)

This is a good thing to do, resulting in the page loading quicker and more smoothly.

However, you shouldn't alter the size of your images using HTML attributes. If you set the image size too big, you'll end up with images that look grainy, fuzzy, or too small, and wasting bandwidth downloading an image that is not fitting the user's needs. The image may also end up looking distorted, if you don't maintain the correct [aspect ratio](https://en.wikipedia.org/wiki/Aspect_ratio_%28image%29). You should use an image editor to put your image at the correct size before putting it on your webpage.

> **備註：** If you do need to alter an image's size, you should use [CSS](/zh-TW/docs/Learn/CSS) instead.

### 圖片標題

As [with links](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#Adding_supporting_information_with_%3Ctitle%3E), you can also add `title` attributes to images, to provide further supporting information if needed. In our example, we could do this:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

This gives us a tooltip on mouse hover, just like link titles:

![The dinosaur image, with a tooltip title on top of it that reads A T-Rex on display at the Manchester University Museum ](image-with-title.png)

However, this does not come recommended — `title` has a number of accessibility problems, mainly based around the fact that screen reader support is very unpredictable and most browsers won't show it unless you are hovering with a mouse (so e.g. no access to keyboard users). If you are interested in more information about this, read [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) by Scott O'Hara.

It is better to include such supporting information in the main article text, rather than attached to the image.

### 實戰練習：嵌入圖片

It is now your turn to play! This active learning section will have you up and running with a simple embedding exercise. You are provided with a basic {{htmlelement("img")}} tag; we'd like you to embed the image located at the following URL:

```
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Earlier we said to never hotlink to images on other servers, but this is just for learning purposes, so we'll let you off this one time.

We would also like you to:

- Add some alt text, and check that it works by misspelling the image URL.
- Set the image's correct `width` and `height` (hint: it is 200px wide and 171px high), then experiment with other values to see what the effect is.
- Set a `title` on the image.

If you make a mistake, you can always reset it using the _Reset_ button. If you get really stuck, press the _Show solution_ button to see an answer:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
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

var htmlSolution =
  '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171"\n title="A T-Rex on display in the Manchester University Museum">';
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

{{ EmbedLiveSample('實戰練習：嵌入圖片', 700, 350) }}

## 用圖文和圖文標註說明圖像

Speaking of captions, there are a number of ways that you could add a caption to go with your image. For example, there would be nothing to stop you from doing this:

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <p>A T-Rex on display in the Manchester University Museum.</p>
</div>
```

This is ok. It contains the content you need, and is nicely stylable using CSS. But there is a problem here: there is nothing that semantically links the image to its caption, which can cause problems for screen readers. For example, when you have 50 images and captions, which caption goes with which image?

A better solution, is to use the HTML5 {{htmlelement("figure")}} and {{htmlelement("figcaption")}} elements. These are created for exactly this purpose: to provide a semantic container for figures, and to clearly link the figure to the caption. Our above example could be rewritten like this:

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <figcaption>
    A T-Rex on display in the Manchester University Museum.
  </figcaption>
</figure>
```

The {{htmlelement("figcaption")}} element tells browsers, and assistive technology that the caption describes the other content of the {{htmlelement("figure")}} element.

> **備註：** From an accessibility viewpoint, captions and [`alt`](/zh-TW/docs/Web/HTML/Element/img#alt) text have distinct roles. Captions benefit even people who can see the image, whereas [`alt`](/zh-TW/docs/Web/HTML/Element/img#alt) text provides the same functionality as an absent image. Therefore, captions and `alt` text shouldn't just say the same thing, because they both appear when the image is gone. Try turning images off in your browser and see how it looks.

A figure doesn't have to be an image. It is an independent unit of content that:

- Expresses your meaning in a compact, easy-to-grasp way.
- Could go in several places in the page's linear flow.
- Provides essential information supporting the main text.

A figure could be several images, a code snippet, audio, video, equations, a table, or something else.

### 實戰練習：建立圖文標註

In this active learning section, we'd like you to take the finished code from the previous active learning section, and turn it into a figure:

1. Wrap it in a {{htmlelement("figure")}} element.
2. Copy the text out of the `title` attribute, remove the `title` attribute, and put the text inside a {{htmlelement("figcaption")}} element below the image.

If you make a mistake, you can always reset it using the _Reset_ button. If you get really stuck, press the _Show solution_ button to see an answer:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea
  id="code"
  class="input"
  style="min-height: 100px; width: 95%"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
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

var htmlSolution =
  '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171">\n <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
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

{{ EmbedLiveSample('實戰練習：建立圖文標註', 700, 350) }}

## CSS 背景圖片

您還可以使用 CSS 將圖像嵌入網頁（JavaScript 也可以，但這完全是另一回事了）。CSS [`background-image`](/zh-TW/docs/Web/CSS/background-image) 屬性和其他 background-\* 屬性用於控制背景圖片的放置。 例如要將背景圖片放置在頁面的每個段落上，可以執行以下操作：

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

這種嵌入圖片的方式比 HTML 圖像更容易定位和控制。 那麼，為什麼還要用 HTML 嵌入圖片呢？ 如上所述，CSS 背景圖像僅用於裝飾。 如果您只是想在頁面上添加一些漂亮的東西以增強視覺效果，那很好。 但是，此類圖像根本沒有語義。 它們與文字不同，對於螢幕閱讀器是不可見的，依此類推。 這裡需要的是 HTML 圖片！

總結來說，如果圖片在內容上具有含義，則應使用 HTML 圖像。 如果圖像純粹是裝飾性的，則應使用 CSS 背景圖片。

> **備註：** 在我們的 CSS 主題中，您將學到更多關於 CSS 背景圖片的知識。

## 試試看!

你已經來到了本文的末端，但是你還記得最重要的內容嗎？在繼續往下之前，這裡有些測驗讓你驗證看看你是否都學會了——[測驗：HTML 圖像](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images)。

## 總結

目前就是這樣啦。 我們已經詳細介紹了圖片和標題說明。 在下一篇文章中我們將進一步介紹，如何使用 HTML 將視頻和音頻嵌入在網頁中。

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
