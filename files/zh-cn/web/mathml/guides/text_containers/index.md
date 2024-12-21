---
title: MathML 文本容器
slug: Web/MathML/Guides/Text_containers
original_slug: Learn/MathML/First_steps/Text_containers
---

{{MathMLRef}}

{{PreviousMenuNext("Web/MathML/Guides/Getting_started", "Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides")}}

现在，我们将重点介绍 MathML 的文本容器（变量、数字、运算符等），它们是 MathML 公式的构建模块。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机知识，<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >已安装基本软件</a
        >，了解基本的<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >文件操作</a
        >，了解 HTML 基础知识（学习<a
        href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 入门</a
        >），并对文本样式方面的 CSS 有一定的了解（阅读<a
        href="/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals"
        >文本和字体样式基础</a>和
      <a href="/zh-CN/docs/Learn_web_development/Core/Text_styling/Web_fonts"
        >Web 字体</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        熟悉用于编写文本的 MathML 元素，并掌握它们的特殊行为。
      </td>
    </tr>
  </tbody>
</table>

## 数学符号的 Unicode 字符

数学公式涉及许多特殊字符，例如希腊字母（例如 Δ）、弗拉克图尔字母（例如 𝔄）、双线字母（例如 ℂ）、二元运算符（例如 ≠）、箭头（例如 ⇒）、积分符号（例如 ∮）、求和符号（例如 ∑）、逻辑符号（例如 ∀）以及括号（例如 ⌊）等等。维基百科的文章[数学运算符和符号的 Unicode](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) 提供了这些字符的概述。

由于这些字符大多不属于基本拉丁 Unicode 块，因此建议指定你的[文档字符编码](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#指定文档中的字符编码)，并使用适当的 [Web 字体](/zh-CN/docs/Learn_web_development/Core/Text_styling/Web_fonts)。以下是一个使用 UTF-8 编码和 [Latin Modern Math](/zh-CN/docs/Web/MathML/Fonts#带有数学表的字体) 字体的基本模板：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>带数学字符的页面</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <p style="font-family: Latin Modern Math">∀A∊𝔰𝔩(n,𝔽),TrA=0</p>
  </body>
</html>
```

{{ EmbedLiveSample('数学 Unicode 字符', 700, 100, "", "") }}

## 一些语义

我们在 [MathML 使用入门](/zh-CN/docs/Web/MathML/Guides/Getting_started)文章中提到，MathML 公式中的文本被包裹在特定的容器元素中，例如 `<mn>` 或 `<mo>`。一般而言，MathML 公式中的所有文字都必须包含在这类容器元素中，这类元素被称为*标记*（token）元素。此外，MathML 提供了多种标记元素，以区分文字内容的不同含义。

- `<mi>` 元素表示“标识符”，其可以是符号名称或任意文本。例如：`<mi>x</mi>`（变量）、`<mi>cos</mi>`（函数名）和 `<mi>π</mi>`（符号常量）。
- `<mn>` 元素表示“数值文字”或其他应呈现为数值文字的数据。例如：`<mn>2</mn>`（整数）、`<mn>0.123</mn>`（小数）或 `<mn>0xFFEF</mn>`（十六进制值）。
- `<mo>` 元素表示运算符或任何应呈现为运算符的内容。例如：`<mo>+</mo>`（二元运算符）、`<mo>≤</mo>`（二元关系符），`<mo>∑</mo>`（求和符号）或 `<mo>[</mo>`（括号）。
- `<mtext>` 元素用于表示任意文本。例如公式中的短词，如 `<mtext>if</mtext>` 或 `<mtext>映射到</mtext>`。

### 主动学习：识别标记元素

下面是一个更复杂的例子，它告诉我们，只有当一个实数是非负数时，它的绝对值才等于它自己。请注意不同的标记元素，它们有什么作用。点击文本中的任何部分，就会高亮显示，并给出相应的解释。

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>带数学字符的页面</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>|</mo>
          <mi>x</mi>
          <mo>|</mo>
        </mrow>
        <mo>=</mo>
        <mi>x</mi>
      </mrow>
      <mtext>&nbsp;iff&nbsp;</mtext>
      <mrow>
        <mi>x</mi>
        <mo>≥</mo>
        <mn>0</mn>
      </mrow>
    </math>
    <input type="button" id="clearOutput" value="重置" />
    <div id="output"></div>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js hidden
const tokenElements = Array.from(
  document.querySelectorAll("mi, mo, mn, mtext"),
);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  tokenElements.forEach((token) => {
    token.classList.remove("highlight");
  });
}
tokenElements.forEach((token) => {
  token.addEventListener("click", () => {
    clearHighlight();
    token.classList.add("highlight");
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>你点击了 <code>&lt;${token.tagName}&gt;</code> 元素。</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.innerHTML = "";
});
```

{{ EmbedLiveSample('主动学习：识别标记元素', 700, 400) }}

最后，阅读 MathML 源代码以验证其是否符合你的期望：

```xml
<math display="block">
  <mrow>
    <mrow>
      <mo>|</mo>
      <mi>x</mi>
      <mo>|</mo>
    </mrow>
    <mo>=</mo>
    <mi>x</mi>
  </mrow>
  <mtext>&nbsp;iff&nbsp;</mtext>
  <mrow>
    <mi>x</mi>
    <mo>≥</mo>
    <mn>0</mn>
  </mrow>
</math>
```

> [!NOTE]
> 对于给定的文本内容，有时很难确定要使用哪个标记元素。在实践中，选择错误的元素通常不会导致重大问题，因为所有的标记元素在浏览器实现中通常都会以相同的方式呈现（用于视觉显示和辅助技术）。然而，`<mi>` 和 `<mo>` 元素具有特殊的区别特征，需要注意。下面的小节将对它们进行解释。

## \<mi> 的自动斜体化

在数学中的一种排版惯例是使用斜体字母表示变量。为了帮助实现这一点，仅具有单个字符的 `<mi>` 元素会自动呈现为斜体。请比较以下公式中两个 `<mi>` 元素的渲染效果：

```html
<math>
  <mi>sin</mi>
  <mi>x</mi>
</math>
```

{{ EmbedLiveSample('<mi> 自动斜体化', 700, 50) }}

> **备注：** [MathML Core 中的这个表格](https://w3c.github.io/mathml-core/#italic-mappings)提供了受斜体化影响的字符的详尽列表，以及相应的斜体字符。

## 阻止对 \<mi> 的自动斜体化

要想阻止 `<mi>` 元素的自动斜体化，可以在该元素上附加 `mathvariant="normal"` 属性。比较以下公式中大写伽马字母的渲染效果：

```html
<math>
  <mi>Γ</mi>
  <mi mathvariant="normal">Γ</mi>
</math>
```

{{ EmbedLiveSample('阻止 <mi> 自动斜体化', 700, 50) }}

> [!NOTE]
> 尽管可以应用此转换，但通常你只需直接使用所需的[数学字母数字符号](https://zh.wikipedia.org/wiki/数学字母数字符号)即可。

## \<mo> 的运算符属性

MathML 包含一个[运算符字典](https://w3c.github.io/mathml-core/#operator-dictionary-human)，其根据 `<mo>` 元素的内容和其在容器中的位置（前缀、中缀或后缀），定义了默认属性。让我们考虑一个具体的例子：

```html
<table>
  <tr>
    <td>前缀加号</td>
    <td>
      <math>
        <mo>+</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
  <tr>
    <td>中缀加号</td>
    <td>
      <math>
        <mi>j</mi>
        <mo>+</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
  <tr>
    <td>前缀求和符号</td>
    <td>
      <math>
        <mo>∑</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
</table>
```

本示例渲染结果应该与下面的屏幕截图类似。观察 `<mi>i</mi>` 元素及其前面的 `<mo>` 之间的间距：前缀加号没有间距，中缀加号有一些间距，前缀求和符号有一些较小的间距。

![具有不同运算符间距的 MathML 公式的屏幕截图](operator-spacing.png)

运算符还有许多其他属性，我们将在后面的内容中详细了解。现在，请记住在运算符字典中使用 `<mo>` 容器来包含字符，并使用 `<mrow>` 元素正确分组子表达式，以利于 MathML 的渲染。

### 主动学习：发现不同点

现在你对 `<mi>` 和 `<mo>` 的特殊特性有了一些了解，让我们使用一些实际中用到的 MathML 来重写[页面顶部的示例](#数学符号的_unicode_字符)中的 `<p>` 元素。比较新版本与纯文本版本在你的浏览器中的视觉呈现，并解释两者的区别。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>带数学字符的页面</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <p style="font-family: Latin Modern Math">∀A∊𝔰𝔩(n,𝔽),TrA=0</p>
    <p>
      <math>
        <mo>∀</mo>
        <mrow>
          <mi>A</mi>
          <mo>∊</mo>
          <mrow>
            <mi>𝔰𝔩</mi>
            <mrow>
              <mo>(</mo>
              <mi>n</mi>
              <mo>,</mo>
              <mi>𝔽</mi>
              <mo>)</mo>
            </mrow>
          </mrow>
        </mrow>
        <mo>,</mo>
        <mrow>
          <mrow>
            <mi>Tr</mi>
            <mi>A</mi>
          </mrow>
          <mo>=</mo>
          <mn>0</mn>
        </mrow>
      </math>
    </p>
    <input id="showSolution" type="button" value="显示结果" />
    <div id="solution"></div>
  </body>
</html>
```

```css hidden
div {
  padding: 0.5em;
}
```

```js hidden
document.getElementById("showSolution").addEventListener(
  "click",
  () => {
    document.getElementById("solution").insertAdjacentHTML(
      "beforeEnd",
      `<ul>
      <li><strong>包裹“A”和“n”变量的<code>&lt;mi&gt;</code>元素以斜体渲染</strong>。但是，具有包含多个字符的“𝔰𝔩”或字符为“𝔽”的<code>&lt;mi&gt;</code>元素仍然以直立的方式渲染。</li>
      <li><strong>在文本为“∀”、“∊”、“=”或逗号的<code>&lt;mo&gt;</code>元素周围自动添加间距</strong>。但是，其中一些元素之前没有添加间距，而括号周围也没有间距。</li>
    </ul>`,
    );
  },
  { once: true },
);
```

{{ EmbedLiveSample('主动学习：发现不同点', 700, 500) }}

> [!NOTE]
> 一个明显的区别是，使用 MathML 的源代码会变得更加冗长。请记住，本教程是关于学习语言本身，但在实践中，MathML 内容通常不会手动编写。要查看更多信息，请参阅[编写 MathML](/zh-CN/docs/Web/MathML/Authoring) 页面。

### 主动学习：可伸缩运算符

操作符词典定义了一些操作符的默认*可伸缩*属性以及相应的*伸缩轴*。例如，操作符可以默认垂直伸展，以覆盖其 `<mrow>` 容器中非可伸缩兄弟节点的最大高度。通过稍微调整[之前的练习](#主动学习：识别标记元素)，你可以使操作符在垂直方向上伸展。你能找到它们吗？

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>具有垂直操作符的页面</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>|</mo>
          <mfrac>
            <mn>1</mn>
            <mi>x</mi>
          </mfrac>
          <mo>|</mo>
        </mrow>
        <mo>=</mo>
        <mfrac>
          <mn>1</mn>
          <mrow>
            <mo>|</mo>
            <mi>x</mi>
            <mo>|</mo>
          </mrow>
        </mfrac>
        <mo>=</mo>
        <mfrac>
          <mn>1</mn>
          <mi>x</mi>
        </mfrac>
      </mrow>
      <mtext>&nbsp;iff&nbsp;</mtext>
      <mrow>
        <mi>x</mi>
        <mo>≥</mo>
        <mn>0</mn>
      </mrow>
    </math>
    <input type="button" id="clearOutput" value="重置" />
    <div id="output"></div>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js hidden
const tokenElements = Array.from(
  document.querySelectorAll("mi, mo, mn, mtext"),
);
const stretchyMoElements = Array.from(
  document.getElementsByTagName("mo"),
).slice(0, 2);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  tokenElements.forEach((token) => {
    token.classList.remove("highlight");
  });
}
tokenElements.forEach((token) => {
  token.addEventListener("click", () => {
    clearHighlight();
    token.classList.add("highlight");
    let message = "";
    let tagName = `<code>&lt;${token.tagName}&gt;</code>`;
    if (token.tagName !== "mo") message = `不，这是 ${tagName} 元素！`;
    else if (!stretchyMoElements.includes(token))
      message = `不，这是 ${tagName} 元素，但它不是垂直伸展元素。`;
    else
      message = `正确，此 ${tagName} 元素伸展至它的 <code>&lt;mfrac&gt;</code> 兄弟元素的高度。`;
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>${message}</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.innerHTML = "";
});
```

{{ EmbedLiveSample('主动学习：可伸缩运算符', 700, 400) }}

一如往常，请你在完成后阅读源码：

```xml
<math display="block">
  <mrow>
    <mrow>
      <mo>|</mo>
      <mfrac>
        <mn>1</mn>
        <mi>x</mi>
      </mfrac>
      <mo>|</mo>
    </mrow>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mo>|</mo>
        <mi>x</mi>
        <mo>|</mo>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mi>x</mi>
    </mfrac>
  </mrow>
  <mtext>&nbsp;iff&nbsp;</mtext>
  <mrow>
    <mi>x</mi>
    <mo>≥</mo>
    <mn>0</mn>
  </mrow>
</math>
```

> [!WARNING]
> 通常需要特殊的[数学字体](/zh-CN/docs/Web/MathML/Fonts)才能实现文本的拉伸效果，前面的示例依赖于 [Web 字体](/zh-CN/docs/Learn_web_development/Core/Text_styling/Web_fonts)。

## 总结

在本文中，我们学习了一些用作文本容器的*标记*元素及其不同的语义，即 `<mi>`（标识符）、`<mn>`（数字）、`<mo>`（运算符）、`<mtext>`（通用文本）。我们介绍了在数学公式中常见的特殊 Unicode 字符，并概述了 `<mi>` 和 `<mo>` 元素的一些可观察表现。在下一篇文章中，我们将学习如何借助*标记*元素构建更复杂的表达式，例如[分数和根号](/zh-CN/docs/Web/MathML/Guides/Fractions_and_roots)。

## 参见

- [`<mi>` 元素](/zh-CN/docs/Web/MathML/Element/mi)
- [`<mn>` 元素](/zh-CN/docs/Web/MathML/Element/mn)
- [`<mo>` 元素](/zh-CN/docs/Web/MathML/Element/mo)
- [`<mtext>` 元素](/zh-CN/docs/Web/MathML/Element/mtext)

{{PreviousMenuNext("Web/MathML/Guides/Getting_started", "Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides")}}
