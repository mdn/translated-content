---
title: 浏览器如何加载网站
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

在上一篇文章中，我们介绍了构建网站的[技术概述](/zh-CN/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies)。本文将深入探讨这些技术是如何被渲染的——当浏览器接收到构成网页的代码文件和其他资源后（如[网络工作原理](/zh-CN/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)所述），它们是如何组合在一起，形成用户最终交互的体验的？

<table>
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        基本熟悉您的计算机操作系统、网页浏览器及网络技术。
      </td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>
        <ul>
          <li>HTTP 响应中返回的不同类型的资源。</li>
          <li>浏览器如何组装不同的文件来渲染并显示给用户的网页。</li>
          <li>为什么浏览器有时被视为一个充满敌意的编程环境，同时也是一个极棒的编程环境。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTTP 响应中返回哪些文件？

总结上一篇文章中提到的[网络技术概述](/zh-CN/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies)，HTTP 响应（针对网页请求）通常包含以下部分或全部文件类型：

- HTML 文件，指定网页内容及其结构。
- CSS 文件，指定样式和布局信息。
- JavaScript 文件，指定网页交互部分的行为。
- 媒体资源，如图像、视频、音频文件、[PDF](/zh-CN/docs/Glossary/PDF) 和 [SVG](/zh-CN/docs/Glossary/SVG)，这些资源被嵌入网页中或由浏览器显示。
- 其他类型的文件，浏览器无法原生处理，因此会交由设备上的相关应用程序来渲染，例如 Word 或 Pages 文档、PowerPoint 幻灯片以及 Open Office 文件。

## 网页渲染

当用户导航到一个新网页（通过点击链接或在浏览器地址栏输入网址）时，会发送多个 HTTP 请求，并通过 HTTP 响应返回多个文件。浏览器处理这些响应中收到的文件，并将它们组合成用户可以交互的网页。这种将各个部分组装成网页的过程称为**渲染**。

以下部分从高层次解释了浏览器如何渲染网页。请记住，这是一个简化描述，不同的浏览器会以不同的方式处理这个过程。但这仍然能让您了解其工作原理。

## 处理 HTML

首先，浏览器接收并解析包含网页内容并定义其结构的 HTML 文件。浏览器将其转换为一种树状结构，称为 **DOM 树**（**文档对象模型**）。DOM 在计算机内存中表示 HTML 文档结构。以这个基本的 HTML 代码片段为例：

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

HTML 中的每个元素、属性和文本片段在树结构中成为一个 **DOM 节点**。节点通过它们与其他 DOM 节点的关系来定义。某些元素是子节点的父节点，而子节点有兄弟节点。浏览器将解析此 HTML 并从中创建以下 DOM 树：

```plain
P
├─ "Let's use:"
├─ SPAN
|  └─ "HTML"
├─ SPAN
|  └─ "CSS"
└─ SPAN
    └─ "JavaScript"
```

在此 DOM 树中，对应于 `<p>` 元素的节点是一个父节点。它的子节点包括一个文本节点和对应于三个 `<span>` 元素的节点。`SPAN` 节点也是父节点，其子节点是文本节点。当浏览器渲染此 DOM 树时，它将如下所示：

{{EmbedLiveSample('Handling the HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

某些 HTML 元素在解析时会触发更多的 HTTP 请求：

- 引用外部 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 样式表的 {{htmlelement("link")}} 元素。
- 引用外部 [JavaScript](/zh-CN/docs/Learn_web_development/Core/Scripting) 文件的 {{htmlelement("script")}} 元素。
- 引用您希望在网页中嵌入的媒体文件的元素，如 {{htmlelement("img")}}、{{htmlelement("video")}} 和 {{htmlelement("audio")}}。

## 解析 CSS 并渲染页面

接下来，处理 CSS。

1. 浏览器解析页面上找到的 CSS（包含在 HTML 文件中或从外部样式表获取），并根据它们将应用到哪些 HTML 元素（在 DOM 中表示为称为**节点**的项）将不同的 CSS 样式规则分类到不同的“桶”中。然后浏览器根据需要将样式附加到不同的元素上（这个中间步骤称为渲染树）。
2. 渲染树按照应用规则后应有的结构进行布局。这包括要嵌入页面中的任何图像和其他媒体文件。
3. 页面的视觉显示在屏幕上呈现（此阶段称为绘制）。

下图展示了我们目前讨论过程的示意图：

![渲染过程概览](rendering.svg)

回到我们的示例，假设在 HTML 文件中找到以下 CSS：

```html hidden
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

CSS 中唯一可用的规则有一个 `span` 选择器，因此浏览器能够非常快速地对 CSS 进行分类！它将此规则应用于 DOM 树中的三个 SPAN 节点中的每一个，为它们提供黑色边框和浅绿色背景，然后将最终的视觉表示绘制到屏幕上。

更新后的输出如下：

{{EmbedLiveSample('Parsing the CSS, and rendering the page', '100%', 90)}}

## 处理 JavaScript

CSS 处理完毕后，页面上找到的任何 JavaScript（包含在 HTML 文件中或从外部脚本文件获取）将被解析、解释、编译和执行。这发生在最终页面渲染完成之前的某个时刻——毕竟，某些 JavaScript 可能会影响渲染，例如向 DOM 添加节点或修改现有节点。

回到我们的示例，假设在 HTML 文件中找到以下 JavaScript：

```html hidden
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css hidden
span {
  border: 1px solid black;
  background-color: lime;
}
```

```js
const spans = document.querySelectorAll("span");
spans.forEach((span) => {
  const reversedText = span.textContent.split("").reverse().join("");
  span.textContent = reversedText;
});
```

您无需确切了解此 JavaScript 的工作原理，但从高层次看，它会查找 DOM 中的每个 SPAN 节点，并反转其子文本节点中字符的顺序。

最终输出如下：

{{EmbedLiveSample('Handling the JavaScript', '100%', 90)}}

## 还有哪些其他渲染步骤？

页面渲染期间还会发生其他一些事情，但我们不在此一一讨论。值得注意的一个额外事件是，会基于 DOM 构建一个无障碍树，供辅助技术（例如屏幕阅读器）接入，从而使无法看到渲染内容的人能够与之交互。

您将在我们的[无障碍](/zh-CN/docs/Learn_web_development/Core/Accessibility)模块中了解更多相关信息。

## 浏览器：一个充满敌意*且*极棒的编程环境

前端网页开发有时会令人沮丧，有些人认为浏览器是一个充满敌意的编程环境。这是因为与其他编程环境不同，很难保证您的代码将在何种环境中运行。您无法提前知道用户将拥有的所有不同的操作系统、浏览器、语言、地理位置、网络连接、CPU、GPU、内存、电池寿命等组合，因此您无法为所有用户保证完美的用户体验。

现代浏览器倾向于相当一致地实现网络标准，但仍然存在许多不确定性需要应对。作为网页开发者，您需要接受这种不确定性，进行防御性编程，并保守地使用功能。这依赖于遵循上一篇文章中概述的[最佳实践](/zh-CN/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices)。

从积极的一面来看，网络也是一个极棒的编程环境，原因有很多。

- 首先，它的设计考虑了普遍访问。网络的基本状态是可访问且可链接的。其中一些基础在其他环境中更难实现。
- 通过网络交付应用程序简单而强大。您无需让用户经历复杂的安装过程：只需指向一个网址，他们就可以开始了。
- 应用程序更新通常很简单。在许多情况下，访问者只需重新加载浏览器标签页即可看到应用程序的新版本。您无需担心让访问者定期下载和安装软件更新。
- 网络社区充满活力且乐于助人。正如我们稍后在[研究与学习](/zh-CN/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning)文章中讨论的那样，有很多地方可以寻求帮助，也有很多优秀的资源可供学习。

## 参见

- [何时以及如何向浏览器提交 Bug](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/File_browser_bugs)
  - : 如果某个功能在浏览器中无法按预期工作，可能是浏览器 Bug。本文解释了如何判断是否是 Bug，以及如果是，如何提交 Bug 报告。

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
