---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
---

{{JSRef}}

`TypedArray.of()` 方法创建一个具有可变数量参数的新[类型数组](/zh-CN/docs/)。此方法几乎与 {{jsxref("Array.of()")}} 相同。

## 语法

```js-nolint
TypedArray.of(element0)
TypedArray.of(element0, element1)
TypedArray.of(element0, element1, /* ... ,*/ elementN)
```

### 参数

- `elementN`
  - : 创建类型数组的元素。

### 返回值

一个新的 {{jsxref("TypedArray")}} 实例。

## 描述

{{jsxref("Array.of()")}} 和 `TypedArray.of()` 之间的一些细微区别：

- 如果传递给 TypedArray.of 的这个值不是构造函数，TypedArray.of 将抛出一个{{jsxref("TypeError")}} ，其中 Array.of 默认创建一个新的 {{jsxref("Array")}}。
- `TypedArray.of` 使用 \[\[Put]] 其中 Array.of 使用 \[\[DefineProperty]]。因此，当使用{{jsxref("Proxy")}} 对象时，它调用 {{jsxref("Global_Objects/Proxy/handler/set", "handler.set")}} 创建新的元素，而不是 {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty")}}。

## 范例

```js
Uint8Array.of(1); // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3); // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined); // IntArray [ 0 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
