---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---

{{JSRef}}

**`Number.isNaN()`** 方法确定传递的值是否为 {{jsxref("NaN")}}，并且检查其类型是否为 {{jsxref("Number")}}。它是原来的全局 {{jsxref("isNaN", "isNaN()")}} 的更稳妥的版本。

{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}

## 语法

```plain
Number.isNaN(value)
```

### 参数

- `value`
  - : 要检测是否为 {{jsxref("Global_Objects/NaN", "NaN")}} 的值。

### 返回值

一个{{jsxref("Boolean", "布尔值")}}，表示给定的值是否是 {{jsxref("NaN")}}。

## 描述

在 JavaScript 中，`NaN` 最特殊的地方就是，我们不能使用相等运算符（{{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 和 {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}）来判断一个值是否是 `NaN`，因为 `NaN == NaN` 和 `NaN === NaN` 都会返回 `false`。因此，必须要有一个判断值是否是 `NaN` 的方法。

和全局函数 {{jsxref("Global_Objects/isNaN", "isNaN()")}} 相比，`Number.isNaN()` 不会自行将参数转换成数字，只有在参数是值为 `NaN` 的数字时，才会返回 `true`。

## 示例

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// 下面这几个如果使用全局的 isNaN() 时，会返回 true。
Number.isNaN("NaN"); // false，字符串 "NaN" 不会被隐式转换成数字 NaN。
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN("blabla"); // false

// 下面的都返回 false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

## Polyfill

```js
Number.isNaN =
  Number.isNaN ||
  function (value) {
    return typeof value === "number" && isNaN(value);
  };
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number")}}
- {{jsxref("isNaN", "isNaN()")}}
