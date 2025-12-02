---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jsxref("Symbol")}} 值的 **`valueOf()`** 方法会返回该符号（symbol）的值。

{{InteractiveExample("JavaScript Demo: Symbol.prototype.valueOf()")}}

```js interactive-example
const symbol1 = Symbol("foo");

console.log(typeof Object(symbol1));
// Expected output: "object"

console.log(typeof Object(symbol1).valueOf());
// Expected output: "symbol"
```

## 语法

```js-nolint
valueOf()
```

### 参数

无。

### 返回值

指定的 {{jsxref("Symbol")}} 对象的原始值。

## 描述

{{jsxref("Symbol")}} 的 `valueOf()` 方法会以 Symbol 数据类型返回 Symbol 对象的原始值。

JavaScript 调用 `valueOf()` 方法会将对象转换为原始值。你很少需要自己调用 `valueOf()` 方法；当遇到期望原始值的对象时，JavaScript 会自动调用它。

## 示例

### 使用 valueOf()

```js
const sym = Symbol("example");
sym === sym.valueOf(); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.valueOf()")}}
