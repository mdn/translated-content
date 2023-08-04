---
title: Symbol.prototype.description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
---

{{JSRef}}

**`description`** 是一个只读属性，它会返回 {{jsxref("Symbol")}} 对象的可选描述的字符串。

{{EmbedInteractiveExample("pages/js/symbol-prototype-description.html")}}

## 语法

```plain
Symbol('myDescription').description;
Symbol.iterator.description;
Symbol.for('foo').description;
```

## 描述

{{jsxref("Symbol")}} 对象可以通过一个可选的描述创建，可用于调试，但不能用于访问 symbol 本身。`Symbol.prototype.description` 属性可以用于读取该描述。与 `Symbol.prototype.toString()` 不同的是它不会包含 "`Symbol()`" 的字符串。具体请看实例。

## 示例

```js
Symbol("desc").toString(); // "Symbol(desc)"
Symbol("desc").description; // "desc"
Symbol("").description; // ""
Symbol().description; // undefined

// 内置通用（well-known）symbol
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
Symbol.for("foo").description; // "foo"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Symbol.prototype.toString()")}}
- Polyfill: <https://npmjs.com/symbol.prototype.description>
