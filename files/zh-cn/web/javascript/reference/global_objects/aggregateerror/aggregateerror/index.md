---
title: AggregateError() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
---

{{JSRef}}

**`AggregateError()`** 构造函数创建了一个包装了多个错误对象的单个错误对象。

## 语法

```js-nolint
new AggregateError(errors)
new AggregateError(errors, message)
new AggregateError(errors, message, options)

AggregateError(errors)
AggregateError(errors, message)
AggregateError(errors, message, options)
```

> **备注：** 调用 `AggregateError()` 可以使用或不使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)，两种方法都会创建一个新的 `AggregateError` 实例。

### 参数

- `errors`
  - : 一系列错误对象，实际上可能不是 {{JSxRef("Error")}} 的实例。
- `message` {{optional_inline}}
  - : 一个可选的对错误集合的可读描述。
- `options` {{optional_inline}}
  - : 一个具有以下属性的对象：
    - `cause` {{optional_inline}}
      - : 表示错误的具体原因的属性。当捕捉并重新抛出一个带有更具体或有用的错误信息的错误时，这个属性可以用来传递原始错误。

## 示例

### 创建 AggregateError

```js
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `AggregateError` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-promise)
- {{jsxref("Promise.any")}}
