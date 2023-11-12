---
title: <param>
slug: Web/HTML/Element/param
---

{{HTMLSidebar}}{{Deprecated_Header}}

## 概要

**HTML `<param>元素`**为{{ HTMLElement("object") }}元素定义参数

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></dfn></th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row"><dfn>允许内容</dfn></th>
   <td>不允许，它是一个空元素（{{Glossary("empty element")}}）。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>标签省略</dfn></th>
   <td>由于它是一个 void 元素，所以开始标签必须出现，而结束标签必须不出现。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>允许的父级元素</dfn></th>
   <td>任何<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Flow_content#Flow_content">以下内容</a>（<a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a>）都可以在{{ HTMLElement("object") }}元素的前面作为它的父元素。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>DOM 接口</dfn></th>
   <td>{{domxref("HTMLParamElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素包含 [全局属性](/zh-CN/docs/HTML/Global_attributes).

- `name`
  - : 参数的名字。
- `type` {{Deprecated_Inline}}
  - : 仅当 valuetype 设置为“ref”时才使用。根据 URI 中给定的数据确定 MIME 类型。
- `value`
  - : 确定参数的值。
- `valuetype` {{Deprecated_Inline}}

  - : 确定参数的类型。可选值如下：

    - data: 默认值。该值作为字符串变量传递给对象实例。
    - ref: 该值是存储运行时变量的资源的 URI。
    - object: 同一页面（document）中另一个{{HTMLElement("object")}}的 ID。

## 示例

请在{{ HTMLElement("object") }}页面中查看\<param>的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{ HTMLElement("object") }}

{{HTMLSidebar}}
