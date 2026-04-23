---
title: MathML 附加符号
slug: Web/MathML/Tutorials/For_beginners/Scripts
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}

我们继续回顾基本数学符号，并重点介绍如何使用附加符号构建 MathML 元素。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机操作能力、<a
        href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
        >安装基本软件</a
        >、<a href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
        >处理文件</a>的基本知识，以及
      HTML 基础知识（可以学习 <a
        href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML 入门</a
        >。）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        熟悉基本的 MathML 上下标元素。
      </td>
    </tr>
  </tbody>
</table>

## 下标和上标

类似于我们在[上一篇文章](/zh-CN/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots)中所学习的，`<msub>`、`<msup>` 和 `<msubsup>` 具有特殊的结构，它们恰好有两个元素（`<msub>`、`<msup>`）或三个元素（`<msubsup>`）：

```html
<p>
  msub:
  <math>
    <msub>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </msub>
  </math>
</p>

<p>
  msup:
  <math>
    <msup>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </msup>
  </math>
</p>
<p>
  msubsup:
  <math>
    <msubsup>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
      <mtext>child3</mtext>
    </msubsup>
  </math>
</p>
```

以下是在你的浏览器中的上述示例的渲染结果。

{{EmbedLiveSample('下标和上标', 700, 200)}}

可以看出：

- `<msub>` 元素的第二个子元素作为其第一个子元素的下标附加。
- `<msup>` 元素的第二个子元素作为其第一个子元素的上标附加。
- `<msubsup>` 元素的第二个和第三个子元素分别作为其第一个子元素的下标和上标附加。
- 上下标内的文本会缩小显示。

> [!NOTE]
> MathML 元素 `<msub>` 和 `<msup>` 与 HTML 元素 [`<sub>`](/zh-CN/docs/Web/HTML/Reference/Elements/sub) 和 [`<sup>`](/zh-CN/docs/Web/HTML/Reference/Elements/sup) 不同。它们允许开发者将任意的 MathML 子树作为附加符号，而不仅仅是文本。

## 正下标和正上标

`<munder>`、`<mover>` 和 `<munderover>` 元素与之前介绍的元素非常相似，只是它们用于附加正下标（underscript）和正上标（overscirpt）。我们不会提供详细信息，而是让你自己通过以下练习来了解它们的定义。

### 主动学习：识别正下标和正上标

在下面的示例中，试着猜测神秘元素的名称（用问号表示），然后点击按钮来显示答案：

```html hidden
<p>
  <code>&lt;<span>????????</span>&gt;</code>
  元素正好具有两个子元素（child1、child2）：
  <math>
    <mover>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </mover>
  </math>
</p>
<p>
  <code>&lt;<span>????????</span>&gt;</code>
  元素正好具有三个子元素（child1、child2 以及 child3）：
  <math>
    <munderover>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
      <mtext>child3</mtext>
    </munderover>
  </math>
</p>
<p>
  <code>&lt;<span>????????</span>&gt;</code>
  元素正好具有两个子元素（child1、child2）：
  <math>
    <munder>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </munder>
  </math>
</p>

<p><input type="button" id="showSolution" value="展示结果" /></p>
```

```css hidden
p {
  padding: 0.5em;
}
```

```js hidden
document.getElementById("showSolution").addEventListener("click", () => {
  const maths = Array.from(document.getElementsByTagName("math"));
  Array.from(document.getElementsByTagName("span")).forEach((span, index) => {
    span.textContent = maths[index].firstElementChild.tagName;
  });
});
```

{{EmbedLiveSample('主动学习：识别正下标和正上标', 700, 400)}}

### 主动学习：识别附加符号元素

以下的 MathML 公式包含了更复杂的表达式，嵌套了分数、根号和附加符号元素。尝试猜测使用了 `<msub>`、`<msup>`、`<msubsup>`、`<munder>`、`<mover>`、`<munderover>` 的元素。每次当你点击这样的元素时，它会被突出显示，并显示确认信息。最后，阅读 MathML 源代码以验证是否与你的预期相符。

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>带有附加符号元素的页面</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mi>β</mi>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow
          ><mo>|</mo>
          <mover>
            <mi>α</mi>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
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
const scriptedElements = Array.from(
  document.querySelectorAll("msub, msup, msubsup, munder, mover, munderover"),
);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  scriptedElements.forEach((scripted) => {
    scripted.classList.remove("highlight");
  });
}
scriptedElements.forEach((scripted) => {
  scripted.addEventListener("click", () => {
    clearHighlight();
    scripted.classList.add("highlight");
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>你点击了 <code>&lt;${scripted.tagName}&gt;</code> 元素。</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.innerHTML = "";
});
```

{{EmbedLiveSample('主动学习：识别附加符号元素', 700, 400)}}

## 其他运算符属性

我们之前已经了解了 `<mo>` 元素的一些[属性](/zh-CN/docs/Web/MathML/Tutorials/For_beginners/Text_containers#mo_的运算符属性)，包括在垂直方向上的拉伸和间距。现在有了附加符号元素，我们可以扩展该列表。我们将通过修改我们的[上一个示例](#主动学习：识别附加符号元素)来实现这一点。

### 在水平方向上的拉伸

首先，让我们进行以下替换：<math> <mi>β</mi> <mo>≔</mo> <mrow> <msub> <mi>z</mi> <mn>1</mn> </msub> <mo>+</mo> <msub> <mi>z</mi> <mn>2</mn> </msub> </mrow> </math> 和 <math> <mi>α</mi> <mo>≔</mo> <mrow> <msub> <mi>v</mi> <mn>1</mn> </msub> <mo>+</mo> <msub> <mi>v</mi> <mn>2</mn> </msub> </mrow> </math>：

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>带有水平拉伸操作符的页面</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow
          ><mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
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

{{EmbedLiveSample('在水平方向上的拉伸', 700, 200)}}

可以看出底部括号“⎵”和右箭头“→”在水平方向上会延伸以覆盖被替代值的宽度。回想一下，[一些竖直运算符可以伸展](/zh-CN/docs/Web/MathML/Tutorials/For_beginners/Text_containers#主动学习：可伸缩运算符)，以覆盖 `<mrow>` 中非伸展兄弟节点的高度。类似地，一些水平运算符可以伸展以覆盖 `<munder>`、`<mover>` 或 `<munderover>` 元素中非伸展兄弟节点的宽度。

> [!NOTE]
> 伸展适用于 `<munder>`、`<mover>` 或 `<munderover>` 元素的任何子元素，不仅仅是正下标或正上标。

### 大型运算符和极限

到目前为止，我们的示例实际上是使用 [`display="block"`](/zh-CN/docs/Web/MathML/Tutorials/For_beginners/Getting_started#display_属性) 属性呈现的。让我们看一下同一个示例，在没有该属性的情况下渲染的效果：

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>极限符号被挪动并且大型运算符变小的页面</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math>
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow
          ><mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
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

{{EmbedLiveSample('大型运算符和极限', 700, 200)}}

不出所料，公式不再居中，渲染方式发生变动，导致高度最小化。注意求和符号，可以看到求和符号变小了，并且 `<munderover>` 元素的附加符号现在以下标和上标的方式附加在其上！这是由于“∑”运算符的两个属性：

- _largeop_：如果 `<math>` 标签具有 `display="block"` 属性，则使用更大的字形绘制运算符。
- _movablelimits_：如果 `<math>` 标签没有 `display="block"` 属性，则将附加在运算符上的正下标和正上标分别渲染为下标和上标。

> [!NOTE]
> _largeop_ 属性实际上与附加符号无关，尽管具有此属性的运算符通常会有附加符号。_movablelimits_ 属性也适用于 `<munder>` 和 `<mover>` 元素。

## 总结

在本文中，我们完成了对引入下标、上标、正下标和正上标的基本布局元素 `<msub>`、`<msup>`、`<msubsup>`、`<munder>`、`<mover>` 以及 `<munderover>` 的介绍。在介绍这些元素的过程中，我们顺便介绍了 `<mo>` 元素的新属性。在下一篇文章中，我们将继续关注[表格布局](/zh-CN/docs/Web/MathML/Tutorials/For_beginners/Tables)。

## 参见

- [<msub> 元素](/zh-CN/docs/Web/MathML/Reference/Element/msub)
- [<msup> 元素](/zh-CN/docs/Web/MathML/Reference/Element/msup)
- [<msubsup> 元素](/zh-CN/docs/Web/MathML/Reference/Element/msubsup)
- [<munder> 元素](/zh-CN/docs/Web/MathML/Reference/Element/munder)
- [<mover> 元素](/zh-CN/docs/Web/MathML/Reference/Element/mover)
- [<munderover> 元素](/zh-CN/docs/Web/MathML/Reference/Element/munderover)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}
