---
title: TypedArray.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
---

{{JSRef}}

**`set()`** 方法用于从指定数组中读取值，并将其存储在类型化数组中。

## 语法

```js-nolint
set(array)
set(array, targetOffset)

set(typedarray)
set(typedarray, targetOffset)
```

### 参数

- `array`
  - : 拷贝数据的源数组，源数组的所有值都会被复制到目标数组中，除非源数组的长度加上偏移量超过目标数组的长度，而在这种情况下会抛出异常。参数 array 是源数组，指定从哪里拷贝值。源数组中的所有值都会被拷贝到目标数组中去。如果源数组的长度加上偏移值 offset 的结果超过目标数组的长度，则会抛出异常错误。
- `typedarray`
  - : 如果源数组是一个类型化数组（typed array），则源数组和目标数组可以共享同一个底层的{{jsxref("ArrayBuffer")}}；JavaScript 引擎会智能地将 buffer 的指定区段拷贝到目标区段中去。
- `offset` {{ optional_inline() }}
  - : 偏移量参数 offset 指定从什么地方开始使用源数组 `array` 的值进行写入操作。如果忽略该参数，则默认为 0（也就是说，从目标数组的下标为 0 处开始，使用源数组 `array` 的值覆盖重写）。

### 异常

- {{jsxref("RangeError")}}
  - : 如果指定的偏移量超出了类型化数组的范围，则该异常会被抛出。

## 示例

### 使用 `set()`

```js
var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
