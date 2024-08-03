---
title: URLSearchParams：getAll() 方法
slug: Web/API/URLSearchParams/getAll
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`getAll()`** 方法以数组的形式返回与指定查询参数对应的所有值。

## 语法

```js-nolint
getAll(name)
```

### 参数

- `name`
  - : 要返回的参数的名称。

### 返回值

一个字符串的数组，如果没有找到给定参数的值，则其可以是空的。

## 示例

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// 为 foo 添加第二个参数
params.append("foo", 4);

console.log(params.getAll("foo")); // 输出 ["1", "4"]。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
