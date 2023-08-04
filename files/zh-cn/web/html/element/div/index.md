---
title: <div>：内容划分元素
slug: Web/HTML/Element/div
---

{{HTMLSidebar}}

**[HTML](/zh-CN/docs/Web/HTML) `<div>` 元素** (或 _HTML 文档分区元素_) 是一个通用型的流内容容器，在不使用{{glossary("CSS")}}的情况下，其对内容或布局没有任何影响。

{{EmbedInteractiveExample("pages/tabbed/div.html","tabbed-standard")}}

作为一个“纯粹的”容器，`<div>` 元素在语义上不表示任何特定类型的内容。然而，其可以将内容分组，从而可以使用[`class`](/zh-CN/docs/Web/HTML/Global_attributes#class)或是[`id`](/zh-CN/docs/Web/HTML/Global_attributes#id)属性方便的定义内容的格式，也可以在一段文档中划分标记出使用另一种语言书写的内容（使用[`lang`](/zh-CN/docs/Web/HTML/Global_attributes#lang) 属性）等等。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">所属内容分类</a>（<a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a>）</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许的子元素</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>.<br>
    Or (in {{glossary("WHATWG")}} HTML): If the parent is a {{HTMLElement("dl")}} element: one or more {{HTMLElement("dt")}} elements followed by one or more {{HTMLElement("dd")}} elements, optionally intermixed with {{HTMLElement("script")}} and {{HTMLElement("template")}} elements.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>Any element that accepts <a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">flow content</a>.<br>
    Or (in {{glossary("WHATWG")}} HTML): {{HTMLElement("dl")}} element.</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">所使用的 DOM API 接口</th>
   <td>{{domxref("HTMLDivElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素支持所有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

> **备注：** `align` 属性已废弃；不要再使用它了。你应当使用 [CSS Grid](/zh-CN/docs/Web/CSS/CSS_grid_layout) 或 [CSS Flexbox](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox) 来对齐、定位页面上的 `<div>` 元素。

## 使用说明

- `<div>` 元素应当仅在没有任何其他语义元素（比如 {{HTMLElement("article")}} 或 {{HTMLElement("nav")}}）可用时使用。

## 示例

### 一个简单的示例

```html
<div>
  <p>这里可以是任何内容，比如 &lt;p&gt;, &lt;table&gt;，一切由你作主！</p>
</div>
```

结果看起来像这样：

{{EmbedLiveSample("一个简单的示例", 650, 60)}}

### 样式实例

本例使用 CSS 将样式应用于\<div>，从而创建一个阴影框。注意使用\<div>上的 [`class`](/zh-CN/docs/Web/HTML/Global_attributes#class)属性将名为“shadowbox”的样式应用于元素。

#### HTML

```html
<div class="shadowbox">
  <p>Here's a very interesting note displayed in a lovely shadowed box.</p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### 结果

{{EmbedLiveSample("样式实例", 650, 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Semantic sectioning elements: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- {{HTMLElement("span")}} element for styling of phrasing content
