---
title: <bdi>
slug: Web/HTML/Element/bdi
---

{{HTMLSidebar}}

**HTML** 双向隔离元素（**`<bdi>`**）告诉浏览器的双向算法将其包含的文本与周围的文本隔离，当网站动态插入一些文本且不知道所插入文本的方向性时，此功能特别有用。

{{EmbedInteractiveExample("pages/tabbed/bdi.html", "tabbed-standard")}}

尽管同样的显示效果可以通过使用 CSS 规则 {{cssxref("unicode-bidi")}}：隔离{{HTMLElement("span")}}或者其他文本格式化元素，但语义信息只能通过\<bdi>元素传递。特别是，当浏览器允许忽略 CSS 样式时，在这种情况下，使用\<bdi>仍然可以保证文本正确显示，而使用 CSS 样式来传递语义时就显得毫无用处。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parent elements</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

如同其他 HTML 元素一样，它包含[全局属性](/zh-CN/docs/HTML/Global_attributes)，但是有一些语义上的细微差别：**dir**属性不继承父元素。如果没有设置，默认值即为 auto，以便浏览器根据元素内容决定元素内容的方向。

## 示例

```html
<p dir="ltr">
  This arabic word <bdi>ARABIC_PLACEHOLDER</bdi> is automatically displayed
  right-to-left.
</p>
```

### 结果

This arabic word REDLOHECALP_CIBARA is automatically displayed right-to-left.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关元素：{{HTMLElement("bdo")}}
- 相关属性：{{cssxref("direction")}}, {{cssxref("unicode-bidi")}}
