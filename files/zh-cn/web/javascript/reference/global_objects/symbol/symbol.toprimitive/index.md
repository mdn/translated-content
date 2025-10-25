---
title: Symbol.prototype[Symbol.toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
---

**`[Symbol.toPrimitive]()`** 方法可将 {{jsxref("Symbol")}} 对象转换为 symbol 值。

## 语法

```js-nolint
Symbol()[Symbol.toPrimitive](hint)
```

### 返回值

指定的 {{jsxref("Symbol")}} 对象的原始值。

## 描述

`hint` 参数未使用时，{{jsxref("Symbol")}} 的 `[Symbol.toPrimitive]()` 方法返回 Symbol 对象的原始值作为数据类型返回。

JavaScript 调用 `[Symbol.toPrimitive]()` 方法将一个对象转换为原始值表示。你不需要自己调用 `[Symbol.toPrimitive]()` 方法；当对象需要被转换为原始值时，JavaScript 会自动地调用该方法。

## 示例

### 使用 `[Symbol.toPrimitive]()`

```js
const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Symbol.toPrimitive")}}
