---
title: 运行实例
slug: MDN/Structures/Live_samples
tags:
  - Guide
  - Intermediate
  - MDN Meta
  - Structures
translation_of: MDN/Structures/Live_samples
---
{{MDNSidebar}}

MDN 支持将文章中的示例代码转化为读者可以实际查看的运行实例。运行实例可以包括 HTML、CSS 和 JavaScript 的任意组合。注意，“运行”的实例是 _非交互性_ 的。但是，它们确保了示例展现的输出与示例代码相匹配，因为它仅仅由代码实例生成。

## 运行实例系统如何工作

运行实例系统将所有代码整合为一个集合，再将这个集合融合到一个 HTML 文件中，然后在内联框架 {{HTMLElement("iframe")}} 中渲染这个文件。一个运行实例由两个部分构成：

- 一个代码块组成的集合
- 一个调用（创建的框架或链接）以展示该代码块结果的宏

一个代码块的“集合”，在此上下文中，以标题或块级元素（类似 {{HTMLElement("div")}}）的 id 作为标识。

- 如果这个 id 属于一个块级元素，该集合将包含此块级元素包含范围内的所有代码。
- 如果这个 id 属于一个标题，该集合将包含此标题之后到下个同级标题之前的所有代码。请注意，子标题下的代码块也会被包含，如果不希望这样的效果，可以使用块级元素的 id。

宏使用一个特殊的 URL 来取得一个分组中的代码示例，例如：`https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/animation/_sample_.Cylon_Eye.html`。总体结构是 `https://url-of-page/_sample_.group-id.html`，`group-id` 指代码所在标题或者块级元素的 id。

用来展示运行结果的框架 (或页面) 会运行在沙盒中，在安全条件下实现任何想在网络上实现的功能。当然，在实践中，代码需要针对于包含它的页面，MDN 上运行的随意的内容会被社区编辑移除。

> **备注：** **必须**使用宏来展示运行实例的输出。

每个包含示例代码的 {{HTMLElement("pre")}} 段落都有一个 class 指示它由何种语言写成（HTML、CSS 或 JavaScript）。这些 class 的值是“brush: html”、“brush: css”或“brush: js”。这些 class 必须与代码匹配以被维基正确使用。一般情况下，当你在使用编辑器工具栏的语法高亮时候，这些属性会被自动添加。

运行实例系统由很多可用选项，我们会分解开来讲解。

### 运行实例宏

你可以用两种宏来展示实例：

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/master/kumascript/macros/EmbedLiveSample.ejs) 将一个运行实例嵌入到页面中
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/master/kumascript/macros/LiveSampleLink.ejs) 创建一个链接，在新的页面中打开运行实例

在很多情况下，可以很便捷地在页面中使用 `EmbedLiveSample` 或 `LiveSampleLink` 宏。只要代码示例可以通过一个标题的 id 或一个块级元素的 id 的区分开，就可以简单的插入宏来实现功能。

#### 页内运行实例（EmbedLiveSample）宏

```js
\{{EmbedLiveSample(block_ID, width, height, screenshot_URL, page_slug)}}
```

- block_ID
  - : 必需。包含示例代码的标题或块级元素的 id。保证 id 正确的最好的办法是在内容表中查看 URL，也可以通过查看网页源码的方式检查。
- width
  - : 可选。创建的 {{HTMLElement("iframe")}} 元素的宽度，以 `px` 为单位。若忽略该项，系统会使用一个合理的默认宽度。请注意，如果需要指定该项，那么 _必须_ 同时指定高度。
- height
  - : 可选。创建的 {{HTMLElement("iframe")}} 元素的高度，以 `px` 为单位。若忽略该项，系统会使用一个合理的默认高度。请注意，如果需要指定该项，那么 _必须_ 同时指定宽度。如果仅仅指定了高度和宽度中的一个，那么系统会应用默认尺寸。
- screenshot_URL
  - : 可选。截屏 URL 显示了运行实例的效果。对于用户浏览器尚未支持的新技术很有用，他们就可以看到结果的快照。如果指定该项，截屏会带着相关标题显示在运行实例之后。
- page_slug
  - : 可选。包含示例的页面的代称。若忽略该项，示例将会从宏所在页面拉取。

    > **警告：** 要在不同的目标页面中显示来自一个包含代码的页面的运行实例时，这个包含代码的页面自身必须使用 [`EmbedLiveSample`](https://github.com/mdn/kumascript/blob/master/macros/EmbedLiveSample.ejs) 宏将运行实例嵌入到它自己的页面中。否则，如果这个包含代码的页面自己没有使用 [`EmbedLiveSample`](https://github.com/mdn/kumascript/blob/master/macros/EmbedLiveSample.ejs) 宏，运行实例将无法在其它所有的目标页面中显示。（参见 [Yari issue #2243](https://github.com/mdn/yari/issues/2243)。）

#### 链接运行实例（LiveSampleLink）宏

```js
\{{LiveSampleLink(block_ID, link_text)}}
```

- block_ID
  - : 必需。包含示例代码的标题或块级元素的 id。保证使用正确 id 的最好的办法是在页面的目录中查找 URL，也可以通过查看网页源码的方式检查。
- link_text
  - : 链接文本。

## 使用运行实例系统

以下部分描述了一些运行实例系统的常见用例。

### 将片段转为运行实例

一个常见的用例是将 MDN 中已有代码片段转为运行实例。

#### 准备代码示例

第一步是添加代码片段，或根据内容和标记确认已有片段可以成为运行实例。代码片段必须组成一个完整可运行的示例。比如，如果已有 `CSS` 片段，那么需要添加一段 `HTML`。

每段代码都需要包含在正确标记其语言的 {{HTMLElement("pre")}} 块中，一个代码块只能包含一种语言。多数情况下，这些步骤都没问题，不过再检查一遍总是好的。当 `<pre>` 元素 class 的值为 `brush:language-type`，且 _language-type_ 是该代码块的语言类型（如：`html`、`css` 或 `js`）时，说明这一步已经完成。

> **备注：** 每种语言的代码可以分布在几个代码块里，所有代码会被拼接起来。这个特性允许一块代码对应一块简介。这样有利于制作教程，比如代码间夹杂着大量的注释。

所以在确认 {{HTMLElement("pre")}} 块被正确标记为其所用语言以提供语言的语法高亮之后，你就可以继续了。

## 运行实例演示

这部分是使用“插入运行实例模板”按钮插入运行实例标题和代码块的结果。每种语言可以有不止一个代码块。同样也不需要有特定的顺序，所有代码会被混合匹配。

可以选择删除任何部分。如果不需要脚本，那么删掉脚本的标题和代码块就可以了。同样，也可以在不再被运行实例宏使用的情况下，删掉代码块的标题（“HTML”、“CSS”或“JavaScript”）。

代码模板插入之后，可以增加一些代码，也可以加入一些注释。

### HTML

这段 HTML 代码创建了一个段落和几个块级元素（`div`）以定位和风格化信息。

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

### CSS

这段 CSS 代码为 box 和其中的文字添加样式。

```css
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

### JavaScript

这段代码很简单，只是增加了一个点击事件来弹出信息。

```js
var el = document.getElementById('item');
el.onclick = function() {
  alert('Owww, stop poking me!');
}
```

### 结果

这是通过 `\{{EmbedLiveSample('运行实例演示')}}` 来展示上面运行代码块的结果。

{{EmbedLiveSample('运行实例演示')}}

这是使用外链宏 `\{{LiveSampleLink('运行实例演示', '运行实例演示链接')}}` 来展示实例运行的结果：

{{LiveSampleLink('运行实例演示', '运行实例演示链接')}}

## 关于运行实例的约定

- 代码块顺序
  - : 添加运行实例时，应对代码块进行排序，以便使第一个代码块对应该示例的主要语言（如果有的话）。例如，在 HTML 参考中添加运行实例时，第一个代码块应该是 HTML；在 CSS 参考中添加时，第一个代码块则应该是 CSS；以此类推。
- 标题命名
  - : 在没有歧义的情况下（如，例子位于“示例”部分中），标题应该简明扼要，仅使用相应语言的名称：HTML、CSS、CSS、JavasScript、SVG 等（见上文）。不应使用如“HTML 内容”或“JavaScript 内容”等标题。但是，如果这样的短标题无法明确内容，可以使用更具体的标题。
- 使用“结果”块
  - : 在不同的代码块之后，请在最后调用 `EmbedLiveSample` 宏之前使用“结果”块（见上文）。这样，示例的语义对于阅读器或其它解析页面的工具（如：屏幕阅读器、网络爬虫）都会变得更加清晰。
