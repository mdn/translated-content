---
title: URLSearchParams：size 属性
slug: Web/API/URLSearchParams/size
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`size`** 只读属性表示查询参数条目的总数。

## 值

一个数字，表示 {{domxref("URLSearchParams")}} 对象的查询参数条目的总数。

## 示例

### 获取查询参数条目的数量

你可以像这样获取查询参数条目的总数：

```js
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");
searchParams.size; // 4
```

请注意参数 `a` 出现了两次，但是 `size` 返回的数值是 4 不是 3。要获取唯一键的数量，你可以使用 {{jsxref("Set")}}，例如：

```js
[...new Set(searchParams.keys())].length; // 3
```

### 检查查询参数是否存在

`size` 属性用于检查是否存在任何查询参数：

```js
const url = new URL("https://example.com?foo=1&bar=2");

if (url.searchParams.size) {
  console.log("URL 具有查询参数！");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URL.searchParams")}}
- [`core-js` 中 `URLSearchParams` 的 Polyfill](https://github.com/zloirock/core-js#url-and-urlsearchparams)
