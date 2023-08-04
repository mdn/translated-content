---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
---

{{JSRef}}

**`Array.isArray()`** 静态方法用于确定传递的值是否是一个 {{jsxref("Array")}}。

{{EmbedInteractiveExample("pages/js/array-isarray.html")}}

## 语法

```js-nolint
Array.isArray(value)
```

### 参数

- `value`
  - : 需要检测的值。

### 返回值

如果 `value` 是 {{jsxref("Array")}}，则为 `true`；否则为 `false`。如果 `value` 是 {{jsxref("TypedArray")}} 实例，则总是返回 `false`。

## 描述

`Array.isArray()` 检查传递的值是否为 {{jsxref("Array")}}。它不检查值的原型链，也不依赖于它所附加的 `Array` 构造函数。对于使用数组字面量语法或 `Array` 构造函数创建的任何值，它都会返回 `true`。这使得它可以安全地使用跨领域（cross-realm）对象，其中 `Array` 构造函数的标识是不同的，因此会导致 [`instanceof Array`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 失败。

有关更多细节，请参阅文章[“确定 JavaScript 对象是否为数组”](https://web.mit.edu/jwalden/www/isArray.html)。

`Array.isarray()` 也拒绝原型链中带有 `Array.prototype`，而实际不是数组的对象，但 `instanceof Array` 会接受。

## 示例

### 使用 Array.isArray()

```js
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// 鲜为人知的事实：其实 Array.prototype 也是一个数组：
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// 这不是一个数组，因为它不是使用数组字面量语法或 Array 构造函数创建的
Array.isArray({ __proto__: Array.prototype });
```

### instanceof vs. Array.isArray()

当检测 `Array` 实例时，`Array.isArray` 优于 `instanceof`，因为 `Array.isArray` 能跨领域工作。

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// 正确检查 Array
Array.isArray(arr); // true
// arr 的原型是 xArray.prototype，它是一个不同于 Array.prototype 的对象
arr instanceof Array; // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.isArray` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
