---
title: Number() constructor
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
---

{{JSRef}}

**`Number()` 构造函数创建一个** {{jsxref("Number")}} 对象。

## 语法

```js
new Number(value)
```

### 参数

- `value`
  - : 创建的 `Number` 对象的数值。

## 例子

### 创建 Number 对象

```js
const a = new Number('123'); // a === 123 is false
const b = Number('123');     // b === 123 is true
a instanceof Number;         // is true
b instanceof Number;         // is false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参阅

- {{jsxref("NaN")}}
- 全局对象 {{jsxref("Math")}}
- 任意精度的整数 {{jsxref("BigInt")}}
