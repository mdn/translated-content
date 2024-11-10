---
title: Location：toString() 方法
slug: Web/API/Location/toString
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

{{domxref("Location")}} 接口的 **`toString()`** {{Glossary("stringifier", "字符串化")}}方法返回一个包含整个 URL 的字符串。它是 {{domxref("Location.href")}} 的只读版本。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

表示对象的 URL 的字符串。

## 示例

```js
// 假设这段代码在 https://example.com/path?search#hash 上执行
const result = window.location.toString(); // 返回：'https://example.com/path?search#hash'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
