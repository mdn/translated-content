---
title: <hgroup>
slug: Web/HTML/Element/hgroup
---

{{HTMLRef}}**HTML `<hgroup>` element**代表文档章节所属的多级别的目录，它将多个\<h1>至\<h6>的子元素组装到一起。{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, heading content, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td>One or more {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, and/or {{HTMLElement("h6")}}.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parent elements</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>{{ARIARole("tab")}}, {{ARIARole("presentation")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素仅包含全局属性。

## 使用笔记

> **备注：** 本元素已经从 HTML5（W3C）规范中删除，但是它仍旧在 WHATWG 的 HTML 版本里。大多数浏览器都部分地实现，所以它不太可能消失。
> 然而，考虑到\<hgroup>元素的一个关键存在目标是明确 HTML 规范中如何显示标题的轮廓算法，但因为其轮廓算法 (outline algorithm) 未在任何浏览器中实现，因此 `<hgroup>` 语义仍旧是理论上的建议。
> HTML5 (W3C) 规范提供了如何标记[副标题，小标题，可选标题和标语](http://www.w3.org/TR/html5/common-idioms.html#sub-head)（Subheadings, subtitles, alternative titles and taglines）的建议。

The `<hgroup>` element allows the primary heading for a document section to be grouped with any secondary headings—such as subheadings or alternative titles—to form a _multi-level_ heading.

In other words, the `<hgroup>` element prevents any of its secondary [`<h1>–<h6>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) children from creating separate sections of their own in the outline—as those [`<h1>–<h6>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) elements otherwise normally would if they were not children of any `<hgroup>`.

So in the abstract outline produced by the [HTML outline algorithm defined in the HTML specification](/zh-CN/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#The_HTML5_outline_algorithm), the `<hgroup>` as a whole forms a single logical heading, with the entire set of [`<h1>–<h6>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) children of the `<hgroup>` going into the outline as one _multi-level_ unit, to comprise that single logical heading in the abstract outline.

To produce any (non-abstract) _rendered_ view of such an outline, some choice must be made in the design of the rendering tool about how to render `<hgroup>` headings in such a way as to convey their multi-level nature. There are a variety of ways an `<hgroup>` might be shown in a rendered outline; for example:

- an `<hgroup>` might be shown in a rendered outline in with a colon character and space (“: ”) or other such punctuation after the primary heading and before the first secondary heading (and with the same or similar punctuation before any other secondary headings
- an `<hgroup>` might be shown in a rendered outline in with the primary heading followed by parentheses around the secondary heading(s)

Consider the following HTML document:

```plain
<!DOCTYPE html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML</h1>
    <h2>Living Standard — Last Updated 12 August 2016</h2>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id=toc>...</ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

A rendered outline for that document might look like the following:

![](outline-colon.png)

That is, the rendered outline might show the primary title, _HTML_, followed by a colon and space, followed by the secondary title, _Living Standard — Last Updated 12 August 2016_.

Or, the rendered outline for that document might instead look like the following:

![Rendered outline that includes an \<hgroup> element, with parens around the secondary heading](outline-paren.png)

That is, the rendered outline might show the primary title, _HTML_, followed by the secondary title shown in parentheses: _(Living Standard — Last Updated 12 August 2016)_.

## 示例

```html
<hgroup>
  <h1>Main title</h1>
  <h2>Secondary title</h2>
</hgroup>
```

## 浏览器兼容性

{{Compat}}

## 参阅

- Others section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/zh-CN/docs/Sections_and_Outlines_of_an_HTML5_document).
