---
title: <br>
slug: Web/HTML/Element/br
---

**HTML \<br> 元素**在文本中生成一个换行（回车）符号。此元素在写诗和地址时很有用，这些地方的换行都非常重要。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>无，这是一个{{Glossary("empty element","空元素")}}.</td>
  </tr>
  <tr>
   <th scope="row">标签略写</th>
   <td>必须有一个开始标签，并且一定不能有结束标签。在 XHTML 中将元素写为 <code>&lt;br /&gt;</code>。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任意可容纳 <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a> 的元素。</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>任意</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLBRElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素的属性包括[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `clear` {{Deprecated_Inline}}
  - : 指定换行后下一行文本开始位置。

## 注意

不要用 `<br>` 来增加文本之间的行间隔；应使用 [CSS](/zh-CN/docs/CSS) {{cssxref('margin')}} 属性或{{HTMLElement("p")}} 元素。

## 示例

```html
Mozilla Foundation<br />
1981 Landings Drive<br />
Building K<br />
Mountain View, CA 94043-0801<br />
USA
```

The HTML above outputs:

{{ EmbedLiveSample('示例', '100%', '90') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("address")}} element
- {{HTMLElement("p")}} element

{{HTMLSidebar}}
