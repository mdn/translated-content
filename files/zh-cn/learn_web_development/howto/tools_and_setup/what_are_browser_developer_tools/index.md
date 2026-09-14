---
title: 什么是浏览器开发者工具？
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 1af3d045bad1d27c20b1236966301839971f9c09
---

每一个现代网络浏览器都包含一套强大的开发工具套件。这些工具可以检查当前加载的 HTML、CSS 和 JavaScript，显示每个资源页面的请求以及载入所花费的时间。本文阐述了如何利用浏览器的开发工具的基本功能。

> [!NOTE]
> 在你运行下面的例子之前，打开我们在 [Web 开发入门](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website)系列文章中建立的[初学者示例网站](https://mdn.github.io/beginner-html-site-scripted/)。你应该按照下面的步骤打开。

## 如何在浏览器中打开开发者工具

开发者工具内置在浏览器的子窗口之中，大概像这样，具体取决于所使用的浏览器：

![浏览器打开了开发者工具的截图。网页显示在浏览器的上半部分，开发者工具占据了下半部分。在开发者工具中有三个面板打开：HTML 面板，选择了 body 元素；CSS 面板，显示了针对高亮的 body 元素的样式块；以及计算样式面板，显示了所有作者样式，浏览器样式复选框未选中。](devtools_63_inspector.png)

如何打开它？有三种方式：

- **_键盘快捷键_**：
  - **Windows**：<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> 或 <kbd>F12</kbd>
  - **macOS**：<kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_菜单栏_**：
  - **Firefox**：_菜单（☰）➤ 更多工具 ➤ Web 开发者工具_
  - **Chrome**：_➤ 更多工具 ➤ 开发者工具_
  - **Opera**：_开发者 ➤ 开发者工具_
  - **Safari**：_开发 ➤ 显示 Web 检查器_。
    > [!NOTE]
    > Safari 开发者工具默认没有启用。要启用它们，前往 _Safari ➤ 偏好设置 ➤ 高级_，然后勾选*在菜单栏中显示“开发”菜单*或*启用 Web 开发者功能*复选框。

- **_右键菜单_**：在网页上长按/右键单击某项（在 Mac 上按 Ctrl 同时点击），并从弹出的菜单中选择*检查元素*。（_这种方法的好处_：此方法会立即高亮显示右键单击的元素的代码）。

![在一个示例网站中，将 Firefox 标志作为 DOM 元素显示出来，并显示上下文菜单。当右键单击网页上的任何项目时，会出现上下文菜单。菜单的最后一个项目是“Inspect element”。](inspector_context.png)

## 检查器：DOM 浏览器和 CSS 编辑器

开发者工具在打开时默认为检查器（inspector）页面，如下图所示。这个工具可以让你看到你的网页的 HTML 运行时的样子，以及哪些 CSS 规则被应用到了页面上元素。它还允许你立即修改 HTML 和 CSS 并在浏览器中实时观察修改的结果。

![浏览器中打开了一个测试网站的标签页。开发者工具子窗口已经打开。开发者工具有多个选项卡。其中一个选项卡是“检查器”。检查器选项卡显示网站的 HTML 代码。从 HTML 代码中选择了一个图像标签。这导致网站中与所选标签对应的图像被突出显示。](inspector_highlighted.png)

如果你*看不到*调试器，

- **Firefox**：选择**查看器**标签页。
- **其他浏览器**：选择**元素**标签页。

### 探索 DOM 检查器

首先在 DOM 检查器中右键单击（或按 Ctrl 同时单击）一个 HTML 元素，查看上下文菜单。菜单选项各不相同，但主要功能是相同的：

![浏览器开发者工具子窗口已打开。选择了检查器选项卡。从检查器选项卡中的 HTML 代码中右键单击了一个链接元素。出现了上下文菜单。不同浏览器的可用菜单选项有所不同，但重要的大多数是相同的。](dom_inspector.png)

- **删除节点**（或*删除元素*）：删除当前元素。
- **编辑 HTML**（或*添加属性*/_编辑文本_）：让你更改 HTML 并即时查看结果。对于调试和测试非常有用。
- **:hover/:active/:focus**（悬停/激活/聚焦）：强制切换元素状态以查看显示外观。
- **复制/复制为 HTML**：复制当前选定的 HTML。
- 一些浏览器也有*复制 CSS 路径*和*复制 XPath*，允许你选择复制当前的 HTML 元素 CSS 选择器或 XPath 表达式。

现在试着编辑一些你的 DOM。双击元素，或在页面内容里右键单击它并选择*编辑 HTML*。你可以做出任何你想要的改变，但你不能保存。

### 探索 CSS 编辑器

默认情况下，CSS 编辑器显示当前所选元素应用的 CSS 规则：

![在浏览器开发者工具中，可以看到 CSS 面板和布局面板的代码片段，它们与 HTML 编辑器相邻。默认情况下，CSS 编辑器显示应用于 HTML 编辑器中当前选定元素的 CSS 规则。布局面板显示所选元素的盒模型属性。](css_inspector.png)

这些功能特别有用：

- 应用于当前元素的规则以相关度排序。越特定的规则显示的越靠前。
- 点击每个声明旁边的复选框，看看如果删除声明会发生什么。
- 点击每个简写属性旁边的小箭头显示属性的普通等效项。
- 单击属性名称或值以显示一个文本框，你可以在其中键入新值以获取样式更改的实时预览。
- 每个规则旁边是规则定义的文件名和行号。单击该规则将使开发工具跳转到自己的视图中显示，通常可以编辑和保存。
- 你还可以单击任何规则的关闭大括号，以在新行上显示一个文本框，你可以在其中为页面写入一个全新的声明。

你会注意到 CSS 查看器顶部的一些可点击的选项卡：

- _计算值_：显示当前所选元素的计算样式（浏览器应用的最终标准化值）。
- _布局_：如果正在检查的元素使用了 CSS [网格](/zh-CN/docs/Web/CSS/Guides/Grid_layout)或[弹性盒](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)布局模式，此处将显示相关详细信息。
- _字体_：在 Firefox 和 Safari 中，*字体*标签页显示应用于当前元素的字体。

*盒模型*视图直观地展示了当前元素的盒模型，因此可以一目了然地看到该元素应用了哪些内边距、边框和外边距，以及其内容的大小。在 Firefox 中，该视图位于*布局*标签页下；而在其他浏览器中，则位于*计算值*标签页下。

在某些浏览器中，还可以在此面板中查看所选元素的 JavaScript 详细信息。在 Safari 中，这些内容统一在*节点*标签页下，但在 Chrome、Opera 和 Edge 中则分别位于不同的选项卡中。

- _属性_：元素对象的{{Glossary("Property/JavaScript", "属性")}}。
- _事件监听器_：与该元素关联的[事件](/zh-CN/docs/Web/API/Event)。

### 了解更多

了解更多检查器在不同的浏览器中的细节：

- [Firefox 页面检查器](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM 检查器](https://developer.chrome.google.cn/docs/devtools/dom)（Opera 和 Edge 的检查器和它一样）
- [Safari 元素标签](https://webkit.org/web-inspector/elements-tab/)

## JavaScript 调试器

你可在 JavaScript 调试器中查看变量的值，或者设置断点。断点的作用是让程序在你指定的位置暂停，以便你来调试程序并确定问题所在。

![一个在本地端口 8080 上提供的测试网站。开发者工具子窗口已打开。JavaScript 调试器标签页被选中。它允许你观察变量的值并设置断点。从源代码窗格中选择了一个名为“example.js”的文件。在文件的第 18 行设置了一个断点。](firefox_debugger.png)

如何打开调试器：

- **Firefox**：打开开发者工具，然后选择**调试器**标签页。
- **其他浏览器**：打开开发者工具，然后选择**源代码**标签页。

### 探索调试器

每个浏览器的 JavaScript 调试器都分为三个面板。这些面板的布局因所使用的浏览器而略有不同；本指南以 Firefox 为例进行说明。

#### 文件列表

第一个面板位于左边，它包含你正在调试的网页的文件列表。从列表中选中你要操作的文件。单击以选择该文件，并在调试器的中间面板中查看其内容。

![浏览器开发者工具中调试器标签页的源代码窗格片段。与当前正在调试的页面相关的文件可在与当前浏览器标签中打开的网站的 URL 相同的文件夹下可见。](file_list.png)

#### 源码

在你想要停止执行的位置设置断点。在下面图片中，高亮的第 18 行就是被设置的断点。

![开发者工具调试器面板的片段，其中第 18 行处的断点被突出显示。](source_code.png)

#### 监视表达式和断点

右边的面板会显示你添加的监视表达式与断点。

在下图中，第一个区域，**监视表达式**，显示了变量 listItem 已经被添加，你可以展开列表查看里面的值。

接下来的部分，**断点**，列出了页面上设置的断点。在 example.js 中，一个断点被设置在语句 `listItems.push(inputNewItem.value);` 上。

最后两个部分，只在代码运行时才出现。

**调用堆栈**区向你显示哪个代码执行后会达到当前行。你能看到代码处理了一次鼠标点击后，停在了断点处。

最后一部分，**作用域**，显示了在代码执行过程中，可见变量值的变化。例如，在下面图片中，你可以看到对象在 addItemClick 函数中是如何变化的。

![调试器标签页的源代码窗格片段。在调用堆栈中，显示了在第 18 行调用的函数，并突出显示在该行设置了断点，并显示了作用域。](watch_items.png)

### 了解更多

了解不同浏览器中的 JavaScript 调试器：

- [Firefox JavaScript 调试器](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- [Chrome 调试器](https://developer.chrome.google.cn/docs/devtools/javascript/)
- [Safari 调试器](https://developer.apple.com/safari/tools/)

## JavaScript 控制台

JavaScript 控制台是一个非常有用的工具，用于调试没有按预期运行的 JavaScript。它允许你针对浏览器当前加载的页面运行 JavaScript 行，并报告浏览器尝试执行代码时遇到的错误。要在任何浏览器中访问控制台：

要在任何浏览器中访问控制台，请打开开发者工具并选择**控制台**标签页。此时将显示如下窗口：

![浏览器开发者工具的控制台选项卡。已在控制台中执行了两个 JavaScript 函数。用户输入了这些函数，并且控制台显示了它们的返回值。](console_only.png)

要查看会发生什么，请尝试逐个输入以下代码片段（然后按 Enter 键）:

```js
alert("hello!");
```

```js
document.querySelector("html").style.backgroundColor = "purple";
```

```js
const loginImage = document.createElement("img");
loginImage.setAttribute(
  "src",
  "https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png",
);
document.querySelector("h1").appendChild(loginImage);
```

现在尝试输入以下错误的代码版本，看看你得到什么。

```js-nolint example-bad
alert('hello!);
```

```js example-bad
document.cheeseSelector("html").style.backgroundColor = "purple";
```

```js example-bad
const loginImage = document.createElement("img");
banana.setAttribute(
  "src",
  "https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png",
);
document.querySelector("h1").appendChild(loginImage);
```

你将开始看到浏览器返回的错误类型。通常这些错误是相当神秘的，但是应该很简单的把这些问题解决出来！

### 了解更多

了解更多 JavaScript 控制台在不同浏览器中的细节：

- [Firefox Web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript 控制台](https://developer.chrome.google.cn/docs/devtools/console)（Opera 和 Edge 的控制台与它相同）
- [Safari 控制对象 API](https://webkit.org/web-inspector/console-object-api/) 和[控制台命令行 API](https://webkit.org/web-inspector/console-command-line-api/)

## 参见

- [HTML 调试](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [CSS 调试](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
