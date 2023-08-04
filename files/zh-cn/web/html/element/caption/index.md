---
title: <caption>
slug: Web/HTML/Element/caption
---

## 简介

**HTML `<caption>` 元素** (or _HTML 表格标题元素_) 展示一个表格的标题，它常常作为 {{HTMLElement("table")}} 的第一个子元素出现，同时显示在表格内容的最前面，但是，它同样可以被 CSS 样式化，所以，它同样可以出现在任何一个一个相对于表格的做任意位置。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td>None.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parent elements</th>
   <td>A {{HTMLElement("table")}} element, as its first descendant.</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLTableCaptionElement")}}</td>
  </tr>
 </tbody>
</table>

## 特性

本元素包含了所有 [全局特性](/zh-CN/docs/HTML/Global_attributes)。

- `align` {{Deprecated_inline}}

  - : 这个可枚举属性表明了 caption 相对于 table 应该如何排列。它可能有以下几个值：

    - `left`, 展示在表格左边
    - `top`, 显示在表格前面
    - `right`, 显示在表格右边
    - `bottom`, 显示在表格下面

    > **备注：** 不要使用这个属性，它已经被弃用：{{HTMLElement("caption")}} 元素应该使用 [CSS](/zh-CN/docs/CSS)设置样式。要得到类似`align`属性的效果，使用 [CSS](/zh-CN/docs/CSS) 属性 {{cssxref("caption-side")}} 和 {{cssxref("text-align")}}.

## 使用说明

当 {{HTMLElement("table")}} 元素是{{HTMLElement("caption")}} 的父元素，caption 是{{HTMLElement("figure")}} 元素的唯一后代的时候，使用{{HTMLElement("figcaption")}}元素替代 caption 元素

## 实例

请查看 {{HTMLElement("table")}} 页面获得 {{HTMLElement("caption")}}的例子

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- 其他与 table 相关的 HTML 元素：{{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- 可能对{{HTMLElement("caption")}} 元素有用的 CSS 属性：

  - {{cssxref("text-align")}}, {{cssxref("caption-side")}}.

{{HTMLSidebar}}
