---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: e5f0e1070962ee4a595369218d85481542ec7ded
---

{{jsSidebar("Objects")}}

**`isNaN()`** 函数用来确定一个值是否为 {{jsxref("NaN")}}，若有必要，则首先将值转换为数字。由于 `isNaN()` 函数内部的强制类型转换可能[令人迷惑](#描述)，因此你可能更想要使用 {{jsxref("Number.isNaN()")}}。

{{InteractiveExample("JavaScript Demo: Standard built-in objects - isNaN()")}}

```js interactive-example
function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// Expected output: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// Expected output: 3140
```

## 语法

```js-nolint
isNaN(value)
```

### 参数

- `value`
  - : 要被检测的值。

### 返回值

如果给定值[在被转换为数字后](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)为 {{jsxref("NaN")}} 则返回值为 `true`；否则为 `false`。

## 描述

`isNaN()` 是全局对象的一个函数属性。

对于数字值，`isNaN()` 检测该值是否为 [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 值。当 `isNaN()` 函数的参数不是[数字](/zh-CN/docs/Web/JavaScript/Data_structures#number_类型)类型时，其会首先被转换为数字，然后将其结果值与 {{jsxref("NaN")}} 进行比较。

`isNaN()` 对于非数字参数的行为可能会令人困惑！例如，空字符串被强制转换为 0，布尔值被强制转换为 0 或 1；直观上，两者均“不是数字”，仅因它们的运算结果不是 `NaN`，而使得 `isNaN()` 返回 `false`。因此，`isNaN()` 既不回答“输入是否为浮点数值 {{jsxref("NaN")}}”，也不回答“输入是否为数字”这两个问题。

{{jsxref("Number.isNaN()")}} 是检测一个值是否为数字值 `NaN` 的更可靠的方法。或者，也可以使用表达式 `x !== x`，这两种方法都不会产生全局 `isNaN()` 不可靠的误判。要检测一个值是否为数字，请使用 [`typeof x === "number"`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)。

`isNaN()` 函数回答的问题是“在数字上下文中，输入是否在功能上与 {{jsxref("NaN")}} 等价”。如果 `isNaN(x)` 返回 `false`，则可以在算术表达式中使用 `x`，就好像它是一个有效的数字，而不是 `NaN`。如果 `isNaN(x)` 返回 `true`，则 `x` 将被强制转换为 `NaN`，并使大多数算术表达式返回 `NaN`（因为 `NaN` 会传播）。例如，可以使用这种方法来测试函数的参数是否可以进行算术处理（像数字一样使用），并通过抛出错误、提供默认值等来处理不是数字的值。这样，就可以拥有一个可以利用 JavaScript 提供的全部灵活性的函数，该函数可以根据上下文隐式地转换值。

> **备注：** [`+` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)既执行数字加法又执行字符串连接。因此，即使 `isNaN()` 对两个操作数都返回 `false`，`+` 运算符仍可能因为它不是被用作算术运算符而返回字符串。例如，`isNaN("1")` 返回 `false`，而 `"1" + 1` 返回 `"11"`。要确保你正在使用数字，请[将值强制转换为数字](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)并使用 {{jsxref("Number.isNaN()")}} 来测试结果。

## 示例

注意 `isNaN()` 为什么会对一些既不是数字也不是 {{jsxref("NaN")}} 的值返回 `true`：

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// 字符串
isNaN("37"); // false：可以被转换成数字 37，不是 NaN
isNaN("37.37"); // false：可以被转换成数字 37.37，不是 NaN
isNaN("37,5"); // true
isNaN("123ABC"); // true：Number("123ABC") 的结果是 NaN
isNaN(""); // false：空字符串被转换成 0，不是 NaN
isNaN(" "); // false：由空格组成的字符串被转换成 0，不是 NaN

// 日期
isNaN(new Date()); // false；Date 对象可以转换为数字（时间戳）
isNaN(new Date().toString()); // true；Date 对象的字符串表示形式不能解析为数字
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
