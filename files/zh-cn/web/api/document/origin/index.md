---
title: Document.origin
slug: Web/API/Document/origin
---

{{APIRef("DOM")}}{{deprecated_header}}

**`Document.origin`** （只读属性）返回文档的来源。通常该属性与 `document.defaultView.location.origin` 相等。

## 示例

```js
var origin = document.origin;
// On this page, returns:'https://developer.mozilla.org'

var origin = document.origin;
// On "about:blank", returns:'null'

var origin = document.origin;
// On "data:text/html,<b>foo</b>", returns:'null'
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URLUtils.origin")}} 属性。
