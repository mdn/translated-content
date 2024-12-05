---
title: Headers：Headers() 构造函数
slug: Web/API/Headers/Headers
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

`Headers()` 构造方法创建一个新的 {{domxref("Headers")}} 对象。

## 语法

```js-nolint
new Headers()
new Headers(init)
```

### 参数

- `init` {{optional_inline}}
  - : 通过一个包含任意 [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)的对象来预设你的 `Headers`。可以是一个带有 {{jsxref("String")}} 值的简单对象字面量、一个名称—值对（每个队组均为二元字符串数组）的数组，或者是一个已存在的 `Headers` 对象。对于最后一种情况，新的 `Headers` 对象从已存在的 `Headers` 对象中拷贝数据。

## 示例

创建一个空的 `Headers` 对象：

```js
const myHeaders = new Headers(); // 目前为空
```

你可以使用 {{domxref("Headers.append")}} 方法添加一个标头：

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // 返回“image/jpeg”
```

或者你可以在 `Headers` 对象创建时添加多个标头。在下面的片段中，我们通过向构造函数传递一个 init 对象作为参数来创建一个新的 {{domxref("Headers")}} 对象：

```js
const httpHeaders = {
  "Content-Type": "image/jpeg",
  "X-My-Custom-Header": "Zeke are cool",
};
const myHeaders = new Headers(httpHeaders);
```

你可以通过传入一个已存在的 `Headers` 对象作为 init 对象来创建另一个新的 `Headers` 对象：

```js
const secondHeadersObj = new Headers(myHeaders);
secondHeadersObj.get("Content-Type"); // 会返回“image/jpeg”——其继承自第一个 headers 对象
```

你还可以在创建 `Headers` 对象时使用一个二维数组来添加多个具有相同值的标头。在下面的片段中，我们通过向构造函数传递一个 init 数组作为参数来创建一个新的、具有多个 `Set-Cookie` 标头的 {{domxref("Headers")}} 对象：

```js
const headers = [
  ["Set-Cookie", "greeting=hello"],
  ["Set-Cookie", "name=world"],
];
const myHeaders = new Headers(headers);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
