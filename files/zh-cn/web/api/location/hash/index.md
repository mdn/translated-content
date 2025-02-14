---
title: Location：hash 属性
slug: Web/API/Location/hash
l10n:
  sourceCommit: 6033c369db35bf1df34430cc375705e2d959fc0b
---

{{ APIRef("Location") }}

{{domxref("Location")}} 接口的 **`hash`** 属性是一个字符串，包含一个 `"#"` 后跟位置 URL 的片段标识符。如果 URL 没有片段标识符，则该属性的值为空字符串 `""`。

请参阅 {{domxref("URL.hash")}} 以获取更多信息。

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
