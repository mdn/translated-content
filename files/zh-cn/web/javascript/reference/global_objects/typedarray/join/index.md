---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
---

{{JSRef}}

**`join()`** 方法将数组中所有元素连接为一个字符串。这个方法的算法和 {{jsxref("Array.prototype.join()")}} 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 语法

```js-nolint
join()
join(separator)
```

### 参数

- `separator`
  - : 可选。指定分隔每个元素的字符串。分隔符按需转换为字符串。如果没有，类型化数组的元素会以逗号 (",") 分隔。

### 返回值

所有元素连接后的字符串。

## 示例

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
uint8.join(""); // '123'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `TypedArray.prototype.join` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
