---
title: 向 web 中添加矢量图形
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: 2492742db9d7341fa74604a1b4cd97dc3c079cab
---

矢量图形在很多情况下非常有用——它们拥有较小的文件尺寸，却高度可缩放，所以它们不会在镜头拉近或者放大图像时像素化。在本文中，我们将向你展示如何在网页中添加矢量图形。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        你需要了解
        <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 的基本知识</a
        >并且知道如何<a
         href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >在文档中插入图片</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解如何在网页中嵌入 SVG（矢量）图形。</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 本文的目的并不是教你 SVG；仅仅是告诉你它是什么，以及如何在 web 页面中添加它。

## 什么是矢量图形？

在 web 上，你会和两种类型的图片打交道——**位图**和**矢量图**：

- **位图**使用像素网格来定义——位图文件精确包含每个像素的位置和它的色彩信息。流行的 web 位图格式包括 Bitmap（`.bmp`）、PNG（`.png`）、JPEG（`.jpg`），以及 GIF（`.gif`）。
- **矢量图**使用算法来定义——矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。借助 {{glossary("SVG")}} 格式，我们可以创造用于 Web 的精彩矢量图形。

为了让你清楚的认识到两者的区别，我们来一个例子。你可以在我们的 Github 仓库中在线查看这个例子：[vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html)——它并排展示了两个看起来一致的图像，两个图像都是一个红色的五角星以及黑色的阴影。不同的是，左边的是 PNG，而右边的是 SVG 图像。

如果你放大网页，区别就会变得明显起来——随着你的放大，PNG 图片显现出了像素块，因为它存储是每个像素的颜色和位置信息。当它放大时，每个像素就被放大然后填满屏幕上更多的像素，所以图像就会开始变得像马赛克。然而矢量图像看起来仍然效果很好且清晰，因为无论它的尺寸如何，系统都使用算法来计算出图像的形状，仅仅是根据放大的倍数来调整算法中的值。

![两个星星图像](raster-vector-default-size.png)

![两个星星图像被放大，一个清晰而另一个模糊](raster-vector-zoomed.png)

> [!NOTE]
> 上面的图片实际上都是 PNG 图片——每个例子中左边的星星图片代表位图，右边的星星图片代表矢量图。还有，请访问 [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) 示例来查看真正的例子！

此外，相较于同样的位图，矢量图形通常体积更小，因为它们仅需储存少量的算法，而不是逐个储存每个像素的信息。

## SVG 是什么？

[SVG](/zh-CN/docs/Web/SVG) 是用于描述矢量图像的语言，它基于 {{glossary("XML")}}。它基本上是像 HTML 一样的标记，只是它提供了许多不同的元素来定义要显示在图像中的形状，以及要应用于这些形状的效果。SVG 用于标记图形，而不是内容。SVG 定义了一些用于创建基本图形的元素，如 {{svgelement("circle")}} 和 {{svgelement("rect")}}，此外 SVG 还提供了一些复杂一些的元素如 {{svgelement("path")}} 和 {{svgelement("polygon")}}。更高级的 SVG 特性包括 {{svgelement("feColorMatrix")}}（使用变换矩阵转换颜色）、{{svgelement("animate")}}（矢量图形的动画部分）和 {{svgelement("mask")}}（在图像上层应用蒙版）

以下是一个简单的示例，在示例中我们创建一个圆和一个矩形：

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

从上面的例子可以看出，SVG 很容易手工编码。是的，你可以在文本编辑器中手动编写简单的 SVG，但是随着图像复杂度提升，手动编码很快就开始变得非常困难。为了创建 SVG 图像，大多数人使用矢量图形编辑器，如 [Inkscape](https://inkscape.org/) 或 [Illustrator](https://zh.wikipedia.org/wiki/Adobe_Illustrator)。借助这些软件包，你可以使用各种图形工具创建插图，也可以创建近似照片的矢量图（例如 Inkscape 的跟踪位图功能）。

SVG 除了前面描述的以外还有其他优点：

- 矢量图像中的文本仍然可访问（这也有利于 {{glossary("SEO")}}）。
- SVG 可以很好地适应样式/脚本，因为图像的每个组件都是可以通过 CSS 或通过 JavaScript 设置样式的元素。

那么为什么会有人想使用位图而不是 SVG？好吧，其实 SVG 也有一些缺点：

- SVG 非常容易变得复杂，这意味着文件大小会增加；复杂的 SVG 也会占用浏览器很长的处理时间。
- SVG 可能比位图更难创建，具体取决于你尝试创建哪种图像。

由于上述原因，像照片那样复杂精密的图像更适合使用位图。

> [!NOTE]
> 在 Inkscape 中，可以将文件保存为纯 SVG 以节省空间。另请参阅[如何为 Web 准备 SVG](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html)。

## 将 SVG 添加到页面

在本节中，我们将介绍将 SVG 矢量图形添加到 web 页面的不同方式。

### 快捷方式：`img` 元素

要通过 {{htmlelement("img")}} 元素嵌入 SVG，你只需要按照预期的方式在 src 属性中引用它。你将至少需要 `height` 或 `width` 属性中的一个（或者如果你的 SVG 没有固有的{{glossary("aspect ratio","宽高比")}}，则都需要）。如果你还没使用过 `img` 元素，请阅读 [HTML 中的图片](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_images)教程。

```html
<img src="equilateral.svg" alt="等边三角形" height="87px" width="100px" />
```

#### 优点

- 快速且熟悉的图像语法，内置的文本等效内容可通过 `alt` 属性获取。
- 通过将 `<img>` 嵌入到 {{htmlelement("a")}} 元素中，你可以轻松地将图像转换为超链接。
- 浏览器能够缓存 SVG 文件，这意味着在未来使用该图像的页面将加载得更快。

#### 缺点

- 无法使用 JavaScript 操作图像。
- 如果要使用 CSS 控制 SVG 内容，则必须在 SVG 代码中包含内联 CSS 样式。（从 SVG 文件内部调用的外部样式表不起作用）
- 不能用 CSS 伪类来重设图像样式（如 `:focus`）。

### 问题排查和跨浏览器支持

对于不支持 SVG（IE 8 及更低版本，Android 2.3 及更低版本）的浏览器，你可以用 `src` 属性引用 PNG 或 JPG，并使用 [`srcset`](/zh-CN/docs/Web/HTML/Reference/Elements/img#srcset) 属性（只有较新的浏览器才能识别）来引用 SVG。在这种情况下，仅支持 SVG 的浏览器会加载 SVG——较旧的浏览器将加载 PNG：

```html
<img src="equilateral.png" alt="等边三角形" srcset="equilateral.svg" />
```

你还可以使用 SVG 作为 CSS 背景图像，如下所示。在下面的代码中，旧版浏览器会加载它们能够理解的 PNG，而较新的浏览器将加载 SVG：

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

与上文所述的 `<img>` 方法一样，使用 CSS 背景图片插入 SVG 意味着 SVG 无法使用 JavaScript 进行操作，并且同样受到相同的 CSS 限制。

如果 SVG 根本没有显示，可能是因为你的服务器设置不正确。如果是这个问题，[这篇文章](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#关于_web_服务器上_.svgz_文件的小提示)将为你指出正确方向。

### 如何在 HTML 中引入 SVG 代码

你还可以在文本编辑器中打开 SVG 文件，复制 SVG 代码，并将其粘贴到 HTML 文档中——这有时称为将 **SVG 内联**或**内联 SVG**。请确保你的 SVG 代码始于 `<svg>` 标签并终于 `</svg>` 标签。以下是一个非常简单的示例，你可以粘贴到文档中：

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### 优点

- 将 SVG 内联会减少 HTTP 请求，可以减少加载时间。
- 你可以为 SVG 元素分配 `class` 和 `id`，并使用 CSS 修改样式，无论是在 SVG 中，还是 HTML 文档中的 CSS 样式规则。实际上，你可以使用任何 [SVG 外观属性](/zh-CN/docs/Web/SVG/Reference/Attribute#presentation_attributes) 作为 CSS 属性。
- 内联 SVG 是唯一可以让你在 SVG 图像上使用 CSS 交互（如 `:focus`）和 CSS 动画的方法（即使在常规样式表中）。
- 你可以通过将 SVG 标记包在 {{htmlelement("a")}} 元素中，使其成为超链接。

#### 缺点

- 这种方法只适用于 SVG 在单个地方使用的情况。多次使用会导致资源密集型维护（resource-intensive maintenance）。
- 额外的 SVG 代码会增加 HTML 文件的大小。
- 浏览器不能像缓存普通图像资源那样缓存内联 SVG，因此包含该图像的页面在加载第一个包含该图像的页面后，加载速度不会更快。
- 你可能会在 {{svgelement("foreignObject")}} 元素中包含回退，但支持 SVG 的浏览器仍然会下载所有后备图像。你需要考虑仅仅为支持过时的浏览器，而增加额外开销是否真的值得。

### 如何使用 `iframe` 嵌入 SVG

你可以在浏览器中打开 SVG 图像，就像网页一样。因此，使用 `<iframe>` 嵌入 SVG 文档就像我们在[从 \<object> 到 \<iframe>——其他嵌入技术](/zh-CN/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)中学习的一样。

以下是一个快速回顾：

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

这绝对不是最好的方法：

#### 缺点

- 如你所知，`iframe` 有一个回退机制，如果浏览器不支持 `iframe`，则只会显示回退。
- 此外，除非 SVG 和你当前的网页具有相同的{{glossary('origin', '来源')}}，否则你不能在主页面上使用 JavaScript 来操纵 SVG。

## 动手学习：使用 SVG

在本动手学习部分中，我们希望你能够体验一下 SVG 的乐趣。在下面的*输入*部分，你会看到我们已经提供了一些样例供你使用。你还可以访问 [SVG 元素参考](/zh-CN/docs/Web/SVG/Reference/Element)，了解更多 SVG 可以把玩的细节，当然也可以尝试一下。本部分都是为了锻炼你的研究技巧，并且有一些乐趣。

如果你遇到了困难，无法使你的代码工作，你可以随时使用*重置*按钮进行重置。

```html hidden
<h2>实时输出</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符</p>

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
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="显示答案" disabled />
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
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "显示答案";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "显示答案") {
    textarea.value = solutionEntry;
    solution.value = "隐藏答案";
  } else {
    textarea.value = userEntry;
    solution.value = "显示答案";
  }
  updateCode();
});

const htmlSolution = "";
let solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// 防止 Tab 键使 textarea 失去焦点，
// 转而使其在当前光标位置插入一个制表符

textarea.onkeydown = function (e) {
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

// 每次用户更新文本区域代码时，更新已保存的用户代码

textarea.onkeyup = function () {
  // 我们只希望在显示用户代码时保存状态，
  // 而不保存答案，以防止答案覆盖用户代码
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

本文提供了矢量图形和 SVG 的简单教程，让你了解他们的作用，以及如何在网页中引入 SVG。本文并非学习 SVG 的完整教程，只是一个指南，让你在 Web 上遇到 SVG 时知道它是什么。所以不要因为觉得你不是一个 SVG 专家而担心。如果你想了解更多它的工作原理，我们在下面列出了一些可能会帮助你的链接。

在本模块的最后一篇文章中，我们将详细探索[响应式图像](/zh-CN/docs/Web/HTML/Guides/Responsive_images)，查看 HTML 提供的可以让图像更好地跨设备适配的工具。

## 参见

- MDN [SVG 教程](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started)
- [Sara Soueidan 的响应式 SVG 图像教程](http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [SVG 在无障碍方面的好处](https://www.w3.org/TR/SVG-access/)
- [如何缩放 SVG](https://css-tricks.com/scale-svg/)（它不像位图那么简单！）
