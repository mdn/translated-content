---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
---

{{JSRef}}

**RangeError**对象标明一个错误，当一个值不在其所允许的范围或者集合中。

## 语法

```plain
new RangeError([message[, fileName[, lineNumber]]])
```

### 参数

- `message`
  - : 可选，可读的错误描述
- `fileName` {{non-standard_inline}}
  - : 可选，包含造成异常代码的文件名
- `lineNumber` {{non-standard_inline}}
  - : 可选，造成异常的代码所在的行数

## 描述

试图传递一个 number 参数给一个范围内不包含该 number 的函数时则会引发**RangeError**。当传递一个不合法的 length 值作为{{jsxref("Array")}} 构造器的参数创建数组，或者传递错误值到数值计算方法（{{jsxref("Number.toExponential()")}}，{{jsxref("Number.toFixed()")}} ，{{jsxref("Number.toPrecision()")}}），会出现**RangeError**。.

## 属性

- {{jsxref("RangeError.prototype")}}
  - : 允许在 `RangeError` 对象上附加属性。

## 方法

`RangeError`全局对象没有自带方法，但它通过可以原型链继承一些方法。

## `RangeError`实例

### 属性

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError/prototype', 'Properties')}}

### 方法

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError/prototype', 'Methods')}}

## 例子

### 使用`RangeError`

```js
var check = function(num) {
  if (num < MIN || num > MAX) {
    throw new RangeError('Parameter must be between ' + MIN + ' and ' + MAX);
  }
};

try {
  check(500);
}
catch (e) {
  if (e instanceof RangeError) {
    // 处理越界错误
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关连接

- {{jsxref("Error")}}
- {{jsxref("RangeError.prototype")}}
- {{jsxref("Array")}}
- {{jsxref("Number.toExponential()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Number.toPrecision()")}}
