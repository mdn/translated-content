---
title: 如何合理的标记页面
slug: MDN/Writing_guidelines/Howto/Tag
tags:
  - MDN 元
  - 初学者
  - 如何
  - 指南
  - 教程
translation_of: MDN/Contribute/Howto/Tag
original_slug: MDN/Contribute/Howto/Tag
---
{{MDNSidebar}}

**文章标签**是一个让游客接触到有用内容的重要方式。每一个页面通常都应该有几个标签来保持其内容的组织性。 这一页解释了标记页面的最好方法，以使我们的读者可以找到信息和让我们的页面保持组织有序。

对于编辑标签的用户界面的帮助，请看我们的编辑者指南里的[标记部分](/en-US/docs/MDN/Contribute/Editor/Basics#The_tags_box)。

请根据下面所解释的来合理的使用标签。如果你没有这么做，我们的自动化工具将不能正确的生成内容列表，着陆页面和文章的交叉链接。

## MDN 如何使用标签

MDN 有这么几种方法来使用标签：

- 文档分类：
  - : 这个文档是什么类型的？是一篇参考？一篇教程？还是一篇着陆页？我们的游客可以使用这些标签来过滤搜索，所以它们真的很重要！
- 主题识别
  - : 这篇文章是关于什么的？关于 API？DOM？图形？重申一遍，这些标签很重要，因为它们可以用来过滤搜索。
- 技术现状
  - : 这门技术的现状是什么？它是非标准的？过时的还是已经被弃用了的？还是处于实验性的？
- 技术水平
  - : 教程和指南，这篇文章中涵盖的内容有多先进？
- 文档元数据
  - : 写作社区使用标签来跟踪哪些页面需要什么样的工作。

## 标签类型指南

这里是关于标签类型的快速指南和它们可能用到的值。

### 文档类别

当你使用这些类别中的一个来标记文章的时候，你帮助了自动化工具更准确的生成着陆页面，内容表，和更多。我们新的搜索系统也可以使用这些来让我们的游客更好的根据他们的意愿来定位参考和指南。

我们使用以下类别名称作为标准标记术语：

- `{{Tag("Intro")}}`
  - : 这篇文章提供了一个有关主题的介绍材料。最理想的是每一个技术领域应该只能有一个“Intro”标签。
- `{{Tag("Featured")}}`
  - : 这篇文章是至关重要的，将在登陆页面上显示在突出的位置上。有节制地使用这个标签（每个文件区不要超过三个）。
- `{{Tag("Reference")}}`
  - : 这篇文章包含 API、元素、属性、等的参考资料。
- `{{Tag("Landing")}}`
  - : 这是一个着陆页面。
- `{{Tag("Guide")}}`
  - : 这篇文章是一个告诉如何做或者指南的页面。
- `{{Tag("Example")}}`
  - : 这是代码示例页面，或者有代码示例（那是有用的代码实例，而不是一行“语法例子”）。

### 主题

通过确定文章的主题区域，您可以帮助产生更好的搜索结果（以及着陆页和导航）。

虽然在这里有一些灵活的空间可以识别新的主题领域，但我们试着将自己限制在 API 和技术的名字上，一些有用的例子：

- `{{Tag("HTML")}}`
- `{{Tag("CSS")}}`
- `{{Tag("JavaScript")}}` (注意大写字母“S”！)
- `{{Tag("Document")}}`
- `{{Tag("DOM")}}`
- `{{Tag("API")}}` 对于每一个接口，方法和属性。
- `{{Tag("Method")}}` 对于 API 的每一个方法。
- `{{Tag("Property")}}` 对于 API 的每一个属性。
- `{{Tag("Graphics")}}`
- `{{Tag("Firefox OS")}}`
- `{{Tag("Gecko")}}`
- `{{Tag("XUL")}}`
- `{{Tag("XPCOM")}}`
- `{{Tag("SVG")}}`
- `{{Tag("WebGL")}}`
- `{{Tag("Element")}}`
- `{{Tag("Node")}}`
- `{{Tag("Tools")}}`
- `{{Tag("Web")}}`

一般而言，您的主题标识标签应该是一个接口的名称，和相关的页面（如[Node](/en-US/docs/Web/API/Node)，它的各种属性和方法有很多页），或一个整体的技术类型的名称。你可以对图形、WebGL 和 WebGL 设置页面标签，而不仅是一个关于{{HTMLElement("canvas")}} 与 HTML、元素，Canvas，和图形。

#### Mozilla 特定内容

这些标签只用于 Mozilla 特定内容：

- {{Tag("Mozilla")}}
- {{Tag("Firefox")}}
- `{{Tag("Firefox OS")}}`
- `{{Tag("Gecko")}}`
- `{{Tag("XUL")}}`
- `{{Tag("XPCOM")}}`

### API 标识

在 API 引用中，每篇文章都应该标明它覆盖了哪部分 API:

- {{tag("Interface")}}
  - : 一个接口的主要文章应该有这样的标签。例如，{{DOMxRef("RTCPeerConnection")}}.
- {{tag("Constructor")}}
  - : 每个接口最多可以有一个页面标记为“构造函数”（接口的构造函数）。页面应该有和接口一样的名字，如{{DOMxRef("RTCPeerConnection.RTCPeerConnection()","RTCPeerConnection()")}}.
- {{tag("Property")}}
  - : 每一篇描述接口内特定属性的文章都需要这样的标记。以{{DOMxRef("RTCPeerConnection.connectionState")}}, 为例。
- {{tag("Method")}}
  - : 每一篇记录接口方法的文章都需要这样的标记。以 {{DOMxRef("RTCPeerConnection.createOffer()")}}为例。

此外，引用页面需要在其标记中包含接口、属性和方法名称。一些例子如下：

- 接口 {{DOMxRef("RTCPeerConnection")}}
  - : 包含标签 "RTCPeerConnection" 以及其他相关标记（"Interface"，"WebRTC"，"WebRTC API"，"API"，"Reference"等）。
- 方法{{DOMxRef("RTCPeerConnection.createOffer()")}}
  - : 包括标记 "RTCPeerConnection"和 "createOffer" (注意标记名中没有括号！) 以及其他相关标记，包括 "WebRTC"，"WebRTC API"，"API"，"Reference"等。考虑包含像 "Offer"和 "SDP"这些内容，它们在这里也是相关的。
- 属性{{DOMxRef("RTCPeerConnection.iceConnectionState")}}
  - : 包括标记"RTCPeerConnection"和"iceConnectionState"以及其他相关标记，包括 "WebRTC"，"WebRTC API"，"API"和"Reference"。也需要考虑包括 "ICE"。

### 技术状况

为了帮助读者了解可行的技术是怎样的，我们使用标签来标记页面的技术规范的状态。这并不像实际解释规格是什么，以及技术在规范过程中出现了多少（这正是规格表的用途），但它有助于读者判断，乍一看之下，使用在文章中描述的技术是否是一个好主意。

这些标记是一些可能的值：

- `{{Tag("Non-standard")}}`
  - : 表示页面中描述的技术或应用接口不是标准的一部分，但是在任何实现浏览器中都是稳定的。如果你不使用这个标签，你的读者会认为这是标准的技术。页面上的兼容性表应该说明该技术或 API 的支持。
- `{{Tag("Deprecated")}}`
  - : 网页上的技术或 API 被标记为过时的规范，并有可能最终被删除，但一般仍可用在当前版本的浏览器。
- `{{Tag("Obsolete")}}`
  - : 该技术或 API 已被认为已经过时，并已经在所有或大多数当前浏览器中被删除（或正在积极被删除）。
- `{{Tag("Experimental")}}`
  - : 技术不是规范，而是一个实验性的技术或 API，可能会或可能不会成为标准的一部分。它可能在浏览器的实现上被改变。
- `{{Tag("Needs Privileges")}}`
  - : 该接口要求访问该设备在该设备上运行的权限。
- `{{Tag("Certified Only")}}`
  - : 该 API 仅适用于认证码。

这些标签没有理由离开你文章中的 [兼容性表](/en-US/docs/Project:Compatibility_tables) ！

### 技术水平

指南或教程的技术水平标签类型（那是，被标记的指南）帮助用户来基于他们的熟悉程度来选择教程，这里有三个值：

- `{{Tag("Beginner")}}`
  - : 介绍读者到一个从未使用过的技术或仅仅是一种熟悉的技术。
- `{{Tag("Intermediate")}}`
  - : 已经开始使用该技术的用户的文章，但不是专家。
- `{{Tag("Advanced")}}`
  - : 关于拓展技术和读者能力的文章。

### 文档元数据

写作社区要求根据特定类型的工作来使用标签标记文章。以下是我们最常用的一个列表：

- `{{Tag("Draft")}}`
  - : 文章不完整，至少在理论上仍在积极更新（尽管它也有可能被遗忘）。在进行更改之前，请尝试与最新的贡献者进行检查，以避免潜在的内容冲突。
- `{{Tag("NeedsCompatTable")}}`
  - : 文章需要一个表来指定跨浏览器特性的兼容性，有关促进浏览器兼容性的指南参见[此处](/zh-CN/docs/MDN/Contribute/Structures/Compatibility_tables)。

- `{{Tag("NeedsContent")}}`
  - : 文章是一个存根，或者是缺乏其他信息。这个标签意味着有人应该审查的内容，并添加更多的细节和/或完成写作的文章。
- `{{Tag("NeedsExample")}}`
  - : 文章需要一个或多个例子来帮助说明文章的要点。这些例子应该使用[实时示例系统](/en-US/docs/MDN/Contributing/How_to_help/Code_samples).
- `{{Tag("NeedsLiveSamples")}}`
  - : 本文有一个或多个实例，需要使用 [在线样本系统](/en-US/docs/MDN/Contributing/How_to_help/Code_samples)更新。
- `{{Tag("NeedsUpdate")}}`
  - : 内容过时，需要更新。
- `{{Tag("l10n:exclude")}}`
  - : 内容是不真正值得本地化，不会出现在本地化状态页。
- `{{Tag("l10n:priority")}}`
  - : 内容重要，应该被 MDN 标记为优先翻译。在本地化状态页上显示了一个额外的优先级表。

### Web Literacy Map

The [WebMaker](https://webmaker.org) project, through the [Web Literacy Map](https://webmaker.org/literacy), has defined skills needed to optimally read, write, and participate on the Web. We use Web literacy skills as tags on MDN to help our users find the resources that best suit their needs:

- {{Tag("Navigation")}}
  - : 文章包含关于在 web 上如何搜索的信息。
- {{Tag("WebMechanics")}}
  - : 内容有关于 web 如何组织和如何工作的信息。
- {{Tag("Search")}}
  - : 文章解释了如何在 web 上寻找信息、人和资源。
- {{Tag("Credibility")}}
  - : 文章中的信息帮助读者理解怎样批判性的评估他们在 web 上找到的信息。
- {{Tag("Security")}}
  - : 文章提供有关如何保持系统、身份和内容安全的信息。
- {{Tag("Composing")}}
  - : 文档解释如何创建和 curate web 上的内容。
- {{Tag("Remixing")}}
  - : 文章讲授如何修改 existing 的网络资源来创建新的东西。
- {{Tag("Design")}}
  - : 文档解释如何提高视觉和其他用户体验。
- {{Tag("Accessibility")}}
  - : 文档描述如何用 universally-recognizable 的方式交流。
- {{Tag("CodingScripting")}}
  - : 如何在网络上写代码和（或）创造交互式的用户体验。
- {{Tag("Infrastructure")}}
  - : 文档解释 Internet's technical stack 是如何工作的。
- {{Tag("Sharing")}}
  - : 文章内容包含与他人一起创造资源的方式。
- {{Tag("Collaborating")}}
  - : 文档提供关于如何与他人一同工作的信息。
- {{Tag("Community")}}
  - : 文章详细说明如何参与网络社区并理解他们如何工作。
- {{Tag("Privacy")}}
  - : 材料帮助检查在网络上分享数据的后果。
- {{Tag("OpenPractices")}}
  - : 文章 provid=deshow 帮助保持人人可以连接网络。

## 把它们放到一起

就可以从几种标签种类中搜索你标记的网页，例如

- A tutorial about WebGL for beginners
  - : `WebGL`, `Graphics`, `Guide`, `Beginner`
- Reference page for {{HTMLElement("canvas")}}
  - : `Canvas`, `HTML`, `Element`, `Graphics,` `Reference`
- A landing page for Firefox OS developer tools
  - : `Tools`, `Firefox OS`, `Landing`

## 标签和搜索过滤

只有我们正确地标记网页，搜索过滤才能正确工作。这是一个搜索过滤和它们寻找的标签的表格。

> **备注：** 如果多个标签被列在“tag name”下，那说明，为了搜索，任何一个或更多的标签必须在文章中。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Filter group</th>
      <th scope="col">Search filter name</th>
      <th scope="col">Tag name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Topic</th>
      <td>Open Web Apps</td>
      <td>{{Tag("Apps")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>HTML</td>
      <td>{{Tag("HTML")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>CSS</td>
      <td>{{Tag("CSS")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>JavaScript</td>
      <td>{{Tag("JavaScript")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>APIs and DOM</td>
      <td>{{Tag("API")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Canvas</td>
      <td>{{Tag("Canvas")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>SVG</td>
      <td>{{Tag("SVG")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>MathML</td>
      <td>{{Tag("MathML")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>WebGL</td>
      <td>{{Tag("WebGL")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>XUL</td>
      <td>{{Tag("XUL")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Marketplace</td>
      <td>{{Tag("Marketplace")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Firefox</td>
      <td>{{Tag("Firefox")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Firefox for Android</td>
      <td>{{Tag("Firefox Mobile")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Firefox for Desktop</td>
      <td>{{Tag("Firefox Desktop")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Firefox OS</td>
      <td>{{Tag("Firefox OS")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Mobile</td>
      <td>{{Tag("Mobile")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Web Development</td>
      <td>{{Tag("Web Development")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Add-ons &#x26; Extensions</td>
      <td>
        {{Tag("Add-ons ")}}|| {{Tag("Extensions")}} ||
        {{Tag("Plugins")}} || {{Tag("Themes")}}
      </td>
    </tr>
    <tr>
      <th></th>
      <td>Games</td>
      <td>{{Tag("Games")}}</td>
    </tr>
    <tr>
      <th>Skill level</th>
      <td>I'm an Expert</td>
      <td>{{Tag("Advanced")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Intermediate</td>
      <td>{{Tag("Intermediate")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>I'm Learning</td>
      <td>{{Tag("Beginner")}}</td>
    </tr>
    <tr>
      <th>Document type</th>
      <td>Docs</td>
      <td>
        <em
          >This restricts the search to docs content, leaving out Hacks and
          other MDN content.</em
        >
      </td>
    </tr>
    <tr>
      <th></th>
      <td>Demos</td>
      <td><em>This includes Demo Studio content in the search results.</em></td>
    </tr>
    <tr>
      <th></th>
      <td>Tools</td>
      <td>{{Tag("Tools")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Code Samples</td>
      <td>{{Tag("Example")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>How-To &#x26; Tutorial</td>
      <td>{{Tag("Guide")}}</td>
    </tr>
    <tr>
      <th></th>
      <td>Developer Profiles</td>
      <td>
        <em
          >This includes developer profiles from the MDN site in the search
          results.</em
        >
      </td>
    </tr>
    <tr>
      <th></th>
      <td>External Resources</td>
      <td><em>The dev team is still figuring this out...</em></td>
    </tr>
  </tbody>
</table>

## 你可以修改的标签的错误

这些种类的标签错误你可以帮助修改：

- 没有标签
  - : 一般来说文章应该至少有一个 "[category](/en-US/docs/MDN/Contributing/Tagging_standards#Category)" 标签和一个 "[topic](/en-US/docs/MDN/Contributing/Tagging_standards#Topic)"标签。虽然有其他标签也好，但是如果你能帮我们提供最基本的标签（前文所说的 category 和 topic 标签）, 你将会是一名（维护）文档的英雄！
- 不符合我们<s>标签</s>标准的标签
  - : 请修正一切含有不合标准标签的文档。请注意由于[Kuma 的一个 bug](https://bugzilla.mozilla.org/show_bug.cgi?id=776048), 一些本地化的标签 (比如 `Référence`) 可能会出现在一些英语页面上。这些标签还有可能反复出现，即使你已经吧它们删除; 请耐心处理这些问题直到 kuma 的那个 bug 被修复。
- 不正确的标签
  - : 如果你正在看一篇关于 HTML 的文章并且发现它被标上了"JavaScript"的标签，那很有可能这是一个错误标签！同理，如果一篇文章在讨论 Mozilla internals 但是有一个"Web"标签，那也有可能是错误的。删除这些错误的标签并且如果还没有合适标签的话，加上正确的标签。同样请更正拼写错误的标签 (e.g., 因为标签是大小写敏感的， 所以"Javascript" 仍然匹配，但是我们还是不要马虎对待 !).
- 缺失的标签
  - : 如果一篇文章有标签但是不全面，请补全。比如，一页 JavaScript 的参考文档被 (正确) 标签为 "JavaScript" 但是除此之外什么也没有了，请你就为它标上"参考"的标签！
- 垃圾标签
  - : 这只潜伏的怪兽是所有标签问题中最让人讨厌的：some Web vermin has deposited its droppings in the page tags (like "Free warez!" or "Hey I was browsing your site and wanted to ask you if you could help me solve this problem I'm having with Flash crashing all the time"). We've got to delete these right away! They're ugly, they're hard to manage if they're allowed to linger too long, and they're terrible for {{Glossary("SEO")}}.

如果你发现了以上问题， 请[登录 MDN](/en-US/docs/MDN/Contributing/Getting_started#Logging_into_MDN)点击 MDN 窗口右上方的 EDIT 按钮。等编辑器载入完成后，到页面底部，你就会看到标签。想了解标签操作界面的更多信息，请参看 "[The tags box](/en-US/docs/MDN/Contributing/Editor_guide#The_tags_box)" in the [MDN editor guide](/en-US/docs/MDN/Contributing/Editor_guide).
