---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
tags:
  - Function
  - JavaScript
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/length
---
{{JSRef}}

**`length`** 属性指明函数的形参个数。

{{EmbedInteractiveExample("pages/js/function-length.html")}}

{{js_property_attributes(0,0,1)}}

## 描述

`length` 是函数对象的一个属性值，指该函数期望传入的参数数量，即形参的个数。

形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。

与之对比的是， {{jsxref("Functions_and_function_scope/arguments/length", "arguments.length")}} 是函数被调用时实际传参的个数。

### `Function` 构造器的属性

{{jsxref("Function")}} 构造器本身也是个[Function](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。他的 `length` 属性值为 1 。该属性 Writable: `false`, Enumerable: `false`, Configurable: `true`.

### `Function`.prototype 对象的属性

{{jsxref("Function.prototype")}} 对象的 length 属性值为 0 。

## 示例

```js
console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */

console.log((function(...args) {}).length);
// 0, rest parameter is not counted

console.log((function(a, b = 1, c) {}).length);
// 1, only parameters before the first one with
// a default value is counted
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Function")}}
