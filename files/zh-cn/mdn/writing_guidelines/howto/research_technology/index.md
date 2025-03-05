---
title: 如何研究一项技术
slug: MDN/Writing_guidelines/Howto/Research_technology
---

本文提供有关如何记录各种技术的实用信息。

## 进行准备工作

在 MDN Web 文档上开始记录或更新前，应当首先准备和规划某些事项再开始正式书写。

假定你在阅读本指南前已对下列各项有合理程度的了解：

- web 技术，如 HTML、CSS 和 JavaScript。
- 如何阅读 web 技术规范。在记录 API 时将反复查看规范。

其余事项可边做边学。

### 查阅资源

在书写任何文档时的实用资源包含：

1. MDN Web 文档[写作指南](/zh-CN/docs/MDN/Writing_guidelines/Howto)——虽然你已准备开始写作，但是仍然推荐浏览所有文章并熟悉我们的写作规范、不同的页面类型及所含章节和引入页面的不同部分（如规范和浏览器兼容性）的不同方式。
2. 最新规范——MDN Web 文档上所记录的技术由不同的标准团体创建规范。例如 [TC39](https://tc39.es/zh-Hans/) 对应 JavaScript，[WHATWG](https://whatwg.org/) 对应 HTML，以及 [W3C](https://www.w3.org/zh-hans/) 对应 CSS、XML 和某些 web API。MDN Web 文档中的参考页有指向规范的链接（见“规范”一节），而通常也可进行 web 搜索。请总是着眼于最新的、最接近当下的规范。
3. 最新的现代 web 浏览器——应为如 [Firefox Nightly](https://www.mozilla.org/zh-CN/firefox/channel/desktop/#nightly)、[Chrome 每日构建版](https://www.google.cn/chrome/canary/)或 [Safari 技术预览版](https://webkit.org/downloads/)的实验性或内测构建版，这些版本更有可能支持要记录的特性。若要记录“即将到来”的特性，则这一点尤其要紧。
4. 演示、博客文章或其他信息——请找到尽可能多的信息。若因为一项技术发生了变化而要将其更新，则请确保用于学习此技术的资源没有过时。此即上述前两点为何重要的原因。

尝试找人帮助解答问题也属明智之举，询问对象可为规范作者或实现浏览器特性的工程师。

### 阅读规范

开始阅读规范时可能会有些不适应，但是读得越多就会越习惯。此处有一些有助于上手的不错的链接：

- [如何阅读 W3C 规范](https://alistapart.com/article/readspec/)（作者：J. David Eisenberg，载于 A List Apart）
- [理解 CSS 规范](https://www.w3.org/Style/CSS/read)（来自 W3C）
- [如何阅读 web 规范（第 1 部分）——又名：WebVR，你的原理是什么？](https://surma.dev/things/reading-specs/)虽然仅阐述了阅读 WebVR 规范的步骤，却属如何阅读 web API 规范的不错的介绍。
- [如何阅读 web 规范（第 2a 部分）——又名：ECAMScript Symbol](https://surma.dev/things/reading-specs-2/) 为上一链接的第二部分，包含如何理解 ECMAScript 规范的信息，此规范描绘了 JavaScript 语言的大纲。

此外，我们有关于 [WebIDL 文件所含信息](/zh-CN/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file)的指南，在阅读 web API 规范时大有裨益。

## 探索特性

在记录一项技术的过程中，你将反反复复书写代码示例或构建演示，而先花时间熟悉这项技术的原理将非常有用。这是十分有价值的实践，可以让你很好地理解用例（*为何*开发者要使用这项技术），且同时有助于创造一些代码示例。

> [!NOTE]
> 若因规范近期的更新导致某个方法现在有不同的定义，但是旧的方法在浏览器中仍然有效，则为了同时涵盖旧方法和新方法，常常需要在同一处同时记录两者。如需帮助，请参考你所找到的演示或询问工程师。

## 创建待写或待更新页面列表

你需要从头书写或进行更新的页面会因为所对应的技术而有所区别。请查阅[页面类型](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types)和与要记录的技术相关的章节。由于极有可能还需更新现有文档，故请在 MDN Web 文档中搜索与要书写的内容相关的页面。

### 侧边栏

所写页面的侧边栏可能也需要进行定义或更新。为获知是否有必要操作及如何操作，请查阅[侧边栏指南](/zh-CN/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)。

### 代码示例

MDN Web 文档的某些代码示例位于另外的仓库中，其中最为显著的为参考页中“尝试一下”一节中出现的交互式示例和指南所需的大型演示代码。若确需在这些仓库中进行添加或修正，不妨在列表中进行对此标注。

[代码示例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Code_examples)一文描述了在 MDN Web 文档上所使用的不同类型的代码示例。

### 示例

假设你要记录新的 web API，待记录章节的初始列表将类似下列所示：

1. 概览页
2. 接口页
3. 构造函数页
4. 方法页
5. 属性页
6. 事件页
7. 概念或指南页
8. 代码示例
9. 侧边栏

然后可用更多的细节扩充列表，再加上每个接口及其构成。例如若要记录 Web Audio API，则列表很可能如下所示：

- Web_Audio_API
- AudioContext

  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ……
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ……

- AudioNode

  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ……
  - AudioNode.connect(参数)
  - ……

- AudioParam
- 事件（更新列表）

  - start
  - end
  - ……

## 创建议题

此时不妨在 `mdn/content` 仓库中创建追踪性[议题](https://github.com/mdn/content/issues)，将上述页面列为待办（复选框）列表。由此可同时使你与其他着手于文档的人公开追踪状态。还可将你的合并请求链接至此议题，为所有人提供更多的背景信息。

## 创建页面

现在可以创建所需页面了。创建新的页面请阅读[如何创建、移动、删除和编辑页面](/zh-CN/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)指南中的指示。可能有用的页面模板请查阅[页面类型](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types)指南。
