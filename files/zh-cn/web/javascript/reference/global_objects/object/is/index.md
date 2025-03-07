---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
---

{{JSRef}}

**`Object.is()`** 静态方法确定两个值是否为[相同值](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#使用_object.is_进行同值相等比较)。

{{InteractiveExample("JavaScript Demo: Object.is()")}}

```js interactive-example
console.log(Object.is("1", 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false
```

## 语法

```js-nolint
Object.is(value1, value2)
```

### 参数

- `value1`
  - : 要比较的第一个值。
- `value2`
  - : 要比较的第二个值。

### 返回值

一个布尔值，指示两个参数是否为相同的值。

## 描述

`Object.is()` 确定两个值是否为[相同值](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#使用_object.is_进行同值相等比较)。如果以下其中一项成立，则两个值相同：

- 都是 {{jsxref("undefined")}}
- 都是 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)
- 都是 `true` 或者都是 `false`
- 都是长度相同、字符相同、顺序相同的字符串
- 都是相同的对象（意味着两个值都引用了内存中的同一对象）
- 都是 [BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 且具有相同的数值
- 都是 [symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 且引用相同的 symbol 值
- 都是数字且

  - 都是 `+0`
  - 都是 `-0`
  - 都是 {{jsxref("NaN")}}
  - 都有相同的值，非零且都不是 {{jsxref("NaN")}}

`Object.is()` 与 [`==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality) 运算符并不等价。`==` 运算符在测试相等性之前，会对两个操作数进行类型转换（如果它们不是相同的类型），这可能会导致一些非预期的行为，例如 `"" == false` 的结果是 `true`，但是 `Object.is()` 不会对其操作数进行类型转换。

`Object.is()` 也*不*等价于 [`===`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality) 运算符。`Object.is()` 和 `===` 之间的唯一区别在于它们处理带符号的 0 和 `NaN` 值的时候。`===` 运算符（和 `==` 运算符）将数值 `-0` 和 `+0` 视为相等，但是会将 {{jsxref("NaN")}} 视为彼此不相等。

## 示例

### 使用 Object.is()

```js
// 案例 1：评估结果和使用 === 相同
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// 案例 2: 带符号的 0
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// 案例 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.is` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- [JavaScript 中的相等性判断](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)——三种内置相等性工具的比较
