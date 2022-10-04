---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
---

{{JSRef}}

**`Array.isArray()`** 用于确定传递的值是否是一个 {{jsxref("Array")}}。

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

## 语法

```js
Array.isArray(value)
```

### 参数

- `value`
  - : 需要检测的值。

### 返回值

如果值是 {{jsxref("Array")}}，则为 `true`；否则为 `false`。

## 描述

如果对象是 {{jsxref("Array")}}，则返回 `true`，否则为 `false`。

有关更多细节，请参阅文章[“确定 JavaScript 对象是否为数组”](https://web.mit.edu/jwalden/www/isArray.html)。给定一个 {{jsxref("TypedArray")}} 实例，总是返回 `false`。

## 示例

```js
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'))
Array.isArray(new Array(3));
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` VS `isArray`

当检测 `Array` 实例时，`Array.isArray` 优于 `instanceof`，因为 `Array.isArray` 能检测 `iframes`。

```js
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
const arr = new xArray(1,2,3); // [1,2,3]

// 正确检查 Array
Array.isArray(arr);  // true
// Considered harmful, because doesn't work through iframes
arr instanceof Array; // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.isArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
