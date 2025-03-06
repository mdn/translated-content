---
title: 经期跟踪器：基础 HTML 和 CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

要构建渐进式 Web 应用程序（PWA），我们需要创建一个功能完备的 Web 应用程序。在本节中，我们将为静态网页标记 HTML，并使用 CSS 来增强其外观。

我们的项目是创建经期跟踪器（CycleTracker），一个月经周期跟踪器。在这个入门级的 [PWA 教程](/zh-CN/docs/Web/Progressive_web_apps/Tutorials)的第一步，我们将编写 HTML 和 CSS。页面的上部分是一个表单，供用户输入每个月经周期的开始和结束日期。下部分是以前月经周期的列表。

我们创建一个 HTML 文件，其头部包含元数据，静态网页包含一个表单和一个用于显示用户输入数据的占位符。然后我们将添加一个外部 CSS 样式表来提升网站的外观。

要完成本教程，最好对 [HTML](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)、[CSS](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) 和 [JavaScript](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) 有基本的了解。如果你对这些不熟悉，MDN 提供了入门指南[入门指南](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website)——一套介绍 Web 开发的系列教程。

在接下来的章节中，我们将设置一个[本地开发环境](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)，然后在添加 [JavaScript 功能](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)来将本节中创建的静态内容转换为功能性的 Web 应用程序之前，我们会看看我们的进展。一旦我们有了一个功能性的应用，我们就会有可以渐进增强为可安装的、离线工作的 PWA 的东西。

## 静态网页内容

我们的静态站点 HTML，用 {{HTMLElement("link")}} 和 {{HTMLElement("script")}} 元素作为尚未创建的外部 CSS 和 JavaScript 文件的占位符，如下：

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Cycle Tracker</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Period tracker</h1>
    <form>
      <fieldset>
        <legend>Enter your period start and end date</legend>
        <p>
          <label for="start-date">Start date</label>
          <input type="date" id="start-date" required />
        </p>
        <p>
          <label for="end-date">End date</label>
          <input type="date" id="end-date" required />
        </p>
      </fieldset>
      <p>
        <button type="submit">Add Period</button>
      </p>
    </form>
    <section id="past-periods"></section>
    <script src="app.js" defer></script>
  </body>
</html>
```

复制此 HTML 并保存在名为 `index.html` 的文件中。

## HTML 内容

即使 `index.html` 中的 HTML 对你来说已经很熟悉，在添加一些[临时的硬编码数据](#临时硬编码结果文本)、将 CSS 添加到 [`styles.css`](#css_内容) 外部样式表和创建 `app.js`（[应用程序的 JavaScript](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)，使这个网页起作用）之前，我们还是建议你通读一遍这一节。

HTML 的第一行是一个 {{glossary("doctype")}} 弁言（preamble），可以确保内容的正确行为。

```html
<!doctype html>
```

根 {{HTMLelement("html")}} 标签将所有内容包裹在具有 [`lang`](/zh-CN/docs/Web/HTML/Global_attributes/lang) 属性的标签中，该属性定义了页面的主要语言。

```html
<!doctype html>
<html lang="en-US">
  <!-- <head> 和 <body> 将在这里 -->
</html>
```

### 文档头部

{{HTMLelement("head")}} 包含了关于网页应用程序的不能被读者看到的机器可读信息，除了 `<title>` 之外，它显示在浏览器标签的标题中。

`<head>` 包含了所有的[元数据](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)。你的 `<head>` 中的前两项信息应该总是字符集定义，它定义了[字符编码](/zh-CN/docs/Glossary/Character_encoding)，和 [viewport](/zh-CN/docs/Web/HTML/Viewport_meta_tag) {{HTMLelement("meta")}} 标签，它可以确保页面以视口的宽度渲染，而不会在非常小的屏幕上被缩小。

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

我们使用 {{HTMLelement("title")}} 元素将页面标题设置为“Cycle Tracker”。尽管 `<head>` 的内容不会在页面中显示，但是 `<title>` 的内容会显示！当页面加载时，`<title>` 元素的内部文本会出现在浏览器标签页中，还会出现在搜索引擎结果中，并且当用户收藏网页进书签时，它是默认的标题。对于依赖标题来了解他们当前所在标签页的屏幕阅读器用户来说，标题也提供了一个无障碍的名称。

虽然标题可以是“月经周期追踪应用程序”，但我们选择了一个更谨慎的缩写名称。

```html
<title>Cycle Tracker</title>
```

尽管这两个 `<meta>` 标签和 `<title>` 在技术上是可选的，但为了更好的用户体验，它们应该被视为 HTML 文档所必需的 `<head>` 的三个组成部分。

现在，我们在 `<head>` 中包含的最后一个组件是一个 {{HTMLelement("link")}} 元素，它将 `styles.css`（我们尚未编写的样式表）链接到我们的 HTML。

```html
<link rel="stylesheet" href="style.css" />
```

HTML `<link>` 元素用于指定当前文档与外部资源之间的关系。[`rel`](/zh-CN/docs/Web/HTML/Attributes/rel) 属性有超过 25 个定义的值——还有许多规范中没有定义的值。最常见的值 `rel="stylesheet"` 导入外部资源作为样式表。

在后面的小节中，当我们包括 [manifest 文件的链接](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app) 时，我们将重新回顾 `<link>` 元素及其 `rel` 属性。

### 文档主体

{{HTMLelement("body")}} 元素包含了我们想要在用户访问该网站时显示的所有内容。

在 `<body>` 中，我们包含了以应用程序的名称为一级标题的 [`<h1>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements)以及一个 {{HTMLelement("form")}}。

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

表单将包含说明、表单控件、每个表单控件的标签和一个提交按钮。就表单控件而言，我们需要用户为每次提交的月经周期输入起始日期和结束日期。

在 `<form>` 中，我们包含一个带有 {{HTMLelement("legend")}} 的 {{HTMLelement("fieldset")}}，用来标记那一组表单字段的用途。

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

日期选择器是类型为 {{HTMLElement("input/date", "date")}} 的 {{HTMLElement("input")}} 元素。我们包含 [`required`](/zh-CN/docs/Web/HTML/Attributes/required) 属性，通过防止用户意外提交不完整的表单，来减少用户错误。

为了将 `<label>` 与表单控件相关联，每个 `<input>` 都有一个 [`id`](/zh-CN/docs/Web/HTML/Global_attributes/id) 属性，它与相关联的 {{HTMLelement("label")}} 的 [`for`](/zh-CN/docs/Web/HTML/Attributes/for) 属性匹配。相关的标签为每个 `<input>` 提供了一个{{glossary("accessible name", "无障碍")}}。

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

把它组合在一起，在 `<fieldset>` 中，我们包含了两个段落（{{HTMLelement("p")}} 元素），每个段落都有一个日期选择器用于输入当前月经周期的开始和结束日期，以及日期选择器的相关 {{HTMLelement("label")}}。我们还包含了一个 {{HTMLelement("button")}} 元素来提交表单；通过在开始标签（tag）和结束标签之间包括“Add period”文本为其添加标签（label）。`type="submit"` 是可选的，因为 `submit` 是 `<button>` 的默认类型。

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
    <p>
      <label for="start-date">Start date</label>
      <input type="date" id="start-date" required />
    </p>
    <p>
      <label for="end-date">End date</label>
      <input type="date" id="end-date" required />
    </p>
  </fieldset>
  <p>
    <button type="submit">Add Period</button>
  </p>
</form>
```

我们鼓励你[学习更多关于制作无障碍 web 表单的知识](/zh-CN/docs/Learn_web_development/Extensions/Forms)。

### 临时硬编码结果文本

然后，我们包含一个空的 {{HTMLElement("section")}}。这个容器将使用 JavaScript 填充。

```html
<section id="past-periods"></section>
```

当用户提交表单时，我们将使用 JavaScript 来获取数据，并呈现过去月经周期的列表以及该部分的标题。

就目前而言，我们在这个 `<section>` 中临时硬编码一些内容，包括一个 `<h2>` 标题和几个过去的月经周期，以便在编写页面 CSS 时有一些内容进行样式设置。

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

除了容器 `<section id="past-periods"></section>` 之外，这里的内容都是临时的。一旦我们[完成 CSS](#css_内容) 并对应用程序的外观感到满意后，我们将移除或注释掉这里的临时数据。

### JavaScript 链接

在关闭 `</body>` 之前，我们包含一个指向将要编写的 `app.js` JavaScript 文件的链接。我们包含 [`defer`](/zh-CN/docs/Web/HTML/Element/script#defer) 属性来延迟加载这个脚本，并确保在文档的 HTML 被解析后执行 JavaScript。

```html
<script src="app.js" defer></script>
```

`app.js` 文件将包含我们应用程序的所有工作内容，包括 `<button>` 的事件处理程序、将提交的数据保存到 local storage 以及在页面内容中显示周期。

[这个步骤的 HTML 文件](https://github.com/mdn/pwa-examples/tree/master/cycletracker/html_and_css/index.html)现在完成了！你现在可以在浏览器中打开该文件，但是你会注意到它非常简单。我们将在下一节中解决这个问题。

## CSS 内容

我们现在可以使用 CSS 来设计静态的 HTML 的样式。我们的最终 CSS 是：

```css
body {
  margin: 1vh 1vw;
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: #fff;
}
ul {
  padding: 0;
  font-family: monospace;
}
li,
legend {
  list-style-type: none;
  padding: 0.2em 0.5em;
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

如果每一行你都很熟悉，你可以复制上面的 CSS，或者编写你自己的 CSS，并将文件保存为 [`style.css`](https://github.com/mdn/pwa-examples/tree/master/cycletracker/html_and_css/style.css)，然后[完成静态 HTML 和 CSS](#完成我们_pwa_的静态_html_和_css)。如果上面的 CSS 中有任何你不了解的内容，请继续阅读以获得解释。

![浅绿色的网页，有一个大标题、一个带有说明（legend）的表单、两个日期选择器和一个按钮。底部显示了两个月经周期的假数据和一个标题。](html.jpg)

### CSS 解释

我们使用 {{CSSXref("background-color")}} 属性在 `body` 上设置了浅绿色（`#efe`）的背景颜色。然后在无序列表、fieldset 和 legend 上，我们使用白色（`#fff`）作为背景颜色，并使用 {{CSSXref("border")}} 属性添加细实线边框。我们覆盖 legend 的 `background-color`，使 legend 和列表项变成深绿色（`#cfc`）。

我们使用 [`:nth-of-type(even)`](/zh-CN/docs/Web/CSS/:nth-of-type) 伪类[选择器](/zh-CN/docs/Web/CSS/CSS_selectors)将每个偶数列表项设置为 {{CSSXref("inherit")}} 其父元素的背景颜色；在这种情况下，继承来自无序列表的 `#fff` 背景颜色。

```css
body {
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: #fff;
}
li,
legend {
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

为了使无序列表和列表项看起来不像一个列表，我们通过在 `ul` 上设置 {{CSSXref("padding", "padding: 0")}} 来删除内边距，并通过在列表项本身上设置 {{CSSXref("list-style-type", "list-style-type: none")}} 来删除列表标记。

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

我们通过使用 `vw` 和 `vh` [视口单位](/zh-CN/docs/Web/CSS/length#视口比例的长度)来设置 `body` 的 {{CSSXref("margin")}}，使我们应用程序外部的空白与视口大小成比例。我们还在 `li` 和 `legend` 添加了一点内边距。最后，为了改善（但不是修复）过去周期数据的对齐情况，我们将结果部分的 `ul` 的 {{CSSXref("font-family")}} 设置为 `monospace`，使每个字形具有相同的固定宽度。

```css
body {
  margin: 1vh 1vw;
}
ul {
  font-family: monospace;
}
li,
legend {
  padding: 0.2em 0.5em;
}
```

我们可以把上面的内容组合在一起，在每个选择器声明块中放置多个属性。我们甚至可以把 `li` 和 `legend` 的样式放在一起；不相关的样式，比如在 `legend` 上的 `list-style-type` 声明，则会被忽略。

```css
body {
  margin: 1vh 1vw;
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: #fff;
}
ul {
  padding: 0;
  font-family: monospace;
}
li,
legend {
  list-style-type: none;
  padding: 0.2em 0.5em;
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

如果你仍然不太熟悉上面的 CSS，你可以查看 [CSS 属性](/zh-CN/docs/Glossary/Property/CSS)和[选择器](/zh-CN/docs/Web/CSS/CSS_selectors)，或者学习 [CSS 入门](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Getting_started)教程。

无论你是逐字使用上面的 CSS，根据自己的偏好编辑上述样式，还是从头开始编写自己的 CSS，请将所有 CSS 放在一个新文件中，并将其保存为与 `index.html` 文件位于同一目录下的 [`style.css`](https://github.com/mdn/pwa-examples/tree/master/cycletracker/html_and_css/style.css)。

### 完成我们 PWA 的静态 HTML 和 CSS

在继续之前，[注释](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_注释)或者删除假的过去月经周期数据和标题：

```html
<section id="past-periods">
  <!--
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
  -->
</section>
```

## 接下来

在添加 [JavaScript 功能](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)将这个静态内容转换成网页应用程序，然后通过 [manifest 文件](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)和 [service worker](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) 增强成为渐进式网页应用之前，我们将[创建本地开发环境](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)来查看我们的进度。

在那之前，你可以查看[静态 CycleTracker 外壳](https://mdn.github.io/pwa-examples/cycletracker/html_and_css)，并从 GitHub 下载 [CycleTracker HTML 和 CSS 源代码](https://github.com/mdn/pwa-examples/tree/master/cycletracker/html_and_css)。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/","Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection","Web/Progressive_web_apps/Tutorials/CycleTracker")}}
