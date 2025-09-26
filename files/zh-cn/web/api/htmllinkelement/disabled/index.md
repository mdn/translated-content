---
title: HTMLLinkElement：disabled 属性
slug: Web/API/HTMLLinkElement/disabled
l10n:
  sourceCommit: 7c68e9bbf680784817e6415336c7dde5ae96360a
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`disabled`** 属性是一个布尔值，表示链接是否被禁用。该属性仅在样式表链接（`rel` 属性设置为 `stylesheet`）时有效。

如果在加载 HTML 时指定了 `disabled` 属性，则在页面加载期间不会加载该样式表。相反，只有当 `disabled` 属性被设置为 `false` 或被移除时，样式表才会被加载。使用 JavaScript 设置 `disabled` 属性会导致样式表从文档的 {{domxref("Document.styleSheets")}} 列表中移除。

它反映 {{HTMLElement("link")}} 元素的 `disabled` 属性。

## 值

一个布尔值。

## 示例

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  disabled
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.disabled); // 输出：true

// 设置 disabled 属性为 false 以启用样式表
el.disabled = false;
console.log(el.disabled); // 输出：false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLScriptElement.integrity")}}
- [子资源完整性](/zh-CN/docs/Web/Security/Subresource_Integrity)
