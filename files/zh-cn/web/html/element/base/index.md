---
title: <base>：文档根 URL 元素
slug: Web/HTML/Element/base
---

{{HTMLSidebar}}

**HTML \<base> 元素** 指定用于一个文档中包含的所有相对 URL 的根 URL。一份中只能有一个 \<base> 元素。

一个文档的基本 URL，可以通过使用 {{domxref('document.baseURI')}} 的 JS 脚本查询。如果文档不包含 `<base>` 元素，`baseURI` 默认为 {{domxref("document.location.href")}}。

<table class="properties">
 <tbody>
  <tr>
   <th><a href="/zh-CN/docs/Web/HTML/Content_categories">内容类别</a></th>
   <td>元数据内容。</td>
  </tr>
  <tr>
   <th>合法的内容</th>
   <td>无，它是一个{{Glossary("empty element")}}</td>
  </tr>
  <tr>
   <th><dfn>标签省略</dfn></th>
   <td>该标签不能有结束标签。</td>
  </tr>
  <tr>
   <th>合法的父级</th>
   <td>任何不带有任何其他 {{HTMLElement("base")}} 元素的{{HTMLElement("head")}} 元素</td>
  </tr>
  <tr>
   <th>合法的 ARIA 角色</th>
   <td>无</td>
  </tr>
  <tr>
   <th>DOM 接口</th>
   <td>{{domxref("HTMLBaseElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该标签包含[全局属性](/zh-CN/docs/HTML/Global_attributes)。

如果指定了以下任一属性，这个元素**必须**在其他任何属性是 URL 的元素之前。例如：{{HTMLElement("link")}} 的 `href` 属性。

- `href`
  - : 用于文档中相对 URL 地址的基础 URL。允许绝对和相对 URL。
- `target`

  - : 默认浏览上下文的关键字或作者定义的名称，当没有明确目标的链接 {{HTMLElement("a")}} 或表单 {{HTMLElement("form")}} 导致导航被激活时显示其结果。该属性值定位到*浏览上下文*（例如选项卡，窗口或内联框 {{HTMLElement("iframe")}}）。以下的关键字指定特殊的意思：

    - `_self`: 载入结果到当前浏览上下文中。（该值是元素的默认值）。
    - `_blank`: 载入结果到一个新的未命名的浏览上下文。
    - `_parent`: 载入结果到父级浏览上下文（如果当前页是内联框）。如果没有父级结构，该选项的行为和`_self`一样。
    - `_top`: 载入结果到顶级浏览上下文（该浏览上下文是当前上下文的最顶级上下文）。如果没有父级，该选项的行为和\_self 一样。

## 使用说明

### 多个 `<base>` 元素

如果指定了多个 `<base>` 元素，只会使用第一个 `href` 和 `target` 值，其余都会被忽略。

### 页内锚

指向文档中某个片段的链接，例如 `<a href="#some-id">` 用 `<base>` 解析，触发对带有附加片段的基本 URL 的 HTTP 请求。

例如：给定 `<base href="https://example.com">`

以及此链接 `<a href="#anchor">Anker</a>`

链接指向 `https://example.com/#anchor`

### Open Graph

[Open Graph](https://ogp.me) 标签不接受 `<base>`，并且应该始终具有完整的绝对 URL。例如：

```plain
<meta property="og:image" content="https://example.com/thumbnail.jpg">
```

## 示例

```html
<base href="http://www.example.com/" />
<base target="_blank" />
<base target="_top" href="http://www.example.com/" />
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
