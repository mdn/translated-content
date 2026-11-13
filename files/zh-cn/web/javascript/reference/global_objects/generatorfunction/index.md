---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

**`GeneratorFunction`** 对象为[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)提供了方法。在 JavaScript 中，每个生成器函数实际上都是一个 `GeneratorFunction` 对象。

请注意，`GeneratorFunction` *不是*全局对象。可以通过以下代码来获取它：

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` 是 {{jsxref("Function")}} 的子类。

{{InteractiveExample("JavaScript Demo: GeneratorFunction()", "taller")}}

```js interactive-example
const GeneratorFunction = function* () {}.constructor;

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"
```

## 构造函数

- {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction()")}}
  - : 创建一个新的 `GeneratorFunction` 对象。

## 实例属性

_也从其父类 {{jsxref("Function")}} 继承实例属性_。

这些属性定义于 `GeneratorFunction.prototype` 并由所有 `GeneratorFunction` 实例所共享。

- {{jsxref("Object/constructor", "GeneratorFunction.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `GeneratorFunction` 实例，其初始值是 {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction")}} 构造函数。
- `GeneratorFunction.prototype.prototype`
  - : 所有生成器函数共享同一个 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性，即 [`Generator.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)。每个生成器函数实例也有自己的 `prototype` 属性。当生成器函数被调用时，返回的生成器对象从生成器函数继承 `prototype` 属性，而该属性又继承自 `GeneratorFunction.prototype.prototype`。
- `GeneratorFunction.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"GeneratorFunction"`。该属性被 {{jsxref("Object.prototype.toString()")}} 使用。

## 实例方法

_从其父类 {{jsxref("Function")}} 继承实例方法_。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Functions", "函数", "", 1)}}
