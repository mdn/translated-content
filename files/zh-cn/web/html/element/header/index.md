---
title: <header>
slug: Web/HTML/Element/header
---

{{HTMLSidebar}}

**HTML `<header>` 元素**用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等。

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容类型</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>，palpable content。</td>
  </tr>
  <tr>
   <th scope="row">许可内容</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>，但是不允许 <code>&lt;header&gt;</code> 或{{HTMLElement("footer")}} 成为子元素</td>
  </tr>
  <tr>
   <th scope="row">标记省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任何接受 <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a> 的元素。注意 <code>&lt;header&gt;</code> 元素不能作为 {{HTMLElement("address")}}、{{HTMLElement("footer")}} 或另一个 {{HTMLElement("header")}} 元素的子元素。</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>，<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a></td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 使用提示

`<header>` 元素不是分段内容，因此不会往 [大纲](/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document) 中引入新的段落。也就是说，`<header>` 元素通常用于包含周围部分的标题（`h1` 至 `h6` 元素），但这**不是**必需的。

## 属性

此元素仅拥有 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 示例

### 页面的 Header

```html
<header>
  <h1>主页标题</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

### 文章的 Header

```html
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>Posted on Wednesday, 4 October 2017 by Jane Smith</p>
  </header>
  <p>
    We live on a planet that's blue and green, with so many things still unseen.
  </p>
  <p>
    <a href="https://janesmith.com/the-planet-earth/">Continue reading....</a>
  </p>
</article>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Others section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).
