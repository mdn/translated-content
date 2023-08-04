---
title: 文本格式进阶
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

HTML 中有许多其他元素可以用于格式化文本，我们没有在 [HTML 文字处理基础](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)中提到它们。本文中所描述的元素虽然少有人知，但仍然值得去学习（尽管仍然不是完整的列表）。在这里你将了解标记引用、描述列表、计算机代码和其他相关文本、下标和上标、联系信息等。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        熟悉 HTML 基础（包含在
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >开始学习 HTML</a
        >
        中）、HTML 文本格式（包含在
        <a
          href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML 文字处理基础</a
        >中）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习一些不常见的 HTML 元素标记来使用高级语义功能。</td>
    </tr>
  </tbody>
</table>

## 描述列表

在 HTML 基础部分，我们讨论了如何在 HTML 中[标记基本的列表](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#列表_lists)，但是我们没有提到你偶尔会遇到的第三种类型的列表——**描述列表**（description list）。这种列表的目的是标记一组项目及其相关描述，例如术语和定义，或者是问题和答案等。让我们看一组术语和定义的示例：

```
内心独白
戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
语言独白
戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
旁白
戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
```

描述列表使用与其他列表类型不同的闭合标签——{{htmlelement("dl")}}；此外，每一项都用 {{htmlelement("dt")}}（description term）元素闭合。每个描述都用 {{htmlelement("dd")}}（description definition）元素闭合。

### 描述列表示例

让我们来完成下面的标记例子：

```html
<dl>
  <dt>内心独白</dt>
  <dd>
    戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
  </dd>
  <dt>语言独白</dt>
  <dd>
    戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
  </dd>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
</dl>
```

浏览器的默认样式会在描述列表的术语及其定义之间产生缩进。

{{EmbedLiveSample('描述列表示例', '100%', '285px')}}

### 单个术语的多个描述

请注意：一个术语可以同时有多个描述，比如说：

```html
<dl>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
  <dd>
    写作中，指与当前主题相关的一段内容，通常不适于直接置于内容主线中，因此置于附近的其他位置（通常位于主线内容旁边一个文本框内）。
  </dd>
</dl>
```

{{EmbedLiveSample('单个术语的多个定义', '100%', '193px')}}

### 主动学习：标记一组定义

现在是时候尝试一下描述列表了。在*输入*区域的原始文本里添加相应的元素，使得它在*输出*区域是以描述列表的形式出现。如果你喜欢，你也可以使用你自己的描述术语和描述。

如果你做错了，你可以随时点击*重置*按钮。如果实在进行不下去，可以点击*显示答案*。

```html hidden
<h2>实时输出</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">
  按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code>
</p>
<textarea id="code" class="input" style="min-height: 100px; width: 95%">
培根
整个世界的粘合剂。
鸡蛋
一块蛋糕的粘合剂。
咖啡
一种浅棕色的饮料。
可以在清晨带来活力。
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="显示答案" />
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<dl>\n <dt>培根</dt>\n <dd>整个世界的粘合剂。</dd>\n <dt>鸡蛋</dt>\n <dd>一块蛋糕的粘合剂。</dd>\n <dt>咖啡</dt>\n <dd>一种浅棕色的饮料。</dd>\n <dd>可以在清晨带来活力。</dd>\n </dl>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "显示答案";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "显示答案") {
    textarea.value = solutionEntry;
    solution.value = "隐藏答案";
  } else {
    textarea.value = userEntry;
    solution.value = "显示答案";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
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

{{ EmbedLiveSample('主动学习：标记一组定义', 700, 350) }}

## 引用

HTML 也有用于标记引用的特性，至于使用哪个元素标记，取决于你引用的是一块还是一行。

### 块引用

如果一个块级内容（一个段落、多个段落、一个列表等）从其他地方被引用，你应该把它用 {{htmlelement("blockquote")}} 元素包裹起来表示，并且在 [`cite`](/zh-CN/docs/Web/HTML/Element/blockquote#cite) 属性里用 URL 来指向引用的资源。例如，下面的示例代码就是引用的 MDN 的 `<blockquote>` 元素页面：

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

要把这些转换为块引用，我们要这样做：

```html
<p>Here is a blockquote:</p>
<blockquote
  cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

浏览器的默认样式会将其呈现为缩进的段落，作为引用的指示；引号上面的段落是为了证明这一点。

{{EmbedLiveSample('块引用', '100%', '200px')}}

### 行内引用

除了使用 {{htmlelement("q")}} 元素以外，行内元素用同样的方式工作。例如，下面的标记包含了从 MDN `<q>` 页面的引用：

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q"
    >intended for short quotations that don't require paragraph breaks.</q
  >
</p>
```

浏览器默认将其作为普通文本放入引号内表示引用，就像下面：

{{EmbedLiveSample('行内引用', '100%', '78px')}}

### 引文

[`cite`](/zh-CN/docs/Web/HTML/Element/blockquote#cite) 属性的内容看起来很有用，但不幸的是，浏览器、屏幕阅读器并没有充分利用它。如果不使用 JavaScript 或 CSS 编写自己的解决方案，就没有办法让浏览器显示 `cite` 的内容。如果你想在页面上提供引文的来源，你需要在文本中通过链接或其他适当的方式来提供它。

这里有 {{htmlelement("cite")}} 元素，但它是为了包含所引用资源的标题（如书名）。然而，你没有理由不把 `<cite>` 内的文字以某种方式链接到引用源。

```html
<p>
  According to the
  <a href="/zh-CN/docs/Web/HTML/Element/blockquote">
    <cite>MDN blockquote page</cite></a
  >:
</p>

<blockquote
  cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q"
    >intended for short quotations that don't require paragraph breaks.</q
  >
  — <a href="/zh-CN/docs/Web/HTML/Element/q"> <cite>MDN q page</cite></a
  >.
</p>
```

引文默认的字体样式为斜体。

{{EmbedLiveSample('引文', '100%', '179px')}}

### 主动学习：是谁说的？

到了主动学习的时间！在这个例子中我们想要你：

1. 把中间的段落变成块引用，它要包含 `cite` 属性。
2. 把第三个段落的一部分变成行内引用，它要包含 `cite` 属性。
3. 将每一个引用源的标题包裹在 `<cite>` 标签中，并将它们链接到引用源中。

你需要的引用源：

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` 对应“孔子曰”。
- `http://example.com/affirmationsforpositivethinking` 对应“不要说泄气的话”。

如果你做错了，你可以随时点击*重置*按钮。如果实在进行不下去，可以点击*显示答案*。

```html hidden
<h2>实时输出</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">
  按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code>
</p>
<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>你好！欢迎访问我的激励网页！孔子曰：</p>
<p>譬如为山，未成一篑，止，吾止也。譬如平地，虽覆一篑，进，吾往也。</p>
<p>要保持乐观，不要说泄气的话。（源自 Affirmations for Positive Thinking。）</p>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="显示答案" />
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}
const htmlSolution = `<p>你好！欢迎访问我的激励网页！<a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>孔子</cite></a>曰：</p>
<blockquote cite="https://zh.wikipedia.org/zh-hans/孔子">
  <p>譬如为山，未成一篑，止，吾止也。譬如平地，虽覆一篑，进，吾往也。</p>
</blockquote>
<p>要保持乐观，<q cite="http://example.com/affirmationsforpositivethinking">不要说泄气的话</q>。（源自 <a href="http://example.com/affirmationsforpositivethinking"><cite>Affirmations for Positive Thinking</cite></a>。）</p>`;

let solutionEntry = htmlSolution;
reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "显示答案";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "显示答案") {
    textarea.value = solutionEntry;
    solution.value = "隐藏答案";
  } else {
    textarea.value = userEntry;
    solution.value = "显示答案";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
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

{{ EmbedLiveSample('主动学习：是谁说的？', 700, 450) }}

## 缩略语

另一个你在 Web 上看到的相当常见的元素是 {{htmlelement("abbr")}}——它常被用来包裹一个缩略语或缩写，并且提供缩写的解释。当包括这两种情况时，在第一次使用时提供纯文本的完整扩展，同时用 `<abbr>` 来标记缩写。这为用户代理提供了如何公布/显示内容的提示，同时告知所有用户该缩写的含义。

如果为缩写提供扩展信息的意义不大，而且该缩写或首字母缩写是一个相当简短的术语，则应提供该术语的完整扩展，作为 [`title`](/zh-CN/docs/Web/HTML/Global_attributes#title) 属性的值：

### 缩略语示例

让我们一起看一个示例。

```html
<p>
  我们使用
  <abbr title="超文本标记语言（Hyper text Markup Language）">HTML</abbr>
  来组织网页文档。
</p>

<p>
  第 33 届<abbr title="夏季奥林匹克运动会">奥运会</abbr>将于 2024 年 8
  月在法国巴黎举行。
</p>
```

这些代码的显示效果如下：

{{EmbedLiveSample('缩略语示例', '100%', '150')}}

> **备注：** 在之前版本的 html 中还包含对另一个元素 {{htmlelement("acronym")}} 的支持，但是它已经从 HTML spec 中移除，因为可以只使用 `<abbr>` 元素代表缩略语。不应再使用 `<acronym>`。

### 主动学习：标记一个缩略语

在这个简单的主动学习任务中，我们希望你简单地标记一个缩略语。你可以使用下面的示例，或者用自己的示例来替换。

```html hidden
<h2>实时输出</h2>
<div class="output" style="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">
  按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code>
</p>
<textarea id="code" class="input" style="min-height: 50px; width: 95%">
<p>美国国家航空航天局 NASA 做了一些动人心弦的事情。</p>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="显示答案" />
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<p>美国国家航空航天局 <abbr>NASA</abbr> 做了一些动人心弦的事情。</p>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "显示答案";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "显示答案") {
    textarea.value = solutionEntry;
    solution.value = "隐藏答案";
  } else {
    textarea.value = userEntry;
    solution.value = "显示答案";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
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

{{ EmbedLiveSample('主动学习：标记一个缩略语', 700, 300) }}

## 标记联系方式

HTML 有个用于标记联系方式的元素——{{htmlelement("address")}}。它仅仅包含联系方式，例如：

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

其中可以包含更复杂的标记和其他形式的联系方式，如：

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

注意，如果链接的页面包含了联系信息，像下面这样也是可以的：

```html
<address>
  由 <a href="../authors/chris-mills/">Chris Mills</a> 编写的页面。
</address>
```

> **备注：** {{htmlelement("address")}} 元素只能用于提供最近的 {{htmlelement("article")}} 或 {{htmlelement("body")}} 元素所含文件的联系信息。在一个网站的页脚使用它来包括整个网站的联系信息，或者在一篇文章里面使用它来包括作者的联系信息，这都是正确的，但不能用来标记与该页面内容无关的地址列表。

## 上标和下标

当你使用日期、化学方程式、和数学方程式时会偶尔使用上标和下标，以确保它们的正确含义。{{htmlelement("sup")}} 和 {{htmlelement("sub")}} 元素可以解决这样的问题。例如：

```html
<p>
  咖啡因的化学方程式是 C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>。
</p>
<p>如果 x<sup>2</sup> 的值为 9，那么 x 的值必为 3 或 -3。</p>
```

这些代码输出的结果是：

{{ EmbedLiveSample('上标和下标', '100%', 160) }}

## 展示计算机代码

有大量的 HTML 元素可以来标记计算机代码：

- {{htmlelement("code")}}：用于标记计算机通用代码。
- {{htmlelement("pre")}}：用于保留空白字符（通常用于代码块）——如果文本中使用了缩进或多余的空白，浏览器将忽略它，你将不会在呈现的页面上看到它。但是，如果你将文本包含在 `<pre></pre>` 标签中，那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。
- {{htmlelement("var")}}：用于标记具体变量名。
- {{htmlelement("kbd")}}：用于标记输入电脑的键盘（或其他类型）输入。
- {{htmlelement("samp")}}：用于标记计算机程序的输出。

让我们看看一些例子。你应该尝试运行一下（尝试运行一下 [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) 样例文件的拷贝）：

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('噢，噢，噢，别点我了。');
}</code></pre>

<p>
  请不要使用 <code>&lt;font&gt;</code> 、
  <code>&lt;center&gt;</code> 等表象元素。
</p>

<p>在上述的 JavaScript 示例中，<var>para</var> 表示一个段落元素。</p>

<p>按 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd> 选择全部内容。</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

上面的代码显示效果如下：

{{ EmbedLiveSample('展示计算机代码','100%',300) }}

## 标记时间和日期

HTML 还支持将时间和日期标记为可供机器识别的格式的 {{htmlelement("time")}} 元素，例如：

```html
<time datetime="2016-01-20">2016 年 1 月 20 日</time>
```

为什么需要这样做？因为世界上有许多种书写日期的格式，上边的日期可能被写成：

<!-- markdownlint-disable MD033 -->

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/06/16
- 06/20/16
- The 20th of next month
- 20e Janvier 2016
- 2016 年 1 月 20 日
- 等等

<!-- markdownlint-enable MD033 -->

但是这些不同的格式不容易被电脑识别——假如你想自动抓取页面上所有事件的日期并将它们插入到日历中，{{htmlelement("time")}} 元素允许你附上清晰的、可被机器识别的时间或日期来实现这种需求。

上述基本的例子仅仅提供了一种简单的可被机器识别的日期格式，这里还有许多其他支持的格式，例如：

```html
<!-- 标准简单日期 -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- 只包含年份和月份-->
<time datetime="2016-01">January 2016</time>
<!-- 只包含月份和日期 -->
<time datetime="01-20">20 January</time>
<!-- 只包含时间，小时和分钟数 -->
<time datetime="19:30">19:30</time>
<!-- 还可包含秒和毫秒 -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- 日期和时间 -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- 含有时区偏移值的日期时间 -->
<time datetime="2016-01-20T19:30+01:00"
  >7.30pm, 20 January 2016 is 8.30pm in France</time
>
<!-- 提及特定周 -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## 测试你的技能！

你已经到达了本篇文章的末尾，但还能记得多少重要的东西呢？在进行下一步前，你可以找一些测试来验证知识留存的多少——请查看[测试你的技能：高级 HTML 文本](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Advanced_HTML_text)。

## 总结

到这里你就完成了 HTML 语义文本元素的学习。但要记住，你在本课程中学到的并不是 HTML 文本元素的详细列表——我们想要尽量覆盖主要的、通用的、常见的，或者至少是有趣的部分。如果你想找到更多的 HTML 元素，可以看一看我们的 [HTML 元素参考](/zh-CN/docs/Web/HTML/Element)（从[内联文本语义](/zh-CN/docs/Web/HTML/Element#内联文本语义)部分开始会是一个好的选择）。在下一篇文章中我们将会学习用来[组织 HTML 文档不同部分的 HTML 元素](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
