---
title: URL：hostname 属性
slug: Web/API/URL/hostname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`hostname`** 属性是一个包含 URL 的{{glossary("domain name", "域名")}}的字符串。

## 值

字符串。

## 示例

```js
const url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // 输出：'developer.mozilla.org'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
