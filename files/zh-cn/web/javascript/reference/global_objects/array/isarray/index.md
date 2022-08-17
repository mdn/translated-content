---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
---
{{JSRef}}

**Array.isArray()** 用于确定传递的值是否是一个 {{jsxref("Array")}}。

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

## 语法

```plain
Array.isArray(obj)
```

### 参数

- `obj`
  - : 需要检测的值。

### 返回值

如果值是 {{jsxref("Array")}}，则为 `true`；否则为 `false`。

## 描述

如果对象是 {{jsxref("Array")}}，则返回 `true`，否则为 `false`。

有关更多详细信息，请参阅文章[严格判定 JavaScript 对象是否为数组](http://web.mit.edu/jwalden/www/isArray.html)。

See the article [“Determining with absolute accuracy whether or not a JavaScript object is an array”](http://web.mit.edu/jwalden/www/isArray.html) for more details. Given a {{jsxref("TypedArray")}} instance, `false` is always returned.

## 示例

```js
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'))
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

// Correctly checking for Array
Array.isArray(arr);  // true
// Considered harmful, because doesn't work through iframes
arr instanceof Array; // false
```

## Polyfill

假如不存在 Array.isArray()，则在其他代码之前运行下面的代码将创建该方法。

```js
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Array")}}
