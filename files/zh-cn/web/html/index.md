---
title: HTML（超文本标记语言）
slug: Web/HTML
---

{{HTMLSidebar}}

**HTML**（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。除 HTML 以外的其他技术则通常用来描述一个网页的表现与展示效果（如 [CSS](/zh-CN/docs/Web/CSS)），或功能与行为（如 [JavaScript](/zh-CN/docs/Web/JavaScript)）。

“超文本”（hypertext）是指连接单个网站内或多个网站间的网页的链接。链接是网络的一个基本方面。只要将内容上传到互联网，并将其与他人创建的页面相链接，你就成为了万维网的积极参与者。

HTML 使用“标记”（markup）来注明文本、图片和其他内容，以便于在 Web 浏览器中显示。HTML 标记包含一些特殊“元素”如 {{HTMLElement("head")}}、{{HTMLElement("title")}}、{{HTMLElement("body")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("article")}}、{{HTMLElement("section")}}、{{HTMLElement("p")}}、{{HTMLElement("div")}}、{{HTMLElement("span")}}、{{HTMLElement("img")}}、{{HTMLElement("aside")}}、{{HTMLElement("audio")}}、{{HTMLElement("canvas")}}、{{HTMLElement("datalist")}}、{{HTMLElement("details")}}、{{HTMLElement("embed")}}、{{HTMLElement("nav")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("video")}}、{{HTMLElement("ul")}}、{{HTMLElement("ol")}}、{{HTMLElement("li")}} 等等。

HTML 元素通过“标签”（tag）将文本从文档中引出，标签由在“`<`”和“`>`”中包裹的元素名组成，HTML 标签里的元素名不区分大小写。也就是说，它们可以用大写，小写或混合形式书写。例如，`<title>` 标签可以写成 `<Title>`，`<TITLE>` 或以任何其他方式。然而，习惯上与实践上都推荐将标签名全部小写。

下面的文章会帮助你更好地了解 HTML。

## 主要资源

- HTML 介绍

  - : 如果你是 Web 开发新手，请务必阅读我们的 [HTML 基础](/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics) 文章来了解什么是 HTML 以及如何使用它。

- HTML 教程

  - : 关于如何使用 HTML 的文章，教程和完整的示例，查看我们的 [HTML 学习区](/zh-CN/docs/Learn/HTML)。

- HTML 参考
  - : 在我们丰富的 [HTML 参考](/zh-CN/docs/Web/HTML/Reference)部分中，你可以找到在 HTML 中每一个元素和属性的详细信息。

> **标注：**
>
> #### 想要成为一名前端工程师？
>
> 我们汇总了一门课程，其中包含你实现成为前端工程师目标所需要的所有基本信息。
>
> [**点击开始**](/zh-CN/docs/Learn/Front-end_web_developer)

## 初学者教程

我们的 [HTML 学习区](/zh-CN/docs/Learn/HTML) 含有许多富有特色的模块，学习者可以在没有任何先前经验的情况下从零开始，掌握 HTML。

- [HTML 介绍](/zh-CN/docs/Learn/HTML/Introduction_to_HTML)
  - : 这一模块将为你打下基础，并为进一步的学习铺平道路。在这里，你将掌握一些重要的概念和语法，学习如何将 HTML 用于文本、如何创建超链接以及运用 HTML 去构建一个网页。
- [多媒体与嵌入内容](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding)
  - : 这个模块将带领你探索如何使用 HTML 在你的网页中包含多媒体内容，包括通过许多不同的方式嵌入图片，以及如何嵌入视频、音频甚至整个其他网页。
- [HTML 表格](/zh-CN/docs/Learn/HTML/Tables)
  - : 如何用可理解并易于访问的形式在网页中展示表格化数据一向都是个不小的挑战。这个模块涵盖了基本的表格标记，以及一些更复杂的特性，比如实现标题和总结等。
- [HTML 表单](/zh-CN/docs/Learn/HTML/Forms)
  - : 表单是构成 Web 世界的重要组成部分——它们提供了大量你所需要用来与网站进行交互所需的功能。比如注册、登录、发送评论反馈、购买商品等等。这个模块将引导你建立一个客户端／前端部分的表单。
- [用 HTML 解决常见问题](/zh-CN/docs/Learn/HTML/Howto)
  - : 该部分提供了一些链接，它们指向那些你在构建 Web 页面的过程中最常见的问题的解决方法：如何处理网页标题、添加图片或视频、强调某些内容、建立基本的表单等。

## 高级主题

- [CORS 处理跨域图片](/zh-CN/docs/Web/HTML/CORS_enabled_image)
  - : 通过搭配 [`crossorigin`](/zh-CN/docs/Web/HTML/Element/img#crossorigin) 属性和适当的 {{glossary("CORS")}} 标头，在 {{HTMLElement("img")}} 元素中定义的图片可以从外部来源加载并在 {{HTMLElement("canvas")}} 元素中使用，就像是从本地源加载一样。
- [CORS 设置属性](/zh-CN/docs/Web/HTML/Attributes/crossorigin)
  - : 一些提供了对 [CORS](/zh-CN/docs/Web/HTTP/CORS) 的支持的 HTML 元素，比如 {{HTMLElement("img")}} 或 {{HTMLElement("video")}}，具有 `crossorigin` 元素属性／attribute（`crossOrigin` 对象属性／property），该属性能使你配置其跨域获取资源的请求。
- [使用 rel="preload" 预加载页面内容](/zh-CN/docs/Web/HTML/Link_types/preload)
  - : {{htmlelement("link")}} 元素的 [`rel`](/zh-CN/docs/Web/HTML/Element/link#rel) 属性的值 `preload` 允许你在 HTML 的 {{htmlelement("head")}} 部分声明一些（资源）获取请求，以指定那些在页面加载后即刻需要的资源。因此在浏览器的主渲染机制介入前，这些资源会在页面加载生命周期的早期阶段进行预加载。这样可以保证这些资源可被更早使用并减少阻塞页面初次渲染的可能性，从而提升性能。这篇文章提供了关于 `preload` 作用机制的基本指导。

## 参考

- [HTML 参考](/zh-CN/docs/Web/HTML/Reference)
  - : HTML 由**元素**组成，每个元素都可以被多个**属性**修饰。HTML 文档通过[链接](/zh-CN/docs/Web/HTML/Link_types)相互连接。
- [HTML 元素参考](/zh-CN/docs/Web/HTML/Element)
  - : 浏览完整的 {{glossary("HTML")}} {{glossary("Element", "元素")}}列表。
- [HTML 属性参考](/zh-CN/docs/Web/HTML/Attributes)
  - : HTML 元素都含有**属性**。这些额外的属性值可以通过各种途径对元素进行配置或调整其行为。
- [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
  - : 全局属性可以在所有 [HTML 元素](/zh-CN/docs/Web/HTML/Element)上进行设置，_包括那些没有在相关标准中出现的元素_。这意味着即使这些非标准元素使得文档并不符合 HTML5 标准，它们也必须允许这些属性存在。
- [行级元素](/zh-CN/docs/Glossary/Inline-level_content)和[块级元素](/zh-CN/docs/Glossary/Block-level_content)
  - : HTML 元素通常是“行级”或“块级”元素。一个行级元素仅会占用由定义它的标签所包裹起来的空间。而一个块级元素将会占用其父元素（容器）的全部空间，也就是创建一个“块”。
- [链接类型](/zh-CN/docs/Web/HTML/Link_types)
  - : 在 HTML 中，各种各样的链接类型被用来确立和定义两个文档之间的关系。可以设置链接类型的链接元素包括 {{HTMLElement("a")}}、{{HTMLElement("area")}} 和 {{HTMLElement("link")}}。
- [Web 媒体类型和格式指南](/zh-CN/docs/Web/Media/Formats)
  - : {{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 元素允许你原生地播放音频和视频媒体，无需任何外部软件的支持。
- [HTML 内容种类](/zh-CN/docs/Web/Guide/HTML/Content_categories)
  - : HTML 包含了几种内容，每种内容在特定的情景上下文中有效，而在其他上下文中无效。每种内容也指定了可以被它们包含的类别，以及可以或不可以在其中使用的元素。这里提供了一个关于这些类别的说明。
- [怪异模式和标准模式](/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : 关于怪异模式和标准模式的历史信息。

## 相关主题

- [使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/CSS_colors/Applying_color)
  - : 这篇文章涵盖了大多数使用 CSS 为 HTML 内容增加颜色的方式，并列举了 HTML 文档里哪些部分可以进行上色以及这一操作需要使用哪些 CSS 属性。它包含了一些示例，配色建构工具的链接，以及其他内容。
