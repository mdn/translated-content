---
title: 文本格式进阶
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}

HTML 中有许多可以用于定义文本语义的其他元素，我们没有在[强调和重要性](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)中提到它们。本文中所介绍的元素虽然少有人知，但仍然值得去学习（而且本文不是一份完整的列表）。在这里你将学习标记引用、描述列表、计算机代码和其他相关文本、下标和上标、联系信息等。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉 HTML 基础，如<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">基础 HTML 语法</a
        >所述。文本级语义，例如<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs">标题和段落</a
        >和<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Lists">列表</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>引用。</li>
          <li>缩写和首字母缩略词。</li>
          <li>地址。</li>
          <li>时间和日期。</li>
          <li>上标和下标。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 引用

HTML 也有用于标记引用的特性，至于使用哪个元素标记，取决于你引用的是一块还是一行。

### 块引用

如果其他地方引用一个块级内容（一个段落、多个段落、一个列表等），你应该把它用 {{htmlelement("blockquote")}} 元素包裹起来表示，并且在 [`cite`](/zh-CN/docs/Web/HTML/Reference/Elements/blockquote#cite) 属性里用 URL 来指向引用的资源。例如，下面的示例代码就是引用的 MDN 的 `<blockquote>` 元素页面：

```html
<p>
  <strong>HTML <code>&lt;blockquote&gt;</code> 元素</strong>（或<em
    >HTML 块级引用元素</em
  >）表示所附文本为扩展引用。
</p>
```

要把这些转换为块引用，我们要这样做：

```html
<p>这是块引用：</p>
<blockquote
  cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML <code>&lt;blockquote&gt;</code> 元素</strong>（或<em
      >HTML 块级引用元素</em
    >）表示所附文本为扩展引用。
  </p>
</blockquote>
```

浏览器的默认样式会将其渲染为缩进的段落，以表明这是一个引用；引用上面的段落是为了证明这一点。

{{EmbedLiveSample('块引用', '100%', '200px')}}

### 行内引用

除了使用 {{htmlelement("q")}} 元素以外，行内元素用同样的方式工作。例如，下面的标记包含了从 MDN `<q>` 页面的引用：

```html
<p>
  引用元素 <code>&lt;q&gt;</code> 是<q
    cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q"
    >用于不需要段落分隔的短引用。</q
  >
</p>
```

浏览器默认将其作为普通文本放入引号内表示引用，就像下面：

{{EmbedLiveSample('行内引用', '100%', '78px')}}

### 引文

[`cite`](/zh-CN/docs/Web/HTML/Reference/Elements/blockquote#cite) 属性的内容听起来很有用，但不幸的是，浏览器、屏幕阅读器并没有充分利用它。如果不使用 JavaScript 或 CSS 编写自己的解决方案，就没有办法让浏览器显示 `cite` 的内容。如果你想在页面上提供引文的来源，你需要在文本中通过链接或其他适当的方式来提供它。

这里有 {{htmlelement("cite")}} 元素，但它是为了包含所引用资源的标题（如书名）。然而，你没有理由不把 `<cite>` 内的文字以某种方式链接到引用源。

```html-nolint
<p>
  根据<a href="/zh-CN/docs/Web/HTML/Element/blockquote"><cite>MDN 块引用页</cite></a>：
</p>

<blockquote
  cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML <code>&lt;blockquote&gt;</code> 元素</strong>（或<em>HTML 块级引用元素</em>）表示所附文本为扩展引用。
  </p>
</blockquote>

<p>
  引用元素 <code>&lt;q&gt;</code> 是<q cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q">用于不需要段落分隔的短引用。</q>——<a href="/zh-CN/docs/Web/HTML/Element/q"> <cite>MDN q 页面</cite></a>
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
<p class="a11y-label">按 ESC 退出编辑区域（按 Tab 可插入制表符）。</p>
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

const htmlSolution = `<p>你好！欢迎访问我的激励网页！<a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>孔子</cite></a>曰：</p>\n\n<blockquote cite="https://zh.wikipedia.org/zh-hans/孔子">\n<p>譬如为山，未成一篑，止，吾止也。譬如平地，虽覆一篑，进，吾往也。</p>\n</blockquote>\n\n<p>要保持乐观，<q cite="http://example.com/affirmationsforpositivethinking">不要说泄气的话</q>。（源自 <a href="http://example.com/affirmationsforpositivethinking"><cite>Affirmations for Positive Thinking</cite></a>。）</p>`;
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

// 停止使用 Tab 键跳出文本区域，而是让其在光标位置插入一个制表符

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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

// 每次用户更新文本区域代码，更新存储的 userCode
textarea.onkeyup = () => {
  // 我们只想在用户代码显示时保存状态，而不是答案，以免答案覆盖用户代码。
  if (solution.value === "显示答案") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{EmbedLiveSample('主动学习：是谁说的？', 700, 450)}}

## 缩略语

另一个你在 Web 上看到的相当常见的元素是 {{htmlelement("abbr")}}——它常被用来包裹一个缩略语或缩写，并且提供缩写的解释。当包括这两种情况时，在第一次使用时提供纯文本的完整扩展，同时用 `<abbr>` 来标记缩写。这为用户代理提供了如何公布/显示内容的提示，同时告知所有用户该缩写的含义。

如果为缩写提供扩展信息的意义不大，而且该缩写或首字母缩写是一个相当简短的术语，则应提供该术语的完整扩展，作为 [`title`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/title) 属性的值：

### 缩略语示例

让我们一起看一个示例。

```html
<p>我们使用 <abbr>HTML</abbr> 超文本标记语言来组织网页文档。</p>

<p>
  第 33 届<abbr title="夏季奥林匹克运动会">奥运会</abbr>已于 2024 年 7
  月在法国巴黎举行。
</p>
```

这些代码的显示效果如下：

{{EmbedLiveSample('缩略语示例', '100%', '150')}}

> [!NOTE]
> 在之前版本的 html 中还包含对另一个元素 {{htmlelement("acronym")}} 的支持，但是它已经从 HTML 标准中移除，因为可以只使用 `<abbr>` 元素代表缩略语。不应再使用 `<acronym>`。

### 主动学习：标记一个缩略语

在这个简单的主动学习任务中，我们希望你简单地标记一个缩略语。你可以使用下面的示例，或者用自己的示例来替换。

```html hidden
<h2>实时输出</h2>
<div class="output" style="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">按 ESC 退出编辑区域（按 Tab 可插入制表符）</p>
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
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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

// 每次用户更新文本区域代码，更新存储的 userCode
textarea.onkeyup = () => {
  // 我们只想在用户代码显示时保存状态，而不是答案，以免答案覆盖用户代码。
  if (solution.value === "显示答案") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{EmbedLiveSample('主动学习：标记一个缩略语', 700, 300)}}

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

> [!NOTE]
> {{htmlelement("address")}} 元素只能用于提供最近的 {{htmlelement("article")}} 或 {{htmlelement("body")}} 元素所含文件的联系信息。在一个网站的页脚使用它来包括整个网站的联系信息，或者在一篇文章里面使用它来包括作者的联系信息，这都是正确的，但不能用来标记与该页面内容无关的地址列表。

## 上标和下标

当你使用日期、化学方程式和数学方程式时会偶尔使用上标和下标，以确保它们的正确含义。{{htmlelement("sup")}} 和 {{htmlelement("sub")}} 元素可以解决这样的问题。例如：

```html
<p>我的生日是在 2021 年 5 月 25 日（译者注：英文原文为 25<sup>th</sup>）</p>
<p>
  咖啡因的化学方程式是 C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>。
</p>
<p>如果 x<sup>2</sup> 的值为 9，那么 x 的值必为 3 或 -3。</p>
```

这些代码输出的结果是：

{{EmbedLiveSample('上标和下标', '100%', 160)}}

## 展示计算机代码

有大量的 HTML 元素可以来标记计算机代码：

- {{htmlelement("code")}}：用于标记计算机通用代码。
- {{htmlelement("pre")}}：用于保留空白字符（通常用于代码块）——如果文本中使用了缩进或多余的空白，浏览器将忽略它，你将不会在渲染的页面上看到它。但是，如果你将文本包含在 `<pre></pre>` 标签中，那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。
- {{htmlelement("var")}}：用于标记具体变量名。
- {{htmlelement("kbd")}}：用于标记输入电脑的键盘（或其他类型）输入。
- {{htmlelement("samp")}}：用于标记计算机程序的输出。

让我们看看这些元素的示例以及它们如何被用来表示计算机代码。如果你想要完整文件，可以看一下 [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) 这个示例文件。你可以下载文件并在浏览器打开查看，以下是代码的一个片段：

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('噢，噢，噢，别点我了。');
}</code></pre>

<p>
  请不要使用 <code>&lt;font&gt;</code> 、
  <code>&lt;center&gt;</code> 等表现元素。
</p>

<p>在上述的 JavaScript 示例中，<var>para</var> 表示一个段落元素。</p>

<p>按 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd> 选择全部内容。</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

上面的代码显示效果如下：

{{EmbedLiveSample('展示计算机代码','100%',350)}}

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
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
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

## 技能测试！

你已经到达了本篇文章的末尾，但还能记得多少重要的东西呢？在进行下一步前，你可以找一些测试来验证知识留存的多少——请查看[技能测试：高级 HTML 文本](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text)。

## 总结

到这里标志着对不太常见的 HTML 文本语义的学习告一段落。你在本课程中所看到的内容并不是 HTML 文本元素的完整列表——我们只是想涵盖一些基本要素，以及一些你在实际中会较常见到的元素。接下来，我们将学习链接，这是网络最重要的功能之一。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}
