---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
---

> {{JSRef}}{{SeeCompatTable}}

**`AggregateError`**当多个错误 ​​ 需要包装在一个错误中时，该对象表示一个错误。

## 语法

```plain
new AggregateError(errors[, message])
```

### 参数

- `errors`
  - : 错误的描述，默认为空。
- `message`{{Optional_Inline}}
  - : AggregateError 错误的提示信息。

## 描述

一个`AggregateError`当需要由操作报告多个错误被抛出，例如通过[`Promise.any()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)，在传递给它的所有[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)拒绝。

## 属性

- `AggregateError.prototype`
  - : `AggregateError`的原型

## AggregateError 实例

### 实例属性

- `AggregateError.prototype.constructor`
  - : 指定创建实例原型的函数。
- {{JSxRef("Error.prototype.message", "AggregateError.prototype.message")}}
  - : 错误消息，默认为`""`。
- {{JSxRef("Error.prototype.name", "AggregateError.prototype.name")}}
  - : 错误名称，默认为`"AggregateError"`。

## 示例

### 捕获一个 AggregateError

```js
Promise.any([
  Promise.reject(new Error("some error")),
]).catch(e => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "All Promises rejected"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
});
```

### 创建一个 AggregateError

```js
try {
  throw new AggregateError([
    new Error("some error"),
  ], 'Hello');
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{JSxRef("Error")}}
