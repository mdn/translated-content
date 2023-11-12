---
title: <hgroup>
slug: Web/HTML/Element/hgroup
---

{{HTMLSidebar}}

**`<hgroup>`** [HTML](/zh-CN/docs/Web/HTML) 元素代表文档标题和与标题相关联的内容，它将一个 [`<h1>–<h6>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) 元素与一个或多个 [`<p>`](/zh-CN/docs/Web/HTML/Element/p) 元素组合在一起。

{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

## 属性

这个元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 使用说明

`<hgroup>` 元素允许将一个标题与任意次要内容（例如子标题、副标题或口号）组合在一起。在 `<hgroup>` 中，这些类型的内容也表示为 `<p>` 元素。

`<hgroup>` 本身对网页的的文档大纲没有任何影响。而 `<hgroup>` 中所允许的单个标题则会被用于文档大纲。

## 示例

```html
<!doctype html>
<title>HTML 标准</title>
<body>
  <hgroup id="document-title">
    <h1>HTML：现行标准</h1>
    <p>更新于 2022 年 7 月 12 日</p>
  </hgroup>
  <p>文档的介绍。</p>
  <h2>目录</h2>
  <ol id="toc">
    …
  </ol>
  <h2>第一节</h2>
  <p>第一节的介绍。</p>
</body>
```

## 无障碍考虑

目前，`<hgroup>` 没有无障碍的语义。只有其中的元素（标题和可选的段落）会被暴露给浏览器的无障碍 API。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式内容</a
        >、标题内容、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        零个或多个 {{HTMLElement("p")}} 元素，后跟一个
        {{HTMLElement("h1")}}、{{HTMLElement("h2")}}、{{HTMLElement("h3")}}、{{HTMLElement("h4")}}、{{HTMLElement("h5")}}
        或 {{HTMLElement("h6")}} 元素，后跟零个或多个
        {{HTMLElement("p")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">省略标签</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 与本章节相关的其他元素：{{HTMLElement("body")}}、{{HTMLElement("article")}}、{{HTMLElement("section")}}、{{HTMLElement("aside")}}、{{HTMLElement("h1")}}、{{HTMLElement("h2")}}、{{HTMLElement("h3")}}、{{HTMLElement("h4")}}、{{HTMLElement("h5")}}、{{HTMLElement("h6")}}、{{HTMLElement("nav")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("address")}}；
- [HTML 文档的章节和大纲](/zh-CN/docs/Web/HTML/Element/Heading_Elements)。
