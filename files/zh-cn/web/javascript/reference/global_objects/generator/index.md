---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
---

{{JSRef}}

**`Generator`** 对象通过{{JSxRef("Statements/function*", "生成器函数", "", 1)}}返回并且它符合[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)和[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)。

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
  - : [`@@toStringTag`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"Generator"`。该属性在 {{jsxref("Object.prototype.toString()")}} 使用。

## 实例方法

- {{JSxRef("Generator.prototype.next()")}}
  - : 返回 {{JSxRef("Operators/yield", "yield")}} 表达式生成的值。
- {{JSxRef("Generator.prototype.return()")}}
  - : 类似于在当前的生成器主体的暂停位置插入 `return` 语句，该语句结束了生成器并且允许生成器与 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) 块相组合时，执行任何清理任务。
- {{JSxRef("Generator.prototype.throw()")}}
  - : 类似于在当前的生成器主体的暂停位置插入 `throw` 语句，该语句通知生成器有错误的情况并且允许器处理错误或执行清理并自行关闭。

## 示例

### 无穷迭代器

使用生成器函数，在需要之前不会计算值。因此，生成器允许我们定义一个潜在的无限数据结构。

```js
function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

<<<<<<< HEAD
console.log(gen.next().value);
// 0
console.log(gen.next().value);
// 1
console.log(gen.next().value);
// 2
// ...
```

## 传统的生成器对象

Firefox (SpiderMonkey) 在 [JavaScript 1.7](/zh-CN/docs/Web/JavaScript/New_in_JavaScript/1.7) 中也实现了一个较早版本的生成器，其中函数声明中的星号（\*）不是必需的 (只需在函数体中使用`yield` 关键字)。但是，旧式生成器已弃用。不要使用它们;他们将被删除 ({{bug(1083482)}})。

### 传统的生成器方法

- `Generator.prototype.next()` {{non-standard_inline}}
  - : 返回 {{jsxref("Operators/yield", "yield")}} 表达式产生的值。与 ES2015 生成器对象的 next() 方法对应。
- `Generator.prototype.close()` {{non-standard_inline}}
  - : 关闭生成器，因此执行该函数后调用`next() 函数时将会抛出` {{jsxref("StopIteration")}} 错误。与 ES2015 生成器对象的 return() 方法对应..
- `Generator.prototype.send()` {{non-standard_inline}}
  - : 用于将值发送到生成器。该值由 {{jsxref("Operators/yield", "yield")}} 表达式返回，并且返回下一个 {{jsxref("Operators/yield", "yield")}} 表达式产生的值。`send(x)` 对应于 ES2015 生成器对象中的 `next(x)`
- `Generator.prototype.throw()` {{non-standard_inline}}
  - : 向生成器抛出错误。与 ES2015 生成器对象的 throw() 方法对应。

### 旧生成器对象示例

```js
function fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)
=======
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// …
>>>>>>> 8c4a6eba28 (zh-cn(update): sync generator)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{JSxRef("Statements/function*", "function*")}}
- [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- {{JSxRef("GeneratorFunction")}}
- [可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
