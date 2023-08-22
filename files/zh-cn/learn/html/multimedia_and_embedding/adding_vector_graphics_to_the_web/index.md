---
title: 在网页中添加矢量图形
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

矢量图形在很多情况下非常有用 — 它们拥有较小的文件尺寸，却高度可缩放，所以它们不会在镜头拉近或者放大图像时像素化。在这篇文章中，我们将为您呈现如何在网页中添加矢量图形。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        你需要了解
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 的基本知识</a
        >
        并且知道如何
        <a href="/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >在你的文档中插入图片</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解如何嵌入 SVG (矢量) 图形到网页中。</td>
    </tr>
  </tbody>
</table>

> **备注：** 本文的目的并不是教你 SVG；仅仅是告诉你它是什么，以及如何在网页中添加它。

## 什么是矢量图形？

在网上，你会和两种类型的图片打交道 — 位图和矢量图：

- 位图使用像素网格来定义 — 一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`), and GIF (`.gif`.)
- 矢量图使用算法来定义 — 一个矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。 {{glossary("SVG")}} 格式可以让我们创造用于 Web 的精彩的矢量图形。

为了让你清楚的认识到两者的区别，我们来一个例子。你可以在我们的 Github 仓库中在线查看这个例子：[vector-versus-raster.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — 它并排展示了两个看起来一致的图像，一个红色的五角星以及黑色的阴影。不同的是，左边的是 PNG，而右边的是 SVG 图像。

当你放大网页的时候，区别就会变得明显起来 — 随着你的放大，PNG 图片变得像素化了，因为它存储是每个像素的颜色和位置信息 — 当它被放大时，每个像素就被放大以填满屏幕上更多的像素，所以图像就会开始变得马赛克感觉。矢量图像看起来仍然效果很好且清晰，因为无论它的尺寸如何，都使用算法来计算出图像的形状，仅仅是根据放大的倍数来调整算法中的值。

![Two star images, one raster and one vector. At their default size they look identical](raster-vector-default-size.png)

![Two star images zoomed in. The raster one on the left starts to look pixellated, whereas the vector one still looks crisp.](raster-vector-zoomed.png)

> **备注：** 上面的图片实际上都是 PNG 图片 —— 每个例子中左边的图片代表光栅图片，右边的星星代表矢量图。还有，访问 [vector-versus-raster.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) 示例来查看真正的例子！

此外，矢量图形相较于同样的位图，通常拥有更小的体积，因为它们仅需储存少量的算法，而不是逐个储存每个像素的信息。

## SVG 是什么？

[SVG](/zh-CN/docs/Web/SVG) 是用于描述矢量图像的{{glossary("XML")}}语言。它基本上是像 HTML 一样的标记，只是你有许多不同的元素来定义要显示在图像中的形状，以及要应用于这些形状的效果。SVG 用于标记图形，而不是内容。非常简单，你有一些元素来创建简单图形，如{{svgelement("circle")}} 和{{svgelement("rect")}}。更高级的 SVG 功能包括 {{svgelement("feColorMatrix")}}（使用变换矩阵转换颜色）{{svgelement("animate")}} （矢量图形的动画部分）和 {{svgelement("mask")}}（在图像顶部应用模板）

作为一个简单的例子，以下代码创建一个圆和一个矩形：

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

这将创建以下输出：

{{ EmbedLiveSample('SVG 是什么？', 300, 200) }}

从上面的例子可以看出，SVG 很容易手工编码。是的，您可以在文本编辑器中手动编写简单的 SVG，但是对于复杂的图像，这很快就开始变得非常困难。为了创建 SVG 图像，大多数人使用矢量图形编辑器，如 [Inkscape](https://inkscape.org/en/) 或 [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator)。这些软件包允许您使用各种图形工具创建各种插图，并创建照片的近似值（例如 Inkscape 的跟踪位图功能）。

SVG 除了迄今为止所描述的以外还有其他优点：

- 矢量图像中的文本仍然可访问（这也有利于 {{glossary("SEO")}}）。
- SVG 可以很好地适应样式/脚本，因为图像的每个组件都是可以通过 CSS 或通过 JavaScript 编写的样式的元素。

那么为什么会有人想使用光栅图形而不是 SVG？其实 SVG 确实有一些缺点：

- SVG 非常容易变得复杂，这意味着文件大小会增加; 复杂的 SVG 也会在浏览器中占用很长的处理时间。
- SVG 可能比栅格图像更难创建，具体取决于您尝试创建哪种图像。
- 旧版浏览器不支持 SVG，因此如果您需要在网站上支持旧版本的 IE，则可能不适合（SVG 从 IE9 开始得到支持）。

由于上述原因，光栅图形更适合照片那样复杂精密的图像。

> **备注：** 在 Inkscape 中，将文件保存为纯 SVG 以节省空间。另请参阅[如何为 Web 准备 SVG](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html)。

## 将 SVG 添加到页面

在本节中，我们将介绍将 SVG 矢量图形添加到网页的不同方式。

### 快捷方式：{{htmlelement("img")}}

要通过 {{htmlelement("img")}}元素嵌入 SVG，你只需要按照预期的方式在 src 属性中引用它。你将需要一个`height`或`width`属性（或者如果您的 SVG 没有固有的宽高比）。如果您还没使用过\<img>元素，请阅读[HTML 中的图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)教程。

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87px"
  width="100px" />
```

#### 优点

- 快速，熟悉的图像语法与`alt`属性中提供的内置文本等效。
- 可以通过在{{htmlelement("a")}}元素嵌套`<img>`，使图像轻松地成为超链接。

#### 缺点

- 无法使用 JavaScript 操作图像。
- 如果要使用 CSS 控制 SVG 内容，则必须在 SVG 代码中包含内联 CSS 样式。 （从 SVG 文件调用的外部样式表不起作用）
- 不能用 CSS 伪类来重设图像样式（如`:focus`）。

### 疑难解答和跨浏览器支持

对于不支持 SVG（IE 8 及更低版本，Android 2.3 及更低版本）的浏览器，您可以从`src`属性引用 PNG 或 JPG，并使用[`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset)属性 只有最近的浏览器才能识别）来引用 SVG。在这种情况下，仅支持浏览器将加载 SVG - 较旧的浏览器将加载 PNG：

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

您还可以使用 SVG 作为 CSS 背景图像，如下所示。在下面的代码中，旧版浏览器会坚持他们理解的 PNG，而较新的浏览器将加载 SVG：

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

像上面描述的`<img>`方法一样，使用 CSS 背景图像插入 SVG 意味着它不能被 JavaScript 操作，并且也受到相同的 CSS 限制。

如果 SVG 根本没有显示，可能是因为你的服务器设置不正确。如果是这个问题，[这篇文章](/zh-CN/docs/Web/SVG/Tutorial/Getting_Started#A_Word_on_Webservers)将告诉你正确方向。

### 如何在 HTML 中引入 SVG 代码

你还可以在文本编辑器中打开 SVG 文件，复制 SVG 代码，并将其粘贴到 HTML 文档中 - 这有时称为将**SVG 内联**或**内联 SVG**。确保您的 SVG 代码在[`<svg></svg>`](/zh-CN/docs/Web/SVG/Element/svg)标签中（不要在外面添加任何内容）。这是一个非常简单的示例，您可以粘贴到文档中：

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### 优点

- 将 SVG 内联减少 HTTP 请求，可以减少加载时间。
- 您可以为 SVG 元素分配`class`和`id`，并使用 CSS 修改样式，无论是在 SVG 中，还是 HTML 文档中的 CSS 样式规则。实际上，您可以使用任何 [SVG 外观属性](/zh-CN/docs/Web/SVG/Attribute#Presentation_attributes) 作为 CSS 属性。
- 内联 SVG 是唯一可以让您在 SVG 图像上使用 CSS 交互（如`:focus`）和 CSS 动画的方法（即使在常规样式表中）。
- 您可以通过将 SVG 标记包在{{htmlelement("a")}}元素中，使其成为超链接。

#### 缺点

- 这种方法只适用于在一个地方使用的 SVG。多次使用会导致资源密集型维护（resource-intensive maintenance）。
- 额外的 SVG 代码会增加 HTML 文件的大小。
- 浏览器不能像缓存普通图片一样缓存内联 SVG。
- 您可能会在{{svgelement("foreignObject")}} 元素中包含回退，但支持 SVG 的浏览器仍然会下载任何后备图像。你需要考虑仅仅为支持过时的浏览器，而增加额外开销是否真的值得。

### 如何使用 {{htmlelement("iframe")}} 嵌入 SVG

您可以在浏览器中打开 SVG 图像，就像网页一样。因此，使用`<iframe>`嵌入 SVG 文档就像我们在 [从对象到 iframe - 其他嵌入技术](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/其他嵌入技术) 中进行研究一样。

这是一个快速回顾：

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

这绝对不是最好的方法：

#### 缺点

- 如你所知， `iframe`有一个回退机制，如果浏览器不支持`iframe`，则只会显示回退。
- 此外，除非 SVG 和您当前的网页具有相同的 {{glossary('origin')}}，否则你不能在主页面上使用 JavaScript 来操纵 SVG。

## 动手学习：使用 SVG

在这个动手学习部分中，我们希望你能够体验一下 SVG 的乐趣。在下面的“input”部分，您将看到我们已经提供了一些样例来开始使用。您还可以访问 [SVG 元素参考](/zh-CN/docs/Web/SVG/Element)，了解更多关于 SVG 可以使用的其他玩具的细节，也可以尝试一下。这部分都是为了锻炼你的研究技巧，并且有一些乐趣。

如果你卡住了，无法使你的代码工作，你可以随时使用 Reset 按钮进行重置。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
    <polygon points="120,0 240,225 0,225" fill="green"/>
    <text x="50" y="100" font-family="Verdana" font-size="55"
          fill="white" stroke="black" stroke-width="2">
            Hello!
    </text>
  </svg>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" disabled />
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

var htmlSolution = "";
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

{{ EmbedLiveSample('动手学习：使用 SVG', 700, 500) }}

## 总结

本文提供了一个矢量图形和 SVG 的快速浏览，让你了解他们的作用，以及如何在网页中引入 SVG。它从来没有打算成为学习 SVG 的完整教程，只是一个指南，让你在网上遇到 SVG 时知道它是什么。所以不要觉得你不是一个 SVG 专家而担心。如果你想了解更多关于它的工作原理，我们在下面列出了一些可能会帮助您的信息。

在本模块的最后一篇文章中，我们将详细探索响应式图像，查看 HTML 可以让您的图像在不同设备上更好地适配。

## 参见

- [SVG tutorial](/zh-CN/docs/Web/SVG/Tutorial/Getting_Started) on MDN
- [Quick tips for responsive SVGs](http://thenewcode.com/744/Making-SVG-Responsive)
- [Sara Soueidan's tutorial on responsive SVG images](http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Accessibility benefits of SVG](http://www.w3.org/TR/SVG-access/)
- [How to scale SVGs](https://css-tricks.com/scale-svg/)（它不像光栅图形那么简单！）

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
