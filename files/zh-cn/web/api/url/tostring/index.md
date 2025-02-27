---
title: URL：toString() 方法
slug: Web/API/URL/toString
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`toString()`** 方法返回一个包含整个 URL 的字符串。它实际上是 {{domxref("URL.href")}} 的只读版本。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

字符串。

## 示例

```js
const url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/toString",
);
url.toString(); // 应以字符串形式返回 URL
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
