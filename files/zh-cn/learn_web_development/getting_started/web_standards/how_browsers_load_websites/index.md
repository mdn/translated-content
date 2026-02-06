---
title: 浏览器如何加载网站
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

在上一篇文章中，我们介绍了构建网站所用的[各类技术](/zh-CN/docs/Learn_web_development/Getting_started/Web_standards/)。本文将深入讲解这些技术是如何被浏览器渲染出来的——当浏览器收到构成网页的代码文件和其他资源后，它们如何被组合成用户最终看到并与之交互的完整页面？

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        对你使用的操作系统、网页浏览器及基本网络技术有初步了解。
      </td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>
        <ul>
          <li>了解 HTTP 响应中可能包含哪些类型的文件。</li>
          <li>理解浏览器如何将这些文件组合并渲染成用户可见的网页。</li>
          <li>认识浏览器作为开发环境的两面性：既充满挑战，又极具魅力。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTTP 响应中通常包含哪些文件？

回顾上一篇介绍的现代网页技术，一个网页请求的 HTTP 响应中通常会包含以下一种或多种文件类型：

- **HTML 文件**：定义网页的内容与结构。
- **CSS 文件**：控制网页的样式与布局。
- **JavaScript 文件**：实现网页的交互行为。
- **媒体资源**：如图片、视频、音频、[PDF](/zh-CN/docs/Glossary/PDF) 或 [SVG](/zh-CN/docs/Glossary/SVG)，可直接嵌入页面或由浏览器展示。
- **其他类型文件**：例如 Word 文档、PowerPoint 幻灯片等，浏览器无法直接处理，通常会调用系统中相应的应用程序打开。

## 网页渲染过程

当用户访问一个新网页（比如点击链接或输入网址）时，浏览器会发出多个 HTTP 请求，并接收对应的响应文件。浏览器会处理这些文件，将它们组合成一个可交互的网页。这个过程称为**渲染**。

下面我们从高层次来理解浏览器渲染网页的基本步骤。注意，不同浏览器的实现细节可能有所不同，但核心流程大致相似。

## 解析 HTML

浏览器首先收到 HTML 文件，并将其解析成一棵**DOM 树**（文档对象模型）。DOM 以树状结构在内存中表示整个 HTML 文档的层次关系。例如下面这段简单的 HTML：

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

每个标签、属性和文本都会成为 DOM 树中的一个**节点**。节点之间通过父子、兄弟关系相互关联。以上面的 HTML 为例，浏览器解析后会生成如下结构的 DOM 树：

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

此时如果直接渲染，效果如下：

{{EmbedLiveSample('解析 HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

在解析 HTML 过程中，如果遇到以下元素，浏览器通常会发起额外的 HTTP 请求来获取外部资源：

- {{htmlelement("link")}} 引用的外部 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 样式表。
- {{htmlelement("script")}} 引用的外部 [JavaScript](/zh-CN/docs/Learn_web_development/Core/Scripting) 文件。
- {{htmlelement("img")}}、{{htmlelement("video")}}、{{htmlelement("audio")}} 等引用的媒体文件。

## 解析 CSS 并绘制页面

获取 CSS 后，浏览器会按以下步骤处理：

1. **解析与关联**：分析所有 CSS 规则，并根据选择器将它们映射到 DOM 树中对应的节点上，这一步形成**渲染树**。
2. **布局**：根据 CSS 规则计算每个节点在屏幕上的位置与尺寸，也称为“重排”。
3. **绘制**：将布局后的节点实际绘制到屏幕上，包括颜色、边框、背景等视觉细节。

整个过程可参考以下示意图：

![渲染过程概览](rendering.svg)

回到之前的例子，

```html hidden
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

如果加入这样一条 CSS 规则：

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

浏览器会将这个样式应用到每一个 `<span>` 节点，绘制出带边框和绿色背景的效果：

{{EmbedLiveSample('解析 CSS 并绘制页面', '100%', 90)}}

## 执行 JavaScript

CSS 处理完成后，浏览器开始执行 JavaScript。JavaScript 可能在 HTML 中内联，也可能来自外部文件。它能够动态修改 DOM 或样式，因此执行时机往往会影响最终渲染结果。

继续之前的例子，假设我们加入以下脚本：

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

这段代码会将每个 `<span>` 内的文字倒序显示。执行后效果如下：

{{EmbedLiveSample('执行 JavaScript', '100%', 90)}}

## 其他渲染相关步骤

除了上述核心流程，渲染过程中还会发生一些其他重要步骤，例如：

- **构建无障碍树**：浏览器会基于 DOM 生成一份辅助技术（如屏幕阅读器）专用的树状结构，帮助视障用户理解页面内容。我们将在后续的[无障碍](/zh-CN/docs/Learn_web_development/Core/Accessibility)模块中详细介绍这一点。

## 浏览器作为开发环境：挑战与魅力并存

前端开发有时会让人感到棘手，因为浏览器环境具有很大的不确定性。你无法完全控制用户使用的设备、浏览器版本、网络状况、屏幕尺寸等因素，因此很难保证所有用户都能获得完全一致的体验。

这也使得浏览器被称为一个“充满挑战”的编程环境。应对这种挑战的最佳方式，是遵循上一篇文章中提到的[网页最佳实践](/zh-CN/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices)，并采用渐进增强、优雅降级等开发策略。

与此同时，浏览器也是一个“极具魅力”的环境，原因包括：

- **开放与可访问**：Web 天生就是开放、可链接的，易于分享和传播。
- **无需安装**：用户只需一个链接即可访问应用，无需下载安装包。
- **即时更新**：开发者更新代码后，用户刷新页面即可获得最新版本。
- **活跃的社区**：Web 技术生态丰富，学习资源众多，社区氛围友好，容易获得帮助。

## 延伸阅读

- [何时以及如何向浏览器报告 Bug](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/File_browser_bugs)
  - 如果你在浏览器中遇到了疑似 Bug 的行为，这篇文章会教你如何确认并提交有效的 Bug 报告。

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
