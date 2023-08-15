---
title: Arguments 对象
slug: Web/JavaScript/Reference/Functions/arguments
---

{{jsSidebar("Functions")}}

**`arguments`** 是一个对应于传递给函数的参数的类数组对象。

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## 描述

> **备注：** 如果你编写兼容 ES6 的代码，那么优先推荐使用 [剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)

> **备注：** “类数组”意味着 `arguments` 有 {{jsxref("Functions/arguments/length", "长度")}} 属性 并且属性的索引是从零开始的，但是它没有 {{JSxRef("Array")}}的 内置方法，例如 {{jsxref("Array.forEach", "forEach()")}} 和 {{jsxref("Array.map", "map()")}}都是没有的。详情可以看 [§Description](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments#Description).

`arguments`对象是所有（非箭头）函数中都可用的**局部变量**。你可以使用`arguments`对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引 0 处。例如，如果一个函数传递了三个参数，你可以以如下方式引用他们：

```js
arguments[0];
arguments[1];
arguments[2];
```

参数也可以被设置：

```js
arguments[1] = "new value";
```

`arguments`对象不是一个 {{jsxref("Array")}} 。它类似于`Array`，但除了 length 属性和索引元素之外没有任何`Array`属性。例如，它没有 [pop](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 方法。但是它可以被转换为一个真正的`Array`：

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```

> **警告：** 对参数使用 slice 会阻止某些 JavaScript 引擎中的优化 (比如 V8 - [更多信息](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments))。如果你关心性能，尝试通过遍历 arguments 对象来构造一个新的数组。另一种方法是使用被忽视的`Array`构造函数作为一个函数：
>
> ```js
> var args =
>   arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
> ```

如果调用的参数多于正式声明接受的参数，则可以使用`arguments`对象。这种技术对于可以传递可变数量的参数的函数很有用。使用 [`arguments.length`](/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length)来确定传递给函数参数的个数，然后使用`arguments`对象来处理每个参数。要确定函数[签名](/zh-CN/docs/Glossary/Signature/Function)中（输入）参数的数量，请使用[`Function.length`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/length)属性。

### 对参数使用 `typeof`

typeof 参数返回 'object'。

```js
console.log(typeof arguments); // 'object'
// arguments 对象只能在函数内使用
function test(a) {
  console.log(a, Object.prototype.toString.call(arguments));
  console.log(arguments[0], arguments[1]);
  console.log(typeof arguments[0]);
}
test(1);
/*
1 "[object Arguments]"
1 undefined
number
*/
```

可以使用索引确定单个参数的类型。

```js
console.log(typeof arguments[0]); //this will return the typeof individual arguments.
```

### 对参数使用扩展语法

您还可以使用{{jsxref("Array.from()")}}方法或[扩展运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)将参数转换为真实数组：

```js
var args = Array.from(arguments);
var args = [...arguments];
```

## 属性

- [`arguments.callee`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : 指向参数所属的当前执行的函数。
- [`arguments.length`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : 传递给函数的参数数量。
- [`arguments[@@iterator]`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)
  - : 返回一个新的 {{jsxref("Array/@@iterator", "Array 迭代器", "", 0)}}对象，该对象包含参数中每个索引的值。

## 示例

### 遍历参数求和

```js
function add() {
  var sum = 0,
    len = arguments.length;
  for (var i = 0; i < len; i++) {
    sum += arguments[i];
  }
  return sum;
}
add(); // 0
add(1); // 1
add(1, 2, 3, 4); // 10
```

### 定义连接字符串的函数

这个例子定义了一个函数来连接字符串。这个函数唯一正式声明了的参数是一个字符串，该参数指定一个字符作为衔接点来连接字符串。该函数定义如下：

```js
function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

你可以传递任意数量的参数到该函数，并使用每个参数作为列表中的项创建列表。

```js
// returns "red, orange, blue"
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley"
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

### 定义创建 HTML 列表的方法

这个例子定义了一个函数通过一个字符串来创建 HTML 列表。这个函数唯一正式声明了的参数是一个字符。当该参数为 "`u`" 时，创建一个无序列表 (项目列表)；当该参数为 "`o`" 时，则创建一个有序列表 (编号列表)。该函数定义如下：

```js
function list(type) {
  var result = "<" + type + "l><li>";
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join("</li><li>");
  result += "</li></" + type + "l>"; // end list

  return result;
}
```

你可以传递任意数量的参数到该函数，并将每个参数作为一个项添加到指定类型的列表中。例如：

```js
var listHTML = list("u", "One", "Two", "Three");

/* listHTML is:

"<ul><li>One</li><li>Two</li><li>Three</li></ul>"

*/
```

### 剩余参数、默认参数和解构赋值参数

`arguments`对象可以与[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)、[默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)和[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)参数结合使用。

```js
function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1,2,3]
```

在严格模式下，[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)、[默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)和[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)参数的存在不会改变 `arguments`对象的行为，但是在非严格模式下就有所不同了。

当非严格模式中的函数**没有**包含[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)、[默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)和[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)，那么`arguments`对象中的值**会**跟踪参数的值（反之亦然）。看下面的代码：

```js
function func(a) {
  arguments[0] = 99; // 更新了 arguments[0] 同样更新了 a
  console.log(a);
}
func(10); // 99
```

并且

```js
function func(a) {
  a = 99; // 更新了 a 同样更新了 arguments[0]
  console.log(arguments[0]);
}
func(10); // 99
```

当非严格模式中的函数**有**包含[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)、[默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)和[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)，那么`arguments`对象中的值**不会**跟踪参数的值（反之亦然）。相反，`arguments`反映了调用时提供的参数：

```js
function func(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
func(10); // 10
```

并且

```js
function func(a = 55) {
  a = 99; // updating a does not also update arguments[0]
  console.log(arguments[0]);
}
func(10); // 10
```

并且

```js
function func(a = 55) {
  console.log(arguments[0]);
}
func(); // undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Function")}}
