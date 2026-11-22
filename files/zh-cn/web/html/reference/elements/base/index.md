---
title: "`<base>` HTML 文档基础 URL 元素"
short-title: <base>
slug: Web/HTML/Reference/Elements/base
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<base>`** [HTML](/zh-CN/docs/Web/HTML) 元素指定用于文档中所有*相对* URL 的基础 URL。文档中只能有一个 `<base>` 元素。

脚本可以通过 {{domxref('Node.baseURI')}} 访问文档所使用的基础 URL。如果文档中没有 `<base>` 元素，则 `baseURI` 默认为 {{domxref("location.href")}}。

## 属性

该元素的属性包括[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

> [!WARNING]
> `<base>` 元素必须具有 `href` 属性、`target` 属性或同时具有两者。
> 如果指定了其中至少一个属性，则 `<base>` 元素**必须**位于属性值为 URL 的其他元素之前，例如 {{HTMLElement("link")}} 的 `href` 属性。

- `href`
  - : 用于文档中相对 URL 的基础 URL。允许使用绝对 URL 和相对 URL。不允许使用 [`data:`](/zh-CN/docs/Web/URI/Reference/Schemes/data) 和 [`javascript:`](/zh-CN/docs/Web/URI/Reference/Schemes/javascript) URL。
- `target`
  - : 作为默认{{Glossary("browsing context", "浏览上下文")}}的**关键字**或**作者定义的名称**，用于显示从没有显式 `target` 属性的 {{HTMLElement("a")}}、{{HTMLElement("area")}} 或 {{HTMLElement("form")}} 元素导航到的结果。以下关键字具有特殊含义：
    - `_self`（默认）：在当前浏览上下文中显示结果。
    - `_blank`：在新的未命名浏览上下文中显示结果。
    - `_parent`：如果当前页面位于框架内，则在当前浏览上下文的父级浏览上下文中显示结果。如果没有父级，则行为与 `_self` 相同。
    - `_top`：在最顶层的浏览上下文（即作为当前浏览上下文的祖先且没有父级的浏览上下文）中显示结果。如果没有父级，则行为与 `_self` 相同。

## 使用说明

### 多个 \<base> 元素

如果使用了多个 `<base>` 元素，则只会遵循第一个 `href` 和第一个 `target`，其他所有元素都会被忽略。

### 页面内锚点

指向文档中片段的链接（例如 `<a href="#some-id">`）会使用 `<base>` 进行解析，从而触发附加该片段的、指向基础 URL 的 HTTP 请求。

例如，给定 `<base href="https://example.com/">` 和以下链接：`<a href="#anchor">To anchor</a>`。该链接指向 `https://example.com/#anchor`。

### target 不能包含 ASCII 换行符、制表符或 <

如果 [`target`](#target) 属性包含 ASCII 换行符、制表符或 `<` 字符，则该值会被重置为 `_blank`。这是为了防止悬空标记注入攻击（dangling markup injection），这是一种无需脚本的攻击：将未闭合的 `target` 属性注入页面，从而捕获其后的任何文本，直到浏览器遇到可闭合该属性的字符。

### Open Graph

[Open Graph](https://ogp.me/) 标签不识别 `<base>`，并且应始终使用完整的绝对 URL。例如：

```html
<meta property="og:image" content="https://example.com/thumbnail.jpg" />
```

## 示例

```html
<base href="https://www.example.com/" />
<base target="_blank" />
<base target="_top" href="https://example.com/" />
```

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories">内容分类</a>
      </th>
      <td>元数据内容。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无；它是一个{{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，且不能有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        不包含另一个 <code>&lt;base&gt;</code> 元素的 {{HTMLElement("head")}}。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">没有对应的角色</a>
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>不允许任何 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
