---
title: URL：password 属性
slug: Web/API/URL/password
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`password`** 属性是一个包含域名之前指定的密码的字符串。

如果未设置 {{domxref("URL.username", "username")}} 属性而直接设置该属性，将导致静默失败。

## 值

字符串

## 示例

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/zh-CN/docs/Web/API/URL/password",
);
console.log(url.password); // 输出“flabada”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
