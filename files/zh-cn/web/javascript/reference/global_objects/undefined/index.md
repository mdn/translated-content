---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
---

{{jsSidebar("Objects")}}

全局属性 **`undefined`** 表示原始值 `{{Glossary("Undefined", "undefined")}}`。它是一个 JavaScript 的 {{Glossary("Primitive", "原始数据类型")}} 。

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## 语法

```js-nolint
undefined
```

## 描述

`undefined`是*全局对象*的一个属性。也就是说，它是全局作用域的一个变量。`undefined`的最初值就是原始数据类型`{{Glossary("Undefined", "undefined")}}`。

在现代浏览器（JavaScript 1.8.5/Firefox 4+），自 ECMAscript5 标准以来 undefined 是一个不能被配置（non-configurable），不能被重写（non-writable）的属性。即便事实并非如此，也要避免去重写它。

一个没有被赋值的变量的类型是 undefined。如果方法或者是语句中**操作的变量没有被赋值，则会返回 undefined**（对于这句话持疑惑态度，请查看英文原文来理解）。

```js
function test(a) {
  console.log(typeof a); // undefined
  return a;
}

test(); // 返回"undefined"
```

一个函数如果没有使用 return 语句指定{{jsxref("Statements/return", "返回")}}值，就会返回一个 undefined 值。

> **警告：** 但是它有可能在非全局作用域中被当作{{Glossary("Identifier", "标识符")}}（变量名）来使用（因为 undefined 不是[保留字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#保留字的使用)），这样做是一个非常坏的主意，因为这样会使你的代码难以去维护和排错。
>
> ```js example-bad
> // 不要这样做！
>
> (() => {
>   const undefined = "foo";
>   console.log(undefined, typeof undefined); // foo string
> })();
>
> ((undefined) => {
>   console.log(undefined, typeof undefined); // foo string
> })("foo");
> ```

## 示例

### 严格相等和 undefined

你可以使用 undefined 和严格相等或不相等操作符来决定一个变量是否拥有值。在下面的代码中，变量 x 是未定义的，if 语句的求值结果将是 true

```js
var x;

if (x === undefined) {
  // 执行这些语句
} else {
  // 这些语句不会被执行
}
```

> **备注：** 这里是必须使用严格相等操作符（===）而不是标准相等操作符（==），因为 x == undefined 会检查 x 是不是 null，但是严格相等不会检查（有点饶人，其实 === 会严格判断双方的类型、值等是否相等）。null 不等同于 undefined。移步{{jsxref("Operators/Comparison_Operators", "比较操作符")}}查看详情。

### Typeof 操作符和 undefined

或者，可以使用{{jsxref("Operators/typeof", "typeof")}}：

```js
var x;
if (typeof x === "undefined") {
  // 执行这些语句
}
```

使用 {{jsxref("Operators/typeof", "typeof")}}的原因是它不会在一个变量没有被声明的时候抛出一个错误。

```js
// 这里没有声明 y
if (typeof y === "undefined") {
  // 没有错误，执行结果为 true
  console.log("y is " + typeof y); // y is undefined
}

if (y === undefined) {
  // ReferenceError: y is not defined
}
```

但是，技术方面看来这样的使用方法应该被避免。JavaScript 是一个静态作用域语言，所以，一个变量是否被声明可以通过看它是否在一个封闭的上下文中被声明。唯一的例外是全局作用域，但是全局作用域是被绑定在全局对象上的，所以要检查一个变量是否在全局上下文中存在可以通过检查全局对象上是否存在这个属性（比如使用{{jsxref("Operators/in", "in")}}操作符）。

```js
if ("x" in window) {
  // 只有 x 被全局性的定义 才会执行这些语句
}
```

### Void 操作符和 undefined

{{jsxref("Operators/void", "void")}} 操作符是第三种可以替代的方法。

```js
var x;
if (x === void 0) {
  // 执行这些语句
}

// 没有声明 y
if (y === void 0) {
  // 抛出一个 RenferenceError 错误 (与`typeof`相比)
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
