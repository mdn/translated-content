---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`AsyncFunction`** 对象为[异步函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)提供方法。在 JavaScript 中，每个异步函数实际上都是一个 `AsyncFunction` 对象。

注意，`AsyncFunction` *不是*全局对象。它可以通过以下代码获取：

```js
const AsyncFunction = async function () {}.constructor;
```

`AsyncFunction` 是 {{jsxref("Function")}} 的子类。

## 构造函数

- {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction()")}}
  - : 创建一个新的 `AsyncFunction` 对象。

## 实例属性

_同时也从它的父类 {{jsxref("Function")}} 继承实例属性_。

这些属性定义在 `AsyncFunction.prototype` 并且由所有 `AsyncFunction` 实例共享。

- {{jsxref("Object/constructor", "AsyncFunction.prototype.constructor")}}
  - : 用于创建实例对象的构造函数。对于 `AsyncFunction` 实例，初始值是 {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction")}} 构造函数。
- `AsyncFunction.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"AsyncFunction"`。该属性在 {{jsxref("Object.prototype.toString()")}} 中使用。

> **备注：** `AsyncFunction` 实例并没有 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性。

## 实例方法

_同时也从它的父类 {{jsxref("Function")}} 继承方法_。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`async function` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Function")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "函数", "", 1)}}
