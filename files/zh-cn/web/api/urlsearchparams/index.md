---
title: URLSearchParams
slug: Web/API/URLSearchParams
---

{{ApiRef("URL API")}}

**`URLSearchParams`** 接口定义了一些实用的方法来处理 URL 的查询字符串。

一个实现了 `URLSearchParams` 的对象可以直接用在 {{jsxref("Statements/for...of", "for...of")}} 结构中，例如下面两行是相等的：

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

{{availableinworkers}}

## 构造函数

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : 返回一个 `URLSearchParams` 对象。

## 方法

该接口不继承任何属性。

- {{domxref("URLSearchParams.append()")}}
  - : 插入一个指定的键/值对作为新的搜索参数。
- {{domxref("URLSearchParams.delete()")}}
  - : 从搜索参数列表里删除指定的搜索参数及其对应的值。
- {{domxref("URLSearchParams.entries()")}}
  - : 返回一个{{jsxref("Iteration_protocols","iterator")}}可以遍历所有键/值对的对象。
- {{domxref("URLSearchParams.get()")}}
  - : 获取指定搜索参数的第一个值。
- {{domxref("URLSearchParams.getAll()")}}
  - : 获取指定搜索参数的所有值，返回是一个数组。
- {{domxref("URLSearchParams.has()")}}
  - : 返回 {{jsxref("Boolean")}} 判断是否存在此搜索参数。
- {{domxref("URLSearchParams.keys()")}}
  - : 返回{{jsxref("Iteration_protocols", "iterator")}} 此对象包含了键/值对的所有键名。
- {{domxref("URLSearchParams.set()")}}
  - : 设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。
- {{domxref("URLSearchParams.sort()")}}
  - : 按键名排序。
- {{domxref("URLSearchParams.toString()")}}
  - : 返回搜索参数组成的字符串，可直接使用在 URL 上。
- {{domxref("URLSearchParams.values()")}}
  - : 返回{{jsxref("Iteration_protocols", "iterator")}} 此对象包含了键/值对的所有值。

## 示例

```js
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```

### Gotchas

`URLSearchParams` 构造函数*不会*解析完整 URL，但是如果字符串起始位置有 `?` 的话会被去除。

```js
var paramsString1 = "http://example.com/search?query=%40";
var searchParams1 = new URLSearchParams(paramsString1);

searchParams1.has("query"); // false
searchParams1.has("http://example.com/search?query"); // true

searchParams1.get("query"); // null
searchParams1.get("http://example.com/search?query"); // "@" (equivalent to decodeURIComponent('%40'))

var paramsString2 = "?query=value";
var searchParams2 = new URLSearchParams(paramsString2);
searchParams2.has("query"); // true

var url = new URL("http://example.com/search?query=%40");
var searchParams3 = new URLSearchParams(url.search);
searchParams3.has("query"); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{domxref("URL")}} interface.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
