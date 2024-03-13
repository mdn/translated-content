---
title: 尾后逗号
slug: Web/JavaScript/Reference/Trailing_commas
---

{{JsSidebar("More")}}

**尾后逗号** （有时叫做“终止逗号”）在向 JavaScript 代码添加元素、参数、属性时十分有用。如果你想要添加新的属性，并且上一行已经使用了尾后逗号，你可以仅仅添加新的一行，而不需要修改上一行。这使得版本控制的代码比较（diff）更加清晰，代码编辑过程中遇到的麻烦更少。

JavaScript 一开始就支持数组字面量中的尾后逗号，随后向对象字面量（ECMAScript 5）中添加了尾后逗号。最近（ECMAScript 2017），又将其添加到函数参数中。

但是，{{Glossary("JSON")}} 不允许尾后逗号。

## 字面量中的尾后逗号

### 数组

JavaScript 忽略数组中的尾后逗号：

```js-nolint
const arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```

如果使用了多于一个尾后逗号，会产生省略（elision，或者间隙 hole）。带有间隙的数组叫做*稀疏*数组（_sparse_ 紧凑数组 _dense_ array 没有省略/间隙）。例如，当使用 {{jsxref("Array.prototype.forEach()")}} 或 {{jsxref("Array.prototype.map()")}} 迭代数组时，会跳过数组间隙。

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

### 对象

从 ECMAScript 5 开始，对象字面值中的尾后逗号也是符合语法的：

```js
const object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
```

## 函数中的尾后逗号

ECMAScript 2017 支持函数参数中的尾后逗号。

### 参数定义

下面的两个函数定义都是合法的，并且互相等价。尾后逗号并不影响函数定义，或者其 `arguments` 对象的 `length` 属性。

```js-nolint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

尾后逗号也可用于类或对象的[方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)。

```js-nolint
class C {
  one(a,) {}
  two(a, b,) {}
}

const obj = {
  one(a,) {},
  two(a, b,) {},
};
```

### 函数调用

下面的两个函数调用都是合法的，并且互相等价。

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

### 不合法的尾后逗号

仅仅包含逗号的函数参数定义或者函数调用会抛出 {{Jsxref("SyntaxError")}}。而且，当使用[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)的时候，并不支持尾后逗号：

```js example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

## 解构中的尾后逗号

在使用[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)时，尾后逗号也可以用于左侧：

```js-nolint
// 带有尾后逗号的数组解构
[a, b,] = [1, 2];

// 带有尾后逗号的对象解构
const o = {
  p: 42,
  q: true,
};
const { p, q, } = o;
```

同样地，在使用剩余参数时，会抛出 {{jsxref("SyntaxError")}}：

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

## JSON 中的尾后逗号

对象中的尾后逗号仅仅在 ECMAScript 5 中引入。由于 JSON 基于 ES5 之前的语法， **JSON 中并不允许尾后逗号**。

下面两行都会抛出 `SyntaxError`：

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

去掉尾后逗号就行了：

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- ECMAScript 初始提案：[函数的尾后逗号](https://github.com/tc39/proposal-trailing-function-commas)（由 Jeff Morrison 提出）
