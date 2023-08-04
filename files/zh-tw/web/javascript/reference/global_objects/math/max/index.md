---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
---

{{JSRef}}

**`Math.max()`** 函式會回傳零或多個數字中的最大值。

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## 語法

```plain
Math.max([value1[, value2[, ...]]])
```

### Parameters

- `value1, value2, ...`
  - : Numbers.

### Return value

The largest of the given numbers. If at least one of the arguments cannot be converted to a number, {{jsxref("NaN")}} is returned.

## 說明

Because `max()` is a static method of `Math`, you always use it as `Math.max()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

If no arguments are given, the result is -{{jsxref("Infinity")}}.

If at least one of arguments cannot be converted to a number, the result is {{jsxref("NaN")}}.

## 範例

### Using `Math.max()`

```js
Math.max(10, 20); //  20
Math.max(-10, -20); // -10
Math.max(-10, 20); //  20
```

#### Getting the maximum element of an array

{{jsxref("Array.prototype.reduce", "Array.reduce()")}} can be used to find the maximum element in a numeric array, by comparing each value:

```js
var arr = [1, 2, 3];
var max = arr.reduce(function (a, b) {
  return Math.max(a, b);
}, -Infinity);
```

The following function uses {{jsxref("Function.prototype.apply()")}} to get the maximum of an array. `getMaxOfArray([1, 2, 3])` is equivalent to `Math.max(1, 2, 3)`, but you can use `getMaxOfArray()` on programmatically constructed arrays. This should only be used for arrays with relatively few elements.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

The new [spread operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_operator) is a shorter way of writing the `apply` solution to get the maximum of an array:

```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

However, both spread (`...`) and `apply` will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters. See [Using `apply` and built-in functions](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Using_apply_and_built-in_functions) for more details. The `reduce` solution does not have this problem.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.min()")}}
