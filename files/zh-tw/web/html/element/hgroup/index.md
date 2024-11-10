---
title: <hgroup>：標題群組元素
slug: Web/HTML/Element/hgroup
---

{{HTMLSidebar}}

**`<hgroup>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表一個標題及相關內容。它將一個單獨的 [`<h1>–<h6>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements) 元素與一個或多個 [`<p>`](/zh-TW/docs/Web/HTML/Element/p) 元素分組。

{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

## 屬性

此元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用注意事項

`<hgroup>` 元素允許將標題與任何次要內容（例如副標題、替代標題或標語）分組在一起。每種類型的內容都以 `<p>` 元素表示在 `<hgroup>` 內。

`<hgroup>` 本身對於網頁的文件大綱沒有影響。相反，`<hgroup>` 內部允許的單一標題對文件大綱有貢獻。

## 範例

```html
<!doctype html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML: Living Standard</h1>
    <p>Last Updated 12 July 2022</p>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id="toc">
    …
  </ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

### 結果

{{EmbedLiveSample('範例')}}

## 無障礙議題

目前 `<hgroup>` 元素沒有強烈的無障礙語義。該元素的內容（標題和可選段落）是由瀏覽器無障礙 API 公開的。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#標題型內容"
          >標題型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        零個或多個 {{HTMLElement("p")}} 元素，後接一個 {{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、
        {{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}} 或 {{HTMLElement("Heading_Elements", "h6")}} 元素，然後是零個或多個 {{HTMLElement("p")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 其他與節點相關的元素：{{HTMLElement("body")}}、{{HTMLElement("article")}}、{{HTMLElement("section")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("nav")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("address")}}
- [HTML文件的節點和大綱](/zh-TW/docs/Web/HTML/Element/Heading_Elements)
