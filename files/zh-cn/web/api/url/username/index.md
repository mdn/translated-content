---
title: URL：username 属性
slug: Web/API/URL/username
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`username`** 属性是一个表示在域名前指定的用户名的字符串。

## 值

字符串。

## 示例

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/zh-CN/docs/Web/API/URL/username",
);
console.log(url.username); // 输出“anonymous”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
