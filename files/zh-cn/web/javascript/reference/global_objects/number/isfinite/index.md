---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---

**`Number.isFinite()`** 静态方法判断传入值是否是一个有限数——也就是说，它检查给定值是一个数字，且该数字既不是正的 {{jsxref("Infinity")}}，也不是负的 `Infinity` 或 {{jsxref("NaN")}}。

{{InteractiveExample("JavaScript Demo: Number.isFinite()")}}

```js interactive-example
console.log(Number.isFinite(1 / 0));
// Expected output: false

console.log(Number.isFinite(10 / 5));
// Expected output: true

console.log(Number.isFinite(0 / 0));
// Expected output: false
```

## 语法

```js-nolint
Number.isFinite(value)
```

### 参数

- `value`
  - : 要测试有限性的值。

### 返回值

如果给定值是有限数，则返回布尔值 `true`。否则为 `false`。

## 示例

### 使用 isFinite()

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true
```

### Number.isFinite() 和全局 isFinite() 之间的不同

与全局 {{jsxref("isFinite", "isFinite()")}} 函数相比，此方法不会先将参数转换为数字，这意味着只有类型为数字*且*为有限数的值才返回 `true`，而非数字的值始终返回 `false`。

```js
isFinite("0"); // true；强制转换为数字 0
Number.isFinite("0"); // false
isFinite(null); // true；强制转换为数字 0
Number.isFinite(null); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.isFinite` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("isFinite", "isFinite()")}}
