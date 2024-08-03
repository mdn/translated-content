---
title: URL：toJSON() 方法
slug: Web/API/URL/toJSON
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`toJSON()`** 方法返回一个包含 URL 序列化版本的字符串，但实际上它似乎与 {{domxref("URL.toString()")}} 的效果相同。

## 语法

```js-nolint
toJSON()
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
url.toJSON(); // 应以字符串形式返回 URL
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `URL.prototype.toJSON` 的 Polyfill](https://github.com/zloirock/core-js#url-and-urlsearchparams)
