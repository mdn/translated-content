---
title: URL：protocol 属性
slug: Web/API/URL/protocol
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`protocol`** 属性是代表 URL 的协议方案的字符串，包括最后的 `':'`。

## 值

字符串。

## 示例

```js
const url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // 输出 "https:"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
