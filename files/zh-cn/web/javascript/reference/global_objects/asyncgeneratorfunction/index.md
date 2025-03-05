---
title: AsyncGeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`AsyncGeneratorFunction`** 对象为[异步生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)提供方法。在 JavaScript 中，每个异步生成器函数实际上都是一个 `AsyncGeneratorFunction` 对象。

注意，`AsyncGeneratorFunction` *不是*全局对象。它可以通过以下代码获取：

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

`AsyncGeneratorFunction` 是 {{jsxref("Function")}} 的一个子类。

{{InteractiveExample("JavaScript Demo: AsyncGeneratorFunction()", "taller")}}

```js interactive-example
const AsyncGeneratorFunction = async function* () {}.constructor;

const foo = new AsyncGeneratorFunction(`
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
`);

let str = "";

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## 构造函数

- {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction()")}}
  - : 创建一个新的 `AsyncGeneratorFunction` 对象。

## 实例属性

_同时也从它的父类 {{jsxref("Function")}} 继承实例属性_。

这些属性定义在 `AsyncGeneratorFunction.prototype` 并且由所有 `AsyncGeneratorFunction` 实例共享。

- {{jsxref("Object/constructor", "AsyncGeneratorFunction.prototype.constructor")}}
  - : 用于创建实例对象的构造函数。对于 `AsyncGeneratorFunction` 实例，初始值是 {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction")}} 构造函数。
- `AsyncGeneratorFunction.prototype.prototype`
  - : 所有异步生成器函数共享相同的 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性，即 [`AsyncGenerator.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)。每个异步生成器函数实例也都有它自己的 `prototype` 属性。当调用异步生成器函数时，返回的异步生成器对象继承自异步生成器函数的 `prototype` 属性，而 property 属性也继承自 `AsyncGeneratorFunction.prototype.prototype`。
- `AsyncGeneratorFunction.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"AsyncGeneratorFunction"`。该属性在 {{jsxref("Object.prototype.toString()")}} 中使用。

## 实例方法

_同时也从它的父类 {{jsxref("Function")}} 继承方法_。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`async function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "函数", "", 1)}}
