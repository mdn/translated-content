---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---

{{JSRef}}

**`Number.isInteger()`** 方法用来判断给定的参数是否为整数。

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## 语法

```plain
Number.isInteger(value)
```

### 参数

- `value`
  - : 要判断此参数是否为整数

### 返回值

判断给定值是否是整数的 {{jsxref("Boolean")}} 值。

## 描述

如果被检测的值是整数，则返回 `true`，否则返回 `false`。注意 {{jsxref("Global_Objects/NaN", "NaN")}} 和正负 {{jsxref("Global_Objects/Infinity", "Infinity")}} 不是整数。

## 示例

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false
```

## Polyfill

```js
Number.isInteger =
  Number.isInteger ||
  function (value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Global_Objects/Number", "Number")}}
