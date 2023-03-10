---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
---

{{JSRef}}

**`Object.getOwnPropertySymbols()`** 方法返回一个给定对象自身的所有 Symbol 属性的数组。

## 语法

```plain
Object.getOwnPropertySymbols(obj)
```

### 参数

- `obj`
  - : 要返回 Symbol 属性的对象。

### 返回值

在给定对象自身上找到的所有 Symbol 属性的数组。

## 描述

与{{jsxref("Object.getOwnPropertyNames()")}}类似，您可以将给定对象的所有符号属性作为 Symbol 数组获取。请注意，{{jsxref("Object.getOwnPropertyNames()")}}本身不包含对象的 Symbol 属性，只包含字符串属性。

因为所有的对象在初始化的时候不会包含任何的 Symbol，除非你在对象上赋值了 Symbol 否则`Object.getOwnPropertySymbols()`只会返回一个空的数组。

## 示例

```js
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0])      // Symbol(a)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
