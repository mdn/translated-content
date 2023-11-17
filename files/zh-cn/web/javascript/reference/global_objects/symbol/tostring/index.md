---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
---

{{JSRef("Global_Objects", "Symbol")}}

## 概述

**`toString()`** 方法返回当前 symbol 对象的字符串表示。

## 语法

```plain
symbol.toString();
```

## 描述

{{jsxref("Symbol")}} 对象拥有自己的 `toString` 方法，因而遮蔽了原型链上的 {{jsxref("Object.prototype.toString()")}}。

### symbol 原始值不能转换为字符串

symbol 原始值不能转换为字符串，所以只能先转换成它的包装对象，再调用 `toString()` 方法：

```js
Symbol("foo") + "bar";
// TypeError: Can't convert symbol to string
Symbol("foo").toString() + "bar";
// "Symbol(foo)bar"，就相当于下面的：
Object(Symbol("foo")).toString() + "bar";
// "Symbol(foo)bar"
```

## 示例

```js
Symbol("desc").toString(); // "Symbol(desc)"

// 内置通用（well-known）symbol
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.toString()")}}
