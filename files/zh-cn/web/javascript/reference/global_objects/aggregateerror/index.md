---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
---

{{JSRef}}

**`AggregateError`** 对象代表了包装了多个错误对象的单个错误对象。当一个操作需要报告多个错误时，例如 {{JSxRef("Promise.any()")}}，当传递给它的所有承诺都被拒绝时，就会抛出该错误。

`AggregateError` 是 {{jsxref("Error")}} 的子类。

## 构造函数

- {{jsxref("Global_Objects/AggregateError/AggregateError", "AggregateError()")}}
  - : 创建一个新的 `AggregateError` 对象

## 实例属性

_从父类 {{jsxref("Error")}} 中继承实例属性。_

以下属性在 `AggregateError.prototype` 上定义，并由所有 `AggregateError` 实例共享。

- {{jsxref("Object/constructor", "AggregateError.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `AggregateError` 实例来说，初始值为 {{jsxref("AggregateError/AggregateError", "AggregateError")}} 构造函数。
- {{jsxref("Error/name", "AggregateError.prototype.name")}}
  - : 代表了错误类型的名称，对于 `AggregateError.prototype.name` 来说，初始值为 `"AggregateError"`。

这些属性是每个 `AggregateError` 实例的自有属性。

- `errors`
  - : 一个数组，基本上反映了 `AggregateError` 实例化时使用的迭代器；例如，如果 `AggregateError` 是用 {{JSxRef("AggregateError/AggregateError", "AggregateError()")}} 构造函数创建的，则作为第一个参数传递给构造函数的任何迭代器生成的数组。

## 实例方法

_从父类 {{jsxref("Error")}} 中继承实例方法。_

## 示例

### 捕获一个 AggregateError

```js
Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});
```

### 创建一个 AggregateError

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
- {{JSxRef("Error")}}
- {{JSxRef("Promise.any")}}
