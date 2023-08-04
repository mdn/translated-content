---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
---

{{jsSidebar("Statements")}}

**`for...of`语句**在[可迭代对象](/zh-CN/docs/Web/JavaScript/Guide/iterable)（包括 {{jsxref("Array")}}，{{jsxref("Map")}}，{{jsxref("Set")}}，{{jsxref("String")}}，{{jsxref("TypedArray")}}，[arguments](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

{{EmbedInteractiveExample("pages/js/statement-forof.html")}}

## 语法

```plain
for (variable of iterable) {
    //statements
}
```

- `variable`
  - : 在每次迭代中，将不同属性的值分配给变量。
- `iterable`
  - : 被迭代枚举其属性的对象。

## 示例

### 迭代{{jsxref("Array")}}

```js
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

如果你不想修改语句块中的变量 , 也可以使用[`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const)代替[`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)。

```js
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### 迭代{{jsxref("String")}}

```js
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### 迭代 {{jsxref("TypedArray")}}

```js
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
```

### 迭代{{jsxref("Map")}}

```js
let iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (let entry of iterable) {
  console.log(entry);
}
// ["a", 1]
// ["b", 2]
// ["c", 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### 迭代 {{jsxref("Set")}}

```js
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### 迭代 {{jsxref("arguments")}} 对象

```js
(function () {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3
```

### 迭代 DOM 集合

迭代 DOM 元素集合，比如一个{{domxref("NodeList")}}对象：下面的例子演示给每一个 article 标签内的 p 标签添加一个 "`read`" 类。

```js
//注意：这只能在实现了 NodeList.prototype[Symbol.iterator] 的平台上运行
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### 关闭迭代器

对于`for...of`的循环，可以由 `break`, `throw` 或 `return` 终止。在这些情况下，迭代器关闭。

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}

for (let o of foo()) {
  console.log(o);
  break; // closes iterator, triggers return
}
```

### 迭代生成器

你还可以迭代一个[生成器](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)：

```js
function* fibonacci() {
  // 一个生成器函数
  let [prev, curr] = [0, 1];
  for (;;) {
    // while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // 当 n 大于 1000 时跳出循环
  if (n >= 1000) break;
}
```

#### 不要重用生成器

生成器不应该重用，即使`for...of`循环的提前终止，例如通过{{jsxref("Statements/break", "break")}}关键字。在退出循环后，生成器关闭，并尝试再次迭代，不会产生任何进一步的结果。

```js
var gen = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (let o of gen) {
  console.log(o);
  break; //关闭生成器
}

//生成器不应该重用，以下没有意义！
for (let o of gen) {
  console.log(o);
}
```

### 迭代其他可迭代对象

你还可以迭代显式实现[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)协议的对象：

```js
var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
```

### `for...of`与`for...in`的区别

无论是`for...in`还是`for...of`语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。

{{jsxref("Statements/for...in", "for...in")}} 语句以任意顺序迭代对象的[可枚举属性](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)。

`for...of` 语句遍历[可迭代对象](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#可迭代对象)定义要迭代的数据。

以下示例显示了与{{jsxref("Array")}}一起使用时，`for...of`循环和`for...in`循环之间的区别。

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";
```

每个对象将继承`objCustom`属性，并且作为{{jsxref("Array")}}的每个对象将继承`arrCustom`属性，因为将这些属性添加到{{jsxref("Object.prototype")}}和{{jsxref("Array.prototype")}}。由于[继承和原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)，对象`iterable`继承属性`objCustom`和`arrCustom`。

```js
for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}
```

此循环仅以原始插入顺序记录`iterable` 对象的[可枚举属性](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)。它不记录数组**元素** `3`, `5`, `7` 或`hello`，因为这些**不是**枚举属性。但是它记录了数组**索引**以及`arrCustom`和`objCustom`。如果你不知道为什么这些属性被迭代，{{jsxref("Statements/for...in", "array iteration and for...in", "#Array_iteration_and_for...in")}}中有更多解释。

```js
for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}
```

这个循环类似于第一个，但是它使用{{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}} 来检查，如果找到的枚举属性是对象自己的（不是继承的）。如果是，该属性被记录。记录的属性是`0`, `1`, `2`和`foo`，因为它们是自身的属性（**不是继承的**）。属性`arrCustom`和`objCustom`不会被记录，因为它们**是继承的**。

```js
for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

该循环迭代并记录`iterable`作为[可迭代对象](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#可迭代对象)定义的迭代值，这些是数组元素 `3`, `5`, `7`，而不是任何对象的**属性**。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
