---
title: <param>：对象形式参数元素
slug: Web/HTML/Reference/Elements/param
l10n:
  sourceCommit: 0af6781c93ffe3d011a060b4e517187cf780e93a
---

{{Deprecated_Header}}

**`<param>`** [HTML](/zh-CN/docs/Web/HTML) 元素为 {{HTMLElement("object")}} 元素定义形式参数。

> [!NOTE]
> 使用带有 [`data`](/zh-CN/docs/Web/HTML/Reference/Elements/object#data) 属性的 {{HTMLElement("object")}} 元素来设置外部资源的 URL。

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `name` {{deprecated_inline}}
  - : 形式参数名称。
- `value` {{deprecated_inline}}
  - : 形式参数指定值。
- `type` {{deprecated_inline}}
  - : 仅在 `valuetype` 设置为 `ref` 时使用。指定在 value 指定的 URI 中找到的值的 MIME 类型。
- `valuetype` {{deprecated_inline}}
  - : 指定 `value` 属性类型。可能的值包括：
    - `data`：默认值。该值以字符串形式传递给对象实现。
    - `ref`：该值是存储运行时值的资源的 URI。
    - `object`：在同一文档中另一个 {{HTMLElement("object")}} 元素的 ID。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无；它是{{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，且不能有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        在任何<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >之前的 {{HTMLElement("object")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLParamElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("object")}}
