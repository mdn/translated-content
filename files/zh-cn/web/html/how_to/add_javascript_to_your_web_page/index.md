---
title: 向网页添加 JavaScript
short-title: 添加 JavaScript
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

利用 JavaScript，让你的网页更上一层楼。在这篇文章中将了解如何在 HTML 文档中直接调用 JavaScript。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        你需要熟悉如何<a href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >创建基本 HTML 文档</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解如何在 HTML 文件中调用 JavaScript，并学习保持 JavaScript 无障碍的最重要的最佳实践。
      </td>
    </tr>
  </tbody>
</table>

## 关于 JavaScript

{{Glossary("JavaScript")}} 是一种编程语言，主要用于客户端，使网页具有交互性。不使用 JavaScript 也能制作出令人惊叹的网页，但 JavaScript 带来了全新的可能性。

> [!NOTE]
> 本文将介绍使 JavaScript 生效所需的 HTML 代码。如果你想学习 JavaScript 本身，可以从我们的 [JavaScript 基础知识](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)一文开始。如果已经对 JavaScript 有所了解，或者有其他编程语言的背景，我们建议你直接跳转到我们的 [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)。

## 如何从 HTML 调用 JavaScript

在浏览器中，JavaScript 本身不做任何事情。需要在 HTML 网页中运行 JavaScript。要在 HTML 中调用 JavaScript 代码，需要使用 {{htmlelement("script")}} 元素。使用 `script` 有两种方法，取决于是链接到外部脚本还是在网页中直接嵌入脚本。

### 链接到外部脚本

通常，你会在自己的 .js 文件中编写脚本。如果要在网页上执行 .js 脚本，只需使用 {{HTMLElement("script")}} 并在其中添加指向脚本文件的 `src` 属性，使用其 [URL](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)：

```html
<script src="path/to/my/script.js"></script>
```

### 在 HTML 中撰写 JavaScript

你也可以在 `<script>` 标签之间添加 JavaScript 代码，而不必提供 `src` 属性。

```html
<script>
  window.addEventListener("load", () => {
    console.log("一旦页面完全加载完毕，此函数就会执行一次。");
  });
</script>
```

但如果将 JavaScript 保存在单独的文件中，你会发现更容易：

- 专注于工作
- 编写自给自足的 HTML
- 编写结构化的 JavaScript 应用程序

## 无障碍地使用脚本

在任何软件开发中，无障碍都是一个重要问题。如果使用得当，JavaScript 可以提高网站的无障碍性；如果不加注意地使用脚本，JavaScript 也可能成为一场灾难。为了让 JavaScript 发挥更大的作用，值得了解添加 JavaScript 的某些最佳实践：

- **尽可能使所有内容为（结构化）文本**。尽可能使用 HTML 作为内容。例如，如果已经实现了一个漂亮的 JavaScript 进度条，请确保在 HTML 中使用匹配的文本百分比作为补充。同样，下拉菜单也应采用[无序列表](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Lists#无序列表)[链接](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Creating_links)结构。
- **让键盘可以访问所有功能**。
  - 让用户按逻辑顺序点选所有控件（如链接和表单输入）。
  - 如果使用指针事件（如鼠标事件或触摸事件），请使用键盘事件复制这些功能。
  - 仅使用键盘测试网站。
- **不要设置甚至猜测时间限制**。使用键盘导航或听到内容朗读需要额外的时间。很难预测用户或浏览器需要多长时间才能完成一个过程（尤其是异步操作，如加载资源）。
- **动画要精巧简短，不要闪烁**。闪烁令人讨厌，还可能[导致癫痫发作](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)。此外，如果动画持续时间超过几秒钟，应为用户提供取消动画的方法。
- **让用户发起互动**。这意味着，不要自动更新内容、重定向或刷新。不要没有警告的情况下展示图片切换动画或显示弹出窗口。
- **为没有 JavaScript 的用户制定备选方案**。为了提高速度和安全性，人们可能会关闭 JavaScript，而用户经常会遇到网络问题，导致无法加载脚本。此外，第三方脚本（广告、跟踪脚本、浏览器扩展）可能会破坏你的脚本。
  - 请至少留下类似 {{HTMLElement("noscript")}} 的简短信息：`<noscript>要使用本网站，请启用 JavaScript。</noscript>`
  - 理想情况下，尽可能使用 HTML 和服务器端脚本复制 JavaScript 功能。
  - 如果只需要简单的视觉效果，CSS 往往能更直观地完成工作。
  - _由于几乎每个人都启用了 JavaScript，`<noscript>` 不应成为编写没有无障碍性的脚本的借口。_

## 了解更多

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- Manuel Matuzovic 的[编写 JavaScript 时考虑无障碍问题](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/)（2017）
- [来自 W3C 的无障碍指南](https://w3c.github.io/wcag/guidelines/22/)
