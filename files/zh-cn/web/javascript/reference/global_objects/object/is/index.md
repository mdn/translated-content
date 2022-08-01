---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
tags:
  - Comparison
  - Condition
  - Conditional
  - ECMAScript 2015
  - Equality
  - JavaScript
  - Method
  - Object
  - Polyfill
browser-compat: javascript.builtins.Object.is
translation_of: Web/JavaScript/Reference/Global_Objects/Object/is
---
{{JSRef}}

**`Object.is()`** 方法判断两个值是否为[同一个值](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)。

## 语法

```js
Object.is(value1, value2);
```

### 参数

- `value1`
  - : 被比较的第一个值。
- `value2`
  - : 被比较的第二个值。

### 返回值

一个{{jsxref("Global_Objects/Boolean", "布尔")}}值，表示两个参数是否是同一个值。

## 描述

`Object.is()` 方法判断两个值是否为[同一个值](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)，如果满足以下任意条件则两个值相等：

- 都是 {{jsxref("undefined")}}
- 都是 {{jsxref("null")}}
- 都是 `true` 或都是 `false`
- 都是相同长度、相同字符、按相同顺序排列的字符串
- 都是相同对象（意味着都是同一个对象的值引用）
- 都是数字且
  - 都是 `+0`
  - 都是 `-0`
  - 都是 {{jsxref("NaN")}}
  - 都是同一个值，非零且都不是 {{jsxref("NaN")}}

`Object.is()` 与 {{jsxref("Operators", "==", "#相等运算符")}} 不同。`==` 运算符在判断相等前对两边的变量（如果它们不是同一类型）进行强制转换（这种行为将 `"" == false` 判断为 `true`），而 `Object.is` 不会强制转换两边的值。

`Object.is()` 与 {{jsxref("Operators", "===", "#全等运算符")}} 也不相同。差别是它们对待有符号的零和 NaN 不同，例如，`===` 运算符（也包括 `==` 运算符）将数字 `-0` 和 `+0` 视为相等，而将 {{jsxref("Number.NaN")}} 与 {{jsxref("NaN")}} 视为不相等。

## 示例

### 使用 Object.is

```js
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true
```

## Polyfill

```js
if (!Object.is) {
  Object.defineProperty(Object, "is", {
    value: function (x, y) {
      // SameValue algorithm
      if (x === y) {
        // return true if x and y are not 0, OR
        // if x and y are both 0 of the same sign.
        // This checks for cases 1 and 2 above.
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // return true if both x AND y evaluate to NaN.
        // The only possibility for a variable to not be strictly equal to itself
        // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
        // This checks for case 3.
        return x !== x && y !== y;
      }
    }
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Object.is` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [JavaScript 中的相等性判断](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
