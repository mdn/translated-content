---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
---

{{JSRef("Global_Objects", "Symbol")}}

## 概述

**`valueOf()`** 方法返回当前 symbol 对象所包含的 symbol 原始值。

## 语法

```plain
symbol.valueOf();
```

## 描述

在 JavaScript 中，虽然大多数类型的对象在某些操作下都会自动的隐式调用自身的 `valueOf()` 方法或者 `toString()` 方法来将自己转换成一个原始值，但 symbol 对象不会这么干，symbol 对象无法隐式转换成对应的原始值：

```js
Object(Symbol("foo")) + "bar";
// TypeError: can't convert symbol object to primitive
// 无法隐式的调用 valueOf() 方法

Object(Symbol("foo")).valueOf() + "bar";
// TypeError:  can't convert symbol to string
// 手动调用 valueOf() 方法，虽然转换成了原始值，但 symbol 原始值不能转换为字符串

Object(Symbol("foo")).toString() + "bar";
// "Symbol(foo)bar"，需要手动调用 toString() 方法才行
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.valueOf()")}}
