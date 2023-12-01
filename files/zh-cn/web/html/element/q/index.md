---
title: <q>
slug: Web/HTML/Element/q
---

{{HTMLSidebar}}

_HTML 引用标签_ (**\<q>**) 表示一个封闭的并且是短的行内引用的文本。这个标签是用来引用短的文本，所以请不要引入换行符; 对于长的文本的引用请使用 {{HTMLElement("blockquote")}} 替代。

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
   <td>{{domxref("HTMLQuoteElement")}}</td>
  </tr>
 </tbody>
</table>

> **备注：** 大多数现代浏览器，会为 \<q> 文本添加引号。旧浏览器可能需要使用 CSS 添加引号。IE、Edge 与 Firefox、Chrome 引号样式略有不同。

## 属性

\<q>标签拥有 [全局属性](/zh-CN/docs/HTML/Global_attributes).

- `cite`
  - : 这个属性的值是 URL，意在指出被引用的文本的源文档或者源信息。这个属性重在解释这个引用的参考或者是上下文。

## 示例

### HTML 内容

```html
<p>
  Everytime Kenny is killed, Stan will announce
  <q cite="http://en.wikipedia.org/wiki/Kenny_McCormick#Cultural_impact">
    Oh my God, you/they killed Kenny! </q
  >.
</p>
```

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- The {{HTMLElement("blockquote")}} element for long quotations.
- The {{HTMLElement("cite")}} element for source citations.
