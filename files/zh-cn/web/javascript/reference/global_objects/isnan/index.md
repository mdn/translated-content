---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
---

{{jsSidebar("Objects")}}

**`isNaN()`** 函数用来确定一个值是否为{{jsxref("NaN")}} 。注：`isNaN`函数内包含一些非常有趣的[规则](#Description)；你也可以使用 ECMAScript 2015 中定义的 {{jsxref("Number.isNaN()")}} 来判断。

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

## 语法

```plain
isNaN(value)
```

### 参数

- `value`
  - : 要被检测的值。

### 返回值

如果给定值为 {{jsxref("NaN")}}则返回值为`true`；否则为`false`。

## 描述

### `isNaN` 函数的必要性

与 JavaScript 中其他的值不同，{{jsxref("Global_Objects/NaN", "NaN")}}不能通过相等操作符（== 和 ===）来判断，因为 `NaN == NaN` 和 `NaN === NaN` 都会返回 `false`。因此，`isNaN` 就很有必要了。

### `NaN 值`的产生

当算术运算返回一个未定义的或无法表示的值时，`NaN`就产生了。但是，`NaN`并不一定用于表示某些值超出表示范围的情况。将某些不能强制转换为数值的非数值转换为数值的时候，也会得到`NaN`。

例如，0 除以 0 会返回`NaN` —— 但是其他数除以 0 则不会返回`NaN`。

### 令人费解的怪异行为

如果`isNaN`函数的参数不是`Number`类型， `isNaN`函数会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是{{jsxref("NaN")}}进行判断。因此，对于能被强制转换为有效的非 NaN 数值来说（空字符串和布尔值分别会被强制转换为数值 0 和 1），返回`false`值也许会让人感觉莫名其妙。比如说，空字符串就明显“不是数值（not a number）”。这种怪异行为起源于："不是数值（not a number）"在基于 IEEE-754 数值的浮点计算体制中代表了一种特定的含义。`isNaN`函数其实等同于回答了这样一个问题：被测试的值在被强制转换成数值时会不会返回 IEEE-754 中所谓的“不是数值（not a number）”。

下一个版本的 ECMAScript (ES2015) 包含{{jsxref("Number.isNaN()")}}函数。通过`Number.isNaN(x)`来检测变量`x`是否是一个`NaN`将会是一种可靠的做法。然而，在缺少`Number.isNaN`函数的情况下，通过表达式`(x != x)` 来检测`变量 x`是否是`NaN`会更加可靠。

一个`isNaN`的 polyfill 可以理解为（这个 polyfill 利用了`NaN`自身永不相等于自身这一特征）：

```js
var isNaN = function (value) {
  var n = Number(value);
  return n !== n;
};
```

## 示例

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// strings
isNaN("37"); // false: 可以被转换成数值 37
isNaN("37.37"); // false: 可以被转换成数值 37.37
isNaN("37,5"); // true
isNaN("123ABC"); // true:  parseInt("123ABC") 的结果是 123，但是 Number("123ABC") 结果是 NaN
isNaN(""); // false: 空字符串被转换成 0
isNaN(" "); // false: 包含空格的字符串被转换成 0

// dates
isNaN(new Date()); // false
isNaN(new Date().toString()); // true

isNaN("blabla"); // true: "blabla"不能转换成数值
// 转换成数值失败，返回 NaN
```

### 有用的特殊行为

有许多方式来看待 `isNaN()`：如果`isNaN(x)`返回 false，那么 x 在任何算数表达式中都不会使表达式等于 NaN；如果返回 true，x 会使所有算数表达式返回 NaN。这就意味着，在 JavaScript 中，`isNaN(x)==true` 等价于 x-0=NaN(在 JavaScript 中 x-0 == NaN 总是返回 `false`，所以你不用去测试它)。实际上， `isNaN(x)`, `isNaN(x - 0)`, `isNaN(Number(x))`, `Number.isNaN(x - 0)`, 和 `Number.isNaN(Number(x))` 的返回值都是一样的 并且在 JavaScript 中 isNaN(x) 是这些表达式中最短的表达。

举个例子，可以利用这个特殊行为来检测函数的参数是可运算的（可以像 number 一样进行加减乘除等运算）。如果不可运算，则可赋予这个参数一个默认的值或其他合适的内容。这样，就可以得到一个隐式转换参数值的函数，而这得益于 Javascript 的全功能性。

## 示例

```js
function increment(x) {
  if (isNaN(x)) x = 0;
  return x + 1;
}

// The same effect with Number.isNaN():
function increment(x) {
  if (Number.isNaN(Number(x))) x = 0;
  return x + 1;
}

// In the following cases for the function's argument x,
// isNaN(x) is always false, although x is indeed not a
// number, but can be used as such in arithmetical
// expressions
increment(""); // 1: "" is converted to 0
increment(new String()); // 1: String object representing an empty string is converted to 0
increment([]); // 1: [] is converted to 0
increment(new Array()); // 1: Array object representing an empty array is converted to 0
increment("0"); // 1: "0" is converted to 0
increment("1"); // 2: "1" is converted to 1
increment("0.1"); // 1.1: "0.1" is converted to 0.1
increment("Infinity"); // Infinity: "Infinity" is converted to Infinity
increment(null); // 1: null is converted to 0
increment(false); // 1: false is converted to 0
increment(true); // 2: true is converted to 1
increment(new Date()); // returns current date/time in milliseconds plus 1

// In the following cases for the function's argument x,
// isNaN(x) is always false and x is indeed a number
increment(-1); // 0
increment(-0.1); // 0.9
increment(0); // 1
increment(1); // 2
increment(2); // 3
// ... and so on ...
increment(Infinity); // Infinity

// In the following cases for the function's argument x,
// isNaN(x) is always true and x is really not a number,
// thus the function replaces it by 0 and returns 1
increment(String); // 1
increment(Array); // 1
increment("blabla"); // 1
increment("-blabla"); // 1
increment(0 / 0); // 1
increment("0/0"); // 1
increment(Infinity / Infinity); // 1
increment(NaN); // 1
increment(undefined); // 1
increment(); // 1

// isNaN(x) is always the same as isNaN(Number(x)),
// but the presence of x is mandatory here!
isNaN(x) == isNaN(Number(x)); // true for every value of x, including x == undefined,
// because isNaN(undefined) == true and Number(undefined) returns NaN,
// but ...
isNaN() == isNaN(Number()); // false, because isNaN() == true and Number() == 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
