---
title: TypedArray.prototype.subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
---

{{JSRef}}`subarray()` 返回一个新的、基于相同 {{jsxref("ArrayBuffer")}}、元素类型也相同的的 _TypedArray_。开始的索引将会被包括，而结束的索引将不会被包括。_TypedArray_ 是指 [typed array types](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 的其中之一。

{{EmbedInteractiveExample("pages/js/typedarray-subarray.html")}}

## 用法

```js-nolint
subarray()
subarray(begin)
subarray(begin, end)
```

### 参数

- begin {{optional_inline}}
  - : 元素开始的索引，开始索引的元素将会被包括。若该值没有传入，将会返回一个拥有全部元素的数组。
- end {{optional_inline}}
  - : 元素结束的索引，结束索引的元素将**不会**被包括。若该值没有传入，从 `begin` 所指定的那一个元素到数组末尾的所有元素都将会被包含进新数组中。

### 返回值

一个新的 {{jsxref("TypedArray")}} 对象。

## 说明

- 被 `begin` 和 `end` 指定的范围将会收束与当前数组的有效索引
- 若计算后得出的长度是负数，将会被收束成 0
- 若 `begin` 或 `end` 是负数，将会被当做成是从数组末端读取的索引

需要注意的是，使用该方法返回的新数组还是建立在原有的 Buffer 之上的，所以，改动数组的内容将会影响到原数组，反之亦然。

## Examples

### Using the `subarray` method

```js
var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);

console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

var sub = uint8.subarray(0, 4);

console.log(sub); // Uint8Array [ 1, 2, 3, 0 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
