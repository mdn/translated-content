---
title: URLSearchParams：URLSearchParams() 构造函数
slug: Web/API/URLSearchParams/URLSearchParams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`URLSearchParams()`** 构造函数创建并返回一个新的 {{domxref("URLSearchParams")}} 对象。

## 语法

```js-nolint
new URLSearchParams()
new URLSearchParams(options)
```

### 参数

- `options` {{optional_inline}}
  - : 可以是以下之一：
    - 一个字符串，会按 `application/x-www-form-urlencoded` 的格式进行解析。开头的 `'?'` 字符会被忽略。
    - 一系列基于字面量的字符串键值对，或者任何对象（例如 {{domxref("FormData")}} 对象），能提供一系列字符串对的[迭代器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#迭代器)对象。需要注意，{{domxref("File")}} 将被序列化为 `[object File]`，而不是它们的文件名（就像 `application/x-www-form-urlencoded` 格式中的那样）。
    - 一个由字符串键和字符串值组成的键值对对象。请注意，不支持嵌套。

### 返回值

一个 {{domxref("URLSearchParams")}} 实例。

## 示例

下面的例子展示了用各种传入的参数来创建一个 {{domxref("URLSearchParams")}} 对象。

```js
// 通过 url.search 检索参数，传递到构造函数
const url = new URL("https://example.com?foo=1&bar=2");
const params1 = new URLSearchParams(url.search);

// 直接从 URL 对象获取 URLSearchParams 对象
const params1a = url.searchParams;

// 传入字符串
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

// 传入一系列键值对
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);

// 传入记录
const params4 = new URLSearchParams({ foo: "1", bar: "2" });
```

这个示例展示了如何使用来自一个带有查询参数的 URL 构建的查询参数对象创建一个新的 URL。

```js
const url = new URL("https://example.com/?a=hello&b=world");

console.log(url.href);
// https://example.com/?a=hello&b=world

console.log(url.origin);
// https://example.com

const add_params = {
  c: "a",
  d: new String(2),
  e: false.toString(),
};

const new_params = new URLSearchParams([
  ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
  ...Object.entries(add_params), // [["c","a"],["d","2"],["e","false"]]
]).toString();
console.log(new_params);
// a=hello&b=world&c=a&d=2&e=false

const new_url = new URL(`${url.origin}${url.pathname}?${new_params}`);

console.log(new_url.href);
// https://example.com/?a=hello&b=world&c=a&d=2&e=false

// 在这里，它是一个接受 (URL, Record<string, string>) 的函数
const addSearchParams = (url, params = {}) =>
  new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
      ...Array.from(url.searchParams.entries()),
      ...Object.entries(params),
    ])}`,
  );
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
