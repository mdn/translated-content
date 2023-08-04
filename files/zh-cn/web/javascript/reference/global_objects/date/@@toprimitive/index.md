---
title: Date.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
---

{{JSRef}}

**`[@@toPrimitive]()`** 方法可以转换一个 `Date` 对象到一个原始值。

## 用法

```plain
Date()[Symbol.toPrimitive](hint);
```

### 返回值

给出的 {{jsxref("Date")}} 的原始值。根据传入参数的不同，可以返回 string 或 number 类型。

## 说明

{{jsxref("Date")}} 对象的 `[@@toPrimitive]()` 方法可以返回一个原始值，或是 string，或是 number。

如果 `hint` 是 `"string"` 或 `"default"`，`[@@toPrimitive]()` 将会调用 {{jsxref("Object.prototype.toString()", "toString")}}。如果 `toString` 属性不存在，则调用 {{jsxref("Object.prototype.valueOf()", "valueOf")}}。如果 `valueOf` 也不存在，则抛出一个{{jsxref("TypeError")}}。

如果 `hint` 是 `"number"`，`[@@toPrimitive]()` 会首先尝试 `valueOf`，若失败再尝试 `toString`。

当期望一个原始值却收到一个对象时，JavaScript 可以自动的调用 `[@@toPrimitive]()` 方法来将一个对象转化成原始值，所以你很少会需要自己调用这个方法。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.toPrimitive")}}
