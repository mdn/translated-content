---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
---

{{JSRef("Global_Objects", "Number")}}

## 概述

**`toExponential()`** 方法以指数表示法返回该数值字符串表示形式。

## 语法

```plain
numObj.toExponential(fractionDigits)
```

### 参数

- fractionDigits
  - : 可选。一个整数，用来指定小数点后有几位数字。默认情况下用尽可能多的位数来显示数字。

### 返回值

一个用幂的形式 (科学记数法) 来表示{{jsxref("Number")}} 对象的字符串。小数点后以 fractionDigits 提供的值来四舍五入。如果 `fractionDigits` 参数被忽略了，小数点后的将尽可能用最多的位数来表示该数值。

对数值字面量使用 `toExponential()` 方法，且该数值没有小数点和指数时，应该在该数值与该方法之间隔开一个空格，以避免点号被解释为一个小数点。也可以使用两个点号调用该方法。

如果一个数值的小数位数多余 `fractionDigits` 参数所提供的，则该数值将会在 `fractionDigits` 指定的小数位数处四舍五入。可以查看 {{jsxref("Number.toFixed", "toFixed()")}} 方法描述中关于四舍五入的讨论，同样应用于 `toExponential()` 方法。

### 异常

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : 如果 _fractionDigits_ 太小或太大将会抛出该错误。介于 0 和 20（包括 20）之间的值不会引起 `RangeError` 。执行环境也可以支持更大或更小范围。
- {{jsxref("Global_Objects/TypeError", "TypeError")}}
  - : 如果该方法在一个非数值类型对象上调用。

## 示例

```js
var numObj = 77.1234;

alert("numObj.toExponential() is " + numObj.toExponential()); //输出 7.71234e+1

alert("numObj.toExponential(4) is " + numObj.toExponential(4)); //输出 7.7123e+1

alert("numObj.toExponential(2) is " + numObj.toExponential(2)); //输出 7.71e+1

alert("77.1234.toExponential() is " + (77.1234).toExponential()); //输出 7.71234e+1

alert("77 .toExponential() is " + (77).toExponential()); //输出 7.7e+1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
