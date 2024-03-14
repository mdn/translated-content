---
title: <span>：內容區塊元素
slug: Web/HTML/Element/span
---

{{HTMLSidebar}}

**`<span>`** [HTML](/zh-TW/docs/Web/HTML) 元素是一個通用的行級容器，用於包裹詞組內容，本身並不代表任何特定含義。它可用於為樣式目的（使用 [`class`](/zh-TW/docs/Web/HTML/Global_attributes#class) 或 [`id`](/zh-TW/docs/Web/HTML/Global_attributes#id) 屬性）對元素進行分組，或因它們共享屬性值（如 [`lang`](/zh-TW/docs/Web/HTML/Global_attributes#lang)）而使用。僅在沒有其他語義元素適用時應使用 `<span>`。`<span>` 非常類似於 {{HTMLElement("div")}} 元素，但 {{HTMLElement("div")}} 是一個[塊級元素](/zh-TW/docs/Glossary/Block-level_content)，而 `<span>` 是一個[行級元素](/zh-TW/docs/Glossary/Inline-level_content)。

{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-shorter")}}

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 範例

### 範例 1

#### HTML

```html
<p><span>Some text</span></p>
```

#### 結果

{{EmbedLiveSample('範例 1')}}

### 範例 2

#### HTML

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">See my portfolio</a>
  </span>
</li>
```

#### CSS

```css
li span {
  background: gold;
}
```

#### 結果

{{EmbedLiveSample('範例 2')}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>無，開始標籤和結束標籤均為必需。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >的元素，或任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有相對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>
        {{domxref("HTMLSpanElement")}}
      </td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTML {{HTMLElement("div")}} 元素
