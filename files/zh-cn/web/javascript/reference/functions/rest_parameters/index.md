---
title: 剩余参数
slug: Web/JavaScript/Reference/Functions/rest_parameters
---

{{jsSidebar("Functions")}}

**剩余参数**语法允许我们将一个不定数量的参数表示为一个数组。

{{InteractiveExample("JavaScript Demo: Functions Rest Parameters")}}

```js interactive-example
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
```

## 语法

```js
function(a, b, ...theArgs) {
  // ...
}
```

## 描述

如果函数的最后一个命名参数以`...`为前缀，则它将成为一个由剩余参数组成的真数组，其中从`0`（包括）到`theArgs.length`（排除）的元素由传递给函数的实际参数提供。

在上面的例子中，`theArgs`将收集该函数的第三个参数（因为第一个参数被映射到`a`，而第二个参数映射到`b`）和所有后续参数。

### 剩余参数和 `arguments`对象的区别

剩余参数和 [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)对象之间的区别主要有三个：

- 剩余参数只包含那些没有对应形参的实参，而 `arguments` 对象包含了传给函数的所有实参。
- `arguments`对象不是一个真正的数组，而剩余参数是真正的 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)实例，也就是说你能够在它上面直接使用所有的数组方法，比如 [`sort`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Array/sort)，[`map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)，[`forEach`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)或[`pop`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)。
- `arguments`对象还有一些附加的属性（如`callee`属性）。

### 从 arguments 到数组

引入了剩余参数来减少由参数引起的样板代码。

```plain
// Before rest parameters, "arguments" could be converted to a normal array using:

function f(a, b) {

  var normalArray = Array.prototype.slice.call(arguments);
  // -- or --
  var normalArray = [].slice.call(arguments);
  // -- or --
  var normalArray = Array.from(arguments);

  var first = normalArray.shift(); // OK, gives the first argument
  var first = arguments.shift(); // ERROR (arguments is not a normal array)

}

// Now we can easily gain access to a normal array using a rest parameter

function f(...args) {
  var normalArray = args;
  var first = normalArray.shift(); // OK, gives the first argument
}
```

### 解构剩余参数

剩余参数可以被解构，这意味着他们的数据可以被解包到不同的变量中。请参阅[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

```js
function f(...[a, b, c]) {
  return a + b + c;
}

f(1); // NaN (b and c are undefined)
f(1, 2, 3); // 6
f(1, 2, 3, 4); // 6 (the fourth parameter is not destructured)
```

## 示例

因为`theArgs`是个数组，所以你可以使用`length`属性得到剩余参数的个数：

```js
function fun1(...theArgs) {
  alert(theArgs.length);
}

fun1(); // 弹出 "0", 因为 theArgs 没有元素
fun1(5); // 弹出 "1", 因为 theArgs 只有一个元素
fun1(5, 6, 7); // 弹出 "3", 因为 theArgs 有三个元素
```

下例中，剩余参数包含了从第二个到最后的所有实参，然后用第一个实参依次乘以它们：

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

下例演示了你可以在剩余参数上使用任意的数组方法，而`arguments`对象不可以：

```js
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

alert(sortRestArgs(5, 3, 7, 1)); // 弹出 1,3,5,7

function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // 不会执行到这里
}

alert(sortArguments(5, 3, 7, 1)); // 抛出 TypeError 异常:arguments.sort is not a function
```

为了在`arguments`对象上使用`Array`方法，它必须首先被转换为一个真正的数组。

```js
function sortArguments() {
  var args = Array.prototype.slice.call(arguments);
  var sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // shows 1, 3, 5, 7
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)指南
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)参考
- [展开语法（`...`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Array")}}
