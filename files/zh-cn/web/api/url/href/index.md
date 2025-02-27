---
title: URL：href 属性
slug: Web/API/URL/href
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`href`** 属性是包含整个 URL 的字符串。

## 值

字符串。

## 示例

```js
const url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/href",
);
console.log(url.href); // 输出：'https://developer.mozilla.org/zh-CN/docs/Web/API/URL/href'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
