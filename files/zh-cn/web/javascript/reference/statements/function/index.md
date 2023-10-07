---
title: function
slug: Web/JavaScript/Reference/Statements/function
---

{{jsSidebar("Statements")}}

**函数声明**定义一个具有指定参数的函数。

你还可以使用 {{jsxref("Function")}} 构造函数和 一个{{jsxref("Operators/function", "function expression")}} 定义函数。

## 语法

```plain
function name([param,[, param,[..., param]]]) {
   [statements]
}
```

- `name`
  - : 函数名
- `param`
  - : 要传递给函数的参数的名称。不同引擎中的最大参数数量不同。
- `statements`
  - : 包含函数体的语句。

## 描述

一个被函数声明创建的函数是一个 Function 对象，具有 Function 对象的所有属性、方法和行为。查看 [Function](/zh-CN/JavaScript/Reference/Global_Objects/Function) 以获取 function 的详细信息。

函数也可以被表达式创建（ [function expression](/zh-CN/JavaScript/Reference/Operators/function) ）

函数可以被有条件来声明，这意味着，在一个 if 语句里，函数声明是可以嵌套的。有的浏览器会将这种有条件的声明看成是无条件的声明，无论这里的条件是 true 还是 false，浏览器都会创建函数。因此，它们不应该被使用。

默认情况下，函数是返回 undefined 的。想要返回一个其他的值，函数必须通过一个 [return](/zh-CN/JavaScript/Reference/Statements/return) 语句指定返回值。

### 有条件的创建函数

函数可以被有条件来声明，这意味着，函数声明可能出现在一个 if 语句里，但是，这种声明方式在不同的浏览器里可能有不同的效果。因此，不应该在生产环境代码中使用这种声明方式，应该使用函数表达式来代替。

```js
var hoisted = "foo" in this;
console.log(
  `'foo' name ${
    hoisted ? "is" : "is not"
  } hoisted. typeof foo is ${typeof foo}`,
);
if (false) {
  function foo() {
    return 1;
  }
}

// 在 Chrome 里：
// 'foo' 变量名被提升，但是 typeof foo 为 undefined
//
// 在 Firefox 里：
// 'foo' 变量名被提升。但是 typeof foo 为 undefined
//
// 在 Edge 里：
// 'foo' 变量名未被提升。而且 typeof foo 为 undefined
//
// 在 Safari 里：
// 'foo' 变量名被提升。而且 typeof foo 为 function
```

注意，即使把上面代码中的 if(false) 改为 if(true)，结果也是一样的

```js
var hoisted = "foo" in this;
console.log(
  `'foo' name ${
    hoisted ? "is" : "is not"
  } hoisted. typeof foo is ${typeof foo}`,
);
if (true) {
  function foo() {
    return 1;
  }
}

// 在 Chrome 里：
// 'foo' 变量名被提升，但是 typeof foo 为 undefined
//
// 在 Firefox 里：
// 'foo' 变量名被提升。但是 typeof foo 为 undefined
//
// 在 Edge 里：
// 'foo' 变量名未被提升。而且 typeof foo 为 undefined
//
// 在 Safari 里：
// 'foo' 变量名被提升。而且 typeof foo 为 function
```

### 函数声明提升

JavaScript 中的**函数声明**被提升到了**函数定义**。你可以在函数声明之前使用该函数：

```js
hoisted(); // logs "foo"

function hoisted() {
  console.log("foo");
}
```

> **备注：** 函数表达式 {{jsxref("Operators/function", "function expressions")}} 不会被提升：

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

## 示例

### 使用函数

下面的代码声明了一个函数，该函数返回了销售的总金额，参数是产品 a,b,c 分别的销售的数量。

```js
function calc_sales(units_a, units_b, units_c) {
  return units_a * 79 + units_b * 129 + units_c * 699;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- {{jsxref("Function")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}}
