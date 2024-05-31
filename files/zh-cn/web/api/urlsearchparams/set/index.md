---
title: URLSearchParams：set() 方法
slug: Web/API/URLSearchParams/set
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}}接口的 **`set()`** 方法用于设置和查询参数相关联的值。如果设置前已经存在匹配的值，该方法会删除多余的，如果将要设置的值不存在，则创建它。

## 语法

```js-nolint
set(name, value)
```

### 参数

- 键名
  - : 将要设置的参数的键值名。
- 参数值
  - : 所要设置的参数值。

### 返回值

None ({{jsxref("undefined")}})。

## 例子

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// 设置第三个参数
params.set("baz", 3);
params.toString(); // "foo=1&bar=2&baz=3"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
