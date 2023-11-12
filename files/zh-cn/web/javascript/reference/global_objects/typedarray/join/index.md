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

## Polyfill

由于没有名为*TypedArray*的全局元素，polyfill 必须"按情况"实现。

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
if (!Uint8Array.prototype.join) {
  Object.defineProperty(Uint8Array.prototype, "join", {
    value: Array.prototype.join,
  });
}
```

如果你需要支持过时的 JavaScript 引擎，它们不支持[`Object.defineProperty`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)，最好不要 polyfill `Array.prototype` 方法，因为你不能使它们不可枚举。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.join()")}}
