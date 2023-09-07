---
title: ArrayBuffer.isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
---

{{JSRef}}

**`ArrayBuffer.isView()`** 方法用来判断传入的参数值是否是一种 `ArrayBuffer` 视图（view），比如类型化数组对象（[typed array objects](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)）或者数据视图（ {{jsxref("DataView")}}）。

{{EmbedInteractiveExample("pages/js/arraybuffer-isview.html")}}

## 语法

```js-nolint
ArrayBuffer.isView(value)
```

### 参数

- `value`
  - : 被检测的值。

### 返回值

- `true`
  - : 如果提供的参数是一种 {{jsxref("ArrayBuffer")}} 视图；
- `false`
  - : 提供的参数不是一种 {{jsxref("ArrayBuffer")}} 视图类型；

## 示例

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

var buffer = new ArrayBuffer(2);
var dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
