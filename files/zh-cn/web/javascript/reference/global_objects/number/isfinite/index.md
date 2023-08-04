---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---

{{JSRef}}

**`Number.isFinite()`** 方法用来检测传入的参数是否是一个有穷数。

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

## 语法

```plain
Number.isFinite(value)
```

### 参数

- `value`
  - : 要被检测有穷性的值。

### 返回值

一个 {{jsxref("Boolean", "布尔值")}} 表示给定的值是否是一个有穷数。

## 描述

和全局的 {{jsxref("Global_Objects/isFinite", "isFinite()")}} 函数相比，这个方法不会强制将一个非数值的参数转换成数值，这就意味着，只有数值类型的值，且是有穷的（finite），才返回 `true`。

## Polyfill

```js
if (Number.isFinite === undefined)
  Number.isFinite = function (value) {
    return typeof value === "number" && isFinite(value);
  };
```

## 示例

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false, would've been true with
// global isFinite('0')
Number.isFinite(null); // false, would've been true with
// global isFinite(null)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Number")}} object it belongs to.
- The global function {{jsxref("isFinite")}}.
