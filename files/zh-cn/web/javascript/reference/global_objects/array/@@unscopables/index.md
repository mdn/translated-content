---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
---

{{JSRef}}

`Array.prototype` 的 **`@@unscopables`** 数据属性被所有 {{jsxref("Array")}} 实例共享。它包含在 ES2015 版本之前 ECMAScript 标准中未收纳的属性名，并且这些属性被排除在由 [`with`](/zh-CN/docs/Web/JavaScript/Reference/Statements/with) 语句绑定的环境中。

## 值

一个 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)，包含下面给出的属性名称，且它们的值都设置为 `true`。

{{js_property_attributes(0, 0, 1)}}

## 描述

在 `with` 语句绑定中未包含的 `Array` 默认属性包括：

- [`at()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [`copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
- [`entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
- [`fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [`find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [`findLast()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
- [`findLastIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
- [`flat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [`flatMap()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [`includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [`keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
- [`toReversed()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
- [`toSorted()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [`toSpliced()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)
- [`values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

`Array.prototype[@@unscopables]` 是一个只包含所有上述属性且对应值为 `true` 的空对象。它的[原型是 `null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)，因此不会意外地使 `Object.prototype` 属性（比如 [`toString`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)）变为非作用域属性，而令在 `with` 语句中调用数组的 `toString()` 方法仍然有效。

请参阅 {{jsxref("Symbol.unscopables")}} 了解如何为自定义对象设置非作用域属性。

## 示例

假设下面的 `keys.push('something')` 是在 ECMAScript 2015 之前编写的代码中调用的。

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}
```

当 ECMAScript 2015 引入 {{jsxref("Array.prototype.keys()")}} 方法时，如果 `@@unscopables` 数据属性也没有被引入，那么 `keys.push('something')` 调用将会出现问题——因为 JavaScript 运行时会将 `keys` 解释为 {{jsxref("Array.prototype.keys()")}} 方法，而不是示例代码中定义的 `keys` 数组。

因此，`Array.prototype` 的 `@@unscopables` 数据属性使得 ECMAScript 2015 中引入的 `Array` 属性在 `with` 语句绑定时被忽略，从而使得在 ECMAScript 2015 之前编写的代码继续按预期工作，而不会出现问题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype[@@unscopables]` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Symbol.unscopables")}}
