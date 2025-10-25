---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

**`Generator`** 对象由{{jsxref("Statements/function*", "生成器函数", "", 1)}}返回并且它符合[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)和[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)。

`Generator` 是隐藏类 {{jsxref("Iterator")}} 的子类。

{{InteractiveExample("JavaScript Demo: Expressions - function* expression", "taller")}}

```js interactive-example
const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"
```

## 构造函数

`Generator` 构造函数并不是全局可用的。`Generator` 的实例必须从[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)返回：

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

实际上，并没有对应 `Generator` 构造函数的 JavaScript 实体。只有一个隐藏对象，其是所有由生成器函数创建的对象所共享的原型对象。这个对象通常被风格化为 `Generator.prototype` 来使其看起来像是一个类，但它更恰当的称呼应该是 [`GeneratorFunction.prototype.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)，因为 `GeneratorFunction` 是一个实际的 JavaScript 实体。

## 实例属性

这些属性定义于 `Generator.prototype` 并由所有 `Generator` 实例所共享。

- {{jsxref("Object/constructor", "Generator.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `Generator` 实例，其初始值是 [`GeneratorFunction.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)。

    > [!NOTE]
    > `Generator` 对象不会存储创建它们的生成器函数的引用。

- `Generator.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"Generator"`。该属性被 {{jsxref("Object.prototype.toString()")}} 使用。

## 实例方法

_同时也从其父类 {{jsxref("Iterator")}} 继承实例方法_。

- {{jsxref("Generator.prototype.next()")}}
  - : 返回 {{jsxref("Operators/yield", "yield")}} 表达式生成的值。
- {{jsxref("Generator.prototype.return()")}}
  - : 类似于在当前的生成器主体的暂停位置插入 `return` 语句，该语句结束了生成器并且允许生成器与 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#finally_块) 块相组合时，执行任何清理任务。
- {{jsxref("Generator.prototype.throw()")}}
  - : 类似于在当前的生成器主体的暂停位置插入 `throw` 语句，该语句通知生成器有错误的情况并且允许其处理错误或执行清理并自行关闭。

## 示例

### 无穷迭代器

通过生成器函数，值只有在其被需要时才会进行计算。因此，生成器允许我们定义一个潜在的无穷数据结构。

```js
function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// …
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/function*", "function*")}}
- [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction")}}
- [迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
