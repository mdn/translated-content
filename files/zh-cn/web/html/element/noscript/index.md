---
title: <noscript>
slug: Web/HTML/Element/noscript
---

{{HTMLRef}}

如果页面上的脚本类型不受支持或者当前在浏览器中关闭了脚本，则在 **HTML \<noscript> 元素**中定义脚本未被执行时的替代内容。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Metadata_content">Metadata content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>
   <p>当脚本被禁用并且它是 {{HTMLElement("head")}}元素的后代时：以下顺序任意，零个或者多个{{HTMLElement("link")}}元素，零个或者多个{{HTMLElement("style")}}元素，零个或者多个{{HTMLElement("meta")}}元素。</p>

   <p>当脚本被禁用并且它不是 {{HTMLElement("head")}} 元素的子元素时：任何 transparent content 都可以，但是在它的后代中必须没有 <code>&lt;noscript&gt;</code>元素。</p>

   <p>否则：flow content 或 phrasing content。</p>
   </td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>
    <p>不允许，开始标签和结束标签都不能省略。</p>
   </td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>
    <p>如果没有根元素 <code>&lt;noscript&gt;</code>，或者在{{HTMLElement("head")}}元素中（仅用于 HTML 文档）也没有根元素 <code>&lt;noscript&gt;</code>，允许任何 <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a> 元素。</p>
   </td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素只包含 [全局属性](/zh-CN/docs/HTML/Global_attributes).

## 示例

```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="http://www.mozilla.com/">External Link</a>
</noscript>
<p>Rocks!</p>
```

### 允许脚本时的结果

Rocks!

### 禁用脚本时的结果

[External Link](http://www.mozilla.com/)

Rocks!

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
