---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
---

{{JSRef}}

**`Generator`** 对象由{{JSxRef("Statements/function*", "生成器函数", "", 1)}}返回并且它符合[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)和[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)。

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html", "taller")}}

## 构造函数

`Generator` 构造函数并不是全局可用。`Generator` 的实例必须从[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)返回：

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

## 实例属性

- `Generator.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"Generator"`。该属性被 {{jsxref("Object.prototype.toString()")}} 使用。

## 实例方法

- {{JSxRef("Generator.prototype.next()")}}
  - : 返回 {{JSxRef("Operators/yield", "yield")}} 表达式生成的值。
- {{JSxRef("Generator.prototype.return()")}}
  - : 类似于在当前的生成器主体的暂停位置插入 `return` 语句，该语句结束了生成器并且允许生成器与 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) 块相组合时，执行任何清理任务。
- {{JSxRef("Generator.prototype.throw()")}}
  - : 类似于在当前的生成器主体的暂停位置插入 `throw` 语句，该语句通知生成器有错误的情况并且允许其处理错误或执行清理并自行关闭。

## 示例

### 无穷迭代器

该生成器函数，在需要之前不会计算值。因此，生成器允许我们定义一个潜在的无穷数据结构。

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

- {{JSxRef("Statements/function*", "function*")}}
- [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- {{JSxRef("GeneratorFunction")}}
- [迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
