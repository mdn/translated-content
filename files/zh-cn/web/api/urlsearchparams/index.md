---
title: URLSearchParams
slug: Web/API/URLSearchParams
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`URLSearchParams`** 接口定义了一些实用的方法来处理 URL 的查询字符串。

一个实现了 `URLSearchParams` 的对象可以直接用在 {{jsxref("Statements/for...of", "for...of")}} 结构中，以键/值对在查询字符串中出现的顺序对它们进行迭代，例如下面两行是等价的：

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

## 构造函数

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : 返回一个 `URLSearchParams` 对象。

## 实例属性

- {{domxref("URLSearchParams.size", 'size')}} {{ReadOnlyInline}}
  - : 返回 `URLSearchParams` 对象中查询参数的总个数。

## 实例方法

- `URLSearchParams[Symbol.iterator]()`
  - : 返回一个 {{jsxref("Iteration_protocols","iterator")}}，允许以键/值对在查询字符串中出现的顺序迭代包含在该对象的键/值对。
- {{domxref("URLSearchParams.append()")}}
  - : 插入一个指定的键/值对作为新的查询参数。
- {{domxref("URLSearchParams.delete()")}}
  - : 从查询参数列表里删除指定的查询参数及其对应的值。
- {{domxref("URLSearchParams.entries()")}}
  - : 返回一个{{jsxref("Iteration_protocols","iterator")}}可以遍历所有键/值对的对象。
- {{domxref("URLSearchParams.forEach()")}}
  - : 通过回调函数迭代此对象中包含的所有值。
- {{domxref("URLSearchParams.get()")}}
  - : 获取指定查询参数的第一个值。
- {{domxref("URLSearchParams.getAll()")}}
  - : 获取指定查询参数的所有值，返回是一个数组。
- {{domxref("URLSearchParams.has()")}}
  - : 返回 {{jsxref("Boolean")}} 判断是否存在此查询参数。
- {{domxref("URLSearchParams.keys()")}}
  - : 返回{{jsxref("Iteration_protocols", "iterator")}} 此对象包含了键/值对的所有键名。
- {{domxref("URLSearchParams.set()")}}
  - : 设置一个查询参数的新值，假如原来有多个值将删除其他所有的值。
- {{domxref("URLSearchParams.sort()")}}
  - : 按键名排序。
- {{domxref("URLSearchParams.toString()")}}
  - : 返回查询参数组成的字符串，可直接使用在 URL 上。
- {{domxref("URLSearchParams.values()")}}
  - : 返回{{jsxref("Iteration_protocols", "iterator")}} 此对象包含了键/值对的所有值。

## 示例

```js
const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

// 迭代查询参数
for (let p of searchParams) {
  console.log(p);
}

console.log(searchParams.has("topic")); // true
console.log(searchParams.has("topic", "fish")); // false
console.log(searchParams.get("topic") === "api"); // true
console.log(searchParams.getAll("topic")); // ["api"]
console.log(searchParams.get("foo") === null); // true
console.log(searchParams.append("topic", "webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
console.log(searchParams.set("topic", "More webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
console.log(searchParams.delete("topic"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams"
```

```js
// 对象也可作为查询参数
const paramsObj = { foo: "bar", baz: "bar" };
const searchParams = new URLSearchParams(paramsObj);

console.log(searchParams.toString()); // "foo=bar&baz=bar"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // "bar"
```

### 重复的查询参数

```js
const paramStr = "foo=bar&foo=baz";
const searchParams = new URLSearchParams(paramStr);

console.log(searchParams.toString()); // "foo=bar&foo=baz"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // bar, 仅返回第一个值
console.log(searchParams.getAll("foo")); // ["bar", "baz"]
```

### 不完整的 URL 解析

`URLSearchParams` 构造函数*不会*解析完整 URL，但是如果字符串起始位置有 `?` 的话会被去除。

```js
const paramsString1 = "http://example.com/search?query=%40";
const searchParams1 = new URLSearchParams(paramsString1);

console.log(searchParams1.has("query")); // false
console.log(searchParams1.has("http://example.com/search?query")); // true

console.log(searchParams1.get("query")); // null
console.log(searchParams1.get("http://example.com/search?query")); // "@"（等价于 decodeURIComponent('%40')）

const paramsString2 = "?query=value";
const searchParams2 = new URLSearchParams(paramsString2);
console.log(searchParams2.has("query")); // true

const url = new URL("http://example.com/search?query=%40");
const searchParams3 = new URLSearchParams(url.search);
console.log(searchParams3.has("query")); // true
```

### 保留加号

`URLSearchParams` 的构造函数将加号（`+`）解释为空格，这可能会有问题。在下面的示例中，我们使用[十六进制转义序列](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#十六进制转义序列)模拟一个包含二进制数据（其中每个字节都携带信息）的字符串，该数据需要存储在 URL 查询参数中。请注意 `btoa()` 生成的编码字符串包含 `+`，而其并不会被 `URLSearchParams` 保留。

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A'，“+”被替换为空格

console.log(atob(binQuery) === rawData); // false
```

可以通过使用 {{jsxref("encodeURIComponent", "encodeURIComponent()")}} 对数据进行编解码来避免这种情况。

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'
const encodedBase64Data = encodeURIComponent(base64Data); // 'E%2BAXQB%2BA'

const searchParams = new URLSearchParams(`bin=${encodedBase64Data}`); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
```

### 空值 vs 无值

`URLSearchParams` 不区分 `=` 后面没有任何内容的参数和完全没有 `=` 的参数。

```js
const emptyVal = new URLSearchParams("foo=&bar=baz");
console.log(emptyVal.get("foo")); // 返回 ''
const noEquals = new URLSearchParams("foo&bar=baz");
console.log(noEquals.get("foo")); // 也返回 ''
console.log(noEquals.toString()); // 'foo=&bar=baz'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `URLSearchParams` 的 Polyfill](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- {{domxref("URL")}} 接口
- [谷歌开发者：使用 URLSearchParams 轻松操作 URL](https://developer.chrome.google.cn/blog/urlsearchparams)
