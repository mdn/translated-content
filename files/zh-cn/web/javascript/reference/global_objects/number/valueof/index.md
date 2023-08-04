---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---

{{JSRef("Global_Objects", "Number")}}

## 概述

**`valueOf()`** 方法返回一个被 {{jsxref("Global_Objects/Number", "Number")}} 对象包装的原始值。

## 语法

```plain
numObj.valueOf()
```

### 返回值

表示指定 {{jsxref("Number")}} 对象的原始值的数字

## 描述

该方法通常是由 JavaScript 引擎在内部隐式调用的，而不是由用户在代码中显式调用的。

## 示例

```js
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number.prototype.toSource()")}}
