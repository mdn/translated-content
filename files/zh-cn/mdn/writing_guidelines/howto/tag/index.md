---
title: 如何标记页面
slug: MDN/Writing_guidelines/Howto/Tag
---

{{MDNSidebar}}

**文章标签**是一个让读者接触到有用内容的重要方式。每一个页面通常都应该有几个标签来保持其内容的组织性。本文解释了标签页面的最佳方法，以使我们的读者可以找到信息和让我们的页面保持组织有序。

请根据下面所解释的来合理地使用标签。如果你没有这么做，我们的自动化工具将不能正确的生成内容列表、着陆页面和文章的交叉链接。

> **警告：** 对于本地化的文档，不需要在其元数据中列出标签，也不应对标签进行翻译。

MDN Web 文档中使用的标签，可以根据标签的用途和它们传达的信息分为以下几类：

- [文档类别](#文档类别)：这个文档是什么类型的？是一篇参考？一篇教程？还是一篇着陆页？我们的读者可以使用这些标签来过滤搜索，所以它们真的很重要！
- [主题标识](#主题标识)：这篇文章是关于什么的？关于 API？DOM？图形？重申一遍，这些标签很重要，因为它们可以用来过滤搜索。
- [API 标识](#api_标识)：关于一个 API 的参考页面需要标识 API 的特定组件：属于哪个接口？包含的属性和方法？
- [技术现状](#技术状态)：这门技术的现状是什么？它是非标准的？已经被弃用了的？还是处于实验性的？
- [技术水平](#技术水平)：教程和指南，这篇文章中涵盖的内容有多先进？
- [文档元数据](#文档元数据)：写作社区使用标签来跟踪哪些页面需要什么样的工作。

以下部分更详细地解释了这些分类以及属于每个类别的标签。

## 文档类别

当你使用这些类别中的一个标签来标记文章的时候，你帮助了自动化工具更准确的生成着陆页面、内容表，以及其它内容。我们新的搜索系统也可以使用这些来让我们的游客更好的根据他们的意愿来定位参考和指南。

我们使用以下标签来标识文档的类型：

- `Intro`
  - : 这篇文章提供了一个有关主题的介绍材料。最理想的是每一个技术领域应该只能有一个“Intro”标签。
- `Reference`
  - : 这篇文章包含 API、元素、属性等参考资料。
- `Landing`
  - : 这是一个着陆页面。
- `Guide`
  - : 这篇文章是一个说明怎么做或者指南的页面。
- `Example`
  - : 这是代码示例页面，或者有代码示例（那是有用的代码片段，而不是一行“语法示例”）。

## 主题标识

通过确定文章的主题区域，您可以帮助产生更好的搜索结果（以及着陆页和导航）。

虽然在这里有一些灵活的空间可以识别新的主题领域，但我们试着将自己限制在 API 和技术的名字上，一些有用的示例：

- `HTML`
- `CSS`
- `JavaScript`（注意大写字母“S”！）
- `Document`
- `DOM`
- `API` 用于每一个接口、方法和属性
- `Method` 用于 API 的每一个方法
- `Property` 用于 API 的每一个属性
- `Graphics`
- `SVG`
- `WebGL`
- `Tools`
- `Web`
- `Element`
- `Extensions` 和 `WebExtensions` 用于 Web 扩展

一般而言，主题标识标签应该是一个接口的名称（如 [Node](/zh-CN/docs/Web/API/Node)，它的各种属性和方法有很多页），或一个整体的技术类型的名称。你可以对 WebGL 页面设置 `Graphics` 和 `WebGL` 标签，而关于 {{HTMLElement("canvas")}} 的页面，则使用 `HTML`、`Element`、`Canvas` 和 `Graphics`。

### Mozilla 特定内容

这些标签只用于 Mozilla 特定内容：

- `Mozilla`
- `Firefox`
- `Gecko`
- `XUL`
- `XPCOM`

## API 标识

在 API 参考页面中，每篇文章都应该标明它覆盖了哪部分 API：

- `Interface`
  - : 一个接口的主要文章应该有这样的标签。例如，{{DOMxRef("RTCPeerConnection")}}
- `Constructor`
  - : 每个接口最多可以有一个页面标签为“Constructor”（接口的构造函数）。页面应该有和接口一样的名字，例如，{{DOMxRef("RTCPeerConnection.RTCPeerConnection()","RTCPeerConnection()")}}。
- `Property`
  - : 每一篇描述接口内特定属性的文章都需要这样的标签。例如，{{DOMxRef("RTCPeerConnection.connectionState")}}。
- `Method`
  - : 每一篇记录接口方法的文章都需要这样的标签。例如，{{DOMxRef("RTCPeerConnection.createOffer()")}}。

此外，参考页面需要在其标签中包含接口、属性和方法名称。一些示例如下：

- 接口 {{DOMxRef("RTCPeerConnection")}}：包含标签 `RTCPeerConnection` 以及其它相关标签，包括 `Interface`、`WebRTC`、`WebRTC API`、`API` 和 `Reference`。
- 方法 {{DOMxRef("RTCPeerConnection.createOffer()")}}：包括标签 `RTCPeerConnection` 和 `createOffer`（注意标签名中没有括号！）以及其它相关标签，包括 `WebRTC`、`WebRTC API`、`API`、`Reference`。考虑包含 `Offer` 和 `SDP` 标签，它们在这里也是相关的。
- 属性 {{DOMxRef("RTCPeerConnection.iceConnectionState")}}：包括标签 `RTCPeerConnection` 和 `iceConnectionState` 以及其它相关标签，包括 `Property`、`WebRTC`、`WebRTC API`、`API` 和 `Reference`。也需要考虑包括 `ICE`。

## 技术状态

为了帮助读者了解可行的技术是怎样的，我们使用标签来标记页面的技术规范的状态。这并不像实际解释规格是什么，以及技术在规范过程中出现了多少（这正是规格表的用途），但它有助于读者判断，乍一看之下，使用在文章中描述的技术是否是一个好主意。

此类别的标签包括：

- `Read-only`
  - : 这个属性或特性是只读的。
- `Non-standard`
  - : 表示页面中描述的技术或应用接口不是标准的一部分，但是在任何实现的浏览器中都是稳定的。如果你不使用这个标签，你的读者会认为这是标准的技术。页面上的兼容性表应该说明该技术或 API 的支持状态。
- `Deprecated`
  - : 网页上的技术或 API 被标记为弃用的规范，并有可能最终被删除，但一般仍可用在当前版本的浏览器中。
- `Experimental`
  - : 技术不属于规范，而是一个实验性的技术或 API，可能会或可能不会成为标准的一部分。它可能在浏览器的实现上被改变。如果该技术不属于任何规范（即使是草案），它也该使用该标签。
- `Needs Privileges`
  - : 该接口需要访问设备的权限。
- `Certified Only`
  - : 该 API 仅适用于认证码。

这些标签不是省略[浏览器兼容性表](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)的理由！该表格应始终存在。

## 技术水平

指南或教程的技术水平标签类型（标记为 `Guide` 的页面）帮助用户来基于他们的熟悉程度来选择教程，这里有三个值：

- `Beginner`
  - : 介绍读者到一个从未使用过的技术或仅仅是一种熟悉的技术。
- `Intermediate`
  - : 已经开始使用该技术的用户的文章，但不是专家。
- `Advanced`
  - : 关于拓展技术和读者能力的文章。

## 文档元数据

写作社区要求根据特定类型的工作来使用标签标签文章。以下是我们最常用的一个列表：

- `Draft`
  - : 文章不完整，至少在理论上仍在积极更新（尽管它也有可能被遗忘）。在进行更改之前，请尝试与最新的贡献者进行检查，以避免潜在的内容冲突。
- `NeedsCompatTable`
  - : 文章需要一个表来指定跨浏览器特性的兼容性表格，有关贡献浏览器兼容数据的指南参见[此处](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)。
- `NeedsContent`
  - : 文章是一个存根，或者是缺乏其它信息。这个标签意味着有人应该审查的内容，并添加更多的细节和/或完成写作的文章。
- `NeedsExample`
  - : 文章需要一个或多个示例来帮助说明文章的要点。这些示例应该使用[代码示例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Code_examples)。
- `NeedsLiveSamples`
  - : 本文有一个或多个代码示例需要更新成[运行实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)。
- `NeedsMarkupWork`
  - : 文章需要改进页面标记（通常是因为页面内容主要或完全由文本组成（使用 {{HTMLElement("p")}} 标签））。
- `NeedsSpecTable`
  - : 文章需要一个表格来指明该特性是在哪个规范文档中定义的。
- `NeedsUpdate`
  - : 内容过时，需要更新。
- `l10n:exclude`
  - : 内容是不真正值得本地化的，不会出现在本地化状态页。
- `l10n:priority`
  - : 内容重要，应该被 MDN 贡献者优先翻译。在本地化状态页上显示了一个额外的优先级表。

## 示例

总而言之，为每个页面标记来自上述的不同类别的标签。示例如下所示：

- 面向初学者的 WebGL 教程应具有以下标签：
  - `WebGL`
  - `Graphics`
  - `Guide`
  - `Beginner`
- 用于 {{HTMLElement("canvas")}} 的参考页面应具有以下标签：
  - `Canvas`
  - `HTML`
  - `Element`
  - `Graphics`
  - `Reference`

### 排查与标签相关的问题

你可以帮助我们解决多种与标签相关的问题。

### 没有标签

一般来说文章应该至少有一个“[文档类别](#文档类别)”标签和一个“[主题标识](#主题标识)”标签。虽然有其它标签也好，但是如果你能帮我们提供最基本的标签，你将会是一名（维护）文档的英雄！

### 不符合我们标准的标签

请修正一切含有不合标准标签的文档。请注意由于 [Kuma 的一个 bug](https://bugzilla.mozilla.org/show_bug.cgi?id=776048)，一些本地化的标签（比如 `Référence`）可能会出现在一些英语页面上。这些标签还有可能反复出现，即使你已经把它们删除。这个 bug [已被修复](https://bugzilla.mozilla.org/show_bug.cgi?id=776048#c37)，所以剩余的本地化标签可以被清理干净了。

### 不正确的标签

如果你正在看一篇关于 HTML 的文章并且发现它被标上了 `JavaScript` 的标签，那很有可能这是一个错误标签！同理，如果一篇文章在讨论 Mozilla internals 但是有一个 `Web` 标签，那也有可能是错误的。删除这些错误的标签并且如果还没有合适标签的话，加上正确的标签。同样地，请更正拼写错误的标签（例如：因为标签是大小写不敏感的，所以 `Javascript` 仍然匹配，但是我们还是不要马虎对待！）。

### 缺失标签

如果一篇文章有标签但是不全面，请补全。比如，一个 JavaScript 的参考文档被（正确地）标记为 `JavaScript` 但是除此之外什么也没有了，请你就为它标上 `Reference` 和[其它标签](#文档类别)！

### 垃圾标签

这只潜伏的怪兽是所有标签问题中最让人讨厌的：一些网络害虫会在页面标签中留下垃圾内容（例如：“Free warez!”或“Hey I was browsing your site and wanted to ask you if you could help me solve this problem I'm having with Flash crashing all the time”）。我们必须立即删除这些标签！它们很丑陋，如果允许它们长时间留在文档中，它们将会变得难以管理，而且会对 {{Glossary("SEO")}} 造成负面影响。
