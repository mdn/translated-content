---
title: URLSearchParams：set() 方法
slug: Web/API/URLSearchParams/set
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`set()`** 方法用于设置和查询参数相关联的值。如果设置前已经存在多个匹配的值，此方法会删除重复的查询参数；如果查询参数不存在，则创建它。

## 语法

```js-nolint
set(name, value)
```

### 参数

- `name`
  - : 要设置的参数的键名。
- `value`
  - : 要设置的参数的值。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// 设置第三个参数。
params.set("baz", 3);
params.toString(); // "foo=1&bar=2&baz=3"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
