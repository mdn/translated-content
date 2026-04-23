---
title: 测试你的技能：高级 HTML 文本
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

本技能测试用于评估你是否理解[如何使用较少为人知的 HTML 元素来标记高级语义特性](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)。

> [!NOTE]
> 你可以在 MDN 代码演练场或在线编辑器（如 [CodePen](https://codepen.io/) 或 [JSFiddle](https://jsfiddle.net/)）中尝试解决方案。
>
> 如果你遇到困难，可以通过我们的[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 任务 1

在这个任务中，我们希望你为提供的 HTML 添加一些语义，如下所示：

- 将第二段转换为块级引用，并在语义上表明引用取自[无障碍](/zh-CN/docs/Learn_web_development/Core/Accessibility)。
- 在语义上将“HTML”和“CSS”标记为缩略词，并提供展开形式作为工具提示。
- 使用下标和上标为化学公式和日期提供正确的语义，并使它们正确显示。
- 在语义上将机器可读日期与文本中的日期关联起来。

要开始尝试，你可以点击下方代码块中的**“Play”**来在 MDN Playground 中编辑示例。你也可以[下载本任务的起始文件](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/advanced-text/advanced-text2-download.html)以在本地编辑器中完成任务。

如果你犯了些错误，你可以点击 MDN Playground 中的 _Reset_ 按钮。如果你真的卡住了，你可以在本节末尾处看到解决方案。

```html live-sample___advanced-text
<h1>Advanced text semantics</h1>

<p>Let's start with a quote:</p>

<p>
  HTML, Hypertext Markup Language is by default accessible, if used correctly.
</p>

<p>CSS can also be used to make web pages more, or less, accessible.</p>

<p>Chemical Formulae: H2O (Water), C2H6O (Ethanol).</p>

<p>
  Dates: December 25th 2019 (Christmas Day), November 2nd 2019 (Día de los
  Muertos).
</p>
```

```css hidden live-sample___advanced-text
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

p {
  margin: 0.5em 0;
}

abbr,
time {
  color: green;
}
```

{{ EmbedLiveSample('advanced-text', "100%", 260) }}

完成的示例应如下所示：

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/advanced-text/advanced-text2-finished.html", '100%', 300)}}

<details>
<summary>点击此处查看解决方案</summary>

你完成的 HTML 应该是这样的：

```html
<h1>Advanced text semantics</h1>

<p>Let's start with a quote:</p>

<blockquote cite="https://developer.mozilla.org/en-US/docs/Learn/Accessibility">
  <p>
    <abbr title="HyperText Markup Language">HTML</abbr>, Hypertext Markup
    Language is by default accessible, if used correctly.
  </p>
</blockquote>

<p>
  <abbr title="Cascading Style Sheets">CSS</abbr>, Cascading Style Sheets, can
  also be used to make web pages more, or less, accessible.
</p>

<p>
  Chemical Formulae: H<sub>2</sub>O (Water), C<sub>2</sub>H<sub>6</sub>O
  (Ethanol).
</p>

<p>
  Dates:
  <time datetime="2019-12-25">December 25<sup>th</sup> 2019</time>
  (Christmas Day),
  <time datetime="2019-11-02">November 2<sup>nd</sup> 2019</time> (Día de los
  Muertos).
</p>
```

</details>
