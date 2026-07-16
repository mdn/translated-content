---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

**`AsyncGenerator`** 对象由{{jsxref("Statements/async_function*", "异步生成器函数", "", 1)}}返回，并且它符合[异步可迭代协议和异步迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)。

异步生成器方法总是产生 {{jsxref("Promise")}} 对象。

`AsyncGenerator` 是隐藏类 {{jsxref("AsyncIterator")}} 的子类。

{{InteractiveExample("JavaScript Demo: Expressions - Async Function Asterisk", "taller")}}

```js interactive-example
async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

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

`AsyncGenerator` 构造函数并非全局可用的。`AsyncGenerator` 的实例必须从[异步生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)返回。

```js
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res.value)); // 1
asyncGen.next().then((res) => console.log(res.value)); // 2
asyncGen.next().then((res) => console.log(res.value)); // 3
```

实际上，并没有对应 `AsyncGenerator` 构造函数的 JavaScript 实体。只有一个隐藏对象，其是所有由异步生成器函数创建的对象所共享的原型对象。这个对象通常被风格化为 `AsyncGenerator.prototype` 来使其看起来像是一个类，但它更恰当的称呼应该是 [`AsyncGenerator.prototype.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction)，因为 `AsyncGeneratorFunction` 是一个实际的 JavaScript 实体。

## 实例属性

这些属性定义在 `AsyncGenerator.prototype` 并由所有 `AsyncGenerator` 实例共享。

- {{jsxref("Object/constructor", "AsyncGenerator.prototype.constructor")}}
  - : 用于创建实例对象的构造函数。对于 `AsyncGenerator` 实例，初始值是 [`AsyncGeneratorFunction.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction)。

    > [!NOTE]
    > `AsyncGenerator` 对象并不会存储创建它们的异步生成器函数的引用。

- `AsyncGenerator.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"AsyncGenerator"`。该属性在 {{jsxref("Object.prototype.toString()")}} 中使用。

## 实例方法

_也从其父类 {{jsxref("AsyncIterator")}} 继承实例方法_。

- {{jsxref("AsyncGenerator.prototype.next()")}}
  - : 返回 {{jsxref("Promise")}}，它将通过 {{jsxref("Operators/yield", "yield")}} 表达式产生的给定值兑现。
- {{jsxref("AsyncGenerator.prototype.return()")}}
  - : 就好像在生成器的暂停位置插入一个 `return` 语句，这将结束生成器并允许生成器执行任何清理任务，尤其是与 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) 块结合的时候。
- {{jsxref("AsyncGenerator.prototype.throw()")}}
  - : 就好像在生成器的暂停位置插入一个 `throw` 语句，这将通知生成器错误的状况并允许去处理错误，或者执行清理操作并关闭它自己。

## 示例

### 迭代异步生成器

以下示例将遍历迭代异步生成器，以递减的时间间隔将值 1-6 打印到控制台。注意，每次产生 Promise 的时候，它会在 `for await...of` 循环中自动地兑现。

```js
// 异步任务。假设它在实践中做了一些更有用的事情。
function delayedValue(time, value) {
  return new Promise((resolve /*, reject*/) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* generate() {
  yield delayedValue(2000, 1);
  yield delayedValue(100, 2);
  yield delayedValue(500, 3);
  yield delayedValue(250, 4);
  yield delayedValue(125, 5);
  yield delayedValue(50, 6);
  console.log("全部完成！");
}

async function main() {
  for await (const value of generate()) {
    console.log("值", value);
  }
}

main().catch((e) => console.error(e));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/function*", "function*", "", 1)}}
- {{jsxref("Statements/async_function*", "async function*", "", 1)}}
- [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction", "生成器函数", "", 1)}}
- {{jsxref("AsyncGeneratorFunction", "异步生成器函数", "", 1)}}
- [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)指南
