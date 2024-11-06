---
title: "TypeError: 'x' is not iterable"
slug: Web/JavaScript/Reference/Errors/is_not_iterable
---

{{jsSidebar("Errors")}}

## 错误信息

```plain
TypeError: 'x' is not iterable (Firefox, Chrome)
TypeError: 'x' is not a function or its return value is not iterable (Chrome)
```

## 错误类型

{{jsxref("TypeError")}}

## 发生了什么错误？

这个值作为 [for…of](/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) 的表达式右值，或者作为一个函数的参数，如 {{jsxref("Promise.all")}} 或者 {{jsxref("TypedArray.from")}}, 不是一个 [可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols). 一个可迭代对象可以是一个内置可迭代类型，如{{jsxref("Array")}}, {{jsxref("String")}} 或 {{jsxref("Map")}}, 一个 generator 生成结果，或者一个实现了 [可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) 的对象

## 示例

### Iterating over Object properties

在 JavaScript 中，{{jsxref("Object")}} 是不可迭代的，除非它们实现了[迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol). 因此，你不能使用 [for…of](/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) 来迭代对象的属性。

```js example-bad
var obj = { France: "Paris", England: "London" };
for (let p of obj) {
  // TypeError: obj is not iterable
  // …
}
```

做为替代你必须使用 {{jsxref("Object.keys")}} 或 {{jsxref("Object.entries")}} 来迭代对象的属性或属性值。

```js example-good
var obj = { France: "Paris", England: "London" };
// 迭代属性名称：
for (let country of Object.keys(obj)) {
  var capital = obj[country];
  console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj))
  console.log(country, capital);
```

这次 case 的另外一个选择是使用 {{jsxref("Map")}}:

```js example-good
var map = new Map();
map.set("France", "Paris");
map.set("England", "London");
// Iterate over the property names:
for (let country of map.keys()) {
  let capital = map[country];
  console.log(country, capital);
}

for (let capital of map.values()) console.log(capital);

for (const [country, capital] of map.entries()) console.log(country, capital);
```

### Iterating over a generator

[生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#生成器函数)是用来生成可迭代对象的函数。

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: generate is not iterable
  console.log(x);
```

当它没有被调用，这个 {{jsxref("Function")}} 相应的是可调用的，但是不可迭代。调用 generator 生成一个可迭代对象，该对象将迭代在生成器执行期间生成的值。

```js example-good
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate(1, 2)) console.log(x);
```

### Iterating over a custom iterable

可以使用{{jsxref("Symbol.iterator")}} 方法去实现一个自定义迭代器。你必须确定自定义的迭代器方法返回一个迭代器对象，即它必须有一个 next()

```js example-bad
const myEmptyIterable = {
  [Symbol.iterator]() {
    return []; // [] is iterable, but it is not an iterator -- it has no next method.
  },
};

Array.from(myEmptyIterable); // TypeError: myEmptyIterable is not iterable
```

```plain

```

下面是正确用法

```js example-good
const myEmptyIterable = {
  [Symbol.iterator]() {
    return [][Symbol.iterator]();
  },
};

Array.from(myEmptyIterable); // []
```

## 参阅

- [iterable protocol](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)
- {{jsxref("Object.keys")}}
- {{jsxref("Object.entries")}}
- {{jsxref("Map")}}
- [生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#生成器函数)
- [for…of](/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
