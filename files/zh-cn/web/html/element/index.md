---
title: HTML 元素参考
slug: Web/HTML/Element
---

{{HTMLSidebar("Elements")}}

此页面列出了所有使用{{Glossary("Tag","标签")}}创建的 {{Glossary("HTML")}} {{Glossary("Element","元素")}}。

它们已被按照功能进行分组，以便更轻松地找到你想要的内容。同时，侧边栏中也按照字母排序列出了所有元素。

> **备注：** 若想获知更多关于 HTML 元素、属性的基本信息，请查阅 [HTML 介绍](/zh-CN/docs/learn/HTML/Introduction_to_HTML)中的相关内容。

## 主根元素

{{HTMLRefTable("HTML Root Element")}}

## 文档元数据

元数据（Metadata）含有页面的相关信息，包括样式、脚本及数据，能帮助一些软件（例如 {{Glossary("search engine", "搜索引擎")}}、{{Glossary("Browser","浏览器")}} 等等）更好地运用和渲染页面。对于样式和脚本的元数据，可以直接在网页里定义，也可以链接到包含相关信息的外部文件。

{{HTMLRefTable("HTML Document Metadata")}}

## 分区根元素

{{HTMLRefTable("Sectioning Root Element")}}

## 内容分区

内容分区元素允许你将文档内容从逻辑上进行组织划分。使用包括页眉（header）、页脚（footer）、导航（nav）和标题（h1~h6）等分区元素，来为页面内容创建明确的大纲，以便区分各个章节的内容。

{{HTMLRefTable("HTML Sections")}}

## 文本内容

使用 HTML 文本内容元素来组织在开标签 {{HTMLElement("body")}} 和闭标签 `</body>` 里的块或章节的内容。这些元素能标识内容的宗旨或结构，而这对于 {{Glossary("accessibility")}} 和 {{Glossary("SEO")}} 很重要。

{{HTMLRefTable("HTML Grouping Content")}}

## 内联文本语义

使用 HTML 内联文本语义（Inline text semantics）定义一个单词、一行内容，或任意文字的语义、结构或样式。

{{HTMLRefTable("HTML Text-Level Semantics")}}

## 图片和多媒体

HTML 支持各种多媒体资源，例如图像、音频和视频。

{{HTMLRefTable("multimedia")}}

## 内嵌内容

除了常规的多媒体内容，HTML 可以包括各种其他的内容，即使它并不容易交互。

{{HTMLRefTable({"include":["HTML embedded content"], "exclude":["multimedia"]})}}

## SVG 和 MathML

你可以使用 {{SVGElement("svg")}} 或 {{MathMLElement("math")}} 将 [SVG](/zh-CN/docs/Web/SVG) 或 [MathML](/zh-CN/docs/Web/MathML) 内容直接嵌入 HTML 文档。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">元素</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SVGElement("svg")}}</td>
      <td>
        <code>svg</code> 元素是一个容器，它定义了一个新的坐标系和<a href="/zh-CN/docs/Web/SVG/Attribute/viewBox">视口</a>。它用作 SVG 文档的最外层元素，也可以用于在 SVG 或 HTML 文档中嵌入 SVG 片段。
      </td>
    </tr>
    <tr>
      <td>{{MathMLElement("math")}}</td>
      <td>
        MathML 中的顶级元素是 <code>&#x3C;math></code>。每一个有效的 MathML 实例必须包含在 <code>&#x3C;math></code> 标记中。此外，不可以在一个 <code>&#x3C;math></code> 元素中嵌套另一个，但是你可以在其中包含任意数量的其他子元素。
      </td>
    </tr>
  </tbody>
</table>

## 脚本

为了创建动态内容和 Web 应用程序，HTML 支持使用脚本语言，最突出的就是 JavaScript。某些元素用于支持此功能。

{{HTMLRefTable("HTML Scripting")}}

## 编辑标识

这些元素能标示出某个文本被更改过的部分。

{{HTMLRefTable("HTML Edits")}}

## 表格内容

这里的元素用于创建和处理表格数据。

{{HTMLRefTable("HTML tabular data")}}

## 表单

HTML 提供了许多可一起使用的元素，这些元素能用来创建一个用户可以填写并提交到网站或应用程序的表单。详情请参阅 [HTML 表单指南](/zh-CN/docs/Learn/Forms)。

{{HTMLRefTable({"include": ["HTML forms"], "exclude":["Deprecated"]})}}

## 交互元素

HTML 提供了一系列有助于创建交互式用户界面对象的元素。

{{HTMLRefTable("HTML interactive elements")}}

## Web 组件

Web 组件是一种与 HTML 相关联（HTML-related）的技术，简单来说，它允许开发者创建自定义元素，并如同普通的 HTML 一样使用它们。另外，也可以创建经过自定义的标准 HTML 元素。

{{HTMLRefTable({"include":["Web Components"],"exclude":["Deprecated", "Obsolete"]})}}

## 过时的和弃用的元素

> **警告：** 下面这些旧的 HTML 元素已被弃用，且不应再被使用。 **千万不要在新的项目中使用它们，并且要尽快替换旧项目中的残余。** 在此列出，仅供参考。

{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}
