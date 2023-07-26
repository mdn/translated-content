---
title: TypedArray.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/values
---

{{JSRef}}

**`values()`** 返回新的 `Array Iterator` 对象，包含数组中每个下标处的值。

## 语法

```plain
arr.values()
```

### 返回值

新的 **`Array Iterator`** 对象。

## 示例

### 使用`for...of` 循环的迭代

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.values();
// 你的浏览器必须支持 for..of 循环
// 以及 for 循环中的 let 区域变量
for (let n of eArray) {
  console.log(n);
}
```

### 备选迭代

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.values();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
