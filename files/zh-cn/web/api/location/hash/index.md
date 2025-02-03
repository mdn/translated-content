---
title: Location：hash 属性
slug: Web/API/Location/hash
l10n:
  sourceCommit: 6033c369db35bf1df34430cc375705e2d959fc0b
---

{{ APIRef("Location") }}

{{domxref("Location")}} 接口的 **`hash`** 属性返回一个字符串，其中包含一个 `'#'`，后跟 URL 的片段标识符——URL 试图指向的页面上的 ID。

该片段未经过{{Glossary("Percent-encoding", "百分号编码")}}。如果 URL 没有片段标识符，此属性将包含一个空字符串 `""`。

## 值

字符串。

## 示例

假设用户已导航至 `https://example.org#examples`，以下代码将会打印 `#examples`：

```js
const result = location.hash;
console.log(result);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
