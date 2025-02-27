---
title: MathML 分数和根号
slug: Web/MathML/Guides/Fractions_and_roots
original_slug: Learn/MathML/First_steps/Fractions_and_roots
---

{{MathMLRef}}

{{PreviousMenuNext("Web/MathML/Guides/Text_containers", "Web/MathML/Guides/Scripts", "Web/MathML/Guides")}}

本文在前文对文本容器介绍的基础上，介绍了如何通过嵌套分数和根号构建更复杂的 MathML 表达式。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机操作能力，<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >已安装基本软件</a
        >，基本的<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >文件操作知识</a
        >，以及 HTML 基础知识（学习过 <a
        href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 简介</a
        >。）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        熟悉用于编写分数和平方根的 MathML 元素。
      </td>
    </tr>
  </tbody>
</table>

## \<mfrac>、\<msqrt> 和 \<mroot> 的子树

在 [MathML 使用入门](/zh-CN/docs/Web/MathML/Guides/Getting_started)文章中，我们学习了用于描述分数的 `<mfrac>` 元素。现在让我们看一个基本示例，其中还添加了用于根号（`<msqrt>` 和 `<mroot>`）的新元素：

```html
<math>
  <mfrac>
    <mtext>child1</mtext>
    <mtext>child2</mtext>
  </mfrac>
</math>
<br />
<math>
  <msqrt>
    <mtext>child1</mtext>
    <mtext>child2</mtext>
    <mtext>...</mtext>
    <mtext>childN</mtext>
  </msqrt>
</math>
<br />
<math>
  <mroot>
    <mtext>child1</mtext>
    <mtext>child2</mtext>
  </mroot>
</math>
```

下面是浏览器渲染的屏幕截图：

![mfrac、msqrt 和 mroot 的屏幕截图](mfrac-msqrt-mroot.png)

- 我们知道 `<mfrac>` 元素被渲染为一个分数：第一个子元素（分子）被绘制于第二个子元素（分母）的上方，并由一条水平线分隔。
- `<msqrt>` 被渲染为一个平方根：其子元素呈现为一个 [`<mrow>`](/zh-CN/docs/Web/MathML/Guides/Getting_started#使用_mrow_元素进行分组)，前缀为根号√，并完全被一条横线覆盖。
- 最后，`<mroot>` 元素被渲染为一个 n 次方根：第一个元素被根号符号覆盖，而第二个元素被用作根的次数，并作为前缀上标呈现。

### 主动练习：内嵌不同元素

这是一个简单的练习，旨在验证你是否理解了 MathML 子树与其可视化呈现之间的关系。该文档包含一个 MathML 公式，你需要标记所有与该 MathML 公式中的子树相对应的子树。完成后，你可以查看 MathML 公式的源代码，以验证它是否符合你的预期。

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8"/>
    <title>带数学字符的页面</title>
    <link rel="stylesheet" href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css">
  </head>
  <body>
  <p>
    <math>
    <mfrac id="mfrac1">
      <msqrt id="msqrt1">
        <mn>2</mn>
      </msqrt>
      <mroot id="mroot1">
        <mn>4</mn>
        <mn>3</mn>
      </mroot>
    </mfrac>
    <mo>+</mo>
    <mroot id="mroot2">
      <mn>5</mn>
      <mfrac id="mfrac2">
        <mn>6</mn>
        <mn>7</mn>
      </mfrac>
    </mroot>
    <mo>+</mo>
    <msqrt id="msqrt2">
      <mn>8</mn>
      <mo>−</mo>
      <mn>9</mn>
    </msqrt>
  </p>

  <ol id="options">
    <li>
      <input type="checkbox" data-comment="验证 mfrac 中子元素的顺序！">
      一个将 mroot 作为第一个子元素，将 msqrt 作为第二个子元素的 mfrac。
    </li>
    <li>
      <input type="checkbox" data-highlight="mroot2" data-comment="5 的七分之六次方根。">
      一个将 mn 作为第一个子元素，将 mfrac 作为第二个子元素的 mroot。
    </li>
    <li>
      <input type="checkbox" data-comment="该公式不包含任何带有分数的平方根！">
      一个包含 mfrac 元素的 msqrt。
    </li>
    <li>
      <input type="checkbox" data-comment="2 的平方根。" data-highlight="msqrt1">
      一个具有一个 mn 子元素的 msqrt。
    </li>
    <li>
      <input type="checkbox" data-comment="验证 mroot 中子元素的顺序！">
      一个将 mfrac 作为第一个子元素，将 mn 作为第二个子元素的 mroot。
    </li>
    <li>
      <input type="checkbox" data-comment="“8 减 9”的平方根。" data-highlight="msqrt2">
      一个具有以下子元素列表的 msqrt：mn、mo、mn。
    </li>
    <li>
      <input type="checkbox" data-comment="2 的平方根除以 4 的立方根。" data-highlight="mfrac1">
      一个将 msqrt 作为第一个子元素，将 mroot 作为第二个子元素的 mfrac。
    </li>
    <li>
      <input type="checkbox" data-comment="mfrac 必须恰好有两个子元素！">
      一个具有以下子元素列表的 mfrac：msqrt、mn、msqrt。
    </li>
    <li>
      <input type="checkbox" data-comment="mroot 必须恰好有两个子元素！">
      一个具有一个 mn 子元素的 mroot。
    </li>
    <li>
      <input type="checkbox" data-comment="6 除以 7。" data-highlight="mfrac2">
      一个具有两个 mn 子元素的 mfrac。
    </li>
    <li>
      <input type="checkbox" data-comment="该公式不包含超过两个数字的平方根！">
      一个具有五个 mn 子元素的 msqrt。
    </li>
    <li>
      <input type="checkbox" data-highlight="mroot1" data-comment="4 的立方根。">
      一个具有两个 mn 子元素的 mroot。
    </li>
  </ol>
  <p>
    <strong id="comment"></strong>
  </p>
  <p>
    <strong id="status"></strong>
  </p>
  </body>
```

```css hidden
math {
  font-family:
    Latin Modern Math,
    STIX Two Math;
  font-size: 200%;
}
math .highlight {
  background: pink;
}
math [id] .highlight {
  background: lightblue;
}
p {
  padding: 0.5em;
}
```

```js hidden
const options = document.getElementById("options");
const comment = document.getElementById("comment");
const checkboxes = Array.from(options.getElementsByTagName("input"));
const status = document.getElementById("status");
function verifyOption(checkbox) {
  let mathml = checkbox.dataset.highlight;
  if (mathml) {
    mathml = document.getElementById(mathml);
  }
  if (checkbox.checked) {
    comment.textContent = checkbox.dataset.comment;
    if (mathml) {
      mathml.classList.add("highlight");
    } else {
      checkbox.checked = false;
    }
  } else {
    comment.textContent = "";
    if (mathml) {
      mathml.classList.remove("highlight");
    }
  }
  const finished = checkboxes.every(
    (checkbox) => !!checkbox.checked === !!checkbox.dataset.highlight,
  );
  status.textContent = finished ? "恭喜，你选中了所有正确选项！" : "";
}
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    verifyOption(checkbox);
  });
});
```

{{EmbedLiveSample('主动练习：内嵌不同元素', 700, 600)}}

## 可伸缩的根号符号

正如之前所见，`<msqrt>` 和 `<mroot>` 元素上的上横线会水平拉伸以覆盖其内容。但实际上根号符号 √ 也会拉伸以与其内容一样高。

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mroot>
    <msqrt>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
    </msqrt>
    <mn>3</mn>
  </mroot>
</math>
```

{{EmbedLiveSample('可伸缩的根号符号', 700, 200)}}

> [!WARNING]
> 通常需要特殊的[数学字体](/zh-CN/docs/Web/MathML/Fonts)才能实现该拉伸效果，上面的示例依赖于 [Web 字体](/zh-CN/docs/Learn_web_development/Core/Text_styling/Web_fonts)。

## 无横线的分数

有些数学概念有时会使用类似分数的表示法，例如[二项式系数](https://zh.wikipedia.org/wiki/组合)或[勒让德符号](https://zh.wikipedia.org/wiki/勒让德符号)。对于这种不绘制横线的类似分数的表示法，可以在 `<mfrac>` 元素上附加 `linethickness="0"` 属性进行标记：

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mfrac linethickness="0">
      <mn>3</mn>
      <mn>2</mn>
    </mfrac>
    <mo>)</mo>
  </mrow>
  <mo>=</mo>
  <mn>3</mn>
  <mo>≠</mo>
  <mfrac>
    <mn>3</mn>
    <mn>2</mn>
  </mfrac>
</math>
```

{{EmbedLiveSample('无横线分式', 700, 200)}}

> [!NOTE]
> 虽然 `linethickness` 属性可以用于指定任意的线条粗细，但最好保持默认值，该值是根据数学字体中指定的参数计算得出的。

## 总结

在本文中，我们学习了如何使用 `<mfrac>`、`<msqrt>` 和 `<mroot>` 元素来构建分数和根式。我们注意到了这些元素的一些特殊功能，即分数和根号符号。我们还学习了如何使用 `linethickness` 属性绘制无横线的分数。在下一篇文章中，我们将继续介绍基本的数学符号，并学习[上下标记](/zh-CN/docs/Web/MathML/Guides/Scripts)的使用。

## 参见

- [`<mfrac>` 元素](/zh-CN/docs/Web/MathML/Element/mfrac)
- [`<msqrt>` 元素](/zh-CN/docs/Web/MathML/Element/msqrt)
- [`<mroot>` 元素](/zh-CN/docs/Web/MathML/Element/mroot)

{{PreviousMenuNext("Web/MathML/Guides/Text_containers", "Web/MathML/Guides/Scripts", "Web/MathML/Guides")}}
