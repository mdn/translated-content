---
title: Symbol.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
---

{{JSRef}}

**`[@@toPrimitive]()`** 方法可将 Symbol 对象转换为原始值。

## 语法

```plain
Symbol()[Symbol.toPrimitive](hint);
```

### 返回值

该原始值为指定的 {{jsxref("Symbol")}} 对象

## 描述

{{jsxref("Symbol")}} 的 `[@@toPrimitive]()` 方法返回该 Symbol 对象原始值作为 Symbol 数据形式。 `hint` 参数未被使用。

JavaScript 调用 `[@@toPrimitive]()` 方法将一个对象转换为原始值表示。你不需要自己调用 `[@@toPrimitive]()` 方法；当对象需要被转换为原始值时，JavaScript 会自动地调用该方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考资料

- {{jsxref("Symbol.toPrimitive")}}
